import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ItemAddonDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: '6fg6zdf46',
    description: 'The unique identifier for the item addon.',
  })
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    example: 'Addon Name',
    description: 'The title or name of the item addon.',
  })
  title: string;
}
