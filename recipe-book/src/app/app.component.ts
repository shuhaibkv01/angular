import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  featureSelect = 'recipe';

  onSelectingFeature(feature: string) {
    console.log(feature);
    this.featureSelect = feature;
  }
}
