import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {try {
 const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));
 
  } catch (error) {
    console.error('Error reading contacts:', error);

  }};

removeAllContacts();
