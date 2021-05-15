import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();

  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.scrollDispatcher.scrolled().subscribe((x) => {
      console.log(window.scrollY);
    });
  }

  ngOnInit(): void {}

  onToggleSideNav(): void {
    this.sideNavToggle.emit();
  }
}
