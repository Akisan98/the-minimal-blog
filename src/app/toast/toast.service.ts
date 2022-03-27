import { Injectable } from '@angular/core';
import { ToastMessage } from './toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() { }

  showSuccess(message: string): void {
    this.toasts.push(message);
  }
  
  showError(message: ToastMessage): void {
    // The second parameter is the text in the button. 
    // In the third, we send in the css class for the snack bar.
    this.toasts.push({
      class: 'text-white bg-danger',
      header: message.header,
      body: message.body
    });
  }
}
