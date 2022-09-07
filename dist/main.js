"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const express_ctx_1 = require("express-ctx");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_1 = __importDefault(require("express"));
const common_1 = require("@nestjs/common");
const shared_module_1 = require("./shared/shared.module");
const api_config_service_1 = require("./shared/services/api-config.service");
const platform_express_1 = require("@nestjs/platform-express");
const PORT = process.env.PORT || 8080;
const PREFIX = process.env.PREFIX || '/';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), { cors: true });
    const configService = app.select(shared_module_1.SharedModule).get(api_config_service_1.ApiConfigService);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        transform: true,
        dismissDefaultMessages: true,
        exceptionFactory: (errors) => new common_1.UnprocessableEntityException(errors),
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Allemant Peritos Valuadores - SGI')
        .setDescription('Sistema de Gestión Integral')
        .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`${PREFIX}/docs`, app, document);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
    app.use((0, express_rate_limit_1.default)({ max: 1000, windowMs: 15 * 60 * 1000 }));
    app.setGlobalPrefix(PREFIX);
    app.use(express_ctx_1.middleware);
    if (!configService.isDevelopment) {
        app.enableShutdownHooks();
    }
    const port = configService.appConfig.port;
    await app.listen(port);
    console.info(`server running on ${await app.getUrl()}`);
    return app;
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map