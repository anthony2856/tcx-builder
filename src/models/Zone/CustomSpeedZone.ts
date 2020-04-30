import { BaseObject } from '../_common';
import { Zone } from './Zone';
import { ZoneAttributes } from './ZoneAttributes';
import { SpeedType } from '../../interfaces/SpeedType';

export class CustomSpeedZone extends Zone {
  public ViewAs: SpeedType;
  public LowInMetersPerSecond: number;
  public HighInMetersPerSecond: number;

  constructor(options: {
    viewAs: SpeedType,
    lowInMetersPerSecond: number,
    highInMetersPerSecond: number,
  }) {
    const attributes = new ZoneAttributes('CustomSpeedZone_t');
    super(attributes);

    this.ViewAs = options.viewAs;
    this.LowInMetersPerSecond = options.lowInMetersPerSecond;
    this.HighInMetersPerSecond = options.highInMetersPerSecond;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('ViewAs', this.ViewAs);
    xmlElement += BaseObject.buildXmlNode('LowInMetersPerSecond', this.LowInMetersPerSecond.toString());
    xmlElement += BaseObject.buildXmlNode('HighInMetersPerSecond', this.HighInMetersPerSecond.toString());
    return xmlElement;
  }
}
