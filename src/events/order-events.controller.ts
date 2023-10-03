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
@ApiTags('Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class EventController {
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
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
  @Post(EventsEnum.ORDER_CREATED)
  async createOrder(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { order: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order status is in progress',
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
  @Post(EventsEnum.ORDER_STATUS_INPROGRESS)
  async setOrderStatusInProgress(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { orderStatus: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order status is completed',
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
  @Post(EventsEnum.ORDER_STATUS_COMPLETED)
  async setOrderStatusCompleted(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { orderStatus: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order status is Cancelled',
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
  @Post(EventsEnum.ORDER_STATUS_CANCELED)
  async setOrderStatusCancelled(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { orderStatus: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order status is refunded',
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
  @Post(EventsEnum.ORDER_STATUS_REFUNDED)
  async setOrderStatusRefunded(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { orderStatus: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'insufficient balance',
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
  @Post(EventsEnum.ORDER_INSUFFICIENT_BALANCE)
  async OrderInsufficientBalance(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { order: object; balance: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order deleted successfully',
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
  @Post(EventsEnum.ORDER_DELETED)
  async deleteOrder(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { order: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Order paied successfully',
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
  @Post(EventsEnum.ORDER_PAID)
  async payOrder(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { order: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
