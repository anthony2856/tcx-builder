import { BaseObject } from '../_common';
import { ActivityLapAttributes } from './ActivityLapAttributes';
import { Intensity, TriggerMethod } from '../../interfaces';
import { Track } from '../Track';
import { isNil as _isNil } from 'lodash';
import { HeartRateInBeatsPerMinute } from '../HeartRate';

export class ActivityLap extends BaseObject {

  public attributes: ActivityLapAttributes;
  public TotalTimeSeconds: number;
  public DistanceMeters: number;
  public MaximumSpeed?: number;
  public Calories: number;
  public AverageHeartRateBpm?: HeartRateInBeatsPerMinute;
  public MaximumHeartRateBpm?: HeartRateInBeatsPerMinute;
  public Intensity: Intensity;
  public Cadence?: number;
  public TriggerMethod: TriggerMethod;
  public Track?: Track;
  public Notes?: string;

  constructor(
    startTime: Date,
    options: {
      TotalTimeSeconds: number;
      DistanceMeters: number;
      MaximumSpeed?: number;
      Calories: number;
      AverageHeartRateBpm?: HeartRateInBeatsPerMinute;
      MaximumHeartRateBpm?: HeartRateInBeatsPerMinute;
      Intensity: Intensity;
      Cadence?: number;
      TriggerMethod: TriggerMethod;
      Track?: Track;
      Notes?: string;
    },
  ) {
    super();

    this.attributes = new ActivityLapAttributes(startTime);

    this.TotalTimeSeconds = options.TotalTimeSeconds;
    this.DistanceMeters = options.DistanceMeters;
    this.MaximumSpeed = options.MaximumSpeed;
    this.Calories = options.Calories;
    this.AverageHeartRateBpm = options.AverageHeartRateBpm;
    this.MaximumHeartRateBpm = options.MaximumHeartRateBpm;
    this.Intensity = options.Intensity;
    this.Cadence = options.Cadence;
    this.TriggerMethod = options.TriggerMethod;
    this.Track = options.Track;
    this.Notes = options.Notes;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('TotalTimeSeconds', this.TotalTimeSeconds.toString());
    xmlElement += BaseObject.buildXmlNode('DistanceMeters', this.DistanceMeters.toString());

    if (!_isNil(this.MaximumSpeed)) {
      const speedInMetersPerSec = this.MaximumSpeed / 3.6;
      xmlElement += BaseObject.buildXmlNode('MaximumSpeed', speedInMetersPerSec.toString());
    }

    xmlElement += BaseObject.buildXmlNode('Calories', this.Calories.toString());

    if (!_isNil(this.AverageHeartRateBpm)) {
      xmlElement += BaseObject.buildXmlNode('AverageHeartRateBpm', this.AverageHeartRateBpm.toXml());
    }

    if (!_isNil(this.MaximumHeartRateBpm)) {
      xmlElement += BaseObject.buildXmlNode('MaximumHeartRateBpm', this.MaximumHeartRateBpm.toXml());
    }

    xmlElement += BaseObject.buildXmlNode('Intensity', this.Intensity);

    if (!_isNil(this.Cadence)) {
      xmlElement += BaseObject.buildXmlNode('Cadence', Math.round(this.Cadence).toString());
    }

    xmlElement += BaseObject.buildXmlNode('TriggerMethod', this.TriggerMethod);

    if (!_isNil(this.Track)) {
      xmlElement += BaseObject.buildXmlNode('Track', this.Track.toXml());
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    return xmlElement;
  }
}
