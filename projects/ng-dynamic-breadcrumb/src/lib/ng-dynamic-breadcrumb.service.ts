import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NgDynamicBreadcrumbService {

  public breadcrumbLabels: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  updateBreadcrumbLabels(labels: any) {
    this.breadcrumbLabels.next(labels);
  }

}
