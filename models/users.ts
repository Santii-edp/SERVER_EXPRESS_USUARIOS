import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'usuarios',
    timestamps: false,
});

export default Usuario;
