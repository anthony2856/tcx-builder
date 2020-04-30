import { BaseObject } from '../_common';
import { WorkoutFolder } from './WorkoutFolder';

export class Workouts extends BaseObject {

  public Running: WorkoutFolder;
  public Biking: WorkoutFolder;
  public Other: WorkoutFolder;

  constructor(options: {
    running: WorkoutFolder,
    biking: WorkoutFolder,
    other: WorkoutFolder,
  }) {
    super();

    this.Running = options.running;
    this.Biking = options.biking;
    this.Other = options.other;
  }

  toXml() {
    return `${BaseObject.buildXmlNode('Running', this.Running.toXml(), this.Running.attributes)}
      ${BaseObject.buildXmlNode('Biking', this.Biking.toXml(), this.Biking.attributes)}
      ${BaseObject.buildXmlNode('Other', this.Other.toXml(), this.Other.attributes)}`;
  }
}
