export class AffiliateDto {
  id: string;
  name: string;
  is_company: boolean;
  company_id?: string;
}

export class AffiliatesDto {
  affiliates: AffiliateDto[];
}
