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
exports.Permission = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../../role/entities/role.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
let Permission = class Permission extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { parent_menu: { required: true, type: () => String }, parent_id: { required: true, type: () => String }, name: { required: true, type: () => String }, alias: { required: true, type: () => String }, url: { required: true, type: () => String }, icon: { required: true, type: () => String }, roles: { required: true, type: () => [require("../../role/entities/role.entity").Role] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "parent_menu", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, (role) => role.permissions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)()
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.entity.js.map