import { Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/models/cources';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe]
})
export class CourceListComponent {
  public cources: ICource[] = [];
  public filter_cources: ICource[] = [];
  public search: string = '';
  constructor(private filterPipe: FilterPipe) {}
  clickSearch(): void {
    console.log("Поиск по введенному значению: " + this.search);
    this.filter_cources =  this.filterPipe.transform(this.cources, this.search);
  }

  ngOnInit(): void {
    let cur = new Date();
    this.cources = [
      {
        id: 1,
        title: "Reprehenderit est veniam elit",
        creationDate: new Date(),
        duration: 61,
        topRated: false,
        description: "Consectetur veniam non nulla in laboris minim ipsum. Dolor aliqua irure sint do irure magna tempor culpa quis. Deserunt amet occaecat velit sit."
      },
      {
        id: 2,
        title: "Magna Excepteur aute Deserunt",
        creationDate: new Date(),
        duration: 63,
        topRated: true,
        description: "Sunt culpa officia minim commodo eiusmod irure sunt nostrud. Mollit aliquip id occaecat officia proident anim dolor officia qui voluptate consectetur laborum. Duis incididunt culpa aliqua mollit do fugiat ea dolor mollit irure Lorem tempor."
      },
      {
        id: 3,
        title: "Reprehenderit eiusmod nostrud amet",
        creationDate: new Date(),
        duration: 20,
        topRated: true,
        description: "Est consequat deserunt officia fugiat culpa in aliquip consectetur. Est nostrud occaecat cillum elit officia officia ea magna et minim officia commodo sunt. Deserunt duis minim magna nostrud enim enim commodo sit elit nostrud cillum aliquip est qui."
      },
      {
        id: 4,
        title: "Sit voluptate eiusmod ea",
        creationDate: new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() - 28),
        duration: 125,
        topRated: false,
        description: "Commodo id sunt sunt adipisicing et aliquip voluptate laborum consectetur. Occaecat nisi sint exercitation ullamco adipisicing irure est in consectetur aute voluptate. Ea pariatur dolor anim ea reprehenderit ut non occaecat magna adipisicing exercitation nisi consequat."
      },
      {
        id: 5,
        title: "Duis mollit reprehenderit ad",
        creationDate: new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() + 3),
        duration: 180,
        topRated: true,
        description: "Est minim ea aute sunt laborum minim eu excepteur. Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud."
      }
    ];

    this.filter_cources = this.cources;
  }

  public edit(cource: ICource): void {
    console.log(cource);
  }

  public delete(cource: ICource): void {
    console.log(cource.id);
  }

  public loadMore(): void {
    console.log("Загрузить еще")
  }
}


