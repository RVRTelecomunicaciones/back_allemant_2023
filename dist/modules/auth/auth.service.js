"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const tokens_service_1 = require("../tokens/tokens.service");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
const uuid_1 = require("uuid");
const helper_service_email_1 = require("../../processors/helper/mail/helper.service.email");
let AuthService = class AuthService {
    constructor(userService, tokenService, mailService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.mailService = mailService;
    }
    async validateUser(dto) {
        console.log(dto);
        const user = await this.userService.findByCondition({
            select: ['id', 'name', 'username', 'email', 'password', 'isActivated'],
            where: { username: dto.username },
        });
        if (!user)
            return null;
        const isPassEqual = await bcrypt.compare(dto.password, user.password);
        console.log(isPassEqual);
        if (!isPassEqual)
            return null;
        const { password } = user, result = __rest(user, ["password"]);
        console.log('MYRESULT');
        console.log(user);
        return result;
    }
    async validateRefreshToken(user, refreshToken) {
        console.log('tokens');
        const token = this.tokenService.findOne({ refreshToken });
        if (!token)
            throw new common_1.UnauthorizedException();
        const tokens = this.tokenService.generateJwtTokens(user);
        await this.tokenService.updateOrCreate(user.id, tokens.refreshToken);
        console.log('tokens');
        console.log('MYRESULT');
        console.log(tokens);
        return Object.assign({ user }, tokens);
    }
    async login(user) {
        console.log('Lllego tokens');
        console.log(user);
        const tokens = await this.tokenService.generateJwtTokens(user);
        await this.tokenService.updateOrCreate(user.id, tokens.refreshToken);
        console.log(tokens);
        return Object.assign({ user }, tokens);
    }
    async register(createUserDto) {
        const candidate = await this.userService.getUserEntityByUsername(createUserDto.username);
        if (candidate) {
            throw new common_1.ConflictException('Un usuario con este correo electrónico ya existe');
        }
        const activationLink = (0, uuid_1.v4)();
        const hashPassword = await bcrypt.hash(createUserDto.password, 10);
        const _a = await this.userService.create(Object.assign(Object.assign({}, createUserDto), { password: hashPassword, activationLink })), { password } = _a, userData = __rest(_a, ["password"]);
        const tokens = this.tokenService.generateJwtTokens(userData);
        console.log(tokens);
        await this.tokenService.create(userData.id, tokens.refreshToken);
        return Object.assign({ user: userData }, tokens);
    }
    async activation(activationLink) {
        const user = await this.userService.findByCondition({ activationLink });
        console.log('1er Acticación');
        console.log(user);
        if (!user) {
            throw new common_1.BadRequestException('Enlace de activación no válido');
            console.log(user);
        }
        user.isActivated = true;
        this.userService.update(user.id, user);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        tokens_service_1.TokensService,
        helper_service_email_1.EmailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map