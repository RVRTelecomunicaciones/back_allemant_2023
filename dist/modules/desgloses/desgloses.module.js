"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesglosesModule = void 0;
const common_1 = require("@nestjs/common");
const desgloses_service_1 = require("./desgloses.service");
const desgloses_controller_1 = require("./desgloses.controller");
const typeorm_1 = require("@nestjs/typeorm");
const desglose_entity_1 = require("./entities/desglose.entity");
let DesglosesModule = class DesglosesModule {
};
DesglosesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([desglose_entity_1.Desglose])],
        providers: [desgloses_service_1.DesglosesService],
        controllers: [desgloses_controller_1.DesglosesController],
    })
], DesglosesModule);
exports.DesglosesModule = DesglosesModule;
//# sourceMappingURL=desgloses.module.js.map