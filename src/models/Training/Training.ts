import { BaseObject } from '../_common';
import { QuickWorkout } from '../Workout';
import { Plan as PlanClass } from '../Plan';
import { TrainingAttributes } from './TrainingAttribute';
import { isNil as _isNil } from 'lodash';

export class Training extends BaseObject {

  public attributes: TrainingAttributes;
  public QuickWorkoutResults?: QuickWorkout;
  public Plan?: PlanClass;

  constructor(
    virtualPartner: boolean,
    options?: {
      quickWorkoutResults?: QuickWorkout,
      plan?: PlanClass,
    },
  ) {
    super();

    this.attributes = new TrainingAttributes(virtualPartner);
    this.QuickWorkoutResults = options?.quickWorkoutResults;
    this.Plan = options?.plan;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.QuickWorkoutResults)) {
      xmlElement += BaseObject.buildXmlNode('QuickWorkoutResults', this.QuickWorkoutResults.toXml());
    }

    if (!_isNil(this.Plan)) {
      xmlElement += BaseObject.buildXmlNode('Plan', this.Plan.toXml(), this.Plan.attributes);
    }

    return xmlElement;
  }
}
