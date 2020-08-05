import { Injectable, ErrorHandler } from '@angular/core';


@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: any): void {
    super.handleError(error);

    // unroll errors from promises
    if (error.rejection) {
      error = error.rejection;
    }
  }
}
