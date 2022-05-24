import { GenericSA } from '../../common/service/generic.sa';
import {
    commandeFactory,
  CommandeFactory,
} from '../../constraint/factory/Commande';
import { CommandeDO } from '../../data/do/Commande';
// @ts-ignore
import { CommandeRequestDTO } from '../../data/dto/Commande/request';
// @ts-ignore
import { CommandeResponseDTO } from '../../data/dto/Commande/response';
import { commandeSM, CommandeSM } from '../metier/Commande';

export class CommandeSA extends GenericSA<
  CommandeDO,
  CommandeRequestDTO,
  CommandeResponseDTO,
  CommandeSM,
  CommandeFactory
> {
}

export const commandeSA = new CommandeSA(commandeSM, commandeFactory, 'Commande');

