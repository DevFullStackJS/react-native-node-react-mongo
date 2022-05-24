import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { produitController } from '../controller/Produit';

const produitRoutes = () => genericRoute({ controller: produitController, schema: Joi.Produit, name: 'Produit' });

export const produitRouter = produitRoutes();

/**
 * POST /api/produit
 * @tags Produit
 * @security BearerAuth
 * @summary Créer un Produit (addProduit)
 * @param {ProduitRequestDTO} request.body.required
 * @return {ProduitResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/produit
 * @tags Produit
 * @security BearerAuth
 * @summary Créer un Produit (getAllProduit)
 * @param {ProduitRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {ProduitResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

