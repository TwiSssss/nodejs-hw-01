import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  return JSON.parse(data);
};
