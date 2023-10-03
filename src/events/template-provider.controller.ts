/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Request,
  Body,
  Controller,
  HttpCode,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ApiExceptionFilter } from '../api.exception.filter';
import { senderIsHoster, hasAdminRights } from '../auth/auth.interceptors';
import { JwtPayloadRequest } from '../dtos/jwt-payload.request';
import { TaskResponseDto, ErrorResponseDto } from '../dtos/responses.dto';
import { EventsEnum } from '../enums/events.enum';

@Controller('event')
@ApiTags('Template Provider Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class TemplateProviderEventController {
  @ApiResponse({
    status: 200,
    description: 'Template provider created successfully',
    schema: {
      oneOf: [
        { type: 'object', properties: { success: { type: 'boolean' } } },
        { $ref: getSchemaPath(TaskResponseDto) },
      ],
    },
  })
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  })
  @HttpCode(200)
  @Post(EventsEnum.TEMPLATE_PROVIDER_CREATED)
  async createTemplateProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Template provider updated successfully',
    schema: {
      oneOf: [
        { type: 'object', properties: { success: { type: 'boolean' } } },
        { $ref: getSchemaPath(TaskResponseDto) },
      ],
    },
  })
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  })
  @HttpCode(200)
  @Post(EventsEnum.TEMPLATE_PROVIDER_UPDATED)
  async updateTemplateProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Template provider deleted successfully',
    schema: {
      oneOf: [
        { type: 'object', properties: { success: { type: 'boolean' } } },
        { $ref: getSchemaPath(TaskResponseDto) },
      ],
    },
  })
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  })
  @HttpCode(200)
  @Post(EventsEnum.TEMPLATE_PROVIDER_DELETED)
  async deleteTemplateProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
