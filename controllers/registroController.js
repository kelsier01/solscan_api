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
exports.getRegistroPorFecha = exports.getRegistros = exports.createRegistro = void 0;
const registro_1 = __importDefault(require("../models/registro"));
const cuadrante_1 = __importDefault(require("../models/cuadrante"));
const createRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRegistro = yield registro_1.default.create();
        if (newRegistro) {
            return res.json({
                message: 'Registro created successfully',
                data: newRegistro,
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
    return res.status(400).json({ message: 'Registro creation failed' });
});
exports.createRegistro = createRegistro;
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield registro_1.default.findAll();
        return res.json(registros);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {},
        });
    }
});
exports.getRegistros = getRegistros;
const getRegistroPorFecha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fecha } = req.params;
        const registro = yield registro_1.default.findOne({
            where: {
                fecha,
            },
            include: {
                model: cuadrante_1.default,
                as: 'cuadrantes',
            },
        });
        return res.json(registro);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something goes wrong',
            data: {},
        });
    }
});
exports.getRegistroPorFecha = getRegistroPorFecha;
//# sourceMappingURL=registroController.js.map