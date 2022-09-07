"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuth = void 0;
const api_auth_1 = require("../constants/api.auth");
const common_1 = require("@nestjs/common");
function ApiAuth() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(api_auth_1.API_AUTH_KEY, true));
}
exports.ApiAuth = ApiAuth;
//# sourceMappingURL=api.auth.js.map