import { BaseAttribute } from '../_common';

type ZoneType = 'PredefinedSpeedZone_t' | 'CustomSpeedZone_t' | 'PredefinedHeartRateZone_t' | 'CustomHeartRateZone_t';

export class ZoneAttributes extends BaseAttribute {
  constructor(type: ZoneType) {
    super();
    Object.assign(this, {
      'xsi:type': type,
    });
  }
}
