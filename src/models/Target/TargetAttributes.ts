import { BaseAttribute } from '../_common';

type TargetType = 'Speed_t' | 'HeartRate_t' | 'Cadence_t' | 'None_t';

export class TargetAttributes extends BaseAttribute {
  constructor(type: TargetType) {
    super();
    Object.assign(this, {
      'xsi:type': type,
    });
  }
}
