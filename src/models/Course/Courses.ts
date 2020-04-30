import { BaseObject } from '../_common';
import { CourseFolder } from './CourseFolder';

export class Courses extends BaseObject {

  public CourseFolder: CourseFolder;

  constructor(options: {
    courseFolder: CourseFolder,
  }) {
    super();

    this.CourseFolder = options.courseFolder;
  }

  toXml() {
    return BaseObject.buildXmlNode('CourseFolder', this.CourseFolder.toXml(), this.CourseFolder.attributes);
  }
}
