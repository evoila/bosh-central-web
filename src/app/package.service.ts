import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PackageService {
  private readonly endpoint = 'http://bosh-central.cf.dev.eu-de-central.msh.host/package/metadata';
  constructor(private http: HttpClient) { }

  getPackages(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.endpoint);
  }
}
