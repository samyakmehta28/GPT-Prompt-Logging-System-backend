import { IsOptional, IsString, IsIn, ValidateNested } from 'class-validator';

// Create a class-validator class called FiltersDto
export class FiltersDto {
  @IsOptional()
  @IsString()
  @IsIn(['gpt-4-turbo-2024-04-09', 'gpt-4-0125-preview', 'gpt-3-5-turbo', 'gpt-4'])
  Model?: string;

  
  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsString()
  @IsIn (['failed', 'successful'])
  Status?: string;

  @IsOptional()
  @IsString()
  @IsIn (['production', 'development', 'testing'])
  environment?: string;
}
// Create a class-validator class called QueryParamsDto that uses the FiltersDto class as a nested object
// Using this to filter the data based on the query parameters
export class QueryParamsDto {
  @IsOptional()
  @IsString()
  @IsIn (['last5minutes', 'last30minutes', 'last1hours', 'last6hours', 'last1days','last7days', 'last30days'])
  timePeriod?: string;

  @IsOptional()
  @ValidateNested()
  filters?: FiltersDto;
}