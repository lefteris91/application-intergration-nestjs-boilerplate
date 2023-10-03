import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBase64,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { TabDto } from './application-tabs.dto';

export class ErrorResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Error ID',
    example: 'error123',
  })
  id: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    type: [String] || String,
    required: false,
    description: 'Array of error messages',
    example: ['Error message 1', 'Error message 2'],
  })
  errors?: string[] | string;
}

export class InfoResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Name of the Integration',
    example: 'Elorus',
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
    example: 'Application description',
  })
  description?: string;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: [TabDto],
    required: false,
    description: 'Application Integration tabs',
    example: [
      {
        label: 'Tab 1',
        url: 'https://example.com/tab1',
      },
    ],
  })
  applicationTabs?: TabDto[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    type: [String],
    required: true,
    description:
      'Events from hoster the integration is listening to if empty the intergration does not listen to any events',
    example: [`event/`],
  })
  listenEvents: string[];
}

export class TaskResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    readOnly: true,
    description:
      'This is the taskId returned by the provider when an operation cannot be done immediately, thus indicating that the operation has started.',
  })
  taskId: string;
}
