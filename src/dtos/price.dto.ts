import { IsNumber, IsPositive, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PricesDto {
  @ApiProperty({
    type: Number,
    required: false,
    description: 'The Value Added Tax (VAT) amount.',
    example: 15.0,
  })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  vat_price?: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'The Value Added Tax (VAT) percentage.',
    example: 15.0,
  })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  vat_percentage?: number;

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Price of item without Vat and fee price',
    example: 100.0,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
