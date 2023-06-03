import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  cvUrl: any

  ngOnInit() {
    // this.about1 =  this.profileService.about
    // this.about2 =  this.profileService.about2
    this.cvUrl
  }
}
