import { BaseAttribute } from '../_common';

type AbstractStepType = 'Step_t' | 'Repeat_t';

export class AbstractStepAttributes extends BaseAttribute {
  constructor(type: AbstractStepType) {
    super();
    Object.assign(this, {
      'xsi:type': type,
    });
  }
}
