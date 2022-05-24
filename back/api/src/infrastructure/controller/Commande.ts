import { GenericController } from '../../common/infrastructure/generic.controller';
import { CommandeDO } from '../../data/do/Commande';
// @ts-ignore
import { CommandeRequestDTO } from '../../data/dto/Commande/request';
// @ts-ignore
import { CommandeResponseDTO } from '../../data/dto/Commande/response';
import { commandeSA, CommandeSA } from '../../service/applicatif/Commande';

class CommandeController extends GenericController<
  CommandeDO,
  CommandeRequestDTO,
  CommandeResponseDTO,
  CommandeSA
> {}

export const commandeController = new CommandeController(commandeSA);

