import { Pipe, PipeTransform } from '@angular/core';
import { BankDetails } from './home/home.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(bankDetails: BankDetails[], bank_name: any): BankDetails[] {

    if (!bankDetails || !bank_name) {
      return bankDetails
    }
    return bankDetails.filter(bd =>
      bd.bank_name.toLocaleLowerCase().includes(bank_name.toLocaleLowerCase()) ||
      bd.branch.toLocaleLowerCase().includes(bank_name.toLocaleLowerCase())||
      bd.bank_id.toString().toLocaleLowerCase().includes(bank_name.toLocaleLowerCase())

      );

  }
  

}
 