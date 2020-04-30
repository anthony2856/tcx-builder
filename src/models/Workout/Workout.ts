import { BaseObject } from '../_common';
import { WorkoutAttributes } from './WorkoutAttribute';
import { AbstractStep } from '../AbstractStep';
import { isNil as _isNil } from 'lodash';
import { AbstractSource } from '../AbstractSource';

export class Workout extends BaseObject {
  public attributes: WorkoutAttributes;
  public Name: string;
  public Step: AbstractStep[];
  public ScheduledOn?: Date[];
  public Notes?: string;
  public Creator?: AbstractSource;

  constructor(attributes: WorkoutAttributes, options: {
    name: string;
    step: AbstractStep[];
    scheduledOn?: Date[];
    notes?: string;
    creator?: AbstractSource;
  }) {
    super();

    this.attributes = attributes;

    this.Name = options.name;
    this.Step = options.step;
    this.ScheduledOn = options.scheduledOn;
    this.Notes = options.notes;
    this.Creator = options.creator;
  }

  toXml() {
    let xmlElement = '';

    xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    xmlElement += this.Step
      .map((_step: AbstractStep) => BaseObject.buildXmlNode('Step', _step.toXml(), _step.attributes))
      .join('\n');

    if (!_isNil(this.ScheduledOn) && this.ScheduledOn.length) {
      xmlElement += this.ScheduledOn
        .map((_date: Date) => BaseObject.buildXmlNode('ScheduledOn', _date.toISOString()))
        .join('\n');
    }

    if (!_isNil(this.Notes)) {
      xmlElement += BaseObject.buildXmlNode('Notes', this.Notes);
    }

    if (!_isNil(this.Creator)) {
      xmlElement += BaseObject.buildXmlNode('Creator', this.Creator.toXml(), this.Creator.attributes);
    }

    return xmlElement;
  }
}
