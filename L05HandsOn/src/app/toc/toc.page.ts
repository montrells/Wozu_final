import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
   public chapters = [
    {title: "Chapter 1 | The Beginning",
    url: "/chapter1"},
    {title: "Chapter 2 | The Beginning of Chapter 2",
    url: "/chapter2"},
    {title: "Chapter 3 | The Beginning of Chapter 3",
    url: "/chapter3"},
    {title: "Chapter 4 | The Beginning of Chapter 4",
    url: "/chapter4"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
