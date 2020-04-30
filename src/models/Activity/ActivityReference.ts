import { BaseObject } from '../_common';

export class ActivityReference extends BaseObject {

  public Id: Date;

  constructor(options: {
    id: Date,
  }) {
    super();

    this.Id = options.id;
  }

  toXml() {
    return this.Id.toISOString();
  }
}
