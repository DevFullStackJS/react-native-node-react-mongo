import { GenericSA } from '../../common/service/generic.sa';
import {
    contactFactory,
  ContactFactory,
} from '../../constraint/factory/Contact';
import { ContactDO } from '../../data/do/Contact';
// @ts-ignore
import { ContactRequestDTO } from '../../data/dto/Contact/request';
// @ts-ignore
import { ContactResponseDTO } from '../../data/dto/Contact/response';
import { contactSM, ContactSM } from '../metier/Contact';

export class ContactSA extends GenericSA<
  ContactDO,
  ContactRequestDTO,
  ContactResponseDTO,
  ContactSM,
  ContactFactory
> {
}

export const contactSA = new ContactSA(contactSM, contactFactory, 'Contact');

