"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BD_NAME = process.env.BD_NAME || "solscan";
const BD_USER = process.env.BD_USER || "root";
const BD_PASS = process.env.BD_PASS || "";
const BD_HOST = process.env.BD_HOST || "localhost";
const db = new sequelize_1.Sequelize(BD_NAME, BD_USER, BD_PASS, {
    host: BD_HOST,
    dialect: "mysql",
    define: {
        createdAt: false,
        updatedAt: false,
    },
});
exports.default = db;
//# sourceMappingURL=connection.js.map