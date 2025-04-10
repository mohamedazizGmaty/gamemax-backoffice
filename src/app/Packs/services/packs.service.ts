import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pack } from '../models/pack'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class PacksService {
  private apiUrl = 'http://localhost:8080/api/packs/allPacks';

  constructor(private http: HttpClient) {}

  getAllPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.apiUrl).pipe(
      map(packs => packs.map(pack => new Pack(pack)))
    );
  }
}
