import { Injectable } from '@angular/core';
import { ToastMessage } from '../models/toast';

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
    this.toasts.push({
      class: 'text-white bg-danger',
      header: message.header,
      body: message.body
    });
  }
}
