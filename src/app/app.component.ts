import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SaveLoadComponent } from './save-load/save-load.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: String = 'myAppClient';
  diaRef!: MatDialogRef<SaveLoadComponent>;
  url: Subscription;
  home!: String;

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute, private router: Router) {
    console.log('app component constructor');
    this.url = this.route.url.subscribe((p) => {
      if (p[0].path === 'home') {
        this.openDia();
      }
    });
  }

  ngOnInit() {
    console.log('app component oninit');
  }

  openDia() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'introDia';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.diaRef = this.dialog.open(SaveLoadComponent, dialogConfig);
  }
}