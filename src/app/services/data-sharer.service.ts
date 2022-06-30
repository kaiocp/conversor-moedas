import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Conversion } from '../models/conversion';

@Injectable({
  providedIn: 'root'
})
export class DataSharerService {
  private content = new BehaviorSubject<Array<Conversion>>([]);
  share = this.content.asObservable();

  constructor() { }

  addItem(conversion: Conversion): void {
    this.content.next([...this.content.getValue(), conversion])
  }

  deleteItem(id: string): void {
    const contentArr: Array<Conversion> = this.content.getValue();

    contentArr.forEach((item, index) => {
      if (item.id === id) { contentArr.splice(index, 1); }
    });

    this.content.next(contentArr);
  }

  makeId(length: number): string {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
