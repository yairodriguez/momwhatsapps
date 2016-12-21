import { expect } from 'chai';
import sayHello from '../../app/scripts/sayHello';

describe('Hello World', () => {
  it('should work', () => {
    expect(sayHello('Jair')).to.equal('Hello Jair');
  });
});
