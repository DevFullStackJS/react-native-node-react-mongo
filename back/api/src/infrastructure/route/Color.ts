import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { colorController } from '../controller/Color';

const colorRoutes = () => genericRoute({ controller: colorController, schema: Joi.Color, name: 'Color' });

export const colorRouter = colorRoutes();

/**
 * GET /api/color
 * @tags Color
 * @security BearerAuth
 * @summary Créer un Color (getAllColor)
 * @param {ColorRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {ColorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

