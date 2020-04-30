import { BaseObject } from '../_common';
import { Target } from './Target';
import { TargetAttributes } from './TargetAttributes';

export class Cadence extends Target {
  public Low: number;
  public High: number;

  constructor(options: {
    low: number,
    high: number,
  }) {
    const attributes = new TargetAttributes('Cadence_t');
    super(attributes);

    this.Low = options.low;
    this.High = options.high;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Low', this.Low.toString());
    xmlElement += BaseObject.buildXmlNode('High', this.High.toString());
    return xmlElement;
  }
}
