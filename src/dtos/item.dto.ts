import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer'; // Import class-transformer for nested validation
import { DurationEnum } from '../enums/duration.enum';
import { ActionsEnum } from '../enums/actions.enum';
import { PricesDto } from './price.dto';
import { ItemAddonDto } from './item-addon.dto';

export class ItemDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '5ce45d7606444f199acfba1e',
    description: 'The unique identifier for the item.',
  })
  id: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '5ce45d7606444f199acfba1e',
    description: 'The product ID associated with the item.',
  })
  product_id: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: 'Bronze Plesk',
    description: 'The name of the product.',
  })
  product_name: string;

  @IsOptional()
  @IsEnum(ActionsEnum)
  @ApiProperty({
    enum: ActionsEnum,
    required: false,
    description: 'The action associated with the item.',
  })
  action?: ActionsEnum;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: 'Product',
    description: 'The title of the category.',
  })
  category_title: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '684sdfgs68d7f9sd',
    description: 'The ID of the category.',
  })
  category_id: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemAddonDto)
  @ApiProperty({
    example: [
      {
        addonId: '5ce45d7606444f199acfba1e',
        value: 3,
      },
    ],
    required: false,
    description: 'An array of addons associated with the item.',
  })
  addons?: ItemAddonDto[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PricesDto)
  @ApiProperty({
    type: PricesDto,
    required: true,
    description: 'The price information for the item.',
  })
  price: PricesDto;

  @IsNotEmpty()
  @IsEnum(DurationEnum)
  @ApiProperty({
    type: Number,
    required: true,
    enum: DurationEnum,
    example: DurationEnum.ONE_YEAR,
    description:
      'The duration of the item in a specific unit (e.g., days, months, years).',
  })
  duration: DurationEnum;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: false,
    title: 'Start Date',
    example: '2019-09-26T07:58:30.996+0000',
    description: 'The start date for the item.',
  })
  startDate?: Date;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: false,
    title: 'End Date',
    example: '2019-09-26T07:58:30.996+0000',
    description: 'The end date for the item.',
  })
  endDate?: Date;
}
