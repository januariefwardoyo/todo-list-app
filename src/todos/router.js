import { Router } from "express";
import { createdTodo, deletedTodos, getTodos, updatedTodo } from "./todos.service.js";

export const router = Router();
router.get('/api/get/todos', getTodos);
router.post('/api/post/todos',createdTodo);
router.put('/api/put/todos/:id', updatedTodo);
router.delete('/api/delete/todos/:id', deletedTodos);