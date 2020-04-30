import { BaseObject } from '../_common';

export class QuickWorkout extends BaseObject {

  constructor(
    public TotalTimeSeconds: number,
    public DistanceMeters: number,
  ) {
    super();
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('TotalTimeSeconds', this.TotalTimeSeconds.toString());
    xmlElement += BaseObject.buildXmlNode('DistanceMeters', this.DistanceMeters.toString());
    return xmlElement;
  }
}
