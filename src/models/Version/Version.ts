import { BaseObject } from '../_common';
import { isNil as _isNil } from 'lodash';

export class Version extends BaseObject {

  constructor(
    public VersionMajor: number,
    public VersionMinor: number,
    public BuildMajor: number = 0,
    public BuildMinor: number = 0,
  ) {
    super();
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('VersionMajor', this.VersionMajor.toString());
    xmlElement += BaseObject.buildXmlNode('VersionMinor', this.VersionMinor.toString());
    xmlElement += BaseObject.buildXmlNode('BuildMajor', this.BuildMajor.toString());
    xmlElement += BaseObject.buildXmlNode('BuildMinor', this.BuildMinor.toString());
    return xmlElement;
  }
}
