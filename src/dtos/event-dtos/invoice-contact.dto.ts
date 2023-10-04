import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsDefined,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  MaxLength,
  MinLength,
  IsBoolean,
  IsMongoId,
  Matches,
} from 'class-validator';
import { CountryEnum } from '../../enums/country.enum';

export class InvoiceContactDto {
  @IsMongoId()
  @ApiProperty({
    type: String,
    required: true,
    example: '5ce45d7606444f199acfba1e',
    description: 'The unique identifier for the contact.',
  })
  id: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({
    type: String,
    required: true,
    title: 'Email',
    example: 'email@example.com',
    description: 'The email address of the contact.',
  })
  email: string;

  @IsDefined()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    title: 'First Name',
    example: 'Fname',
    description: 'The first name of the contact.',
  })
  firstName: string;

  @IsDefined()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    title: 'Last Name',
    example: 'Lname',
    description: 'The last name of the contact.',
  })
  lastName: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    type: Boolean,
    required: false,
    title: 'Is company',
    example: false,
    default: false,
    description: 'Indicates whether the contact is a company or an individual.',
  })
  isCompany?: boolean;

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: false,
    title: 'Company Name',
    description: 'The name of the company associated with the contact.',
  })
  companyName?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Matches(/^\+\d{1,3}\.\d{9,11}$/, { message: 'Invalid Phone Number' })
  @ApiProperty({
    type: String,
    required: true,
    title: 'Telephone',
    example: '+XX.XXXXXXXXXX',
    description: `A phone number for the receiver. It must match the following regex pattern:
    ^\\+\\d{1,3}\\.\\d{9,11}$
    Explanation of the regex pattern:
    ^ asserts position at start of a line
    \\+ matches the character + literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {1,3} matches the previous token between 1 and 3 times, as many times as possible (greedy)
    \\. matches the character . literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {9,11} matches the previous token between 9 and 11 times, as many times as possible (greedy)
    $ asserts position at the end of a line`,
  })
  telephone: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Matches(/^\+\d{1,3}\.\d{9,11}$/, { message: 'Invalid Phone Number' })
  @ApiProperty({
    type: String,
    required: false,
    title: 'Mobile',
    example: '+XX.XXXXXXXXXX',
    description: `A phone number for the receiver. It must match the following regex pattern:
    ^\\+\\d{1,3}\\.\\d{9,11}$
    Explanation of the regex pattern:
    ^ asserts position at start of a line
    \\+ matches the character + literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {1,3} matches the previous token between 1 and 3 times, as many times as possible (greedy)
    \\. matches the character . literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {9,11} matches the previous token between 9 and 11 times, as many times as possible (greedy)
    $ asserts position at the end of a line`,
  })
  mobile?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: true,
    title: 'Address 1',
    description: "The first line of the contact's address.",
  })
  address1: string;

  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: false,
    title: 'Address 2',
    description: "The second line of the contact's address.",
  })
  address2?: string;

  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: false,
    title: 'Address 3',
    description: "The third line of the contact's address.",
  })
  address3?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(16)
  @ApiProperty({
    type: String,
    required: true,
    title: 'Postal Code',
    example: '545454',
    description: "The postal code of the contact's location.",
  })
  postcode: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: true,
    title: 'City',
    description: "The city of the contact's location.",
  })
  city: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(CountryEnum)
  @ApiProperty({
    enum: CountryEnum,
    required: true,
    title: 'Country Code',
    example: 'GB',
    description: "The country code of the contact's location.",
  })
  country: CountryEnum;

  @IsOptional()
  @MinLength(0)
  @MaxLength(250)
  @ApiProperty({
    type: String,
    required: false,
    title: 'State',
    description: "The state or region of the contact's location.",
  })
  state?: string;

  @IsOptional()
  @MinLength(0)
  @MaxLength(20)
  @ApiProperty({
    type: String,
    required: false,
    title: 'Value Added Tax',
    description:
      'The Value Added Tax (VAT) information of the contact or company.',
  })
  vat?: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Three-letter currency code based on ISO 4217.',
  })
  currency: string;
}

export class InvoiceContactsDto {
  count: number;
  invoices: InvoiceContactDto[];
}
