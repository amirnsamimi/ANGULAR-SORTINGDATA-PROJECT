import { Component, OnInit } from '@angular/core';
import { MonsterService } from 'src/app/config/config.service';
import { Monster } from 'src/interfaces/monster.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})






export class MonstersComponent implements OnInit {

public MONSTERS: Monster[] = [];


  constructor(private _monsterService: MonsterService) { }

  ngOnInit(): void {
   
    this._monsterService.getMonsters()
    .subscribe( data => this.MONSTERS = data);





  }


  
  phrase$ = new BehaviorSubject<string>('');

  /** Observable for filtering out data to show in table */
  items$ = this.phrase$.pipe(
    
    map((phrase = " ") => phrase.length > 0 
      ? this.MONSTERS
        .filter(({ name }) => name.toLocaleLowerCase().indexOf(phrase) >= 0).slice(0)
      : this.MONSTERS

    )
   
  )

  /** pushing new phrase values */
  onChange(event:any) {
    this.phrase$.next(event.target.value);
   document.querySelectorAll(".monster-default")[0].setAttribute("style","display:none")

  }


 
}

