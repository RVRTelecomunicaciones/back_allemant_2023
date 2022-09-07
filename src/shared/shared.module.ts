import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CqrsModule } from '@nestjs/cqrs';
import { ValidatorService } from './services/validator.service';
import { AwsS3Service } from './services/aws-s3.service';
import { ApiConfigService } from './services/api-config.service';

const providers = [ApiConfigService];
//ValidatorService, AwsS3Service
@Global()
@Module({
  providers,
  imports: [HttpModule, CqrsModule],
  exports: [...providers, HttpModule, CqrsModule],
})
export class SharedModule {}
