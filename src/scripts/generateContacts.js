import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  await writeContacts([...existingContacts, ...newContacts]);
};

generateContacts(5);
