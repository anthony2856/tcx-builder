import { BaseObject } from '../_common';
import { ZoneAttributes } from './ZoneAttributes';

export abstract class Zone extends BaseObject {

  public attributes: ZoneAttributes;

  constructor(attributes: ZoneAttributes) {
    super();
    this.attributes = attributes;
  }

  abstract toXml(): string;
}
