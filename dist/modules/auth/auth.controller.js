"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tokens_service_1 = require("../tokens/tokens.service");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const auth_service_1 = require("./auth.service");
const refresh_jwt_auth_guard_1 = require("./guards/refresh-jwt-auth.guard");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const api_config_service_1 = require("../../shared/services/api-config.service");
let AuthController = class AuthController {
    constructor(authService, tokenService, apiConfig) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.apiConfig = apiConfig;
    }
    async login(response, req) {
        console.log('user');
        console.log(req);
        const user = await this.authService.login(req.user);
        console.log('user');
        console.log(user);
        response.cookie('refresh Token', user.refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        return user;
    }
    async register(response, dto) {
        const user = await this.authService.register(dto);
        response.cookie('refreshToken', user.refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        return user;
    }
    async activation(response, link) {
        await this.authService.activation(link);
        response.redirect(this.apiConfig.urlFrontend);
    }
    refresh(req, body) {
        console.log(req);
        console.log(body);
    }
    async verifyMail(token) {
        await this.authService.activation(token);
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('activation/:link'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)('link')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activation", null);
__decorate([
    (0, common_1.UseGuards)(refresh_jwt_auth_guard_1.RefreshJwtAuthGuard),
    (0, common_1.Get)('refresh'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyMail", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('AUTENTICACIÓN'),
    (0, common_1.Controller)('auth/'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        tokens_service_1.TokensService,
        api_config_service_1.ApiConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map