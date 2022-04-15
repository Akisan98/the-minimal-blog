import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ContentfulError } from '../models/contentful.error';
import { ToastMessage } from '../models/toast';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    getClientError(error: Error): ToastMessage {
        if (!navigator.onLine) {
            return {
                header: 'No Internet Connection',
                body: 'It seems like you are currently not connected to internet'
            };
        }

        return {
            header: "Something went wrong",
            body: "This is embarrassing but there seems to be a bug in our code"
        };
    }

    getServerError(error: HttpErrorResponse): ToastMessage {
        if (error.error) {
            // Netlify Functions Error
            
            return {
                header: `${error.error.status} - ${error.error.code}`,
                body: `${error.error.userMessage}`
            }
        }

        const gh = new ContentfulError();  
        const errorMessage = gh.getError(error.statusText.replace(/\s+/g, ''))
        
        return {
            header: `${error.statusText} - ${error.status}`,
            body: `${errorMessage!.userMessage}`
        }
    }
}