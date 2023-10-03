import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CurrencyDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Three-letter currency code based on ISO 4217.',
  })
  currency: string;
}
