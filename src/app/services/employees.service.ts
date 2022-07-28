import { Injectable } from '@angular/core';

export interface Employee {
  EmployeeID: Number;
  Departman: String,
  FullName: String,
  Position: String,
  Mail: String,
  BirthDate: String,
}

const employees: Employee[] = [{
  "EmployeeID": 1,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "SERKAN ŞİMŞEK",
  "Position": "BİLGİ TEKNOLOJİLERİ MÜDÜRÜ",
  "Mail": "ssimsek@sefine.com.tr",
  "BirthDate": "1968-12-08T00:00:00.000Z",
}, {
  "EmployeeID": 2,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "KAAN DEMİRCAN",
  "Position": "BİLGİ TEKNOLOJİLERİ MÜDÜR YARDIMCISI",
  "Mail": "kdemircan@sefine.com.tr",
  "BirthDate": "1972-02-19T00:00:00.000Z",
}, {
  "EmployeeID": 3,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Janet Leverling",
  "Position": "Sales Representative",
  "Mail": "Ms.",
  "BirthDate": "1983-08-30T00:00:00.000Z",
}, {
  "EmployeeID": 4,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Margaret Peacock",
  "Position": "Sales Representative",
  "Mail": "Mrs.",
  "BirthDate": "1957-09-19T00:00:00.000Z",
}, {
  "EmployeeID": 5,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Steven Buchanan",
  "Position": "Sales Manager",
  "Mail": "Mr.",
  "BirthDate": "1975-03-04T00:00:00.000Z",
}, {
  "EmployeeID": 6,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Michael Suyama",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "BirthDate": "1983-07-02T00:00:00.000Z",
}, {
  "EmployeeID": 7,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Robert King",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "BirthDate": "1980-05-29T00:00:00.000Z",
}, {
  "EmployeeID": 8,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Laura Callahan",
  "Position": "Inside Sales Coordinator",
  "Mail": "Ms.",
  "BirthDate": "1978-01-09T00:00:00.000Z",
}, {
  "EmployeeID": 9,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Brett Wade",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "BirthDate": "1986-01-27T00:00:00.000Z",
}, {
  "EmployeeID": 3,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Janet Leverling",
  "Position": "Sales Representative",
  "Mail": "Ms.",
  "BirthDate": "1983-08-30T00:00:00.000Z",
}, {
  "EmployeeID": 4,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Margaret Peacock",
  "Position": "Sales Representative",
  "Mail": "Mrs.",
  "BirthDate": "1957-09-19T00:00:00.000Z",
}, {
  "EmployeeID": 5,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Steven Buchanan",
  "Position": "Sales Manager",
  "Mail": "Mr.",
  "BirthDate": "1975-03-04T00:00:00.000Z",
}, {
  "EmployeeID": 6,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Michael Suyama",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "BirthDate": "1983-07-02T00:00:00.000Z",
}, {
  "EmployeeID": 7,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Robert King",
  "Position": "Sales Representative",
  "Mail": "Mr.",
  "BirthDate": "1980-05-29T00:00:00.000Z",
}, {
  "EmployeeID": 8,
  "Departman": "BİLGİ TEKNOLOJİLERİ MÜDÜRLÜĞÜ",
  "FullName": "Laura Callahan",
  "Position": "Inside Sales Coordinator",
  "Mail": "Ms.",
  "BirthDate": "1978-01-09T00:00:00.000Z",
},];

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getEmployees(): Employee[] {
      return employees;
  }
}