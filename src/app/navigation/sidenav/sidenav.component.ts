import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCloseSideNav(): void {
    this.closeSideNav.emit();
  }
}
