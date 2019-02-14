import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  @Output() notifier : EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    document.getElementById('mainContents').style.webkitFilter = 'blur(5px)';
    document.getElementById('mainContents').style.filter = 'blur(5px)';
  }

  notifyParent()
  {
    this.notifier.emit();
  }

}
