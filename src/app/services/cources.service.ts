import { Injectable } from '@angular/core';
import { ICource } from '../models/cources';

@Injectable({
  providedIn: 'root'
})
export class CourcesService {
  private cur = new Date();
  private cources: ICource[] = [
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
      creationDate: new Date(this.cur.getFullYear(), this.cur.getMonth(), this.cur.getDate() - 28),
      duration: 125,
      topRated: false,
      description: "Commodo id sunt sunt adipisicing et aliquip voluptate laborum consectetur. Occaecat nisi sint exercitation ullamco adipisicing irure est in consectetur aute voluptate. Ea pariatur dolor anim ea reprehenderit ut non occaecat magna adipisicing exercitation nisi consequat."
    },
    {
      id: 5,
      title: "Duis mollit reprehenderit ad",
      creationDate: new Date(this.cur.getFullYear(), this.cur.getMonth(), this.cur.getDate() + 3),
      duration: 180,
      topRated: true,
      description: "Est minim ea aute sunt laborum minim eu excepteur. Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud."
    }
  ];

  constructor() { }

  public getCources(): ICource[] {
    return this.cources;
  }

  public getCourceById(id: number): ICource {
    return this.cources[id - 1];
  }

  public createCource(courceItem: ICource): void {
    this.cources.push(courceItem);
  }
  public updateCource(courceItem: ICource): void {

  }
  public deleteCource(id: number): void {
    let list = this.cources;
    let newList = [];
    for (let i = 0; i < list.length; i++)
      if (list[i].id != id) {
        newList.push(list[i]);
      }
    this.cources = newList;
  }

}
