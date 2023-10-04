export class CouponDto {
  id: string;
  coupon_name: string;
  discount_percentage?: number;
}

export class CouponsDto {
  coupons: CouponDto[];
}
