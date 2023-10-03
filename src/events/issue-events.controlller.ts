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
@ApiTags('Issue Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class IssueEventController {
  @ApiResponse({
    status: 201,
    description: 'Issue created successfully',
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
  @Post(EventsEnum.ISSUE_CREATED)
  async createIssue(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { Issue: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Issue updated successfully',
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
  @Post(EventsEnum.ISSUE_UPDATED)
  async updateIssue(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { Issue: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Issue deleted successfully',
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
  @Post(EventsEnum.ISSUE_DELETED)
  async deleteIssue(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { Issue: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }
}
