import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ContactDO } from '../../data/do/Contact';
import { ContactRepository } from '../../repository/Contact';

export class ContactSM extends GenericSM<ContactDO, string, ContactRepository> {
}

export const contactSM = new ContactSM(getCustomRepository(ContactRepository));

