import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

export interface Customer {
  label: string;
  value: string;
}

// representative.ts
export interface Representative {
  name: string;
  image: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  checked: boolean = true;
  value: string | undefined;
  filteredColumns: { [key: string]: boolean } = {};
  customers: any = [
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/Ma.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: ' محمد الغريب',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 3,
      user: {
        username: 'محمد الغريب',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person2.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 4,
      user: {
        username: ' محمد الغريب',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/Ma-2.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
    {
      code: 1,
      user: {
        username: 'أحمد محمود',
        userPhone: '0101251266',
        userImage: '../../../assets/imgs/person.svg',
      },
      ticketNum: 20,
      ticketCost: 20,
      Cenimas1: [
        'سينما مصر',
        'مول العرب',
        'برج الأطنان',
        'سرايا القبة',
        'صيدناوي مول ',
        'برج العرب',
      ],
      Cenimas2: ['X', 'y', 'y', 'y'],
      personsNum: 1,
      purshaseNum: 'مرة واحدة',
      files: {
        trash: '../../../assets/imgs/Frame 10.svg',
        download: '../../../assets/imgs/download.svg',
        fileName: 'pdf.تذكرة رقم 45',
        fileSize: '9mb . PDF',
      },
    },
  ];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;
  constructor() {}

  activityValues: number[] = [0, 100];

  ngOnInit() {}

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return 'default';
      default:
        return null; // or any other default value
    }
  }
}
