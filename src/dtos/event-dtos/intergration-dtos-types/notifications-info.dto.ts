import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBase64,
  IsEnum,
  IsObject,
} from 'class-validator';
import { TabDto } from './product-info.dto';
import { MessageTypeEnum } from '../../../enums/message-type.enum';

export class NotificationInfoDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Name of the Integration',
    example: 'Twilio SMS',
  })
  name: string;

  @IsString()
  @IsOptional()
  @IsBase64()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Base64-encoded logo',
    example: 'base64encodedlogo...',
  })
  logo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Description of the integration',
    example: 'Integration description',
  })
  description?: string;

  @IsEnum(MessageTypeEnum)
  @ApiProperty({
    enum: MessageTypeEnum,
    description: 'Type of the integration',
    example: MessageTypeEnum.EMAIL,
  })
  type: MessageTypeEnum;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: Object,
    required: false,
    description:
      'Settings for the Integration as required by the Service being Integrated. Key is the name of the setting and the value is a description of it and what it is used for.',
    example: { key1: 'value1', key2: 'value2' },
  })
  settings?: Record<string, any>;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: [TabDto],
    required: false,
    description: 'Notification Integration tabs',
    example: [
      {
        label: 'Tab 1',
        url: 'https://example.com/tab1',
      },
    ],
  })
  notificationTabs?: TabDto[];
}
