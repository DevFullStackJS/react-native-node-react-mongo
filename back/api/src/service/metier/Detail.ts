import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { DetailDO } from '../../data/do/Detail';
import { DetailRepository } from '../../repository/Detail';

export class DetailSM extends GenericSM<DetailDO, string, DetailRepository> {
}

export const detailSM = new DetailSM(getCustomRepository(DetailRepository));

