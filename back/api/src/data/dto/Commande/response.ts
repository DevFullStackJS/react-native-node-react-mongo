export type CommandeResponseDTO = {
   produits: string;
   sous_total: number;
   frais: number;
   date_livraison: string;
   code_promo: string;
   type_payment: string;
   user: string;
  id: string;
}

/**
 * @typedef {object} CommandeResponseDTO
 * @property {string} produits
 * @property {number} sous_total
 * @property {number} frais
 * @property {string} date_livraison
 * @property {string} code_promo
 * @property {string} type_payment
 * @property {string} user
 */

