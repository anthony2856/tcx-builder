import { BaseObject } from '../_common';
import { Zone } from './Zone';
import { ZoneAttributes } from './ZoneAttributes';

export class PredefinedHeartRateZone extends Zone {
  public Number: number;

  constructor(options: {
    number: number;
  }) {
    const attributes = new ZoneAttributes('PredefinedHeartRateZone_t');
    super(attributes);

    this.Number = options.number;
  }

  toXml() {
    return BaseObject.buildXmlNode('Number', this.Number.toString());
  }
}
