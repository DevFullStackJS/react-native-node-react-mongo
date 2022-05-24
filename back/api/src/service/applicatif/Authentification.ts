import { GenericSA } from '../../common/service/generic.sa';
import {
    authentificationFactory,
  AuthentificationFactory,
} from '../../constraint/factory/Authentification';
import { AuthentificationDO } from '../../data/do/Authentification';
// @ts-ignore
import { AuthentificationRequestDTO } from '../../data/dto/Authentification/request';
// @ts-ignore
import { AuthentificationResponseDTO } from '../../data/dto/Authentification/response';
import { authentificationSM, AuthentificationSM } from '../metier/Authentification';

export class AuthentificationSA extends GenericSA<
  AuthentificationDO,
  AuthentificationRequestDTO,
  AuthentificationResponseDTO,
  AuthentificationSM,
  AuthentificationFactory
> {
}

export const authentificationSA = new AuthentificationSA(authentificationSM, authentificationFactory, 'Authentification');

