import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  ValidationPipe,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';
import {
  ErrorResponseDto,
  InfoResponseDto,
  TaskResponseDto,
} from './dtos/responses.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(`Hoster Applications Integration Boilerplate - OpenAPI 3.0`)
    .addTag('Info')
    .addTag('Events')
    .setTermsOfService('http://hosterpointer.io/terms') //here you can set your terms of service if you have any
    .setContact('', '', 'info@hoster.com') //here you can set a contact email
    .setDescription('')
    .setVersion('0.1')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .addSecurityRequirements('JWT-auth')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [ErrorResponseDto, InfoResponseDto, TaskResponseDto],
  });

  SwaggerModule.setup('api', app, document);

  // Make use of class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      forbidUnknownValues: true,
      exceptionFactory: (errors: ValidationError[]) => {
        console.log('ValidationPipe: ', errors);
        return new BadRequestException('Validation error');
      },
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
  console.log(
    `Server started.\nSwagger documentation exists on: http://localhost:${process.env.PORT}/api`,
  );
}
bootstrap();
