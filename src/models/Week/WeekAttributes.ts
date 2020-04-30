import { BaseAttribute } from '../_common';

export class WeekAttributes extends BaseAttribute {
  constructor(
    public StartDay: Date,
  ) {
    super();
  }
}
