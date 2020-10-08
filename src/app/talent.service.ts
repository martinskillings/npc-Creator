import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor() { }

  getTalent(): string {
    //generates a random number inclusively between 1 and 20
    let talent = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    switch(talent) {
      case 1: {
        return "Plays a musical instrument";
      }
      case 2: {
        return "Speaks several languages fluently";
      }
      case 3: {
        return "Unbelievably lucky";
      }
      case 4: {
        return "Perfect memory";
      }
      case 5: {
        return "Great with animals";
      }
      case 6: {
        return "Great with children";
      }
      case 7: {
        return "Great at solving puzzles";
      }
      case 8: {
        return "Great at one game";
      }
      case 9: {
        return "Great at impersonations";
      }
      case 10: {
        return "Draws beautifully";
      }
      case 11: {
        return "Paints beautifully";
      }
      case 12: {
        return "Sings beautifully";
      }
      case 13: {
        return "Drinks everyone under the table";
      }
      case 14: {
        return "Expert carpenter";
      }
      case 15: {
        return "Expert cook";
      }
      case 16: {
        return "Expert dart thrower and rock skipper";
      }
      case 17: {
        return "Expert juggler";
      }
      case 18: {
        return "Skilled actor and master of disguise";
      }
      case 19: {
        return "Skilled dancer";
      }
      case 20: {
        return "Knows theives' cant";
      }
      default: {
        return "This is working now";
      }
    }
  }
}
