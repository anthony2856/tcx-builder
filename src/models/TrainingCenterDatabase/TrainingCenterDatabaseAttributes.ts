import { BaseAttribute } from '../_common';

export class TrainingCenterDatabaseAttributes extends BaseAttribute {

  public xmlns: string;

  constructor() {
    super();
    this.xmlns = 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2';
    Object.assign(this, {
      'xmlns:ns2': 'http://www.garmin.com/xmlschemas/ActivityExtension/v2',
    });
  }
}
