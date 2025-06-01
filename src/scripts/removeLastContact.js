import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        contacts.pop();
        await writeContacts(contacts);
        console.log("Останній контакт успішно видалено.");
    } catch (err) {
        console.error("Помилка при видаленні контакту:", err);
    }
};

removeLastContact();
