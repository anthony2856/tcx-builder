import { BaseObject } from '../_common';
import { Version as VersionClass } from '../Version';
import { BuildType } from '../../interfaces/BuildType';
import { isNil as _isNil } from 'lodash';

export class Build extends BaseObject {

  public Version: VersionClass;
  public Type?: BuildType;
  public Time?: Date;
  public Builder?: string;

  constructor(options: {
    version: VersionClass,
    type?: BuildType,
    time?: Date,
    builder?: string,
  }) {
    super();

    this.Version = options.version;
    this.Type = options.type;
    this.Time = options.time;
    this.Builder = options.builder;
  }

  toXml() {
    let xmlElement = BaseObject.buildXmlNode('Build', this.Version.toXml());

    if (!_isNil(this.Type)) {
      xmlElement += BaseObject.buildXmlNode('Type', this.Type);
    }

    if (!_isNil(this.Time)) {
      xmlElement += BaseObject.buildXmlNode('Time', this.Time.toISOString());
    }

    if (!_isNil(this.Builder)) {
      xmlElement += BaseObject.buildXmlNode('Builder', this.Builder);
    }

    return xmlElement;
  }
}
