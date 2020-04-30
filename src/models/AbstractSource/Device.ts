import { AbstractSource } from './AbstractSource';
import { BaseObject } from '../_common';
import { Version as VersionClass } from '../Version';
import { AbstractSourceAttributes } from './AbstractSourceAttributes';

export class Device extends AbstractSource {
  public UnitId: number;
  public ProductID: number;
  public Version: VersionClass;

  constructor(options: {
    name: string,
    unitId: number,
    productID: number,
    version: VersionClass,
  }) {
    const attributes = new AbstractSourceAttributes('Device_t');
    super(attributes, options.name);

    this.attributes = attributes;

    this.UnitId = options.unitId;
    this.ProductID = options.productID;
    this.Version = options.version;
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    xmlElement += BaseObject.buildXmlNode('UnitId', this.UnitId.toString());
    xmlElement += BaseObject.buildXmlNode('ProductId', this.ProductID.toString());
    xmlElement += BaseObject.buildXmlNode('Version', this.Version.toXml());

    return xmlElement;
  }
}
