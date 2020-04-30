import { BaseObject } from '../_common';
import { Workout } from './Workout';

export class WorkoutList extends BaseObject {

  public Workouts: Workout[];

  constructor(options: {
    workouts?: Workout[],
  }) {
    super();

    this.Workouts = options.workouts || [];
  }

  toXml() {
    return this.Workouts
      .map((_workout: Workout) => BaseObject.buildXmlNode('Workout', _workout.toXml(), _workout.attributes))
      .join('\n');
  }
}
