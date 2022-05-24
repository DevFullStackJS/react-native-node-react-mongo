import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { authentificationController } from '../controller/Authentification';

const authentificationRoutes = () => genericRoute({ controller: authentificationController, schema: Joi.Authentification });

export const authentificationRouter = authentificationRoutes();

/**
 * POST /api/authentification
 * @tags Authentification
 * @summary Créer un Authentification (goToAuthentification)
 * @param {AuthentificationRequestDTO} request.body.required
 * @return {AuthentificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

