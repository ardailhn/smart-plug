import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sicaklik } from '../models/sicaklik';
import { Nem } from '../models/nem';
import { Akim } from '../models/akim';
import { Gerilim } from '../models/gerilim';
import { Guc } from '../models/guc';

@Injectable({
    providedIn: 'root' // just before your class
})
export class DataService {

    constructor(private http: HttpClient) { }

    getSicaklik(): Observable<Sicaklik> {
        return this.http.get<Sicaklik>("https://api.thingspeak.com/channels/1738234/fields/1/last.json?api_key=XPDUU21AGNTJQ94T");
    }
    getNem(): Observable<Nem> {
        return this.http.get<Nem>("https://api.thingspeak.com/channels/1738234/fields/2/last.json?api_key=XPDUU21AGNTJQ94T");
    }
    getAkim(): Observable<Akim> {
        return this.http.get<Akim>("https://api.thingspeak.com/channels/1738234/fields/3/last.json?api_key=XPDUU21AGNTJQ94T");
    }
    getGerilim(): Observable<Gerilim> {
        return this.http.get<Gerilim>("https://api.thingspeak.com/channels/1738234/fields/4/last.json?api_key=XPDUU21AGNTJQ94T");
    }
    getGuc(): Observable<Guc> {
        return this.http.get<Guc>("https://api.thingspeak.com/channels/1738234/fields/5/last.json?api_key=XPDUU21AGNTJQ94T");
    }
    putOpen() {
        this.http.get("https://api.thingspeak.com/update?api_key=3S9Z85ABDIQ6JNQS&field6=" + 1).subscribe((data) => {
            alert("Açıldı")
        });
    }
    putClose() {
        this.http.get("https://api.thingspeak.com/update?api_key=3S9Z85ABDIQ6JNQS&field6=" + 0).subscribe((data) => {
            alert("Kapatıldı")
        });
    }
    putTime(time:number) {
        this.http.get("https://api.thingspeak.com/update?api_key=3S9Z85ABDIQ6JNQS&field7=" + time).subscribe((data) => {
            alert("Zaman ayarlandı")
        });
    }

}
