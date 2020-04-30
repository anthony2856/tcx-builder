import {expect} from 'chai';
import { BaseAttribute } from './BaseAttribute';

class MyClass extends BaseAttribute {
  constructor (
    public Sport: string,
  ) {
    super();
  }
}

class ComplexClass extends BaseAttribute {
  constructor() {
    super();
    Object.assign(this, { 'my:key': 'value' });
  }
}

describe('BaseAttribute', () => {
  it('should return str from obj', () => {
    const obj = new MyClass('Biking');
    const str = obj.toString();
    expect(str).to.equal('Sport="Biking"');
  });

  it('should return str from complex obj', () => {
    const obj = new ComplexClass();
    const str = obj.toString();
    expect(str).to.equal('my:key="value"');
  });
});
