import { BaseObject } from '../_common';
import { Track } from '../Track';
import { AbstractSource } from '../AbstractSource';
import { CourseLap } from './CourseLap';
import { CoursePoint } from './CoursePoint';
import { isNil as _isNil } from 'lodash';

export class Course extends BaseObject {

  public Name: string;
  public Lap?: CourseLap[];
  public Track?: Track[];
  public Notes?: string;
  public CoursePoint?: CoursePoint[];
  public Creator?: AbstractSource;

  constructor(options: {
    name: string,
    lap?: CourseLap[],
    track?: Track[],
    notes?: string,
    coursePoint?: CoursePoint[],
    creator?: AbstractSource,
  }) {
    super();

    this.Name = options.name;
    this.Lap = options.lap;
    this.Track = options.track;
    this.Notes = options.notes;
    this.CoursePoint = options.coursePoint;
    this.Creator = options.creator;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Name', this.Name);

    if (!_isNil(this.Lap) && this.Lap.length) {
      xmlElement += this.Lap
        .map((_lap: CourseLap) => BaseObject.buildXmlNode('Lap', _lap.toXml()))
        .join('\n');
    }

    if (!_isNil(this.Track) && this.Track.length) {
      xmlElement += this.Track
        .map((_track: Track) => BaseObject.buildXmlNode('Track', _track.toXml()))
        .join('\n');
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    if (!_isNil(this.CoursePoint) && this.CoursePoint.length) {
      xmlElement += this.CoursePoint
        .map((_coursePoint: CoursePoint) => BaseObject.buildXmlNode('CoursePoint', _coursePoint.toXml()))
        .join('\n');
    }

    if (!_isNil(this.Creator)) {
      xmlElement += BaseObject.buildXmlNode('Creator', this.Creator.toXml(), this.Creator.attributes);
    }

    return xmlElement;
  }
}
