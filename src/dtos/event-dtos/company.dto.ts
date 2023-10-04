import { CountryEnum } from '../../enums/country.enum';

export class CompanyDto {
  company_id: string;
  title: string;
  telephone: string;
  mobile?: string;
  postcode?: string;
  city?: string;
  country?: CountryEnum;
  state?: string;
  address1: string;
  address2?: string;
  address3?: string;
}

export class CompaniesDto {
  companies: CompanyDto[];
}
