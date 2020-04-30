import { BaseAttribute } from '../_common';

type AbstractSourceType = 'Device_t' | 'Application_t';

export class AbstractSourceAttributes extends BaseAttribute {
  constructor(type: AbstractSourceType) {
    super();
    Object.assign(this, {
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:type': type,
    });
  }
}
