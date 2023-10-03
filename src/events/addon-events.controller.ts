import {
  Request,
  Controller,
  UseGuards,
  UseInterceptors,
  UseFilters,
  HttpCode,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiExceptionFilter } from '../api.exception.filter';
import { AuthGuard } from '../auth/auth.guard';
import { senderIsHoster, hasAdminRights } from '../auth/auth.interceptors';
import { JwtPayloadRequest } from '../dtos/jwt-payload.request';
import { TaskResponseDto, ErrorResponseDto } from '../dtos/responses.dto';
import { EventsEnum } from '../enums/events.enum';

@Controller('event')
@ApiTags('Addon Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class AddonEventController {
  @ApiResponse({
    status: 200,
    description: 'Addon created successfully',
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
  @Post(EventsEnum.ADDON_CREATED)
  async createAddon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Addon updated successfully',
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
  @Post(EventsEnum.ADDON_UPDATED)
  async updateAddon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Addon deleted successfully',
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
  @Post(EventsEnum.ADDON_DELETED)
  async deleteAddon(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
