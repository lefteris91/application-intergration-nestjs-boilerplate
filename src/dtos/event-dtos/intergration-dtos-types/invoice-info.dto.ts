import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBase64, IsObject, IsArray } from "class-validator";
import { EventsEnum } from "../../../enums/events.enum";
import { TabDto } from "./product-info.dto";

export class InvoiceInfoDto {
    @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: "Name of the Integration",
    example: "Elorus",
  })
  name: string;

  @IsString()
  @IsOptional()
  @IsBase64()
  @ApiProperty({
    type: String,
    required: false,
    description: "Base64-encoded logo",
    example: "base64encodedlogo...",
  })
  logo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: "Description of the integration",
    example: "Integration description",
  })
  description?: string;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: [TabDto],
    required: false,
    description: "Invoice Integration tabs",
    example: [
      {
        label: "Tab 1",
        url: "https://example.com/tab1",
      },
    ],
  })
  invoiceTabs?: TabDto[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    type: [String],
    required: true,
    description: "Events from hoster the integration is listening to",
    example: [`event/${EventsEnum.INVOICE_CONTACT_CREATED}`],
  })
  listenEvents?: string[];
}