import { BaseObject } from '../_common';
import { Target } from './Target';
import { TargetAttributes } from './TargetAttributes';
import { Zone } from '../Zone';

export class HeartRate extends Target {
  public HeartRateZone: Zone;

  constructor(options: {
    heartRateZone: Zone;
  }) {
    const attributes = new TargetAttributes('HeartRate_t');
    super(attributes);

    this.HeartRateZone = options.heartRateZone;
  }

  toXml() {
    return BaseObject.buildXmlNode('HeartRateZone', this.HeartRateZone.toXml(), this.HeartRateZone.attributes);
  }
}
