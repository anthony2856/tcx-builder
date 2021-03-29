# TCX BUILDER

This package allows you to generate tcx file from Javascript Class. See tcx file definition [here](https://www8.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd).

## How to use ?

Install package using npm :
```sh
npm install tcx-builder
```

Import package
```
// First way
const tcxBuilder = require('tcx-builder');

// Prefered way
const { TrainingCenterDatabase } = require('tcx-builder');

// Using imports
import { TrainingCenterDatabase } from 'tcx-builder';
```

Check garmin tcx file description for more informations.

## Example

```
import {
  TrainingCenterDatabase,
  Activity,
  ActivityLap,
  Track,
  TrackPoint,
  Position,
  HeartRateBpm,
  TrackPointExtensions,
  ActivityList,
  HeartRateInBeatsPerMinute,
} from 'tcx-builder';

const trackPoints: TrackPoint[] = [
  new TrackPoint({
    time: new Date(),
    position: new Position(48.853444, 2.348780),
    altitudeMeters: 100,
    distanceMeters: 0,
    heartRateBpm: new HeartRateBpm(150),
    cadence: 80,
    sensorState: 'Present',
    extensions: new TrackPointExtensions({
      Speed: 10,
      Watts: 200,
    }),
  }),
];

const myLap: ActivityLap = new ActivityLap(new Date(), {
  Calories: 0,
  DistanceMeters: 40000,
  Intensity: 'Active',
  TotalTimeSeconds: 4000,
  TriggerMethod: 'Distance',
  MaximumSpeed: 12,
  MaximumHeartRateBpm: new HeartRateInBeatsPerMinute({ value: 180 }),
  AverageHeartRateBpm: new HeartRateInBeatsPerMinute({ value: 160 }),
  Cadence: 80,
  Track: new Track({ trackPoints }),
});

const tcxActivity = new Activity('Biking', {
  Id: new Date(),
  Laps: [ myLap ],
  Notes: 'Activity Description',
});
const activityList = new ActivityList({ activity: [tcxActivity] });

const tcxObj = new TrainingCenterDatabase({ activities: activityList });

const xml: string = tcxObj.toXml();
```