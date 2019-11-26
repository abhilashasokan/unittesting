import { StrengthPipe } from './strength.pipe';

describe('Strength Pipe', () => {
  it('Should display weak if strength is less than 5 ', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('Should display strong if strength is less than 11 ', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(11)).toEqual('11 (strong)');
  });

  it('Should display unbelievable if strength is less than 25 ', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(25)).toEqual('25 (unbelievable)');
  });
});
