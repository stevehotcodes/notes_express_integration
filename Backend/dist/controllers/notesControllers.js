"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = exports.addNewNote = void 0;
const dbHelpers_1 = __importDefault(require("../helpers/dbHelpers"));
const uuid_1 = require("uuid");
const dbConnectionInstance = dbHelpers_1.default.getInstance();
const addNewNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = (0, uuid_1.v4)();
        let { noteTitle, noteDescription } = req.body;
        yield dbConnectionInstance.exec('addNewNote', { id, noteTitle, noteDescription });
        return res.status(200).json("note added successfully");
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json(error);
    }
});
exports.addNewNote = addNewNote;
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let notes = (yield dbConnectionInstance.exec("getAllNote")).recordset;
        if (notes) {
            return res.status(200).json(notes);
        }
        else {
            return res.status(404).json("no notes were found");
        }
    }
    catch (error) {
        res.status(500).json({ "Error in getting notes": error.message });
    }
});
exports.getAllNotes = getAllNotes;
