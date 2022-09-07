"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMessage = exports.StatusEnum = void 0;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["FORBIDDEN"] = 0] = "FORBIDDEN";
    StatusEnum[StatusEnum["NORMAL"] = 1] = "NORMAL";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
exports.StatusMessage = {
    0: 'ACTIVO',
    1: 'INACTIVO',
};
//# sourceMappingURL=status.enum.js.map