import { GenericController } from '../../common/infrastructure/generic.controller';
import { FavorisDO } from '../../data/do/Favoris';
// @ts-ignore
import { FavorisRequestDTO } from '../../data/dto/Favoris/request';
// @ts-ignore
import { FavorisResponseDTO } from '../../data/dto/Favoris/response';
import { favorisSA, FavorisSA } from '../../service/applicatif/Favoris';

class FavorisController extends GenericController<
  FavorisDO,
  FavorisRequestDTO,
  FavorisResponseDTO,
  FavorisSA
> {}

export const favorisController = new FavorisController(favorisSA);

