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
exports.PermissionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const jwt_strategy_1 = require("../auth/strategies/jwt.strategy");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const permission_dto_1 = require("./dto/permission.dto");
const permission_service_1 = require("./permission.service");
let PermissionController = class PermissionController {
    constructor(service, userService) {
        this.service = service;
        this.userService = userService;
    }
    async index(filter, user) {
        const check = await this.userService.can(user, 'except');
        if (!check) {
            throw new common_1.ForbiddenException(`Permission denied !`);
        }
        return this.service.all(filter);
    }
    async show(id, user) {
        const check = await this.userService.can(user, 'except');
        if (!check) {
            throw new common_1.ForbiddenException(`Permission denied !`);
        }
        return await this.service.find(id);
    }
    async store(payload, user) {
        const check = await this.userService.can(user, 'except');
        if (!check) {
            throw new common_1.ForbiddenException(`Permission denied !`);
        }
        return this.service.create(payload);
    }
    async update(id, payload, user) {
        const check = await this.userService.can(user, 'except');
        if (!check) {
            throw new common_1.ForbiddenException(`Permission denied !`);
        }
        return this.service.update(id, payload);
    }
    async destroy(id, user) {
        const check = await this.userService.can(user, 'except');
        if (!check) {
            throw new common_1.ForbiddenException(`Permission denied !`);
        }
        return this.service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/permission.entity").Permission] }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_user_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.FilterDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/permission.entity").Permission }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "show", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/permission.entity").Permission }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.CreateDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "store", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/permission.entity").Permission }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, permission_dto_1.UpdateDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.Auth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "destroy", null);
PermissionController = __decorate([
    (0, common_1.Controller)('permission'),
    (0, common_1.UseGuards)(jwt_strategy_1.JwtStrategy),
    __metadata("design:paramtypes", [permission_service_1.PermissionService, users_service_1.UsersService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map