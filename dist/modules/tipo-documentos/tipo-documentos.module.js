"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoDocumentosModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_documentos_service_1 = require("./tipo-documentos.service");
const tipo_documentos_controller_1 = require("./tipo-documentos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_documento_entity_1 = require("./entities/tipo-documento.entity");
let TipoDocumentosModule = class TipoDocumentosModule {
};
TipoDocumentosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_documento_entity_1.TipoDocumento])],
        providers: [tipo_documentos_service_1.TipoDocumentosService],
        controllers: [tipo_documentos_controller_1.TipoDocumentosController],
    })
], TipoDocumentosModule);
exports.TipoDocumentosModule = TipoDocumentosModule;
//# sourceMappingURL=tipo-documentos.module.js.map