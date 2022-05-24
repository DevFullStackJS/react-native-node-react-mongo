import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { favorisController } from '../controller/Favoris';

const favorisRoutes = () => genericRoute({ controller: favorisController, schema: Joi.Favoris, name: 'Favoris' });

export const favorisRouter = favorisRoutes();

/**
 * GET /api/favoris
 * @tags Favoris
 * @security BearerAuth
 * @summary Créer un Favoris (getAllFavoris)
 * @param {FavorisRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {FavorisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/favoris
 * @tags Favoris
 * @security BearerAuth
 * @summary Créer un Favoris (addFavoris)
 * @param {FavorisRequestDTO} request.body.required
 * @return {FavorisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/favoris/partialUpdate/
 * @tags Favoris
 * @security BearerAuth
 * @summary Créer un Favoris (updateFavoris)
 * @param {FavorisRequestDTO} request.body.required
 * @return {FavorisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/favoris
 * @tags Favoris
 * @security BearerAuth
 * @summary Créer un Favoris (deleteFavoris)
 * @param {FavorisRequestDTO} request.body.required
 * @return {FavorisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

