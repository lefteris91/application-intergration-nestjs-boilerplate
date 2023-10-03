import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentMethodsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '1',
    description: 'The unique identifier for the payment method.',
  })
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: 'Credit Card',
    description: 'The title or name of the payment method.',
  })
  title: string;
}
