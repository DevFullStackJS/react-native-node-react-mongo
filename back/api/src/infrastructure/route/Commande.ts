import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { commandeController } from '../controller/Commande';

const commandeRoutes = () => genericRoute({ controller: commandeController, schema: Joi.Commande, name: 'Commande' });

export const commandeRouter = commandeRoutes();

/**
 * POST /api/commande
 * @tags Commande
 * @security BearerAuth
 * @summary Créer un Commande (addCommande)
 * @param {CommandeRequestDTO} request.body.required
 * @return {CommandeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/commande
 * @tags Commande
 * @security BearerAuth
 * @summary Créer un Commande (updateCommande)
 * @param {CommandeRequestDTO} request.body.required
 * @return {CommandeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/commande
 * @tags Commande
 * @security BearerAuth
 * @summary Créer un Commande (deleteCommande)
 * @param {CommandeRequestDTO} request.body.required
 * @return {CommandeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/commande
 * @tags Commande
 * @security BearerAuth
 * @summary Créer un Commande (getAllCommande)
 * @param {CommandeRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {CommandeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

