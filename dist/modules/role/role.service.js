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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permission_repository_1 = require("../permission/repository/permission.repository");
const role_repository_1 = require("./repository/role.repository");
let RoleService = class RoleService {
    constructor(repository, permission) {
        this.repository = repository;
        this.permission = permission;
    }
    async all(search) {
        return await this.repository.filter(search);
    }
    async create(request) {
        try {
            const role = await this.repository.create(request);
            role.permissions = [];
            for (const permission of request.permissions) {
                role.permissions.push(this.permission.create({ id: permission }));
            }
            return await this.repository.save(role);
        }
        catch (e) {
            if (e.code == '23505') {
                throw new common_1.ConflictException(`Name ${request.name} already exist !`);
            }
            else {
                throw new common_1.InternalServerErrorException(e);
            }
        }
    }
    async find(id) {
        const role = await this.repository.findOne({ where: { id: id } });
        if (!role) {
            throw new common_1.NotFoundException(`Data not found !`);
        }
        return role;
    }
    async update(id, request) {
        try {
            const role = await this.repository.findOne({ where: { id: id } });
            if (!role) {
                throw new common_1.NotFoundException(`Data not found !`);
            }
            role.permissions = [];
            for (const permission of request.permissions) {
                role.permissions.push(this.permission.create({ id: permission }));
            }
            role.name = request.name;
            return await this.repository.save(role);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.getMessage);
        }
    }
    async delete(id) {
        const role = await this.repository.findOne({ where: { id: id } });
        if (!role) {
            throw new common_1.NotFoundException(`Data not found !`);
        }
        role.permissions = [];
        await this.repository.save(role);
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_repository_1.RoleRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_repository_1.PermissionRepository)),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository,
        permission_repository_1.PermissionRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map