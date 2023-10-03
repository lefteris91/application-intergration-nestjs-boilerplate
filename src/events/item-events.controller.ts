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
import { ItemDto } from '../dtos/item.dto';

@Controller('event')
@ApiTags('Item Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class ItemEventController {
  @ApiResponse({
    status: 201,
    description: 'Item created successfully',
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
  @Post(EventsEnum.ITEM_CREATED)
  async createItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Item updated successfully',
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
  @Post(EventsEnum.ITEM_UPDATED)
  async updateItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Item deleted successfully',
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
  @Post(EventsEnum.ITEM_DELETED)
  async deleteItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Item Ip attached successfully',
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
  @Post(EventsEnum.ITEM_IP_ATTACHED)
  async attachIpToItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { IP: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item ip detached successfully',
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
  @Post(EventsEnum.ITEM_IP_DETACHED)
  async detachIpfromItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { IP: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item detached from order successfully',
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
  @Post(EventsEnum.ITEM_DETACHED_FROM_ORDER)
  async detachItemFromOrder(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { Order: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item postponed successfully',
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
  @Post(EventsEnum.ITEM_POSTPONED)
  async postponeItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item transfered in successfully',
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
  @Post(EventsEnum.ITEM_TRANSFERRED_IN)
  async transferedItemIn(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { transferredIn: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item cancelled successfully',
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
  @Post(EventsEnum.ITEM_CANCELED)
  async cancelItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item suspended successfully',
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
  @Post(EventsEnum.ITEM_SUSPENDED)
  async suspendItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item affiliate added successfully',
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
  @Post(EventsEnum.ITEM_AFFILIATE_ADDED)
  async addedItemToAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { Affiliate: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item bundle attached successfully',
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
  @Post(EventsEnum.ITEM_BUNDLE_ATTACHED)
  async attatchItemToBundle(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { Bundle: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item bundle dettached successfully',
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
  @Post(EventsEnum.ITEM_BUNDLE_DETACHED)
  async dettachItemFromBundle(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto & { Bundle: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item set inactive successfully',
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
  @Post(EventsEnum.ITEM_SET_INACTIVE)
  async setItemInactive(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
  @ApiResponse({
    status: 201,
    description: 'Item proccessed successfully',
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
  @Post(EventsEnum.ITEM_PROCESSED)
  async proccessItem(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ItemDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
