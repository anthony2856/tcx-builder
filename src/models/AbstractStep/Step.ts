import { BaseObject } from '../_common';
import { AbstractStep } from './AbstractStep';
import { Intensity } from '../../interfaces';
import { Duration } from '../Duration';
import { Target } from '../Target';
import { isNil as _isNil } from 'lodash';
import { AbstractStepAttributes } from './AbstractStepAttributes';

export class Step extends AbstractStep {
  public Name?: string;
  public Duration: Duration;
  public Intensity: Intensity;
  public Target: Target;

  constructor(options: {
    stepId: number,
    name?: string,
    duration: Duration,
    intensity: Intensity,
    target: Target,
  }) {
    const attributes = new AbstractStepAttributes('Step_t');
    super(attributes, options.stepId);

    this.Name = options.name;
    this.Duration = options.duration;
    this.Intensity = options.intensity;
    this.Target = options.target;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Name)) {
      xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    }

    xmlElement += BaseObject.buildXmlNode('Duration', this.Duration.toXml(), this.Duration.attributes);
    xmlElement += BaseObject.buildXmlNode('Intensity', this.Intensity);
    xmlElement += BaseObject.buildXmlNode('Target', this.Target.toXml(), this.Target.attributes);

    return xmlElement;
  }
}
