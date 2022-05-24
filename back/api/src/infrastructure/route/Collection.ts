import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { collectionController } from '../controller/Collection';

const collectionRoutes = () => genericRoute({ controller: collectionController, schema: Joi.Collection, name: 'Collection' });

export const collectionRouter = collectionRoutes();

/**
 * GET /api/collection
 * @tags Collection
 * @security BearerAuth
 * @summary Créer un Collection (getAllCollection)
 * @param {CollectionRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {CollectionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

