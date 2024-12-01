"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCuadrantePorRegistro = exports.getCuadrantes = exports.createCuadrante = void 0;
const cuadrante_1 = __importDefault(require("../models/cuadrante"));
const createCuadrante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_registro, n_luminosidad, eje_x, eje_y } = req.body;
        const newCuadrante = yield cuadrante_1.default.create({
            id_registro,
            n_luminosidad,
            eje_x,
            eje_y,
        });
        if (newCuadrante) {
            return res.json({
                message: 'Cuadrante created successfully',
                data: newCuadrante,
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {},
        });
    }
    return res.status(400).json({ message: 'Cuadrante creation failed' });
});
exports.createCuadrante = createCuadrante;
const getCuadrantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cuadrantes = yield cuadrante_1.default.findAll();
        return res.json(cuadrantes);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {},
        });
    }
});
exports.getCuadrantes = getCuadrantes;
const getCuadrantePorRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_registro } = req.params;
        const cuadrante = yield cuadrante_1.default.findAll({
            where: {
                id_registro,
            },
        });
        return res.json(cuadrante);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {},
        });
    }
});
exports.getCuadrantePorRegistro = getCuadrantePorRegistro;
//# sourceMappingURL=cuadranteController.js.map