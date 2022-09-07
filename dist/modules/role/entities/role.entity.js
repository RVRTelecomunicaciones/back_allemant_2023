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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const openapi = require("@nestjs/swagger");
const status_enum_1 = require("../../../enums/status.enum");
const permission_entity_1 = require("../../permission/entities/permission.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Role = class Role extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, status: { required: true, enum: require("../../../enums/status.enum").StatusEnum }, users: { required: true, type: () => [require("../../users/entities/user.entity").User] }, permissions: { required: true, type: () => [require("../../permission/entities/permission.entity").Permission] } };
    }
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        length: 50,
        name: 'name',
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 100,
        name: 'description',
    }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        nullable: true,
        default: 1,
        name: 'status',
    }),
    __metadata("design:type", Number)
], Role.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.role),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission, (permission) => permission.roles, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'role_permission',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Role.prototype, "permissions", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)('role'),
    (0, typeorm_1.Unique)('name_deleted', ['name', 'deletedAt'])
], Role);
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map