import {
  Controller,
  Get,
  UseFilters,
  UseGuards,
  UseInterceptors,
  HttpCode,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExceptionFilter } from './api.exception.filter';
import { AuthGuard } from './auth/auth.guard';
import { hasAdminRights, senderIsHoster } from './auth/auth.interceptors';
import { ApiOkResponse, ApiResponse , ApiTags } from '@nestjs/swagger';
import { ErrorResponseDto, InfoResponseDto } from './dtos/responses.dto';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @returns Promise<InfoResponseDto>
   */
  @ApiOkResponse({
    type: InfoResponseDto,
    description: 'Successful response with info data',
  }) // Define the response type and description
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  }) // Define the response type and description for internal server error
  @ApiTags('Info')
  @HttpCode(200)
  @Get('info')
  async info(
    @Request() request: Request & JwtPayloadRequest,
  ): Promise<InfoResponseDto> {
    return {
      name: 'The name of the invoice provider',
      logo: 'Logo of the provider',
      description: 'A description of the provider',
    };
  }
}
