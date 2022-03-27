import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogConfig } from './blog';
import { APIError } from './error/api.error';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: BlogConfig[] = [];

  constructor(private http: HttpClient) { }

  getBlogConfig(): Promise<BlogConfig[]> {
    if (this.config.length == 0) {
      return this.http.get<BlogConfig>('/.netlify/functions/config').toPromise()
          .then((response) => {
            this.config.push(response!);
            return this.config as any;
          })
          .catch((error) => {
            console.log(`Something when wrong, status: ${error.error.code}, message: ${error.error.userMessage}`)
            return error.error as APIError;
          })
    }

    return Promise.all(this.config); 
  }
}
