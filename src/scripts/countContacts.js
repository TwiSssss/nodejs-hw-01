import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        let allContacts = await readContacts();
        console.log("Контакти успішно пораховані.");
        return allContacts.length;
    } catch (err) {
        console.error("Помилка розрахунку контактів:", err);
    }
};

console.log(await countContacts());
