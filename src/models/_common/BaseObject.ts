import { BaseAttribute } from './BaseAttribute';
import { isNil as _isNil } from 'lodash';

export class BaseObject {

  public toXml(): string {
    throw new Error('not implemented');
  }

  public static buildXmlNode(type: string, elements?: string, attributes?: BaseAttribute): string {
    if (_isNil(elements)) {
      return '';
    }

    const attributesStr = attributes ? `${attributes.toString()}` : '';

    return `<${type} ${attributesStr}>
      ${elements}
    </${type}>`;
  }
}
