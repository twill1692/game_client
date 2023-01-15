import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent implements OnInit {
  playerSub!: Subscription;
  newPlayerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('new game component constructor');
  }

  savePlayer(player: any) {
    console.log(player);
  }
  ngOnInit() {
    console.log('new game component ngoninit');
  }

  onSubmit() {

  }
}

