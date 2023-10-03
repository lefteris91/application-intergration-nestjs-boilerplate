import { ApiProperty } from '@nestjs/swagger'; // Import Swagger decorators as needed
import {
  IsNotEmpty,
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer'; // Import class-transformer for nested validation
import { InvoiceContactDto } from './invoice-contact.dto';
import { ItemDto } from './item.dto';
import { PaymentMethodsDto } from '../payment-methods.dto';

export class InvoiceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '5ce45d7606444f199acfba1e',
    description: 'The unique identifier for the invoice.',
  })
  id: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceContactDto)
  @ApiProperty({
    type: InvoiceContactDto,
    required: true,
    description: 'The contact information associated with the invoice.',
  })
  invoice_contact: InvoiceContactDto;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '123456',
    description: 'The order ID associated with the invoice.',
  })
  order_id: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  @ApiProperty({
    type: [ItemDto],
    required: true,
    description: 'An array of line items (items) included in the invoice.',
  })
  lines: ItemDto[];

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Processing Fee.',
    example: 5.0,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  fee_price?: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentMethodsDto)
  @ApiProperty({
    type: [PaymentMethodsDto],
    required: true,
    description: 'An array of payment methods used for the invoice.',
  })
  payment_methods: PaymentMethodsDto[];
  due_date: any;
}
