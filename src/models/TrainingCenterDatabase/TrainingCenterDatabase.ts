import { BaseObject } from '../_common';
import { isNil as _isNil } from 'lodash';
import { ActivityList } from '../Activity';
import { Folders } from '../Folders';
import { TrainingCenterDatabaseAttributes } from './TrainingCenterDatabaseAttributes';
import { WorkoutList } from '../Workout';
import { CourseList } from '../Course';
import { AbstractSource } from '../AbstractSource';

export class TrainingCenterDatabase extends BaseObject {
  public attributes: TrainingCenterDatabaseAttributes;
  public Folders?: Folders;
  public Activities?: ActivityList;
  public Workouts?: WorkoutList;
  public Courses?: CourseList;
  public Author?: AbstractSource;

  constructor(options: {
    folders?: Folders,
    activities?: ActivityList,
    workouts?: WorkoutList,
    courses?: CourseList,
    author?: AbstractSource,
  }) {
    super();

    this.attributes = new TrainingCenterDatabaseAttributes();

    this.Folders = options.folders;
    this.Activities = options.activities;
    this.Workouts = options.workouts;
    this.Courses = options.courses;
    this.Author = options.author;
  }

  toXml(): string {
    let xmlElement = '';

    if (!_isNil(this.Folders)) {
      xmlElement += BaseObject.buildXmlNode('Folders', this.Folders.toXml());
    }

    if (!_isNil(this.Activities)) {
      xmlElement += BaseObject.buildXmlNode('Activities', this.Activities.toXml());
    }

    if (!_isNil(this.Workouts)) {
      xmlElement += BaseObject.buildXmlNode('Workouts', this.Workouts.toXml());
    }

    if (!_isNil(this.Courses)) {
      xmlElement += BaseObject.buildXmlNode('Courses', this.Courses.toXml());
    }

    if (!_isNil(this.Author)) {
      xmlElement += BaseObject.buildXmlNode('Author', this.Author.toXml(), this.Author.attributes);
    }

    return `<?xml version="1.0" encoding="utf-8"?>\n${BaseObject.buildXmlNode('TrainingCenterDatabase', xmlElement, this.attributes)}`;
  }
}
