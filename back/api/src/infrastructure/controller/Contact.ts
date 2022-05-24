import { GenericController } from '../../common/infrastructure/generic.controller';
import { ContactDO } from '../../data/do/Contact';
// @ts-ignore
import { ContactRequestDTO } from '../../data/dto/Contact/request';
// @ts-ignore
import { ContactResponseDTO } from '../../data/dto/Contact/response';
import { contactSA, ContactSA } from '../../service/applicatif/Contact';

class ContactController extends GenericController<
  ContactDO,
  ContactRequestDTO,
  ContactResponseDTO,
  ContactSA
> {}

export const contactController = new ContactController(contactSA);

