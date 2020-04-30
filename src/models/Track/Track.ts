import { BaseObject } from '../_common';
import { TrackPoint } from './TrackPoint';

export class Track extends BaseObject {
  public TrackPoints: TrackPoint[];

  constructor(options: {
    trackPoints: TrackPoint[],
  }) {
    super();

    this.TrackPoints = options.trackPoints;
  }

  toXml() {
    return this.TrackPoints
      .map((_trackPoint: TrackPoint) => {
        return BaseObject.buildXmlNode('Trackpoint', _trackPoint.toXml());
      })
      .join('\n');
  }
}
