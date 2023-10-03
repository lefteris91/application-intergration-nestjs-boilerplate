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
import { InvoiceContactDto } from '../dtos/invoice-contact.dto';
import { JwtPayloadRequest } from '../dtos/jwt-payload.request';
import { TaskResponseDto, ErrorResponseDto } from '../dtos/responses.dto';
import { UserDataDto } from '../dtos/user-data,dto';
import { EventsEnum } from '../enums/events.enum';

@Controller('event')
@ApiTags('Company Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class CompanyEventController {
  @ApiResponse({
    status: 200,
    description: 'Company created successfully',
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
  @Post(EventsEnum.COMPANY_CREATED)
  async createCompany(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Company updated successfully',
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
  @Post(EventsEnum.COMPANY_UPDATED)
  async updateCompany(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Company deleted successfully',
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
  @Post(EventsEnum.COMPANY_DELETED)
  async deleteCompany(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Provider attached to company successfully',
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
  @Post(EventsEnum.COMPANY_PROVIDER_ATTACHED)
  async attachProviderToCompany(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Provider detached to company successfully',
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
  @Post(EventsEnum.COMPANY_PROVIDER_DETACHED)
  async detachProviderToCompany(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
