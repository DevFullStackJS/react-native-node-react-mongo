import { GenericSA } from '../../common/service/generic.sa';
import {
    sizeFactory,
  SizeFactory,
} from '../../constraint/factory/Size';
import { SizeDO } from '../../data/do/Size';
// @ts-ignore
import { SizeRequestDTO } from '../../data/dto/Size/request';
// @ts-ignore
import { SizeResponseDTO } from '../../data/dto/Size/response';
import { sizeSM, SizeSM } from '../metier/Size';

export class SizeSA extends GenericSA<
  SizeDO,
  SizeRequestDTO,
  SizeResponseDTO,
  SizeSM,
  SizeFactory
> {
}

export const sizeSA = new SizeSA(sizeSM, sizeFactory, 'Size');

