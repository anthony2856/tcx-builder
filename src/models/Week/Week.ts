import { BaseObject } from '../_common';
import { WeekAttributes } from './WeekAttributes';
import { isNil as _isNil } from 'lodash';

export class Week extends BaseObject {

  public attributes: WeekAttributes;

  public Notes?: string;

  constructor(attributes: WeekAttributes, options: {
    notes?: string,
  }) {
    super();

    this.attributes = attributes;

    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';
    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
