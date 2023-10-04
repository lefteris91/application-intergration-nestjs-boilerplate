import {
  IsOptional,
  IsMongoId,
  IsDefined,
  IsEnum,
  IsIP,
  IsNumber,
} from 'class-validator';
import { DurationEnum } from '../../enums/duration.enum';
import { IpTypeEnum } from '../../enums/ip-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class IpDto {
  @IsIP()
  @IsDefined()
  @ApiProperty({
    type: String,
    description: 'IP Address',
    example: '192.168.1.1',
    format: 'ipv4',
  })
  address: string;

  @IsNumber()
  @IsDefined()
  @ApiProperty({
    type: Number,
    description: 'IP Range',
    example: 24,
    minimum: 0,
    maximum: 32,
  })
  range: number;

  @IsEnum(IpTypeEnum)
  @IsDefined()
  @ApiProperty({
    enum: IpTypeEnum,
    description: 'IP Type',
    enumName: 'IpTypeEnum',
  })
  type: IpTypeEnum;
}

export class ProductDataDto {
  @IsOptional()
  @IsMongoId()
  @ApiProperty({
    description: 'Product ID',
    format: 'objectId',
  })
  id: string;

  @IsDefined()
  @ApiProperty({
    type: Object,
    description: 'Product Attributes',
    example: { name: 'Product A', price: 19.99 },
  })
  product_attributes: Record<string, any>;

  @IsDefined()
  @ApiProperty({
    type: Object,
    description: 'Item Addons',
    example: { addon1: 'Option A', addon2: 'Option B' },
  })
  item_addons: Record<string, any>;

  @IsDefined()
  @ApiProperty({
    type: Object,
    description: 'Item Meta',
    example: { category: 'Podcast', price: 2.5 },
  })
  item_meta?: Record<string, any>;

  @IsDefined()
  @IsEnum(DurationEnum)
  @ApiProperty({
    enum: DurationEnum,
    description: 'Duration',
    example: DurationEnum.ONE_MONTH,
  })
  duration: DurationEnum;

  @IsOptional()
  @ApiProperty({
    type: [IpDto],
    description: 'Array of IP addresses',
    isArray: true,
    example: [
      {
        address: '192.168.0.1',
        range: 24,
        type: IpTypeEnum.IPv4,
      },
    ],
  })
  ips?: IpDto[];
}

export class ProductsDto {
  count: number;
  products: ProductDataDto[];
}
