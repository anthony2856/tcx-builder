import { BaseObject } from '../_common';
import { FirstSport } from './FirstSport';
import { NextSport } from './NextSport';
import { isNil as _isNil } from 'lodash';

export class MultiSportSession extends BaseObject {
  public Id: Date;
  public FirstSport: FirstSport;
  public NextSport?: NextSport[];
  public Notes?: string;

  constructor(options: {
    id: Date,
    firstSport: FirstSport,
    nextSport?: NextSport[],
    notes?: string;
  }) {
    super();

    this.Id = options.id;
    this.FirstSport = options.firstSport;
    this.NextSport = options.nextSport;
    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';

    xmlElement += BaseObject.buildXmlNode('Id', this.Id.toISOString());
    xmlElement += BaseObject.buildXmlNode('FirstSport', this.FirstSport.toXml());

    if (!_isNil(this.NextSport)) {
      xmlElement += this.NextSport
        .map((_sport: NextSport) => BaseObject.buildXmlNode('NextSport', _sport.toXml()))
        .join('\n');
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
