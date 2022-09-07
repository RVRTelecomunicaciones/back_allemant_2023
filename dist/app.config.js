"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_EMAIL = exports.MAIL_SENDGRID = exports.PROJECT = exports.APP = void 0;
const path_1 = __importDefault(require("path"));
const ROOT_PATH = path_1.default.join(__dirname, '..');
const packageJSON = require(path_1.default.resolve(ROOT_PATH, 'package.json'));
exports.APP = {
    PORT: 8000,
    MASTER: 'Allemant',
    NAME: 'Allemantperitos.com',
    CLIENT_URL: 'http://localhost:3000',
    URL_API: '"http://localhost:5000"',
    ROOT_PATH,
    DEFAULT_CACHE_TTL: 60 * 60 * 24,
};
exports.PROJECT = {
    name: packageJSON.name,
    version: packageJSON.version,
    author: packageJSON.author,
    site: exports.APP.CLIENT_URL,
    homepage: packageJSON.homepage,
};
exports.MAIL_SENDGRID = {
    host: process.env.host_mail,
    port: process.env.port_mail,
    secure: process.env.secure_mail,
    user: process.env.user_mail,
    pass: process.env.pass_mail,
    name: process.env.name_mail,
    email: process.env.email_mail,
};
exports.PROJECT_EMAIL = {
    name: 'Allemant Peritos Valuadores',
    address: 'Av. Manuel Olguin N° 373, Oficina N° 604, Santiago de Surco, Lima',
    logoUrl: 'https://res.cloudinary.com/dplnkkbtz/image/upload/v1640819653/AllemantPeritos/logo_2021_c5naxm.png',
    slogan: 'Made in Perú',
    color: '#064273',
    socials: [
        ['GitHub', '__Project_GitHub_URL__'],
        ['__Social_Media_1__', '__Social_Media_1_URL__'],
        ['__Social_Media_2__', '__Social_Media_2_URL__'],
    ],
    url: 'http://localhost:4200',
    mailVerificationUrl: 'http://localhost:8080/auth/activation/',
    mailChangeUrl: 'http://localhost:8080/auth/change-email',
    resetPasswordUrl: 'http://localhost:4200/reset-password',
    termsOfServiceUrl: 'http://localhost:4200/legal/terms',
};
//# sourceMappingURL=app.config.js.map