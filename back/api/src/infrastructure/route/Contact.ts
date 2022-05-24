import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { contactController } from '../controller/Contact';

const contactRoutes = () => genericRoute({ controller: contactController, schema: Joi.Contact, name: 'Contact' });

export const contactRouter = contactRoutes();

/**
 * POST /api/contact
 * @tags Contact
 * @security BearerAuth
 * @summary Créer un Contact (addContact)
 * @param {ContactRequestDTO} request.body.required
 * @return {ContactResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/contact
 * @tags Contact
 * @security BearerAuth
 * @summary Créer un Contact (updateContact)
 * @param {ContactRequestDTO} request.body.required
 * @return {ContactResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/contact
 * @tags Contact
 * @security BearerAuth
 * @summary Créer un Contact (getAllContact)
 * @param {ContactRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {ContactResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/contact
 * @tags Contact
 * @security BearerAuth
 * @summary Créer un Contact (deleteContact)
 * @param {ContactRequestDTO} request.body.required
 * @return {ContactResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

