export class PolicyDto {
  id: string;
  title: string;
  description: string;
}

export class PoliciesDto {
  policies: PolicyDto[];
}
