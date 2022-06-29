import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any = window.localStorage;

  constructor() { }

  set (key: string , value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get (key: any) {
    return JSON.parse(this.storage.getItem(key));
  }

  remove (key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

}
