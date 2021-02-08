import {NgModule} from '@angular/core'
import { MyCurrencyPipe } from './myCurrency.pipe';

@NgModule({
    declarations:[MyCurrencyPipe],
    imports:[],
    exports:[MyCurrencyPipe]
})
export class SharedModule{

}