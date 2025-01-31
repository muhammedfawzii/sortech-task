import { Component, Input } from '@angular/core';
import { IFooterinfo } from '../core/ifooterinfo';
import { TableRow } from '../core/data';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [NumberHeaderComponent, TableComponent, FooterComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent {
  @Input() direction: 'rtl' | 'ltr' = 'rtl';
  
  numberDetails: any = {
    id: '1',
    phoneNumber: '01234567890',
    userName: 'فودافون مصر ',
    country: 'جمهورية مصر العربية',
    countryFlag: 'assets/imgs/egypt.png',
    currentBalance:5000,
    currentClient: 'الشركة الألمانية للابادة',
    previousBalance: 5000,
    totalBalance: 5000,
    usedBalanceForTotalNumber:6000,
    subscriptionCount: 9,
    createdBy: 'System Admin',
    createdAt: new Date('2024/12/29')
  };

  // Sample table data for different numbers
  numbersTableData: { [key: string]: TableRow[] } = {
    '01234567890': Array(5).fill({
      amount: 61890,
      internalRef: '122',
      externalRef: '7654',
      responsiblePerson: 'عبدالرحيم اسماعيل ناصف',
      executionDate: '01/12/2024',
      creationDate: '01/12/2024',
      company: 'الشركة الألمانية للابا...'
    }),
    '01234567891': Array(3).fill({
      amount: 45341,
      internalRef: '133',
      externalRef: '8765',
      responsiblePerson: 'محمد عبدالله',
      executionDate: '02/12/2024',
      creationDate: '02/12/2024',
      company: 'الشركة الألمانية للابا...'
    }),
    '01234567892': Array(4).fill({
      amount: 72000,
      internalRef: '144',
      externalRef: '9876',
      responsiblePerson: 'خالد محمود',
      executionDate: '03/12/2024',
      creationDate: '03/12/2024',
      company: 'الشركة الألمانية للابا...'
    }),
    '01234567893': Array(6).fill({
      amount: 33500,
      internalRef: '155',
      externalRef: '1234',
      responsiblePerson: 'أحمد سعيد',
      executionDate: '04/12/2024',
      creationDate: '04/12/2024',
      company: 'الشركة الألمانية للابا...'
    }),
    '01234567894': Array(4).fill({
      amount: 61890,
      internalRef: '166',
      externalRef: '2345',
      responsiblePerson: 'عمر فاروق',
      executionDate: '05/12/2024',
      creationDate: '05/12/2024',
      company: 'الشركة الألمانية للابا...'
    })
  };

  tableData: TableRow[] = this.numbersTableData['01234567890'];

  // Sample data for different numbers with different countries and flags
  numbersData: { [key: string]: any } = {
    '01234567890': this.numberDetails,
    '01234567891': {
      ...this.numberDetails,
      id: '2',
      phoneNumber: '01234567891',
      userName: 'فودافون مصر',
      country: 'جمهورية مصر العربية',
      countryFlag: 'assets/imgs/egypt.png',
      currentBalance: 3000,
      previousBalance: 2000,
      subscriptionCount: 5
    },
    '01234567892': {
      ...this.numberDetails,
      id: '3',
      phoneNumber: '01234567892',
      userName: 'فودافون مصر',
      country: 'المملكة العربية السعودية',
      countryFlag: 'assets/imgs/flag (2).png',
      currentBalance: 7000,
      previousBalance: 4000,
      subscriptionCount: 12
    },
    '01234567893': {
      ...this.numberDetails,
      id: '4',
      phoneNumber: '01234567893',
      userName: 'فودافون مصر',
      country: 'دولة الإمارات العربية المتحدة',
      countryFlag: 'assets/imgs/united-arab-emirates.png',
      currentBalance: 4500,
      previousBalance: 3500,
      subscriptionCount: 7
    },
    '01234567894': {
      ...this.numberDetails,
      id: '5',
      phoneNumber: '01234567894',
      userName: 'فودافون مصر',
      country: 'قطر',
      countryFlag: 'assets/imgs/qatar.png',
      currentBalance: 6000,
      previousBalance: 4500,
      subscriptionCount: 10
    }
  };
  footerInfo:IFooterinfo = {
    createdBy: 'عبد الرحيم اسماعيل ناصف',
    createdAt: new Date().toLocaleDateString()
  }

  onNumberSelected(phoneNumber: string) {
    if (this.numbersData[phoneNumber]) {
      this.numberDetails = this.numbersData[phoneNumber];
      this.tableData = this.numbersTableData[phoneNumber];
    }
  }
}
