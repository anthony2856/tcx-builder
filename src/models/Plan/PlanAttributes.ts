import { BaseAttribute } from '../_common';
import { TrainingType } from '../../interfaces';

export class PlanAttributes extends BaseAttribute {
  constructor(
    public Type: TrainingType,
    public IntervalWorkout: boolean,
  ) {
    super();
  }
}
