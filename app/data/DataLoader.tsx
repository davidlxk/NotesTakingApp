import { storage } from "./mmkv";
import { Note } from "./types";

export const loadNotes = () => {
    const existing = storage.getString("notes");
    if (existing) {
        return JSON.parse(existing);
    }

    return [];
}

export const saveNewNote = (note: Note) => {

    const existing = storage.getString("notes");

    let notesArray: Note[] = [];
    if (existing) {
        notesArray = JSON.parse(existing);
    }

    notesArray = [note,...notesArray];

    storage.set("notes",JSON.stringify(notesArray));
}