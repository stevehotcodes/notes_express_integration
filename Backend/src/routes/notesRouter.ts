import { Router } from "express";
import { addNewNote, getAllNotes } from "../controllers/notesControllers";


const notesRouter=Router();


notesRouter.get('/all',getAllNotes);
notesRouter.post('/new',addNewNote)