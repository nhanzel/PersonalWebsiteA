import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    apiUrl = "https://7a1j75nga0.execute-api.us-west-2.amazonaws.com/api/email";

    constructor(private http: HttpClient) { }

    sendEmail(name: string, contactInfo: string, message: string): Observable<any[]> {
        let myApiUrl: string = this.apiUrl + "?name=" + name + "&contact_info=" + contactInfo + "&body=" + message;
        return this.http.post<any[]>(myApiUrl, null);
    }
}