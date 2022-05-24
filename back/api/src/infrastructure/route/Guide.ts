import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { guideController } from '../controller/Guide';

const guideRoutes = () => genericRoute({ controller: guideController, schema: Joi.Guide, name: 'Guide' });

export const guideRouter = guideRoutes();

/**
 * POST /api/guide
 * @tags Guide
 * @security BearerAuth
 * @summary Créer un Guide (addGuide)
 * @param {GuideRequestDTO} request.body.required
 * @return {GuideResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/guide
 * @tags Guide
 * @security BearerAuth
 * @summary Créer un Guide (getAllGuide)
 * @param {GuideRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {GuideResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/guide
 * @tags Guide
 * @security BearerAuth
 * @summary Créer un Guide (updateGuide)
 * @param {GuideRequestDTO} request.body.required
 * @return {GuideResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/guide
 * @tags Guide
 * @security BearerAuth
 * @summary Créer un Guide (deleteGuide)
 * @param {GuideRequestDTO} request.body.required
 * @return {GuideResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

