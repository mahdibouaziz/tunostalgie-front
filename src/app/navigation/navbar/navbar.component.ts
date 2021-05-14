import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggleSideNav(): void {
    this.sideNavToggle.emit();
  }
}
