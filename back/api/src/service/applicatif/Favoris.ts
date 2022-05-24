import { GenericSA } from '../../common/service/generic.sa';
import {
    favorisFactory,
  FavorisFactory,
} from '../../constraint/factory/Favoris';
import { FavorisDO } from '../../data/do/Favoris';
// @ts-ignore
import { FavorisRequestDTO } from '../../data/dto/Favoris/request';
// @ts-ignore
import { FavorisResponseDTO } from '../../data/dto/Favoris/response';
import { favorisSM, FavorisSM } from '../metier/Favoris';

export class FavorisSA extends GenericSA<
  FavorisDO,
  FavorisRequestDTO,
  FavorisResponseDTO,
  FavorisSM,
  FavorisFactory
> {
}

export const favorisSA = new FavorisSA(favorisSM, favorisFactory, 'Favoris');

