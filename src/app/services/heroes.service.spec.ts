import { TestBed } from '@angular/core/testing';
import { Hero } from '../models/hero';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a hero', () => {
    const hero = new Hero('Superman', 'Man of Steel')
    expect(service.cloneHeroes().length).toEqual(2)
    service.addHero(hero)
    expect(service.cloneHeroes().length).toEqual(3)
  });

  it('should not add an empty hero', () => {
    const hero = new Hero()
    expect(service.cloneHeroes().length).toEqual(2)
    service.addHero(hero)
    expect(service.cloneHeroes().length).toEqual(2)
  });

  it('should not add an null', () => {
    const hero: any = 6
    expect(service.cloneHeroes().length).toEqual(2)
    service.addHero(hero)
    expect(service.cloneHeroes().length).toEqual(2)
  });

  it('should remove a hero', () => {
    expect(service.cloneHeroes().length).toEqual(2)
    service.removeHero(0)
    expect(service.cloneHeroes().length).toEqual(1)
  });

  it('should not remove a hero', () => {
    expect(service.cloneHeroes().length).toEqual(2)
    service.removeHero(3)
    expect(service.cloneHeroes().length).toEqual(2)
  })

  it('removing a hero in an empty list', () => {
    service.removeHero(0)
    service.removeHero(0)
    expect(service.cloneHeroes().length).toEqual(0)
    service.removeHero(0)
    expect(service.cloneHeroes().length).toEqual(0)
  })

  

});
