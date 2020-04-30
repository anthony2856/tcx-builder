import { BaseObject } from '../_common';
import { Activity, ActivityLap } from '../Activity';
import { isNil as _isNil } from 'lodash';

export class NextSport extends BaseObject {
  public Transition?: ActivityLap;
  public Activity: Activity;

  constructor(options: {
    transition?: ActivityLap,
    activity: Activity,
  }) {
    super();
    this.Transition = options.transition;
    this.Activity = options.activity;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Transition)) {
      xmlElement += BaseObject.buildXmlNode('Transition', this.Transition.toXml(), this.Transition.attributes);
    }

    xmlElement += BaseObject.buildXmlNode('Activity', this.Activity.toXml(), this.Activity.attributes);

    return xmlElement;
  }
}
