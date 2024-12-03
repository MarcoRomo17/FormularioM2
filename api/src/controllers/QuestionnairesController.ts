// guradar titulo,hacer descripcion y guardar todo lo relativo al cuestionario
import { Request, Response } from "express";
import { QuestionnaireModel } from "../models/QuestionnairesModel";
import { QuestionModel } from "../models/QuestionsModel";
import { OptionModel } from "../models/Options";

export const registrarCuestionarios = async (req: Request, res: Response): Promise<any> => {
    try {
      const { title, userID, description, questions } = req.body;
  

      if (!title || !description || !userID || !questions) {
        return res.status(400).json({ msg: "La información del cuestionario viene incompleta" });
      }
  
      const cuestionarioCreado = await QuestionnaireModel.create({
        title,
        description,
        userID,
      });
  
      const preguntas = await Promise.all(// este promise.all se avienta todas las peticiones de un tiron, Esto mediante un arreglo de promesas. 
        //cosa en la que nos ayuda el .map
        questions.map(async (question: any) => {
          const preguntaCreada = await QuestionModel.create({
            title: question.title,
            type: question.type,
            isMandatory: question.isMandatory,
            questionnaireID: cuestionarioCreado._id, //Hace referencia al cuestionario
          });
  
          // Hacemos una validacion antes de entrar en el proximo mapeo interno
          //Se hacen mapeso por lo que recibimos, arreglos de preguntas y opciones
          if (question.options && question.options.length > 0) {
            await Promise.all(
              question.options.map(async (option: any) => {
                await OptionModel.create({
                  title: option.title,
                  questionID: preguntaCreada._id, // Relación con la pregunta
                });
              })
            );
          }
  
          return preguntaCreada;
        })
      );
  
      return res.status(200).json({
        msg: "Cuestionario creado con éxito",
        cuestionarioCreado,
        preguntas,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Hubo un error al crear el cuestionario", error});
    }
  };
  