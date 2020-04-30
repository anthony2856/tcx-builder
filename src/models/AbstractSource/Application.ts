import { BaseObject } from '../_common';
import { Build as BuildClass} from '../Build';
import { AbstractSourceAttributes } from './AbstractSourceAttributes';
import { AbstractSource } from './AbstractSource';

export class Application extends AbstractSource {
  public Build: BuildClass;
  public LangID: string;
  public PartNumber: string;

  constructor(options: {
    name: string;
    build: BuildClass;
    langID: string;
    partNumber?: string;
  }) {
    const attributes = new AbstractSourceAttributes('Application_t');
    super(attributes, options.name);

    this.attributes = attributes;

    this.Build = options.build;
    this.LangID = options.langID;
    this.PartNumber = options.partNumber || '000-00000-00';
  }

  toXml() {
    let xmlElement = '';
    xmlElement += BaseObject.buildXmlNode('Name', this.Name);
    xmlElement += BaseObject.buildXmlNode('Build', this.Build.toXml());
    xmlElement += BaseObject.buildXmlNode('LangID', this.LangID);
    xmlElement += BaseObject.buildXmlNode('PartNumber', this.PartNumber);
    return xmlElement;
  }
}
