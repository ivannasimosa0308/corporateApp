import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegment, IonSegmentButton, RouterLink],
})
export class HomePage {
  constructor() { }
}
