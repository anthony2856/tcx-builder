import { HeartRateValue } from './HeartRateValue';
import { HeartRateValueAttributes } from './HeartRateValueAttributes';
import { BaseObject } from '../_common';

export class HeartRateAsPercentOfMax extends HeartRateValue {
  public Value: number;

  constructor(options: {
    value: number,
  }) {
    const attributes = new HeartRateValueAttributes('HeartRateAsPercentOfMax_t');
    super(attributes);

    this.Value = options.value;
  }

  toXml() {
    return BaseObject.buildXmlNode('Value', Math.round(this.Value).toString());
  }

}
