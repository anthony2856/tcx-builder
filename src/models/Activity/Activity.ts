import { BaseObject } from '../_common';
import { ActivityAttributes } from './ActivityAttributes';
import { ActivityLap } from './ActivityLap';
import { Training } from '../Training';
import { isNil as _isNil } from 'lodash';
import { AbstractSource } from '../AbstractSource';
import { ActivityAttributeSport } from '../../interfaces';

export class Activity extends BaseObject {

  public attributes: ActivityAttributes;
  public Id: Date;
  public Lap: ActivityLap;
  public Notes?: string;
  public Training?: Training;
  public Creator?: AbstractSource;

  constructor(
    sport: ActivityAttributeSport = 'Running',
    options: {
      Id: Date,
      Lap: ActivityLap,
      Notes?: string,
      Training?: Training,
      Creator?: AbstractSource,
    },
  ) {
    super();
    this.attributes = new ActivityAttributes(sport);

    this.Id = options.Id;
    this.Lap = options.Lap;
    this.Notes = options.Notes;
    this.Training = options.Training;
    this.Creator = options.Creator;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Id', this.Id.toISOString());
    xmlElement += BaseObject.buildXmlNode('Lap', this.Lap.toXml(), this.Lap.attributes);

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    if (!_isNil(this.Training)) {
      xmlElement += BaseObject.buildXmlNode('Training', this.Training.toXml(), this.Training.attributes);
    }

    if (!_isNil(this.Creator)) {
      xmlElement += BaseObject.buildXmlNode('Creator', this.Creator.toXml(), this.Creator.attributes);
    }

    return xmlElement;
  }
}
