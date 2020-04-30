import { BaseObject } from '../_common';
import { ActivityReference } from '../Activity';
import { Week } from '../Week';
import { isNil as _isNil } from 'lodash';
import { HistoryFolderAttributes } from './HistoryFolderAttributes';

export class HistoryFolder extends BaseObject {
  public attributes: HistoryFolderAttributes;
  public Folder?: HistoryFolder[];
  public ActivityRef?: ActivityReference[];
  public Week?: Week[];
  public Notes?: string;

  constructor(attributes: HistoryFolderAttributes, options: {
    folder?: HistoryFolder[],
    activityRef?: ActivityReference[],
    week?: Week[],
    notes?: string,
  }) {
    super();

    this.attributes = attributes;

    this.Folder = options.folder;
    this.ActivityRef = options.activityRef;
    this.Week = options.week;
    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';

    if (!_isNil(this.Folder) && this.Folder.length) {
      const folderElements = this.Folder
        .map((_folder: HistoryFolder) => BaseObject.buildXmlNode('Folder', _folder.toXml(), _folder.attributes))
        .join('\n');
      xmlElement += folderElements;
    }

    if (!_isNil(this.ActivityRef) && this.ActivityRef.length) {
      const activityElements = this.ActivityRef
        .map((_activity: ActivityReference) => BaseObject.buildXmlNode('ActivityRef', _activity.toXml()))
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
