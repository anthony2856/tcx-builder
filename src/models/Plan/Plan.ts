import { BaseObject } from '../_common';
import { PlanAttributes } from './PlanAttributes';
import { isNil as _isNil } from 'lodash';

export class Plan extends BaseObject {
  public attributes: PlanAttributes;

  public Name?: string;

  constructor(attributes: PlanAttributes, options?: {
      name?: string;
    },
  ) {
    super();

    this.attributes = attributes;
    this.Name = options?.name;
  }

  toXml() {
    let xmlElement = '';
    if (!_isNil(this.Name)) {
      xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    }

    return xmlElement;
  }
}
