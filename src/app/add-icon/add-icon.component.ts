import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html'
})
export class AddIconComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'roundPlus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/add_circle_outline-24px.svg')
      );
  }
  ngOnInit(): void {
  }

}
