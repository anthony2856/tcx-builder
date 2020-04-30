import { BaseObject } from '../_common';
import { isNil as _isNil } from 'lodash';
import { Course } from './Course';

export class CourseList extends BaseObject {
  public Course?: Course[];

  constructor(options: {
    course?: Course[],
  }) {
    super();

    this.Course = options.course;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Course) && this.Course.length) {
      xmlElement += this.Course
        .map((_course: Course) => BaseObject.buildXmlNode('Course', _course.toXml()))
        .join('\n');
    }

    return xmlElement;
  }
}
