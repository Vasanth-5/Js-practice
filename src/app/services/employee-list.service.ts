import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployeeData } from '../employee.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  url = 'https://dummy.restapiexample.com/api/v1/employees'
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  getEmployees(): Observable<IEmployeeData> {
    return this.http.get<IEmployeeData>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        this.showError('An error occurred. Please try again.', 'Splash');
        return throwError(error); // Rethrow the error if you want to handle it further up
      })
    );
  }

  private showError(message: string, action: string) {
    // const errorMessage = .error?.message || 'An error occurred. Please try again.';
    this.snackBar.open(message, action, {
      duration: 3000,
      // verticalPosition: 'bottom',
      // horizontalPosition: 'center'
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}

