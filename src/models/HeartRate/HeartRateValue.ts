import { BaseObject } from '../_common';
import { HeartRateValueAttributes } from './HeartRateValueAttributes';

export abstract class HeartRateValue extends BaseObject {

  public attributes: HeartRateValueAttributes;

  constructor(attributes: HeartRateValueAttributes) {
    super();
    this.attributes = attributes;
  }

  abstract toXml(): string;
}
