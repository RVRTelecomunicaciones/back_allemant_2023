"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperModule = void 0;
const common_1 = require("@nestjs/common");
const helper_service_email_1 = require("./mail/helper.service.email");
const nestjs_sendgrid_1 = require("@ntegral/nestjs-sendgrid");
const config_1 = require("@nestjs/config");
const services = [helper_service_email_1.EmailService];
let HelperModule = class HelperModule {
};
HelperModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            nestjs_sendgrid_1.SendGridModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (cfg) => ({
                    apiKey: cfg.get('SENDGRID_API_KEY', process.env.SENDGRID_API_KEY),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: services,
        exports: services,
    })
], HelperModule);
exports.HelperModule = HelperModule;
//# sourceMappingURL=helper.module.js.map