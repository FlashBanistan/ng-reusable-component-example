import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public tags: Tag[] = [
    {
      name: 'wyomissing',
      type: 'location',
    },
    {
      name: 'ireland',
      type: 'location',
    },
    {
      name: 'sales',
      type: 'team',
    },
    {
      name: 'development',
      type: 'team',
    },
    {
      name: 'marketing',
      type: 'team',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
