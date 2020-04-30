import { BaseObject } from '../_common';
import { Zone } from './Zone';
import { ZoneAttributes } from './ZoneAttributes';
import { HeartRateValue } from '../HeartRate';

export class CustomHeartRateZone extends Zone {
  public Low: HeartRateValue;
  public High: HeartRateValue;

  constructor(options: {
    low: HeartRateValue,
    high: HeartRateValue,
  }) {
    const attributes = new ZoneAttributes('CustomHeartRateZone_t');
    super(attributes);

    this.Low = options.low;
    this.High = options.high;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Low', this.Low.toXml());
    xmlElement += BaseObject.buildXmlNode('High', this.High.toString());
    return xmlElement;
  }
}
