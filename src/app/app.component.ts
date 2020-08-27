import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-n-drop';
  arr = [FirstComponent, SecondComponent, ThirdComponent ];
  drop(event: CdkDragDrop<Element[]>){
    moveItemInArray(this.arr, event.previousIndex, event.currentIndex);
  }
}
