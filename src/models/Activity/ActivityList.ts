import { BaseObject } from '../_common';
import { Activity as ActivityClass } from './Activity';
import { MultiSportSession as MultiSportSessionClass } from '../MultiSport';
import { isNil as _isNil } from 'lodash';

export class ActivityList extends BaseObject {
  public Activity?: ActivityClass[];
  public MultiSportSession?: MultiSportSessionClass[];

  constructor(options: {
    activity?: ActivityClass[],
    multiSportSession?: MultiSportSessionClass[],
  }) {
    super();

    this.Activity = options.activity;
    this.MultiSportSession = options.multiSportSession;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Activity) && this.Activity.length) {
      xmlElement += this.Activity
        .map((_activity: ActivityClass) => BaseObject.buildXmlNode('Activity', _activity.toXml(), _activity.attributes))
        .join('\n');
    }

    if (!_isNil(this.MultiSportSession) && this.MultiSportSession.length) {
      xmlElement += this.MultiSportSession
        .map((_session: MultiSportSessionClass) => BaseObject.buildXmlNode('MultiSportSession', _session.toXml()))
        .join('\n');
    }

    return xmlElement;
  }
}
