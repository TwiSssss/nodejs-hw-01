import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        await readContacts();
        console.log("Дані успішно зчитано з файлу.");
    } catch (err) {
        console.error("Помилка під час зчитування даних із файлу:", err);
    }
};

console.log(await getAllContacts());
