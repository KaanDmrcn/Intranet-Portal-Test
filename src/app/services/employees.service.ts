import { Injectable } from '@angular/core';

export interface Employee {
  EmployeeID: Number;
  Departman: String,
  FullName: String,
  Position: String,
  Mail: String,
  Tel: string,
}

const employees: Employee[] = [{
  "EmployeeID": 1,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "SERKAN ŞİMŞEK",
  "Position": "BİLGİ TEKNOLOJİLERİ MÜDÜRÜ",
  "Mail": "ssimsek@sefine.com.tr",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 2,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "KAAN DEMİRCAN",
  "Position": "BİLGİ TEKNOLOJİLERİ MÜDÜR YARDIMCISI",
  "Mail": "kdemircan@sefine.com.tr",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 3,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Janet Leverling",
  "Position": "Sales Representative",
  "Mail": "Ms.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 4,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Margaret Peacock",
  "Position": "Sales Representative",
  "Mail": "Mrs.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 5,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Steven Buchanan",
  "Position": "Sales Manager",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 6,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Michael Suyama",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 7,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Robert King",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 8,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Laura Callahan",
  "Position": "Inside Sales Coordinator",
  "Mail": "Ms.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 9,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Brett Wade",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 3,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Janet Leverling",
  "Position": "Sales Representative",
  "Mail": "Ms.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 4,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Margaret Peacock",
  "Position": "Sales Representative",
  "Mail": "Mrs.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 5,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Steven Buchanan",
  "Position": "Sales Manager",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 6,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Michael Suyama",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 7,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Robert King",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "Tel": "+905367085564",
}, {
  "EmployeeID": 8,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Laura Callahan",
  "Position": "Inside Sales Coordinator",
  "Mail": "Ms.",
  "Tel": "+905367085564",
},];

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getEmployees(): Employee[] {
      return employees;
  }
}