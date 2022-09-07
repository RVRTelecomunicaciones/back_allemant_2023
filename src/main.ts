import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
/* import cors from 'cors';
 */
import compression from 'compression';
import { middleware as expressCtx } from 'express-ctx';
import rateLimit from 'express-rate-limit';
import express from 'express';
import { HttpStatus, UnprocessableEntityException, ValidationPipe } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

const PORT = process.env.PORT || 8080;
const PREFIX = process.env.PREFIX || '/';

export async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), { cors: true });
  const configService = app.select(SharedModule).get(ApiConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Allemant Peritos Valuadores - SGI')
    .setDescription('Sistema de Gestión Integral')
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${PREFIX}/docs`, app, document);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  app.use(compression());
  app.use(express.json()); //For JSON requests

  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  app.use(rateLimit({ max: 1000, windowMs: 15 * 60 * 1000 }));
  app.setGlobalPrefix(PREFIX);

  app.use(expressCtx);


  // Starts listening for shutdown hooks
  if (!configService.isDevelopment) {
    app.enableShutdownHooks();
  }

  const port = configService.appConfig.port;
  await app.listen(port);

  console.info(`server running on ${await app.getUrl()}`);

  return app;
}
bootstrap();
