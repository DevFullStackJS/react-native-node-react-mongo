import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { detailController } from '../controller/Detail';

const detailRoutes = () => genericRoute({ controller: detailController, schema: Joi.Detail, name: 'Detail' });

export const detailRouter = detailRoutes();

/**
 * GET /api/detail
 * @tags Detail
 * @security BearerAuth
 * @summary Créer un Detail (getAllDetail)
 * @param {DetailRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {DetailResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/detail/partialUpdate/
 * @tags Detail
 * @security BearerAuth
 * @summary Créer un Detail (updateDetail)
 * @param {DetailRequestDTO} request.body.required
 * @return {DetailResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/detail
 * @tags Detail
 * @security BearerAuth
 * @summary Créer un Detail (addDetail)
 * @param {DetailRequestDTO} request.body.required
 * @return {DetailResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/detail
 * @tags Detail
 * @security BearerAuth
 * @summary Créer un Detail (deleteDetail)
 * @param {DetailRequestDTO} request.body.required
 * @return {DetailResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

