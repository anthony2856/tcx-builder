import { BaseObject } from '../_common';
import { Duration } from './Duration';
import { DurationAttributes } from './DurationAttributes';

export class CaloriesBurned extends Duration {
  public Calories: number;

  constructor(options: {
    calories: number;
  }) {
    const attributes = new DurationAttributes('CaloriesBurned_t');
    super(attributes);

    this.Calories = options.calories;
  }

  toXml() {
    return BaseObject.buildXmlNode('Calories', this.Calories.toString());
  }
}
