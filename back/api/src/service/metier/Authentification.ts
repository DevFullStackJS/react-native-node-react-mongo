import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { AuthentificationDO } from '../../data/do/Authentification';
import { AuthentificationRepository } from '../../repository/Authentification';

export class AuthentificationSM extends GenericSM<AuthentificationDO, string, AuthentificationRepository> {
}

export const authentificationSM = new AuthentificationSM(getCustomRepository(AuthentificationRepository));

