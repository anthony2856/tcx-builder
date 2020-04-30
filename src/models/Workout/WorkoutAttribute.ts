import { BaseAttribute } from '../_common';
import { ActivityAttributeSport } from '../../interfaces';

export class WorkoutAttributes extends BaseAttribute {

  constructor(
    public Sport: ActivityAttributeSport,
  ) {
    super();
  }
}
