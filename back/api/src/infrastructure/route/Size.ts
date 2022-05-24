import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sizeController } from '../controller/Size';

const sizeRoutes = () => genericRoute({ controller: sizeController, schema: Joi.Size, name: 'Size' });

export const sizeRouter = sizeRoutes();

/**
 * GET /api/size
 * @tags Size
 * @security BearerAuth
 * @summary Créer un Size (getAllSize)
 * @param {SizeRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {SizeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

