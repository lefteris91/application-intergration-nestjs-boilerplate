import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CountryEnum } from '../../enums/country.enum';

export class DomainContactDto {
  @ApiProperty({ description: 'domain contact' })
  id: string;

  @ApiPropertyOptional()
  providerId?: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiPropertyOptional()
  organization?: string;

  @ApiProperty()
  street1: string;

  @ApiPropertyOptional()
  street2?: string;

  @ApiPropertyOptional()
  street3?: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  countryCode: CountryEnum;

  @ApiProperty()
  telephone: string;

  @ApiPropertyOptional()
  fax?: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  contactType?: string; //ContactTypeEnum;

  @ApiPropertyOptional()
  additional?: string[]; //contactAdditionalDto;
}
