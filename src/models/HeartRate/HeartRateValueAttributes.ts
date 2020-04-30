import { BaseAttribute } from '../_common';

type HeartRateValueType = 'HeartRateInBeatsPerMinute_t' | 'HeartRateAsPercentOfMax_t';

export class HeartRateValueAttributes extends BaseAttribute {
  constructor(type: HeartRateValueType) {
    super();
    Object.assign(this, {
      'xsi:type': type,
    });
  }
}
