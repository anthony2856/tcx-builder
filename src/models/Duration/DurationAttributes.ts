import { BaseAttribute } from '../_common';

type DurationType = 'Time_t' | 'Distance_t' | 'HeartRateAbove_t' | 'HeartRateBelow_t' | 'CaloriesBurned_t' | 'UserInitiated_t';

export class DurationAttributes extends BaseAttribute {
  constructor(type: DurationType) {
    super();
    Object.assign(this, {
      'xsi:type': type,
    });
  }
}
