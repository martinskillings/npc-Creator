import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  constructor() { }

  getHighAbility(): string {
    //generates a random number inclusively between 1 and 6
    let ability = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    switch (ability) {
      case 1: {
        return "Strength - powerful, brawny, strong as an ox";
      }
      case 2: {
        return "Dexterity - lithe, agile, graceful";
      }
      case 3: {
        return "Constitution - hardy, hale, healthy";
      }
      case 4: {
        return "Intelligence - studious, learned, inquisitive";
      }
      case 5: {
        return "Wisdom - perceptive, spiritual, insightful";
      }
      case 6: {
        return "Charisma - persuasive, forceful, born leader";
      }
    }
  }

  getLowAbility(): string {
    //generates a random number inclusively between 1 and 6
    let ability = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    switch (ability) {
      case 1: {
        return "Strength - feeble, scrawny";
      }
      case 2: {
        return "Dexterity - clumsy, fumbling";
      }
      case 3: {
        return "Constitution - sickly, pale";
      }
      case 4: {
        return "Intelligence - dim-witted, slow";
      }
      case 5: {
        return "Wisdom - oblivious, absentminded";
      }
      case 6: {
        return "Charisma - dull, boring";
      }
    }
  }
}
