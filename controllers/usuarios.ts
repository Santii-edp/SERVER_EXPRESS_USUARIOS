import { Request, Response } from "express";
import Usuario from "../models/users";

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener usuarios",
            error,
        });
    }
};

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener el usuario",
            error,
        });
    }
};

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const usuario = await Usuario.create(body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: "Error al crear usuario",
            error,
        });
    }
};

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        await usuario.update(body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: "Error al actualizar usuario",
            error,
        });
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        await usuario.destroy();
        res.json({
            msg: `El usuario con id ${id} fue eliminado`,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error al eliminar usuario",
            error,
        });
    }
};
