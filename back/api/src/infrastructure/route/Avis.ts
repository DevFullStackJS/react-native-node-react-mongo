import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { avisController } from '../controller/Avis';

const avisRoutes = () => genericRoute({ controller: avisController, schema: Joi.Avis, name: 'Avis' });

export const avisRouter = avisRoutes();

/**
 * POST /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Créer un Avis (addAvis)
 * @param {AvisRequestDTO} request.body.required
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Créer un Avis (getAllAvis)
 * @param {AvisRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Créer un Avis (updateAvis)
 * @param {AvisRequestDTO} request.body.required
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Créer un Avis (deleteAvis)
 * @param {AvisRequestDTO} request.body.required
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

