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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const users_repository_1 = require("./repository/users.repository");
let UsersService = class UsersService {
    constructor(users) {
        this.users = users;
    }
    async getUserEntityByUsername(username) {
        return await this.users.findOne({ where: { username: username } });
    }
    async getUserEntityById(id) {
        return this.users.findOne({
            where: { id: id },
        });
    }
    create(dto) {
        return this.users.save(dto);
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    findByCondition(condition) {
        return this.users.findOne(condition);
    }
    async updateUser(userId, updateData) {
        try {
            const user = await this.users.findOne({ where: { id: userId } });
            if (!user) {
                throw new common_1.NotFoundException(`Allemant Peritos le informa que el usuario con id "${userId}" no fue encontrado`);
            }
            else {
                return this.users.save(updateData);
            }
        }
        catch (err) {
            throw new common_1.ConflictException();
        }
    }
    update(id, updateUserDto) {
        return this.users.update(id, updateUserDto);
    }
    async validateRegister(email) {
        try {
            const user = await this.users.findOne({ where: { email: email } });
            if (!user) {
                throw new common_1.NotFoundException(`Allemant Peritos le informa que el usuario con email "${email}" no fue encontrado`);
            }
            else {
                return user;
            }
        }
        catch (error) {
            throw new common_1.ConflictException();
        }
    }
    async validateLogin(email, password) {
        const user = await this.users.findOne({ where: { email: email } });
        if (user && (await user.checkPassword(password))) {
            return user;
        }
        return null;
    }
    async can(user, action) {
        if (action == 'except') {
            return true;
        }
        const result = user.role.permissions.filter((permission) => {
            return permission.name == action;
        });
        if (result.length > 0) {
            return true;
        }
        return false;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map