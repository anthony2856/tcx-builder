import { BaseAttribute } from '../_common';

export class ActivityLapAttributes extends BaseAttribute {

  constructor(
    public StartTime: Date = new Date(),
  ) {
    super();
  }
}
