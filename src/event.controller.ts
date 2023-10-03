import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { EventsEnum } from '../src/enums/events.enum';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';
import { ProductDataDto } from './dtos/product-data.dto';
import { AuthGuard } from './auth/auth.guard';
import { ApiExceptionFilter } from './api.exception.filter';
import { senderIsHoster, hasAdminRights } from './auth/auth.interceptors';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ErrorResponseDto, TaskResponseDto } from './dtos/responses.dto';
import { InvoiceContactDto } from './dtos/invoice-contact.dto';

@Controller('event')
@ApiTags('Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class EventController {
  @ApiResponse({
    status: 201,
    description: 'Contact created successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.INVOICE_CONTACT_CREATED)
  async createContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceContactDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Contact updated successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.INVOICE_CONTACT_UPDATED)
  async updateContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceContactDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Contact deleted successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.INVOICE_CONTACT_DELETED)
  async deleteContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceContactDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product created successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.PRODUCT_CREATED)
  async createProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ProductDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product updated successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.PRODUCT_UPDATED)
  async updateProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceContactDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product deleted successfully',
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
  @HttpCode(201)
  @Post(EventsEnum.PRODUCT_DELETED)
  async deleteProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceContactDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
