export class TldDto {
  type: string;
  isCCTld?: boolean;
  isGeneralTld?: boolean;
  availabilityStatus?: string;
  registrationRequirements?: string;
}

export class TldsDto {
  tlds: TldDto[];
}
