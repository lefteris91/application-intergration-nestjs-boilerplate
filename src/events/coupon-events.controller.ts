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
import { CouponsDto } from '../dtos/event-dtos/coupon.dto';

@Controller('event')
@ApiTags('Coupon Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class CouponEventController {
  @ApiResponse({
    status: 200,
    description: 'Coupon created successfully',
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
  @Post(EventsEnum.COUPON_CREATED)
  async createCoupon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: CouponsDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Coupon updated successfully',
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
  @Post(EventsEnum.COUPON_UPDATED)
  async updateCoupon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: CouponsDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Coupon deleted successfully',
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
  @Post(EventsEnum.COUPON_DELETED)
  async deleteCoupon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: CouponsDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
