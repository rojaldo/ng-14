import { FilteredBeersPipe } from './filtered-beers.pipe';

describe('FilteredBeersPipe', () => {
  it('create an instance', () => {
    const pipe = new FilteredBeersPipe();
    expect(pipe).toBeTruthy();
  });
});
