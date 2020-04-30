import { BaseObject } from '../_common';
import { Position } from '../Position';
import { HeartRateInBeatsPerMinute } from '../HeartRate';
import { Intensity } from '../../interfaces';
import { isNil as _isNil } from 'lodash';

export class CourseLap extends BaseObject {
  public TotalTimeSeconds: number;
  public DistanceMeters: number;
  public BeginPosition?: Position;
  public BeginAltitudeMeters?: number;
  public EndPosition?: Position;
  public EndAltitudeMeters?: number;
  public AverageHeartRateBpm?: HeartRateInBeatsPerMinute;
  public MaximumHeartRateBpm?: HeartRateInBeatsPerMinute;
  public Intensity: Intensity;
  public Cadence?: number;

  constructor(options: {
    totalTimeSeconds: number,
    distanceMeters: number,
    beginPosition?: Position,
    beginAltitudeMeters?: number,
    endPosition?: Position,
    endAltitudeMeters?: number,
    averageHeartRateBpm?: HeartRateInBeatsPerMinute,
    maximumHeartRateBpm?: HeartRateInBeatsPerMinute,
    intensity: Intensity,
    cadence?: number,
  }) {
    super();

    this.TotalTimeSeconds = options.totalTimeSeconds;
    this.DistanceMeters = options.distanceMeters;
    this.BeginPosition = options.beginPosition;
    this.BeginAltitudeMeters = options.beginAltitudeMeters;
    this.EndPosition = options.endPosition;
    this.EndAltitudeMeters = options.endAltitudeMeters;
    this.AverageHeartRateBpm = options.averageHeartRateBpm;
    this.MaximumHeartRateBpm = options.maximumHeartRateBpm;
    this.Intensity = options.intensity;
    this.Cadence = options.cadence;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('TotalTimeSeconds', this.TotalTimeSeconds.toString());
    xmlElement += BaseObject.buildXmlNode('DistanceMeters', this.DistanceMeters.toString());

    if (!_isNil(this.BeginPosition)) {
      xmlElement += BaseObject.buildXmlNode('BeginPosition', this.BeginPosition.toXml());
    }

    if (!_isNil(this.BeginAltitudeMeters)) {
      xmlElement += BaseObject.buildXmlNode('BeginAltitudeMeters', this.BeginAltitudeMeters.toString());
    }

    if (!_isNil(this.EndPosition)) {
      xmlElement += BaseObject.buildXmlNode('EndPosition', this.EndPosition.toXml());
    }

    if (!_isNil(this.EndAltitudeMeters)) {
      xmlElement += BaseObject.buildXmlNode('EndAltitudeMeters', this.EndAltitudeMeters.toString());
    }

    if (!_isNil(this.AverageHeartRateBpm)) {
      xmlElement += BaseObject.buildXmlNode(
        'AverageHeartRateBpm',
        this.AverageHeartRateBpm.toXml(),
        this.AverageHeartRateBpm.attributes);
    }

    if (!_isNil(this.MaximumHeartRateBpm)) {
      xmlElement += BaseObject.buildXmlNode(
        'MaximumHeartRateBpm',
        this.MaximumHeartRateBpm.toXml(),
        this.MaximumHeartRateBpm.attributes);
    }

    xmlElement += BaseObject.buildXmlNode('Intensity', this.Intensity);

    return xmlElement;
  }
}
