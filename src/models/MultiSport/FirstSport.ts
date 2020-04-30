import { BaseObject } from '../_common';
import { Activity } from '../Activity';

export class FirstSport extends BaseObject {
  public Activity: Activity;

  constructor(options: {
    activity: Activity,
  }) {
    super();
    this.Activity = options.activity;
  }

  toXml() {
    return BaseObject.buildXmlNode('Activity', this.Activity.toXml(), this.Activity.attributes);
  }
}
