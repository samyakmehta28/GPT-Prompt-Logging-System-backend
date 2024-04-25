import { IsString, IsNotEmpty, ValidateNested, IsIn } from 'class-validator';

// Create a class-validator class called MetadataDto
export class MetadataDto {
    @IsString()
    @IsNotEmpty()
    user: string;
  
    @IsString()
    @IsIn (['production', 'development', 'testing'])
    environment: string;
  
    @IsString()
    @IsIn(['gpt-4-turbo-2024-04-09', 'gpt-4-0125-preview', 'gpt-3-5-turbo', 'gpt-4'])
    model: string;
  }
  
  // Create a class-validator class called CreateProxyApiDto that uses the MetadataDto class as a nested object
  export class CreateProxyApiDto {
    @IsString()
    @IsNotEmpty()
    prompt: string;
  
    @ValidateNested()
    @IsNotEmpty()
    metadata: MetadataDto;
  }