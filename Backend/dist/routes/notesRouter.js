"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notesControllers_1 = require("../controllers/notesControllers");
const notesRouter = (0, express_1.Router)();
notesRouter.get('/all', notesControllers_1.getAllNotes);
notesRouter.post('/new', notesControllers_1.addNewNote);
