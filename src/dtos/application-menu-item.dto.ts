import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class MenuItemDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: "The label or name for the tab",
    example: "Home",
  })
  label: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    type: String,
    description: "The URL associated with the tab",
    example: "https://example.com/home",
  })
  url: string;
}
