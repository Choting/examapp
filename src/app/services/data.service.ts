import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IServices } from '../interfaces/i-services'
import { IPolicies } from '../interfaces/i-policies'
import { IUser } from '../interfaces/i-user'
import {IAssets} from '../interfaces/i-assets'
import {IPolicyMain} from '../interfaces/i-policy-main'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private policies_url = 'assets/data/policies.json'
  private policy_servicing_url = 'assets/data/policy_servicing.json'
  private user_url = 'assets/data/user.json'
  private assets_url = 'assets/data/assets.json'
  private privay_main_url = 'assets/data/policy_main.json'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getMainPolicy(): Observable<IPolicyMain> {
    return this.http.get<IPolicyMain>(this.privay_main_url)
      .pipe(
        tap(_ => this.log("Assets fetched")),
        catchError(this.handleError<IPolicyMain>('getData', ))
      );
  }  
  getAssets(): Observable<IAssets> {
    return this.http.get<IAssets>(this.assets_url)
      .pipe(
        tap(_ => this.log("Assets fetched")),
        catchError(this.handleError<IAssets>('getData', ))
      );
  } 
  getPolicy(): Observable<IPolicies> {
    return this.http.get<IPolicies>(this.policies_url)
      .pipe(
        tap(_ => this.log("Policy fetched")),
        catchError(this.handleError<IPolicies>('getData', ))
      );
  }
  getService(): Observable<IServices> {
    return this.http.get<IServices>(this.policy_servicing_url)
      .pipe(
        tap(_ => this.log("Service fetched")),
        catchError(this.handleError<IServices>('getData', ))
      );
  }
  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.user_url)
      .pipe(
        tap(_ => this.log("User fetched")),
        catchError(this.handleError<IUser>('getData', ))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
