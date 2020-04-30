import { BaseObject } from '../_common';
import { History } from '../History';
import { Workouts } from '../Workout';
import { Courses } from '../Course';
import { isNil as _isNil } from 'lodash';

export class Folders extends BaseObject {
  public History?: History;
  public Workouts?: Workouts;
  public Courses?: Courses;

  constructor(options: {
    history?: History,
    workouts?: Workouts,
    courses?: Courses,
  }) {
    super();

    this.History = options.history;
    this.Workouts = options.workouts;
    this.Courses = options.courses;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.History)) {
      xmlElement += BaseObject.buildXmlNode('History', this.History.toXml());
    }

    if (!_isNil(this.Workouts)) {
      xmlElement += BaseObject.buildXmlNode('Workouts', this.Workouts.toXml());
    }

    if (!_isNil(this.Courses)) {
      xmlElement += BaseObject.buildXmlNode('Courses', this.Courses.toXml());
    }

    return xmlElement;
  }
}
