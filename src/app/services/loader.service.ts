import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  visible: boolean;

  constructor() { }

  showLoader(): void {
    this.visible = true;
  }

  hideLoader(): void {
    this.visible = false;
  }

}
