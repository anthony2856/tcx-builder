import { BaseObject } from '../_common';
import { Duration } from './Duration';
import { DurationAttributes } from './DurationAttributes';

export class Distance extends Duration {
  public Meters: number;

  constructor(options: {
    meters: number;
  }) {
    const attributes = new DurationAttributes('Time_t');
    super(attributes);

    this.Meters = options.meters;
  }

  toXml() {
    return BaseObject.buildXmlNode('Meters', this.Meters.toString());
  }
}
