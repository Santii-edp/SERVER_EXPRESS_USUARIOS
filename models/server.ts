import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../db/conexion'

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/Usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // metodos iniciales
        this.dbConection()
        this.middlawares();
        // mis rutas
        this.routes();

    }

    async dbConection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Database connection failed: ${err.message}`);
            } else {
                throw new Error('Database connection failed: Unknown error');
            }
        }
    }
    

    middlawares() {
        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!! ' + this.port)
        })
    }
}

export default Server;