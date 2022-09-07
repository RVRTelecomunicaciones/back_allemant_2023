"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class DataNotFoundException extends common_1.NotFoundException {
    constructor(byId) {
        super(`El codigo ${byId} no se establecio`);
    }
}
exports.default = DataNotFoundException;
//# sourceMappingURL=dataNotFound.exception.js.map