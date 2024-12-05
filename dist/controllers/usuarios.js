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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const users_1 = __importDefault(require("../models/users"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield users_1.default.findAll();
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al obtener usuarios",
            error,
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield users_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al obtener el usuario",
            error,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = yield users_1.default.create(body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al crear usuario",
            error,
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield users_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al actualizar usuario",
            error,
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield users_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        yield usuario.destroy();
        res.json({
            msg: `El usuario con id ${id} fue eliminado`,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al eliminar usuario",
            error,
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map