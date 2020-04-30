import { Target } from './Target';
import { TargetAttributes } from './TargetAttributes';
import { BaseObject } from '../_common';

export class None extends Target {
  constructor() {
    const attributes = new TargetAttributes('None_t');
    super(attributes);
  }

  toXml() {
    return '';
  }
}
