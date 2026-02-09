    import { request, response } from "express";
    import prisma from "../conn.js";

    export const getTodos = async (req = request, res = response) => {
        try {
            const data = await prisma.todos.findMany();

            console.log(data)
            return res.status(200).json({
                message: "get data succes", data
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    };

    export const deletedTodos = async (req = request, res = response) => {
        try {
            const id = req.params.id;
            console.log(id)

            if(!id) return res.status(401).json({
                message: "id is not defined"
            })
            const result = await prisma.todos.delete({
                where : {
                    id: id
                }
            });

            return res.status(200).json({
                message: "get data succes", result
            })
        }catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }


    }

    export const createdTodo = async (req = request, res = response) => {
        try {
            const { name_todo, price, status} = req.body;

            if(!name_todo && !price) {
                return res.status(401).json({
                    message: "input is not required"
                })
            }

            console.log(name_todo,price,status)

            const result = await prisma.todos.create({
                data: {
                    name_todo, price, status
                }
            })

            return res.status(200).json({
                message: "created succes", result
            })
        } catch (error) { return res.status(500).json({
            message: "invalid created data todos", error: error.message
        })
            
        }
    }
    export const updatedTodo = async (req = request, res = response) => {
    try {
        const { name_todo, price, status} = req.body;
        const { id } = req.params;

        if(!name_todo && !price) {
                return res.status(401).json({
                    message: "input is not required"
                })
            }

        const result = await prisma.todos.update({
            where: {id},
            data : { name_todo, price, status}
        })

        return res.status(200).json({
                message: "updated succes", result
            })
    } catch (error) {
        
    }
    }