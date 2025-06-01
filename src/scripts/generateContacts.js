import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        await writeContacts([...existingContacts, ...newContacts]);
        console.log("Дані успішно додані до файлу.");
    } catch (err) {
        console.error("Помилка додавання даних до файлу:", err);
    }
};

generateContacts(5);
