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
import { JwtPayloadRequest } from './dtos/jwt-payload.request';
import { ProductDataDto } from './dtos/product-data.dto';
import { AuthGuard } from './auth/auth.guard';
import { ApiExceptionFilter } from './api.exception.filter';
import { senderIsHoster, hasAdminRights } from './auth/auth.interceptors';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ErrorResponseDto, TaskResponseDto } from './dtos/responses.dto';
import { InvoiceContactDto } from './dtos/invoice-contact.dto';
import { UserDataDto } from './dtos/user-data,dto';
import { EventsEnum } from './enums/events.enum';
import { InvoiceDto } from './dtos/invoice.dto';
import { ItemDto } from './dtos/item.dto';

@Controller('event')
@ApiTags('Events')
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseInterceptors(hasAdminRights)
@UseFilters(new ApiExceptionFilter())
export class EventController {
  //User
  // @ApiResponse({
  //   status: 200,
  //   description: 'User created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.USER_CREATED)
  // async createUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_UPDATED)
  // async updateUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.USER_DELETED)
  // async deleteUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User banned successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_BANNED)
  // async banUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User unbanned successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_UNBANNED)
  // async unbanUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User added to org successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_ADDED_ORGANIZATION_ACCESS)
  // async addedUserOrganizationAccess(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User removed from org successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_REMOVED_ORGANIZATION_ACCESS)
  // async removedUserOrganizationAccess(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User locked successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_LOCKED)
  // async lockUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Users credit balance updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CREDIT_BALANCE_UPDATED)
  // async updateUserCreditBalance(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User unlocked successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_UNLOCKED)
  // async unlockUser(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User password updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_PASSWORD_UPDATED)
  // async updateUserPassword(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User email update successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_EMAIL_UPDATED)
  // async updateUserEmail(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User currency updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CURRENCY_UPDATED)
  // async updateUserCurrency(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User invoice contact updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_INVOICE_CONTACT_UPDATED)
  // async updateUserInvoiceContact(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body()
  //   requestBody: { user: UserDataDto; invoice_contact: InvoiceContactDto },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User policy updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_POLICY_UPDATED)
  // async updateUserPolicy(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User languages updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_LANGUAGES_UPDATED)
  // async updateUserLanguage(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { language: string },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User custom price policues updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CUSTOM_PRICE_POLICIES_UPDATED)
  // async updateUserCustomPricePolicies(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { customPricePolicies: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User custom addon price policies updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CUSTOM_ADDON_PRICE_POLICIES_UPDATED)
  // async updateUserCustomAddonPolicies(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { addonPolicies: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User custom affiliate added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CUSTOM_AFFILIATE_ADDED)
  // async addUserCustomAffiliate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { affiliate: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User custom affiliate removed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_CUSTOM_AFFILIATE_REMOVED)
  // async removeUserCustomAffiliate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { affiliate: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User invoice interval updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_INVOICE_INTERVAL_UPDATED)
  // async updateUserInvoiceInterval(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { invoiceInterval: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User notification email removed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_ADDITIONAL_NOTIFICATION_EMAIL_REMOVED)
  // async removeUserAdditionalNotificationEmail(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { addNotificationEmail: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User notification email added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_ADDITIONAL_NOTIFICATION_EMAIL_ADDED)
  // async addUserAdditionalNotificationEmail(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { language: string },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User comment added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_COMMENT_ADDED)
  // async addUserComment(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { comment: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User comment updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_COMMENT_UPDATED)
  // async updateUserComment(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { comment: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User comment removed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_COMMENT_REMOVED)
  // async removeUserComment(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { comment: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User tags updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_TAGS_UPDATED)
  // async updateUserTags(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { tags: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User setting added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_SETTING_ADDED)
  // async addUserSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User setting updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_SETTING_UPDATED)
  // async updateUserSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User setting removed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_SETTING_REMOVED)
  // async removeUserSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User started selling successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_START_SELLING)
  // async UserStartSelling(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { startSelling: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'User roles updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.USER_ROLES_UPDATED)
  // async updateUserRoles(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: UserDataDto & { roles: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Product Category

