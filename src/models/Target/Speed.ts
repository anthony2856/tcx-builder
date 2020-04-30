import { BaseObject } from '../_common';
import { Target } from './Target';
import { TargetAttributes } from './TargetAttributes';
import { Zone } from '../Zone';

export class Speed extends Target {
  public SpeedZone: Zone;

  constructor(options: {
    speedZone: Zone;
  }) {
    const attributes = new TargetAttributes('Speed_t');
    super(attributes);

    this.SpeedZone = options.speedZone;
  }

  toXml() {
    return BaseObject.buildXmlNode('SpeedZone', this.SpeedZone.toXml(), this.SpeedZone.attributes);
  }
}
