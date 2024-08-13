import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployeeData } from '../employee.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  url = 'https://dummy.restapiexample.com/api/v1/employees'
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  getEmployees(): Observable<IEmployeeData> {
    return this.http.get<IEmployeeData>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showError(error)
        return throwError(() => new Error('test'));
      }));

  }

  private showError(error: HttpErrorResponse) {
    const errorMessage = error.error?.message || 'An error occurred. Please try again.';
    const snackBarRef = this.snackBar.open(errorMessage, 'Retry', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    snackBarRef.onAction().subscribe(() => {
      window.location.reload();
    });

  }
}