import { BaseObject } from '../_common';
import { DurationAttributes } from './DurationAttributes';

export abstract class Duration extends BaseObject {

  public attributes: DurationAttributes;

  constructor(attributes: DurationAttributes) {
    super();
    this.attributes = attributes;
  }

  abstract toXml(): string;
}
