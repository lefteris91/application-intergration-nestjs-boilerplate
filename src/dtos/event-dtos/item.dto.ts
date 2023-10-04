import {
  ApiResponseProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import {
  IsMongoId,
  IsOptional,
  IsString,
  IsEnum,
  IsObject,
  IsDefined,
  IsBoolean,
  IsNumber,
  IsArray,
  IsDateString,
} from 'class-validator';
import { ActionsEnum } from '../../enums/actions.enum';
import { DurationEnum } from '../../enums/duration.enum';
import { ItemAddonDto } from '../item-addon.dto';
import { PricesDto } from '../price.dto';
import { CurrencyDto } from './currency.dto';
import { ProductCategoryDto } from './product-category.dto';
import { ProductDataDto } from './product-data.dto';
import { AffiliateDto } from './affiliate.dto';

export class ItemDto {
  @IsMongoId()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
  })
  id?: string;

  @IsOptional()
  @ApiResponseProperty({
    type: String,
  })
  companyId?: string;

  @IsString()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: 'Bronze plesk',
  })
  name?: string;

  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: 'PRODUCT',
  })
  type?: string; //stringItemTypeEnum;

  @IsOptional()
  @IsMongoId()
  @ApiResponseProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
  })
  orderId?: string;

  @IsOptional()
  @ApiResponseProperty({
    enum: ActionsEnum,
  })
  action?: ActionsEnum;

  @IsOptional()
  @ApiResponseProperty()
  parentOrderId?: string;

  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: 'idle',
  })
  status: string; //ItemStatusEnum;

  @IsOptional()
  @ApiResponseProperty({
    type: ProductCategoryDto,
  })
  productCategoryDetails?: ProductCategoryDto;

  @IsOptional()
  @ApiResponseProperty({
    type: ProductDataDto,
  })
  productDetails: ProductDataDto;

  @IsOptional()
  @ApiResponseProperty({
    example: [
      {
        addonId: '5ce45d7606444f199acfba1e',
        value: 3,
      },
    ],
  })
  itemAddons?: ItemAddonDto[];

  @IsObject()
  @IsOptional()
  @ApiResponseProperty({
    type: CurrencyDto,
  })
  currency?: CurrencyDto;

  @IsOptional()
  @ApiResponseProperty({
    type: Object,
  })
  itemMeta?: Record<string, unknown>;

  @IsDefined()
  @ApiProperty({
    type: Object,
    additionalProperties: true,
    title: 'Product Attributes',
    example: {
      max_listeners: 15,
      hdd: '1G',
    },
    description:
      'These are all the attributes of the General Product as assigned by the Seller.',
  })
  productAttributes: Record<string, any>;

  @IsOptional()
  @IsBoolean()
  @ApiResponseProperty({
    type: Boolean,
    example: true,
  })
  autoRenew?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiResponseProperty({
    type: Boolean,
    example: true,
  })
  transferredOut?: boolean;

  @IsOptional()
  @IsMongoId()
  @ApiResponseProperty({
    type: String,
    example: '5ce45d7606444f199acfba1e',
  })
  transferredFromUserId?: string;

  @IsBoolean()
  @IsOptional()
  @ApiResponseProperty({
    type: Boolean,
    example: true,
  })
  expired?: boolean;

  @IsString()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: 'comment',
  })
  parentComment?: string;

  @IsString()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
    example: 'comment',
  })
  userComment?: string;

  @IsObject()
  @IsOptional()
  @ApiPropertyOptional({
    type: PricesDto,
  })
  price: PricesDto;

  @IsOptional()
  @IsNumber()
  @ApiResponseProperty({
    type: Number,
    enum: DurationEnum,
    example: DurationEnum.ONE_YEAR,
  })
  duration: DurationEnum;

  @IsMongoId({ each: true })
  @IsOptional()
  @IsArray()
  @ApiResponseProperty({
    type: String,
  })
  bundles?: string[];

  @IsMongoId()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
    // title: "id of items it is bundled with",
  })
  bundledWith?: string;

  @IsOptional()
  @ApiResponseProperty({
    example: ['5ce45d7606444f199acfba1e'],
  })
  ipIds?: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  @ApiResponseProperty({
    type: String,
  })
  additionalNotificationEmails?: string[];

  @IsOptional()
  @ApiResponseProperty()
  domainNameId?: string;

  @IsOptional()
  @ApiResponseProperty({
    type: AffiliateDto,
  })
  affiliateData?: AffiliateDto;

  @IsOptional()
  @IsString()
  @IsDateString({ strict: true })
  @ApiPropertyOptional({
    type: Date,
    title: 'start date',
    example: '2019-09-26T07:58:30.996+0000',
  })
  startDate?: Date;

  @IsOptional()
  @IsString()
  @IsDateString({ strict: true })
  @ApiPropertyOptional({
    type: Date,
    title: 'end date',
    example: '2019-09-26T07:58:30.996+0000',
  })
  endDate?: Date;

  @IsOptional()
  @ApiResponseProperty()
  timesPostponed?: Date[];

  @ApiResponseProperty()
  @IsOptional()
  meta?: unknown;

  @IsOptional()
  @ApiResponseProperty()
  createdAt?: Date;

  @IsOptional()
  @ApiResponseProperty()
  updatedAt?: Date;
}

export class ItemsDto {
  count: number;
  items: ItemDto[];
}
