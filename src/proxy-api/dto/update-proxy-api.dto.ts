import { PartialType } from '@nestjs/mapped-types';
import { CreateProxyApiDto } from './create-proxy-api.dto';

export class UpdateProxyApiDto extends PartialType(CreateProxyApiDto) {}
