import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { categorieController } from '../controller/Categorie';

const categorieRoutes = () => genericRoute({ controller: categorieController, schema: Joi.Categorie, name: 'Categorie' });

export const categorieRouter = categorieRoutes();

/**
 * GET /api/categorie
 * @tags Categorie
 * @security BearerAuth
 * @summary Créer un Categorie (getAllCategorie)
 * @param {CategorieRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {CategorieResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/categorie
 * @tags Categorie
 * @security BearerAuth
 * @summary Créer un Categorie (addCategorie)
 * @param {CategorieRequestDTO} request.body.required
 * @return {CategorieResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/categorie
 * @tags Categorie
 * @security BearerAuth
 * @summary Créer un Categorie (deleteCategorie)
 * @param {CategorieRequestDTO} request.body.required
 * @return {CategorieResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/categorie
 * @tags Categorie
 * @security BearerAuth
 * @summary Créer un Categorie (updateCategorie)
 * @param {CategorieRequestDTO} request.body.required
 * @return {CategorieResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

