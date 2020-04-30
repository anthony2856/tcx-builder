import { BaseObject } from '../_common';
import { AbstractSourceAttributes } from './AbstractSourceAttributes';

export abstract class AbstractSource extends BaseObject {
  public attributes: AbstractSourceAttributes;
  public Name: string;

  constructor(attributes: AbstractSourceAttributes, name: string) {
    super();

    this.attributes = attributes;
    this.Name = name;
  }

  abstract toXml(): string;
}
