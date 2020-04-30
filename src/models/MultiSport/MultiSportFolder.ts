import { BaseObject } from '../_common';
import { ActivityReference } from '../Activity';
import { Week } from '../Week';
import { isNil as _isNil } from 'lodash';
import { MultiSportFolderAttributes } from './MultiSportFolderAttributes';

export class MultiSportFolder extends BaseObject {
  public attributes: MultiSportFolderAttributes;
  public Folder?: MultiSportFolder[];
  public MultisportActivityRef?: ActivityReference[];
  public Week?: Week[];
  public Notes?: string;

  constructor(attributes: MultiSportFolderAttributes, options: {
    folder?: MultiSportFolder[],
    multisportActivityRef?: ActivityReference[],
    week?: Week[],
    notes?: string,
  }) {
    super();

    this.attributes = attributes;

    this.Folder = options.folder;
    this.MultisportActivityRef = options.multisportActivityRef;
    this.Week = options.week;
    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Folder) && this.Folder.length) {
      const folderElements = this.Folder
        .map((_folder: MultiSportFolder) => BaseObject.buildXmlNode('Folder', _folder.toXml(), _folder.attributes))
        .join('\n');
      xmlElement += folderElements;
    }

    if (!_isNil(this.MultisportActivityRef) && this.MultisportActivityRef.length) {
      const activityElements = this.MultisportActivityRef
        .map((_activity: ActivityReference) => BaseObject.buildXmlNode('MultisportActivityRef', _activity.toXml()))
        .join('\n');
      xmlElement += activityElements;
    }

    if (!_isNil(this.Week) && this.Week.length) {
      const weekElements = this.Week
        .map((_week: Week) => BaseObject.buildXmlNode('Week', _week.toXml(), _week.attributes))
        .join('\n');
      xmlElement += weekElements;
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
