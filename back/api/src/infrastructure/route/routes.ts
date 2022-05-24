import { Router } from 'express';
import { conditionnalJwtPassport } from '../../service/middleware/passport/conditionnal-jwt-passport';
import { categorieRouter } from './Categorie';
import { messageRouter } from './Message';
import { notificationRouter } from './Notification';
import { commandeRouter } from './Commande';
import { utilisateurRouter } from './Utilisateur';
import { avisRouter } from './Avis';
import { contactRouter } from './Contact';
import { guideRouter } from './Guide';
import { favorisRouter } from './Favoris';
import { langueRouter } from './Langue';
import { produitRouter } from './Produit';
import { sizeRouter } from './Size';
import { colorRouter } from './Color';
import { collectionRouter } from './Collection';
import { detailRouter } from './Detail';

export const routes = () => {
  const router = Router();
  const secured = conditionnalJwtPassport(true);
 router.use('/categorie', categorieRouter);
 router.use('/message', messageRouter);
 router.use('/notification', notificationRouter);
 router.use('/commande', commandeRouter);
 router.use('/utilisateur', utilisateurRouter);
 router.use('/avis', avisRouter);
 router.use('/contact', contactRouter);
 router.use('/guide', guideRouter);
 router.use('/favoris', favorisRouter);
 router.use('/langue', langueRouter);
 router.use('/produit', produitRouter);
 router.use('/size', sizeRouter);
 router.use('/color', colorRouter);
 router.use('/collection', collectionRouter);
 router.use('/detail', detailRouter);
  
  return router;
};

