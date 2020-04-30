import { BaseObject, NameKeyReference } from '../_common';
import { isNil as _isNil } from 'lodash';
import { CourseFolderAttributes } from './CourseFolderAttributes';

export class CourseFolder extends BaseObject {

  public attributes: CourseFolderAttributes;
  public Folder?: CourseFolder[];
  public CourseNameRef?: NameKeyReference[];
  public Notes?: string;

  constructor(attributes: CourseFolderAttributes, options: {
    folder?: CourseFolder[],
    courseNameRef?: NameKeyReference[],
    notes?: string,
  }) {
    super();

    this.attributes = attributes;

    this.Folder = options.folder;
    this.CourseNameRef = options.courseNameRef;
    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Folder) && this.Folder.length) {
      const folderElements = this.Folder
        .map((_folder: CourseFolder) => BaseObject.buildXmlNode('Folder', _folder.toXml(), _folder.attributes))
        .join('\n');
      xmlElement += folderElements;
    }

    if (!_isNil(this.CourseNameRef) && this.CourseNameRef.length) {
      const courseElements = this.CourseNameRef
        .map((_course: NameKeyReference) => BaseObject.buildXmlNode('CourseNameRef', _course.toXml()))
        .join('\n');
      xmlElement += courseElements;
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
