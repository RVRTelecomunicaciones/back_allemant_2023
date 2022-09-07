import { Global, Module } from '@nestjs/common';

import { EmailService } from './mail/helper.service.email';
import { SendGridModule } from '@ntegral/nestjs-sendgrid';
import { ConfigModule, ConfigService } from '@nestjs/config';


/* import { SendGridModule } from '@mehulbaid/nest-sendgrid';
import { ConfigService, ConfigModule } from 'nestjs-config'; */

const services = [EmailService];

@Global()
@Module({
  imports: [
   /*  SendGridModule.forRoot({
      apikey:
        '',
    }), */

    SendGridModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => ({
        apiKey: cfg.get('SENDGRID_API_KEY',process.env.SENDGRID_API_KEY),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: services,
  exports: services,
})
export class HelperModule {}
