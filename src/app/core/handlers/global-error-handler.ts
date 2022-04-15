import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { ToastService } from '../services/toast.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // We can't make ErrorHandler wait, so we will inject the rest later
    constructor(private injector: Injector) { } 
  
    handleError(error: Error | HttpErrorResponse) {

        // The HttpErrorResponse detection doesn't seem to work
        // error instanceof HttpErrorResponse

        const errorText = error.toString()
        const isNetworkError: Boolean = errorText.includes("HttpErrorResponse")
        const errorService = this.injector.get(ErrorService);
        const toast = this.injector.get(ToastService);

        if (isNetworkError) {
            // Hacky Fix for the Zone Uncaught Addon
            const JSONStart = errorText.indexOf("{")
            const JSONBody = JSON.parse(errorText.substring(JSONStart));
            toast.showError(errorService.getServerError(JSONBody));
        } else {
            toast.showError(errorService.getClientError(error));
        }
    }
}