  @ApiResponse({
    status: 201,
    description: 'Product Category created successfully',
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
  @Post(EventsEnum.PRODUCT_CATEGORY_CREATED)
  async createProductCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { productCategory: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product Category updated successfully',
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
  @Post(EventsEnum.PRODUCT_CATEGORY_UPDATED)
  async updateProductCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { productCategory: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product Category deleted successfully',
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
  @Post(EventsEnum.PRODUCT_CATEGORY_DELETED)
  async deleteProductCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: { productCategory: object },
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Invoice Contact

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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Invoice

  @ApiResponse({
    status: 201,
    description: 'Invoice created successfully',
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
  @Post(EventsEnum.INVOICE_CREATED)
  async createInvoice(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Invoice updated successfully',
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
  @Post(EventsEnum.INVOICE_UPDATED)
  async updateInvoice(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Invoice deleted successfully',
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
  @Post(EventsEnum.INVOICE_DELETED)
  async deleteInvoice(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: InvoiceDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Order

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_CREATED)
  // async createOrder(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { order: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order status is in progress',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_STATUS_INPROGRESS)
  // async setOrderStatusInProgress(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { orderStatus: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order status is completed',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_STATUS_COMPLETED)
  // async setOrderStatusCompleted(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { orderStatus: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order status is Cancelled',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_STATUS_CANCELED)
  // async setOrderStatusCancelled(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { orderStatus: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order status is refunded',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_STATUS_REFUNDED)
  // async setOrderStatusRefunded(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { orderStatus: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'insufficient balance',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_INSUFFICIENT_BALANCE)
  // async OrderInsufficientBalance(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { order: object; balance: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_DELETED)
  // async deleteOrder(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { order: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Order paied successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ORDER_PAID)
  // async payOrder(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { order: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Setting

  // @ApiResponse({
  //   status: 201,
  //   description: 'Setting created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.SETTING_CREATED)
  // async createSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Setting updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.SETTING_UPDATED)
  // async updateSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Setting deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.SETTING_DELETED)
  // async deleteSetting(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Setting: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Issue

  // @ApiResponse({
  //   status: 201,
  //   description: 'Issue created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ISSUE_CREATED)
  // async createIssue(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Issue: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Issue updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ISSUE_UPDATED)
  // async updateIssue(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Issue: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Issue deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ISSUE_DELETED)
  // async deleteIssue(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Issue: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Task

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_CREATED)
  // async createTask(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_UPDATED)
  // async updateTask(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_DELETED)
  // async deleteTask(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task canceled successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_CANCELED)
  // async cancelTask(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task is in progress',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_INPROGRESS)
  // async setTaskInProgress(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task Completed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_COMPLETED)
  // async completeTask(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Task percentage was updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.TASK_UPDATE_PERCENTAGE)
  // async updateTaskPercentage(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { Task: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Product

  // @ApiResponse({
  //   status: 201,
  //   description: 'Product created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.PRODUCT_CREATED)
  // async createProduct(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ProductDataDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Product updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.PRODUCT_UPDATED)
  // async updateProduct(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: InvoiceContactDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Product deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.PRODUCT_DELETED)
  // async deleteProduct(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: InvoiceContactDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Currency

  @ApiResponse({
    status: 201,
    description: 'Product auto renewed successfully',
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
  @Post(EventsEnum.PRODUCT_AUTO_RENEW_UPDATED)
  async autoRenewProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ProductDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product enabled successfully',
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
  @Post(EventsEnum.PRODUCT_ENABLED)
  async enableProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ProductDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 201,
    description: 'Product disabled successfully',
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
  @Post(EventsEnum.PRODUCT_DISABLED)
  async disableProduct(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: ProductDataDto,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //IP Group

  // @ApiResponse({
  //   status: 201,
  //   description: 'IP group created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_GROUP_CREATED)
  // async createIPGroup(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IPGroup: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'IP group updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_GROUP_UPDATED)
  // async updateIPGroup(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IPGroup: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Ip group deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_GROUP_DELETED)
  // async deleteIpGroup(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IPGroup: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //IP

  // @ApiResponse({
  //   status: 201,
  //   description: 'IP created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_CREATED)
  // async createIP(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IP: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'IP updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_UPDATED)
  // async updateIP(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IP: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Ip deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.IP_DELETED)
  // async deleteIp(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: { IP: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //ITEM

  // @ApiResponse({
  //   status: 201,
  //   description: 'Item created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_CREATED)
  // async createItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Item updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_UPDATED)
  // async updateItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Item deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_DELETED)
  // async deleteItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 201,
  //   description: 'Item Ip attached successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_IP_ATTACHED)
  // async attachIpToItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { IP: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item ip detached successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_IP_DETACHED)
  // async detachIpfromItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { IP: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item detached from order successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_DETACHED_FROM_ORDER)
  // async detachItemFromOrder(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { Order: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item postponed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_POSTPONED)
  // async postponeItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item transfered in successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_TRANSFERRED_IN)
  // async transferedItemIn(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { transferredIn: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item cancelled successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_CANCELED)
  // async cancelItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item suspended successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_SUSPENDED)
  // async suspendItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item affiliate added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_AFFILIATE_ADDED)
  // async addedItemToAffiliate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { Affiliate: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item bundle attached successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_BUNDLE_ATTACHED)
  // async attatchItemToBundle(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { Bundle: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item bundle dettached successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_BUNDLE_DETACHED)
  // async dettachItemFromBundle(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto & { Bundle: object },
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item set inactive successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_SET_INACTIVE)
  // async setItemInactive(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Item proccessed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(201)
  // @Post(EventsEnum.ITEM_PROCESSED)
  // async proccessItem(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: ItemDto,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiResponse({
    status: 200,
    description: 'Currency created successfully',
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
  @Post(EventsEnum.CURRENCY_CREATED)
  async createCurrency(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Currency updated successfully',
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
  @Post(EventsEnum.CURRENCY_UPDATED)
  async updateCurrency(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Currency deleted successfully',
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
  @Post(EventsEnum.CURRENCY_DELETED)
  async deleteCurrency(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Affiliate

  @ApiResponse({
    status: 200,
    description: 'Affiliate created successfully',
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
  @Post(EventsEnum.AFFILIATE_CREATED)
  async createAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Affiliate updated successfully',
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
  @Post(EventsEnum.AFFILIATE_UPDATED)
  async updateAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Affiliate deleted successfully',
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
  @Post(EventsEnum.AFFILIATE_DELETED)
  async deleteAffiliate(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Company

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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //TLD

  @ApiResponse({
    status: 200,
    description: 'Tld created successfully',
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
  @Post(EventsEnum.TLD_CREATED)
  async createTld(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Tld updated successfully',
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
  @Post(EventsEnum.TLD_UPDATED)
  async updateTld(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Tld deleted successfully',
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
  @Post(EventsEnum.TLD_DELETED)
  async deleteTld(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Service Provider

  @ApiResponse({
    status: 200,
    description: 'Service provider created successfully',
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
  @Post(EventsEnum.SERVICE_PROVIDER_CREATED)
  async createServiceProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Service provider updated successfully',
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
  @Post(EventsEnum.SERVICE_PROVIDER_UPDATED)
  async updateServiceProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Service provider deleted successfully',
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
  @Post(EventsEnum.SERVICE_PROVIDER_DELETED)
  async deleteServiceProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Service provider installed successfully',
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
  @Post(EventsEnum.SERVICE_PROVIDER_INSTALLED)
  async installServiceProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Service provider uninstalled successfully',
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
  @Post(EventsEnum.SERVICE_PROVIDER_UNINSTALLED)
  async unistallServiceProvider(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Domain

  @ApiResponse({
    status: 200,
    description: 'Domain contact created successfully',
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
  @Post(EventsEnum.DOMAIN_CONTACT_CREATED)
  async createDomainContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Domain contact updated successfully',
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
  @Post(EventsEnum.DOMAIN_CONTACT_UPDATED)
  async updateDomainContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Domain contact deleted successfully',
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
  @Post(EventsEnum.DOMAIN_CONTACT_DELETED)
  async deleteDomainContact(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Domain category created successfully',
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
  @Post(EventsEnum.DOMAIN_CATEGORY_CREATED)
  async createDomainCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Domain category updated successfully',
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
  @Post(EventsEnum.DOMAIN_CATEGORY_UPDATED)
  async updateDomainCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Domain category deleted successfully',
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
  @Post(EventsEnum.DOMAIN_CATEGORY_DELETED)
  async deleteDomainCategory(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Addon

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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Payment

  @ApiResponse({
    status: 200,
    description: 'Payment created successfully',
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
  @Post(EventsEnum.PAYMENT_CREATED)
  async createPayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment canceled successfully',
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
  @Post(EventsEnum.PAYMENT_CANCELED)
  async cancelPayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment failed successfully',
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
  @Post(EventsEnum.PAYMENT_FAILED)
  async failPayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment subscribed successfully',
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
  @Post(EventsEnum.PAYMENT_SUBSCRIBED)
  async subscribePayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment unsuscribed successfully',
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
  @Post(EventsEnum.PAYMENT_UNSUBSCRIBED)
  async unsubscribePayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment updated successfully',
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
  @Post(EventsEnum.PAYMENT_UPDATED)
  async updatePayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment deleted successfully',
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
  @Post(EventsEnum.PAYMENT_DELETED)
  async deletePayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  @ApiResponse({
    status: 200,
    description: 'Payment completed successfully',
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
  @Post(EventsEnum.PAYMENT_COMPLETED)
  async completePayment(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: object,
  ): Promise<{ success: boolean } | TaskResponseDto> {
    return;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Template

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_CREATED)
  // async createTemplate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_UPDATED)
  // async updateTemplate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_DELETED)
  // async deleteTemplate(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Coupon

  // @ApiResponse({
  //   status: 200,
  //   description: 'Coupon created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.COUPON_CREATED)
  // async createCoupon(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Coupon updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.COUPON_UPDATED)
  // async updateCoupon(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Coupon deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.COUPON_DELETED)
  // async deleteCoupon(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Template Provider

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template provider created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_PROVIDER_CREATED)
  // async createTemplateProvider(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template provider updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_PROVIDER_UPDATED)
  // async updateTemplateProvider(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Template provider deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.TEMPLATE_PROVIDER_DELETED)
  // async deleteTemplateProvider(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Domain Name

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name created successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_CREATED)
  // async createDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_UPDATED)
  // async updateDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name deleted successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_DELETED)
  // async deleteDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name locked successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_LOCKED)
  // async lockDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name unlocked successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_UNLOCKED)
  // async unlockDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name shield activated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_SHIELD_ACTIVATED)
  // async activateShieldToDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name shield deactivated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_SHIELD_DEACTIVATED)
  // async deactivateShieldToDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name bundle added successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_BUNDLE_ADDED)
  // async addBundleToDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name bundle removed successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_BUNDLE_REMOVED)
  // async removeBundleFromDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name registrant updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_REGISTRANT_UPDATED)
  // async updateRegistrantFromDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name admin updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_ADMIN_UPDATED)
  // async updateAdminFromDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name tech updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_TECH_UPDATED)
  // async techUpdateFromDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name billing updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_BILLING_UPDATED)
  // async billingUpdateFromDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }

  // @ApiResponse({
  //   status: 200,
  //   description: 'Domain name additional updated successfully',
  //   schema: {
  //     oneOf: [
  //       { type: 'object', properties: { success: { type: 'boolean' } } },
  //       { $ref: getSchemaPath(TaskResponseDto) },
  //     ],
  //   },
  // })
  // @ApiResponse({
  //   type: ErrorResponseDto,
  //   description: 'Error Response',
  // })
  // @HttpCode(200)
  // @Post(EventsEnum.DOMAIN_NAME_ADDITIONAL_UPDATED)
  // async additionalUpdateDomainName(
  //   @Request() request: Request & JwtPayloadRequest,
  //   @Body() requestBody: object,
  // ): Promise<{ success: boolean } | TaskResponseDto> {
  //   return;
  // }
}
