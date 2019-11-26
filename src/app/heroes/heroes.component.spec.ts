import { HeroesComponent } from './heroes.component';
// tslint:disable-next-line: import-blacklist
import { of } from 'rxjs';

describe('Heroes component', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Sipder Man', strength: 8 },
      { id: 2, name: 'Super Man', strength: 10 },
      { id: 3, name: 'Batman', strength: 6 }
    ];

    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero'
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated hero from heros list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes).not.toContain(HEROES[2]);
      // Interaction test
    });

    it('should call deleteHero with parameter', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);

    });
  });
});
