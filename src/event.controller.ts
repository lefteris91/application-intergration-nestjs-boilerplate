/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { UserDataDto } from './dtos/user-data,dto';

@Controller('event')
@ApiTags('Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class EventController {
  //User
  @ApiResponse({
    status: 200,
    description: 'User created successfully',
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
  @Post(EventsEnum.USER_CREATED)
  async createUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
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
  @Post(EventsEnum.USER_UPDATED)
  async updateUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
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
  @Post(EventsEnum.USER_DELETED)
  async deleteUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User banned successfully',
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
  @Post(EventsEnum.USER_BANNED)
  async banUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User unbanned successfully',
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
  @Post(EventsEnum.USER_UNBANNED)
  async unbanUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User added to org successfully',
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
  @Post(EventsEnum.USER_ADDED_ORGANIZATION_ACCESS)
  async addedUserOrganizationAccess(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User removed from org successfully',
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
  @Post(EventsEnum.USER_REMOVED_ORGANIZATION_ACCESS)
  async removedUserOrganizationAccess(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User locked successfully',
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
  @Post(EventsEnum.USER_LOCKED)
  async lockUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Users credit balance updated successfully',
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
  @Post(EventsEnum.USER_CREDIT_BALANCE_UPDATED)
  async updateUserCreditBalance(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User unlocked successfully',
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
  @Post(EventsEnum.USER_UNLOCKED)
  async unlockUser(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User password updated successfully',
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
  @Post(EventsEnum.USER_PASSWORD_UPDATED)
  async updateUserPassword(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User email update successfully',
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
  @Post(EventsEnum.USER_EMAIL_UPDATED)
  async updateUserEmail(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User currency updated successfully',
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
  @Post(EventsEnum.USER_CURRENCY_UPDATED)
  async updateUserCurrency(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User invoice contact updated successfully',
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
  @Post(EventsEnum.USER_INVOICE_CONTACT_UPDATED)
  async updateUserInvoiceContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body()
    requestBody: { user: UserDataDto; invoice_contact: InvoiceContactDto },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User policy updated successfully',
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
  @Post(EventsEnum.USER_POLICY_UPDATED)
  async updateUserPolicy(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User languages updated successfully',
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
  @Post(EventsEnum.USER_LANGUAGES_UPDATED)
  async updateUserLanguage(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { language: string },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User custom price policues updated successfully',
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
  @Post(EventsEnum.USER_CUSTOM_PRICE_POLICIES_UPDATED)
  async updateUserCustomPricePolicies(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { customPricePolicies: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User custom addon price policies updated successfully',
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
  @Post(EventsEnum.USER_CUSTOM_ADDON_PRICE_POLICIES_UPDATED)
  async updateUserCustomAddonPolicies(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { addonPolicies: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User custom affiliate added successfully',
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
  @Post(EventsEnum.USER_CUSTOM_AFFILIATE_ADDED)
  async addUserCustomAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { affiliate: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User custom affiliate removed successfully',
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
  @Post(EventsEnum.USER_CUSTOM_AFFILIATE_REMOVED)
  async removeUserCustomAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { affiliate: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User invoice interval updated successfully',
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
  @Post(EventsEnum.USER_INVOICE_INTERVAL_UPDATED)
  async updateUserInvoiceInterval(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { invoiceInterval: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User notification email removed successfully',
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
  @Post(EventsEnum.USER_ADDITIONAL_NOTIFICATION_EMAIL_REMOVED)
  async removeUserAdditionalNotificationEmail(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { addNotificationEmail: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User notification email added successfully',
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
  @Post(EventsEnum.USER_ADDITIONAL_NOTIFICATION_EMAIL_ADDED)
  async addUserAdditionalNotificationEmail(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { language: string },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User comment added successfully',
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
  @Post(EventsEnum.USER_COMMENT_ADDED)
  async addUserComment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { comment: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User comment updated successfully',
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
  @Post(EventsEnum.USER_COMMENT_UPDATED)
  async updateUserComment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { comment: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User comment removed successfully',
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
  @Post(EventsEnum.USER_COMMENT_REMOVED)
  async removeUserComment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { comment: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User tags updated successfully',
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
  @Post(EventsEnum.USER_TAGS_UPDATED)
  async updateUserTags(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { tags: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User setting added successfully',
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
  @Post(EventsEnum.USER_SETTING_ADDED)
  async addUserSetting(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { setting: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User setting updated successfully',
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
  @Post(EventsEnum.USER_SETTING_UPDATED)
  async updateUserSetting(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { setting: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User setting removed successfully',
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
  @Post(EventsEnum.USER_SETTING_REMOVED)
  async removeUserSetting(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { setting: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User started selling successfully',
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
  @Post(EventsEnum.USER_START_SELLING)
  async UserStartSelling(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { startSelling: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'User roles updated successfully',
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
  @Post(EventsEnum.USER_SETTING_REMOVED)
  async updateUserRoles(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: UserDataDto & { roles: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\]

  //MESSAGE

  @ApiResponse({
    status: 201,
    description: 'Message created successfully',
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
  @Post(EventsEnum.MESSAGE_CREATED)
  async createMessage(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { message: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Message updated successfully',
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
  @Post(EventsEnum.MESSAGE_UPDATED)
  async updateMessage(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { message: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Message deleted successfully',
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
  @Post(EventsEnum.MESSAGE_DELETED)
  async deleteMessage(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { message: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Notification

  @ApiResponse({
    status: 201,
    description: 'Notification sent successfully',
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
  @Post(EventsEnum.NOTIFICATION_SENT)
  async notificationSent(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { notification: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

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
