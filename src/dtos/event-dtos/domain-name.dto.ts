import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsString,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { DurationEnum } from '../../enums/duration.enum';
import { DomainContactDto } from './domain-contact.dto';
import { ProductDataDto } from './product-data.dto';

class DomainContacts {
  @IsDefined()
  @ApiProperty({ type: DomainContactDto })
  registrant: DomainContactDto;

  @IsDefined()
  @ApiProperty({ type: DomainContactDto })
  admin: DomainContactDto;

  @IsDefined()
  @ApiProperty({ type: DomainContactDto })
  tech: DomainContactDto;

  @IsDefined()
  @ApiProperty({ type: DomainContactDto })
  billing: DomainContactDto;
}
class DomainDto {
  @IsString()
  @ApiProperty({ type: String })
  domainName: string;

  @IsEnum(DurationEnum)
  @ApiProperty({ enum: DurationEnum })
  duration: DurationEnum;

  @IsDefined()
  @ApiProperty({ type: DomainContacts })
  domainContacts: DomainContacts;

  @IsOptional()
  @ApiPropertyOptional({ isArray: true })
  nameServers?: string[]; //NameserverDto[];

  @IsOptional()
  @ApiPropertyOptional({ type: String })
  password?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  locked?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  idShield?: boolean;

  @IsOptional()
  additional?: string[]; //DomainAdditionalDto;
}
export class DomainNameDto {
  @IsDefined()
  @IsObject()
  @ApiProperty({ type: DomainDto })
  domainData: DomainDto;

  @IsDefined()
  @IsObject()
  @ApiProperty({ type: ProductDataDto })
  productData: ProductDataDto;
}

export class DomainNamesDto {
  count: number;
  domain_names: DomainNameDto[];
}
