import { BaseObject } from '../_common';
import { Duration } from './Duration';
import { DurationAttributes } from './DurationAttributes';

export class Time extends Duration {
  public Seconds: number;

  constructor(options: {
    seconds: number;
  }) {
    const attributes = new DurationAttributes('Time_t');
    super(attributes);

    this.Seconds = options.seconds;
  }

  toXml() {
    return BaseObject.buildXmlNode('Seconds', this.Seconds.toString());
  }
}
