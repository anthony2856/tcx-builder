import { BaseObject } from '../_common';
import { isNil as _isNil } from 'lodash';
import { TrackPointExtensionsAttributes } from './TrackPointExtensionsAttributes';

export class TrackPointExtensions extends BaseObject {
  public attributes: TrackPointExtensionsAttributes;
  public Speed?: number;
  public Watts?: number;

  constructor(options: {
    Speed?: number,
    Watts?: number,
  }) {
    super();

    this.attributes = new TrackPointExtensionsAttributes();

    this.Speed = options.Speed;
    this.Watts = options.Watts;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Speed)) {
      const speedInMetersPerSec = this.Speed / 3.6;
      xmlElement += BaseObject.buildXmlNode('Speed', speedInMetersPerSec.toString());
    }

    if (!_isNil(this.Watts)) {
      xmlElement += BaseObject.buildXmlNode('Watts', this.Watts.toString());
    }

    return xmlElement;
  }
}
