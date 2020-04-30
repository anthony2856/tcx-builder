import { BaseObject } from '../_common';
import { TargetAttributes } from './TargetAttributes';

export abstract class Target extends BaseObject {
  public attributes: TargetAttributes;

  constructor(attributes: TargetAttributes) {
    super();
    this.attributes = attributes;
  }

  abstract toXml(): string;
}
