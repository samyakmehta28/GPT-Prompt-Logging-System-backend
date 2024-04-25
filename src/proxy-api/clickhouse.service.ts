import { Injectable, Res } from '@nestjs/common';
import { createClient } from '@clickhouse/client';
import type { ClickHouseSettings } from '@clickhouse/client';
import { HttpException, HttpStatus } from '@nestjs/common';
import { QueryParamsDto } from './dto/QueryParams.dto';

// ClickHouseService class
// This class is responsible for storing and querying data from the ClickHouse dataset

@Injectable()
export class ClickHouseService {
    private readonly client = createClient({
        host: 'https://srys2v1np9.us-central1.gcp.clickhouse.cloud:8443',
        username: 'default',
        password: 'Z14WmXwnna~TL',
    });

   //store data in dataset (POST request) 
  async storeDataInDataset(responseAPI: any) {
    const commandSettings: ClickHouseSettings = {
      wait_end_of_query: 1,
    };
  
    try {
      // Insert the response object into the PromptDatabase table
      await this.client.insert({
        table: 'PromptDatabase',
        format: 'JSONEachRow',
        values: responseAPI,
      });
  
      console.log('Response inserted into ClickHouse dataset successfully');
    } catch (error) {
        console.error('Error inserting data into ClickHouse:', error);
        throw new HttpException('Error inserting data into ClickHouse', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //get data from dataset (GET request)
  async queryData(queryParamsDto: QueryParamsDto) {
    const { filters, timePeriod } = queryParamsDto;
    try {
      let query = 'SELECT * FROM PromptDatabase';

      if (filters) {
        const conditions = Object.keys(filters)
          .map(key => `${key} = '${filters[key]}'`)
          .join(' AND ');
        query += ` WHERE ${conditions}`;
      }

      if (timePeriod) {
        let timeFilter = '';
        const unixTimestamp = Date.now();
        const match = timePeriod.match(/last(\d+)(\w+)/);

        if (match) {
            const [, num, unit] = match;
            let timeInMillis;

            switch (unit) {
                case 'minutes':
                timeInMillis = parseInt(num) * 60 * 1000;
                break;
                case 'hours':
                timeInMillis = parseInt(num) * 60 * 60 * 1000;
                break;
                case 'days':
                timeInMillis = parseInt(num) * 24 * 60 * 60 * 1000;
                break;
                default:
                break;
            }

            if (filters && timeInMillis) {
                timeFilter = ` AND Created_At >= ${unixTimestamp - timeInMillis}`;
            }
            else if(timeInMillis){
                timeFilter = ` WHERE Created_At >= ${unixTimestamp - timeInMillis}`;
            }
        }
        query += timeFilter;
      }

      query += ' ORDER BY Created_At DESC';
      console.log(query);
      const rows = await this.client.query({
        query: query,
        format: 'JSONEachRow',
      });

      const data = await rows.json();
      return { data };
    } catch (error) {
        console.error('Error fetching data from ClickHouse:', error);
        throw new HttpException('Error fetching data from ClickHouse', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async queryDataTokens(data: any) {
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    for (const entry of data) {
      totalInputTokens += entry.Input_Tokens || 0;
      totalOutputTokens += entry.Output_Tokens || 0;
    }

    return { totalInputTokens, totalOutputTokens };
  }
}