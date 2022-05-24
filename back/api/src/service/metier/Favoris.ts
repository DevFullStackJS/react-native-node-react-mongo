import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { FavorisDO } from '../../data/do/Favoris';
import { FavorisRepository } from '../../repository/Favoris';

export class FavorisSM extends GenericSM<FavorisDO, string, FavorisRepository> {
}

export const favorisSM = new FavorisSM(getCustomRepository(FavorisRepository));

