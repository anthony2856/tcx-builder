import { BaseObject, NameKeyReference } from '../_common';
import { WorkoutFolderAttributes } from './WorkoutFolderAttributes';
import { isNil as _isNil } from 'lodash';

export class WorkoutFolder extends BaseObject {

  public attributes: WorkoutFolderAttributes;
  public Folder?: WorkoutFolder[];
  public WorkoutNameRef?: NameKeyReference[];

  constructor(attributes: WorkoutFolderAttributes, options: {
    folder?: WorkoutFolder[],
    workoutNameRef?: NameKeyReference[],
  }) {
    super();

    this.attributes = attributes;
    this.Folder = options.folder;
    this.WorkoutNameRef = options.workoutNameRef;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Folder) && this.Folder.length) {
      const folderElements = this.Folder
        .map((_folder: WorkoutFolder) => BaseObject.buildXmlNode('Folder', _folder.toXml(), _folder.attributes))
        .join('\n');
      xmlElement += folderElements;
    }

    if (!_isNil(this.WorkoutNameRef) && this.WorkoutNameRef.length) {
      const workoutNameRefElements = this.WorkoutNameRef
        .map((_workoutNameRef: NameKeyReference) => BaseObject.buildXmlNode('WorkoutNameRef', _workoutNameRef.toXml()))
        .join('\n');
      xmlElement += workoutNameRefElements;
    }

    return xmlElement;
  }
}
