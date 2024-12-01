"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("./../BD/connection"));
const registro_1 = __importDefault(require("./registro"));
// Definimos la clase Cuadrante basada en Sequelize
class Cuadrante extends sequelize_1.Model {
}
Cuadrante.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_registro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    n_luminosidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    eje_x: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    eje_y: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Cuadrante',
});
// Relación con Registro
Cuadrante.belongsTo(registro_1.default, {
    as: 'registro', // Alias para acceder al registro desde un cuadrante
    foreignKey: 'id_registro', // Foreign key en la tabla Cuadrante
});
exports.default = Cuadrante;
//# sourceMappingURL=cuadrante.js.map