import { IpDto } from './product-data.dto';

export class IpGroupDto {
  name: string;
  ip_addresses: IpDto[];
  group_id: string;
}

export class IpGroups {
  count: number;
  ip_groups: IpGroupDto[];
}
