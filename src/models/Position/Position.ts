import { BaseObject } from '../_common';

export class Position extends BaseObject {

  constructor(
    public LatitudeDegrees: number,
    public LongitudeDegrees: number,
  ) {
    super();
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('LatitudeDegrees', this.LatitudeDegrees.toString());
    xmlElement += BaseObject.buildXmlNode('LongitudeDegrees', this.LongitudeDegrees.toString());
    return xmlElement;
  }
}
