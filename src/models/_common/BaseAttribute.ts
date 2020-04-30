export class BaseAttribute {
  toString(): string {
    return Object.entries(this)
      .map(([_attrName, _attrValue]: [string, string | Date]) => {
        let val = _attrValue;
        if (val instanceof Date) {
          val = (_attrValue as Date).toISOString();
        }
        return `${_attrName}="${val}"`;
      })
      .join(' ');
  }
}
