import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => { try {
 
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(data);

    const newContacts = Array.from({ length: 1 }, () => createFakeContact());

    const updatedContacts = [...existingContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

    console.log(`Generated and added ${1} contacts to db.json`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }};

addOneContact();
