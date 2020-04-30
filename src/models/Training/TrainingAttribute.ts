import { BaseAttribute } from '../_common';

export class TrainingAttributes extends BaseAttribute {
  constructor(
    public VirtualPartner: boolean = false,
  ) {
    super();
  }
}
