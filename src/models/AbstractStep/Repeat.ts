import { BaseObject } from '../_common';
import { AbstractStep } from './AbstractStep';
import { AbstractStepAttributes } from './AbstractStepAttributes';

export class Repeat extends AbstractStep {
  public Repetitions: number;
  public Child: AbstractStep[];

  constructor(options: {
    stepId: number,
    repetitions: number,
    child: AbstractStep[],
  }) {
    const attributes = new AbstractStepAttributes('Repeat_t');
    super(attributes, options.stepId);

    this.Repetitions = options.repetitions;
    this.Child = options.child;
  }

  toXml() {
    let xmlElement = '';

    xmlElement += BaseObject.buildXmlNode('Repetitions', this.Repetitions.toString());
    xmlElement += this.Child
      .map((_child: AbstractStep) => BaseObject.buildXmlNode('Child', _child.toXml(), _child.attributes))
      .join('\n');

    return xmlElement;
  }
}
