import { Injectable } from '@angular/core';

//imports the services from their files to call their to add them to array
import {AppearanceService} from './appearance.service';
import {AbilitiesService} from './abilities.service';
import {TalentService} from './talent.service';
import {MannerismService} from './mannerism.service';
import {InteractionService} from './interaction.service';
import {BondService} from './bond.service';
import {FlawService} from './flaw.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayNPCService {

  constructor(private appearanceService: AppearanceService,
    private abilitiesService: AbilitiesService,
    private talentService: TalentService,
    private mannerismService: MannerismService,
    private interactionService: InteractionService,
    private bondService: BondService,
    private flawService: FlawService) {}

  nPC: string[] = ['Click create to get started'];

  //this function is what calls all the different functions to build the npc
  getNPC(): void{
    this.nPC = []; //empties the array
    //calls the functions from this class to access the function from the service associated to it
    this.getAppearance();
    this.getHighAbility();
    this.getLowAbility();
    this.getTalent();
    this.getMannerism();
    this.getInteraction();
    this.getBond();
    this.getFlaw();
  } 

  getAppearance(): void{
    /*
    this calls the getAppearance function from the appearance service
    then adds it to the end of the array
    */
    this.nPC.push(this.appearanceService.getAppearance());
  }

  getHighAbility(): void{
    /*
    this calls the getHighAbility function from the abilities service
    then adds it to the end of the array
    */
    this.nPC.push(this.abilitiesService.getHighAbility());
  }

  getLowAbility(): void{
    /*
    this calls the getLowAbility function from the abilities service
    then adds it to the end of the array
    */
    this.nPC.push(this.abilitiesService.getLowAbility());
  }

  getTalent(): void{
    /*
    this calls the getTalent function from the talent service
    then adds it to the end of the array
    */
    this.nPC.push(this.talentService.getTalent());
  }

  getMannerism(): void{
    /*
    this calls the getMannerism function from the mannerism service
    then adds it to the end of the array
    */
    this.nPC.push(this.mannerismService.getMannerism());
  }

  getInteraction(): void{
    /*
    this calls the getInteraction function from the interaction service
    then adds it to the end of the array
    */
    this.nPC.push(this.interactionService.getInteraction());
  }

  getBond(): void{
    /*
    this calls the getBond function from the bond service
    then adds it to the end of the array
    */
    this.nPC.push(this.bondService.getBond(10));
  }

  getFlaw(): void{
    /*
    this calls the getFlaw function from the flaw service
    then adds it to the end of the array
    */
    this.nPC.push(this.flawService.getFlaw());
  }

}
