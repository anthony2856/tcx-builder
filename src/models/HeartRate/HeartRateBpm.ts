import { BaseObject } from '../_common';
import { HeartRateInBeatsPerMinute } from './HeartRateInBeatsPerMinute';

export class HeartRateBpm extends BaseObject {

  private _value: HeartRateInBeatsPerMinute;

  public get Value(): number {
    return this._value.Value;
  }

  constructor(
    value: number,
  ) {
    super();

    this._value = new HeartRateInBeatsPerMinute({ value });
  }

  toXml() {
    return this._value.toXml();
  }
}
