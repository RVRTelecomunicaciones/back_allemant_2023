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
exports.RoleAccessEntity = void 0;
const openapi = require("@nestjs/swagger");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let RoleAccessEntity = class RoleAccessEntity extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { roleId: { required: true, type: () => Number }, accessId: { required: true, type: () => Number }, type: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: false,
        name: 'role_id',
        comment: '角色id',
    }),
    __metadata("design:type", Number)
], RoleAccessEntity.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: false,
        name: 'access_id',
        comment: '资源id',
    }),
    __metadata("design:type", Number)
], RoleAccessEntity.prototype, "accessId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        name: 'type',
        comment: '资源类型:2:表示菜单,3:表示接口(API)',
    }),
    __metadata("design:type", Number)
], RoleAccessEntity.prototype, "type", void 0);
RoleAccessEntity = __decorate([
    (0, typeorm_1.Entity)('role_access'),
    (0, typeorm_1.Unique)('role_access_type_deleted', ['roleId', 'accessId', 'type', 'deletedAt'])
], RoleAccessEntity);
exports.RoleAccessEntity = RoleAccessEntity;
//# sourceMappingURL=role.access.entity.js.map