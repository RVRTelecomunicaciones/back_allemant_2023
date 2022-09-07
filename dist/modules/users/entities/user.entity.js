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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const common_1 = require("@nestjs/common");
const role_entity_1 = require("../../role/entities/role.entity");
let User = class User extends shared_entity_1.SharedEntity {
    async hashPassword() {
        if (this.password !== undefined) {
            try {
                this.password = await bcrypt.hash(this.password, 10);
            }
            catch (error) {
                console.log('hashPassword error', error);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async checkPassword(password) {
        try {
            const isCorrectPassword = await bcrypt.compare(password, this.password);
            return isCorrectPassword;
        }
        catch (error) {
            console.log('checkPassword error', error);
            throw new common_1.InternalServerErrorException();
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, username: { required: true, type: () => String }, mobile: { required: true, type: () => String }, password: { required: true, type: () => String }, name: { required: true, type: () => String }, profilePhoto: { required: true, type: () => String }, created_by: { required: true, type: () => String }, updated_by: { required: true, type: () => String }, activationLink: { required: true, type: () => String }, isActivated: { required: false, type: () => Boolean }, role: { required: true, type: () => require("../../role/entities/role.entity").Role } };
    }
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 11,
        name: 'mobile',
    }),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        name: 'password',
        select: false,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profilePhoto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'char',
        length: 36,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], User.prototype, "activationLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActivated", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)('user'),
    (0, typeorm_1.Unique)('username_mobile_email_unique', ['username', 'mobile', 'email']),
    (0, typeorm_1.Unique)('username_deleted', ['username', 'deletedAt']),
    (0, typeorm_1.Unique)('email_deleted', ['email', 'deletedAt']),
    (0, typeorm_1.Unique)('mobile_deleted', ['mobile', 'deletedAt'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map