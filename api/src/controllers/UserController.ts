import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";

export const registerUsers= async (req:Request, res: Response): Promise<any>=>{

    try {


        //Prrimero validar que los datos necesarios existen
        const name = req.body.name;
        const email = req.body.email;
        const lastNames =req.body.lastNames;
        const password = req.body.password;
        const rol = req.body.rol;

        //Administradores no pueden crear clientes
        if(req.user?.rol ==="administrator" && rol ==="client"){
            return res.status(400).json({
                msg:"los administradores no pueden crear clientes"
            })

        }

        if(!name || !email || !lastNames || !password || !rol){
            return res.status(400).json({
                msg:" faltan datos para crear un usuario"
            })                     //devolvemos un json
        }
        // validar que el usuario sea administrador si el usuario a crear es administrador

        if( rol === "administrator" && req.user?.rol != "administrator"){
            return res.status(400).json({
                msg:" No puedes crear un nuevo administrador si no eres uno"
            })
        }

        await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        }) 
        return res.status(200).json({msg: "Usuario guardado con exito"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Hubo un error al crear el usuario"
        })
    }

}