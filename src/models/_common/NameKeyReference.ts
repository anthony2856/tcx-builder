import { BaseObject } from './BaseObject';

export class NameKeyReference extends BaseObject {

  public Id: string;

  constructor(options: {
    id: string,
  }) {
    super();

    this.Id = options.id;
  }

  toXml() {
    return this.Id;
  }
}
