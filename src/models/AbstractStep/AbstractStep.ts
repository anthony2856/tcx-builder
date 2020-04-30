import { BaseObject } from '../_common';
import { AbstractStepAttributes } from './AbstractStepAttributes';

export abstract class AbstractStep extends BaseObject {
  public attributes: AbstractStepAttributes;
  public StepId: number;

  constructor(attributes: AbstractStepAttributes, stepId: number) {
    super();

    this.attributes = AbstractStepAttributes;
    this.StepId = stepId;
  }

  abstract toXml(): string;
}
