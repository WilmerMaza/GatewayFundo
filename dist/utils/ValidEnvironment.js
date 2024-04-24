"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.urlServeAuth = exports.JWT_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvironmentVariable(name) {
    const value = process.env[name];
    if (!value) {
        throw Error(`${name} must be set.`);
    }
    return value;
}
exports.JWT_SECRET = getEnvironmentVariable("JWT_SECRET");
exports.urlServeAuth = getEnvironmentVariable("urlServeAuth");
// export const urlMongoDBN = getEnvironmentVariable("urlMongoDBN");
exports.PORT = getEnvironmentVariable("PORT");
// export const timeJWT = getEnvironmentVariable("timeJWT");
//# sourceMappingURL=ValidEnvironment.js.map