import { BaseObject } from '../_common';
import { HistoryFolder } from './HistoryFolder';
import { isNil as _isNil } from 'lodash';
import { MultiSportFolder } from '../MultiSport';

export class History extends BaseObject {
  public Running: HistoryFolder;
  public Biking: HistoryFolder;
  public Other: HistoryFolder;
  public MultiSport: MultiSportFolder;

  constructor(options: {
    running: HistoryFolder,
    biking: HistoryFolder,
    other: HistoryFolder,
    multisport: MultiSportFolder,
  }) {
    super();

    this.Running = options.running;
    this.Biking = options.biking;
    this.Other = options.other;
    this.MultiSport = options.multisport;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Running', this.Running.toXml(), this.Running.attributes);
    xmlElement += BaseObject.buildXmlNode('Biking', this.Biking.toXml(), this.Biking.attributes);
    xmlElement += BaseObject.buildXmlNode('Other', this.Other.toXml(), this.Other.attributes);
    xmlElement += BaseObject.buildXmlNode('MultiSport', this.MultiSport.toXml(), this.MultiSport.attributes);
    return xmlElement;
  }
}
