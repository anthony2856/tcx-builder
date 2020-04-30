import { BaseAttribute } from '../_common';

export class TrackPointExtensionsAttributes extends BaseAttribute {

  public xmlns: string;

  constructor() {
    super();
    this.xmlns = 'http://www.garmin.com/xmlschemas/ActivityExtension/v2';
  }
}
