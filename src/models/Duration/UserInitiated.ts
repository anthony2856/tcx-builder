import { Duration } from './Duration';
import { DurationAttributes } from './DurationAttributes';

export class UserInitiated extends Duration {
  constructor(options: {
    seconds: number;
  }) {
    const attributes = new DurationAttributes('UserInitiated_t');
    super(attributes);
  }

  toXml() {
    return '';
  }
}
