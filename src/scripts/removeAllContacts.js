import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log("Дані успішно видалено з файлу.");
    } catch (err) {
        console.error("Помилка під час видалення даних з файлу:", err);
    }
};

removeAllContacts();
