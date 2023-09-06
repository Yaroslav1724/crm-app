import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'car-page',
  templateUrl: 'order-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPageComponent {}
