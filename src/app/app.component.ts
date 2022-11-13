import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ContainedScheiss';
  lightsOn = false;

  switchLight(){
    this.lightsOn = !this.lightsOn;

    if(this.lightsOn){
      document.getElementsByTagName("html")[0].className =
        document.getElementsByTagName("html")[0].className.replace("dark", "");
    } else {
      document.getElementsByTagName("html")[0].className =
        document.getElementsByTagName("html")[0].className + " dark";
    }
  }
}
