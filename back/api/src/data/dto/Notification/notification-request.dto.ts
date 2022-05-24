export interface NotificationRequestDTO {
  titre: string;
  message: string;
  utilisateur: any;
}

/**
 * @typedef {object} NotificationRequestDTO
 * @property {string} titre.required
 * @property {string} message.required
 * @property {boolean} tous - default false
 * @property {array<string>} utilisateurIds
 */
