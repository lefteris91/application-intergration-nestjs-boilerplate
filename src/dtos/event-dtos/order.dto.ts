import { AddressDto } from '../address.dto';
import { PricesDto } from '../price.dto';
import { UserDataDto } from '../user-data,dto';
import { CompanyDto } from './company.dto';
import { CouponDto } from './coupon.dto';
import { CurrencyDto } from './currency.dto';
import { ItemDto } from './item.dto';

export class OrderDto {
  order_id: string;
  items: ItemDto[];
  currency: CurrencyDto;
  timestamp: Date;
  price: PricesDto;
  company: CompanyDto;
  user: UserDataDto;
  coupons?: CouponDto[];
  total_amount: number;
  billing_address: AddressDto;
}

export class OrdersDto {
  count: number;
  orders: OrderDto;
}
