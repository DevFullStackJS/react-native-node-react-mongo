import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CommandeDO } from '../../data/do/Commande';
import { CommandeRepository } from '../../repository/Commande';

export class CommandeSM extends GenericSM<CommandeDO, string, CommandeRepository> {
}

export const commandeSM = new CommandeSM(getCustomRepository(CommandeRepository));

