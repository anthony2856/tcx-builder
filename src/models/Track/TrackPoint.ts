import { BaseObject } from '../_common';
import { HeartRateBpm as HeartRateBpmClass } from '../HeartRate';
import { SensorState as SensorStateType } from '../../interfaces';
import { Position as PositionClass } from '../Position';
import { TrackPointExtensions } from './TrackPointExtensions';
import { isNil as _isNil } from 'lodash';

export class TrackPoint extends BaseObject {
  public Time: Date;
  public Position?: PositionClass;
  public AltitudeMeters?: number;
  public DistanceMeters?: number;
  public HeartRateBpm?: HeartRateBpmClass;
  public Cadence?: number;
  public SensorState?: SensorStateType;
  public Extensions?: TrackPointExtensions;
  constructor(options: {
    time: Date,
    position?: PositionClass,
    altitudeMeters?: number,
    distanceMeters?: number,
    heartRateBpm?: HeartRateBpmClass,
    cadence?: number,
    sensorState?: SensorStateType,
    extensions?: TrackPointExtensions,
  }) {
    super();

    this.Time = options.time;
    this.Position = options.position;
    this.AltitudeMeters = options.altitudeMeters;
    this.DistanceMeters = options.distanceMeters;
    this.HeartRateBpm = options.heartRateBpm;
    this.Cadence = options.cadence;
    this.SensorState = options.sensorState;
    this.Extensions = options.extensions;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Time', this.Time.toISOString());

    if (!_isNil(this.Position)) {
      xmlElement += BaseObject.buildXmlNode('Position', this.Position.toXml());
    }

    if (!_isNil(this.AltitudeMeters)) {
      xmlElement += BaseObject.buildXmlNode('AltitudeMeters', this.AltitudeMeters.toString());
    }

    if (!_isNil(this.DistanceMeters)) {
      xmlElement += BaseObject.buildXmlNode('DistanceMeters', this.DistanceMeters.toString());
    }

    if (!_isNil(this.HeartRateBpm)) {
      xmlElement += BaseObject.buildXmlNode('HeartRateBpm', this.HeartRateBpm.toXml());
    }

    if (!_isNil(this.Cadence)) {
      xmlElement += BaseObject.buildXmlNode('Cadence', this.Cadence.toString());
    }

    if (!_isNil(this.SensorState)) {
      xmlElement += BaseObject.buildXmlNode('SensorState', this.SensorState);
    }

    if (!_isNil(this.Extensions)) {
      const tpxExtension = BaseObject.buildXmlNode('TPX', this.Extensions.toXml(), this.Extensions.attributes);
      xmlElement += BaseObject.buildXmlNode('Extensions', tpxExtension);
    }

    return xmlElement;
  }
}
