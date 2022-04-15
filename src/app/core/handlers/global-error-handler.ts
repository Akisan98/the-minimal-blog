import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { ToastService } from '../services/toast.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // We can't make ErrorHandler wait, so we will inject the rest later
    constructor(private injector: Injector, private zone: NgZone) { } 
  
    handleError(error: Error | HttpErrorResponse) {

        const errorService = this.injector.get(ErrorService);
        const toast = this.injector.get(ToastService);

        this.zone.run(() => {
            if (error instanceof HttpErrorResponse) {
                toast.showError(errorService.getServerError(error));
            } else {
                toast.showError(errorService.getClientError(error));
            }
        });
    }
}