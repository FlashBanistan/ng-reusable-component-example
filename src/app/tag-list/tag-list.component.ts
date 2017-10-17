import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/takeWhile';
import { Tag, GroupTags } from '../tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  private _data = new BehaviorSubject<Tag[]>([]);

  @Input()
  set data(value) {
    // set the latest value for _data BehaviorSubject
    this._data.next(value);
  }

  get data() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  groupTags: GroupTags[];

  constructor() { }

  ngOnInit() {
    // now we can subscribe to it, whenever input changes we will run our grouping logic
    this._data
      .takeWhile(() => !this.groupTags)
      .subscribe(x => {
        this.groupTags = this.groupByType(this.data);
      });
  }

  groupByType(data: Tag[]): GroupTags[] {
    // logic to group the tags by type:
    if (!data) {
      return;
    }

    // find out all the unique types:
    const types = new Set(data.map(x => x.type));

    // produce a list of types with its posts:
    const result = Array.from(types).map(x => ({
      type: x,
      tags: data.filter(tag => tag.type === x)
    }));

    return result;
  }

}
