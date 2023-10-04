import { InfoResponseDto } from '../responses.dto';
import { InvoiceInfoDto } from './intergration-dtos-types/invoice-info.dto';
import { NotificationInfoDto } from './intergration-dtos-types/notifications-info.dto';
import { ProductInfoDto } from './intergration-dtos-types/product-info.dto';

export class ServiceProviderDto {
  id: string;
  info: NotificationInfoDto | InvoiceInfoDto | ProductInfoDto | InfoResponseDto; // payment + domain name to be added
}

export class ServiceProvidersDto {
  count: number;
  service_providers: ServiceProviderDto[];
}
