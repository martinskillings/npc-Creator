import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BondService {

  constructor() { }

  getBond(max: number): string {
    //generates a random number inclusively between 1 and 10
    let bond = Math.floor(Math.random() * (max - 1 + 1) + 1);

    switch(bond) {
      case 1: {
        return "Dedicated to fulfilling a personal life goal";
      }
      case 2: {
        return "Protective of close family members";
      }
      case 3: {
        return "Protective of colleagues or compatriots";
      }
      case 4: {
        return "Loyal to a benefactor, patron, or employer";
      }
      case 5: {
        return "Captivated by a romantic interest";
      }
      case 6: {
        return "Drawn to a special place";
      }
      case 7: {
        return "Protective of a sentimental keepsake";
      }
      case 8: {
        return "Protective of a valuable possession";
      }
      case 9: {
        return "Out for revenge";
      }
      case 10: {
        let x = this.getBond(9);
        let y = this.getBond(9);
        let z = x + " and " + y;
        return z;
      }
      default: {
        return "This is working now";
      }
    }
  }
}
