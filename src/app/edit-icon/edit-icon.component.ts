import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss']
})
export class EditIconComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'editPencil',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/edit-24px.svg')
      );
  }

  ngOnInit(): void {
  }

}
