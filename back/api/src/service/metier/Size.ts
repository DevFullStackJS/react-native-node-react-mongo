import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { SizeDO } from '../../data/do/Size';
import { SizeRepository } from '../../repository/Size';

export class SizeSM extends GenericSM<SizeDO, string, SizeRepository> {
}

export const sizeSM = new SizeSM(getCustomRepository(SizeRepository));

