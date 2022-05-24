import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { GuideDO } from '../../data/do/Guide';
import { GuideRepository } from '../../repository/Guide';

export class GuideSM extends GenericSM<GuideDO, string, GuideRepository> {
}

export const guideSM = new GuideSM(getCustomRepository(GuideRepository));

