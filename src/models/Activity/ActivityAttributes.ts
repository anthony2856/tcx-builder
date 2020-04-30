import { BaseAttribute } from '../_common';
import { ActivityAttributeSport } from '../../interfaces';

export class ActivityAttributes extends BaseAttribute {

  constructor(
    public Sport: ActivityAttributeSport,
  ) {
    super();
  }
}
