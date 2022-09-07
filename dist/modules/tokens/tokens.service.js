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
exports.TokensService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const token_entity_1 = require("./entity/token.entity");
const api_config_service_1 = require("../../shared/services/api-config.service");
let TokensService = class TokensService {
    constructor(tokenRepository, jwtService, configService) {
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    create(userId, refreshToken) {
        return this.tokenRepository.save({ user: { id: userId }, refreshToken });
    }
    generateJwtTokens(data) {
        console.log('MyPayload');
        console.log(data);
        const payload = Object.assign(Object.assign({}, data), { sub: data.id });
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: this.configService.authConfig.jwtExpirationTime,
            secret: this.configService.authConfig.jwtTokenSecret,
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: 60 * 60 * 24 * 7,
            secret: this.configService.authConfig.jwtRefreshTokenSecret,
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    findOne(id) {
        return this.tokenRepository.findOne(id);
    }
    findOneRefreshToken(refreshtoken) {
        return this.tokenRepository.findOne(refreshtoken);
    }
    async updateOrCreate(userId, refreshToken) {
        const tokenData = await this.findOne(userId);
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return this.tokenRepository.save(tokenData);
        }
        return this.tokenRepository.save({ refreshToken, user: { id: userId } });
    }
    remove(refreshToken) {
        return this.tokenRepository.delete({ refreshToken });
    }
};
TokensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(token_entity_1.Token)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        api_config_service_1.ApiConfigService])
], TokensService);
exports.TokensService = TokensService;
//# sourceMappingURL=tokens.service.js.map