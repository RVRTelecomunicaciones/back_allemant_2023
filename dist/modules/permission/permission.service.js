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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permission_repository_1 = require("./repository/permission.repository");
let PermissionService = class PermissionService {
    constructor(repository) {
        this.repository = repository;
    }
    async all(search) {
        return await this.repository.filter(search);
    }
    async create(request) {
        const { parent_menu, parent_id, name, alias, url, icon } = request;
        try {
            return await this.repository.save({
                parent_menu,
                parent_id,
                name,
                alias,
                url,
                icon,
            });
        }
        catch (e) {
            if (e.code == '23505') {
                throw new common_1.ConflictException(`Name ${name} already used !`);
            }
            else {
                throw new common_1.InternalServerErrorException(e);
            }
        }
    }
    async find(id) {
        const permission = await this.repository.findOne({ where: { id: id } });
        if (!permission) {
            throw new common_1.NotFoundException(`Data not found !`);
        }
        return permission;
    }
    async update(id, request) {
        const { parent_menu, parent_id, name, alias, url, icon } = request;
        try {
            await this.repository.update(id, {
                parent_menu,
                parent_id,
                name,
                alias,
                url,
                icon,
            });
            return await this.repository.findOne({ where: { id: id } });
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async delete(id) {
        const result = await this.repository.delete({ id });
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Data not found !`);
        }
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_repository_1.PermissionRepository)),
    __metadata("design:paramtypes", [permission_repository_1.PermissionRepository])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map