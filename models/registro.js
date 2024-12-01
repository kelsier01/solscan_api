"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("./../BD/connection"));
// Definimos la clase Registro basada en Sequelize
class Registro extends sequelize_1.Model {
}
Registro.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Registro',
});
exports.default = Registro;
//# sourceMappingURL=registro.js.map