import { GenericController } from '../../common/infrastructure/generic.controller';
import { AuthentificationDO } from '../../data/do/Authentification';
// @ts-ignore
import { AuthentificationRequestDTO } from '../../data/dto/Authentification/request';
// @ts-ignore
import { AuthentificationResponseDTO } from '../../data/dto/Authentification/response';
import { authentificationSA, AuthentificationSA } from '../../service/applicatif/Authentification';

class AuthentificationController extends GenericController<
  AuthentificationDO,
  AuthentificationRequestDTO,
  AuthentificationResponseDTO,
  AuthentificationSA
> {}

export const authentificationController = new AuthentificationController(authentificationSA);

