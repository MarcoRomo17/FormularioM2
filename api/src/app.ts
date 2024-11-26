import express, { Application, Response, Request } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserController";



const app:Application = express();

app.use(cors());//cors te cierra el paso a lo que no quieras que haga consulta a tu servidor

app.use(express.json())//Es para transofrmar lo del cuerpo en joson
app.use(express.urlencoded({extended: true}))//Son para las peticiones. Permite recibir la info y transformarla en lo que se ocupa

app.get("/", (_req: Request,res: Response)=>{
    res.send("Hola desde mi servidor con TS")
})
app.post('/users/create', registerUsers)

app.post('/users/login', singin)

export default app;