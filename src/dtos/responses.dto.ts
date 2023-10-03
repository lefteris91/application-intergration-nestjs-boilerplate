import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBase64, IsOptional, IsString } from "class-validator";

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
      example: 'An application name',
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

}

export class TaskResponseDto {

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    readOnly: true,
    description:
      "This is the taskId returned by the provider when an operation cannot be done immediately, thus indicating that the operation has started.",
  })
  taskId: string;
  
}
