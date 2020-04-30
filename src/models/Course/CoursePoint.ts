import { BaseObject } from '../_common';
import { Position } from '../Position';
import { CoursePointType } from '../../interfaces';
import { isNil as _isNil } from 'lodash';

export class CoursePoint extends BaseObject {
  public Name: string;
  public Time: Date;
  public Position: Position;
  public AltitudeMeters?: number;
  public PointType: CoursePointType;
  public Notes?: string;

  constructor(options: {
    name: string,
    time: Date,
    position: Position,
    altitudeMeters?: number,
    pointType: CoursePointType,
    notes?: string,
  }) {
    super();

    this.Name = options.name;
    this.Time = options.time;
    this.Position = options.position;
    this.AltitudeMeters = options.altitudeMeters;
    this.PointType = options.pointType;
    this.Notes = options.notes;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    xmlElement += BaseObject.buildXmlNode('Time', this.Time.toISOString());
    xmlElement += BaseObject.buildXmlNode('Position', this.Position.toXml());

    if (!_isNil(this.AltitudeMeters)) {
      xmlElement += BaseObject.buildXmlNode('AltitudeMeters', this.AltitudeMeters.toString());
    }

    xmlElement += BaseObject.buildXmlNode('PointType', this.PointType);

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
