import { Component,OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableModule,Table } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,TableModule,InputIconModule, IconFieldModule, InputTextModule,PaginatorModule],
  templateUrl: './product.component.html',
   styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
    loading: any = {
        list: true,
        details: false
      };
    filteredLocationList: any;
  jsonData  = [
    {
        "Id": 1,
        "SKUNo": "AS1101",
        "CASNO": "9000‐01‐05",
        "ProductName": "ACACIA (Confi rms to IP) ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13012000
    },
    {
        "Id": 2,
        "SKUNo": "AS1101",
        "CASNO": "9000‐01‐05",
        "ProductName": "ACACIA (Confi rms to IP) ‐ 5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 13012000
    },
    {
        "Id": 3,
        "SKUNo": "AS1102",
        "CASNO": "9000‐01‐05",
        "ProductName": "ACACIA (ENZYME FREE) AR  ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13012000
    },
    {
        "Id": 4,
        "SKUNo": "AS1103",
        "CASNO": "83‐ 32‐ 9",
        "ProductName": "ACENAPTHENE FOR SYNTHESIS ‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29029090
    },
    {
        "Id": 5,
        "SKUNo": "AS1103",
        "CASNO": "83‐ 32‐ 9",
        "ProductName": "ACENAPTHENE FOR SYNTHESIS ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29029090
    },
    {
        "Id": 6,
        "SKUNo": "AS1104",
        "CASNO": "7365‐ 82‐ 4",
        "ProductName": "ACES BUFFER ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 7,
        "SKUNo": "AS1104",
        "CASNO": "7365‐ 82‐ 4",
        "ProductName": "ACES BUFFER ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 8,
        "SKUNo": "AS1104",
        "CASNO": "7365‐ 82‐ 4",
        "ProductName": "ACES BUFFER  ‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 9,
        "SKUNo": "AS1105",
        "CASNO": "60‐ 35‐ 5",
        "ProductName": "ACETAMIDE 99% ‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 10,
        "SKUNo": "AS1105",
        "CASNO": "60‐ 35‐ 5",
        "ProductName": "ACETAMIDE 99% ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 11,
        "SKUNo": "AS1106",
        "CASNO": "26239‐ 55‐ 4",
        "ProductName": "ADA BUFFER ‐ ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 12,
        "SKUNo": "AS1106",
        "CASNO": "26239‐ 55‐ 4",
        "ProductName": "ADA BUFFER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 13,
        "SKUNo": "AS1107",
        "CASNO": "103‐ 84‐ 4",
        "ProductName": "ACETANILIDE ‐ 250 GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 14,
        "SKUNo": "AS1107",
        "CASNO": "103‐ 84‐ 4",
        "ProductName": "ACETANILIDE ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 15,
        "SKUNo": "AS1108",
        "CASNO": "126‐96‐5",
        "ProductName": "ACETATE BUFFER SOLUTION PH 4.6 ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 16,
        "SKUNo": "AS1109",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID GLACIAL LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29152100
    },
    {
        "Id": 17,
        "SKUNo": "AS1109",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID GLACIAL LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29152100
    },
    {
        "Id": 18,
        "SKUNo": "AS1109",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID GLACIAL AR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29152100
    },
    {
        "Id": 19,
        "SKUNo": "AS1109",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID GLACIAL AR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29152100
    },
    {
        "Id": 20,
        "SKUNo": "AS1110",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID FOR HPLC ‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29152100
    },
    {
        "Id": 21,
        "SKUNo": "AS1110",
        "CASNO": "64‐ 19‐ 7",
        "ProductName": "ACETIC ACID FOR HPLC ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29152100
    },
    {
        "Id": 22,
        "SKUNo": "AS1111",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE LR‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141100
    },
    {
        "Id": 23,
        "SKUNo": "AS1111",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE LR‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 24,
        "SKUNo": "AS1111",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE LR‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 25,
        "SKUNo": "AS1112",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE AR ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141100
    },
    {
        "Id": 26,
        "SKUNo": "AS1112",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE AR‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 27,
        "SKUNo": "AS1112",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE AR‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 28,
        "SKUNo": "AS1113",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE FOR HPLC‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 29,
        "SKUNo": "AS1113",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE FOR HPLC‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 30,
        "SKUNo": "AS1114",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE BENZENE FREE‐25LTR",
        "PACKSIZE": "25LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 31,
        "SKUNo": "AS1114",
        "CASNO": "67‐ 64‐ 1",
        "ProductName": "ACETONE BENZENE FREE‐200LTR",
        "PACKSIZE": "200LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 32,
        "SKUNo": "AS1115",
        "CASNO": "67‐64‐1",
        "ProductName": "ACETONE (N‐HEXANE FREE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141100
    },
    {
        "Id": 33,
        "SKUNo": "AS1115",
        "CASNO": "67‐64‐1",
        "ProductName": "ACETONE(N‐HEXANE FREE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141100
    },
    {
        "Id": 34,
        "SKUNo": "AS1116",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE (Methyl Cyanide) LR ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29269000
    },
    {
        "Id": 35,
        "SKUNo": "AS1116",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE (Methyl Cyanide) LR ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 36,
        "SKUNo": "AS1117",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE AR  ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29269000
    },
    {
        "Id": 37,
        "SKUNo": "AS1117",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE AR  ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 38,
        "SKUNo": "AS1118",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE FOR HPLC‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 39,
        "SKUNo": "AS1118",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE FOR HPLC ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 40,
        "SKUNo": "AS1119",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE HPLC GRADIENT GRADE ‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 41,
        "SKUNo": "AS1119",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE HPLC GRADIENT GRADE ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 42,
        "SKUNo": "AS1120",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE 99.5% SPECIALLY DRIEDIAR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29269000
    },
    {
        "Id": 43,
        "SKUNo": "AS1120",
        "CASNO": "75‐ 05‐ 8",
        "ProductName": "ACETONITRILE 99.5% SPECIALLY DRIEDIAR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29269000
    },
    {
        "Id": 44,
        "SKUNo": "AS1121",
        "CASNO": "‐‐‐",
        "ProductName": "ACETO ORCEIN ‐100ML",
        "PACKSIZE": "100 ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 45,
        "SKUNo": "AS1122",
        "CASNO": "98‐ 86‐ 2",
        "ProductName": "ACETOPHENONE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29143910
    },
    {
        "Id": 46,
        "SKUNo": "AS1122",
        "CASNO": "98‐ 86‐ 2",
        "ProductName": "ACETOPHENONE LR99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29143910
    },
    {
        "Id": 47,
        "SKUNo": "AS1123",
        "CASNO": "98‐ 86‐ 2",
        "ProductName": "ACETOPHENONE  AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29143910
    },
    {
        "Id": 48,
        "SKUNo": "AS1123",
        "CASNO": "98‐ 86‐ 2",
        "ProductName": "ACETOPHENONE  AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29143910
    },
    {
        "Id": 49,
        "SKUNo": "AS1124",
        "CASNO": "517‐ 23‐ 7",
        "ProductName": "N‐ACETYL‐Y‐BUTYROLACTONE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 50,
        "SKUNo": "AS1124",
        "CASNO": "517‐ 23‐ 7",
        "ProductName": "N‐ACETYL‐Y‐BUTYROLACTONE FOR SYNTHESIS‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 51,
        "SKUNo": "AS1125",
        "CASNO": "123‐ 54‐ 6",
        "ProductName": "ACETYL ACETONE FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250 ML",
        "HSNCODE": 29141990
    },
    {
        "Id": 52,
        "SKUNo": "AS1125",
        "CASNO": "123‐ 54‐ 6",
        "ProductName": "ACETYL ACETONE FOR SYNTHESIS ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141990
    },
    {
        "Id": 53,
        "SKUNo": "AS1125",
        "CASNO": "123‐ 54‐ 6",
        "ProductName": "ACETYL ACETONE FOR SYNTHESIS‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141990
    },
    {
        "Id": 54,
        "SKUNo": "AS1126",
        "CASNO": "123‐ 54‐ 6",
        "ProductName": "ACETYL ACETONE AR FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250 ML",
        "HSNCODE": 29141990
    },
    {
        "Id": 55,
        "SKUNo": "AS1126",
        "CASNO": "123‐ 54‐ 6",
        "ProductName": "ACETYL ACETONE AR FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141990
    },
    {
        "Id": 56,
        "SKUNo": "AS1127",
        "CASNO": "75‐36‐5",
        "ProductName": "ACETYL CHLORIDE Extra Pure ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159010
    },
    {
        "Id": 57,
        "SKUNo": "AS1127",
        "CASNO": "75‐36‐5",
        "ProductName": "ACETYL CHLORIDE Extra Pure ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159010
    },
    {
        "Id": 58,
        "SKUNo": "AS1128",
        "CASNO": "60‐ 31‐ 1",
        "ProductName": "ACETYL CHOLINE CHLORIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 59,
        "SKUNo": "AS1128",
        "CASNO": "60‐ 31‐ 1",
        "ProductName": "ACETYL CHOLINE CHLORIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 60,
        "SKUNo": "AS1129",
        "CASNO": "87‐ 32‐ 1",
        "ProductName": "N‐ACETYL‐DL‐TRYPTOPHAN‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 61,
        "SKUNo": "AS1130",
        "CASNO": "616‐ 91‐ 1",
        "ProductName": "N‐ACETYL‐L‐CYSTEINE FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 62,
        "SKUNo": "AS1130",
        "CASNO": "616‐ 91‐ 1",
        "ProductName": "N‐ACETYL‐L‐CYSTEINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 63,
        "SKUNo": "AS1131",
        "CASNO": "10127‐ 02‐ 3",
        "ProductName": "ACRIDINE ORANGE FOR MICROSCOPICAL STAINING‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32041391
    },
    {
        "Id": 64,
        "SKUNo": "AS1131",
        "CASNO": "10127‐ 02‐ 3",
        "ProductName": "ACRIDINE ORANGE FOR MICROSCOPICAL STAINING‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041391
    },
    {
        "Id": 65,
        "SKUNo": "AS1132",
        "CASNO": "135‐49‐9",
        "ProductName": "ACRIDINE ORANGE YELLOW G‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 66,
        "SKUNo": "AS1133",
        "CASNO": "8063‐ 24‐ 9",
        "ProductName": "ACRIFLAVIN FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 67,
        "SKUNo": "AS1134",
        "CASNO": "8063‐ 24‐ 9",
        "ProductName": "ACRIFLAVIN FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 68,
        "SKUNo": "AS1134",
        "CASNO": "8063‐ 24‐ 9",
        "ProductName": "ACRIFLAVIN FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 69,
        "SKUNo": "AS1134",
        "CASNO": "8063‐ 24‐ 9",
        "ProductName": "ACRIFLAVIN FOR BIOCHEMISTRY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 70,
        "SKUNo": "AS1135",
        "CASNO": "79‐ 06‐ 1",
        "ProductName": "ACRYLAMIDE FOR SYNTHESIS‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 71,
        "SKUNo": "AS1136",
        "CASNO": "79‐ 10‐ 7",
        "ProductName": "ACRYLIC ACID  98% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333990
    },
    {
        "Id": 72,
        "SKUNo": "AS1136",
        "CASNO": "79‐ 10‐ 7",
        "ProductName": "ACRYLIC ACID  98% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29333990
    },
    {
        "Id": 73,
        "SKUNo": "AS1137",
        "CASNO": "107‐ 13‐ 1",
        "ProductName": "ACRYLONITRILE (STABILIZED) LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29261000
    },
    {
        "Id": 74,
        "SKUNo": "AS1137",
        "CASNO": "107‐ 13‐ 1",
        "ProductName": "ACRYLONITRILE (STABILIZED)LR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29261000
    },
    {
        "Id": 75,
        "SKUNo": "AS1138",
        "CASNO": "66‐ 81‐ 9",
        "ProductName": "ACTIDIONE AR (Cycloheximide)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29419011
    },
    {
        "Id": 76,
        "SKUNo": "AS1138",
        "CASNO": "66‐ 81‐ 9",
        "ProductName": "ACTIDIONE AR (Cycloheximide)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29419011
    },
    {
        "Id": 77,
        "SKUNo": "AS1139",
        "CASNO": "73‐ 24 ‐5",
        "ProductName": "ADENINE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 78,
        "SKUNo": "AS1139",
        "CASNO": "73‐ 24 ‐5",
        "ProductName": "ADENINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 79,
        "SKUNo": "AS1140",
        "CASNO": "321‐ 30‐ 2",
        "ProductName": "ADENINE SULPHATE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 80,
        "SKUNo": "AS1140",
        "CASNO": "321‐ 30‐ 2",
        "ProductName": "ADENINE SULPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 81,
        "SKUNo": "AS1141",
        "CASNO": "58‐ 61‐ 7",
        "ProductName": "ADENOSINE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 82,
        "SKUNo": "AS1141",
        "CASNO": "58‐ 61‐ 7",
        "ProductName": "ADENOSINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 83,
        "SKUNo": "AS1142",
        "CASNO": "16178‐48‐6",
        "ProductName": "ADENOSINE‐5‐DIPHOSPHORIC ACID DISODIUM SALT FOR BIOCHEMISTRY ‐ 100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29349900
    },
    {
        "Id": 84,
        "SKUNo": "AS1142",
        "CASNO": "16178‐48‐6",
        "ProductName": "ADENOSINE‐5‐DIPHOSPHORIC ACID DISODIUM SALT FOR BIOCHEMISTRY ‐ 500MG",
        "PACKSIZE": "500MG",
        "HSNCODE": 29349900
    },
    {
        "Id": 85,
        "SKUNo": "AS1142",
        "CASNO": "16178‐48‐6",
        "ProductName": "ADENOSINE‐5‐DIPHOSPHORIC ACID DISODIUM SALT FOR BIOCHEMISTRY ‐ 1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 86,
        "SKUNo": "AS1142",
        "CASNO": "16178‐48‐6",
        "ProductName": "ADENOSINE‐5‐DIPHOSPHORIC ACID DISODIUM SALT FOR BIOCHEMISTRY ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 87,
        "SKUNo": "AS1143",
        "CASNO": "4578‐ 31‐ 8",
        "ProductName": "ADENOSINE‐5‐MONOPHOSPHORIC ACID DISODIUM SALT‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 88,
        "SKUNo": "AS1143",
        "CASNO": "4578‐ 31‐ 8",
        "ProductName": "ADENOSINE‐5‐MONOPHOSPHORIC ACID DISODIUM SALT‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 89,
        "SKUNo": "AS1143",
        "CASNO": "4578‐ 31‐ 8",
        "ProductName": "ADENOSINE‐5‐MONOPHOSPHORIC ACID DISODIUM SALT‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 90,
        "SKUNo": "AS1144",
        "CASNO": "987‐ 65‐ 5",
        "ProductName": "ADENOSINE‐5‐TRIPHOSPHORIC ACID DISODIUM SALT‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 91,
        "SKUNo": "AS1144",
        "CASNO": "987‐ 65‐ 5",
        "ProductName": "ADENOSINE‐5‐TRIPHOSPHORIC ACID DISODIUM SALT‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 92,
        "SKUNo": "AS1144",
        "CASNO": "987‐ 65‐ 5",
        "ProductName": "ADENOSINE‐5‐TRIPHOSPHORIC ACID DISODIUM SALT‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 93,
        "SKUNo": "AS1145",
        "CASNO": "124‐ 04‐ 09",
        "ProductName": "ADIPIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171200
    },
    {
        "Id": 94,
        "SKUNo": "AS1145",
        "CASNO": "124‐ 04‐ 09",
        "ProductName": "ADIPIC ACID LR‐25KG",
        "PACKSIZE": "25KG",
        "HSNCODE": 29171200
    },
    {
        "Id": 95,
        "SKUNo": "AS1146",
        "CASNO": "51‐43‐4",
        "ProductName": "L‐ADRANALINE AR 98.5%‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29379090
    },
    {
        "Id": 96,
        "SKUNo": "AS1146",
        "CASNO": "51‐43‐4",
        "ProductName": "L‐ADRANALINE AR 98.5%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29379090
    },
    {
        "Id": 97,
        "SKUNo": "AS1147",
        "CASNO": "66778‐ 17‐ 4",
        "ProductName": "AESCULIN‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 98,
        "SKUNo": "AS1147",
        "CASNO": "66778‐ 17‐ 4",
        "ProductName": "AESCULIN‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 99,
        "SKUNo": "AS1148",
        "CASNO": "9002‐ 18‐ 0",
        "ProductName": "AGAR AGAR POWDER NO.1 FOR BACTERIOLOGY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 13023100
    },
    {
        "Id": 100,
        "SKUNo": "AS1148",
        "CASNO": "9002‐ 18‐ 0",
        "ProductName": "AGAR AGAR POWDER NO.1 FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13023100
    },
    {
        "Id": 101,
        "SKUNo": "AS1149",
        "CASNO": "9002‐ 18‐ 0",
        "ProductName": "AGAR AGAR POWDER FOR TISSUE CULTURE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13023100
    },
    {
        "Id": 102,
        "SKUNo": "AS1150",
        "CASNO": "9012‐36‐6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (L)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 103,
        "SKUNo": "AS1150",
        "CASNO": "9012‐36‐6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (L‐)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 104,
        "SKUNo": "AS1150",
        "CASNO": "9012‐36‐6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (L‐)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 105,
        "SKUNo": "AS1151",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (M)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 106,
        "SKUNo": "AS1151",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (M)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 107,
        "SKUNo": "AS1151",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (M)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 108,
        "SKUNo": "AS1152",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (H) ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 109,
        "SKUNo": "AS1152",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (H) ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 110,
        "SKUNo": "AS1152",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE FOR ELECTROPHORESIS (H) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 111,
        "SKUNo": "AS1153",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE DNA GRADE LOW MELTING‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 112,
        "SKUNo": "AS1153",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE DNA GRADE LOW MELTING‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 113,
        "SKUNo": "AS1153",
        "CASNO": "9012‐ 36‐ 6",
        "ProductName": "AGAROSE DNA GRADE LOW MELTING‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39139090
    },
    {
        "Id": 114,
        "SKUNo": "AS1154",
        "CASNO": "107‐ 95‐ 9",
        "ProductName": "b‐ALANINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 115,
        "SKUNo": "AS1154",
        "CASNO": "107‐ 95‐ 9",
        "ProductName": "b‐ALANINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 116,
        "SKUNo": "AS1155",
        "CASNO": "302‐ 72‐ 7",
        "ProductName": "DL‐ALANINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 117,
        "SKUNo": "AS1155",
        "CASNO": "302‐ 72‐ 7",
        "ProductName": "DL‐ALANINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 118,
        "SKUNo": "AS1155",
        "CASNO": "302‐ 72‐ 7",
        "ProductName": "DL‐ALANINE FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 119,
        "SKUNo": "AS1156",
        "CASNO": "56‐ 41‐ 7",
        "ProductName": "L‐ALANINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 120,
        "SKUNo": "AS1156",
        "CASNO": "56‐ 41‐ 7",
        "ProductName": "L‐ALANINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 121,
        "SKUNo": "AS1157",
        "CASNO": "1596‐ 84‐ 5",
        "ProductName": "ALAR(B‐9) AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 38089340
    },
    {
        "Id": 122,
        "SKUNo": "AS1157",
        "CASNO": "1596‐ 84‐ 5",
        "ProductName": "ALAR(B‐9) AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 38089340
    },
    {
        "Id": 123,
        "SKUNo": "AS1158",
        "CASNO": "        ",
        "ProductName": "ALBERT STAIN A SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 124,
        "SKUNo": "AS1158",
        "CASNO": "        ",
        "ProductName": "ALBERT STAIN B SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 125,
        "SKUNo": "AS1159",
        "CASNO": "33864‐ 99‐ 2",
        "ProductName": "ALCIAN BLUE 8GX FOR MICROSCOPY ‐5GM    C.I. No.74240",
        "PACKSIZE": "5GM",
        "HSNCODE": 32041979
    },
    {
        "Id": 126,
        "SKUNo": "AS1159",
        "CASNO": "33864‐ 99‐ 2",
        "ProductName": "ALCIAN BLUE 8GX FOR MICROSCOPY‐10GM   C.I. No.74240",
        "PACKSIZE": "10GM",
        "HSNCODE": 32041979
    },
    {
        "Id": 127,
        "SKUNo": "AS1159",
        "CASNO": "33864‐ 99‐ 2",
        "ProductName": "ALCIAN BLUE 8GX FOR MICROSCOPY‐25GM   C.I. No.74240",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041979
    },
    {
        "Id": 128,
        "SKUNo": "AS1160",
        "CASNO": "9005‐ 32‐ 7",
        "ProductName": "ALGINIC ACID (PHARMA GRADE)‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 39131010
    },
    {
        "Id": 129,
        "SKUNo": "AS1160",
        "CASNO": "9005‐ 32‐ 7",
        "ProductName": "ALGINIC ACID (PHARMA GRADE)‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39131010
    },
    {
        "Id": 130,
        "SKUNo": "AS1160",
        "CASNO": "9005‐ 32‐ 7",
        "ProductName": "ALGINIC ACID (PHARMA GRADE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 39131010
    },
    {
        "Id": 131,
        "SKUNo": "AS1161",
        "CASNO": "72‐ 48‐ 0",
        "ProductName": "ALIZARINE AR C.I. No. 58000‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 132,
        "SKUNo": "AS1161",
        "CASNO": "72‐ 48‐ 0",
        "ProductName": "ALIZARINE AR C.I. No. 58001‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 133,
        "SKUNo": "AS1162",
        "CASNO": "3952‐ 78‐ 1",
        "ProductName": "ALIZARINE COMPLEXON ‐ 1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 134,
        "SKUNo": "AS1162",
        "CASNO": "3952‐ 78‐ 1",
        "ProductName": "ALIZARINE COMPLEXON ‐ 5 GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 135,
        "SKUNo": "AS1163",
        "CASNO": "4403‐90‐1",
        "ProductName": "ALIZARINE CYANINE GREEN‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29147990
    },
    {
        "Id": 136,
        "SKUNo": "AS1164",
        "CASNO": "130‐ 22‐ 3",
        "ProductName": "ALIZARINE RED S LR‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041268
    },
    {
        "Id": 137,
        "SKUNo": "AS1164",
        "CASNO": "130‐ 22‐ 3",
        "ProductName": "ALIZARINE RED S LR‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041268
    },
    {
        "Id": 138,
        "SKUNo": "AS1165",
        "CASNO": "130‐ 22‐ 3",
        "ProductName": "ALIZARINE RED S AR ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041268
    },
    {
        "Id": 139,
        "SKUNo": "AS1165",
        "CASNO": "130‐ 22‐ 3",
        "ProductName": "ALIZARINE RED S AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041268
    },
    {
        "Id": 140,
        "SKUNo": "AS1166",
        "CASNO": "30586‐ 13‐ 1",
        "ProductName": "ALKALI BLUE 6B INDICATOR‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 141,
        "SKUNo": "AS1166",
        "CASNO": "30586‐ 13‐ 1",
        "ProductName": "ALKALI BLUE 6B INDICATOR‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 142,
        "SKUNo": "AS1167",
        "CASNO": "107‐18‐6",
        "ProductName": "ALLYL ALCOHOL 99% FOR SYNTHESIS (2‐PROPENE‐1‐OL)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29052900
    },
    {
        "Id": 143,
        "SKUNo": "AS1167",
        "CASNO": "107‐18‐6",
        "ProductName": "ALLYL ALCOHOL 99% FOR SYNTHESIS (2‐PROPENE‐1‐OL) ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29052900
    },
    {
        "Id": 144,
        "SKUNo": "AS1168",
        "CASNO": "7784‐26‐1",
        "ProductName": "ALUMINIUM AMMONIUM SULPHATE DODECAHYDRATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28333010
    },
    {
        "Id": 145,
        "SKUNo": "AS1168",
        "CASNO": "7784‐26‐1",
        "ProductName": "ALUMINIUM AMMONIUM SULPHATE DODECAHYDRATE ‐25KG",
        "PACKSIZE": "25KG",
        "HSNCODE": 28333010
    },
    {
        "Id": 146,
        "SKUNo": "AS1169",
        "CASNO": "7429‐ 90‐ 5",
        "ProductName": "ALUMINIUM (FINE) POWDER (200 MESH) ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 76031010
    },
    {
        "Id": 147,
        "SKUNo": "AS1169",
        "CASNO": "7429‐ 90‐ 5",
        "ProductName": "ALUMINIUM (FINE) POWDER (200 MESH) ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 76031010
    },
    {
        "Id": 148,
        "SKUNo": "AS1170",
        "CASNO": "7446‐ 70‐ 0",
        "ProductName": "ALUMINIUM CHLORIDE ANHYDROUS (POWDER)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273200
    },
    {
        "Id": 149,
        "SKUNo": "AS1171",
        "CASNO": "7446‐ 70‐ 0",
        "ProductName": "ALUMINIUM CHLORIDE ANHYDROUS (CRYSTALS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273200
    },
    {
        "Id": 150,
        "SKUNo": "AS1172",
        "CASNO": "7429‐90‐5",
        "ProductName": "ALUMINIUM FOIL 99%",
        "PACKSIZE": "500GM",
        "HSNCODE": 76072090
    },
    {
        "Id": 151,
        "SKUNo": "AS1173",
        "CASNO": "7429‐90‐5",
        "ProductName": "ALUMINIUM FOIL AR 99.9%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 76072090
    },
    {
        "Id": 152,
        "SKUNo": "AS1173",
        "CASNO": "7429‐90‐5",
        "ProductName": "ALUMINIUM FOIL AR 99.9%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 76072090
    },
    {
        "Id": 153,
        "SKUNo": "AS1174",
        "CASNO": "15098‐87‐0",
        "ProductName": "ALUMINIUM FLUORIDE 3 ‐ HYDRATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261200
    },
    {
        "Id": 154,
        "SKUNo": "AS1175",
        "CASNO": "21645‐51‐2",
        "ProductName": "ALUMINIUM HYDROXIDE GEL‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28183000
    },
    {
        "Id": 155,
        "SKUNo": "AS1175",
        "CASNO": "21645‐51‐2",
        "ProductName": "ALUMINIUM HYDROXIDE GEL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28183000
    },
    {
        "Id": 156,
        "SKUNo": "AS1176",
        "CASNO": "7784‐27‐2",
        "ProductName": "ALUMINIUM NITRATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 157,
        "SKUNo": "AS1177",
        "CASNO": "1344‐ 28‐ 1",
        "ProductName": "ALUMINIUM OXIDE G (NEUTRAL) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28182010
    },
    {
        "Id": 158,
        "SKUNo": "AS1178",
        "CASNO": "1344‐ 28‐ 1",
        "ProductName": "ALUMINIUM OXIDE ACTIVE (BASIC)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28182010
    },
    {
        "Id": 159,
        "SKUNo": "AS1179",
        "CASNO": "1344‐ 28‐ 1",
        "ProductName": "ALUMINIUM OXIDE ACTIVE (NETUTRAL) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28182010
    },
    {
        "Id": 160,
        "SKUNo": "AS1180",
        "CASNO": "1344‐ 28‐ 1",
        "ProductName": "ALUMINIUM OXIDE ACTIVE (ACIDIC)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28182010
    },
    {
        "Id": 161,
        "SKUNo": "AS1181",
        "CASNO": "7784‐24‐9",
        "ProductName": "ALUMINIUM POTASSIUM SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28333030
    },
    {
        "Id": 162,
        "SKUNo": "AS1181",
        "CASNO": "7784‐24‐9",
        "ProductName": "ALUMINIUM POTASSIUM SULPHATE LR‐ 2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28333030
    },
    {
        "Id": 163,
        "SKUNo": "AS1182",
        "CASNO": "7784‐24‐9",
        "ProductName": "ALUMINIUM POTASSIUM SULPHATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28333030
    },
    {
        "Id": 164,
        "SKUNo": "AS1182",
        "CASNO": "7784‐24‐9",
        "ProductName": "ALUMINIUM POTASSIUM SULPHATE AR ‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28333030
    },
    {
        "Id": 165,
        "SKUNo": "AS1183",
        "CASNO": "637‐ 12‐ 7",
        "ProductName": "ALUMINIUM STEARATE LR ‐  1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29157090
    },
    {
        "Id": 166,
        "SKUNo": "AS1184",
        "CASNO": "7784‐31‐ 8",
        "ProductName": "ALUMINIUM SULPHATE PURIFIED ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332210
    },
    {
        "Id": 167,
        "SKUNo": "AS1185",
        "CASNO": "7784‐31‐ 8",
        "ProductName": "ALUMINIUM SULPHATE AR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332210
    },
    {
        "Id": 168,
        "SKUNo": "AS1186",
        "CASNO": "569‐ 58‐ 4",
        "ProductName": "ALUMINON AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 169,
        "SKUNo": "AS1186",
        "CASNO": "569‐ 58‐ 4",
        "ProductName": "ALUMINON AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 170,
        "SKUNo": "AS1187",
        "CASNO": "915‐ 67‐ 3",
        "ProductName": "AMARANTH ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041984
    },
    {
        "Id": 171,
        "SKUNo": "AS1188",
        "CASNO": "9002‐ 23‐ 7",
        "ProductName": "AMBERLITE IR 120 NA + FORM ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39140090
    },
    {
        "Id": 172,
        "SKUNo": "AS1189",
        "CASNO": "9002‐ 24‐ 8",
        "ProductName": "AMBERLITE IR 400 CL‐ FORM‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39140090
    },
    {
        "Id": 173,
        "SKUNo": "AS1190",
        "CASNO": "1064‐48‐8",
        "ProductName": "AMIDO BLACK 10B C.I. NO. 20470 ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 174,
        "SKUNo": "AS1190",
        "CASNO": "1064‐48‐8",
        "ProductName": "AMIDO BLACK 10B C.I. NO. 20471‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 175,
        "SKUNo": "AS1191",
        "CASNO": "122‐ 80‐ 5",
        "ProductName": "4‐AMINO ACETANILIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 176,
        "SKUNo": "AS1191",
        "CASNO": "122‐ 80‐ 5",
        "ProductName": "4‐AMINO ACETANILIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 177,
        "SKUNo": "AS1192",
        "CASNO": "83‐ 07‐ 8",
        "ProductName": "4‐AMINOANTIPYRINE PURISS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29331990
    },
    {
        "Id": 178,
        "SKUNo": "AS1192",
        "CASNO": "83‐ 07‐ 8",
        "ProductName": "4‐AMINOANTIPYRINE PURISS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29331990
    },
    {
        "Id": 179,
        "SKUNo": "AS1193",
        "CASNO": "99‐ 05‐ 8",
        "ProductName": "3‐AMINOBENZOIC ACID FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 180,
        "SKUNo": "AS1193",
        "CASNO": "99‐ 05‐ 8",
        "ProductName": "3‐AMINOBENZOIC ACID FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 181,
        "SKUNo": "AS1194",
        "CASNO": "150‐ 13‐ 0",
        "ProductName": "4‐AMINOBENZIOC ACID LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 182,
        "SKUNo": "AS1194",
        "CASNO": "150‐ 13‐ 0",
        "ProductName": "4‐AMINOBENZIOC ACID LR‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 183,
        "SKUNo": "AS1195",
        "CASNO": "56‐ 12‐ 2",
        "ProductName": "4‐AMINOBUTYRIC ACID FOR SYNTHESIS (GABA)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 184,
        "SKUNo": "AS1195",
        "CASNO": "56‐ 12‐ 2",
        "ProductName": "4‐AMINOBUTYRIC ACID FOR SYNTHESIS (GABA)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 185,
        "SKUNo": "AS1196",
        "CASNO": "60‐ 32‐ 2",
        "ProductName": "6‐AMINO CAPROIC ACID 99% FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 186,
        "SKUNo": "AS1196",
        "CASNO": "60‐ 32‐ 2",
        "ProductName": "6‐AMINO CAPROIC ACID 99% FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 187,
        "SKUNo": "AS1197",
        "CASNO": "111‐41‐1",
        "ProductName": "N‐(2‐AMINOETHYL) ETHANOLAMINE FOR SYNTHESIS 98% 2‐(2‐Aminoethyl amino ethanol)‐500ML",
        "PACKSIZE": "500ml",
        "HSNCODE": 29221990
    },
    {
        "Id": 188,
        "SKUNo": "AS1197",
        "CASNO": "111‐41‐1",
        "ProductName": "N‐(2‐AMINOETHYL) ETHANOLAMINE FOR SYNTHESIS 98% 2‐(2‐Aminoethyl amino ethanol)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29221990
    },
    {
        "Id": 189,
        "SKUNo": "AS1198",
        "CASNO": "2582‐ 30‐ 1",
        "ProductName": "1‐AMINOGUANIDINE HYDROGEN CARBONATE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 190,
        "SKUNo": "AS1198",
        "CASNO": "2582‐ 30‐ 1",
        "ProductName": "1‐AMINOGUANIDINE HYDROGEN CARBONATE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 191,
        "SKUNo": "AS1199",
        "CASNO": "115‐ 69‐ 5",
        "ProductName": "2‐AMINO‐2‐METHYL‐1,3‐PROPANEDIOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 192,
        "SKUNo": "AS1199",
        "CASNO": "115‐ 69‐ 5",
        "ProductName": "2‐AMINO‐2‐METHYL‐1,3‐PROPANEDIOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 193,
        "SKUNo": "AS1200",
        "CASNO": "124‐ 68‐ 5",
        "ProductName": "2‐AMINO‐2‐METHYL‐1‐PROPANOL LR (AMP)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29225090
    },
    {
        "Id": 194,
        "SKUNo": "AS1200",
        "CASNO": "124‐ 68‐ 5",
        "ProductName": "2‐AMINO‐2‐METHYL‐1‐PROPANOL LR (AMP)‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29225090
    },
    {
        "Id": 195,
        "SKUNo": "AS1201",
        "CASNO": "116‐ 63‐ 2",
        "ProductName": "1‐AMINO‐2‐NAPHTHOL‐4‐SULFONIC ACID LR‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222130
    },
    {
        "Id": 196,
        "SKUNo": "AS1201",
        "CASNO": "116‐ 63‐ 2",
        "ProductName": "1‐AMINO‐2‐NAPHTHOL‐4‐SULFONIC ACID LR‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222130
    },
    {
        "Id": 197,
        "SKUNo": "AS1202",
        "CASNO": "116‐ 63‐ 2",
        "ProductName": "1‐AMINO‐2‐NAPHTHOL‐4‐SULFONIC ACID AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222130
    },
    {
        "Id": 198,
        "SKUNo": "AS1202",
        "CASNO": "116‐ 63‐ 2",
        "ProductName": "1‐AMINO‐2‐NAPHTHOL‐4‐SULFONIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222130
    },
    {
        "Id": 199,
        "SKUNo": "AS1203",
        "CASNO": "95‐ 55‐ 6",
        "ProductName": "2‐AMINOPHENOL 99%‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 200,
        "SKUNo": "AS1203",
        "CASNO": "95‐ 55‐ 6",
        "ProductName": "2‐AMINOPHENOL 99% ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 201,
        "SKUNo": "AS1204",
        "CASNO": "123‐30‐8",
        "ProductName": "4‐AMINOPHENOL‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222913
    },
    {
        "Id": 202,
        "SKUNo": "AS1204",
        "CASNO": "123‐30‐8",
        "ProductName": "4‐AMINOPHENOL‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29222913
    },
    {
        "Id": 203,
        "SKUNo": "AS1205",
        "CASNO": "504‐ 29‐ 0",
        "ProductName": "2‐AMINOPYRIDINE FOR SYNTHESIS ‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333919
    },
    {
        "Id": 204,
        "SKUNo": "AS1205",
        "CASNO": "504‐ 29‐ 0",
        "ProductName": "2‐AMINOPYRIDINE FOR SYNTHESIS ‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29333919
    },
    {
        "Id": 205,
        "SKUNo": "AS1206",
        "CASNO": "504‐ 24‐ 5",
        "ProductName": "4‐AMINOPYRIDINE 98% ‐ 10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 206,
        "SKUNo": "AS1206",
        "CASNO": "504‐ 24‐ 5",
        "ProductName": "4‐AMINOPYRIDINE 98% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 207,
        "SKUNo": "AS1207",
        "CASNO": "      ",
        "ProductName": "AMMONIA BUFFER SOLUTION ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 208,
        "SKUNo": "AS1208",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION 25% LR‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28142000
    },
    {
        "Id": 209,
        "SKUNo": "AS1208",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION 25% LR‐ 1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 210,
        "SKUNo": "AS1208",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION 25% LR‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 211,
        "SKUNo": "AS1208",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION 25% LR‐ 5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 212,
        "SKUNo": "AS1209",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION AR 25% ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28142000
    },
    {
        "Id": 213,
        "SKUNo": "AS1209",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION AR 25%‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 214,
        "SKUNo": "AS1209",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION AR 25% ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 215,
        "SKUNo": "AS1209",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION AR 25% ‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28142000
    },
    {
        "Id": 216,
        "SKUNo": "AS1210",
        "CASNO": "1336‐ 21‐ 6",
        "ProductName": "AMMONIA SOLUTION 0.04%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28142000
    },
    {
        "Id": 217,
        "SKUNo": "AS1211",
        "CASNO": "631‐ 61‐ 8",
        "ProductName": "AMMONIUM ACETATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 218,
        "SKUNo": "AS1211",
        "CASNO": "631‐ 61‐ 8",
        "ProductName": "AMMONIUM ACETATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 219,
        "SKUNo": "AS1212",
        "CASNO": "631‐ 61‐ 8",
        "ProductName": "AMMONIUM ACETATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 220,
        "SKUNo": "AS1213",
        "CASNO": "631‐ 61‐ 8",
        "ProductName": "AMMONIUM ACETATE 98% MOLECULAR BIOLOGY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 221,
        "SKUNo": "AS1213",
        "CASNO": "631‐ 61‐ 8",
        "ProductName": "AMMONIUM ACETATE 98% MOLECULAR BIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 222,
        "SKUNo": "AS1214",
        "CASNO": "          ",
        "ProductName": "AMMONIUM ACETATE 6.7% W/V SOLUTION‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 223,
        "SKUNo": "AS1215",
        "CASNO": "3385‐ 41‐ 9",
        "ProductName": "AMMONIUM ADIPATE PURIFIED 99%‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 224,
        "SKUNo": "AS1216",
        "CASNO": "1066‐ 33‐ 7",
        "ProductName": "AMMONIUM BICARBONATE‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 225,
        "SKUNo": "AS1216",
        "CASNO": "1066‐ 33‐ 7",
        "ProductName": "AMMONIUM BICARBONATE ‐ 5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28369990
    },
    {
        "Id": 226,
        "SKUNo": "AS1217",
        "CASNO": "1341‐ 49‐ 7",
        "ProductName": "AMMONIUM BIFLUORIDE LR‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 227,
        "SKUNo": "AS1217",
        "CASNO": "1341‐ 49‐ 7",
        "ProductName": "AMMONIUM BIFLUORIDE LR‐ 2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28261990
    },
    {
        "Id": 228,
        "SKUNo": "AS1218",
        "CASNO": "12124‐ 97‐9",
        "ProductName": "AMMONIUM BROMIDE‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 229,
        "SKUNo": "AS1219",
        "CASNO": "12124‐ 97‐9",
        "ProductName": "AMMONIUM BROMIDE AR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 230,
        "SKUNo": "AS1220",
        "CASNO": "506‐ 87‐ 6",
        "ProductName": "AMMONIUM CARBONATE LR‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 231,
        "SKUNo": "AS1221",
        "CASNO": "506‐ 87‐ 6",
        "ProductName": "AMMONIUM CARBONATE AR‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 232,
        "SKUNo": "AS1222",
        "CASNO": "16774‐ 21‐ 3",
        "ProductName": "AMMONIUM CERIC NITRATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 233,
        "SKUNo": "AS1223",
        "CASNO": "16774‐ 21‐ 3",
        "ProductName": "AMMONIUM CERIC NITRATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 234,
        "SKUNo": "AS1224",
        "CASNO": "16774‐ 21‐ 3",
        "ProductName": "AMMONIUM CERIC NITRATE 0.05 N VOLUMETRIC SOLUTION (N/20)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 235,
        "SKUNo": "AS1225",
        "CASNO": "10378‐ 47‐ 9",
        "ProductName": "AMMONIUM CERIC SULPHATE LR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 236,
        "SKUNo": "AS1225",
        "CASNO": "10378‐ 47‐ 9",
        "ProductName": "AMMONIUM CERIC SULPHATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 237,
        "SKUNo": "AS1226",
        "CASNO": "10378‐ 47‐ 9",
        "ProductName": "AMMONIUM CERIC SULPHATE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 238,
        "SKUNo": "AS1226",
        "CASNO": "10378‐ 47‐ 9",
        "ProductName": "AMMONIUM CERIC SULPHATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 239,
        "SKUNo": "AS1227",
        "CASNO": "12125‐ 02‐ 9",
        "ProductName": "AMMONIUM CHLORIDE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28271000
    },
    {
        "Id": 240,
        "SKUNo": "AS1227",
        "CASNO": "12125‐ 02‐ 9",
        "ProductName": "AMMONIUM CHLORIDE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28271000
    },
    {
        "Id": 241,
        "SKUNo": "AS1227",
        "CASNO": "12125‐ 02‐ 9",
        "ProductName": "AMMONIUM CHLORIDE LR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28271000
    },
    {
        "Id": 242,
        "SKUNo": "AS1228",
        "CASNO": "12125‐ 02‐ 9",
        "ProductName": "AMMONIUM CHLORIDE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28271000
    },
    {
        "Id": 243,
        "SKUNo": "AS1228",
        "CASNO": "12125‐ 02‐ 9",
        "ProductName": "AMMONIUM CHLORIDE AR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28271000
    },
    {
        "Id": 244,
        "SKUNo": "AS1229",
        "CASNO": "3458‐ 72‐ 8",
        "ProductName": "tri‐AMMONIUM CITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 245,
        "SKUNo": "AS1230",
        "CASNO": "7789‐09‐5",
        "ProductName": "AMMONIUM DICHROMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 246,
        "SKUNo": "AS1230",
        "CASNO": "7789/09/05",
        "ProductName": "AMMONIUM DICHROMATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28415090
    },
    {
        "Id": 247,
        "SKUNo": "AS1231",
        "CASNO": "7789/09/05",
        "ProductName": "AMMONIUM DICHROMATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 248,
        "SKUNo": "AS1232",
        "CASNO": "7722‐ 76‐ 1",
        "ProductName": "AMMONIUM DIHYDROGEN ORTHOPHOSPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31054000
    },
    {
        "Id": 249,
        "SKUNo": "AS1233",
        "CASNO": "7722‐ 76‐ 1",
        "ProductName": "AMMONIUM DIHYDROGEN ORTHOPHOSPHATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31054000
    },
    {
        "Id": 250,
        "SKUNo": "AS1234",
        "CASNO": "1185‐ 57‐ 5",
        "ProductName": "AMMONIUM FERRIC CITRATE (BROWN) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181550
    },
    {
        "Id": 251,
        "SKUNo": "AS1235",
        "CASNO": "7783‐ 83‐ 7",
        "ProductName": "AMMONIUM FERRIC SULPHATE E.P.(Dodeca)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 252,
        "SKUNo": "AS1236",
        "CASNO": "7783‐ 83‐ 7",
        "ProductName": "AMMONIUM FERRIC SULPHATE AR (Dodeca)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 253,
        "SKUNo": "AS1237",
        "CASNO": "7783‐ 85‐ 9",
        "ProductName": "AMMONIUM FERROUS SULPHATE LR (Hexa)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 254,
        "SKUNo": "AS1237",
        "CASNO": "7783‐ 85‐ 9",
        "ProductName": "AMMONIUM FERROUS SULPHATE LR (Hexa)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 255,
        "SKUNo": "AS1237",
        "CASNO": "7783‐ 85‐ 9",
        "ProductName": "AMMONIUM FERROUS SULPHATE LR (Hexa)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 256,
        "SKUNo": "AS1238",
        "CASNO": "7783‐ 85‐ 9",
        "ProductName": "AMMONIUM FERROUS SULPHATE AR (Hexa)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 257,
        "SKUNo": "AS1238",
        "CASNO": "7783‐ 85‐ 9",
        "ProductName": "AMMONIUM FERROUS SULPHATE AR (Hexa)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 258,
        "SKUNo": "AS1239",
        "CASNO": "12125‐ 01‐ 8",
        "ProductName": "AMMONIUM FLUORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 259,
        "SKUNo": "AS1240",
        "CASNO": "12125‐ 01‐ 8",
        "ProductName": "AMMONIUM FLUORIDE AR ‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 260,
        "SKUNo": "AS1240",
        "CASNO": "12125‐ 01‐ 8",
        "ProductName": "AMMONIUM FLUORIDE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 261,
        "SKUNo": "AS1241",
        "CASNO": "540‐ 69‐ 2",
        "ProductName": "AMMONIUM FORMATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29151290
    },
    {
        "Id": 262,
        "SKUNo": "AS1241",
        "CASNO": "540‐ 69‐ 2",
        "ProductName": "AMMONIUM FORMATE LR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29151290
    },
    {
        "Id": 263,
        "SKUNo": "AS1242",
        "CASNO": "7783‐ 28‐ 0",
        "ProductName": "di‐AMMONIUM HYDROGEN O'PHOS PURIFIED ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 264,
        "SKUNo": "AS1242",
        "CASNO": "7783‐ 28‐ 0",
        "ProductName": "di‐AMMONIUM HYDROGEN O'PHOSPHATE PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181590
    },
    {
        "Id": 265,
        "SKUNo": "AS1243",
        "CASNO": "7783‐ 28‐ 0",
        "ProductName": "di‐AMMONIUM HYDROGEN O'PHOSPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 266,
        "SKUNo": "AS1244",
        "CASNO": "12027‐ 06‐ 4",
        "ProductName": "AMMONIUM IODIDE LR ‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 267,
        "SKUNo": "AS1244",
        "CASNO": "12027‐ 06‐ 4",
        "ProductName": "AMMONIUM IODIDE LR ‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 268,
        "SKUNo": "AS1245",
        "CASNO": "12027‐ 06‐ 4",
        "ProductName": "AMMONIUM IODIDE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 269,
        "SKUNo": "AS1245",
        "CASNO": "12027‐ 06‐ 4",
        "ProductName": "AMMONIUM IODIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 270,
        "SKUNo": "AS1246",
        "CASNO": "7803‐ 55‐ 6",
        "ProductName": "AMMONIUM METAVANADATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 271,
        "SKUNo": "AS1246",
        "CASNO": "7803‐ 55‐ 6",
        "ProductName": "AMMONIUM METAVANADATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 272,
        "SKUNo": "AS1247",
        "CASNO": "7803‐ 55‐ 6",
        "ProductName": "AMMONIUM METAVANADATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 273,
        "SKUNo": "AS1247",
        "CASNO": "7803‐ 55‐ 6",
        "ProductName": "AMMONIUM METAVANADATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 274,
        "SKUNo": "AS1248",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE LR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 275,
        "SKUNo": "AS1248",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 276,
        "SKUNo": "AS1248",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 277,
        "SKUNo": "AS1249",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 278,
        "SKUNo": "AS1249",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 279,
        "SKUNo": "AS1249",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28417090
    },
    {
        "Id": 280,
        "SKUNo": "AS1250",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE ACS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 281,
        "SKUNo": "AS1250",
        "CASNO": "12054‐ 85‐ 2",
        "ProductName": "AMMONIUM MOLYBDATE ACS ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28417090
    },
    {
        "Id": 282,
        "SKUNo": "AS1251",
        "CASNO": "7785‐ 20‐ 8",
        "ProductName": "AMMONIUM NICKEL SULPHATE HEXAHYDRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 283,
        "SKUNo": "AS1252",
        "CASNO": "7785‐ 20‐ 8",
        "ProductName": "AMMONIUM NICKEL SULPHATE HEXAHYDRATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 284,
        "SKUNo": "AS1253",
        "CASNO": "6009‐ 70‐ 7",
        "ProductName": "AMMONIUM OXALATE PURIFIED ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 285,
        "SKUNo": "AS1254",
        "CASNO": "6009‐ 70‐ 7",
        "ProductName": "AMMONIUM OXALATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 286,
        "SKUNo": "AS1255",
        "CASNO": "7727‐ 54‐ 0",
        "ProductName": "AMMONIUM PERSULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28334000
    },
    {
        "Id": 287,
        "SKUNo": "AS1255",
        "CASNO": "7727‐ 54‐ 0",
        "ProductName": "AMMONIUM PERSULPHATE LR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28334000
    },
    {
        "Id": 288,
        "SKUNo": "AS1256",
        "CASNO": "7727‐ 54‐ 0",
        "ProductName": "AMMONIUM PERSULPHATE AR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28334000
    },
    {
        "Id": 289,
        "SKUNo": "AS1257",
        "CASNO": "7727‐ 54‐ 0",
        "ProductName": "AMMONIUM PERSULPHATE AR ‐ 5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28334000
    },
    {
        "Id": 290,
        "SKUNo": "AS1258",
        "CASNO": "3051‐ 09‐ 0",
        "ProductName": "AMMONIUM PURPURATE LR (MUREXIDE)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 291,
        "SKUNo": "AS1258",
        "CASNO": "3051‐ 09‐ 0",
        "ProductName": "AMMONIUM PURPURATE LR (MUREXIDE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 292,
        "SKUNo": "AS1259",
        "CASNO": "3051‐ 09‐ 0",
        "ProductName": "AMMONIUM PURPURATE AR (MUREXIDE)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 293,
        "SKUNo": "AS1259",
        "CASNO": "3051‐ 09‐ 0",
        "ProductName": "AMMONIUM PURPURATE AR (MUREXIDE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 294,
        "SKUNo": "AS1260",
        "CASNO": "13573‐ 16‐ 5",
        "ProductName": "AMMONIUM REINECKATE MONOHYDRATE 95% LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 295,
        "SKUNo": "AS1261",
        "CASNO": "7773‐06‐0",
        "ProductName": "AMMONIUM SULFAMATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 296,
        "SKUNo": "AS1262",
        "CASNO": "7783‐ 20‐ 2",
        "ProductName": "AMMONIUM SULPHATE LR‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31022100
    },
    {
        "Id": 297,
        "SKUNo": "AS1262",
        "CASNO": "7783‐ 20‐ 2",
        "ProductName": "AMMONIUM SULPHATE LR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31022100
    },
    {
        "Id": 298,
        "SKUNo": "AS1263",
        "CASNO": "7783‐ 20‐ 2",
        "ProductName": "AMMONIUM SULPHATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31022100
    },
    {
        "Id": 299,
        "SKUNo": "AS1263",
        "CASNO": "7783‐ 20‐ 2",
        "ProductName": "AMMONIUM SULPHATE AR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31022100
    },
    {
        "Id": 300,
        "SKUNo": "AS1264",
        "CASNO": "12135‐ 78‐ 1",
        "ProductName": "AMMONIUM SULPHIDE SOLUTION 20%",
        "PACKSIZE": "500ML",
        "HSNCODE": 28309010
    },
    {
        "Id": 301,
        "SKUNo": "AS1265",
        "CASNO": "3164‐ 29‐ 2",
        "ProductName": "AMMONIUM TARTRATE LR FOR HAIRDYE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 302,
        "SKUNo": "AS1266",
        "CASNO": "1762‐ 95‐ 4",
        "ProductName": "AMMONIUM THIOCYANATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 303,
        "SKUNo": "AS1267",
        "CASNO": "1762‐ 95‐ 4",
        "ProductName": "AMMONIUM THIOCYANATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 304,
        "SKUNo": "AS1268",
        "CASNO": "123‐92‐2",
        "ProductName": "iso‐ AMYL ACETATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 305,
        "SKUNo": "AS1268",
        "CASNO": "123‐92‐2",
        "ProductName": "iso‐ AMYL ACETATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153990
    },
    {
        "Id": 306,
        "SKUNo": "AS1269",
        "CASNO": "71‐ 41‐ 0",
        "ProductName": "n‐AMYL ALCOHOL 99% For synthesis ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29054290
    },
    {
        "Id": 307,
        "SKUNo": "AS1269",
        "CASNO": "71‐ 41‐ 0",
        "ProductName": "n‐AMYL ALCOHOL 99% For synthesis ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29054290
    },
    {
        "Id": 308,
        "SKUNo": "AS1270",
        "CASNO": "71‐ 41‐ 0",
        "ProductName": "n‐AMYL ALCOHOL AR 99% ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29054290
    },
    {
        "Id": 309,
        "SKUNo": "AS1270",
        "CASNO": "71‐ 41‐ 0",
        "ProductName": "n‐AMYL ALCOHOL AR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29054290
    },
    {
        "Id": 310,
        "SKUNo": "AS1271",
        "CASNO": "75‐ 85‐ 4",
        "ProductName": "tert‐AMYL ALCOHOL FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 311,
        "SKUNo": "AS1271",
        "CASNO": "75‐ 85‐ 4",
        "ProductName": "tert‐AMYL ALCOHOL FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 312,
        "SKUNo": "AS1272",
        "CASNO": "123‐ 51‐ 3",
        "ProductName": "ISO‐AMYL ALCOHOL LR (FOR MILK TESTING)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 313,
        "SKUNo": "AS1273",
        "CASNO": "123‐ 51‐ 3",
        "ProductName": "ISO‐AMYL ALCOHOL LR (FOR MILK TESTING) 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 314,
        "SKUNo": "AS1274",
        "CASNO": "123‐ 51‐ 3",
        "ProductName": "ISO‐AMYL ALCOHOL AR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 315,
        "SKUNo": "AS1274",
        "CASNO": "123‐ 51‐ 3",
        "ProductName": "ISO‐AMYL ALCOHOL AR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 316,
        "SKUNo": "AS1275",
        "CASNO": "62‐ 53‐ 3",
        "ProductName": "ANILINE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214110
    },
    {
        "Id": 317,
        "SKUNo": "AS1275",
        "CASNO": "62‐ 53‐ 3",
        "ProductName": "ANILINE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214110
    },
    {
        "Id": 318,
        "SKUNo": "AS1276",
        "CASNO": "62‐ 53‐ 3",
        "ProductName": "ANILINE AR 99.5% 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214110
    },
    {
        "Id": 319,
        "SKUNo": "AS1276",
        "CASNO": "62‐ 53‐ 3",
        "ProductName": "ANILINE AR 99.5% 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214110
    },
    {
        "Id": 320,
        "SKUNo": "AS1277",
        "CASNO": "28983‐ 56‐ 4",
        "ProductName": "ANILINE BLUE W/S‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041251
    },
    {
        "Id": 321,
        "SKUNo": "AS1277",
        "CASNO": "28983‐ 56‐ 4",
        "ProductName": "ANILINE BLUE W/S‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041251
    },
    {
        "Id": 322,
        "SKUNo": "AS1278",
        "CASNO": "28631‐ 66‐ 5",
        "ProductName": "ANILINE BLUE SPIRIT SOLUBLE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041251
    },
    {
        "Id": 323,
        "SKUNo": "AS1278",
        "CASNO": "28631‐ 66‐ 5",
        "ProductName": "ANILINE BLUE SPIRIT SOLUBLE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041251
    },
    {
        "Id": 324,
        "SKUNo": "AS1279",
        "CASNO": "142‐ 04‐ 1",
        "ProductName": "ANILINE HYDROCHLORIDE‐250GM",
        "PACKSIZE": "250‐GM",
        "HSNCODE": 29214120
    },
    {
        "Id": 325,
        "SKUNo": "AS1279",
        "CASNO": "142‐ 04‐ 1",
        "ProductName": "ANILINE HYDROCHLORIDE‐500GM",
        "PACKSIZE": "500‐GM",
        "HSNCODE": 29214120
    },
    {
        "Id": 326,
        "SKUNo": "AS1280",
        "CASNO": "542‐16‐5",
        "ProductName": "ANILINE SULPHATE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214190
    },
    {
        "Id": 327,
        "SKUNo": "AS1280",
        "CASNO": "542‐16‐5",
        "ProductName": "ANILINE SULPHATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214190
    },
    {
        "Id": 328,
        "SKUNo": "AS1281",
        "CASNO": "123‐ 11‐ 5",
        "ProductName": "ANISALDEHYDE 98% LR (4‐Methoxy Benzaldehyde)‐250ML",
        "PACKSIZE": "250 ML",
        "HSNCODE": 29124910
    },
    {
        "Id": 329,
        "SKUNo": "AS1281",
        "CASNO": "123‐ 11‐ 5",
        "ProductName": "ANISALDEHYDE 98% LR (4‐Methoxy Benzaldehyde)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29124910
    },
    {
        "Id": 330,
        "SKUNo": "AS1281",
        "CASNO": "123‐ 11‐ 5",
        "ProductName": "ANISALDEHYDE 98% LR (4‐Methoxy Benzaldehyde)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29124910
    },
    {
        "Id": 331,
        "SKUNo": "AS1282",
        "CASNO": "104‐ 94‐ 9",
        "ProductName": "p‐ANISIDINE 98%‐250GM",
        "PACKSIZE": "250 GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 332,
        "SKUNo": "AS1282",
        "CASNO": "104‐ 94‐ 9",
        "ProductName": "p‐ANISIDINE 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 333,
        "SKUNo": "AS1283",
        "CASNO": "100‐66‐3",
        "ProductName": "ANISOLE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29093090
    },
    {
        "Id": 334,
        "SKUNo": "AS1283",
        "CASNO": "100‐66‐3",
        "ProductName": "ANISOLE FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29093090
    },
    {
        "Id": 335,
        "SKUNo": "AS1284",
        "CASNO": "84‐ 65‐1",
        "ProductName": "ANTHRAQUINONE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29146990
    },
    {
        "Id": 336,
        "SKUNo": "AS1285",
        "CASNO": "90‐ 44‐ 8",
        "ProductName": "ANTHRONE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29143920
    },
    {
        "Id": 337,
        "SKUNo": "AS1286",
        "CASNO": "90‐ 44‐ 8",
        "ProductName": "ANTHRONE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29143920
    },
    {
        "Id": 338,
        "SKUNo": "AS1286",
        "CASNO": "90‐ 44‐ 8",
        "ProductName": "ANTHRONE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29143920
    },
    {
        "Id": 339,
        "SKUNo": "AS1287",
        "CASNO": "153277‐35‐1",
        "ProductName": "ANTHRAQUINONE‐2 SULPHONIC ACID SODIUM SALT 98%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29146990
    },
    {
        "Id": 340,
        "SKUNo": "AS1287",
        "CASNO": "153277‐35‐1",
        "ProductName": "ANTHRAQUINONE‐2 SULPHONIC ACID SODIUM SALT 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29146990
    },
    {
        "Id": 341,
        "SKUNo": "AS1288",
        "CASNO": "7440‐ 36‐ 0",
        "ProductName": "ANTIMONY (METAL) POWDER‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81101000
    },
    {
        "Id": 342,
        "SKUNo": "AS1288",
        "CASNO": "7440‐ 36‐ 0",
        "ProductName": "ANTIMONY (METAL) POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81101000
    },
    {
        "Id": 343,
        "SKUNo": "AS1289",
        "CASNO": "10025‐ 91‐ 9",
        "ProductName": "ANTIMONY (III) CHLORIDE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 344,
        "SKUNo": "AS1289",
        "CASNO": "10025‐ 91‐ 9",
        "ProductName": "ANTIMONY (III) CHLORIDE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 345,
        "SKUNo": "AS1290",
        "CASNO": "10025‐ 91‐ 9",
        "ProductName": "ANTIMONY(III) CHLORIDE AR ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 346,
        "SKUNo": "AS1290",
        "CASNO": "10025‐ 91‐ 9",
        "ProductName": "ANTIMONY(III) CHLORIDE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 347,
        "SKUNo": "AS1291",
        "CASNO": "28300‐ 74‐ 5",
        "ProductName": "ANTIMONY POTASSIUM TARTARATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 348,
        "SKUNo": "AS1291",
        "CASNO": "28300‐ 74‐ 5",
        "ProductName": "ANTIMONY POTASSIUM TARTARATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 349,
        "SKUNo": "AS1292",
        "CASNO": "28300‐ 74‐ 5",
        "ProductName": "ANTIMONY POTASSIUM TARTARATE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 350,
        "SKUNo": "AS1292",
        "CASNO": "28300‐ 74‐ 5",
        "ProductName": "ANTIMONY POTASSIUM TARTARATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 351,
        "SKUNo": "AS1293",
        "CASNO": "1345‐ 04‐6",
        "ProductName": "ANTIMONY SULPHIDE BLACK ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 352,
        "SKUNo": "AS1293",
        "CASNO": "1315‐ 04‐ 4",
        "ProductName": "ANTIMONY SULPHIDE GLODEN‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 353,
        "SKUNo": "AS1294",
        "CASNO": "1309‐ 64‐ 4",
        "ProductName": "ANTIMONY TRIOXIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28258000
    },
    {
        "Id": 354,
        "SKUNo": "AS1295",
        "CASNO": "10323‐ 20‐ 3",
        "ProductName": "D(‐)‐ARABINOSE AR ‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 355,
        "SKUNo": "AS1295",
        "CASNO": "10323‐ 20‐ 3",
        "ProductName": "D(‐)‐ARABINOSE AR ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 356,
        "SKUNo": "AS1295",
        "CASNO": "10323‐ 20‐ 3",
        "ProductName": "D(‐)‐ARABINOSE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 357,
        "SKUNo": "AS1296",
        "CASNO": "5328‐ 37‐ 0",
        "ProductName": "L(+)ARABINOSE‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 358,
        "SKUNo": "AS1296",
        "CASNO": "5328‐ 37‐ 0",
        "ProductName": "L(+)ARABINOSE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 359,
        "SKUNo": "AS1297",
        "CASNO": "74‐ 79‐ 3",
        "ProductName": "L‐ARGININE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 360,
        "SKUNo": "AS1297",
        "CASNO": "74‐ 79‐ 3",
        "ProductName": "L‐ARGININE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 361,
        "SKUNo": "AS1298",
        "CASNO": "1119‐ 34‐ 2",
        "ProductName": "L‐ARGININE MONOHYDROCHLORIDE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 362,
        "SKUNo": "AS1298",
        "CASNO": "1119‐ 34‐ 2",
        "ProductName": "L‐ARGININE MONOHYDROCHLORIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 363,
        "SKUNo": "AS1299",
        "CASNO": "50‐ 81‐ 7",
        "ProductName": "L‐ASCORBIC ACID LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362700
    },
    {
        "Id": 364,
        "SKUNo": "AS1299",
        "CASNO": "50‐ 81‐ 7",
        "ProductName": "L‐ASCORBIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29362700
    },
    {
        "Id": 365,
        "SKUNo": "AS1300",
        "CASNO": "50‐ 81‐ 7",
        "ProductName": "L‐ASCORBIC ACID AR FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362700
    },
    {
        "Id": 366,
        "SKUNo": "AS1300",
        "CASNO": "50‐ 81‐ 7",
        "ProductName": "L‐ASCORBIC ACID AR FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29362700
    },
    {
        "Id": 367,
        "SKUNo": "AS1301",
        "CASNO": "5794‐ 13‐ 8",
        "ProductName": "L‐ASPARGINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 368,
        "SKUNo": "AS1301",
        "CASNO": "5794‐ 13‐ 8",
        "ProductName": "L‐ASPARGINE FOR BIOCHEMISTRY‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 369,
        "SKUNo": "AS1302",
        "CASNO": "617‐ 45‐ 8",
        "ProductName": "DL‐ASPARTIC ACID LR 99%‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 370,
        "SKUNo": "AS1302",
        "CASNO": "617‐ 45‐ 8",
        "ProductName": "DL‐ASPARTIC ACID LR 99%‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 371,
        "SKUNo": "AS1303",
        "CASNO": "56‐ 84‐ 8",
        "ProductName": "L‐ASPARTIC ACID FOR BIOCHEMISTRY 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 372,
        "SKUNo": "AS1303",
        "CASNO": "56‐ 84‐ 8",
        "ProductName": "L‐ASPARTIC ACID FOR BIOCHEMISTRY 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 373,
        "SKUNo": "AS1304",
        "CASNO": "5908‐ 99‐ 6",
        "ProductName": "ATROPINE SULPHATE AR ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29399900
    },
    {
        "Id": 374,
        "SKUNo": "AS1304",
        "CASNO": "5908‐ 99‐ 6",
        "ProductName": "ATROPINE SULPHATE AR 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29399900
    },
    {
        "Id": 375,
        "SKUNo": "AS1305",
        "CASNO": "2465‐ 27‐ 2",
        "ProductName": "AURAMIN FOR MICROSCOPY‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041321
    },
    {
        "Id": 376,
        "SKUNo": "AS1305",
        "CASNO": "2465‐ 27‐ 2",
        "ProductName": "AURAMIN FOR MICROSCOPY‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041321
    },
    {
        "Id": 377,
        "SKUNo": "AS1306",
        "CASNO": "123‐99‐9",
        "ProductName": "AZELAIC ACID 95% FOR SYNTHESIS (NONANEDIOIC ACID)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 378,
        "SKUNo": "AS1306",
        "CASNO": "123‐99‐9",
        "ProductName": "AZELAIC ACID 95% FOR SYNTHESIS (NONANEDIOIC ACID)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 379,
        "SKUNo": "AS1306",
        "CASNO": "123‐99‐9",
        "ProductName": "AZELAIC ACID 95% FOR SYNTHESIS (NONANEDIOIC ACID)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 380,
        "SKUNo": "AS1307",
        "CASNO": "271‐63‐6",
        "ProductName": "7‐AZAINDOLE FOR SYNTHESIS 98%‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 381,
        "SKUNo": "AS1307",
        "CASNO": "271‐63‐6",
        "ProductName": "7‐AZAINDOLE FOR SYNTHESIS 98%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 382,
        "SKUNo": "AS1307",
        "CASNO": "271‐63‐6",
        "ProductName": "7‐AZAINDOLE FOR SYNTHESIS 98%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 383,
        "SKUNo": "AS1308",
        "CASNO": "78‐ 67‐ 1",
        "ProductName": "AZO‐BIS‐ISO‐BUTYRIONITRILE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 384,
        "SKUNo": "AS1308",
        "CASNO": "78‐ 67‐ 1",
        "ProductName": "AZO‐BIS‐ISO‐BUTYRIONITRILE‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 385,
        "SKUNo": "AS1309",
        "CASNO": "25641‐ 18‐ 3",
        "ProductName": "AZOCARMINE G for Histology‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 386,
        "SKUNo": "AS1310",
        "CASNO": "538‐41‐0",
        "ProductName": "4.4’‐AZODIANILINE 95% 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 387,
        "SKUNo": "AS1310",
        "CASNO": "538‐41‐0",
        "ProductName": "4.4’‐AZODIANILINE 95% 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 388,
        "SKUNo": "AS1311",
        "CASNO": "206752‐ 32‐ 1",
        "ProductName": "AZO‐METHINE H MONOSODIUM SALT HYDRATE 1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 389,
        "SKUNo": "AS1311",
        "CASNO": "206752‐ 32‐ 1",
        "ProductName": "AZO‐METHINE H MONOSODIUM SALT HYDRATE‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 390,
        "SKUNo": "AS1311",
        "CASNO": "206752‐ 32‐ 1",
        "ProductName": "AZO‐METHINE H MONOSODIUM SALT HYDRATE‐ 10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 391,
        "SKUNo": "AS1312",
        "CASNO": "531‐ 53‐ 3",
        "ProductName": "AZUR A ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 392,
        "SKUNo": "AS1312",
        "CASNO": "531‐ 53‐ 3",
        "ProductName": "AZUR A ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 393,
        "SKUNo": "AS1312",
        "CASNO": "531‐ 53‐ 3",
        "ProductName": "AZUR A ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 394,
        "SKUNo": "AS1313",
        "CASNO": "531‐ 55‐ 5",
        "ProductName": "AZUR B ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 395,
        "SKUNo": "AS1313",
        "CASNO": "531‐ 55‐ 5",
        "ProductName": "AZUR B‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 396,
        "SKUNo": "AS1314",
        "CASNO": "37247‐ 10‐ 2",
        "ProductName": "AZUR II FOR MICROSCOPY‐ 10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 397,
        "SKUNo": "AS1314",
        "CASNO": "37247‐ 10‐ 2",
        "ProductName": "AZUR II FOR MICROSCOPY‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 398,
        "SKUNo": "AS1315",
        "CASNO": "53092‐85‐6",
        "ProductName": "AZUR II EOSINE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 399,
        "SKUNo": "AS1316",
        "CASNO": "8007‐ 47‐ 4",
        "ProductName": "BALSAM CANADA (SYNTHETIC)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 13012000
    },
    {
        "Id": 400,
        "SKUNo": "AS1317",
        "CASNO": "67‐ 52‐ 7",
        "ProductName": "BARBITURIC ACID FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 401,
        "SKUNo": "AS1317",
        "CASNO": "67‐ 52‐ 7",
        "ProductName": "BARBITURIC ACID FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 402,
        "SKUNo": "AS1317",
        "CASNO": "67‐ 52‐ 7",
        "ProductName": "BARBITURIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 403,
        "SKUNo": "AS1318",
        "CASNO": "67‐ 52‐ 7",
        "ProductName": "BARBITURIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 404,
        "SKUNo": "AS1318",
        "CASNO": "67‐ 52‐ 7",
        "ProductName": "BARBITURIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 405,
        "SKUNo": "AS1319",
        "CASNO": "543‐ 80‐ 6",
        "ProductName": "BARIUM ACETATE  LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 406,
        "SKUNo": "AS1319",
        "CASNO": "543‐ 80‐ 6",
        "ProductName": "BARIUM ACETATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 407,
        "SKUNo": "AS1320",
        "CASNO": "",
        "ProductName": "BARFOAD'S REAGENT  ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 408,
        "SKUNo": "AS1321",
        "CASNO": "7791‐ 28‐ 8",
        "ProductName": "BARIUM BROMIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 409,
        "SKUNo": "AS1322",
        "CASNO": "513‐ 77‐ 9",
        "ProductName": "BARIUM CARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28366000
    },
    {
        "Id": 410,
        "SKUNo": "AS1322",
        "CASNO": "513‐ 77‐ 9",
        "ProductName": "BARIUM CARBONATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28366000
    },
    {
        "Id": 411,
        "SKUNo": "AS1323",
        "CASNO": "513‐ 77‐ 9",
        "ProductName": "BARIUM CARBONATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28366000
    },
    {
        "Id": 412,
        "SKUNo": "AS1324",
        "CASNO": "10326‐ 27‐ 9",
        "ProductName": "BARIUM CHLORIDE (DIHYDRATED) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 413,
        "SKUNo": "AS1324",
        "CASNO": "10326‐ 27‐ 9",
        "ProductName": "BARIUM CHLORIDE (DIHYDRATED) LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273990
    },
    {
        "Id": 414,
        "SKUNo": "AS1325",
        "CASNO": "10326‐ 27‐ 9",
        "ProductName": "BARIUM CHLORIDE DIHYDRATED  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 415,
        "SKUNo": "AS1325",
        "CASNO": "10326‐ 27‐ 9",
        "ProductName": "BARIUM CHLORIDE DIHYDRATED  AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273990
    },
    {
        "Id": 416,
        "SKUNo": "AS1326",
        "CASNO": "10294‐ 40‐ 3",
        "ProductName": "BARIUM CHROMATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 417,
        "SKUNo": "AS1327",
        "CASNO": "10294‐ 40‐ 3",
        "ProductName": "BARIUM CHROMATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 418,
        "SKUNo": "AS1327",
        "CASNO": "10294‐ 40‐ 3",
        "ProductName": "BARIUM CHROMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 419,
        "SKUNo": "AS1328",
        "CASNO": "6211‐ 24‐ 1",
        "ProductName": "BARIUM DIPHENYLAMINE SULPHONATE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29214490
    },
    {
        "Id": 420,
        "SKUNo": "AS1328",
        "CASNO": "6211‐ 24‐ 1",
        "ProductName": "BARIUM DIPHENYLAMINE SULPHONATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29214490
    },
    {
        "Id": 421,
        "SKUNo": "AS1329",
        "CASNO": "12230‐ 71‐ 6",
        "ProductName": "BARIUM HYDROXIDE LR (OCTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28164000
    },
    {
        "Id": 422,
        "SKUNo": "AS1329",
        "CASNO": "12230‐ 71‐ 6",
        "ProductName": "BARIUM HYDROXIDE LR (OCTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28164000
    },
    {
        "Id": 423,
        "SKUNo": "AS1330",
        "CASNO": "12230‐ 71‐ 6",
        "ProductName": "BARIUM HYDROXIDE AR (OCTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28164000
    },
    {
        "Id": 424,
        "SKUNo": "AS1331",
        "CASNO": "10022‐ 31‐ 8",
        "ProductName": "BARIUM NITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342930
    },
    {
        "Id": 425,
        "SKUNo": "AS1331",
        "CASNO": "10022‐ 31‐ 8",
        "ProductName": "BARIUM NITRATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28342930
    },
    {
        "Id": 426,
        "SKUNo": "AS1332",
        "CASNO": "10022‐ 31‐ 8",
        "ProductName": "BARIUM NITRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342930
    },
    {
        "Id": 427,
        "SKUNo": "AS1333",
        "CASNO": "13465‐ 95‐ 7",
        "ProductName": "BARIUM PERCHLORATE LR (AHYDROUS)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28291990
    },
    {
        "Id": 428,
        "SKUNo": "AS1334",
        "CASNO": "13465‐ 95‐ 7",
        "ProductName": "BARIUM PERCHLORATE ANHYDROUS AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28291990
    },
    {
        "Id": 429,
        "SKUNo": "AS1335",
        "CASNO": "6865‐ 35‐ 6",
        "ProductName": "BARIUM STEARATE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29157090
    },
    {
        "Id": 430,
        "SKUNo": "AS1336",
        "CASNO": "7727‐ 43‐ 7",
        "ProductName": "BARIUM SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332700
    },
    {
        "Id": 431,
        "SKUNo": "AS1337",
        "CASNO": "53744‐ 42‐ 6",
        "ProductName": "BATHOPHENANTHROLINE DISULPHONIC ACID DISODIUM SALT AR‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 432,
        "SKUNo": "AS1337",
        "CASNO": "53744‐ 42‐ 6",
        "ProductName": "BATHOPHENANTHROLINE DISULPHONIC ACID DISODIUM SALT AR‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 433,
        "SKUNo": "AS1338",
        "CASNO": "1662‐ 01‐ 7",
        "ProductName": "BATHOPHENANTHROLINE AR‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 434,
        "SKUNo": "AS1338",
        "CASNO": "1662‐ 01‐ 7",
        "ProductName": "BATHOPHENANTHROLINE AR‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 435,
        "SKUNo": "AS1338",
        "CASNO": "1662‐ 01‐ 7",
        "ProductName": "BATHOPHENANTHROLINE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 436,
        "SKUNo": "AS1339",
        "CASNO": "",
        "ProductName": "BEEF EXTRACT POWDER BACTERIOLOGICAL GRADE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 437,
        "SKUNo": "AS1340",
        "CASNO": "8012‐ 89‐ 3",
        "ProductName": "BEES WAX LR (WHITE) FOR HISTOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 15219010
    },
    {
        "Id": 438,
        "SKUNo": "AS1341",
        "CASNO": "63126‐ 89‐ 6",
        "ProductName": "BENEDICT’S REAGENT (QUALITATIVE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 439,
        "SKUNo": "AS1341",
        "CASNO": "63126‐ 89‐ 6",
        "ProductName": "BENEDICT’S REAGENT (QUALITATIVE)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 440,
        "SKUNo": "AS1341",
        "CASNO": "63126‐ 89‐ 6",
        "ProductName": "BENEDICT’S REAGENT (QUANTITATIVE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 441,
        "SKUNo": "AS1342",
        "CASNO": "1302‐ 78‐ 9",
        "ProductName": "BENTONITE POWDER (CONFIRMING TO BP STANDARD)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25081090
    },
    {
        "Id": 442,
        "SKUNo": "AS1343",
        "CASNO": "100‐ 52‐ 7",
        "ProductName": "BENZALDEHYDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29122100
    },
    {
        "Id": 443,
        "SKUNo": "AS1343",
        "CASNO": "100‐ 52‐ 7",
        "ProductName": "BENZALDEHYDE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29122100
    },
    {
        "Id": 444,
        "SKUNo": "AS1344",
        "CASNO": "100‐ 52‐ 7",
        "ProductName": "BENZALDEHYDE AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29122100
    },
    {
        "Id": 445,
        "SKUNo": "AS1344",
        "CASNO": "100‐ 52‐ 7",
        "ProductName": "BENZALDEHYDE AR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29122100
    },
    {
        "Id": 446,
        "SKUNo": "AS1345",
        "CASNO": "63449‐ 41‐ 2",
        "ProductName": "BENZALKONIUM CHLORIDE 50% SOLUTION LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34021200
    },
    {
        "Id": 447,
        "SKUNo": "AS1345",
        "CASNO": "63449‐ 41‐ 2",
        "ProductName": "BENZALKONIUM CHLORIDE 50% SOLUTION LR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 34021200
    },
    {
        "Id": 448,
        "SKUNo": "AS1346",
        "CASNO": "55‐ 21‐ 0",
        "ProductName": "BENZAMIDE FOR SYNTHESIS ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 449,
        "SKUNo": "AS1347",
        "CASNO": "93‐ 98‐ 1",
        "ProductName": "BENZANILIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 450,
        "SKUNo": "AS1347",
        "CASNO": "93‐ 98‐ 1",
        "ProductName": "BENZANILIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 451,
        "SKUNo": "AS1348",
        "CASNO": "71‐ 43‐ 2",
        "ProductName": "BENZENE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29022000
    },
    {
        "Id": 452,
        "SKUNo": "AS1348",
        "CASNO": "71‐ 43‐ 2",
        "ProductName": "BENZENE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29022000
    },
    {
        "Id": 453,
        "SKUNo": "AS1349",
        "CASNO": "71‐ 43‐ 2",
        "ProductName": "BENZENE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29022000
    },
    {
        "Id": 454,
        "SKUNo": "AS1349",
        "CASNO": "71‐ 43‐ 2",
        "ProductName": "BENZENE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29022000
    },
    {
        "Id": 455,
        "SKUNo": "AS1350",
        "CASNO": "134‐ 81‐ 6",
        "ProductName": "BENZIL FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 456,
        "SKUNo": "AS1350",
        "CASNO": "134‐ 81‐ 6",
        "ProductName": "BENZIL FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29143990
    },
    {
        "Id": 457,
        "SKUNo": "AS1351",
        "CASNO": "76‐ 93‐ 7",
        "ProductName": "BENZILIC ACID FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 458,
        "SKUNo": "AS1351",
        "CASNO": "76‐ 93‐ 7",
        "ProductName": "BENZILIC ACID FOR SYNTHESIS 98%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 459,
        "SKUNo": "AS1351",
        "CASNO": "76‐ 93‐ 7",
        "ProductName": "BENZILIC ACID FOR SYNTHESIS 98%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29181990
    },
    {
        "Id": 460,
        "SKUNo": "AS1352",
        "CASNO": "51‐ 17‐ 2",
        "ProductName": "BENZIMIDAZOLE FOR SYNTHESIS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 461,
        "SKUNo": "AS1352",
        "CASNO": "51‐ 17‐ 2",
        "ProductName": "BENZIMIDAZOLE FOR SYNTHESIS  ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 462,
        "SKUNo": "AS1353",
        "CASNO": "65‐85‐0",
        "ProductName": "BENZOIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163110
    },
    {
        "Id": 463,
        "SKUNo": "AS1353",
        "CASNO": "65‐85‐0",
        "ProductName": "BENZOIC ACID LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29163110
    },
    {
        "Id": 464,
        "SKUNo": "AS1354",
        "CASNO": "65‐85‐0",
        "ProductName": "BENZOIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163110
    },
    {
        "Id": 465,
        "SKUNo": "AS1354",
        "CASNO": "65‐85‐0",
        "ProductName": "BENZOIC ACID AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29163110
    },
    {
        "Id": 466,
        "SKUNo": "AS1355",
        "CASNO": "93‐ 97‐ 0",
        "ProductName": "BENZOIC ANHYDRIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 467,
        "SKUNo": "AS1355",
        "CASNO": "93‐ 97‐ 0",
        "ProductName": "BENZOIC ANHYDRIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 468,
        "SKUNo": "AS1356",
        "CASNO": "119‐ 53‐ 9",
        "ProductName": "BENZOIN FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 469,
        "SKUNo": "AS1356",
        "CASNO": "119‐ 53‐ 9",
        "ProductName": "BENZOIN FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 470,
        "SKUNo": "AS1357",
        "CASNO": "441‐ 38‐ 3",
        "ProductName": "a ‐BENZOIN OXIME AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 471,
        "SKUNo": "AS1357",
        "CASNO": "441‐ 38‐ 3",
        "ProductName": "a ‐BENZOIN OXIME AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 472,
        "SKUNo": "AS1358",
        "CASNO": "100‐47‐0",
        "ProductName": "BENZONITRILE LR FOR SYNTHESIS (Phenyl Cyanide) ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29269000
    },
    {
        "Id": 473,
        "SKUNo": "AS1359",
        "CASNO": "119‐ 61‐ 9",
        "ProductName": "BENZOPHENONE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29143930
    },
    {
        "Id": 474,
        "SKUNo": "AS1360",
        "CASNO": "106‐ 51‐ 4",
        "ProductName": "p‐BENZOQUINONE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29146990
    },
    {
        "Id": 475,
        "SKUNo": "AS1360",
        "CASNO": "106‐ 51‐ 4",
        "ProductName": "p‐BENZOQUINONE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29146990
    },
    {
        "Id": 476,
        "SKUNo": "AS1361",
        "CASNO": "95‐ 14‐ 7",
        "ProductName": "1,2,3‐BENZOTRIAZOLE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 477,
        "SKUNo": "AS1361",
        "CASNO": "95‐ 14‐ 7",
        "ProductName": "1,2,3‐BENZOTRIAZOLE FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29339900
    },
    {
        "Id": 478,
        "SKUNo": "AS1362",
        "CASNO": "98‐ 88‐ 4",
        "ProductName": "BENZOYL CHLORIDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29163200
    },
    {
        "Id": 479,
        "SKUNo": "AS1362",
        "CASNO": "98‐ 88‐ 4",
        "ProductName": "BENZOYL CHLORIDE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29163200
    },
    {
        "Id": 480,
        "SKUNo": "AS1363",
        "CASNO": "98‐ 88‐ 4",
        "ProductName": "BENZOYL CHLORIDE  AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29163200
    },
    {
        "Id": 481,
        "SKUNo": "AS1363",
        "CASNO": "98‐ 88‐ 4",
        "ProductName": "BENZOYL CHLORIDE  AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29163200
    },
    {
        "Id": 482,
        "SKUNo": "AS1364",
        "CASNO": "94‐ 36‐ 0",
        "ProductName": "BENZOYL PEROXIDE (moistured with 25% water)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163200
    },
    {
        "Id": 483,
        "SKUNo": "AS1365",
        "CASNO": "1214‐ 39‐ 7",
        "ProductName": "6‐BENZYL ADENINE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 484,
        "SKUNo": "AS1365",
        "CASNO": "1214‐ 39‐ 7",
        "ProductName": "6‐BENZYL ADENINE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 485,
        "SKUNo": "AS1365",
        "CASNO": "1214‐ 39‐ 7",
        "ProductName": "6‐BENZYL ADENINE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 486,
        "SKUNo": "AS1366",
        "CASNO": "100‐46‐9",
        "ProductName": "BENZYLAMINE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214990
    },
    {
        "Id": 487,
        "SKUNo": "AS1366",
        "CASNO": "100-46‐9",
        "ProductName": "BENZYLAMINE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214990
    },
    {
        "Id": 488,
        "SKUNo": "AS1367",
        "CASNO": "100‐ 51‐ 6",
        "ProductName": "BENZYL ALCOHOL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29062100
    },
    {
        "Id": 489,
        "SKUNo": "AS1367",
        "CASNO": "100‐ 51‐ 6",
        "ProductName": "BENZYL ALCOHOL LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29062100
    },
    {
        "Id": 490,
        "SKUNo": "AS1368",
        "CASNO": "100‐ 51‐ 6",
        "ProductName": "BENZYL ALCOHOL AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29062100
    },
    {
        "Id": 491,
        "SKUNo": "AS1368",
        "CASNO": "100‐ 51‐ 6",
        "ProductName": "BENZYL ALCOHOL AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29062100
    },
    {
        "Id": 492,
        "SKUNo": "AS1369",
        "CASNO": "100‐ 51‐ 6",
        "ProductName": "BENZYL ALCOHOL FOR HPLC",
        "PACKSIZE": "1 LTR",
        "HSNCODE": 29062100
    },
    {
        "Id": 493,
        "SKUNo": "AS1370",
        "CASNO": "120‐ 51‐ 4",
        "ProductName": "BENZYL BENZOATE (Confirming to BP)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29163120
    },
    {
        "Id": 494,
        "SKUNo": "AS1370",
        "CASNO": "120‐ 51‐ 4",
        "ProductName": "BENZYL BENZOATE (Confirming to BP)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29163120
    },
    {
        "Id": 495,
        "SKUNo": "AS1371",
        "CASNO": "100‐44‐7",
        "ProductName": "BENZYL CHLORIDE 99% LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039940
    },
    {
        "Id": 496,
        "SKUNo": "AS1371",
        "CASNO": "100‐44‐7",
        "ProductName": "BENZYL CHLORIDE 99% LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039940
    },
    {
        "Id": 497,
        "SKUNo": "AS1372",
        "CASNO": "23616‐79‐7",
        "ProductName": "BENZYL TRIBUTYL AMMONIUM CHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 498,
        "SKUNo": "AS1372",
        "CASNO": "23616‐79‐7",
        "ProductName": "BENZYL TRIBUTYL AMMONIUM CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 499,
        "SKUNo": "AS1373",
        "CASNO": "538‐ 28‐ 3",
        "ProductName": "S‐BENZYLTHIURONIUM CHLORIDE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 500,
        "SKUNo": "AS1373",
        "CASNO": "538‐ 28‐ 3",
        "ProductName": "S‐BENZYLTHIURONIUM CHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 501,
        "SKUNo": "AS1373",
        "CASNO": "538‐ 28‐ 3",
        "ProductName": "S‐BENZYLTHIURONIUM CHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 502,
        "SKUNo": "AS1374",
        "CASNO": "56‐ 37‐ 1",
        "ProductName": "BENZYL TRIETHYL AMMONIUM CHLORIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 503,
        "SKUNo": "AS1375",
        "CASNO": "56‐ 93‐ 9",
        "ProductName": "BENZYL TRIMETHYL AMMONIUM CHLOIRDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 504,
        "SKUNo": "AS1376",
        "CASNO": "10191‐ 18‐ 1",
        "ProductName": "BES BUFFER FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 505,
        "SKUNo": "AS1376",
        "CASNO": "10191‐ 18‐ 1",
        "ProductName": "BES BUFFER FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 506,
        "SKUNo": "AS1377",
        "CASNO": "150‐ 25‐ 4",
        "ProductName": "BICINE 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 507,
        "SKUNo": "AS1378",
        "CASNO": "150‐ 25‐ 4",
        "ProductName": "BICINE 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 508,
        "SKUNo": "AS1379",
        "CASNO": "                ",
        "ProductName": "BIAL'S REAGENT(ORCINOL REAGENT)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 509,
        "SKUNo": "AS1380",
        "CASNO": "11006‐ 55‐ 6",
        "ProductName": "BILE SALT FOR BACTERIOLOGY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38210000
    },
    {
        "Id": 510,
        "SKUNo": "AS1380",
        "CASNO": "11006‐ 55‐ 6",
        "ProductName": "BILE SALT FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38210000
    },
    {
        "Id": 511,
        "SKUNo": "AS1381",
        "CASNO": "635‐ 65‐ 4",
        "ProductName": "BILIRUBIN AR‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 512,
        "SKUNo": "AS1381",
        "CASNO": "635‐ 65‐ 4",
        "ProductName": "BILIRUBIN AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 513,
        "SKUNo": "AS1382",
        "CASNO": "58‐ 85‐ 5",
        "ProductName": "D‐BIOTIN FOR BIOCHEMISTRY (VITAMIN  H)‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29362950
    },
    {
        "Id": 514,
        "SKUNo": "AS1382",
        "CASNO": "58‐ 85‐ 5",
        "ProductName": "D‐BIOTIN FOR BIOCHEMISTRY (VITAMIN  H)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29362950
    },
    {
        "Id": 515,
        "SKUNo": "AS1382",
        "CASNO": "58‐ 85‐ 5",
        "ProductName": "D‐BIOTIN FOR BIOCHEMISTRY (VITAMIN  H)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362950
    },
    {
        "Id": 516,
        "SKUNo": "AS1383",
        "CASNO": "92‐ 52‐ 4",
        "ProductName": "BIPHENYL FOR SYNTESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29029030
    },
    {
        "Id": 517,
        "SKUNo": "AS1383",
        "CASNO": "92‐ 52‐ 4",
        "ProductName": "BIPHENYL FOR SYNTESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29029030
    },
    {
        "Id": 518,
        "SKUNo": "AS1384",
        "CASNO": "366‐ 18‐ 7",
        "ProductName": "2‐2‐BIPYRIDYL AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 519,
        "SKUNo": "AS1384",
        "CASNO": "366‐ 18‐ 7",
        "ProductName": "2‐2‐BIPYRIDYL AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 520,
        "SKUNo": "AS1385",
        "CASNO": "10114‐ 58‐ 6",
        "ProductName": "BISMARCK BROWN Y (G)      C.I. NO.21000‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129020
    },
    {
        "Id": 521,
        "SKUNo": "AS1386",
        "CASNO": "10114‐ 58‐ 6",
        "ProductName": "BISMARCK BROWN Y (G)      C.I. NO.21001‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129020
    },
    {
        "Id": 522,
        "SKUNo": "AS1387",
        "CASNO": "5421‐ 66‐ 9",
        "ProductName": "BISMARCK BROWN R C.I. NO. 21010 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 523,
        "SKUNo": "AS1387",
        "CASNO": "5421‐ 66‐ 9",
        "ProductName": "BISMARCK BROWN R C.I. NO. 21010 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 524,
        "SKUNo": "AS1388",
        "CASNO": "31886‐ 41‐ 6",
        "ProductName": "BISMUTH  AMMONIUM CITRATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 525,
        "SKUNo": "AS1389",
        "CASNO": "7440‐ 69‐ 9",
        "ProductName": "BISMUTH (METAL) GRANULAR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81060010
    },
    {
        "Id": 526,
        "SKUNo": "AS1389",
        "CASNO": "7440‐ 69‐ 9",
        "ProductName": "BISMUTH (METAL) GRANULAR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81060010
    },
    {
        "Id": 527,
        "SKUNo": "AS1390",
        "CASNO": "7440‐ 69‐ 9",
        "ProductName": "BISMUTH (METAL) POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81060010
    },
    {
        "Id": 528,
        "SKUNo": "AS1391",
        "CASNO": "5892‐10‐4",
        "ProductName": "BISMUTH CARBONATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 529,
        "SKUNo": "AS1391",
        "CASNO": "5892‐10‐4",
        "ProductName": "BISMUTH CARBONATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 530,
        "SKUNo": "AS1392",
        "CASNO": "10035‐ 06‐ 0",
        "ProductName": "BISMUTH NITRATE (PENTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 531,
        "SKUNo": "AS1392",
        "CASNO": "10035‐ 06‐ 0",
        "ProductName": "BISMUTH NITRATE (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 532,
        "SKUNo": "AS1393",
        "CASNO": "10035‐ 06‐ 0",
        "ProductName": "BISMUTH NITRATE  AR (PENTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 533,
        "SKUNo": "AS1393",
        "CASNO": "10035‐ 06‐ 0",
        "ProductName": "BISMUTH NITRATE  AR (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 534,
        "SKUNo": "AS1394",
        "CASNO": "1304‐ 76‐ 3",
        "ProductName": "BISMUTH OXIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 535,
        "SKUNo": "AS1394",
        "CASNO": "1304‐ 76‐ 3",
        "ProductName": "BISMUTH OXIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 536,
        "SKUNo": "AS1395",
        "CASNO": "10361‐ 46‐ 3",
        "ProductName": "BISMUTH SUBNITRATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 537,
        "SKUNo": "AS1395",
        "CASNO": "10361‐ 46‐ 3",
        "ProductName": "BISMUTH SUBNITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 538,
        "SKUNo": "AS1396",
        "CASNO": "10361‐ 46‐ 3",
        "ProductName": "BISMUTH SUBNITRATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 539,
        "SKUNo": "AS1396",
        "CASNO": "10361‐ 46‐ 3",
        "ProductName": "BISMUTH SUBNITRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 540,
        "SKUNo": "AS1397",
        "CASNO": "7787‐ 68‐ 0",
        "ProductName": "BISMUTH SULPHATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 541,
        "SKUNo": "AS1397",
        "CASNO": "7787‐ 68‐ 0",
        "ProductName": "BISMUTH SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 542,
        "SKUNo": "AS1398",
        "CASNO": "25561‐ 30‐ 2",
        "ProductName": "N,O‐BIS‐(TRIMETHYLSILYL) TRIFLUORO ACETAMIDE (BSTFA)‐5ML",
        "PACKSIZE": "5ML",
        "HSNCODE": 29319090
    },
    {
        "Id": 543,
        "SKUNo": "AS1398",
        "CASNO": "25561‐ 30‐ 2",
        "ProductName": "N,O‐BIS‐(TRIMETHYLSILYL) TRIFLUORO ACETAMIDE (BSTFA) ‐25ML",
        "PACKSIZE": "25ML",
        "HSNCODE": 29319090
    },
    {
        "Id": 544,
        "SKUNo": "AS1398",
        "CASNO": "25561‐ 30‐ 2",
        "ProductName": "N,O‐BIS‐(TRIMETHYLSILYL) TRIFLUORO ACETAMIDE (BSTFA) ‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29319090
    },
    {
        "Id": 545,
        "SKUNo": "AS1399",
        "CASNO": "108‐ 19‐ 0",
        "ProductName": "BIURET AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 546,
        "SKUNo": "AS1399",
        "CASNO": "108‐ 19‐ 0",
        "ProductName": "BIURET AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 547,
        "SKUNo": "AS1400",
        "CASNO": "108‐19‐0",
        "ProductName": "BIURET REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 548,
        "SKUNo": "AS1401",
        "CASNO": "7778‐ 54‐ 3",
        "ProductName": "BLEACHING POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28289011
    },
    {
        "Id": 549,
        "SKUNo": "AS1402",
        "CASNO": "1871‐ 22‐ 3",
        "ProductName": "BLUE TETRAZOLIUM FOR MICROSCOPY AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 550,
        "SKUNo": "AS1402",
        "CASNO": "1871‐ 22‐ 3",
        "ProductName": "BLUE TETRAZOLIUM FOR MICROSCOPY AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 551,
        "SKUNo": "AS1403",
        "CASNO": "                  ",
        "ProductName": "BORAXCARMINE (GRENACHER)",
        "PACKSIZE": "25 GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 552,
        "SKUNo": "AS1404",
        "CASNO": "          ",
        "ProductName": "borax carmine (grenacher) alcoholic staining solution‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 553,
        "SKUNo": "AS1405",
        "CASNO": "                       ",
        "ProductName": "borax carmine (grenacher) aqueous staining solution‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 554,
        "SKUNo": "AS1406",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID LR (POWDER)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28100020
    },
    {
        "Id": 555,
        "SKUNo": "AS1406",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID LR (POWDER)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28100020
    },
    {
        "Id": 556,
        "SKUNo": "AS1406",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID LR (POWDER)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28100020
    },
    {
        "Id": 557,
        "SKUNo": "AS1407",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28100020
    },
    {
        "Id": 558,
        "SKUNo": "AS1407",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28100020
    },
    {
        "Id": 559,
        "SKUNo": "AS1408",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID GRANULAR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28100020
    },
    {
        "Id": 560,
        "SKUNo": "AS1408",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "BORIC ACID GRANULAR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28100020
    },
    {
        "Id": 561,
        "SKUNo": "AS1409",
        "CASNO": "1303‐ 86‐ 2",
        "ProductName": "di‐BORON TRIOXIDE ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28100010
    },
    {
        "Id": 562,
        "SKUNo": "AS1409",
        "CASNO": "1303‐ 86‐ 2",
        "ProductName": "di‐BORON TRIOXIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28100010
    },
    {
        "Id": 563,
        "SKUNo": "AS1410",
        "CASNO": "",
        "ProductName": "BOUIN’S FLUID‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 564,
        "SKUNo": "AS1410",
        "CASNO": "                     ",
        "ProductName": "BOUIN’S FLUID‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 565,
        "SKUNo": "AS1411",
        "CASNO": "90604‐ 29‐ 8",
        "ProductName": "BOVINE ALBUMIN FRACTION V (POWDER)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 35029000
    },
    {
        "Id": 566,
        "SKUNo": "AS1411",
        "CASNO": "90604‐ 29‐ 8",
        "ProductName": "BOVINE ALBUMIN FRACTION V (POWDER)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 35029000
    },
    {
        "Id": 567,
        "SKUNo": "AS1411",
        "CASNO": "90604‐ 29‐ 8",
        "ProductName": "BOVINE ALBUMIN FRACTION V (POWDER)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35029000
    },
    {
        "Id": 568,
        "SKUNo": "AS1412",
        "CASNO": "          ",
        "ProductName": "BOVINE ALBUMIN FRACTION V PROTEASE FREE‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 35029000
    },
    {
        "Id": 569,
        "SKUNo": "AS1412",
        "CASNO": "",
        "ProductName": "BOVINE ALBUMIN FRACTION V PROTEASE FREE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35029000
    },
    {
        "Id": 570,
        "SKUNo": "AS1413",
        "CASNO": "81029‐ 05‐ 2",
        "ProductName": "BRILLIANT CRESYL BLUE FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 571,
        "SKUNo": "AS1413",
        "CASNO": "81029‐ 05‐ 2",
        "ProductName": "BRILLIANT CRESYL BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 572,
        "SKUNo": "AS1414",
        "CASNO": "81029‐ 05‐ 2",
        "ProductName": "BRILLIANT CRESYL BLUE FOR SOLUTION (ALCHOHOLIC)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 573,
        "SKUNo": "AS1415",
        "CASNO": "633‐ 03‐ 4",
        "ProductName": "BRILLIANT GREEN INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 574,
        "SKUNo": "AS1415",
        "CASNO": "633‐ 03‐ 4",
        "ProductName": "BRILLIANT GREEN INDICATOR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 575,
        "SKUNo": "AS1416",
        "CASNO": "633‐03‐4",
        "ProductName": "BRILLIANT GREEN 1% W/V AQUAS SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 576,
        "SKUNo": "AS1417",
        "CASNO": "103‐ 88‐ 8",
        "ProductName": "4‐BROMOACETANILIDE 98% FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 577,
        "SKUNo": "AS1417",
        "CASNO": "103‐ 88‐ 8",
        "ProductName": "4‐BROMOACETANILIDE 98% FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 578,
        "SKUNo": "AS1418",
        "CASNO": "106‐ 40‐ 1",
        "ProductName": "4‐BROMO ANILINE FOR SYNTHESIS 98% 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29214110
    },
    {
        "Id": 579,
        "SKUNo": "AS1418",
        "CASNO": "106‐ 40‐ 1",
        "ProductName": "4‐BROMO ANILINE FOR SYNTHESIS 98% 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214110
    },
    {
        "Id": 580,
        "SKUNo": "AS1418",
        "CASNO": "106‐ 40‐ 1",
        "ProductName": "4‐BROMO ANILINE FOR SYNTHESIS 98% 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214110
    },
    {
        "Id": 581,
        "SKUNo": "AS1419",
        "CASNO": "108‐ 86‐1",
        "ProductName": "BROMOBENZENE LR 99%‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 582,
        "SKUNo": "AS1419",
        "CASNO": "108‐ 86‐1",
        "ProductName": "BROMOBENZENE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 583,
        "SKUNo": "AS1419",
        "CASNO": "108‐ 86‐1",
        "ProductName": "BROMOBENZENE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039990
    },
    {
        "Id": 584,
        "SKUNo": "AS1420",
        "CASNO": "7240‐ 90‐ 6",
        "ProductName": "5‐BROMO‐4‐CHLORO‐3‐INDOLYL‐â‐D‐GALCTOPYRANOSIDE 99% MOLEUCLAR BIOLOGY‐25MG",
        "PACKSIZE": "25MG",
        "HSNCODE": 29329900
    },
    {
        "Id": 585,
        "SKUNo": "AS1420",
        "CASNO": "7240‐ 90‐ 6",
        "ProductName": "5‐BROMO‐4‐CHLORO‐3‐INDOLYL‐â‐D‐GALCTOPYRANOSIDE 99% MOLEUCLAR BIOLOGY‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29329900
    },
    {
        "Id": 586,
        "SKUNo": "AS1420",
        "CASNO": "7240‐ 90‐ 6",
        "ProductName": "5‐BROMO‐4‐CHLORO‐3‐INDOLYL‐â‐D‐GALCTOPYRANOSIDE 99% MOLEUCLAR BIOLOGY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 587,
        "SKUNo": "AS1421",
        "CASNO": "7726‐ 95‐ 6",
        "ProductName": "BROMINE LR‐5 X 20ML",
        "PACKSIZE": "5 X 20ML",
        "HSNCODE": 28013020
    },
    {
        "Id": 588,
        "SKUNo": "AS1421",
        "CASNO": "7726‐ 95‐ 6",
        "ProductName": "BROMINE LR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 28013020
    },
    {
        "Id": 589,
        "SKUNo": "AS1422",
        "CASNO": "7726‐ 95‐ 6",
        "ProductName": "BROMINE AR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 28013020
    },
    {
        "Id": 590,
        "SKUNo": "AS1423",
        "CASNO": "                  ",
        "ProductName": "BROMINE WATER‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28013020
    },
    {
        "Id": 591,
        "SKUNo": "AS1424",
        "CASNO": "74‐97‐5",
        "ProductName": "BROMOCHLOROMETHANE 97.5%",
        "PACKSIZE": "100GM",
        "HSNCODE": 38247700
    },
    {
        "Id": 592,
        "SKUNo": "AS1425",
        "CASNO": "76‐ 60‐ 8",
        "ProductName": "BROMOCRESOL GREEN INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 593,
        "SKUNo": "AS1425",
        "CASNO": "76‐ 60‐ 8",
        "ProductName": "BROMOCRESOL GREEN INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 594,
        "SKUNo": "AS1426",
        "CASNO": "76‐ 60‐ 8",
        "ProductName": "BROMOCRESOL GREEN INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 595,
        "SKUNo": "AS1427",
        "CASNO": "115‐ 40‐ 2",
        "ProductName": "BROMOCRESOL PURPLE INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 596,
        "SKUNo": "AS1427",
        "CASNO": "115‐ 40‐ 2",
        "ProductName": "BROMOCRESOL PURPLE INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 597,
        "SKUNo": "AS1428",
        "CASNO": "115‐ 40‐ 2",
        "ProductName": "BROMOCRESOL PURPLE INDICATOR SOLUTION (0.04%)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 598,
        "SKUNo": "AS1429",
        "CASNO": "2576‐47‐8",
        "ProductName": "2‐BROMOETHYLAMINE HYDROBROMIDE FOR SYNTHESIS 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29033990
    },
    {
        "Id": 599,
        "SKUNo": "AS1429",
        "CASNO": "2576‐47‐8",
        "ProductName": "2‐BROMOETHYLAMINE HYDROBROMIDE FOR SYNTHESIS 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29033990
    },
    {
        "Id": 600,
        "SKUNo": "AS1430",
        "CASNO": "75‐ 25‐ 2",
        "ProductName": "BROMOFORM LR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 601,
        "SKUNo": "AS1431",
        "CASNO": "75‐ 25‐ 2",
        "ProductName": "BROMOFORM SPECIAL ‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 602,
        "SKUNo": "AS1432",
        "CASNO": "115‐ 39‐ 9",
        "ProductName": "BROMOPHENOL BLUE INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 603,
        "SKUNo": "AS1432",
        "CASNO": "115‐ 39‐ 9",
        "ProductName": "BROMOPHENOL BLUE INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 604,
        "SKUNo": "AS1433",
        "CASNO": "115‐ 39‐ 9",
        "ProductName": "BROMOPHENOL BLUE INDICATOR SOLUTION pH3.0‐4.6‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 605,
        "SKUNo": "AS1434",
        "CASNO": "106‐ 94‐ 5",
        "ProductName": "1‐BROMOPROPANE FOR SYNTHESIS 98.5%(n‐Propyl Bromide)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29033990
    },
    {
        "Id": 606,
        "SKUNo": "AS1434",
        "CASNO": "106‐ 94‐ 5",
        "ProductName": "1‐BROMOPROPANE FOR SYNTHESIS 98.5%(n‐Propyl Bromide)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29033990
    },
    {
        "Id": 607,
        "SKUNo": "AS1435",
        "CASNO": "128‐ 08‐ 5",
        "ProductName": "N‐BROMOSUCCINIMIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 608,
        "SKUNo": "AS1435",
        "CASNO": "128‐ 08‐ 5",
        "ProductName": "N‐BROMOSUCCINIMIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 609,
        "SKUNo": "AS1436",
        "CASNO": "16574‐ 43‐ 9",
        "ProductName": "BROMOPYROGALLOL RED AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 610,
        "SKUNo": "AS1436",
        "CASNO": "16574‐ 43‐ 9",
        "ProductName": "BROMOPYROGALLOL RED AR‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 611,
        "SKUNo": "AS1437",
        "CASNO": "76‐ 59‐ 5",
        "ProductName": "BROMOTHYMOL BLUE INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 612,
        "SKUNo": "AS1437",
        "CASNO": "76‐ 59‐ 5",
        "ProductName": "BROMOTHYMOL BLUE INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 613,
        "SKUNo": "AS1438",
        "CASNO": "76‐ 59‐ 5",
        "ProductName": "BROMOTHYMOL BLUE INDICATOR SOLUTION ( 0.04% soln.)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 614,
        "SKUNo": "AS1439",
        "CASNO": "357‐57‐3",
        "ProductName": "BRUCINE AR (Reagent for bismuth)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 615,
        "SKUNo": "AS1439",
        "CASNO": "357‐57‐3",
        "ProductName": "BRUCINE AR (Reagent for bismuth)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 616,
        "SKUNo": "AS1440",
        "CASNO": "4845‐ 99‐ 2",
        "ProductName": "BRUCINE SULPHATE PURISS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29399900
    },
    {
        "Id": 617,
        "SKUNo": "AS1441",
        "CASNO": "4845‐ 99‐ 2",
        "ProductName": "BRUCINE SULPHATE PURISS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29399900
    },
    {
        "Id": 618,
        "SKUNo": "AS1442",
        "CASNO": "",
        "ProductName": "BUFFER SOLUTION pH2.0‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 619,
        "SKUNo": "AS1443",
        "CASNO": "",
        "ProductName": "BUFFER SOLUTION  pH 4.0 (PHTHALATE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 620,
        "SKUNo": "AS1444",
        "CASNO": "",
        "ProductName": "BUFFER SOLUTION  pH 7.0 (PHOSPHATE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 621,
        "SKUNo": "AS1445",
        "CASNO": "",
        "ProductName": "BUFFER SOLUTION  pH 9.0 (BORATE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 622,
        "SKUNo": "AS1446",
        "CASNO": null,
        "ProductName": "BUFFER SOLUTION  pH 9.2 ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 623,
        "SKUNo": "AS1447",
        "CASNO": "",
        "ProductName": "BUFFER SOLUTION pH 10.0‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 624,
        "SKUNo": "AS1448",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES  pH 4.0 ‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 625,
        "SKUNo": "AS1449",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES  pH 7.0 ‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 626,
        "SKUNo": "AS1450",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES PH 7.2 ‐ 10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 627,
        "SKUNo": "AS1451",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES  pH 9.2 ‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 628,
        "SKUNo": "AS1452",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES PH 10.0‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 629,
        "SKUNo": "AS1453",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES PH 5‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 630,
        "SKUNo": "AS1454",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES PH 8.0‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 631,
        "SKUNo": "AS1455",
        "CASNO": "",
        "ProductName": "BUFFER CAPSULES PH 6.10‐10CAP",
        "PACKSIZE": "10CAP",
        "HSNCODE": 38220090
    },
    {
        "Id": 632,
        "SKUNo": "AS1456",
        "CASNO": "110‐63‐4",
        "ProductName": "1,4 BUTANEDIOL FOR SYNTHESIS 99% (1,4 Butylene glycol)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29053990
    },
    {
        "Id": 633,
        "SKUNo": "AS1456",
        "CASNO": "110‐63‐4",
        "ProductName": "1,4 BUTANEDIOL FOR SYNTHESIS 99% (1,4 Butylene glycol)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29053990
    },
    {
        "Id": 634,
        "SKUNo": "AS1457",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT ANHYDROUS(FOR HPLC)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 635,
        "SKUNo": "AS1457",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT ANHYDROUS(FOR HPLC)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 636,
        "SKUNo": "AS1457",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT ANHYDROUS(FOR HPLC)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 637,
        "SKUNo": "AS1458",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT MONOHYDRATE (FOR HPLC)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 638,
        "SKUNo": "AS1458",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT MONOHYDRATE (FOR HPLC)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 639,
        "SKUNo": "AS1458",
        "CASNO": "2386‐ 54‐ 1",
        "ProductName": "1‐BUTANE SULFONIC ACID SODIUM SALT MONOHYDRATE (FOR HPLC)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 640,
        "SKUNo": "AS1459",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL 99% for synthesis  ((Butan‐1‐ol,)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051300
    },
    {
        "Id": 641,
        "SKUNo": "AS1459",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL 99% for synthesis  ((Butan‐1‐ol,)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051300
    },
    {
        "Id": 642,
        "SKUNo": "AS1460",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051300
    },
    {
        "Id": 643,
        "SKUNo": "AS1460",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051300
    },
    {
        "Id": 644,
        "SKUNo": "AS1461",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL FOR HPLC & SPECTOSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051300
    },
    {
        "Id": 645,
        "SKUNo": "AS1461",
        "CASNO": "71‐ 36‐ 3",
        "ProductName": "n‐BUTANOL FOR HPLC & SPECTOSCOPY‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051300
    },
    {
        "Id": 646,
        "SKUNo": "AS1462",
        "CASNO": "78‐83‐1",
        "ProductName": "iso‐BUTANOL FOR SYNTHESIS 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 647,
        "SKUNo": "AS1462",
        "CASNO": "78‐83‐1",
        "ProductName": "iso‐BUTANOL FOR SYNTHESIS 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 648,
        "SKUNo": "AS1463",
        "CASNO": "78‐83‐1",
        "ProductName": "iso‐BUTANOL AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 649,
        "SKUNo": "AS1463",
        "CASNO": "78‐83‐1",
        "ProductName": "iso‐BUTANOL AR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 650,
        "SKUNo": "AS1464",
        "CASNO": "123‐ 86‐ 4",
        "ProductName": "n‐BUTYL ACETATE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153300
    },
    {
        "Id": 651,
        "SKUNo": "AS1464",
        "CASNO": "123‐ 86‐ 4",
        "ProductName": "n‐BUTYL ACETATE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153300
    },
    {
        "Id": 652,
        "SKUNo": "AS1465",
        "CASNO": "123‐ 86‐ 4",
        "ProductName": "n‐BUTYL ACETATE  AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153300
    },
    {
        "Id": 653,
        "SKUNo": "AS1465",
        "CASNO": "123‐ 86‐ 4",
        "ProductName": "n‐BUTYL ACETATE  AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153300
    },
    {
        "Id": 654,
        "SKUNo": "AS1466",
        "CASNO": "109‐65‐9",
        "ProductName": "N‐BUTYL BROMIDE(1‐BROMOBUTANE)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29051300
    },
    {
        "Id": 655,
        "SKUNo": "AS1466",
        "CASNO": "109‐65‐9",
        "ProductName": "N‐BUTYL BROMIDE(1‐BROMOBUTANE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051300
    },
    {
        "Id": 656,
        "SKUNo": "AS1466",
        "CASNO": "109‐65‐9",
        "ProductName": "N‐BUTYL BROMIDE(1‐BROMOBUTANE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051300
    },
    {
        "Id": 657,
        "SKUNo": "AS1467",
        "CASNO": "111‐ 76‐ 2",
        "ProductName": "2‐BUTOXYETHANOL LR 98% (Butyl Glycol Ether)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094300
    },
    {
        "Id": 658,
        "SKUNo": "AS1467",
        "CASNO": "111‐ 76‐ 2",
        "ProductName": "2‐BUTOXYETHANOL LR 98% (Butyl Glycol Ether)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094300
    },
    {
        "Id": 659,
        "SKUNo": "AS1468",
        "CASNO": "111‐ 76‐ 2",
        "ProductName": "2‐BUTOXYETHANOL AR 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094300
    },
    {
        "Id": 660,
        "SKUNo": "AS1468",
        "CASNO": "111‐ 76‐ 2",
        "ProductName": "2‐BUTOXYETHANOL AR 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094300
    },
    {
        "Id": 661,
        "SKUNo": "AS1469",
        "CASNO": "75‐ 65‐ 0",
        "ProductName": "tert‐BUTANOL LR 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 662,
        "SKUNo": "AS1469",
        "CASNO": "75‐ 65‐ 0",
        "ProductName": "tert‐BUTANOL LR 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 663,
        "SKUNo": "AS1470",
        "CASNO": "75‐ 65‐ 0",
        "ProductName": "tert‐BUTANOL 99% AR ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 664,
        "SKUNo": "AS1470",
        "CASNO": "75‐ 65‐ 0",
        "ProductName": "tert‐BUTANOL 99% AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 665,
        "SKUNo": "AS1471",
        "CASNO": "78‐ 92‐ 2",
        "ProductName": "BUTAN ‐2‐OL‐ LR 99% (SEC BUTYL ALCOHOL)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 666,
        "SKUNo": "AS1471",
        "CASNO": "78‐ 92‐ 2",
        "ProductName": "BUTAN ‐2‐OL‐ LR 99% (SEC BUTYL ALCOHOL)2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 667,
        "SKUNo": "AS1472",
        "CASNO": "78‐ 92‐ 2",
        "ProductName": "BUTAN ‐2‐OL AR (2‐BUTYL ALCOHOL)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051490
    },
    {
        "Id": 668,
        "SKUNo": "AS1472",
        "CASNO": "78‐ 92‐ 2",
        "ProductName": "BUTAN ‐2‐OL AR (2‐BUTYL ALCOHOL)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051490
    },
    {
        "Id": 669,
        "SKUNo": "AS1473",
        "CASNO": "109‐ 73‐ 9",
        "ProductName": "n‐BUTYLAMINE LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 670,
        "SKUNo": "AS1473",
        "CASNO": "109‐ 73‐ 9",
        "ProductName": "n‐BUTYLAMINE LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 671,
        "SKUNo": "AS1474",
        "CASNO": "109‐ 73‐ 9",
        "ProductName": "n‐BUTYLAMINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 672,
        "SKUNo": "AS1474",
        "CASNO": "109‐ 73‐ 9",
        "ProductName": "n‐BUTYLAMINE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 673,
        "SKUNo": "AS1475",
        "CASNO": "75‐64‐9",
        "ProductName": "TERT‐BUTYLAMINE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 674,
        "SKUNo": "AS1475",
        "CASNO": "75‐64‐9",
        "ProductName": "TERT‐BUTYLAMINE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 675,
        "SKUNo": "AS1476",
        "CASNO": "25013‐ 16‐ 5",
        "ProductName": "BUTYLATED HYDROXY ANISOLE (B.H.A)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29095090
    },
    {
        "Id": 676,
        "SKUNo": "AS1476",
        "CASNO": "25013‐ 16‐ 5",
        "ProductName": "BUTYLATED HYDROXY ANISOLE (B.H.A)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29095090
    },
    {
        "Id": 677,
        "SKUNo": "AS1477",
        "CASNO": "128‐ 37‐ 0",
        "ProductName": "BUTYLATED HYDROXY TOLUENE (B.H.T)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 678,
        "SKUNo": "AS1477",
        "CASNO": "128‐ 37‐ 0",
        "ProductName": "BUTYLATED HYDROXY TOLUENE (B.H.T)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29072990
    },
    {
        "Id": 679,
        "SKUNo": "AS1478",
        "CASNO": "97‐88‐1",
        "ProductName": "n‐BUTYL METHACRYLATE 99% for Synthesis (Stabilized)",
        "PACKSIZE": "500ML",
        "HSNCODE": 29161290
    },
    {
        "Id": 680,
        "SKUNo": "AS1478",
        "CASNO": "97‐88‐1",
        "ProductName": "n‐BUTYL METHACRYLATE 99% for Synthesis (Stabilized)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29161290
    },
    {
        "Id": 681,
        "SKUNo": "AS1479",
        "CASNO": "18162‐48‐6",
        "ProductName": "tert‐BUTYLDIMETHYLSILYL CHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 682,
        "SKUNo": "AS1479",
        "CASNO": "18162‐48‐6",
        "ProductName": "tert‐BUTYLDIMETHYLSILYL CHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 683,
        "SKUNo": "AS1480",
        "CASNO": "1948‐ 33‐ 0",
        "ProductName": "tert‐BUTYL HYDROQUINONE (TBHQ)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29147990
    },
    {
        "Id": 684,
        "SKUNo": "AS1480",
        "CASNO": "1948‐ 33‐ 0",
        "ProductName": "tert‐BUTYL HYDROQUINONE (TBHQ)‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29147990
    },
    {
        "Id": 685,
        "SKUNo": "AS1481",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29093090
    },
    {
        "Id": 686,
        "SKUNo": "AS1481",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29093090
    },
    {
        "Id": 687,
        "SKUNo": "AS1482",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER  AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29093090
    },
    {
        "Id": 688,
        "SKUNo": "AS1482",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER  AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29093090
    },
    {
        "Id": 689,
        "SKUNo": "AS1483",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER FOR HPLC 99.7%‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 690,
        "SKUNo": "AS1483",
        "CASNO": "1634‐ 04‐ 4",
        "ProductName": "tert‐BUTYL METHYL ETHER FOR HPLC 99.7%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 691,
        "SKUNo": "AS1484",
        "CASNO": "107‐ 92‐ 6",
        "ProductName": "N‐BUTYRIC ACID 99% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29156010
    },
    {
        "Id": 692,
        "SKUNo": "AS1484",
        "CASNO": "107‐ 92‐ 6",
        "ProductName": "N‐BUTYRIC ACID 99% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29156010
    },
    {
        "Id": 693,
        "SKUNo": "AS1485",
        "CASNO": "561‐20‐6",
        "ProductName": "CACOTHELINE 95% AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 694,
        "SKUNo": "AS1485",
        "CASNO": "561‐20‐6",
        "ProductName": "CACOTHELINE 95% AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 695,
        "SKUNo": "AS1486",
        "CASNO": "5392‐67‐6",
        "ProductName": "CADION AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 696,
        "SKUNo": "AS1486",
        "CASNO": "5392‐67‐6",
        "ProductName": "CADION AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 697,
        "SKUNo": "AS1487",
        "CASNO": "7440‐ 43‐ 9",
        "ProductName": "CADMIUM (METAL) GRANULAR 99.9% AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81079010
    },
    {
        "Id": 698,
        "SKUNo": "AS1487",
        "CASNO": "7440‐ 43‐ 9",
        "ProductName": "CADMIUM (METAL) GRANULAR 99.9% AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81079010
    },
    {
        "Id": 699,
        "SKUNo": "AS1488",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE LR (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 700,
        "SKUNo": "AS1488",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE LR (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 701,
        "SKUNo": "AS1488",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE LR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 702,
        "SKUNo": "AS1489",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE AR (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 703,
        "SKUNo": "AS1489",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE AR (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 704,
        "SKUNo": "AS1489",
        "CASNO": "5743‐04‐4",
        "ProductName": "CADMIUM ACETATE AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 705,
        "SKUNo": "AS1490",
        "CASNO": "513‐ 78‐ 0",
        "ProductName": "CADMIUM CARBONATE   ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 706,
        "SKUNo": "AS1490",
        "CASNO": "513‐ 78‐ 0",
        "ProductName": "CADMIUM CARBONATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 707,
        "SKUNo": "AS1491",
        "CASNO": "35658‐ 65‐ 2",
        "ProductName": "CADMIUM CHLORIDE (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 708,
        "SKUNo": "AS1491",
        "CASNO": "35658‐ 65‐ 2",
        "ProductName": "CADMIUM CHLORIDE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 709,
        "SKUNo": "AS1492",
        "CASNO": "35658‐ 65‐ 2",
        "ProductName": "CADMIUM CHLORIDE AR (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 710,
        "SKUNo": "AS1492",
        "CASNO": "35658‐ 65‐ 2",
        "ProductName": "CADMIUM CHLORIDE AR (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 711,
        "SKUNo": "AS1493",
        "CASNO": "7790‐ 80‐ 9",
        "ProductName": "CADMIUM IODIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 712,
        "SKUNo": "AS1493",
        "CASNO": "7790‐ 80‐ 9",
        "ProductName": "CADMIUM IODIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 713,
        "SKUNo": "AS1494",
        "CASNO": "10022‐ 68‐ 1",
        "ProductName": "CADMIUM NITRATE (TETRAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 714,
        "SKUNo": "AS1494",
        "CASNO": "10022‐ 68‐ 1",
        "ProductName": "CADMIUM NITRATE (TETRAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 715,
        "SKUNo": "AS1494",
        "CASNO": "10022‐ 68‐ 1",
        "ProductName": "CADMIUM NITRATE (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 716,
        "SKUNo": "AS1495",
        "CASNO": "10022‐ 68‐ 1",
        "ProductName": "CADMIUM NITRATE AR (TETRAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 717,
        "SKUNo": "AS1495",
        "CASNO": "10022‐ 68‐ 1",
        "ProductName": "CADMIUM NITRATE AR (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 718,
        "SKUNo": "AS1496",
        "CASNO": "1306‐ 19‐ 0",
        "ProductName": "CADMIUM OXIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28259020
    },
    {
        "Id": 719,
        "SKUNo": "AS1496",
        "CASNO": "1306‐ 19‐ 0",
        "ProductName": "CADMIUM OXIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259020
    },
    {
        "Id": 720,
        "SKUNo": "AS1497",
        "CASNO": "1306‐ 19‐ 0",
        "ProductName": "CADMIUM OXIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28259020
    },
    {
        "Id": 721,
        "SKUNo": "AS1498",
        "CASNO": "7790‐ 84‐ 3",
        "ProductName": "CADMIUM SULPHATE LR (OCTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 722,
        "SKUNo": "AS1498",
        "CASNO": "7790‐ 84‐ 3",
        "ProductName": "CADMIUM SULPHATE LR (OCTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 723,
        "SKUNo": "AS1499",
        "CASNO": "7790‐ 84‐ 3",
        "ProductName": "CADMIUM SULPHATE AR (OCTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 724,
        "SKUNo": "AS1499",
        "CASNO": "7790‐ 84‐ 3",
        "ProductName": "CADMIUM SULPHATE AR (OCTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 725,
        "SKUNo": "AS1500",
        "CASNO": "331‐39‐5",
        "ProductName": "CAFFEIC ACID (3,4‐Dihydroxycinnamic acid)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 726,
        "SKUNo": "AS1500",
        "CASNO": "331‐39‐5",
        "ProductName": "CAFFEIC ACID (3,4‐Dihydroxycinnamic acid)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 727,
        "SKUNo": "AS1501",
        "CASNO": "58‐ 08‐ 2",
        "ProductName": "CAFFEINE LR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29393000
    },
    {
        "Id": 728,
        "SKUNo": "AS1501",
        "CASNO": "58‐ 08‐ 2",
        "ProductName": "CAFFEINE LR (ANHYDROUS)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29393000
    },
    {
        "Id": 729,
        "SKUNo": "AS1501",
        "CASNO": "58‐ 08‐ 2",
        "ProductName": "CAFFEINE LR (ANHYDROUS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29393000
    },
    {
        "Id": 730,
        "SKUNo": "AS1502",
        "CASNO": "58‐ 08‐ 2",
        "ProductName": "CAFFEINE AR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29393000
    },
    {
        "Id": 731,
        "SKUNo": "AS1502",
        "CASNO": "58‐ 08‐ 2",
        "ProductName": "CAFFEINE AR (ANHYDROUS)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29393000
    },
    {
        "Id": 732,
        "SKUNo": "AS1503",
        "CASNO": "              ",
        "ProductName": "CALAMINE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 30039090
    },
    {
        "Id": 733,
        "SKUNo": "AS1503",
        "CASNO": "                  ",
        "ProductName": "CALAMINE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 30039090
    },
    {
        "Id": 734,
        "SKUNo": "AS1504",
        "CASNO": "1461‐ 15‐ 0",
        "ProductName": "CALCEINE INDICATOR AR (fluorecein complexoine)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 735,
        "SKUNo": "AS1504",
        "CASNO": "1461‐ 15‐ 0",
        "ProductName": "CALCEINE INDICATOR AR (fluorecein complexoine)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 736,
        "SKUNo": "AS1505",
        "CASNO": "7440‐70‐2",
        "ProductName": "CALCIUM (METAL) GRANULAR 98% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28051200
    },
    {
        "Id": 737,
        "SKUNo": "AS1506",
        "CASNO": "114460‐ 21‐ 8",
        "ProductName": "CALCIUM ACETATE DRIED for soil test‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152910
    },
    {
        "Id": 738,
        "SKUNo": "AS1507",
        "CASNO": "114460‐ 21‐ 8",
        "ProductName": "CALCIUM ACETATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152910
    },
    {
        "Id": 739,
        "SKUNo": "AS1508",
        "CASNO": "71626‐99‐8",
        "ProductName": "CALCIUM BROMIDE HYDRATE LR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 740,
        "SKUNo": "AS1509",
        "CASNO": "471‐ 34‐ 1",
        "ProductName": "CALCIUM CARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28365000
    },
    {
        "Id": 741,
        "SKUNo": "AS1509",
        "CASNO": "471‐ 34‐ 1",
        "ProductName": "CALCIUM CARBONATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28365000
    },
    {
        "Id": 742,
        "SKUNo": "AS1510",
        "CASNO": "10043‐ 52‐ 4",
        "ProductName": "CALCIUM CHLORIDE (FUSED)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28272000
    },
    {
        "Id": 743,
        "SKUNo": "AS1510",
        "CASNO": "10043‐ 52‐ 4",
        "ProductName": "CALCIUM CHLORIDE (FUSED)‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28272000
    },
    {
        "Id": 744,
        "SKUNo": "AS1510",
        "CASNO": "10043‐ 52‐ 4",
        "ProductName": "CALCIUM CHLORIDE (FUSED)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28272000
    },
    {
        "Id": 745,
        "SKUNo": "AS1511",
        "CASNO": "10035‐ 04‐ 8",
        "ProductName": "CALCIUM CHLORIDE (DIHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28272000
    },
    {
        "Id": 746,
        "SKUNo": "AS1511",
        "CASNO": "10035‐ 04‐ 8",
        "ProductName": "CALCIUM CHLORIDE (DIHYDRATE) LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28272000
    },
    {
        "Id": 747,
        "SKUNo": "AS1512",
        "CASNO": "10035‐ 04‐ 8",
        "ProductName": "CALCIUM CHLORIDE (DIHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28272000
    },
    {
        "Id": 748,
        "SKUNo": "AS1513",
        "CASNO": "5785‐ 44‐ 4",
        "ProductName": "CALCIUM CITRATE TETRAHYDRATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 749,
        "SKUNo": "AS1514",
        "CASNO": "7789‐ 75‐ 5",
        "ProductName": "CALCIUM FLUORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 750,
        "SKUNo": "AS1514",
        "CASNO": "7789‐ 75‐ 5",
        "ProductName": "CALCIUM FLUORIDE LR‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28261990
    },
    {
        "Id": 751,
        "SKUNo": "AS1515",
        "CASNO": "              ",
        "ProductName": "CALCIUM HARDNESS INDICATOR‐100TAB",
        "PACKSIZE": "100 TAB",
        "HSNCODE": 38220090
    },
    {
        "Id": 752,
        "SKUNo": "AS1516",
        "CASNO": "7789‐ 77‐ 7",
        "ProductName": "CALCIUM HYDROGEN PHOSPHATE DIHYDRATE 98% LR",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352500
    },
    {
        "Id": 753,
        "SKUNo": "AS1517",
        "CASNO": "1305‐ 62‐ 0",
        "ProductName": "CALCIUM HYDROXIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259040
    },
    {
        "Id": 754,
        "SKUNo": "AS1518",
        "CASNO": "1305‐ 62‐ 0",
        "ProductName": "CALCIUM HYDROXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259040
    },
    {
        "Id": 755,
        "SKUNo": "AS1519",
        "CASNO": "5743‐ 47‐ 5",
        "ProductName": "CALCIUM LACTATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29181120
    },
    {
        "Id": 756,
        "SKUNo": "AS1519",
        "CASNO": "5743‐ 47‐ 5",
        "ProductName": "CALCIUM LACTATE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29181120
    },
    {
        "Id": 757,
        "SKUNo": "AS1520",
        "CASNO": "13477‐ 34‐ 4",
        "ProductName": "CALCIUM NITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 758,
        "SKUNo": "AS1521",
        "CASNO": "13477‐ 34‐ 4",
        "ProductName": "CALCIUM NITRATE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 759,
        "SKUNo": "AS1522",
        "CASNO": "1305‐ 78‐ 8",
        "ProductName": "CALCIUM OXIDE LR (POWDER)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 760,
        "SKUNo": "AS1523",
        "CASNO": "1305‐ 78‐ 8",
        "ProductName": "CALCIUM OXIDE (LUMPS) LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 761,
        "SKUNo": "AS1524",
        "CASNO": "137‐ 08‐ 6",
        "ProductName": "CALCIUM‐D‐PANTOTHENATE‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362400
    },
    {
        "Id": 762,
        "SKUNo": "AS1524",
        "CASNO": "137‐ 08‐ 6",
        "ProductName": "CALCIUM‐D‐PANTOTHENATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29362400
    },
    {
        "Id": 763,
        "SKUNo": "AS1524",
        "CASNO": "137‐ 08‐ 6",
        "ProductName": "CALCIUM‐D‐PANTOTHENATE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29362400
    },
    {
        "Id": 764,
        "SKUNo": "AS1525",
        "CASNO": "7758‐ 87‐ 4",
        "ProductName": "tri‐CALCIUM PHOSPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352610
    },
    {
        "Id": 765,
        "SKUNo": "AS1525",
        "CASNO": "7758‐ 87‐ 4",
        "ProductName": "tri‐CALCIUM PHOSPHATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28352610
    },
    {
        "Id": 766,
        "SKUNo": "AS1526",
        "CASNO": "4075‐ 81‐ 4",
        "ProductName": "CALCIUM PROPIONATE 97%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 767,
        "SKUNo": "AS1526",
        "CASNO": "4075‐ 81‐ 4",
        "ProductName": "CALCIUM PROPIONATE 97%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29159090
    },
    {
        "Id": 768,
        "SKUNo": "AS1527",
        "CASNO": "1592‐23‐0",
        "ProductName": "CALCIUM STEARATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 769,
        "SKUNo": "AS1527",
        "CASNO": "1592‐23‐0",
        "ProductName": "CALCIUM STEARATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29159090
    },
    {
        "Id": 770,
        "SKUNo": "AS1528",
        "CASNO": "10101‐ 41‐ 4",
        "ProductName": "CALCIUM SULPHATE(DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 771,
        "SKUNo": "AS1529",
        "CASNO": "10101‐ 41‐ 4",
        "ProductName": "CALCIUM SULPHATE (DIHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 772,
        "SKUNo": "AS1530",
        "CASNO": "7778‐ 18‐ 9",
        "ProductName": "CALCIUM SULPHATE ANHYDROUS(DRIED)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 773,
        "SKUNo": "AS1531",
        "CASNO": "3147‐ 14‐ 6",
        "ProductName": "CALMAGITE INDICATOR AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 774,
        "SKUNo": "AS1531",
        "CASNO": "3147‐ 14‐ 6",
        "ProductName": "CALMAGITE INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 775,
        "SKUNo": "AS1531",
        "CASNO": "3147‐14‐6",
        "ProductName": "CALMAGITE INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 776,
        "SKUNo": "AS1532",
        "CASNO": "464‐ 49‐ 3",
        "ProductName": "CAMPHOR (M.A.R.) Micro Analytical Reagent    ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29142921
    },
    {
        "Id": 777,
        "SKUNo": "AS1532",
        "CASNO": "464‐ 49‐ 3",
        "ProductName": "CAMPHOR (M.A.R.) Micro Analytical Reagent     ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29142921
    },
    {
        "Id": 778,
        "SKUNo": "AS1533",
        "CASNO": "3144‐ 16‐ 9",
        "ProductName": "D‐10 CAMPHOR SULPHONIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 779,
        "SKUNo": "AS1533",
        "CASNO": "3144‐ 16‐ 9",
        "ProductName": "D‐10 CAMPHOR SULPHONIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 780,
        "SKUNo": "AS1534",
        "CASNO": "35963‐20‐3",
        "ProductName": "L‐(‐) CAMPHOR SULPHONIC ACID LR ‐99%",
        "PACKSIZE": "100GM",
        "HSNCODE": 29147990
    },
    {
        "Id": 781,
        "SKUNo": "AS1535",
        "CASNO": "1135‐ 40‐ 6",
        "ProductName": "CAPS BUFFER FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 782,
        "SKUNo": "AS1535",
        "CASNO": "1135‐ 40‐ 6",
        "ProductName": "CAPS BUFFER FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 783,
        "SKUNo": "AS1536",
        "CASNO": "73463‐ 39‐ 5",
        "ProductName": "CAPSO BUFFER FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 784,
        "SKUNo": "AS1536",
        "CASNO": "73463‐ 39‐ 5",
        "ProductName": "CAPSO BUFFER FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 785,
        "SKUNo": "AS1537",
        "CASNO": "334‐ 48‐ 5",
        "ProductName": "CAPRIC ACID (DECANOIC ACID) 98%‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 786,
        "SKUNo": "AS1537",
        "CASNO": "334‐ 48‐ 5",
        "ProductName": "CAPRIC ACID (DECANOIC ACID) 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 787,
        "SKUNo": "AS1537",
        "CASNO": "334‐ 48‐ 5",
        "ProductName": "CAPRIC ACID (DECANOIC ACID) 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 788,
        "SKUNo": "AS1538",
        "CASNO": "142‐62‐1",
        "ProductName": "CAPROIC ACID 98% (HEXANOIC ACID)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 789,
        "SKUNo": "AS1538",
        "CASNO": "142‐62‐1",
        "ProductName": "CAPROIC ACID 98% (HEXANOIC ACID)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 790,
        "SKUNo": "AS1539",
        "CASNO": "124‐ 07‐ 2",
        "ProductName": "CAPRYLIC ACID LR 99%",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159020
    },
    {
        "Id": 791,
        "SKUNo": "AS1539",
        "CASNO": "124‐ 07‐ 2",
        "ProductName": "CAPRYLIC ACID LR 99%",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159020
    },
    {
        "Id": 792,
        "SKUNo": "AS1540",
        "CASNO": "1984‐06‐1",
        "ProductName": "CAPRYLIC ACID SODIUM SALT‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 793,
        "SKUNo": "AS1540",
        "CASNO": "1984‐06‐1",
        "ProductName": "CAPRYLIC ACID SODIUM SALT‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29159090
    },
    {
        "Id": 794,
        "SKUNo": "AS1541",
        "CASNO": "86‐74‐8",
        "ProductName": "CARBOZOLE FOR SYNTHESIS 95%‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 795,
        "SKUNo": "AS1541",
        "CASNO": "86‐74‐8",
        "ProductName": "CARBOZOLE FOR SYNTHESIS 95%‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 796,
        "SKUNo": "AS1542",
        "CASNO": "4197‐ 24‐ 4",
        "ProductName": "CARBOL FUCHSIN POWDER‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 38220019
    },
    {
        "Id": 797,
        "SKUNo": "AS1542",
        "CASNO": "4197‐ 24‐ 4",
        "ProductName": "CARBOL FUCHSIN POWDER‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220019
    },
    {
        "Id": 798,
        "SKUNo": "AS1543",
        "CASNO": "",
        "ProductName": "CARBOL FUCHSIN DILUTE staining solution (ziehl Neelsen)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 799,
        "SKUNo": "AS1543",
        "CASNO": "",
        "ProductName": "CARBOL FUCHSIN DILUTE staining solution (ziehl Neelsen)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 800,
        "SKUNo": "AS1544",
        "CASNO": "",
        "ProductName": "CARBOL FUCHSIN STRONG staining solution (ziehl Neelsen))‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 801,
        "SKUNo": "AS1544",
        "CASNO": "                ",
        "ProductName": "CARBOL FUCHSIN STRONG staining solution (ziehl Neelsen)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 802,
        "SKUNo": "AS1545",
        "CASNO": "56‐ 23‐ 5",
        "ProductName": "CARBON TETRACHLORIDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031400
    },
    {
        "Id": 803,
        "SKUNo": "AS1545",
        "CASNO": "56‐ 23‐ 5",
        "ProductName": "CARBON TETRACHLORIDE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031400
    },
    {
        "Id": 804,
        "SKUNo": "AS1546",
        "CASNO": "56‐ 23‐ 5",
        "ProductName": "CARBON TETRACHLORIDE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031400
    },
    {
        "Id": 805,
        "SKUNo": "AS1546",
        "CASNO": "56‐ 23‐ 5",
        "ProductName": "CARBON TETRACHLORIDE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031400
    },
    {
        "Id": 806,
        "SKUNo": "AS1547",
        "CASNO": "56‐ 23‐ 5",
        "ProductName": "CARBON TETRACHLORIDE HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29031400
    },
    {
        "Id": 807,
        "SKUNo": "AS1548",
        "CASNO": "530‐ 62‐ 1",
        "ProductName": "N,N’‐CARBONYLDIIMIDAZOLE (CDI) FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 808,
        "SKUNo": "AS1548",
        "CASNO": "530‐ 62‐ 1",
        "ProductName": "N,N’‐CARBONYLDIIMIDAZOLE (CDI) FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 809,
        "SKUNo": "AS1548",
        "CASNO": "530‐ 62‐ 1",
        "ProductName": "N,N’‐CARBONYLDIIMIDAZOLE (CDI) FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 810,
        "SKUNo": "AS1549",
        "CASNO": "9003‐01‐4",
        "ProductName": "CARBOPOL 934‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39069090
    },
    {
        "Id": 811,
        "SKUNo": "AS1549",
        "CASNO": "9003‐01‐4",
        "ProductName": "CARBOPOL 934‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39069090
    },
    {
        "Id": 812,
        "SKUNo": "AS1550",
        "CASNO": "9003‐01‐4",
        "ProductName": "CARBOPOL 940‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39069090
    },
    {
        "Id": 813,
        "SKUNo": "AS1550",
        "CASNO": "9003‐01‐4",
        "ProductName": "CARBOPOL 940‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39069090
    },
    {
        "Id": 814,
        "SKUNo": "AS1551",
        "CASNO": "9004‐ 32‐ 4",
        "ProductName": "CARBOXY METHYL CELLULOSE SODIUM SALT ( HIGH VISC.) (500 ‐ 600 CPS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123100
    },
    {
        "Id": 815,
        "SKUNo": "AS1552",
        "CASNO": "9004‐ 32‐ 4",
        "ProductName": "CARBOXY METHYL CELLULOSE SODIUM SALT HIGH (1100‐1900 CPS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123100
    },
    {
        "Id": 816,
        "SKUNo": "AS1553",
        "CASNO": "9004‐ 32‐ 4",
        "ProductName": "CARBOXY METHYL CELLULOSE SODIUM SALT (MED VISC.) (250 ‐ 350 CPS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123100
    },
    {
        "Id": 817,
        "SKUNo": "AS1554",
        "CASNO": "1390‐ 65‐ 4",
        "ProductName": "CARMINE FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 818,
        "SKUNo": "AS1554",
        "CASNO": "1390‐ 65‐ 4",
        "ProductName": "CARMINE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 819,
        "SKUNo": "AS1555",
        "CASNO": "7758‐ 87‐ 4",
        "ProductName": "CARMINE ACETO ‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 820,
        "SKUNo": "AS1555",
        "CASNO": "7758‐ 87‐ 4",
        "ProductName": "CARMINE ACETO ‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 821,
        "SKUNo": "AS1556",
        "CASNO": "1260‐17‐9",
        "ProductName": "CARMINIC ACID AR 98% For Microscopy C.I. No. 75470‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 822,
        "SKUNo": "AS1556",
        "CASNO": "1260‐17‐9",
        "ProductName": "CARMINIC ACID AR 98% For Microscopy C.I. No. 75470‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 823,
        "SKUNo": "AS1557",
        "CASNO": "9000‐ 71‐ 9",
        "ProductName": "CASEIN SOLUBLE IN ALKALI‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35011000
    },
    {
        "Id": 824,
        "SKUNo": "AS1558",
        "CASNO": "9000‐ 71‐ 9",
        "ProductName": "CASEIN ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35011000
    },
    {
        "Id": 825,
        "SKUNo": "AS1559",
        "CASNO": "9000‐ 71‐ 9",
        "ProductName": "CASEIN VITAMIN FREE (also fat free)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35011000
    },
    {
        "Id": 826,
        "SKUNo": "AS1560",
        "CASNO": "8001‐ 79‐ 4",
        "ProductName": "CASTOR OIL (Refined)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 15153090
    },
    {
        "Id": 827,
        "SKUNo": "AS1560",
        "CASNO": "8001‐ 79‐ 4",
        "ProductName": "CASTOR OIL (Refined)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 15153090
    },
    {
        "Id": 828,
        "SKUNo": "AS1561",
        "CASNO": "1562‐ 90‐ 9",
        "ProductName": "CELESTIN BLUE for Microscopy  C.I.No. 51050‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 829,
        "SKUNo": "AS1561",
        "CASNO": "1562‐ 90‐ 9",
        "ProductName": "CELESTIN BLUE for Microscopy  C.I.No. 51051‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 830,
        "SKUNo": "AS1562",
        "CASNO": "61790‐ 53‐ 2",
        "ProductName": "CELITE 545 FILTER AID‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38029019
    },
    {
        "Id": 831,
        "SKUNo": "AS1562",
        "CASNO": "61790‐ 53‐ 2",
        "ProductName": "CELITE 545 FILTER AID‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 38029019
    },
    {
        "Id": 832,
        "SKUNo": "AS1563",
        "CASNO": "9004‐ 35‐ 7",
        "ProductName": "CELLULOSE ACETATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39121110
    },
    {
        "Id": 833,
        "SKUNo": "AS1564",
        "CASNO": "9004‐ 34‐ 6",
        "ProductName": "CELLULOSE MICROCRYSTALINE FOR TLC‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39129090
    },
    {
        "Id": 834,
        "SKUNo": "AS1564",
        "CASNO": "9013‐ 34‐ 7",
        "ProductName": "CELLULOSE POWDER FOR COLUMN CHROMATOGRAPHY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39129090
    },
    {
        "Id": 835,
        "SKUNo": "AS1565",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "CERESIN WAX (WHITE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122090
    },
    {
        "Id": 836,
        "SKUNo": "AS1566",
        "CASNO": "1306‐ 38‐ 3",
        "ProductName": "CERIC OXIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 837,
        "SKUNo": "AS1566",
        "CASNO": "1306‐ 38‐ 3",
        "ProductName": "CERIC OXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 838,
        "SKUNo": "AS1567",
        "CASNO": "10294‐ 42‐ 5",
        "ProductName": "CERIC SULPHATE HYDRATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 839,
        "SKUNo": "AS1567",
        "CASNO": "10294‐ 42‐ 5",
        "ProductName": "CERIC SULPHATE HYDRATE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28461090
    },
    {
        "Id": 840,
        "SKUNo": "AS1568",
        "CASNO": "10294‐41‐4",
        "ProductName": "CEROUS NITRATE AR 99.9% (Cerium Nitrate hexahydrate)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28461090
    },
    {
        "Id": 841,
        "SKUNo": "AS1568",
        "CASNO": "10294‐41‐4",
        "ProductName": "CEROUS NITRATE AR 99.9% (Cerium Nitrate hexahydrate)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28461090
    },
    {
        "Id": 842,
        "SKUNo": "AS1569",
        "CASNO": "3396‐ 11‐ 0",
        "ProductName": "CESIUM ACETATE 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29152900
    },
    {
        "Id": 843,
        "SKUNo": "AS1569",
        "CASNO": "3396‐ 11‐ 0",
        "ProductName": "CESIUM ACETATE 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152900
    },
    {
        "Id": 844,
        "SKUNo": "AS1570",
        "CASNO": "7787‐ 69‐ 1",
        "ProductName": "CESIUM BROMIDE >99.5% PURISS AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 845,
        "SKUNo": "AS1570",
        "CASNO": "7787‐ 69‐ 1",
        "ProductName": "CESIUM BROMIDE >99.5% PURISS AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 846,
        "SKUNo": "AS1571",
        "CASNO": "534‐ 17‐ 8",
        "ProductName": "CESIUM CARBONATE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28369910
    },
    {
        "Id": 847,
        "SKUNo": "AS1571",
        "CASNO": "534‐ 17‐ 8",
        "ProductName": "CESIUM CARBONATE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28369910
    },
    {
        "Id": 848,
        "SKUNo": "AS1572",
        "CASNO": "7647‐ 17‐ 8",
        "ProductName": "CESIUM CHLORIDE AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 849,
        "SKUNo": "AS1572",
        "CASNO": "7647‐ 17‐ 8",
        "ProductName": "CESIUM CHLORIDE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 850,
        "SKUNo": "AS1573",
        "CASNO": "7647‐ 17‐ 8",
        "ProductName": "CESIUM CHLORIDE ULTRA LR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 851,
        "SKUNo": "AS1573",
        "CASNO": "7647‐ 17‐ 8",
        "ProductName": "CESIUM CHLORIDE ULTRA LR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 852,
        "SKUNo": "AS1574",
        "CASNO": "13400‐ 13‐ 0",
        "ProductName": "CESIUM FLUORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28269000
    },
    {
        "Id": 853,
        "SKUNo": "AS1574",
        "CASNO": "13400‐ 13‐ 0",
        "ProductName": "CESIUM FLUORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28269000
    },
    {
        "Id": 854,
        "SKUNo": "AS1575",
        "CASNO": "21351‐ 79‐ 1",
        "ProductName": "CESIUM HYDROXIDE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28259085
    },
    {
        "Id": 855,
        "SKUNo": "AS1575",
        "CASNO": "21351‐ 79‐ 1",
        "ProductName": "CESIUM HYDROXIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28259085
    },
    {
        "Id": 856,
        "SKUNo": "AS1576",
        "CASNO": "7789‐ 17‐ 5",
        "ProductName": "CESIUM IODIDE‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 857,
        "SKUNo": "AS1576",
        "CASNO": "7789‐ 17‐ 5",
        "ProductName": "CESIUM IODIDE‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 858,
        "SKUNo": "AS1577",
        "CASNO": "7789‐ 17‐ 5",
        "ProductName": "CESIUM IODIDE ULTRA LR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 859,
        "SKUNo": "AS1577",
        "CASNO": "7789‐ 17‐ 5",
        "ProductName": "CESIUM IODIDE ULTRA LR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28276090
    },
    {
        "Id": 860,
        "SKUNo": "AS1578",
        "CASNO": "7789‐ 18‐ 6",
        "ProductName": "CESIUM NITRATE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 861,
        "SKUNo": "AS1578",
        "CASNO": "7789‐ 18‐ 6",
        "ProductName": "CESIUM NITRATE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 862,
        "SKUNo": "AS1579",
        "CASNO": "10294‐ 54‐ 9",
        "ProductName": "CESIUM SULPHATE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 863,
        "SKUNo": "AS1579",
        "CASNO": "10294‐ 54‐ 9",
        "ProductName": "CESIUM SULPHATE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 864,
        "SKUNo": "AS1580",
        "CASNO": "67762‐ 30‐ 5",
        "ProductName": "CETOSTEARYL ALCOHOL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38237090
    },
    {
        "Id": 865,
        "SKUNo": "AS1581",
        "CASNO": "36653‐ 82‐ 4",
        "ProductName": "CETYL  ALCOHOL LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29051700
    },
    {
        "Id": 866,
        "SKUNo": "AS1582",
        "CASNO": "6004‐ 24‐ 6",
        "ProductName": "CETYL PYRIDINIUM CHLORIDE  FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 867,
        "SKUNo": "AS1582",
        "CASNO": "6004‐ 24‐ 6",
        "ProductName": "CETYL PYRIDINIUM CHLORIDE  FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 868,
        "SKUNo": "AS1583",
        "CASNO": "57‐ 09‐ 0",
        "ProductName": "N‐CETYL‐N,N,N, TRIMETHYL AMMONIUM BROMIDE (CETRIMIDE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 869,
        "SKUNo": "AS1583",
        "CASNO": "57‐ 09‐ 0",
        "ProductName": "N‐CETYL‐N,N,N, TRIMETHYL AMMONIUM BROMIDE (CETRIMIDE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 870,
        "SKUNo": "AS1584",
        "CASNO": "57‐ 09‐ 0",
        "ProductName": "N‐CETYL‐N,N,N, TRIMETHYL AMMONIUM BROMIDE AR (CETRIMIDE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 871,
        "SKUNo": "AS1584",
        "CASNO": "57‐ 09‐ 0",
        "ProductName": "N‐CETYL‐N,N,N, TRIMETHYL AMMONIUM BROMIDE AR (CETRIMIDE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 872,
        "SKUNo": "AS1585",
        "CASNO": "75621‐ 03‐ 3",
        "ProductName": "CHAPS FOR BIOCHEMISTRY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 873,
        "SKUNo": "AS1585",
        "CASNO": "75621‐ 03‐ 3",
        "ProductName": "CHAPS FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 874,
        "SKUNo": "AS1586",
        "CASNO": "82473‐ 24‐3",
        "ProductName": "CHAPSO FOR BIOCHEMISTRY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 875,
        "SKUNo": "AS1586",
        "CASNO": "82473‐ 24‐3",
        "ProductName": "CHAPSO FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 876,
        "SKUNo": "AS1587",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED (ACID WASHED) PHARMA GRADE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38021000
    },
    {
        "Id": 877,
        "SKUNo": "AS1587",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED (ACID WASHED) PHARMA GRADE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 38021000
    },
    {
        "Id": 878,
        "SKUNo": "AS1588",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED AR (ACID WASHED)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38021000
    },
    {
        "Id": 879,
        "SKUNo": "AS1588",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED AR (ACID WASHED)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38021000
    },
    {
        "Id": 880,
        "SKUNo": "AS1589",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED SPECIAL GRADE (Acid Washed)",
        "PACKSIZE": "5KG",
        "HSNCODE": 38021000
    },
    {
        "Id": 881,
        "SKUNo": "AS1590",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38021000
    },
    {
        "Id": 882,
        "SKUNo": "AS1590",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED LR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 38021000
    },
    {
        "Id": 883,
        "SKUNo": "AS1591",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED GRANULAR 2.5 TO 4.5 MM‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38021000
    },
    {
        "Id": 884,
        "SKUNo": "AS1591",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "CHARCOAL ACTIVATED GRANULAR 2.5 TO 4.5 MM",
        "PACKSIZE": "5KG",
        "HSNCODE": 38021000
    },
    {
        "Id": 885,
        "SKUNo": "AS1592",
        "CASNO": "9012‐76‐4",
        "ProductName": "CHITOSAN (FROM SHRIMP SHELLS75% DECAHYDRATE)",
        "PACKSIZE": "25GM",
        "HSNCODE": 39139020
    },
    {
        "Id": 886,
        "SKUNo": "AS1592",
        "CASNO": "9012‐76‐4",
        "ProductName": "CHITOSAN (FROM SHRIMP SHELLS75% DECAHYDRATE)",
        "PACKSIZE": "100GM",
        "HSNCODE": 39139020
    },
    {
        "Id": 887,
        "SKUNo": "AS1592",
        "CASNO": "9012‐76‐4",
        "ProductName": "CHITOSAN (FROM SHRIMP SHELLS75% DECAHYDRATE)",
        "PACKSIZE": "500GM",
        "HSNCODE": 39139020
    },
    {
        "Id": 888,
        "SKUNo": "AS1593",
        "CASNO": "7080‐ 50‐ 4",
        "ProductName": "CHLORAMINE T (TRIHYDRATE) FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28281090
    },
    {
        "Id": 889,
        "SKUNo": "AS1593",
        "CASNO": "7080‐ 50‐ 4",
        "ProductName": "CHLORAMINE T (TRIHYDRATE) FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28281090
    },
    {
        "Id": 890,
        "SKUNo": "AS1594",
        "CASNO": "7080‐ 50‐ 4",
        "ProductName": "CHLORAMINE T AR 99% ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28281090
    },
    {
        "Id": 891,
        "SKUNo": "AS1594",
        "CASNO": "7080‐ 50‐ 4",
        "ProductName": "CHLORAMINE T AR 99% ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28281090
    },
    {
        "Id": 892,
        "SKUNo": "AS1595",
        "CASNO": "",
        "ProductName": "CHLORINE TEST PAPER(10 BOOKS)",
        "PACKSIZE": "1BOX",
        "HSNCODE": 38220090
    },
    {
        "Id": 893,
        "SKUNo": "AS1596",
        "CASNO": "79‐ 11‐ 8",
        "ProductName": "CHLOROACETIC ACID 99% LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 894,
        "SKUNo": "AS1597",
        "CASNO": "79‐ 04‐ 9",
        "ProductName": "CHLOROACETYL CHLORIDE FOR SYNTHESIS ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 895,
        "SKUNo": "AS1597",
        "CASNO": "79‐ 04‐ 9",
        "ProductName": "CHLOROACETYL CHLORIDE FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 896,
        "SKUNo": "AS1598",
        "CASNO": "16903‐ 35‐ 8",
        "ProductName": "CHLOROAURIC ACID‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28433000
    },
    {
        "Id": 897,
        "SKUNo": "AS1599",
        "CASNO": "89‐98‐5",
        "ProductName": "2‐CHLOROBENZALDEHYDE FOR SYNTHESIS‐100ML",
        "PACKSIZE": "100 ML",
        "HSNCODE": 29130010
    },
    {
        "Id": 898,
        "SKUNo": "AS1599",
        "CASNO": "89‐98‐5",
        "ProductName": "2‐CHLOROBENZALDEHYDE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29130010
    },
    {
        "Id": 899,
        "SKUNo": "AS1600",
        "CASNO": "104‐ 88‐ 1",
        "ProductName": "4‐CHLORO BENZALDEHYDE for synthesis‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 900,
        "SKUNo": "AS1600",
        "CASNO": "104‐ 88‐ 1",
        "ProductName": "4‐CHLORO BENZALDEHYDE for synthesis‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 901,
        "SKUNo": "AS1601",
        "CASNO": "108‐90‐7",
        "ProductName": "CHLOROBENZENE LR (MONOCHLOROBENZENE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039110
    },
    {
        "Id": 902,
        "SKUNo": "AS1601",
        "CASNO": "108‐90‐7",
        "ProductName": "CHLOROBENZENE LR (MONOCHLOROBENZENE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039110
    },
    {
        "Id": 903,
        "SKUNo": "AS1602",
        "CASNO": "74‐11‐3",
        "ProductName": "4‐CHLOROBENZOIC ACID FOR SYNTHESIS 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163190
    },
    {
        "Id": 904,
        "SKUNo": "AS1602",
        "CASNO": "74‐11‐3",
        "ProductName": "4‐CHLOROBENZOIC ACID FOR SYNTHESIS 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163190
    },
    {
        "Id": 905,
        "SKUNo": "AS1603",
        "CASNO": "134‐85‐0",
        "ProductName": "4‐CHOLROBENZOPHENONE FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29147990
    },
    {
        "Id": 906,
        "SKUNo": "AS1603",
        "CASNO": "134‐85‐0",
        "ProductName": "4‐CHOLROBENZOPHENONE FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29147990
    },
    {
        "Id": 907,
        "SKUNo": "AS1604",
        "CASNO": "107‐07‐3",
        "ProductName": "2‐CHLOROETHANOL 99% LR",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051690
    },
    {
        "Id": 908,
        "SKUNo": "AS1604",
        "CASNO": "107‐07‐3",
        "ProductName": "2‐CHLOROETHANOL 99% LR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051690
    },
    {
        "Id": 909,
        "SKUNo": "AS1605",
        "CASNO": "59‐ 50‐ 7",
        "ProductName": "4‐CHLORO‐m‐CRESOL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38089990
    },
    {
        "Id": 910,
        "SKUNo": "AS1605",
        "CASNO": "59‐ 50‐ 7",
        "ProductName": "4‐CHLORO‐m‐CRESOL‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 38089990
    },
    {
        "Id": 911,
        "SKUNo": "AS1606",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031300
    },
    {
        "Id": 912,
        "SKUNo": "AS1606",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031300
    },
    {
        "Id": 913,
        "SKUNo": "AS1607",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031300
    },
    {
        "Id": 914,
        "SKUNo": "AS1607",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031300
    },
    {
        "Id": 915,
        "SKUNo": "AS1608",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM FOR HPLC",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29031300
    },
    {
        "Id": 916,
        "SKUNo": "AS1608",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM FOR HPLC",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031300
    },
    {
        "Id": 917,
        "SKUNo": "AS1609",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM SPECIALLY DRIED AR",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031300
    },
    {
        "Id": 918,
        "SKUNo": "AS1610",
        "CASNO": "67‐ 66‐ 3",
        "ProductName": "CHLOROFORM GC GRADE (stabilized with Ethanol)",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29031300
    },
    {
        "Id": 919,
        "SKUNo": "AS1611",
        "CASNO": "95‐57‐8",
        "ProductName": "3‐CHLORO PHENOL 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29081900
    },
    {
        "Id": 920,
        "SKUNo": "AS1611",
        "CASNO": "95‐57‐8",
        "ProductName": "3‐CHLORO PHENOL 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29081900
    },
    {
        "Id": 921,
        "SKUNo": "AS1611",
        "CASNO": "95‐57‐8",
        "ProductName": "3‐CHLORO PHENOL 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29081900
    },
    {
        "Id": 922,
        "SKUNo": "AS1612",
        "CASNO": "4430‐ 20‐ 0",
        "ProductName": "CHLOROPHENOL RED INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 923,
        "SKUNo": "AS1612",
        "CASNO": "4430‐ 20‐ 0",
        "ProductName": "CHLOROPHENOL RED INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 924,
        "SKUNo": "AS1612",
        "CASNO": "4430‐ 20‐ 0",
        "ProductName": "CHLOROPHENOL RED INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 925,
        "SKUNo": "AS1613",
        "CASNO": "          ",
        "ProductName": "CHLOROTEX REAGENT(For determination of chlorine)",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 926,
        "SKUNo": "AS1614",
        "CASNO": "128‐ 09‐ 6",
        "ProductName": "N‐CHLOROSUCCINIMIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 927,
        "SKUNo": "AS1614",
        "CASNO": "128‐ 09‐ 6",
        "ProductName": "N‐CHLOROSUCCINIMIDE ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 928,
        "SKUNo": "AS1614",
        "CASNO": "128‐ 09‐ 6",
        "ProductName": "N‐CHLOROSUCCINIMIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 929,
        "SKUNo": "AS1615",
        "CASNO": "106‐48‐9",
        "ProductName": "4‐CHLOROPHENOL FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 930,
        "SKUNo": "AS1616",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 931,
        "SKUNo": "AS1616",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 932,
        "SKUNo": "AS1616",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 933,
        "SKUNo": "AS1617",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 934,
        "SKUNo": "AS1617",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 935,
        "SKUNo": "AS1617",
        "CASNO": "57‐ 88‐ 5",
        "ProductName": "CHOLESTROL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29061310
    },
    {
        "Id": 936,
        "SKUNo": "AS1618",
        "CASNO": "81‐25‐4",
        "ProductName": "CHOLIC ACID 98% For Biochemistry ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 937,
        "SKUNo": "AS1619",
        "CASNO": "81‐25‐4",
        "ProductName": "CHOLIC ACID 98% For Biochemistry‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 938,
        "SKUNo": "AS1620",
        "CASNO": "1667‐ 99‐ 8",
        "ProductName": "CHROMAZUROL S METAL  (PM) INDICATOR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 939,
        "SKUNo": "AS1620",
        "CASNO": "1667‐ 99‐ 8",
        "ProductName": "CHROMAZUROL S METAL  (PM) INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 940,
        "SKUNo": "AS1621",
        "CASNO": "67‐48‐1",
        "ProductName": "CHOLINE CHLORIDE 98% LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29231000
    },
    {
        "Id": 941,
        "SKUNo": "AS1621",
        "CASNO": "67‐48‐1",
        "ProductName": "CHOLINE CHLORIDE 98% LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29231000
    },
    {
        "Id": 942,
        "SKUNo": "AS1622",
        "CASNO": "7440‐ 47‐ 3",
        "ProductName": "CHROMIUM (METAL) POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81121900
    },
    {
        "Id": 943,
        "SKUNo": "AS1623",
        "CASNO": "10060‐ 12‐ 5",
        "ProductName": "CHROMIUM CHLORIDE(HEXAHYDRATE)  ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 944,
        "SKUNo": "AS1624",
        "CASNO": "39380‐ 78‐ 4",
        "ProductName": "CHROMIUM (III) NITRATE NONAHYDRATE 97%",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 945,
        "SKUNo": "AS1625",
        "CASNO": "39380‐ 78‐ 4",
        "ProductName": "CHROMIUM (III) SULPHATE BASIC (HEXAHYDRATE)",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 946,
        "SKUNo": "AS1626",
        "CASNO": "1333‐82‐0",
        "ProductName": "CHROMIUM TRIOXIDE(CHROMIC ACID)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28191000
    },
    {
        "Id": 947,
        "SKUNo": "AS1626",
        "CASNO": "1333‐82‐0",
        "ProductName": "CHROMIUM TRIOXIDE(CHROMIC ACID)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28191000
    },
    {
        "Id": 948,
        "SKUNo": "AS1627",
        "CASNO": "1333‐82‐0",
        "ProductName": "CHROMIUM TRIOXIDE(CHROMIC ACID) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28191000
    },
    {
        "Id": 949,
        "SKUNo": "AS1628",
        "CASNO": "1308‐ 38‐ 9",
        "ProductName": "CHROMIUM (III) OXIDE (GREEN)   ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28199000
    },
    {
        "Id": 950,
        "SKUNo": "AS1628",
        "CASNO": "1308‐ 38‐ 9",
        "ProductName": "CHROMIUM (III) OXIDE (GREEN)   ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28199000
    },
    {
        "Id": 951,
        "SKUNo": "AS1629",
        "CASNO": "548‐ 80‐ 1",
        "ProductName": "CHROMOTROPE 2B   C.I. NO. 16575 ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 952,
        "SKUNo": "AS1629",
        "CASNO": "548‐ 80‐ 1",
        "ProductName": "CHROMOTROPE 2B   C.I. NO. 16575 ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 953,
        "SKUNo": "AS1630",
        "CASNO": "4197‐07‐3",
        "ProductName": "CHROMOTROPE 2R C. I. NO. 16570‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 954,
        "SKUNo": "AS1630",
        "CASNO": "4197‐07‐3",
        "ProductName": "CHROMOTROPE 2R C. I. NO. 16570‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 955,
        "SKUNo": "AS1631",
        "CASNO": "5808‐22‐0",
        "ProductName": "CHROMOTROPIC ACID DISODIUM SALT 98%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 956,
        "SKUNo": "AS1632",
        "CASNO": "5808‐22‐0",
        "ProductName": "CHROMOTROPIC ACID DISODIUM SALT AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 957,
        "SKUNo": "AS1632",
        "CASNO": "5808‐22‐0",
        "ProductName": "CHROMOTROPIC ACID DISODIUM SALT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 958,
        "SKUNo": "AS1633",
        "CASNO": "4438‐16‐8",
        "ProductName": "CHRYSOIDINE R ‐ C.I. No. 11320‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 959,
        "SKUNo": "AS1633",
        "CASNO": "4438‐16‐8",
        "ProductName": "CHRYSOIDINE R ‐ C.I. No. 11320‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 960,
        "SKUNo": "AS1634",
        "CASNO": "532‐ 82‐ 1",
        "ProductName": "CHRYSOIDINE Y  ‐ C.I. No. 11270 ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 961,
        "SKUNo": "AS1634",
        "CASNO": "532‐ 82‐ 1",
        "ProductName": "CHRYSOIDINE Y  ‐ C.I. No. 11270 ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 962,
        "SKUNo": "AS1635",
        "CASNO": "140‐ 10‐ 3",
        "ProductName": "CINNAMIC ACID FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29163910
    },
    {
        "Id": 963,
        "SKUNo": "AS1635",
        "CASNO": "140‐ 10‐ 3",
        "ProductName": "CINNAMIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163910
    },
    {
        "Id": 964,
        "SKUNo": "AS1636",
        "CASNO": "140‐ 10‐ 3",
        "ProductName": "CINNAMIC ACID AR ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29163910
    },
    {
        "Id": 965,
        "SKUNo": "AS1637",
        "CASNO": "104‐55‐2",
        "ProductName": "CINNAMALDEHYDE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29122910
    },
    {
        "Id": 966,
        "SKUNo": "AS1637",
        "CASNO": "104‐55‐2",
        "ProductName": "CINNAMALDEHYDE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29122910
    },
    {
        "Id": 967,
        "SKUNo": "AS1638",
        "CASNO": "5949‐ 29‐ 1",
        "ProductName": "CITRIC ACID LR (MONOHYDRATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181400
    },
    {
        "Id": 968,
        "SKUNo": "AS1638",
        "CASNO": "5949‐ 29‐ 1",
        "ProductName": "CITRIC ACID LR (MONOHYDRATE) ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181400
    },
    {
        "Id": 969,
        "SKUNo": "AS1639",
        "CASNO": "5949‐ 29‐ 1",
        "ProductName": "CITRIC ACID AR (MONOHYDRATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181400
    },
    {
        "Id": 970,
        "SKUNo": "AS1639",
        "CASNO": "5949‐ 29‐ 1",
        "ProductName": "CITRIC ACID AR (MONOHYDRATE) ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181400
    },
    {
        "Id": 971,
        "SKUNo": "AS1640",
        "CASNO": "77‐ 92‐ 9",
        "ProductName": "CITRIC ACID ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181400
    },
    {
        "Id": 972,
        "SKUNo": "AS1640",
        "CASNO": "77‐ 92‐ 9",
        "ProductName": "CITRIC ACID ANHYDROUS LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181400
    },
    {
        "Id": 973,
        "SKUNo": "AS1641",
        "CASNO": "77‐ 92‐ 9",
        "ProductName": "CITRIC ACID ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181400
    },
    {
        "Id": 974,
        "SKUNo": "AS1641",
        "CASNO": "77‐ 92‐ 9",
        "ProductName": "CITRIC ACID ANHYDROUS AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181400
    },
    {
        "Id": 975,
        "SKUNo": "AS1642",
        "CASNO": "8000‐ 34‐ 8",
        "ProductName": "CLOVE OIL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 33012921
    },
    {
        "Id": 976,
        "SKUNo": "AS1642",
        "CASNO": "8000‐ 34‐ 8",
        "ProductName": "CLOVE OIL‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 33012921
    },
    {
        "Id": 977,
        "SKUNo": "AS1643",
        "CASNO": "7440‐ 48‐ 4",
        "ProductName": "COBALT(METAL) POWDER (LAB) 99.5%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81052010
    },
    {
        "Id": 978,
        "SKUNo": "AS1643",
        "CASNO": "7440‐ 48‐ 4",
        "ProductName": "COBALT(METAL) POWDER (LAB) 99.5%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81052010
    },
    {
        "Id": 979,
        "SKUNo": "AS1644",
        "CASNO": "6147‐ 53‐ 1",
        "ProductName": "COBALT(II) ACETATE (TETRAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 980,
        "SKUNo": "AS1644",
        "CASNO": "6147‐ 53‐ 1",
        "ProductName": "COBALT(II) ACETATE (TETRAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 981,
        "SKUNo": "AS1644",
        "CASNO": "6147‐ 53‐ 1",
        "ProductName": "COBALT(II) ACETATE (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 982,
        "SKUNo": "AS1645",
        "CASNO": "6147‐ 53‐ 1",
        "ProductName": "COBALT(II) ACETATE AR (TETRAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 983,
        "SKUNo": "AS1645",
        "CASNO": "6147‐ 53‐ 1",
        "ProductName": "COBALT(II) ACETATE AR (TETRAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 984,
        "SKUNo": "AS1646",
        "CASNO": "12602‐ 23‐ 2",
        "ProductName": "COBALT CARBONATE (BASIC) LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 985,
        "SKUNo": "AS1646",
        "CASNO": "12602‐ 23‐ 2",
        "ProductName": "COBALT CARBONATE (BASIC) LR  ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 986,
        "SKUNo": "AS1646",
        "CASNO": "12602‐ 23‐ 2",
        "ProductName": "COBALT CARBONATE (BASIC) LR   ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 987,
        "SKUNo": "AS1647",
        "CASNO": "7791‐ 13‐ 1",
        "ProductName": "COBALT (II) CHLORIDE LR (HEXAHYDRATE)  ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 988,
        "SKUNo": "AS1647",
        "CASNO": "7791‐ 13‐ 1",
        "ProductName": "COBALT (II) CHLORIDE LR (HEXAHYDRATE)   ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 989,
        "SKUNo": "AS1648",
        "CASNO": "7791‐ 13‐ 1",
        "ProductName": "COBALT (II) CHLORIDE AR (HEXAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 990,
        "SKUNo": "AS1648",
        "CASNO": "7791‐ 13‐ 1",
        "ProductName": "COBALT (II) CHLORIDE AR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 991,
        "SKUNo": "AS1649",
        "CASNO": "10026‐ 22‐ 9",
        "ProductName": "COBALT (II) NITRATE LR (HEXAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 992,
        "SKUNo": "AS1649",
        "CASNO": "10026‐ 22‐ 9",
        "ProductName": "COBALT (II) NITRATE LR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 993,
        "SKUNo": "AS1650",
        "CASNO": "10026‐ 22‐ 9",
        "ProductName": "COBALT (II) NITRATE AR (HEXAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 994,
        "SKUNo": "AS1650",
        "CASNO": "10026‐ 22‐ 9",
        "ProductName": "COBALT (II) NITRATE AR (HEXAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 995,
        "SKUNo": "AS1650",
        "CASNO": "10026‐ 22‐ 9",
        "ProductName": "COBALT (II) NITRATE AR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 996,
        "SKUNo": "AS1651",
        "CASNO": "1308‐ 06‐ 1",
        "ProductName": "COBALT OXIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28220010
    },
    {
        "Id": 997,
        "SKUNo": "AS1651",
        "CASNO": "1308‐ 06‐ 1",
        "ProductName": "COBALT OXIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28220010
    },
    {
        "Id": 998,
        "SKUNo": "AS1652",
        "CASNO": "1308‐ 06‐ 1",
        "ProductName": "COBALT OXIDE AR  (FOR DETERMINATION OF SULPHUR)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28220010
    },
    {
        "Id": 999,
        "SKUNo": "AS1652",
        "CASNO": "1308‐ 06‐ 1",
        "ProductName": "COBALT OXIDE AR  (FOR DETERMINATION OF SULPHUR)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28220010
    },
    {
        "Id": 1000,
        "SKUNo": "AS1653",
        "CASNO": "10026‐ 24‐ 1",
        "ProductName": "COBALT (II) SULPHATE LR (HEPTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1001,
        "SKUNo": "AS1653",
        "CASNO": "10026‐ 24‐ 1",
        "ProductName": "COBALT (II) SULPHATE LR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1002,
        "SKUNo": "AS1654",
        "CASNO": "10026‐ 24‐ 1",
        "ProductName": "COBALT (II) SULPHATE AR (HEPTAHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1003,
        "SKUNo": "AS1654",
        "CASNO": "10026‐ 24‐ 1",
        "ProductName": "COBALT (II) SULPHATE AR (HEPTAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1004,
        "SKUNo": "AS1654",
        "CASNO": "10026‐ 24‐ 1",
        "ProductName": "COBALT (II) SULPHATE AR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1005,
        "SKUNo": "AS1655",
        "CASNO": "64‐ 86‐ 8",
        "ProductName": "COLCHICINE ‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29398000
    },
    {
        "Id": 1006,
        "SKUNo": "AS1655",
        "CASNO": "64‐ 86‐ 8",
        "ProductName": "COLCHICINE ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29398000
    },
    {
        "Id": 1007,
        "SKUNo": "AS1656",
        "CASNO": "573‐ 58‐ 0",
        "ProductName": "CONGO RED INDICATOR FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041421
    },
    {
        "Id": 1008,
        "SKUNo": "AS1656",
        "CASNO": "573‐ 58‐ 0",
        "ProductName": "CONGO RED INDICATOR FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041421
    },
    {
        "Id": 1009,
        "SKUNo": "AS1657",
        "CASNO": "573‐ 58‐ 0",
        "ProductName": "CONGO RED INDICATOR SOLUTION)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041421
    },
    {
        "Id": 1010,
        "SKUNo": "AS1658",
        "CASNO": "6104‐ 59‐ 2",
        "ProductName": "COOMASIE BRILLANT BLUE R 250 FOR GEL ELECTROPHORESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1011,
        "SKUNo": "AS1658",
        "CASNO": "6104‐ 59‐ 2",
        "ProductName": "COOMASIE BRILLANT BLUE R 250 FOR GEL ELECTROPHORESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1012,
        "SKUNo": "AS1659",
        "CASNO": "6104‐ 58‐ 2",
        "ProductName": "COOMASIE BRILLANT BLUE G 250‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1013,
        "SKUNo": "AS1659",
        "CASNO": "6104‐ 58‐ 2",
        "ProductName": "COOMASIE BRILLANT BLUE G 250‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1014,
        "SKUNo": "AS1660",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER FINE POWDER (325 MESH) 99.7% AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 74061000
    },
    {
        "Id": 1015,
        "SKUNo": "AS1660",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER FINE POWDER (325 MESH) 99.7% AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 74061000
    },
    {
        "Id": 1016,
        "SKUNo": "AS1661",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER (METAL) POWDER ELECTROLYTIC(325 MESH)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 74061000
    },
    {
        "Id": 1017,
        "SKUNo": "AS1662",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER (METAL) TURNINGS LR 99.5%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 74061000
    },
    {
        "Id": 1018,
        "SKUNo": "AS1662",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER (METAL) TURNINGS LR 99.5%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 74061000
    },
    {
        "Id": 1019,
        "SKUNo": "AS1663",
        "CASNO": "7440‐ 50‐ 8",
        "ProductName": "COPPER FOIL (0.1MM APPROX) 99%‐500GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 74101100
    },
    {
        "Id": 1020,
        "SKUNo": "AS1664",
        "CASNO": "91‐ 64‐ 5",
        "ProductName": "COUMARIN FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29322010
    },
    {
        "Id": 1021,
        "SKUNo": "AS1664",
        "CASNO": "91‐ 64‐ 5",
        "ProductName": "COUMARIN FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29322010
    },
    {
        "Id": 1022,
        "SKUNo": "AS1665",
        "CASNO": "6020‐ 87‐ 7",
        "ProductName": "CREATINE (MONOHYDRATE) ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1023,
        "SKUNo": "AS1665",
        "CASNO": "6020‐ 87‐ 7",
        "ProductName": "CREATINE (MONOHYDRATE) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1024,
        "SKUNo": "AS1666",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1025,
        "SKUNo": "AS1666",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1026,
        "SKUNo": "AS1666",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29332990
    },
    {
        "Id": 1027,
        "SKUNo": "AS1667",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1028,
        "SKUNo": "AS1667",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1029,
        "SKUNo": "AS1667",
        "CASNO": "60‐ 27‐ 5",
        "ProductName": "CREATININE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29332990
    },
    {
        "Id": 1030,
        "SKUNo": "AS1668",
        "CASNO": "95‐ 48‐ 7",
        "ProductName": "o‐CRESOL FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29071290
    },
    {
        "Id": 1031,
        "SKUNo": "AS1668",
        "CASNO": "95‐ 48‐ 7",
        "ProductName": "o‐CRESOL FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5 LIT",
        "HSNCODE": 29071290
    },
    {
        "Id": 1032,
        "SKUNo": "AS1669",
        "CASNO": "108‐ 39‐ 4",
        "ProductName": "m‐CRESOL FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29071290
    },
    {
        "Id": 1033,
        "SKUNo": "AS1669",
        "CASNO": "108‐ 39‐ 4",
        "ProductName": "m‐CRESOL FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29071290
    },
    {
        "Id": 1034,
        "SKUNo": "AS1670",
        "CASNO": "106‐ 44‐ 5",
        "ProductName": "p‐CRESOL FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29071290
    },
    {
        "Id": 1035,
        "SKUNo": "AS1670",
        "CASNO": "106‐ 44‐ 5",
        "ProductName": "p‐CRESOL FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29071290
    },
    {
        "Id": 1036,
        "SKUNo": "AS1671",
        "CASNO": "596‐ 27‐ 0",
        "ProductName": "o‐CRESOLPHTHALEIN (PH INDICATOR)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1037,
        "SKUNo": "AS1671",
        "CASNO": "596‐ 27‐ 0",
        "ProductName": "o‐CRESOLPHTHALEIN (PH INDICATOR)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1038,
        "SKUNo": "AS1672",
        "CASNO": "2411‐ 89‐ 4",
        "ProductName": "o‐CRESOLPHTHALEIN COMPLEXONE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1039,
        "SKUNo": "AS1672",
        "CASNO": "2411‐ 89‐ 4",
        "ProductName": "o‐CRESOLPHTHALEIN COMPLEXONE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1040,
        "SKUNo": "AS1673",
        "CASNO": "2303‐01‐7",
        "ProductName": "m‐CRESOL PURPLE INDICATOR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1041,
        "SKUNo": "AS1673",
        "CASNO": "2303‐01‐7",
        "ProductName": "m‐CRESOL PURPLE INDICATOR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1042,
        "SKUNo": "AS1674",
        "CASNO": "1733‐ 12‐ 6",
        "ProductName": "CRESOL RED INDICATOR  AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1043,
        "SKUNo": "AS1674",
        "CASNO": "1733‐ 12‐ 6",
        "ProductName": "CRESOL RED INDICATOR  AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1044,
        "SKUNo": "AS1675",
        "CASNO": "1733‐ 12‐ 6",
        "ProductName": "CRESOL RED INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 1045,
        "SKUNo": "AS1676",
        "CASNO": "10510‐ 54‐ 0",
        "ProductName": "CRESYL VIOLET (ACETATE) FOR MICROSCOPY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1046,
        "SKUNo": "AS1676",
        "CASNO": "10510‐ 54‐ 0",
        "ProductName": "CRESYL VIOLET (ACETATE) FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1047,
        "SKUNo": "AS1677",
        "CASNO": "123‐73‐9",
        "ProductName": "CROTONALDEHYDE 98% ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29121910
    },
    {
        "Id": 1048,
        "SKUNo": "AS1677",
        "CASNO": "123‐73‐9",
        "ProductName": "CROTONALDEHYDE 98% ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29121910
    },
    {
        "Id": 1049,
        "SKUNo": "AS1678",
        "CASNO": "17455‐ 13‐ 9",
        "ProductName": "18‐CROWN 6‐ETHER 99%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1050,
        "SKUNo": "AS1678",
        "CASNO": "17455‐ 13‐ 9",
        "ProductName": "18‐CROWN 6‐ETHER 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1051,
        "SKUNo": "AS1678",
        "CASNO": "17455‐ 13‐ 9",
        "ProductName": "18‐CROWN 6‐ETHER 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1052,
        "SKUNo": "AS1679",
        "CASNO": "107‐93‐7",
        "ProductName": "CROTONIC ACID‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29161990
    },
    {
        "Id": 1053,
        "SKUNo": "AS1679",
        "CASNO": "107‐93‐7",
        "ProductName": "CROTONIC ACID‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29161990
    },
    {
        "Id": 1054,
        "SKUNo": "AS1680",
        "CASNO": "15096‐ 52‐ 3",
        "ProductName": "CRYOLITE  (Sodium Hexafluoroaluminate) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28263000
    },
    {
        "Id": 1055,
        "SKUNo": "AS1680",
        "CASNO": "15096‐ 52‐ 3",
        "ProductName": "CRYOLITE  (Sodium Hexafluoroaluminate) ‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28263000
    },
    {
        "Id": 1056,
        "SKUNo": "AS1681",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "CRYSTAL VIOLET FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1057,
        "SKUNo": "AS1681",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "CRYSTAL VIOLET FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1058,
        "SKUNo": "AS1682",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "CRYSTAL VIOLET AR ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1059,
        "SKUNo": "AS1682",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "CRYSTAL VIOLET AR ‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1060,
        "SKUNo": "AS1683",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "CRYSTAL VIOLET STAINING SOLUTION GRAMS)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1061,
        "SKUNo": "AS1684",
        "CASNO": "6046‐ 93‐ 1",
        "ProductName": "CUPRIC ACETATE (MONOHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 1062,
        "SKUNo": "AS1684",
        "CASNO": "6046‐ 93‐ 1",
        "ProductName": "CUPRIC ACETATE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 1063,
        "SKUNo": "AS1685",
        "CASNO": "6046‐ 93‐ 1",
        "ProductName": "CUPRIC ACETATE (MONOHYDRATE) AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 1064,
        "SKUNo": "AS1686",
        "CASNO": "7789‐45‐9",
        "ProductName": "CUPRIC BROMIDE LR ‐ 500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 1065,
        "SKUNo": "AS1687",
        "CASNO": "12069‐ 69‐ 1",
        "ProductName": "CUPRIC CARBONATE (BASIC) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 1066,
        "SKUNo": "AS1688",
        "CASNO": "10125‐ 13‐ 0",
        "ProductName": "CUPRIC CHLORIDE (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 1067,
        "SKUNo": "AS1689",
        "CASNO": "10125‐ 13‐ 0",
        "ProductName": "CUPRIC CHLORIDE AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 1068,
        "SKUNo": "AS1690",
        "CASNO": "10031‐ 43‐ 3",
        "ProductName": "CUPRIC NITRATE LR (TRIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1069,
        "SKUNo": "AS1690",
        "CASNO": "10031‐ 43‐ 3",
        "ProductName": "CUPRIC NITRATE LR (TRIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1070,
        "SKUNo": "AS1691",
        "CASNO": "10031‐ 43‐ 3",
        "ProductName": "CUPRIC NITRATE AR (TRIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1071,
        "SKUNo": "AS1692",
        "CASNO": "1317‐ 38‐ 0",
        "ProductName": "CUPRIC OXIDE POWDER LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28255000
    },
    {
        "Id": 1072,
        "SKUNo": "AS1692",
        "CASNO": "1317‐ 38‐ 0",
        "ProductName": "CUPRIC OXIDE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28255000
    },
    {
        "Id": 1073,
        "SKUNo": "AS1693",
        "CASNO": "1317‐ 38‐ 0",
        "ProductName": "CUPRIC OXIDE POWDER AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28255000
    },
    {
        "Id": 1074,
        "SKUNo": "AS1693",
        "CASNO": "1317‐ 38‐ 0",
        "ProductName": "CUPRIC OXIDE POWDER AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28255000
    },
    {
        "Id": 1075,
        "SKUNo": "AS1694",
        "CASNO": "7758‐ 99‐ 8",
        "ProductName": "CUPRIC SULPHATE LR (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332500
    },
    {
        "Id": 1076,
        "SKUNo": "AS1694",
        "CASNO": "7758‐ 99‐ 8",
        "ProductName": "CUPRIC SULPHATE LR (PENTAHYDRATE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28332500
    },
    {
        "Id": 1077,
        "SKUNo": "AS1694",
        "CASNO": "7758‐ 99‐ 8",
        "ProductName": "CUPRIC SULPHATE LR (PENTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332500
    },
    {
        "Id": 1078,
        "SKUNo": "AS1695",
        "CASNO": "7758‐ 99‐ 8",
        "ProductName": "CUPRIC SULPHATE AR (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332500
    },
    {
        "Id": 1079,
        "SKUNo": "AS1695",
        "CASNO": "7758‐ 99‐ 8",
        "ProductName": "CUPRIC SULPHATE AR (PENTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332500
    },
    {
        "Id": 1080,
        "SKUNo": "AS1696",
        "CASNO": "7758‐ 89‐ 6",
        "ProductName": "CUPROUS CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273940
    },
    {
        "Id": 1081,
        "SKUNo": "AS1696",
        "CASNO": "7758‐ 89‐ 6",
        "ProductName": "CUPROUS CHLORIDE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28273940
    },
    {
        "Id": 1082,
        "SKUNo": "AS1697",
        "CASNO": "7758‐ 89‐ 6",
        "ProductName": "CUPROUS CHLORIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273940
    },
    {
        "Id": 1083,
        "SKUNo": "AS1698",
        "CASNO": "1317‐ 39‐ 1",
        "ProductName": "CUPROUS OXIDE  RED LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28255000
    },
    {
        "Id": 1084,
        "SKUNo": "AS1699",
        "CASNO": "458‐37‐7",
        "ProductName": "CURCUMIN CRYSTALLINE 96%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 1085,
        "SKUNo": "AS1699",
        "CASNO": "458‐37‐7",
        "ProductName": "CURCUMIN CRYSTALLINE 96%‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 1086,
        "SKUNo": "AS1700",
        "CASNO": "107‐ 91‐ 5",
        "ProductName": "CYANOACETAMIDE (Malonamide Nitrile)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29269000
    },
    {
        "Id": 1087,
        "SKUNo": "AS1700",
        "CASNO": "107‐ 91‐ 5",
        "ProductName": "CYANOACETAMIDE (Malonamide Nitrile)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29269000
    },
    {
        "Id": 1088,
        "SKUNo": "AS1701",
        "CASNO": "372‐ 09‐ 8",
        "ProductName": "CYANOACETIC ACID FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29269000
    },
    {
        "Id": 1089,
        "SKUNo": "AS1701",
        "CASNO": "372‐ 09‐ 8",
        "ProductName": "CYANOACETIC ACID FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29269000
    },
    {
        "Id": 1090,
        "SKUNo": "AS1702",
        "CASNO": "68‐ 19‐ 9",
        "ProductName": "CYANOCOBALAMINE FOR BIOCHEMISTRY‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29362610
    },
    {
        "Id": 1091,
        "SKUNo": "AS1702",
        "CASNO": "68‐ 19‐ 9",
        "ProductName": "CYANOCOBALAMINE FOR BIOCHEMISTRY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 1092,
        "SKUNo": "AS1703",
        "CASNO": "506‐ 68‐ 3",
        "ProductName": "CYANOGEN BROMIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 1093,
        "SKUNo": "AS1703",
        "CASNO": "506‐ 68‐ 3",
        "ProductName": "CYANOGEN BROMIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28539090
    },
    {
        "Id": 1094,
        "SKUNo": "AS1704",
        "CASNO": "108‐77‐0",
        "ProductName": "CYANURIC CHLORIDE 98.5%",
        "PACKSIZE": "250GM",
        "HSNCODE": 29336990
    },
    {
        "Id": 1095,
        "SKUNo": "AS1704",
        "CASNO": "108‐77‐0",
        "ProductName": "CYANURIC CHLORIDE 98.5%",
        "PACKSIZE": "1KG",
        "HSNCODE": 29336990
    },
    {
        "Id": 1096,
        "SKUNo": "AS1705",
        "CASNO": "7585‐39‐9",
        "ProductName": "b‐CYCLODEXTRIN‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35051090
    },
    {
        "Id": 1097,
        "SKUNo": "AS1705",
        "CASNO": "7585‐39‐9",
        "ProductName": "b‐CYCLODEXTRIN‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35051090
    },
    {
        "Id": 1098,
        "SKUNo": "AS1706",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29021100
    },
    {
        "Id": 1099,
        "SKUNo": "AS1706",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29021100
    },
    {
        "Id": 1100,
        "SKUNo": "AS1707",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29021100
    },
    {
        "Id": 1101,
        "SKUNo": "AS1707",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29021100
    },
    {
        "Id": 1102,
        "SKUNo": "AS1708",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE HPLC",
        "PACKSIZE": "1 LTR",
        "HSNCODE": 29021100
    },
    {
        "Id": 1103,
        "SKUNo": "AS1709",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "CYCLOHEXANE SPECIALLY DRIED/AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29021100
    },
    {
        "Id": 1104,
        "SKUNo": "AS1710",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29142200
    },
    {
        "Id": 1105,
        "SKUNo": "AS1710",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29142200
    },
    {
        "Id": 1106,
        "SKUNo": "AS1711",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  99% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29142200
    },
    {
        "Id": 1107,
        "SKUNo": "AS1711",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  99% AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29142200
    },
    {
        "Id": 1108,
        "SKUNo": "AS1712",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  GC‐HS ‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29142200
    },
    {
        "Id": 1109,
        "SKUNo": "AS1712",
        "CASNO": "108‐ 94‐ 1",
        "ProductName": "CYCLOHEXANONE  GC‐HS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29142200
    },
    {
        "Id": 1110,
        "SKUNo": "AS1713",
        "CASNO": "108‐ 93‐ 0",
        "ProductName": "CYCLOHEXANOL LR 99%",
        "PACKSIZE": "500ML",
        "HSNCODE": 29061200
    },
    {
        "Id": 1111,
        "SKUNo": "AS1713",
        "CASNO": "108‐ 93‐ 0",
        "ProductName": "CYCLOHEXANOL LR 99%",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29061200
    },
    {
        "Id": 1112,
        "SKUNo": "AS1714",
        "CASNO": "108‐ 93‐ 0",
        "ProductName": "CYCLOHEXANOL AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29061200
    },
    {
        "Id": 1113,
        "SKUNo": "AS1714",
        "CASNO": "108‐ 93‐ 0",
        "ProductName": "CYCLOHEXANOL AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29061200
    },
    {
        "Id": 1114,
        "SKUNo": "AS1715",
        "CASNO": "108‐91‐8",
        "ProductName": "CYCLOHEXYLAMINE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29213010
    },
    {
        "Id": 1115,
        "SKUNo": "AS1715",
        "CASNO": "108‐91‐8",
        "ProductName": "CYCLOHEXYLAMINE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29213010
    },
    {
        "Id": 1116,
        "SKUNo": "AS1716",
        "CASNO": "120‐92‐3",
        "ProductName": "CYCLOPENTANONE LR ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29142990
    },
    {
        "Id": 1117,
        "SKUNo": "AS1716",
        "CASNO": "120‐92‐3",
        "ProductName": "CYCLOPENTANONE LR ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29142990
    },
    {
        "Id": 1118,
        "SKUNo": "AS1717",
        "CASNO": "156‐ 57‐ 0",
        "ProductName": "CYSTEAMINE HYDROCHLORIDE for synthesis ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 1119,
        "SKUNo": "AS1717",
        "CASNO": "156‐ 57‐ 0",
        "ProductName": "CYSTEAMINE HYDROCHLORIDE for synthesis ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 1120,
        "SKUNo": "AS1718",
        "CASNO": "52‐ 90‐ 4",
        "ProductName": "L‐CYSTEINE FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1121,
        "SKUNo": "AS1718",
        "CASNO": "52‐ 90‐ 4",
        "ProductName": "L‐CYSTEINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1122,
        "SKUNo": "AS1719",
        "CASNO": "7048‐04‐6",
        "ProductName": "L‐CYSTEINE HYDROCHLORIDE (MONOHYDRATE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1123,
        "SKUNo": "AS1719",
        "CASNO": "7048‐04‐6",
        "ProductName": "L‐CYSTEINE HYDROCHLORIDE (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1124,
        "SKUNo": "AS1719",
        "CASNO": "7048‐04‐6",
        "ProductName": "L‐CYSTEINE HYDROCHLORIDE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1125,
        "SKUNo": "AS1720",
        "CASNO": "56‐ 89‐ 3",
        "ProductName": "L‐CYSTINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1126,
        "SKUNo": "AS1720",
        "CASNO": "56‐ 89‐ 3",
        "ProductName": "L‐CYSTINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309040
    },
    {
        "Id": 1127,
        "SKUNo": "AS1721",
        "CASNO": "71‐ 30‐ 7",
        "ProductName": "CYTOSINE FOR BIOCHEMISTRY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1128,
        "SKUNo": "AS1721",
        "CASNO": "71‐ 30‐ 7",
        "ProductName": "CYTOSINE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1129,
        "SKUNo": "AS1721",
        "CASNO": "71‐ 30‐ 7",
        "ProductName": "CYTOSINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1130,
        "SKUNo": "AS1722",
        "CASNO": "7440‐ 44‐ 0",
        "ProductName": "DARCO G 60‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38029019
    },
    {
        "Id": 1131,
        "SKUNo": "AS1723",
        "CASNO": "9013‐ 34‐ 7",
        "ProductName": "DEAE CELLULOSE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 39140090
    },
    {
        "Id": 1132,
        "SKUNo": "AS1723",
        "CASNO": "9013‐ 34‐ 7",
        "ProductName": "DEAE CELLULOSE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 39140090
    },
    {
        "Id": 1133,
        "SKUNo": "AS1723",
        "CASNO": "9013‐ 34‐ 7",
        "ProductName": "DEAE CELLULOSE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39140090
    },
    {
        "Id": 1134,
        "SKUNo": "AS1724",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR(FOR HPLC)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1135,
        "SKUNo": "AS1724",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR(FOR HPLC)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1136,
        "SKUNo": "AS1724",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR(FOR HPLC)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1137,
        "SKUNo": "AS1725",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR (MONOHYD)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1138,
        "SKUNo": "AS1725",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR (MONOHYD)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1139,
        "SKUNo": "AS1725",
        "CASNO": "13419‐ 61‐ 9",
        "ProductName": "1‐DECANE SULPHONIC ACID SODIUM SALT AR (MONOHYD)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1140,
        "SKUNo": "AS1726",
        "CASNO": "9007‐ 49‐ 2",
        "ProductName": "DEOXYRIBONUCLEIC ACID SODIUM SALT‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 1141,
        "SKUNo": "AS1726",
        "CASNO": "9007‐ 49‐ 2",
        "ProductName": "DEOXYRIBONUCLEIC ACID SODIUM SALT‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 1142,
        "SKUNo": "AS1727",
        "CASNO": "8049‐11‐4",
        "ProductName": "DEVARDAS ALLOY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 74032900
    },
    {
        "Id": 1143,
        "SKUNo": "AS1727",
        "CASNO": "8049‐11‐4",
        "ProductName": "DEVARDAS ALLOY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 74032900
    },
    {
        "Id": 1144,
        "SKUNo": "AS1728",
        "CASNO": "8049‐11‐4",
        "ProductName": "DEVARDA’S ALLOY POWDER AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 74032900
    },
    {
        "Id": 1145,
        "SKUNo": "AS1727",
        "CASNO": "8049‐11‐4",
        "ProductName": "DEVARDA’S ALLOY POWDER AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 74032900
    },
    {
        "Id": 1146,
        "SKUNo": "AS1729",
        "CASNO": "9004‐ 53‐ 9",
        "ProductName": "DEXTRINE WHITE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35051090
    },
    {
        "Id": 1147,
        "SKUNo": "AS1730",
        "CASNO": "50‐ 99‐ 7",
        "ProductName": "DEXTROSE ANHYDROUS PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17023031
    },
    {
        "Id": 1148,
        "SKUNo": "AS1730",
        "CASNO": "50‐ 99‐ 7",
        "ProductName": "DEXTROSE ANHYDROUS PURIFIED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 17023031
    },
    {
        "Id": 1149,
        "SKUNo": "AS1730",
        "CASNO": "50‐ 99‐ 7",
        "ProductName": "DEXTROSE ANHYDROUS PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 17023031
    },
    {
        "Id": 1150,
        "SKUNo": "AS1731",
        "CASNO": "50‐ 99‐ 7",
        "ProductName": "DEXTROSE  ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17023031
    },
    {
        "Id": 1151,
        "SKUNo": "AS1731",
        "CASNO": "50‐ 99‐ 7",
        "ProductName": "DEXTROSE  ANHYDROUS AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 17023031
    },
    {
        "Id": 1152,
        "SKUNo": "AS1732",
        "CASNO": "3996‐10‐1",
        "ProductName": "DEXTROSE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17023031
    },
    {
        "Id": 1153,
        "SKUNo": "AS1732",
        "CASNO": "3996‐10‐1",
        "ProductName": "DEXTROSE (MONOHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17023031
    },
    {
        "Id": 1154,
        "SKUNo": "AS1733",
        "CASNO": "123‐42‐2",
        "ProductName": "DIACETONE ALCOHOL98% FOR SYNTHESIS",
        "PACKSIZE": "500ML",
        "HSNCODE": 29144000
    },
    {
        "Id": 1155,
        "SKUNo": "AS1733",
        "CASNO": "123‐42‐2",
        "ProductName": "DIACETONE ALCOHOL98% FOR SYNTHESIS",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29144000
    },
    {
        "Id": 1156,
        "SKUNo": "AS1734",
        "CASNO": "431‐03‐8",
        "ProductName": "DIACETYL FOR SYNTHESIS 98%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29141990
    },
    {
        "Id": 1157,
        "SKUNo": "AS1735",
        "CASNO": "57‐ 71 ‐6",
        "ProductName": "DIACETYL MONOXIME AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1158,
        "SKUNo": "AS1735",
        "CASNO": "57‐ 71 ‐6",
        "ProductName": "DIACETYL MONOXIME AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1159,
        "SKUNo": "AS1735",
        "CASNO": "57‐ 71 ‐6",
        "ProductName": "DIACETYL MONOXIME AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1160,
        "SKUNo": "AS1736",
        "CASNO": "596‐ 09‐ 8",
        "ProductName": "DIACETYL FLUORESCEIN‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 1161,
        "SKUNo": "AS1737",
        "CASNO": "125572‐ 95‐ 4",
        "ProductName": "trans‐1,2‐DIAMINOCYCLOHEXANE‐N,N,N’,N’‐TETRAACETIC ACID ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29213090
    },
    {
        "Id": 1162,
        "SKUNo": "AS1737",
        "CASNO": "125572‐ 95‐ 4",
        "ProductName": "trans‐1,2‐DIAMINOCYCLOHEXANE‐N,N,N’,N’‐TETRAACETIC ACID ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29213090
    },
    {
        "Id": 1163,
        "SKUNo": "AS1738",
        "CASNO": "125572‐ 95‐ 4",
        "ProductName": "trans‐1,2‐DIAMINOCYCLOHEXANE N,N,N’,N’‐TETRAACETIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29213090
    },
    {
        "Id": 1164,
        "SKUNo": "AS1738",
        "CASNO": "125572‐ 95‐ 4",
        "ProductName": "trans‐1,2‐DIAMINOCYCLOHEXANE N,N,N’,N’‐TETRAACETIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29213090
    },
    {
        "Id": 1165,
        "SKUNo": "AS1739",
        "CASNO": "119‐90‐4",
        "ProductName": "o‐DIANISIDINE LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1166,
        "SKUNo": "AS1739",
        "CASNO": "119‐90‐4",
        "ProductName": "o‐DIANISIDINE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1167,
        "SKUNo": "AS1739",
        "CASNO": "119‐90‐4",
        "ProductName": "o‐DIANISIDINE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1168,
        "SKUNo": "AS1740",
        "CASNO": "9000‐ 92‐ 4",
        "ProductName": "DIASTASE(FUNGAL)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079062
    },
    {
        "Id": 1169,
        "SKUNo": "AS1740",
        "CASNO": "9000‐ 92‐ 4",
        "ProductName": "DIASTASE(FUNGAL)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35079062
    },
    {
        "Id": 1170,
        "SKUNo": "AS1741",
        "CASNO": "        ",
        "ProductName": "DIAZO REAGENT A For bilirubin determination‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1171,
        "SKUNo": "AS1742",
        "CASNO": "          ",
        "ProductName": "DIAZO REAGENT B For bilirubin determination‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1172,
        "SKUNo": "AS1743",
        "CASNO": "2435‐76‐9",
        "ProductName": "5‐diazo uracil for biochemistry‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1173,
        "SKUNo": "AS1744",
        "CASNO": "280‐ 57‐ 9",
        "ProductName": "1,4‐DIAZABICYCLO(2,2,2) OCTANE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1174,
        "SKUNo": "AS1744",
        "CASNO": "280‐ 57‐ 9",
        "ProductName": "1,4‐DIAZABICYCLO(2,2,2) OCTANE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1175,
        "SKUNo": "AS1745",
        "CASNO": "17026‐ 42‐ 5",
        "ProductName": "DIBENZOYL‐D‐TARTARIC ACID ANHYDROUS  FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 1176,
        "SKUNo": "AS1745",
        "CASNO": "17026‐ 42‐ 5",
        "ProductName": "DIBENZOYL‐D‐TARTARIC ACID ANHYDROUS  FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 1177,
        "SKUNo": "AS1746",
        "CASNO": "106‐ 93‐ 4",
        "ProductName": "1,2‐DIBROMOETHANE for Synthesis (ethylene dibromide)",
        "PACKSIZE": "500ML",
        "HSNCODE": 29033100
    },
    {
        "Id": 1178,
        "SKUNo": "AS1746",
        "CASNO": "106‐ 93‐ 4",
        "ProductName": "1,2‐DIBROMOETHANE for Synthesis (ethylene dibromide)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29033100
    },
    {
        "Id": 1179,
        "SKUNo": "AS1747",
        "CASNO": "111‐ 92‐ 2",
        "ProductName": "DI‐N‐BUTYLAMINE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1180,
        "SKUNo": "AS1747",
        "CASNO": "111‐ 92‐ 2",
        "ProductName": "DI‐N‐BUTYLAMINE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1181,
        "SKUNo": "AS1748",
        "CASNO": "142‐96‐1",
        "ProductName": "DIBUTYL ETHER FOR SYNTHESIS",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091900
    },
    {
        "Id": 1182,
        "SKUNo": "AS1748",
        "CASNO": "142‐96‐1",
        "ProductName": "DIBUTYL ETHER FOR SYNTHESIS",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 1183,
        "SKUNo": "AS1749",
        "CASNO": "105‐ 76‐ 0",
        "ProductName": "DIBUTYL MALEATE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091900
    },
    {
        "Id": 1184,
        "SKUNo": "AS1749",
        "CASNO": "105‐ 76‐ 0",
        "ProductName": "DIBUTYL MALEATE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 1185,
        "SKUNo": "AS1750",
        "CASNO": "84‐ 74‐ 2",
        "ProductName": "DIBUTYL PHTHALATE FOR SYNTHESIS 99%  (DBP)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29173910
    },
    {
        "Id": 1186,
        "SKUNo": "AS1750",
        "CASNO": "84‐ 74‐ 2",
        "ProductName": "DIBUTYL PHTHALATE FOR SYNTHESIS 99%  (DBP)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29173910
    },
    {
        "Id": 1187,
        "SKUNo": "AS1751",
        "CASNO": "24424‐ 99‐ 5",
        "ProductName": "DI‐tert‐BUTYLDICARBONATE‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29209099
    },
    {
        "Id": 1188,
        "SKUNo": "AS1751",
        "CASNO": "24424‐ 99‐ 5",
        "ProductName": "DI‐tert‐BUTYLDICARBONATE ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29209099
    },
    {
        "Id": 1189,
        "SKUNo": "AS1752",
        "CASNO": "95‐ 50‐ 1",
        "ProductName": "1,2‐DICHLOROBENZENE LR",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039120
    },
    {
        "Id": 1190,
        "SKUNo": "AS1752",
        "CASNO": "95‐ 50‐ 1",
        "ProductName": "1,2‐DICHLOROBENZENE LR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039120
    },
    {
        "Id": 1191,
        "SKUNo": "AS1753",
        "CASNO": "95‐ 50‐ 1",
        "ProductName": "1,2‐DICHLOROBENZENE AR",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039120
    },
    {
        "Id": 1192,
        "SKUNo": "AS1753",
        "CASNO": "95‐ 50‐ 1",
        "ProductName": "1,2‐DICHLOROBENZENE AR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039120
    },
    {
        "Id": 1193,
        "SKUNo": "AS1754",
        "CASNO": "541‐ 73‐ 1",
        "ProductName": "1,3‐DICHLOROBENZENE 98% (m‐DICHLOROBENZENE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29039120
    },
    {
        "Id": 1194,
        "SKUNo": "AS1754",
        "CASNO": "541‐ 73‐ 1",
        "ProductName": "1,3‐DICHLOROBENZENE 98% (m‐DICHLOROBENZENE)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29039120
    },
    {
        "Id": 1195,
        "SKUNo": "AS1755",
        "CASNO": "106‐ 46‐ 7",
        "ProductName": "1,4‐ DICHLOROBENZENE FOR SYNTHESIS 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29039130
    },
    {
        "Id": 1196,
        "SKUNo": "AS1756",
        "CASNO": "50‐84‐0",
        "ProductName": "2,4‐DICHLOROBENZOIC ACID FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 1197,
        "SKUNo": "AS1756",
        "CASNO": "50‐84‐0",
        "ProductName": "2,4‐DICHLOROBENZOIC ACID FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 1198,
        "SKUNo": "AS1757",
        "CASNO": "107‐ 06‐ 2",
        "ProductName": "1,2‐DICHLOROETHANE LR 98% (EDC) (ETHYLENE CHLORIDE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031500
    },
    {
        "Id": 1199,
        "SKUNo": "AS1757",
        "CASNO": "107‐ 06‐ 2",
        "ProductName": "1,2‐DICHLOROETHANE LR 98% (EDC) (ETHYLENE CHLORIDE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031500
    },
    {
        "Id": 1200,
        "SKUNo": "AS1758",
        "CASNO": "107‐ 06‐ 2",
        "ProductName": "1,2‐DICHLOROETHANE AR 99% (EDC) (ETHYLENE CHLORIDE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031500
    },
    {
        "Id": 1201,
        "SKUNo": "AS1758",
        "CASNO": "107‐ 06‐ 2",
        "ProductName": "1,2‐DICHLOROETHANE AR 99% (EDC) (ETHYLENE CHLORIDE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031500
    },
    {
        "Id": 1202,
        "SKUNo": "AS1759",
        "CASNO": "76‐ 54‐ 0",
        "ProductName": "2,7‐DICHLORO FLUOROSCEIN AR (absorption indicator)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1203,
        "SKUNo": "AS1760",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE LR (Methylene Chloride)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031200
    },
    {
        "Id": 1204,
        "SKUNo": "AS1760",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE LR (Methylene Chloride)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1205,
        "SKUNo": "AS1761",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE AR (Methylene Chloride)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031200
    },
    {
        "Id": 1206,
        "SKUNo": "AS1761",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE AR (Methylene Chloride)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1207,
        "SKUNo": "AS1762",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE SPECIALLY DRIED AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031200
    },
    {
        "Id": 1208,
        "SKUNo": "AS1762",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE SPECIALLY DRIED AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1209,
        "SKUNo": "AS1763",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE 99.8% FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1210,
        "SKUNo": "AS1763",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE 99.8% FOR HPLC‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1211,
        "SKUNo": "AS1764",
        "CASNO": "75‐ 09‐ 2",
        "ProductName": "DICHLOROMETHANE 99.9% GC GRADE‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29031200
    },
    {
        "Id": 1212,
        "SKUNo": "AS1765",
        "CASNO": "120‐83‐2",
        "ProductName": "2,4 ‐DICHLOROPHENOL FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 1213,
        "SKUNo": "AS1765",
        "CASNO": "120‐83‐2",
        "ProductName": "2,4 ‐DICHLOROPHENOL FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 1214,
        "SKUNo": "AS1766",
        "CASNO": "101‐ 38‐ 2",
        "ProductName": "2,6‐DICHLOROQUINONE ‐4‐CHLORIMIDE  AR(Gibb’s reagent)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1215,
        "SKUNo": "AS1766",
        "CASNO": "101‐ 38‐ 2",
        "ProductName": "2,6‐DICHLOROQUINONE ‐4‐CHLORIMIDE  AR(Gibb’s reagent)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1216,
        "SKUNo": "AS1767",
        "CASNO": "461‐ 58‐ 5",
        "ProductName": "DICYANDIAMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29262000
    },
    {
        "Id": 1217,
        "SKUNo": "AS1768",
        "CASNO": "6283‐ 63‐ 2",
        "ProductName": "N,N‐DIETHYL‐p‐PHENYLENEDIAMINE SULPHATE  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29215190
    },
    {
        "Id": 1218,
        "SKUNo": "AS1769",
        "CASNO": "620‐ 45‐ 1",
        "ProductName": "2,6‐DICHLOROPHENOL INDOPHENOL SODIUM SALT AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1219,
        "SKUNo": "AS1769",
        "CASNO": "620‐ 45‐ 1",
        "ProductName": "2,6‐DICHLOROPHENOL INDOPHENOL SODIUM SALT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1220,
        "SKUNo": "AS1770",
        "CASNO": "101‐ 83‐ 7",
        "ProductName": "DICYCLOHEXYLAMINE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29213090
    },
    {
        "Id": 1221,
        "SKUNo": "AS1770",
        "CASNO": "101‐ 83‐ 7",
        "ProductName": "DICYCLOHEXYLAMINE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29213090
    },
    {
        "Id": 1222,
        "SKUNo": "AS1771",
        "CASNO": "538‐ 75‐ 0",
        "ProductName": "N,N’‐DICYCLOHEXYLCARBODIMIDE (DCC) 99% MIN FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1223,
        "SKUNo": "AS1771",
        "CASNO": "538‐ 75‐ 0",
        "ProductName": "N,N’‐DICYCLOHEXYLCARBODIMIDE (DCC) 99% MIN FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1224,
        "SKUNo": "AS1772",
        "CASNO": "111‐ 42‐ 2",
        "ProductName": "DIETHANOLAMINE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1225,
        "SKUNo": "AS1772",
        "CASNO": "111‐ 42‐ 2",
        "ProductName": "DIETHANOLAMINE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1226,
        "SKUNo": "AS1773",
        "CASNO": "111‐ 42‐ 2",
        "ProductName": "DIETHANOLAMINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1227,
        "SKUNo": "AS1773",
        "CASNO": "111‐ 42‐ 2",
        "ProductName": "DIETHANOLAMINE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1228,
        "SKUNo": "AS1774",
        "CASNO": "109‐ 89‐ 7",
        "ProductName": "DIETHYLAMINE LR 99.5 % ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1229,
        "SKUNo": "AS1774",
        "CASNO": "109‐ 89‐ 7",
        "ProductName": "DIETHYLAMINE LR 99.5 % ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1230,
        "SKUNo": "AS1775",
        "CASNO": "660‐68‐4",
        "ProductName": "DIETHYL AMINE HYDROCHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 1231,
        "SKUNo": "AS1776",
        "CASNO": "91‐66‐7",
        "ProductName": "N,N‐DIETHYLANILINE LR 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214223
    },
    {
        "Id": 1232,
        "SKUNo": "AS1776",
        "CASNO": "91‐66‐7",
        "ProductName": "N,N‐DIETHYLANILINE LR 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214223
    },
    {
        "Id": 1233,
        "SKUNo": "AS1777",
        "CASNO": "105‐ 58‐ 8",
        "ProductName": "DIETHYL CARBONATE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29209099
    },
    {
        "Id": 1234,
        "SKUNo": "AS1777",
        "CASNO": "105‐ 58‐ 8",
        "ProductName": "DIETHYL CARBONATE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29209099
    },
    {
        "Id": 1235,
        "SKUNo": "AS1778",
        "CASNO": "60‐ 29‐ 7",
        "ProductName": "DIETHYL ETHER (STABILISED) LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091100
    },
    {
        "Id": 1236,
        "SKUNo": "AS1778",
        "CASNO": "60‐ 29‐ 7",
        "ProductName": "DIETHYL ETHER (STABILISED) LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091100
    },
    {
        "Id": 1237,
        "SKUNo": "AS1779",
        "CASNO": "60‐ 29‐ 7",
        "ProductName": "DIETHYL ETHER AR (STABILISED)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091100
    },
    {
        "Id": 1238,
        "SKUNo": "AS1779",
        "CASNO": "60‐ 29‐ 7",
        "ProductName": "DIETHYL ETHER AR (STABILISED)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091100
    },
    {
        "Id": 1239,
        "SKUNo": "AS1780",
        "CASNO": "60‐ 29‐ 7",
        "ProductName": "DIETHYL ETHER SPECIALLY DRIED/AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091100
    },
    {
        "Id": 1240,
        "SKUNo": "AS1781",
        "CASNO": "111‐ 46‐ 6",
        "ProductName": "DIETHYLENE GLYCOL LR (Digol)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094100
    },
    {
        "Id": 1241,
        "SKUNo": "AS1781",
        "CASNO": "111‐ 46‐ 6",
        "ProductName": "DIETHYLENE GLYCOL LR (Digol)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094100
    },
    {
        "Id": 1242,
        "SKUNo": "AS1782",
        "CASNO": "111‐ 46‐ 6",
        "ProductName": "DIETHYLENE GLYCOL AR (Digol)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094100
    },
    {
        "Id": 1243,
        "SKUNo": "AS1782",
        "CASNO": "111‐ 46‐ 6",
        "ProductName": "DIETHYLENE GLYCOL AR (Digol)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094100
    },
    {
        "Id": 1244,
        "SKUNo": "AS1783",
        "CASNO": "112‐ 34‐ 5",
        "ProductName": "DIETHYLENE GLYCOL MONOBUTYL ETHER LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094300
    },
    {
        "Id": 1245,
        "SKUNo": "AS1783",
        "CASNO": "112‐ 34‐ 5",
        "ProductName": "DIETHYLENE GLYCOL MONOBUTYL ETHER LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094300
    },
    {
        "Id": 1246,
        "SKUNo": "AS1784",
        "CASNO": "111‐ 90‐ 0",
        "ProductName": "DIETHYLENE GLYCOL MONOETHYL ETHER LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094900
    },
    {
        "Id": 1247,
        "SKUNo": "AS1784",
        "CASNO": "111‐ 90‐ 0",
        "ProductName": "DIETHYLENE GLYCOL MONOETHYL ETHER LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094900
    },
    {
        "Id": 1248,
        "SKUNo": "AS1785",
        "CASNO": "105‐53‐3",
        "ProductName": "DIETHYL MALONATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29171970
    },
    {
        "Id": 1249,
        "SKUNo": "AS1785",
        "CASNO": "105‐53‐3",
        "ProductName": "DIETHYL MALONATE FOR SYNTHESIS 98%",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29171970
    },
    {
        "Id": 1250,
        "SKUNo": "AS1786",
        "CASNO": "84‐ 66‐ 2",
        "ProductName": "DIETHYL PHTHALATE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29173990
    },
    {
        "Id": 1251,
        "SKUNo": "AS1786",
        "CASNO": "84‐ 66‐ 2",
        "ProductName": "DIETHYL PHTHALATE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29173990
    },
    {
        "Id": 1252,
        "SKUNo": "AS1787",
        "CASNO": "67‐ 43‐ 6",
        "ProductName": "DIETHYLENE TRIAMINE PENTA ACETIC ACID LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1253,
        "SKUNo": "AS1787",
        "CASNO": "67‐ 43‐ 6",
        "ProductName": "DIETHYLENE TRIAMINE PENTA ACETIC ACID LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1254,
        "SKUNo": "AS1788",
        "CASNO": "67‐ 43‐ 6",
        "ProductName": "DIETHYLENE TRIAMINE PENTA ACETIC ACID AR 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1255,
        "SKUNo": "AS1788",
        "CASNO": "67‐ 43‐ 6",
        "ProductName": "DIETHYLENE TRIAMINE PENTA ACETIC ACID AR 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1256,
        "SKUNo": "AS1789",
        "CASNO": "11024‐ 24‐ 1",
        "ProductName": "DIGITONIN AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 1257,
        "SKUNo": "AS1790",
        "CASNO": "108‐18‐9",
        "ProductName": "DIISOPROPYLAMINE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1258,
        "SKUNo": "AS1790",
        "CASNO": "108‐18‐9",
        "ProductName": "DIISOPROPYLAMINE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1259,
        "SKUNo": "AS1791",
        "CASNO": "108‐ 20‐ 3",
        "ProductName": "Di‐iso‐PROPYLETHER LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091900
    },
    {
        "Id": 1260,
        "SKUNo": "AS1791",
        "CASNO": "108‐ 20‐ 3",
        "ProductName": "Di‐iso‐PROPYLETHER LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 1261,
        "SKUNo": "AS1792",
        "CASNO": "108‐ 20‐ 3",
        "ProductName": "Di‐iso‐PROPYLETHER AR 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29091900
    },
    {
        "Id": 1262,
        "SKUNo": "AS1792",
        "CASNO": "108‐ 20‐ 3",
        "ProductName": "Di‐iso‐PROPYLETHER AR 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29091900
    },
    {
        "Id": 1263,
        "SKUNo": "AS1793",
        "CASNO": "75‐ 11‐ 6",
        "ProductName": "DIIODOMETHANE FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29033990
    },
    {
        "Id": 1264,
        "SKUNo": "AS1794",
        "CASNO": "7087‐ 68‐ 5",
        "ProductName": "N,N‐DIISOPROPYL EHTHYLAMINE FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1265,
        "SKUNo": "AS1794",
        "CASNO": "7087‐ 68‐ 5",
        "ProductName": "N,N‐DIISOPROPYL EHTHYLAMINE  FOR SYNTHESIS‐500ML‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1266,
        "SKUNo": "AS1794",
        "CASNO": "7087‐ 68‐ 5",
        "ProductName": "N,N‐DIISOPROPYL EHTHYLAMINE  FOR SYNTHESIS‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1267,
        "SKUNo": "AS1795",
        "CASNO": "126‐ 81‐ 8",
        "ProductName": "DIMEDONE AR",
        "PACKSIZE": "25GM",
        "HSNCODE": 29142990
    },
    {
        "Id": 1268,
        "SKUNo": "AS1795",
        "CASNO": "126‐ 81‐ 8",
        "ProductName": "DIMEDONE AR",
        "PACKSIZE": "100GM",
        "HSNCODE": 29142990
    },
    {
        "Id": 1269,
        "SKUNo": "AS1796",
        "CASNO": "77‐ 76‐ 9",
        "ProductName": "2,2‐DIMETHOXY PROPANE for Synthesis‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29110010
    },
    {
        "Id": 1270,
        "SKUNo": "AS1796",
        "CASNO": "77‐ 76‐ 9",
        "ProductName": "2,2‐DIMETHOXY PROPANE for Synthesis‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29110010
    },
    {
        "Id": 1271,
        "SKUNo": "AS1797",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N‐N‐DIMETHYLACETAMIDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29241900
    },
    {
        "Id": 1272,
        "SKUNo": "AS1797",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N‐N‐DIMETHYLACETAMIDE LR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29241900
    },
    {
        "Id": 1273,
        "SKUNo": "AS1798",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N‐N‐DIMETHYLACETAMIDE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29241900
    },
    {
        "Id": 1274,
        "SKUNo": "AS1798",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N‐N‐DIMETHYLACETAMIDE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29241900
    },
    {
        "Id": 1275,
        "SKUNo": "AS1799",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N,N‐DIMETHYL ACETAMIDE 99.8% GC‐HS‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29241900
    },
    {
        "Id": 1276,
        "SKUNo": "AS1799",
        "CASNO": "127‐ 19‐ 5",
        "ProductName": "N,N‐DIMETHYL ACETAMIDE 99.8% GC‐HS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29241900
    },
    {
        "Id": 1277,
        "SKUNo": "AS1800",
        "CASNO": "124‐ 40‐ 3",
        "ProductName": "DIMETHYLAMINE SOLUTION 40% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1278,
        "SKUNo": "AS1800",
        "CASNO": "124‐ 40‐ 3",
        "ProductName": "DIMETHYLAMINE SOLUTION 40% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1279,
        "SKUNo": "AS1801",
        "CASNO": "62778‐ 12‐ 5",
        "ProductName": "N,N,‐DIMETHYL PARAPHENYLANINEDIAMINE HEMI OXALATE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29215190
    },
    {
        "Id": 1280,
        "SKUNo": "AS1801",
        "CASNO": "62778‐ 12‐ 5",
        "ProductName": "N,N,‐DIMETHYL PARAPHENYLANINEDIAMINE HEMI OXALATE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29215190
    },
    {
        "Id": 1281,
        "SKUNo": "AS1802",
        "CASNO": "100‐ 10‐ 7",
        "ProductName": "p‐DIMETHYL AMINO BENZALDEHYDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1282,
        "SKUNo": "AS1802",
        "CASNO": "100‐ 10‐ 7",
        "ProductName": "p‐DIMETHYL AMINO BENZALDEHYDE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29222990
    },
    {
        "Id": 1283,
        "SKUNo": "AS1803",
        "CASNO": "100‐ 10‐ 7",
        "ProductName": "p‐DIMETHYL AMINO BENZALDEHYDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1284,
        "SKUNo": "AS1803",
        "CASNO": "100‐ 10‐ 7",
        "ProductName": "p‐DIMETHYL AMINO BENZALDEHYDE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29222990
    },
    {
        "Id": 1285,
        "SKUNo": "AS1804",
        "CASNO": "6203‐ 18‐ 5",
        "ProductName": "p‐DIMETHYL AMINO CINNAMALDEHYDE AR ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1286,
        "SKUNo": "AS1804",
        "CASNO": "6203‐ 18‐ 5",
        "ProductName": "p‐DIMETHYL AMINO CINNAMALDEHYDE AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1287,
        "SKUNo": "AS1805",
        "CASNO": "1122‐ 58‐ 3",
        "ProductName": "4‐(DIMETHYLAMINO) PYRIDINE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29333919
    },
    {
        "Id": 1288,
        "SKUNo": "AS1805",
        "CASNO": "1122‐ 58‐ 3",
        "ProductName": "4‐DIMETHYLAMINO PYRIDINE (DMAP) FOR SYENTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333919
    },
    {
        "Id": 1289,
        "SKUNo": "AS1805",
        "CASNO": "1122‐ 58‐ 3",
        "ProductName": "4‐(DIMETHYLAMINO) PYRIDINE FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29333919
    },
    {
        "Id": 1290,
        "SKUNo": "AS1806",
        "CASNO": "506‐ 59‐ 2",
        "ProductName": "DIMETHYL AMMONIUM CHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29211190
    },
    {
        "Id": 1291,
        "SKUNo": "AS1807",
        "CASNO": "121‐ 69‐ 7",
        "ProductName": "N,N‐DIMETHYL ANILINE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214223
    },
    {
        "Id": 1292,
        "SKUNo": "AS1807",
        "CASNO": "121‐ 69‐ 7",
        "ProductName": "N,N‐DIMETHYL ANILINE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214223
    },
    {
        "Id": 1293,
        "SKUNo": "AS1808",
        "CASNO": "121‐ 69‐ 7",
        "ProductName": "N,N‐DIMETHYL ANILINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214223
    },
    {
        "Id": 1294,
        "SKUNo": "AS1808",
        "CASNO": "121‐ 69‐ 7",
        "ProductName": "N,N‐DIMETHYL ANILINE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214223
    },
    {
        "Id": 1295,
        "SKUNo": "AS1809",
        "CASNO": "111‐ 96‐ 6",
        "ProductName": "DIMETHYL DIGOL FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094900
    },
    {
        "Id": 1296,
        "SKUNo": "AS1809",
        "CASNO": "111‐ 96‐ 6",
        "ProductName": "DIMETHYL DIGOL FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094900
    },
    {
        "Id": 1297,
        "SKUNo": "AS1810",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYLFORMAMIDE LR (Formdimethylamide)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211110
    },
    {
        "Id": 1298,
        "SKUNo": "AS1810",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYLFORMAMIDE LR (Formdimethylamide)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211110
    },
    {
        "Id": 1299,
        "SKUNo": "AS1811",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYLFORMAMIDE AR (Formdimethylamide)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211110
    },
    {
        "Id": 1300,
        "SKUNo": "AS1811",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYLFORMAMIDE AR (Formdimethylamide)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211110
    },
    {
        "Id": 1301,
        "SKUNo": "AS1812",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "N,N‐DIMETHYL FORMAMIDE 99% GC‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29242990
    },
    {
        "Id": 1302,
        "SKUNo": "AS1812",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "N,N‐DIMETHYL FORMAMIDE 99% GC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29242990
    },
    {
        "Id": 1303,
        "SKUNo": "AS1812",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "N,N‐DIMETHYL FORMAMIDE 99.8% GC‐HS‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29242990
    },
    {
        "Id": 1304,
        "SKUNo": "AS1812",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "N,N‐DIMETHYL FORMAMIDE 99.8% GC‐HS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29242990
    },
    {
        "Id": 1305,
        "SKUNo": "AS1813",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYLFORMAMIDE FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29211110
    },
    {
        "Id": 1306,
        "SKUNo": "AS1814",
        "CASNO": "68‐ 12‐ 2",
        "ProductName": "DIMETHYL FORMAMIDE SPECIALLY DRIED AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211110
    },
    {
        "Id": 1307,
        "SKUNo": "AS1815",
        "CASNO": "95‐ 45‐ 4",
        "ProductName": "DIMETHYL GLYOXIME LR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1308,
        "SKUNo": "AS1815",
        "CASNO": "95‐ 45‐ 4",
        "ProductName": "DIMETHYL GLYOXIME LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1309,
        "SKUNo": "AS1816",
        "CASNO": "95‐ 45‐ 4",
        "ProductName": "DIMETHYL GLYOXIME AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1310,
        "SKUNo": "AS1816",
        "CASNO": "95‐ 45‐ 4",
        "ProductName": "DIMETHYL GLYOXIME AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1311,
        "SKUNo": "AS1817",
        "CASNO": "25952‐53‐8",
        "ProductName": "1‐(3‐DIMETHYLAMINOPROPYL)‐3‐ETHYL CARBODIIMIDE HYDROCHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1312,
        "SKUNo": "AS1817",
        "CASNO": "25952‐53‐8",
        "ProductName": "1‐(3‐DIMETHYLAMINOPROPYL)‐3‐ETHYL CARBODIIMIDE HYDROCHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1313,
        "SKUNo": "AS1817",
        "CASNO": "25952‐53‐8",
        "ProductName": "1‐(3‐DIMETHYLAMINOPROPYL)‐3‐ETHYL CARBODIIMIDE HYDROCHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1314,
        "SKUNo": "AS1818",
        "CASNO": "6638‐ 79‐ 5",
        "ProductName": "N,O‐DIMETHYL HYDROXYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1315,
        "SKUNo": "AS1818",
        "CASNO": "6638‐ 79‐ 5",
        "ProductName": "N,O‐DIMETHYL HYDROXYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1316,
        "SKUNo": "AS1819",
        "CASNO": "80‐ 73‐ 9",
        "ProductName": "N,N‐DIMETHYL IMIDAZOLIDINONE (DMI) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1317,
        "SKUNo": "AS1819",
        "CASNO": "80‐ 73‐ 9",
        "ProductName": "N,N‐DIMETHYL IMIDAZOLIDINONE (DMI) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1318,
        "SKUNo": "AS1820",
        "CASNO": "131‐11‐3",
        "ProductName": "DIMETHYL PHTHALATE 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29173940
    },
    {
        "Id": 1319,
        "SKUNo": "AS1820",
        "CASNO": "131‐11‐3",
        "ProductName": "DIMETHYL PHTHALATE 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29173940
    },
    {
        "Id": 1320,
        "SKUNo": "AS1821",
        "CASNO": "77‐ 78‐1",
        "ProductName": "DIMETHYL SULPHATE FOR SYNTHESIS (DFC OF 8 X 500ML)",
        "PACKSIZE": "500ML",
        "HSNCODE": 29209099
    },
    {
        "Id": 1321,
        "SKUNo": "AS1822",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 1322,
        "SKUNo": "AS1822",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 1323,
        "SKUNo": "AS1823",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 1324,
        "SKUNo": "AS1823",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 1325,
        "SKUNo": "AS1824",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE 99.5% GC‐HS‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 1326,
        "SKUNo": "AS1824",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE 99.5% GC‐HS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 1327,
        "SKUNo": "AS1825",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 1328,
        "SKUNo": "AS1826",
        "CASNO": "67‐ 68‐ 5",
        "ProductName": "DIMETHYL SULPHOXIDE SPECIALLY DRIED AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 1329,
        "SKUNo": "AS1827",
        "CASNO": "60‐11‐7",
        "ProductName": "DIMETHYL YELLOW PH INDICATOR C.I.NO. 11020‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1330,
        "SKUNo": "AS1827",
        "CASNO": "60‐11‐7",
        "ProductName": "DIMETHYL YELLOW PH INDICATOR C.I.NO. 11020‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1331,
        "SKUNo": "AS1828",
        "CASNO": "518‐ 67‐ 2",
        "ProductName": "DIMIDIUM BROMIDE‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 1332,
        "SKUNo": "AS1828",
        "CASNO": "518‐ 67‐ 2",
        "ProductName": "DIMIDIUM BROMIDE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1333,
        "SKUNo": "AS1829",
        "CASNO": "99‐ 34‐ 3",
        "ProductName": "3,5‐DINITROBENZOIC ACID ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 1334,
        "SKUNo": "AS1830",
        "CASNO": "99‐ 34‐ 3",
        "ProductName": "3,5‐DINITROBENZOIC ACID AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 1335,
        "SKUNo": "AS1830",
        "CASNO": "99‐ 34‐ 3",
        "ProductName": "3,5‐DINITROBENZOIC ACID AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 1336,
        "SKUNo": "AS1831",
        "CASNO": "119‐ 26‐ 6",
        "ProductName": "2,4‐DINITROPHENYL HYDRAZINE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1337,
        "SKUNo": "AS1831",
        "CASNO": "119‐ 26‐ 6",
        "ProductName": "2,4‐DINITROPHENYL HYDRAZINE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1338,
        "SKUNo": "AS1832",
        "CASNO": "119‐ 26‐ 6",
        "ProductName": "2,4‐DINITROPHENYL HYDRAZINE AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1339,
        "SKUNo": "AS1832",
        "CASNO": "119‐ 26‐ 6",
        "ProductName": "2,4‐DINITROPHENYL HYDRAZINE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1340,
        "SKUNo": "AS1833",
        "CASNO": "51‐ 28‐ 5",
        "ProductName": "2,4‐DINITROPHENOL INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 1341,
        "SKUNo": "AS1833",
        "CASNO": "51‐ 28‐ 5",
        "ProductName": "2,4‐DINITROPHENOL INDICATOR AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 1342,
        "SKUNo": "AS1834",
        "CASNO": "609‐ 99‐ 4",
        "ProductName": "3,5‐DINITROSALICYLIC ACID‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29182190
    },
    {
        "Id": 1343,
        "SKUNo": "AS1834",
        "CASNO": "609‐ 99‐ 4",
        "ProductName": "3,5‐DINITROSALICYLIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29182190
    },
    {
        "Id": 1344,
        "SKUNo": "AS1835",
        "CASNO": "609‐ 99‐ 4",
        "ProductName": "3,5‐DINITROSALICYLIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29182190
    },
    {
        "Id": 1345,
        "SKUNo": "AS1835",
        "CASNO": "609‐ 99‐ 4",
        "ProductName": "3,5‐DINITROSALICYLIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29182190
    },
    {
        "Id": 1346,
        "SKUNo": "AS1836",
        "CASNO": "117‐81‐7",
        "ProductName": "DIOCTYL PHTHALATE LR (Bis (2‐Ethylhexyl) Phthalate)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29173920
    },
    {
        "Id": 1347,
        "SKUNo": "AS1836",
        "CASNO": "117‐81‐7",
        "ProductName": "DIOCTYL PHTHALATE LR (Bis (2‐Ethylhexyl) Phthalate)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29173920
    },
    {
        "Id": 1348,
        "SKUNo": "AS1837",
        "CASNO": "577‐ 11‐ 7",
        "ProductName": "DIOCTYL SODIUM SULPHOSUCCINATE (DOSS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28151190
    },
    {
        "Id": 1349,
        "SKUNo": "AS1837",
        "CASNO": "577‐ 11‐ 7",
        "ProductName": "DIOCTYL SODIUM SULPHOSUCCINATE (DOSS)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28151190
    },
    {
        "Id": 1350,
        "SKUNo": "AS1838",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29329900
    },
    {
        "Id": 1351,
        "SKUNo": "AS1838",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1352,
        "SKUNo": "AS1839",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29329900
    },
    {
        "Id": 1353,
        "SKUNo": "AS1839",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1354,
        "SKUNo": "AS1840",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN AR (FOR SCIENTILATION GRADE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29329900
    },
    {
        "Id": 1355,
        "SKUNo": "AS1840",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN AR (FOR SCIENTILATION GRADE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1356,
        "SKUNo": "AS1841",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4‐DIOXAN COCKTAIL SCINTILATION GRADE‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1357,
        "SKUNo": "AS1842",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4‐DIOXAN FOR HPLC & UV SPECTROSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1358,
        "SKUNo": "AS1843",
        "CASNO": "123‐91‐1",
        "ProductName": "1,4 ‐DIOXAN SPECIALLY DRIED AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29329900
    },
    {
        "Id": 1359,
        "SKUNo": "AS1844",
        "CASNO": "122‐ 39‐ 4",
        "ProductName": "DIPHENYLAMINE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214410
    },
    {
        "Id": 1360,
        "SKUNo": "AS1844",
        "CASNO": "122‐ 39‐ 4",
        "ProductName": "DIPHENYLAMINE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214410
    },
    {
        "Id": 1361,
        "SKUNo": "AS1845",
        "CASNO": "122‐ 39‐ 4",
        "ProductName": "DIPHENYLAMINE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214410
    },
    {
        "Id": 1362,
        "SKUNo": "AS1845",
        "CASNO": "122‐ 39‐ 4",
        "ProductName": "DIPHENYLAMINE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214410
    },
    {
        "Id": 1363,
        "SKUNo": "AS1846",
        "CASNO": "646‐06‐0",
        "ProductName": "1,3‐DIOXOLANE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29329900
    },
    {
        "Id": 1364,
        "SKUNo": "AS1846",
        "CASNO": "646‐06‐0",
        "ProductName": "1,3‐DIOXOLANE FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29329900
    },
    {
        "Id": 1365,
        "SKUNo": "AS1847",
        "CASNO": "140‐ 22‐ 7",
        "ProductName": "DIPHENYL CARBAZIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1366,
        "SKUNo": "AS1847",
        "CASNO": "140‐ 22‐ 7",
        "ProductName": "DIPHENYL CARBAZIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1367,
        "SKUNo": "AS1848",
        "CASNO": "140‐ 22‐ 7",
        "ProductName": "DIPHENYL CARBAZIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1368,
        "SKUNo": "AS1848",
        "CASNO": "140‐ 22‐ 7",
        "ProductName": "DIPHENYL CARBAZIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1369,
        "SKUNo": "AS1849",
        "CASNO": "538‐62‐5",
        "ProductName": "DIPHENYL CARBAZONE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1370,
        "SKUNo": "AS1849",
        "CASNO": "538‐62‐5",
        "ProductName": "DIPHENYL CARBAZONE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1371,
        "SKUNo": "AS1850",
        "CASNO": "91 – 01 ‐ 0",
        "ProductName": "DIPHENYL CARBINOL FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29061990
    },
    {
        "Id": 1372,
        "SKUNo": "AS1850",
        "CASNO": "91 – 01 ‐ 0",
        "ProductName": "DIPHENYL CARBINOL FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29061990
    },
    {
        "Id": 1373,
        "SKUNo": "AS1851",
        "CASNO": "102‐09‐0",
        "ProductName": "DIPHENYL CARBONATE FOR SYNTHESIS 99%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29209099
    },
    {
        "Id": 1374,
        "SKUNo": "AS1851",
        "CASNO": "102‐09‐0",
        "ProductName": "DIPHENYL CARBONATE FOR SYNTHESIS 99%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29209099
    },
    {
        "Id": 1375,
        "SKUNo": "AS1852",
        "CASNO": "3483‐12‐3",
        "ProductName": "1, 1‐DIPHENYL‐2‐PICRYLHYDRAZINE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1376,
        "SKUNo": "AS1853",
        "CASNO": "1898‐66‐4",
        "ProductName": "DPPH (2,2‐Diphenyl‐1‐picrylhydrazyl)‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29280090
    },
    {
        "Id": 1377,
        "SKUNo": "AS1853",
        "CASNO": "1898‐66‐4",
        "ProductName": "DPPH (2,2‐Diphenyl‐1‐picrylhydrazyl)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1378,
        "SKUNo": "AS1853",
        "CASNO": "1898‐66‐4",
        "ProductName": "DPPH (2,2‐Diphenyl‐1‐picrylhydrazyl)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 1379,
        "SKUNo": "AS1854",
        "CASNO": "129‐ 17‐ 9",
        "ProductName": "DISULPHINE BLUE (PATENT BLUE V (VF))‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1380,
        "SKUNo": "AS1854",
        "CASNO": "129‐ 17‐ 9",
        "ProductName": "DISULPHINE BLUE (PATENT BLUE V (VF))‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1381,
        "SKUNo": "AS1855",
        "CASNO": "32634‐ 68‐ 7",
        "ProductName": "DI‐P‐TOLUOYL‐D‐TARTARIC ACID MONOHYDRATE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 1382,
        "SKUNo": "AS1855",
        "CASNO": "32634‐ 68‐ 7",
        "ProductName": "DI‐P‐TOLUOYL‐D‐TARTARIC ACID MONOHYDRATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 1383,
        "SKUNo": "AS1855",
        "CASNO": "32634‐ 68‐ 7",
        "ProductName": "DI‐P‐TOLUOYL‐D‐TARTARIC ACID MONOHYDRATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 1384,
        "SKUNo": "AS1856",
        "CASNO": "79‐ 40‐ 3",
        "ProductName": "DITHIOOXAMIDE AR (RUBEANIC ACID)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1385,
        "SKUNo": "AS1856",
        "CASNO": "79‐ 40‐ 3",
        "ProductName": "DITHIOOXAMIDE AR (RUBEANIC ACID)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1386,
        "SKUNo": "AS1857",
        "CASNO": "60‐ 10‐ 6",
        "ProductName": "DITHIZONE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1387,
        "SKUNo": "AS1857",
        "CASNO": "60‐ 10‐ 6",
        "ProductName": "DITHIZONE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1388,
        "SKUNo": "AS1858",
        "CASNO": "60‐ 10‐ 6",
        "ProductName": "DITHIZONE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1389,
        "SKUNo": "AS1858",
        "CASNO": "60‐ 10‐ 6",
        "ProductName": "DITHIZONE AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1390,
        "SKUNo": "AS1859",
        "CASNO": "2386‐53‐0",
        "ProductName": "1‐DODECANE SULPHONIC ACID SOD SALT HPLC 98%",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1391,
        "SKUNo": "AS1859",
        "CASNO": "2386‐53‐0",
        "ProductName": "1‐DODECANE SULPHONIC ACID SOD SALT HPLC 98%",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1392,
        "SKUNo": "AS1859",
        "CASNO": "2386‐53‐0",
        "ProductName": "1‐DODECANE SULPHONIC ACID SOD SALT HPLC 98%",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1393,
        "SKUNo": "AS1860",
        "CASNO": "25155‐ 30‐ 0",
        "ProductName": "DODECYL BENZENE SULPHONIC ACID SODIUM SALT PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1394,
        "SKUNo": "AS1861",
        "CASNO": "62‐ 31‐ 7",
        "ProductName": "DOPAMINE HCL",
        "PACKSIZE": "5GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1395,
        "SKUNo": "AS1861",
        "CASNO": "62‐ 31‐ 7",
        "ProductName": "DOPAMINE HCL",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1396,
        "SKUNo": "AS1862",
        "CASNO": "59‐92‐7",
        "ProductName": "L‐DOPA 99+% FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1397,
        "SKUNo": "AS1862",
        "CASNO": "59‐92‐7",
        "ProductName": "L‐DOPA 99+% FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 1398,
        "SKUNo": "AS1863",
        "CASNO": "130‐ 12‐ 2",
        "ProductName": "D.P.X MOUNTANT FOR MICROSCOPY‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1399,
        "SKUNo": "AS1863",
        "CASNO": "130‐ 12‐ 2",
        "ProductName": "D.P.X MOUNTANT FOR MICROSCOPY‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1400,
        "SKUNo": "AS1864",
        "CASNO": "",
        "ProductName": "DRABKIN’S SOLUTION (DILUENT)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1401,
        "SKUNo": "AS1864",
        "CASNO": "              ",
        "ProductName": "DRABKIN’S SOLUTION (DILUENT)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 1402,
        "SKUNo": "AS1865",
        "CASNO": "              ",
        "ProductName": "DRAGENDROFF’S REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1403,
        "SKUNo": "AS1866",
        "CASNO": "1308‐ 87‐ 8",
        "ProductName": "DYSPROSIUM OXIDE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1404,
        "SKUNo": "AS1866",
        "CASNO": "1308‐ 87‐ 8",
        "ProductName": "DYSPROSIUM OXIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1405,
        "SKUNo": "AS1867",
        "CASNO": "9006‐ 59‐ 1",
        "ProductName": "EGG ALBUMINE POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35021100
    },
    {
        "Id": 1406,
        "SKUNo": "AS1868",
        "CASNO": "",
        "ProductName": "EHRLICH’S ‘A’ REAGENT‐250ML",
        "PACKSIZE": "250 ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1407,
        "SKUNo": "AS1868",
        "CASNO": "                  ",
        "ProductName": "EHRLICH’S ‘B’ REAGENT‐250ML",
        "PACKSIZE": "250 ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1408,
        "SKUNo": "AS1869",
        "CASNO": "                  ",
        "ProductName": "EHRLICH’S REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1409,
        "SKUNo": "AS1869",
        "CASNO": "              ",
        "ProductName": "EHRLICH’S REAGENT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1410,
        "SKUNo": "AS1870",
        "CASNO": "548‐ 24‐ 3",
        "ProductName": "EOSINE BLUE FOR MICROSCOPY  C.I.No. 45400‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 1411,
        "SKUNo": "AS1870",
        "CASNO": "548‐ 24‐ 3",
        "ProductName": "EOSINE BLUE FOR MICROSCOPY  C.I.No. 45400‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 1412,
        "SKUNo": "AS1871",
        "CASNO": "6359‐05‐3",
        "ProductName": "EOSINE SPIRIT SOLUBLE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1413,
        "SKUNo": "AS1871",
        "CASNO": "6359‐05‐3",
        "ProductName": "EOSINE SPIRIT SOLUBLE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1414,
        "SKUNo": "AS1872",
        "CASNO": "17372‐ 87‐ 1",
        "ProductName": "EOSIN STAINING SOLUTION (2% w/v)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 1415,
        "SKUNo": "AS1872",
        "CASNO": "17372‐ 87‐ 1",
        "ProductName": "EOSIN STAINING SOLUTION (2% w/v)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 1416,
        "SKUNo": "AS1873",
        "CASNO": "17372‐ 87‐ 1",
        "ProductName": "EOSINE YELLOW FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1417,
        "SKUNo": "AS1873",
        "CASNO": "17372‐ 87‐ 1",
        "ProductName": "EOSINE YELLOW FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1418,
        "SKUNo": "AS1874",
        "CASNO": "                       ",
        "ProductName": "EOSINE YELLOW SOLUTION  ‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 1419,
        "SKUNo": "AS1875",
        "CASNO": "106‐ 89‐ 8",
        "ProductName": "EPICHLOROHYDRIN FOR SYNTHESIS 98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29103000
    },
    {
        "Id": 1420,
        "SKUNo": "AS1875",
        "CASNO": "106‐ 89‐ 8",
        "ProductName": "EPICHLOROHYDRIN FOR SYNTHESIS 98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29103000
    },
    {
        "Id": 1421,
        "SKUNo": "AS1876",
        "CASNO": "106‐ 89‐ 8",
        "ProductName": "EPICHLOROHYDRIN AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29103000
    },
    {
        "Id": 1422,
        "SKUNo": "AS1876",
        "CASNO": "106‐ 89‐ 8",
        "ProductName": "EPICHLOROHYDRIN AR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29103000
    },
    {
        "Id": 1423,
        "SKUNo": "AS1877",
        "CASNO": "1787‐ 61‐ 7",
        "ProductName": "ERIOCHROME BLACK T ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1424,
        "SKUNo": "AS1877",
        "CASNO": "1787‐ 61‐ 7",
        "ProductName": "ERIOCHROME BLACK T ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1425,
        "SKUNo": "AS1878",
        "CASNO": "1787‐ 61‐ 7",
        "ProductName": "ERIOCHROME BLACK T AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1426,
        "SKUNo": "AS1878",
        "CASNO": "1787‐ 61‐ 7",
        "ProductName": "ERIOCHROME BLACK T AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1427,
        "SKUNo": "AS1879",
        "CASNO": "16423‐ 68‐ 0",
        "ProductName": "ERIOCHROME BLUE BLACK B METAL INDICATOR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1428,
        "SKUNo": "AS1879",
        "CASNO": "16423‐ 68‐ 0",
        "ProductName": "ERIOCHROME BLUE BLACK B METAL INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1429,
        "SKUNo": "AS1880",
        "CASNO": "3564‐ 18‐ 9",
        "ProductName": "ERIOCHROME CYANINE R AR (Reagent for Aluminium)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1430,
        "SKUNo": "AS1880",
        "CASNO": "3564‐ 18‐ 9",
        "ProductName": "ERIOCHROME CYANINE R AR (Reagent for Aluminium)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1431,
        "SKUNo": "AS1881",
        "CASNO": "94082‐ 76‐ 5",
        "ProductName": "ERIOGLAUCINE (REDOX INDIACTOR)     C.I. NO.42090‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1432,
        "SKUNo": "AS1881",
        "CASNO": "94082‐ 76‐ 5",
        "ProductName": "ERIOGLAUCINE (REDOX INDIACTOR)     C.I. NO.42091‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1433,
        "SKUNo": "AS1882",
        "CASNO": "16423‐ 68‐ 0",
        "ProductName": "ERYTHROSINE B FIR MICROSCOPY        C.I. NO. 45430‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1434,
        "SKUNo": "AS1882",
        "CASNO": "16423‐ 68‐ 0",
        "ProductName": "ERYTHROSINE B FIR MICROSCOPY        C.I. NO. 45431‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1435,
        "SKUNo": "AS1883",
        "CASNO": "                ",
        "ProductName": "ESBACH’S REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1436,
        "SKUNo": "AS1884",
        "CASNO": "8007‐09‐8",
        "ProductName": "ESCHKA’S MIXTURE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1437,
        "SKUNo": "AS1884",
        "CASNO": "8007‐09‐8",
        "ProductName": "ESCHKA’S MIXTURE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 1438,
        "SKUNo": "AS1885",
        "CASNO": "107‐ 21‐ 1",
        "ProductName": "ETHYLENE GLYCOL LR 98% (1,2‐ETHANEDIOL)(M.E.G.)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29053100
    },
    {
        "Id": 1439,
        "SKUNo": "AS1885",
        "CASNO": "107‐ 21‐ 1",
        "ProductName": "ETHYLENE GLYCOL LR 98% (1,2‐ETHANEDIOL)(M.E.G.)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29053100
    },
    {
        "Id": 1440,
        "SKUNo": "AS1886",
        "CASNO": "107‐ 21‐ 1",
        "ProductName": "ETHYLENE GLYCOL AR 99% (1,2‐ETHANEDIOL) (M.E.G.) ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29053100
    },
    {
        "Id": 1441,
        "SKUNo": "AS1886",
        "CASNO": "107‐ 21‐ 1",
        "ProductName": "ETHYLENE GLYCOL AR 99% (1,2‐ETHANEDIOL) (M.E.G.) ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29053100
    },
    {
        "Id": 1442,
        "SKUNo": "AS1887",
        "CASNO": "141‐ 43 ‐ 5",
        "ProductName": "ETHANOLAMINE(MONO) LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29221190
    },
    {
        "Id": 1443,
        "SKUNo": "AS1887",
        "CASNO": "141‐ 43 ‐ 5",
        "ProductName": "ETHANOLAMINE(MONO) LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29221190
    },
    {
        "Id": 1444,
        "SKUNo": "AS1888",
        "CASNO": "141‐ 43 ‐ 5",
        "ProductName": "ETHANOLAMINE(MONO) 99% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29221190
    },
    {
        "Id": 1445,
        "SKUNo": "AS1888",
        "CASNO": "141‐ 43 ‐ 5",
        "ProductName": "ETHANOLAMINE(MONO) 99% AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29221190
    },
    {
        "Id": 1446,
        "SKUNo": "AS1889",
        "CASNO": "1239‐ 45‐ 8",
        "ProductName": "ETHIDIUM BROMIDE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1447,
        "SKUNo": "AS1889",
        "CASNO": "1239‐ 45‐ 8",
        "ProductName": "ETHIDIUM BROMIDE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1448,
        "SKUNo": "AS1889",
        "CASNO": "1239‐ 45‐ 8",
        "ProductName": "ETHIDIUM BROMIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1449,
        "SKUNo": "AS1890",
        "CASNO": "110‐80‐5",
        "ProductName": "2‐ETHOXYETHANOL LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29096000
    },
    {
        "Id": 1450,
        "SKUNo": "AS1890",
        "CASNO": "110‐80‐5",
        "ProductName": "2‐ETHOXYETHANOL LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29096000
    },
    {
        "Id": 1451,
        "SKUNo": "AS1891",
        "CASNO": "110‐80‐5",
        "ProductName": "2‐ETHOXYETHANOL AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29096000
    },
    {
        "Id": 1452,
        "SKUNo": "AS1891",
        "CASNO": "110‐80‐5",
        "ProductName": "2‐ETHOXYETHANOL AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29096000
    },
    {
        "Id": 1453,
        "SKUNo": "AS1892",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE  LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153100
    },
    {
        "Id": 1454,
        "SKUNo": "AS1892",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE  LR‐2.5LTR",
        "PACKSIZE": "2.5 LIT",
        "HSNCODE": 29153100
    },
    {
        "Id": 1455,
        "SKUNo": "AS1893",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153100
    },
    {
        "Id": 1456,
        "SKUNo": "AS1893",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE AR‐2.5LTR",
        "PACKSIZE": "2.5 LIT",
        "HSNCODE": 29153100
    },
    {
        "Id": 1457,
        "SKUNo": "AS1894",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE HPLC/UV SPECTROSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29153100
    },
    {
        "Id": 1458,
        "SKUNo": "AS1894",
        "CASNO": "141‐78‐6",
        "ProductName": "ETHYL ACETATE HPLC/UV SPECTROSCOPY‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153100
    },
    {
        "Id": 1459,
        "SKUNo": "AS1895",
        "CASNO": "141‐97‐9",
        "ProductName": "ETHYL ACETO ACETATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29183020
    },
    {
        "Id": 1460,
        "SKUNo": "AS1895",
        "CASNO": "141‐97‐9",
        "ProductName": "ETHYL ACETO ACETATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29183020
    },
    {
        "Id": 1461,
        "SKUNo": "AS1896",
        "CASNO": "75‐04‐7",
        "ProductName": "ETHYLAMINE SOLUTION 70%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1462,
        "SKUNo": "AS1896",
        "CASNO": "75‐04‐7",
        "ProductName": "ETHYLAMINE SOLUTION 70%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1463,
        "SKUNo": "AS1897",
        "CASNO": "93‐ 89‐ 0",
        "ProductName": "ETHYL BENZOATE 99% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29163190
    },
    {
        "Id": 1464,
        "SKUNo": "AS1897",
        "CASNO": "93‐ 89‐ 0",
        "ProductName": "ETHYL BENZOATE 99% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29163190
    },
    {
        "Id": 1465,
        "SKUNo": "AS1898",
        "CASNO": "9004‐ 57‐ 3",
        "ProductName": "ETHYL CELLULOSE(18‐22CPS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123911
    },
    {
        "Id": 1466,
        "SKUNo": "AS1899",
        "CASNO": "9004‐ 57‐ 3",
        "ProductName": "ETHYL CELLULOSE LOW VISCOCITY (7CPS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123922
    },
    {
        "Id": 1467,
        "SKUNo": "AS1900",
        "CASNO": "541‐41‐3",
        "ProductName": "ETHYL CHLOROFORMATE FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 1468,
        "SKUNo": "AS1900",
        "CASNO": "541‐41‐3",
        "ProductName": "ETHYL CHLOROFORMATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 1469,
        "SKUNo": "AS1900",
        "CASNO": "541‐41‐3",
        "ProductName": "ETHYL CHLOROFORMATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 1470,
        "SKUNo": "AS1901",
        "CASNO": "105‐56‐6",
        "ProductName": "ETHYL CYANOACETATE ‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 2926900
    },
    {
        "Id": 1471,
        "SKUNo": "AS1901",
        "CASNO": "105‐56‐6",
        "ProductName": "ETHYL CYANOACETATE ‐ 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 2926900
    },
    {
        "Id": 1472,
        "SKUNo": "AS1902",
        "CASNO": "107‐15‐3",
        "ProductName": "ETHYLENEDIAMINE 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29212100
    },
    {
        "Id": 1473,
        "SKUNo": "AS1902",
        "CASNO": "107‐15‐3",
        "ProductName": "ETHYLENEDIAMINE 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29212100
    },
    {
        "Id": 1474,
        "SKUNo": "AS1903",
        "CASNO": "60‐ 00‐ 4",
        "ProductName": "E.D.T.A.  ACID (E.D.T.A. ACID)‐100GM‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1475,
        "SKUNo": "AS1903",
        "CASNO": "60‐ 00‐ 4",
        "ProductName": "E.D.T.A.  ACID (E.D.T.A. ACID)‐500GM‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1476,
        "SKUNo": "AS1904",
        "CASNO": "              ",
        "ProductName": "E.D.T.A. SOLUTION 5% w/V125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1477,
        "SKUNo": "AS1904",
        "CASNO": "                ",
        "ProductName": "E.D.T.A. SOLUTION 10% w/v‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1478,
        "SKUNo": "AS1905",
        "CASNO": "62‐ 33‐ 9",
        "ProductName": "E.D.T.A. ACID CALCIUM DI‐SODIUM SALT HYDRATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1479,
        "SKUNo": "AS1906",
        "CASNO": "25102‐ 12‐ 9",
        "ProductName": "E.D.T.A. DIPOTASSIUM SALT ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1480,
        "SKUNo": "AS1906",
        "CASNO": "25102‐ 12‐ 9",
        "ProductName": "E.D.T.A. DIPOTASSIUM SALT ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1481,
        "SKUNo": "AS1907",
        "CASNO": "25102‐ 12‐ 9",
        "ProductName": "E.D.T.A. DIPOTASSIUM SALT AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1482,
        "SKUNo": "AS1907",
        "CASNO": "25102‐ 12‐ 9",
        "ProductName": "E.D.T.A. DIPOTASSIUM SALT AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1483,
        "SKUNo": "AS1908",
        "CASNO": "6381‐ 92‐ 6",
        "ProductName": "E.D.T.A. DISODIUM SALT‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1484,
        "SKUNo": "AS1908",
        "CASNO": "6381‐ 92‐ 6",
        "ProductName": "E.D.T.A. DISODIUM SALT‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1485,
        "SKUNo": "AS1909",
        "CASNO": "                ",
        "ProductName": "E.D.T.A. DISODIUM SALT  N/10 SOLN.    ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1486,
        "SKUNo": "AS1910",
        "CASNO": "",
        "ProductName": "E.D.T.A. DISODIUM SALT N/50 SOLN.‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1487,
        "SKUNo": "AS1911",
        "CASNO": "6381‐ 92‐ 6",
        "ProductName": "E.D.T.A. DISODIUM SALT AR    ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1488,
        "SKUNo": "AS1911",
        "CASNO": "6381‐ 92‐ 6",
        "ProductName": "E.D.T.A. DISODIUM SALT AR   ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1489,
        "SKUNo": "AS1912",
        "CASNO": "13235‐ 36‐ 4",
        "ProductName": "E.D.T.A. TETRASODIUM SALT (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1490,
        "SKUNo": "AS1912",
        "CASNO": "13235‐ 36‐ 4",
        "ProductName": "E.D.T.A. TETRASODIUM SALT (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1491,
        "SKUNo": "AS1912",
        "CASNO": "65501‐ 24‐ 8",
        "ProductName": "E.D.T.A.TRI POTASSIUM SALT (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29212100
    },
    {
        "Id": 1492,
        "SKUNo": "AS1912",
        "CASNO": "65501‐ 24‐ 8",
        "ProductName": "E.D.T.A.TRI POTASSIUM SALT (DIHYDRATE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29212100
    },
    {
        "Id": 1493,
        "SKUNo": "AS1913",
        "CASNO": "110‐71‐4",
        "ProductName": "ETHYLENE GLYCOL DIMETHYL ETHER LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094400
    },
    {
        "Id": 1494,
        "SKUNo": "AS1913",
        "CASNO": "110‐71‐4",
        "ProductName": "ETHYLENE GLYCOL DIMETHYL ETHER LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094400
    },
    {
        "Id": 1495,
        "SKUNo": "AS1914",
        "CASNO": "109‐94‐4",
        "ProductName": "ETHYL FORMATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29151290
    },
    {
        "Id": 1496,
        "SKUNo": "AS1914",
        "CASNO": "109‐94‐4",
        "ProductName": "ETHYL FORMATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29151290
    },
    {
        "Id": 1497,
        "SKUNo": "AS1915",
        "CASNO": "104‐ 76‐ 7",
        "ProductName": "2‐ETHYL HEXANOL FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051610
    },
    {
        "Id": 1498,
        "SKUNo": "AS1915",
        "CASNO": "104‐ 76‐ 7",
        "ProductName": "2‐ETHYL HEXANOL FOR SYNTHESIS 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051610
    },
    {
        "Id": 1499,
        "SKUNo": "AS1916",
        "CASNO": "75‐ 03‐ 6",
        "ProductName": "ETHYL IODIDE FOR SYNTHESIS‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 1500,
        "SKUNo": "AS1916",
        "CASNO": "75‐ 03‐ 6",
        "ProductName": "ETHYL IODIDE FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 1501,
        "SKUNo": "AS1917",
        "CASNO": "111‐62‐6",
        "ProductName": "ETHYL OLEATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29161590
    },
    {
        "Id": 1502,
        "SKUNo": "AS1917",
        "CASNO": "111‐62‐6",
        "ProductName": "ETHYL OLEATE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29161590
    },
    {
        "Id": 1503,
        "SKUNo": "AS1918",
        "CASNO": "2390‐59‐2",
        "ProductName": "ETHYL VIOLET   C.I.42600",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041341
    },
    {
        "Id": 1504,
        "SKUNo": "AS1919",
        "CASNO": "383‐63‐1",
        "ProductName": "ETHYL TRIFLUORO ACETATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 1505,
        "SKUNo": "AS1919",
        "CASNO": "383‐63‐1",
        "ProductName": "ETHYL TRIFLUORO ACETATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 1506,
        "SKUNo": "AS1920",
        "CASNO": "8000‐ 48‐ 4",
        "ProductName": "EUCALYPTUS OIL‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 33012924
    },
    {
        "Id": 1507,
        "SKUNo": "AS1921",
        "CASNO": "97‐53‐0",
        "ProductName": "EUGENOL 99% LR‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29095090
    },
    {
        "Id": 1508,
        "SKUNo": "AS1921",
        "CASNO": "97‐53‐0",
        "ProductName": "EUGENOL 99% LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29095090
    },
    {
        "Id": 1509,
        "SKUNo": "AS1922",
        "CASNO": "1308‐ 96‐ 9",
        "ProductName": "EUROPIUM OXIDE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1510,
        "SKUNo": "AS1922",
        "CASNO": "1308‐ 96‐ 9",
        "ProductName": "EUROPIUM OXIDE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1511,
        "SKUNo": "AS1923",
        "CASNO": "314‐ 13‐ 6",
        "ProductName": "EVAN’S BLUE 90%      C.I. NO. 23860‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1512,
        "SKUNo": "AS1924",
        "CASNO": "314‐ 13‐ 6",
        "ProductName": "EVAN’S BLUE 90%       C.I. NO. 23861‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1513,
        "SKUNo": "AS1925",
        "CASNO": "84633‐ 94‐ 3",
        "ProductName": "FAST BLUE B SALT‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1514,
        "SKUNo": "AS1925",
        "CASNO": "84633‐ 94‐ 3",
        "ProductName": "FAST BLUE B SALT‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1515,
        "SKUNo": "AS1926",
        "CASNO": "2353‐45‐9",
        "ProductName": "FAST GREEN FCF FOR MICROSCOPY C.I.NO. 42053‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1516,
        "SKUNo": "AS1926",
        "CASNO": "2353‐45‐9",
        "ProductName": "FAST GREEN FCF FOR MICROSCOPY C.I.NO. 42053‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1517,
        "SKUNo": "AS1927",
        "CASNO": "                ",
        "ProductName": "FEHLING’S SOLUTION NO.1‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1518,
        "SKUNo": "AS1927",
        "CASNO": "                  ",
        "ProductName": "FEHLING’S SOLUTION NO.2‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1519,
        "SKUNo": "AS1928",
        "CASNO": "7705‐ 08‐ 0",
        "ProductName": "FERRIC CHLORIDE (ANHYDROUS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1520,
        "SKUNo": "AS1928",
        "CASNO": "7705‐ 08‐ 0",
        "ProductName": "FERRIC CHLORIDE (ANHYDROUS)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28273990
    },
    {
        "Id": 1521,
        "SKUNo": "AS1929",
        "CASNO": "7705‐ 08‐ 0",
        "ProductName": "FERRIC CHLORIDE AR (ANHYDROUS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1522,
        "SKUNo": "AS1930",
        "CASNO": "10025‐ 77‐ 1",
        "ProductName": "FERRIC CHLORIDE LR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1523,
        "SKUNo": "AS1931",
        "CASNO": "10025‐ 77‐ 1",
        "ProductName": "FERRIC CHLORIDE AR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1524,
        "SKUNo": "AS1932",
        "CASNO": "17217‐ 76‐ 4",
        "ProductName": "FERRIC CITRATE (For Bacteriology)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 1525,
        "SKUNo": "AS1933",
        "CASNO": "7782‐ 61‐ 8",
        "ProductName": "FERRIC NITRATE LR (NONAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1526,
        "SKUNo": "AS1934",
        "CASNO": "7782‐ 61‐ 8",
        "ProductName": "FERRIC NITRATE AR (NONAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1527,
        "SKUNo": "AS1935",
        "CASNO": "1309‐ 37‐ 1",
        "ProductName": "FERRIC OXIDE RED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28211010
    },
    {
        "Id": 1528,
        "SKUNo": "AS1936",
        "CASNO": "15244‐ 10‐ 7",
        "ProductName": "FERRIC SULPHATE LR (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1529,
        "SKUNo": "AS1937",
        "CASNO": "                ",
        "ProductName": "FERROIN SOLUTION AR 0.025 M (Redox Indicator)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1530,
        "SKUNo": "AS1938",
        "CASNO": "13478‐ 10‐ 9",
        "ProductName": "FERROUS CHLORIDE (TETRAHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28274190
    },
    {
        "Id": 1531,
        "SKUNo": "AS1939",
        "CASNO": "7782‐ 63‐ 0",
        "ProductName": "FERROUS SULPHATE LR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332910
    },
    {
        "Id": 1532,
        "SKUNo": "AS1939",
        "CASNO": "7782‐ 63‐ 0",
        "ProductName": "FERROUS SULPHATE LR (HEPTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332910
    },
    {
        "Id": 1533,
        "SKUNo": "AS1940",
        "CASNO": "7782‐ 63‐ 0",
        "ProductName": "FERROUS SULPHATE AR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332910
    },
    {
        "Id": 1534,
        "SKUNo": "AS1941",
        "CASNO": "1317‐ 37‐ 9",
        "ProductName": "FERROUS SULPHIDE FUSED STICKS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28309010
    },
    {
        "Id": 1535,
        "SKUNo": "AS1942",
        "CASNO": "                ",
        "ProductName": "FIELD STAIN A FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 1536,
        "SKUNo": "AS1943",
        "CASNO": "                ",
        "ProductName": "FIELD STAIN A FOR MICROSCOPIAL STAINING‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1537,
        "SKUNo": "AS1944",
        "CASNO": "                ",
        "ProductName": "FIELD STAIN B FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 1538,
        "SKUNo": "AS1945",
        "CASNO": "                  ",
        "ProductName": "FIELD STAIN B FOR MICROSCOPIAL STAINING‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1539,
        "SKUNo": "AS1946",
        "CASNO": "1343‐ 88‐ 0",
        "ProductName": "FLORISIL® 60 ‐ 100 MESH FOR COLUMN CHROMATOGRAPHY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28399090
    },
    {
        "Id": 1540,
        "SKUNo": "AS1946",
        "CASNO": "1343‐ 88‐ 0",
        "ProductName": "FLORISIL® 60 ‐ 100 MESH FOR COLUMN CHROMATOGRAPHY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28399090
    },
    {
        "Id": 1541,
        "SKUNo": "AS1947",
        "CASNO": "28920‐43‐6",
        "ProductName": "9‐FLUORENYLMETHYL CHLOROFORMATE (FMOC‐CI)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 1542,
        "SKUNo": "AS1947",
        "CASNO": "28920‐43‐6",
        "ProductName": "9‐FLUORENYLMETHYL CHLOROFORMATE (FMOC‐CI)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 1543,
        "SKUNo": "AS1948",
        "CASNO": "371‐40‐4",
        "ProductName": "4‐FLUOROANILINE FOR SYNTHESIS (1‐Amino‐4‐Fluorobenzene)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29214190
    },
    {
        "Id": 1544,
        "SKUNo": "AS1948",
        "CASNO": "371‐40‐4",
        "ProductName": "4‐FLUOROANILINE FOR SYNTHESIS (1‐Amino‐4‐Fluorobenzene)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214190
    },
    {
        "Id": 1545,
        "SKUNo": "AS1949",
        "CASNO": "86‐ 73‐ 7",
        "ProductName": "FLUORENE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29029090
    },
    {
        "Id": 1546,
        "SKUNo": "AS1949",
        "CASNO": "86‐ 73‐ 7",
        "ProductName": "FLUORENE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29029090
    },
    {
        "Id": 1547,
        "SKUNo": "AS1950",
        "CASNO": "2321‐07‐5",
        "ProductName": "FLUORESCEIN‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1548,
        "SKUNo": "AS1950",
        "CASNO": "2321‐07‐5",
        "ProductName": "FLUORESCEIN‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1549,
        "SKUNo": "AS1951",
        "CASNO": "518‐47‐8",
        "ProductName": "FLUORESCEIN SODIUM‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1550,
        "SKUNo": "AS1951",
        "CASNO": "518‐47‐8",
        "ProductName": "FLUORESCEIN SODIUM‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1551,
        "SKUNo": "AS1952",
        "CASNO": "462‐ 06‐ 6",
        "ProductName": "FLUOROBENZENE  FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29036229
    },
    {
        "Id": 1552,
        "SKUNo": "AS1952",
        "CASNO": "462‐ 06‐ 6",
        "ProductName": "FLUOROBENZENE  FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29036229
    },
    {
        "Id": 1553,
        "SKUNo": "AS1953",
        "CASNO": "16872‐ 11‐ 0",
        "ProductName": "4‐FLUORO BORIC ACID 40%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28100020
    },
    {
        "Id": 1554,
        "SKUNo": "AS1953",
        "CASNO": "16872‐ 11‐ 0",
        "ProductName": "4‐FLUORO BORIC ACID 40%‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28100020
    },
    {
        "Id": 1555,
        "SKUNo": "AS1954",
        "CASNO": "51‐ 21‐ 8",
        "ProductName": "5‐FLUORO URACIL‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1556,
        "SKUNo": "AS1954",
        "CASNO": "51‐ 21‐ 8",
        "ProductName": "5‐FLUORO URACIL‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1557,
        "SKUNo": "AS1954",
        "CASNO": "51‐ 21‐ 8",
        "ProductName": "5‐FLUORO URACIL ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1558,
        "SKUNo": "AS1955",
        "CASNO": "59‐ 30‐ 3",
        "ProductName": "FOLIC ACID FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29362910
    },
    {
        "Id": 1559,
        "SKUNo": "AS1955",
        "CASNO": "59‐ 30‐ 3",
        "ProductName": "FOLIC ACID FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362910
    },
    {
        "Id": 1560,
        "SKUNo": "AS1955",
        "CASNO": "59‐ 30‐ 3",
        "ProductName": "FOLIC ACID FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362910
    },
    {
        "Id": 1561,
        "SKUNo": "AS1956",
        "CASNO": "              ",
        "ProductName": "FOLIN & CIOCATEU’S PHENOL REAGENT‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1562,
        "SKUNo": "AS1956",
        "CASNO": "                ",
        "ProductName": "FOLIN & CIOCATEU’S PHENOL REAGENT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1563,
        "SKUNo": "AS1957",
        "CASNO": "",
        "ProductName": "FOLIN & WU’S ALKALINE COPPER SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1564,
        "SKUNo": "AS1958",
        "CASNO": "50‐ 00‐ 0",
        "ProductName": "FORMALDEHYDE SOLUTION LR 37‐41% W/V‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29121100
    },
    {
        "Id": 1565,
        "SKUNo": "AS1958",
        "CASNO": "50‐ 00‐ 0",
        "ProductName": "FORMALDEHYDE SOLUTION LR 37‐41% W/V‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29121100
    },
    {
        "Id": 1566,
        "SKUNo": "AS1958",
        "CASNO": "50‐ 00‐ 0",
        "ProductName": "FORMALDEHYDE SOLUTION LR 37‐41% W/V‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 29121100
    },
    {
        "Id": 1567,
        "SKUNo": "AS1959",
        "CASNO": "50‐00‐0",
        "ProductName": "FORMALDEHYDE SOLUTION AQUA GRADE  37‐41% W/VWITH METHANOL CONTENT 6%‐8% ‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 29121100
    },
    {
        "Id": 1568,
        "SKUNo": "AS1959",
        "CASNO": "50‐00‐0",
        "ProductName": "FORMALDEHYDE SOLUTION AQUA GRADE  37‐41% W/VWITH METHANOL CONTENT 6%‐8% ‐30LTR",
        "PACKSIZE": "30LTR",
        "HSNCODE": 29121100
    },
    {
        "Id": 1569,
        "SKUNo": "AS1960",
        "CASNO": "50‐ 00‐ 0",
        "ProductName": "FORMALDEHYDE SOLUTION AR 37‐41% W/V‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29121100
    },
    {
        "Id": 1570,
        "SKUNo": "AS1960",
        "CASNO": "50‐ 00‐ 0",
        "ProductName": "FORMALDEHYDE SOLUTION AR 37‐41% W/V‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29121100
    },
    {
        "Id": 1571,
        "SKUNo": "AS1961",
        "CASNO": "75‐ 12‐ 7",
        "ProductName": "FORMAMIDE LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29241900
    },
    {
        "Id": 1572,
        "SKUNo": "AS1961",
        "CASNO": "75‐ 12‐ 7",
        "ProductName": "FORMAMIDE LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29241900
    },
    {
        "Id": 1573,
        "SKUNo": "AS1962",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID (about 85%)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29151100
    },
    {
        "Id": 1574,
        "SKUNo": "AS1962",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID (about 85%)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29151100
    },
    {
        "Id": 1575,
        "SKUNo": "AS1963",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29151100
    },
    {
        "Id": 1576,
        "SKUNo": "AS1963",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29151100
    },
    {
        "Id": 1577,
        "SKUNo": "AS1964",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID AR 98%500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29151100
    },
    {
        "Id": 1578,
        "SKUNo": "AS1964",
        "CASNO": "64‐ 18‐ 6",
        "ProductName": "FORMIC ACID AR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29151100
    },
    {
        "Id": 1579,
        "SKUNo": "AS1965",
        "CASNO": "                ",
        "ProductName": "FOUCHET’S REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1580,
        "SKUNo": "AS1966",
        "CASNO": "57‐ 48‐ 7",
        "ProductName": "D‐FRUCTOSE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 17025000
    },
    {
        "Id": 1581,
        "SKUNo": "AS1966",
        "CASNO": "57‐ 48‐ 7",
        "ProductName": "D‐FRUCTOSE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 17025000
    },
    {
        "Id": 1582,
        "SKUNo": "AS1966",
        "CASNO": "57‐ 48‐ 7",
        "ProductName": "D‐FRUCTOSE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17025000
    },
    {
        "Id": 1583,
        "SKUNo": "AS1967",
        "CASNO": "57‐ 48‐ 7",
        "ProductName": "D‐FRUCTOSE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 17025000
    },
    {
        "Id": 1584,
        "SKUNo": "AS1968",
        "CASNO": "57‐ 48‐ 7",
        "ProductName": "D‐FRUCTOSE GR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 17025000
    },
    {
        "Id": 1585,
        "SKUNo": "AS1969",
        "CASNO": "3244‐ 88‐ 0",
        "ProductName": "FUCHSIN ACID FOR MICROSCOPY  C.I. No. 42685‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041343
    },
    {
        "Id": 1586,
        "SKUNo": "AS1970",
        "CASNO": "3244‐ 88‐ 0",
        "ProductName": "FUCHSIN ACID FOR MICROSCOPY  C.I. No. 42686‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041343
    },
    {
        "Id": 1587,
        "SKUNo": "AS1971",
        "CASNO": "632‐ 99‐ 5",
        "ProductName": "FUCHSIN BASIC FOR MICROSCOPY (ROSANILINE HCL)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041343
    },
    {
        "Id": 1588,
        "SKUNo": "AS1971",
        "CASNO": "632‐ 99‐ 5",
        "ProductName": "FUCHSIN BASIC FOR MICROSCOPY (ROSANILINE HCL)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041343
    },
    {
        "Id": 1589,
        "SKUNo": "AS1972",
        "CASNO": "",
        "ProductName": "FUCHSIN BASIC 0.1 W/V‐125ML",
        "PACKSIZE": "125 ML",
        "HSNCODE": 32041399
    },
    {
        "Id": 1590,
        "SKUNo": "AS1973",
        "CASNO": "8031‐ 18‐ 3",
        "ProductName": "FULLER’S EARTH FOR ABSORPTION PURPOSE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25081010
    },
    {
        "Id": 1591,
        "SKUNo": "AS1974",
        "CASNO": "110‐ 17‐ 8",
        "ProductName": "FUMARIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171950
    },
    {
        "Id": 1592,
        "SKUNo": "AS1974",
        "CASNO": "110‐ 17‐ 8",
        "ProductName": "FUMARIC ACID FOR SYNTHESIS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29171950
    },
    {
        "Id": 1593,
        "SKUNo": "AS1975",
        "CASNO": "98‐01‐1",
        "ProductName": "FURFURAL 98% FOR SYNTHESIS (FURFURALDEHYDE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29321300
    },
    {
        "Id": 1594,
        "SKUNo": "AS1975",
        "CASNO": "98‐01‐1",
        "ProductName": "FURFURAL 98% FOR SYNTHESIS (FURFURALDEHYDE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29321300
    },
    {
        "Id": 1595,
        "SKUNo": "AS1976",
        "CASNO": "98‐ 00‐ 0",
        "ProductName": "FURFURYL ALCOHOL 98% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29321300
    },
    {
        "Id": 1596,
        "SKUNo": "AS1976",
        "CASNO": "98‐ 00‐ 0",
        "ProductName": "FURFURYL ALCOHOL 98% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29321300
    },
    {
        "Id": 1597,
        "SKUNo": "AS1977",
        "CASNO": "617‐89‐0",
        "ProductName": "FURFURYLAMINE LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29321990
    },
    {
        "Id": 1598,
        "SKUNo": "AS1977",
        "CASNO": "617‐89‐0",
        "ProductName": "FURFURYLAMINE LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29321990
    },
    {
        "Id": 1599,
        "SKUNo": "AS1978",
        "CASNO": "16731‐ 55‐ 8",
        "ProductName": "FUSION  MIXTURE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1600,
        "SKUNo": "AS1979",
        "CASNO": "16731‐ 55‐ 8",
        "ProductName": "FUSION MIXTURE GR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1601,
        "SKUNo": "AS1980",
        "CASNO": "12064‐62‐9",
        "ProductName": "GADOLINIUM OXIDE 99.9% ‐ 5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1602,
        "SKUNo": "AS1980",
        "CASNO": "12064‐62‐9",
        "ProductName": "GADOLINIUM OXIDE 99.9% ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1603,
        "SKUNo": "AS1981",
        "CASNO": "59‐ 23‐ 4",
        "ProductName": "D‐GALACTOSE LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 1604,
        "SKUNo": "AS1981",
        "CASNO": "59‐ 23‐ 4",
        "ProductName": "D‐GALACTOSE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 1605,
        "SKUNo": "AS1982",
        "CASNO": "5995‐ 86‐ 8",
        "ProductName": "GALLIC ACID 99.5%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29182910
    },
    {
        "Id": 1606,
        "SKUNo": "AS1982",
        "CASNO": "5995‐ 86‐ 8",
        "ProductName": "GALLIC ACID 99.5%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182910
    },
    {
        "Id": 1607,
        "SKUNo": "AS1983",
        "CASNO": "9000‐ 70‐ 8",
        "ProductName": "GELATIN POWDER FOR BATERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35030020
    },
    {
        "Id": 1608,
        "SKUNo": "AS1984",
        "CASNO": "                ",
        "ProductName": "GENTIAN VIOLET (AQUEOUS)  Staining Solution‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041349
    },
    {
        "Id": 1609,
        "SKUNo": "AS1985",
        "CASNO": "                ",
        "ProductName": "GENTIAN VIOLET(ALCOHOLIC) SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041349
    },
    {
        "Id": 1610,
        "SKUNo": "AS1986",
        "CASNO": "1310‐53‐8",
        "ProductName": "GERMANIUM DIOXIDE 99.99%‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28256010
    },
    {
        "Id": 1611,
        "SKUNo": "AS1986",
        "CASNO": "1310‐53‐8",
        "ProductName": "GERMANIUM DIOXIDE 99.99%‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28256010
    },
    {
        "Id": 1612,
        "SKUNo": "AS1987",
        "CASNO": "51811‐ 82‐ 6",
        "ProductName": "GIEMSA’S STAIN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1613,
        "SKUNo": "AS1987",
        "CASNO": "51811‐ 82‐ 6",
        "ProductName": "GIEMSA’S STAIN FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1614,
        "SKUNo": "AS1988",
        "CASNO": "51811‐ 82‐ 6",
        "ProductName": "GIEMSA’S STAINING SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 1615,
        "SKUNo": "AS1989",
        "CASNO": "        ",
        "ProductName": "GLASS BEADS(3.5‐4.5 MM)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 70189090
    },
    {
        "Id": 1616,
        "SKUNo": "AS1990",
        "CASNO": "65997‐ 19‐ 3",
        "ProductName": "GLASS WOOL (LAB) LOW IN LEAD‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 70199010
    },
    {
        "Id": 1617,
        "SKUNo": "AS1991",
        "CASNO": "66‐ 84‐ 2",
        "ProductName": "GLUCOSAMINE HYDROCHLORIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1618,
        "SKUNo": "AS1991",
        "CASNO": "66‐ 84‐ 2",
        "ProductName": "GLUCOSAMINE HYDROCHLORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1619,
        "SKUNo": "AS1992",
        "CASNO": "56‐ 86‐ 0",
        "ProductName": "L‐GLUTAMIC ACID   ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224200
    },
    {
        "Id": 1620,
        "SKUNo": "AS1992",
        "CASNO": "56‐ 86‐ 0",
        "ProductName": "L‐GLUTAMIC ACID  ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29224210
    },
    {
        "Id": 1621,
        "SKUNo": "AS1992",
        "CASNO": "56‐ 86‐ 0",
        "ProductName": "L‐GLUTAMIC ACID ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29224210
    },
    {
        "Id": 1622,
        "SKUNo": "AS1993",
        "CASNO": "6106‐04‐3",
        "ProductName": "L‐GLUTAMIC ACID MONO SODIUM SALT‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224220
    },
    {
        "Id": 1623,
        "SKUNo": "AS1993",
        "CASNO": "6106‐04‐3",
        "ProductName": "L‐GLUTAMIC ACID MONO SODIUM SALT‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224220
    },
    {
        "Id": 1624,
        "SKUNo": "AS1993",
        "CASNO": "6106‐04‐3",
        "ProductName": "L‐GLUTAMIC ACID MONO SODIUM SALT‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29224220
    },
    {
        "Id": 1625,
        "SKUNo": "AS1994",
        "CASNO": "56‐ 85‐ 9",
        "ProductName": "L‐GLUTAMINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1626,
        "SKUNo": "AS1994",
        "CASNO": "56‐ 85‐ 9",
        "ProductName": "L‐GLUTAMINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1627,
        "SKUNo": "AS1995",
        "CASNO": "111‐ 30‐ 8",
        "ProductName": "GLUTARALDEHYDE FOR SYNTHESIS ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29122990
    },
    {
        "Id": 1628,
        "SKUNo": "AS1995",
        "CASNO": "111‐ 30‐ 8",
        "ProductName": "GLUTARALDEHYDE FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29122990
    },
    {
        "Id": 1629,
        "SKUNo": "AS1996",
        "CASNO": "110‐94‐1",
        "ProductName": "GLUTARIC ACID  FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 1630,
        "SKUNo": "AS1996",
        "CASNO": "110‐94‐1",
        "ProductName": "GLUTARIC ACID  FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 1631,
        "SKUNo": "AS1997",
        "CASNO": "108‐55‐4",
        "ProductName": "GLUTARIC ANHYDRIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 1632,
        "SKUNo": "AS1997",
        "CASNO": "108‐55‐4",
        "ProductName": "GLUTARIC ANHYDRIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 1633,
        "SKUNo": "AS1998",
        "CASNO": "70‐ 18‐ 8",
        "ProductName": "GLUTATHIONE REDUCED‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1634,
        "SKUNo": "AS1998",
        "CASNO": "70‐ 18‐ 8",
        "ProductName": "GLUTATHIONE REDUCED‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 1635,
        "SKUNo": "AS1999",
        "CASNO": "56‐ 81‐ 5",
        "ProductName": "GLYCEROL LR {GLYCERINE}‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29054500
    },
    {
        "Id": 1636,
        "SKUNo": "AS1999",
        "CASNO": "56‐ 81‐ 5",
        "ProductName": "GLYCEROL LR {GLYCERINE}‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29054500
    },
    {
        "Id": 1637,
        "SKUNo": "AS2000",
        "CASNO": "56‐ 81‐ 5",
        "ProductName": "GLYCEROL GR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29054500
    },
    {
        "Id": 1638,
        "SKUNo": "AS2000",
        "CASNO": "56‐ 81‐ 5",
        "ProductName": "GLYCEROL GR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29054500
    },
    {
        "Id": 1639,
        "SKUNo": "AS2001",
        "CASNO": "102‐76‐1",
        "ProductName": "GLYCEROL TRIACETATE LR (TRIACETIN)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 1640,
        "SKUNo": "AS2001",
        "CASNO": "102‐76‐1",
        "ProductName": "GLYCEROL TRIACETATE LR (TRIACETIN)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153990
    },
    {
        "Id": 1641,
        "SKUNo": "AS2002",
        "CASNO": "56‐ 40‐ 6",
        "ProductName": "GLYCINE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29224910
    },
    {
        "Id": 1642,
        "SKUNo": "AS2002",
        "CASNO": "56‐ 40‐ 6",
        "ProductName": "GLYCINE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224910
    },
    {
        "Id": 1643,
        "SKUNo": "AS2002",
        "CASNO": "56‐ 40‐ 6",
        "ProductName": "GLYCINE LR‐5 KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29224910
    },
    {
        "Id": 1644,
        "SKUNo": "AS2003",
        "CASNO": "56‐ 40‐ 6",
        "ProductName": "GLYCINE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224910
    },
    {
        "Id": 1645,
        "SKUNo": "AS2003",
        "CASNO": "56‐ 40‐ 6",
        "ProductName": "GLYCINE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224910
    },
    {
        "Id": 1646,
        "SKUNo": "AS2004",
        "CASNO": "79‐ 14‐ 1",
        "ProductName": "GLYCOLIC ACID‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 1647,
        "SKUNo": "AS2004",
        "CASNO": "79‐ 14‐ 1",
        "ProductName": "GLYCOLIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 1648,
        "SKUNo": "AS2004",
        "CASNO": "79‐ 14‐ 1",
        "ProductName": "GLYCOLIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 1649,
        "SKUNo": "AS2005",
        "CASNO": "79‐ 14‐ 1",
        "ProductName": "GLYCOLIC ACID AQUEOUS SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29181900
    },
    {
        "Id": 1650,
        "SKUNo": "AS2005",
        "CASNO": "79‐ 14‐ 1",
        "ProductName": "GLYCOLIC ACID AQUEOUS SOLUTION‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29181900
    },
    {
        "Id": 1651,
        "SKUNo": "AS2006",
        "CASNO": "556‐ 50‐ 3",
        "ProductName": "GLYCYL GLYCINE  ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1652,
        "SKUNo": "AS2006",
        "CASNO": "556‐ 50‐ 3",
        "ProductName": "GLYCYL GLYCINE  ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1653,
        "SKUNo": "AS2006",
        "CASNO": "556‐ 50‐ 3",
        "ProductName": "GLYCYL GLYCINE  ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 1654,
        "SKUNo": "AS2007",
        "CASNO": "107‐ 22‐ 2",
        "ProductName": "GLYOXAL 40% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29121930
    },
    {
        "Id": 1655,
        "SKUNo": "AS2007",
        "CASNO": "107‐ 22‐ 2",
        "ProductName": "GLYOXAL 40% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29121930
    },
    {
        "Id": 1656,
        "SKUNo": "AS2008",
        "CASNO": "                  ",
        "ProductName": "GOWER’S REAGENT (RBC DILUTING FLUID)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1657,
        "SKUNo": "AS2009",
        "CASNO": "                  ",
        "ProductName": "GRAMS IODINE FOR MICROSCOPICAL STAINING‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1658,
        "SKUNo": "AS2009",
        "CASNO": "                  ",
        "ProductName": "GRAMS IODINE FOR MICROSCOPICAL STAINING‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1659,
        "SKUNo": "AS2010",
        "CASNO": "7782‐42‐5",
        "ProductName": "GRAPHITE FINE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38011000
    },
    {
        "Id": 1660,
        "SKUNo": "AS2011",
        "CASNO": "50‐ 01‐ 1",
        "ProductName": "GUANIDINE HYDROCHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1661,
        "SKUNo": "AS2011",
        "CASNO": "50‐ 01‐ 1",
        "ProductName": "GUANIDINE HYDROCHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1662,
        "SKUNo": "AS2012",
        "CASNO": "506‐ 93‐ 4",
        "ProductName": "GUANIDINE NITRATE LR 98%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1663,
        "SKUNo": "AS2013",
        "CASNO": "593‐ 84‐ 0",
        "ProductName": "GUANIDINE THIOCYANTE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1664,
        "SKUNo": "AS2013",
        "CASNO": "593‐ 84‐ 0",
        "ProductName": "GUANIDINE THIOCYANTE FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29252990
    },
    {
        "Id": 1665,
        "SKUNo": "AS2014",
        "CASNO": "73‐40‐5",
        "ProductName": "GUANINE 98% For Biochemistry (2‐Amino‐6‐hydroxypurine) ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1666,
        "SKUNo": "AS2014",
        "CASNO": "73‐40‐5",
        "ProductName": "GUANINE 98% For Biochemistry (2‐Amino‐6‐hydroxypurine) ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1667,
        "SKUNo": "AS2014",
        "CASNO": "73‐40‐5",
        "ProductName": "GUANINE 98% For Biochemistry (2‐Amino‐6‐hydroxypurine) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1668,
        "SKUNo": "AS2015",
        "CASNO": "118‐00‐3",
        "ProductName": "GUANOSINE 99% FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1669,
        "SKUNo": "AS2015",
        "CASNO": "118‐00‐3",
        "ProductName": "GUANOSINE 99% FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1670,
        "SKUNo": "AS2016",
        "CASNO": "9000‐ 30‐ 0",
        "ProductName": "GUAR GUM POWDER OF ENDOSPERM‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13023230
    },
    {
        "Id": 1671,
        "SKUNo": "AS2017",
        "CASNO": "9000‐28‐6",
        "ProductName": "GUM GHATTI LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 13019049
    },
    {
        "Id": 1672,
        "SKUNo": "AS2017",
        "CASNO": "9000‐28‐6",
        "ProductName": "GUM GHATTI LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13019049
    },
    {
        "Id": 1673,
        "SKUNo": "AS2018",
        "CASNO": "9000‐ 65‐ 1",
        "ProductName": "GUM TRAGACANTH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13019017
    },
    {
        "Id": 1674,
        "SKUNo": "AS2019",
        "CASNO": "1634‐ 82‐ 8",
        "ProductName": "HABA  FOR AUTOMATIC ANALYSIS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1675,
        "SKUNo": "AS2019",
        "CASNO": "1634‐ 82‐ 8",
        "ProductName": "HABA  FOR AUTOMATIC ANALYSIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1676,
        "SKUNo": "AS2020",
        "CASNO": "148893‐ 10‐ 1",
        "ProductName": "HATU FOR SYNTHESIS ‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1677,
        "SKUNo": "AS2020",
        "CASNO": "148893‐ 10‐ 1",
        "ProductName": "HATU FOR SYNTHESIS ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1678,
        "SKUNo": "AS2020",
        "CASNO": "148893‐ 10‐ 1",
        "ProductName": "HATU FOR SYNTHESIS ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1679,
        "SKUNo": "AS2021",
        "CASNO": "",
        "ProductName": "HAYMEM’S REAGENT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1680,
        "SKUNo": "AS2022",
        "CASNO": "94790‐ 37‐ 1",
        "ProductName": "HBTU FOR PEPTIDE SYNTHESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1681,
        "SKUNo": "AS2022",
        "CASNO": "94790‐ 37‐ 1",
        "ProductName": "HBTU FOR PEPTIDE SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1682,
        "SKUNo": "AS2022",
        "CASNO": "94790‐ 37‐ 1",
        "ProductName": "HBTU FOR PEPTIDE SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1683,
        "SKUNo": "AS2023",
        "CASNO": "517‐ 28‐ 2",
        "ProductName": "HEMATOXYLIN STAIN CERTIFIED FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 1684,
        "SKUNo": "AS2023",
        "CASNO": "517‐ 28‐ 2",
        "ProductName": "HEMATOXYLIN STAIN CERTIFIED FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 1685,
        "SKUNo": "AS2024",
        "CASNO": "",
        "ProductName": "HEMATOXYLIN (DELAFIELD’S)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 1686,
        "SKUNo": "AS2025",
        "CASNO": "                ",
        "ProductName": "HEMATOXYLIN(EHRLICH) STAINING SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030010
    },
    {
        "Id": 1687,
        "SKUNo": "AS2026",
        "CASNO": "              ",
        "ProductName": "HEMATOXLLIN (HARRIS) staining solution‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030010
    },
    {
        "Id": 1688,
        "SKUNo": "AS2027",
        "CASNO": "9041‐08‐1",
        "ProductName": "HEPARIN SODIUM, 1,00,000 IU/VIAL",
        "PACKSIZE": "1 VIAL",
        "HSNCODE": 30019099
    },
    {
        "Id": 1689,
        "SKUNo": "AS2028",
        "CASNO": "7365‐45‐9",
        "ProductName": "HEPES (BUFFER) ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1690,
        "SKUNo": "AS2028",
        "CASNO": "7365‐45‐9",
        "ProductName": "HEPES (BUFFER) ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1691,
        "SKUNo": "AS2028",
        "CASNO": "7365‐45‐9",
        "ProductName": "HEPES (BUFFER) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1692,
        "SKUNo": "AS2028",
        "CASNO": "7365‐45‐9",
        "ProductName": "HEPES (BUFFER) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1693,
        "SKUNo": "AS2029",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "HEPTANE 85% LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1694,
        "SKUNo": "AS2029",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "HEPTANE 85% LR‐2.5OLTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1695,
        "SKUNo": "AS2030",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "n‐HEPTANE  99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1696,
        "SKUNo": "AS2030",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "n‐HEPTANE  99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1697,
        "SKUNo": "AS2031",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "n‐HEPTANE AR  99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1698,
        "SKUNo": "AS2031",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "n‐HEPTANE AR  99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1699,
        "SKUNo": "AS2032",
        "CASNO": "142‐ 82‐ 5",
        "ProductName": "n‐HEPTANE 99% FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1700,
        "SKUNo": "AS2033",
        "CASNO": "22767‐ 50‐ 6",
        "ProductName": "1‐HEPTANE SULPHONIC ACID SODIUM SALT AR (ANHYDROUS)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1701,
        "SKUNo": "AS2033",
        "CASNO": "22767‐ 50‐ 6",
        "ProductName": "1‐HEPTANE SULPHONIC ACID SODIUM SALT AR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1702,
        "SKUNo": "AS2034",
        "CASNO": "207300‐ 90‐ 1",
        "ProductName": "1‐HEPTANE SULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)  For HPLC‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1703,
        "SKUNo": "AS2034",
        "CASNO": "207300‐ 90‐ 1",
        "ProductName": "1‐HEPTANE SULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)  For HPLC‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1704,
        "SKUNo": "AS2034",
        "CASNO": "207300‐ 90‐ 1",
        "ProductName": "1‐HEPTANE SULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)  For HPLC‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1705,
        "SKUNo": "AS2035",
        "CASNO": "111‐70‐6",
        "ProductName": "n‐HEPTANOL 99% For Synthesis",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 1706,
        "SKUNo": "AS2035",
        "CASNO": "111‐70‐6",
        "ProductName": "n‐HEPTANOL 99% For Synthesis",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 1707,
        "SKUNo": "AS2036",
        "CASNO": "111‐70‐6",
        "ProductName": "n‐HEPTANOL 99.5% AR",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 1708,
        "SKUNo": "AS2036",
        "CASNO": "111‐70‐6",
        "ProductName": "n‐HEPTANOL 99.5% AR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 1709,
        "SKUNo": "AS2037",
        "CASNO": "680‐31‐9",
        "ProductName": "HEXAMETHYLPHOSPHORIC ACID TRIIAMIDE  (HMPA)‐100 ML",
        "PACKSIZE": "100 ML",
        "HSNCODE": 29319090
    },
    {
        "Id": 1710,
        "SKUNo": "AS2037",
        "CASNO": "680‐31‐9",
        "ProductName": "HEXAMETHYLPHOSPHORIC ACID TRIIAMIDE  (HMPA)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29319090
    },
    {
        "Id": 1711,
        "SKUNo": "AS2038",
        "CASNO": "100‐ 97‐ 0",
        "ProductName": "HEXAMINE LR (HEXAMETHYLENE TETRAMINE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1712,
        "SKUNo": "AS2038",
        "CASNO": "100‐ 97‐ 0",
        "ProductName": "HEXAMINE LR (HEXAMETHYLENE TETRAMINE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29339900
    },
    {
        "Id": 1713,
        "SKUNo": "AS2039",
        "CASNO": "100‐ 97‐ 0",
        "ProductName": "HEXAMINE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1714,
        "SKUNo": "AS2040",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "HEXANE LR 65‐70C  ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 1715,
        "SKUNo": "AS2040",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "HEXANE LR 65‐70 C ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 1716,
        "SKUNo": "AS2041",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "HEXANE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 1717,
        "SKUNo": "AS2041",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "HEXANE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 1718,
        "SKUNo": "AS2042",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 95% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1719,
        "SKUNo": "AS2042",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 95% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1720,
        "SKUNo": "AS2043",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 99% FOR SYNTHESIS ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1721,
        "SKUNo": "AS2043",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 99% FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1722,
        "SKUNo": "AS2044",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 99% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 1723,
        "SKUNo": "AS2044",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE 99% AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1724,
        "SKUNo": "AS2045",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE FOR  HPLC 95%‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1725,
        "SKUNo": "AS2045",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE FOR  HPLC 95%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1726,
        "SKUNo": "AS2046",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE FOR  HPLC 99%‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1727,
        "SKUNo": "AS2046",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "n‐HEXANE FOR  HPLC 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 1728,
        "SKUNo": "AS2047",
        "CASNO": "111‐27‐3",
        "ProductName": "n‐HEXANOL LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 1729,
        "SKUNo": "AS2047",
        "CASNO": "111‐27‐3",
        "ProductName": "n‐HEXANOL LR 98%2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 1730,
        "SKUNo": "AS2048",
        "CASNO": "111‐27‐3",
        "ProductName": "n‐HEXANOL AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051990
    },
    {
        "Id": 1731,
        "SKUNo": "AS2048",
        "CASNO": "111‐27‐3",
        "ProductName": "n‐HEXANOL AR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051990
    },
    {
        "Id": 1732,
        "SKUNo": "AS2049",
        "CASNO": "2832‐ 45‐ 3",
        "ProductName": "1‐HEXANE SULPHONIC ACID SODIUM SALT AR (ANHYDROUS)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1733,
        "SKUNo": "AS2049",
        "CASNO": "2832‐ 45‐ 3",
        "ProductName": "1‐HEXANE SULPHONIC ACID SODIUM SALT AR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1734,
        "SKUNo": "AS2050",
        "CASNO": "207300‐ 91‐ 2",
        "ProductName": "1‐HEXANESULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1735,
        "SKUNo": "AS2050",
        "CASNO": "207300‐ 91‐ 2",
        "ProductName": "1‐HEXANESULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1736,
        "SKUNo": "AS2050",
        "CASNO": "207300‐ 91‐ 2",
        "ProductName": "1‐HEXANESULPHONIC ACID SODIUM SALT AR (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 1737,
        "SKUNo": "AS2051",
        "CASNO": "495‐ 69‐ 2",
        "ProductName": "HIPPURIC ACID CRYSTALS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 1738,
        "SKUNo": "AS2051",
        "CASNO": "495‐ 69‐ 2",
        "ProductName": "HIPPURIC ACID CRYSTALS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29242990
    },
    {
        "Id": 1739,
        "SKUNo": "AS2052",
        "CASNO": "56‐ 92‐ 8",
        "ProductName": "HISTAMINE DIHYDROCHLORIDE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 1740,
        "SKUNo": "AS2052",
        "CASNO": "56‐ 92‐ 8",
        "ProductName": "HISTAMINE DIHYDROCHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 1741,
        "SKUNo": "AS2053",
        "CASNO": "71‐ 00‐ 1",
        "ProductName": "L‐HISTIDINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1742,
        "SKUNo": "AS2053",
        "CASNO": "71‐ 00‐ 1",
        "ProductName": "L‐HISTIDINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1743,
        "SKUNo": "AS2054",
        "CASNO": "5934‐ 29‐ 2",
        "ProductName": "L‐HISTIDINE MONO HYDROCHLORIDE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1744,
        "SKUNo": "AS2054",
        "CASNO": "5934‐ 29‐ 2",
        "ProductName": "L‐HISTIDINE MONO HYDROCHLORIDE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1745,
        "SKUNo": "AS2054",
        "CASNO": "5934‐ 29‐ 2",
        "ProductName": "L‐HISTIDINE MONO HYDROCHLORIDE FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1746,
        "SKUNo": "AS2055",
        "CASNO": "12055‐ 62‐ 8",
        "ProductName": "HOLMIUM OXIDE ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1747,
        "SKUNo": "AS2055",
        "CASNO": "12055‐ 62‐ 8",
        "ProductName": "HOLMIUM OXIDE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1748,
        "SKUNo": "AS2056",
        "CASNO": "68514‐ 28‐ 3",
        "ProductName": "HUMIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31059090
    },
    {
        "Id": 1749,
        "SKUNo": "AS2056",
        "CASNO": "68514‐ 28‐ 3",
        "ProductName": "HUMIC ACID‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31059090
    },
    {
        "Id": 1750,
        "SKUNo": "AS2057",
        "CASNO": "121‐54‐0",
        "ProductName": "HYAMINE 1622 (Benzethonium chloride) For tensile test ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 1751,
        "SKUNo": "AS2057",
        "CASNO": "121‐54‐0",
        "ProductName": "HYAMINE 1622 (Benzethonium chloride) For tensile test ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 1752,
        "SKUNo": "AS2058",
        "CASNO": "121‐54‐0",
        "ProductName": "HYAMINE 1622 SOLUTION 0.004M‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29239000
    },
    {
        "Id": 1753,
        "SKUNo": "AS2058",
        "CASNO": "121‐54‐0",
        "ProductName": "HYAMINE 1622 SOLUTION 0.004M‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 29239000
    },
    {
        "Id": 1754,
        "SKUNo": "AS2059",
        "CASNO": "10217‐52‐4",
        "ProductName": "HYDRAZINE HYDRATE LR 60% 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28251020
    },
    {
        "Id": 1755,
        "SKUNo": "AS2059",
        "CASNO": "10217‐52‐4",
        "ProductName": "HYDRAZINE HYDRATE LR 60% 2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28251020
    },
    {
        "Id": 1756,
        "SKUNo": "AS2060",
        "CASNO": "7803‐57‐8",
        "ProductName": "HYDRAZINE HYDRATE LR 80% ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28251020
    },
    {
        "Id": 1757,
        "SKUNo": "AS2060",
        "CASNO": "7803‐57‐8",
        "ProductName": "HYDRAZINE HYDRATE LR 80%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28251020
    },
    {
        "Id": 1758,
        "SKUNo": "AS2061",
        "CASNO": "7803‐57‐8",
        "ProductName": "HYDRAZINE HYDRATE 80% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28251020
    },
    {
        "Id": 1759,
        "SKUNo": "AS2061",
        "CASNO": "7803‐57‐8",
        "ProductName": "HYDRAZINE HYDRATE 80% AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28251020
    },
    {
        "Id": 1760,
        "SKUNo": "AS2062",
        "CASNO": "10034‐ 93‐ 2",
        "ProductName": "HYDRAZINE SULPHATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251030
    },
    {
        "Id": 1761,
        "SKUNo": "AS2062",
        "CASNO": "10034‐ 93‐ 2",
        "ProductName": "HYDRAZINE SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251030
    },
    {
        "Id": 1762,
        "SKUNo": "AS2063",
        "CASNO": "10034‐ 93‐ 2",
        "ProductName": "HYDRAZINE SULPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251030
    },
    {
        "Id": 1763,
        "SKUNo": "AS2063",
        "CASNO": "10034‐ 93‐ 2",
        "ProductName": "HYDRAZINE SULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251030
    },
    {
        "Id": 1764,
        "SKUNo": "AS2064",
        "CASNO": "10034‐ 85‐ 2",
        "ProductName": "HYDRIODIC ACID 55% AR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 28111990
    },
    {
        "Id": 1765,
        "SKUNo": "AS2065",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28061000
    },
    {
        "Id": 1766,
        "SKUNo": "AS2065",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28061000
    },
    {
        "Id": 1767,
        "SKUNo": "AS2065",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID LR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28061000
    },
    {
        "Id": 1768,
        "SKUNo": "AS2066",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28061000
    },
    {
        "Id": 1769,
        "SKUNo": "AS2066",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28061000
    },
    {
        "Id": 1770,
        "SKUNo": "AS2066",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID AR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28061000
    },
    {
        "Id": 1771,
        "SKUNo": "AS2067",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID N/10 SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1772,
        "SKUNo": "AS2068",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID 37% FOR TRACE METAL ANALYSIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28061000
    },
    {
        "Id": 1773,
        "SKUNo": "AS2068",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "HYDROCHLORIC ACID 37% FOR TRACE METAL ANALYSIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28061000
    },
    {
        "Id": 1774,
        "SKUNo": "AS2069",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID LR 40%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111100
    },
    {
        "Id": 1775,
        "SKUNo": "AS2069",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID LR 40%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28111100
    },
    {
        "Id": 1776,
        "SKUNo": "AS2070",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 40% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111100
    },
    {
        "Id": 1777,
        "SKUNo": "AS2071",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 48% AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111100
    },
    {
        "Id": 1778,
        "SKUNo": "AS2071",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 48% AR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 28111100
    },
    {
        "Id": 1779,
        "SKUNo": "AS2072",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 48% ELECTRONIC GRADE‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111100
    },
    {
        "Id": 1780,
        "SKUNo": "AS2073",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 48% FOR TRACE METAL ANALYSIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111100
    },
    {
        "Id": 1781,
        "SKUNo": "AS2073",
        "CASNO": "7664‐ 39‐ 3",
        "ProductName": "HYDROFLUORIC ACID 48% FOR TRACE METAL ANALYSIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28111100
    },
    {
        "Id": 1782,
        "SKUNo": "AS2074",
        "CASNO": "7722‐ 84‐ 1",
        "ProductName": "HYDROGEN PEROXIDE  6% SOLUTION(20 VOLUMES)‐1LTR",
        "PACKSIZE": "1 LIT",
        "HSNCODE": 28470000
    },
    {
        "Id": 1783,
        "SKUNo": "AS2075",
        "CASNO": "7722‐ 84‐ 1",
        "ProductName": "HYDROGEN PEROXIDE 30% SOLUTION ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28470000
    },
    {
        "Id": 1784,
        "SKUNo": "AS2075",
        "CASNO": "7722‐ 84‐ 1",
        "ProductName": "HYDROGEN PEROXIDE 30% SOLUTION ‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28470000
    },
    {
        "Id": 1785,
        "SKUNo": "AS2076",
        "CASNO": "7722‐ 84‐ 1",
        "ProductName": "HYDROGEN PEROXIDE 30% SOLUTION AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28470000
    },
    {
        "Id": 1786,
        "SKUNo": "AS2076",
        "CASNO": "7722‐ 84‐ 1",
        "ProductName": "HYDROGEN PEROXIDE 30% SOLUTION AR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28470000
    },
    {
        "Id": 1787,
        "SKUNo": "AS2077",
        "CASNO": "123‐ 31‐ 9",
        "ProductName": "HYDROQUINONE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072200
    },
    {
        "Id": 1788,
        "SKUNo": "AS2077",
        "CASNO": "123‐ 31‐ 9",
        "ProductName": "HYDROQUINONE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072200
    },
    {
        "Id": 1789,
        "SKUNo": "AS2078",
        "CASNO": "123‐ 31‐ 9",
        "ProductName": "HYDROQUINONE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072200
    },
    {
        "Id": 1790,
        "SKUNo": "AS2078",
        "CASNO": "123‐ 31‐ 9",
        "ProductName": "HYDROQUINONE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072200
    },
    {
        "Id": 1791,
        "SKUNo": "AS2079",
        "CASNO": "121‐71‐1",
        "ProductName": "M‐HYDROXY ACETOPHENONE FOR SYNTHESIS 96%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 1792,
        "SKUNo": "AS2079",
        "CASNO": "121‐71‐1",
        "ProductName": "M‐HYDROXY ACETOPHENONE FOR SYNTHESIS 96%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 1793,
        "SKUNo": "AS2080",
        "CASNO": "99‐ 93‐ 4",
        "ProductName": "p‐HYDROXY ACETOPHENONE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 1794,
        "SKUNo": "AS2080",
        "CASNO": "99‐ 93‐ 4",
        "ProductName": "p‐HYDROXY ACETOPHENONE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 1795,
        "SKUNo": "AS2081",
        "CASNO": "123‐ 08‐ 0",
        "ProductName": "4‐HYDROXYBENZALDEHYDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29124999
    },
    {
        "Id": 1796,
        "SKUNo": "AS2081",
        "CASNO": "123‐ 08‐ 0",
        "ProductName": "4‐HYDROXYBENZALDEHYDE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29124999
    },
    {
        "Id": 1797,
        "SKUNo": "AS2082",
        "CASNO": "99‐ 96‐ 7",
        "ProductName": "p‐HYDROXYBENZOIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 1798,
        "SKUNo": "AS2082",
        "CASNO": "99‐ 96‐ 7",
        "ProductName": "p‐HYDROXYBENZOIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 1799,
        "SKUNo": "AS2083",
        "CASNO": "123333‐ 53‐ 9",
        "ProductName": "1‐HYDROXYBENZOTRIAZOLE (MONOHYDRATE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1800,
        "SKUNo": "AS2083",
        "CASNO": "123333‐ 53‐ 9",
        "ProductName": "1‐HYDROXYBENZOTRIAZOLE (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1801,
        "SKUNo": "AS2084",
        "CASNO": "92‐ 69‐ 3",
        "ProductName": "P‐HYDROXY DIPHENYL FOR SYNTHESIS 98% (4 Phenyl phenol)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 1802,
        "SKUNo": "AS2084",
        "CASNO": "92‐ 69‐ 3",
        "ProductName": "P‐HYDROXY DIPHENYL FOR SYNTHESIS 98% (4 Phenyl phenol)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 1803,
        "SKUNo": "AS2085",
        "CASNO": "3891/07/04",
        "ProductName": "N‐(2‐HYDROXYETHYL) PHTHALIMIDE FOR SYNTHESIS 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1804,
        "SKUNo": "AS2085",
        "CASNO": "3891/07/04",
        "ProductName": "N‐(2‐HYDROXYETHYL) PHTHALIMIDE FOR SYNTHESIS 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1805,
        "SKUNo": "AS2086",
        "CASNO": "9004‐ 62‐ 0",
        "ProductName": "HYDROXYETHYL CELLULOSE LOW VISCOSITY (145mPas)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123922
    },
    {
        "Id": 1806,
        "SKUNo": "AS2086",
        "CASNO": "9004‐ 62‐ 0",
        "ProductName": "HYDROXYETHYL CELLULOSE HIGH VISCOSITY ( 270mPas)",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123919
    },
    {
        "Id": 1807,
        "SKUNo": "AS2087",
        "CASNO": "5470/11/01",
        "ProductName": "HYDROXYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 1808,
        "SKUNo": "AS2087",
        "CASNO": "5470/11/01",
        "ProductName": "HYDROXYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 1809,
        "SKUNo": "AS2088",
        "CASNO": "5470/11/01",
        "ProductName": "HYDROXYLAMINE HYDROCHLORIDE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 1810,
        "SKUNo": "AS2088",
        "CASNO": "5470/11/01",
        "ProductName": "HYDROXYLAMINE HYDROCHLORIDE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 1811,
        "SKUNo": "AS2089",
        "CASNO": "10039‐ 54‐ 0",
        "ProductName": "HYDROXYLAMINE SULPHATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251040
    },
    {
        "Id": 1812,
        "SKUNo": "AS2089",
        "CASNO": "10039‐ 54‐ 0",
        "ProductName": "HYDROXYLAMINE SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251040
    },
    {
        "Id": 1813,
        "SKUNo": "AS2090",
        "CASNO": "10039‐ 54‐ 0",
        "ProductName": "HYDROXYLAMINE SULPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28251040
    },
    {
        "Id": 1814,
        "SKUNo": "AS2090",
        "CASNO": "10039‐ 54‐ 0",
        "ProductName": "HYDROXYLAMINE SULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28251040
    },
    {
        "Id": 1815,
        "SKUNo": "AS2091",
        "CASNO": "63451‐ 35‐ 4",
        "ProductName": "HYDROXY NAPTHOL BLUE (indicator for calcium determination)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1816,
        "SKUNo": "AS2091",
        "CASNO": "63451‐ 35‐ 4",
        "ProductName": "HYDROXY NAPTHOL BLUE (indicator for calcium determination)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 1817,
        "SKUNo": "AS2092",
        "CASNO": "51‐35‐4",
        "ProductName": "L‐HYDROXYPROLINE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1818,
        "SKUNo": "AS2092",
        "CASNO": "51‐35‐4",
        "ProductName": "L‐HYDROXYPROLINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1819,
        "SKUNo": "AS2092",
        "CASNO": "51‐35‐4",
        "ProductName": "L‐HYDROXYPROLINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1820,
        "SKUNo": "AS2093",
        "CASNO": "9004‐ 65‐ 3",
        "ProductName": "HYDROXY PROPYL METHYL CELLULOSE‐(E5)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39123919
    },
    {
        "Id": 1821,
        "SKUNo": "AS2094",
        "CASNO": "9004‐ 65‐ 3",
        "ProductName": "HYDROXY PROPYL METHYL CELLULOSE‐(E15)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39123919
    },
    {
        "Id": 1822,
        "SKUNo": "AS2095",
        "CASNO": "9004‐ 65‐ 3",
        "ProductName": "HYDROXY PROPYL METHYL CELLULOSE ‐(E50)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39123919
    },
    {
        "Id": 1823,
        "SKUNo": "AS2096",
        "CASNO": "148‐ 24‐ 3",
        "ProductName": "8‐HYDROXYQUINOLINE (OXINE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1824,
        "SKUNo": "AS2096",
        "CASNO": "148‐ 24‐ 3",
        "ProductName": "8‐HYDROXYQUINOLINE (OXINE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1825,
        "SKUNo": "AS2097",
        "CASNO": "148‐ 24‐ 3",
        "ProductName": "8‐HYDROXYQUINOLINE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1826,
        "SKUNo": "AS2097",
        "CASNO": "148‐ 24‐ 3",
        "ProductName": "8‐HYDROXYQUINOLINE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1827,
        "SKUNo": "AS2098",
        "CASNO": "61790‐ 53‐ 2",
        "ProductName": "HYFLO SUPER CEL ® (FILTERAID CALCINED)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38029019
    },
    {
        "Id": 1828,
        "SKUNo": "AS2099",
        "CASNO": "6066‐ 82‐ 6",
        "ProductName": "N‐HYDROXYSUCCINIMIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1829,
        "SKUNo": "AS2099",
        "CASNO": "6066‐ 82‐ 6",
        "ProductName": "N‐HYDROXYSUCCINIMIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1830,
        "SKUNo": "AS2099",
        "CASNO": "6066‐ 82‐ 6",
        "ProductName": "N‐HYDROXYSUCCINIMIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1831,
        "SKUNo": "AS2100",
        "CASNO": "6303‐21‐5",
        "ProductName": "HYPOPHOSPHORUS ACID 30% LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28111920
    },
    {
        "Id": 1832,
        "SKUNo": "AS2101",
        "CASNO": "68‐ 94 ‐ 0",
        "ProductName": "HYPOXANTHINE FOR BIOCHEMISTRY 99%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1833,
        "SKUNo": "AS2101",
        "CASNO": "68‐ 94 ‐ 0",
        "ProductName": "HYPOXANTHINE FOR BIOCHEMISTRY 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1834,
        "SKUNo": "AS2101",
        "CASNO": "68‐ 94 ‐ 0",
        "ProductName": "HYPOXANTHINE FOR BIOCHEMISTRY 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 1835,
        "SKUNo": "AS2102",
        "CASNO": "288‐ 32‐ 4",
        "ProductName": "IMIDAZOLE  (Glyoxaline)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1836,
        "SKUNo": "AS2102",
        "CASNO": "288‐ 32‐ 4",
        "ProductName": "IMIDAZOLE  (Glyoxaline)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1837,
        "SKUNo": "AS2103",
        "CASNO": "288‐ 32‐ 4",
        "ProductName": "IMIDAZOLE  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1838,
        "SKUNo": "AS2103",
        "CASNO": "288‐ 32‐ 4",
        "ProductName": "IMIDAZOLE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 1839,
        "SKUNo": "AS2104",
        "CASNO": "142‐73‐4",
        "ProductName": "IMINODIACETIC ACID FOR SYNTHESIS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1840,
        "SKUNo": "AS2104",
        "CASNO": "142‐73‐4",
        "ProductName": "IMINODIACETIC ACID FOR SYNTHESIS ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1841,
        "SKUNo": "AS2105",
        "CASNO": "",
        "ProductName": "IMMERSION OIL FOR MICROSCOPY ‐30ML",
        "PACKSIZE": "30ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1842,
        "SKUNo": "AS2105",
        "CASNO": "",
        "ProductName": "IMMERSION OIL FOR MICROSCOPY ‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1843,
        "SKUNo": "AS2106",
        "CASNO": "",
        "ProductName": "INDIAN INK‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1844,
        "SKUNo": "AS2107",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (Ph1.0‐10)‐10BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1845,
        "SKUNo": "AS2108",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (pH2.0‐4.5)‐10BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1846,
        "SKUNo": "AS2109",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (pH3.5‐5.4‐10BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1847,
        "SKUNo": "AS2110",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (Ph3.8‐9.0)‐10 BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1848,
        "SKUNo": "AS2111",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (pH6.5‐9.0)‐10 BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1849,
        "SKUNo": "AS2112",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER WIDE RANGE (With colour scale) (pH2.0‐10.5)‐10BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1850,
        "SKUNo": "AS2113",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER FULL RANGE (With colour scale) (pH1.0‐14.0) ‐10BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1851,
        "SKUNo": "AS2114",
        "CASNO": "",
        "ProductName": "INDICATOR PAPER (With colour scale) (Ph5.5‐8.0)‐10 BKT",
        "PACKSIZE": "10BKT",
        "HSNCODE": 38220090
    },
    {
        "Id": 1852,
        "SKUNo": "AS2115",
        "CASNO": "860‐ 22‐ 0",
        "ProductName": "INDIGO CARMINE AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1853,
        "SKUNo": "AS2115",
        "CASNO": "860‐ 22‐ 0",
        "ProductName": "INDIGO CARMINE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1854,
        "SKUNo": "AS2116",
        "CASNO": "10025‐82‐8",
        "ProductName": "INDIUM (III) CHLORIDE 98% For Synthesis ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1855,
        "SKUNo": "AS2116",
        "CASNO": "10025‐82‐8",
        "ProductName": "INDIUM (III) CHLORIDE 98% For Synthesis ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1856,
        "SKUNo": "AS2117",
        "CASNO": "13464‐ 82‐ 9",
        "ProductName": "INDIUM SULPHATE  99.9%‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1857,
        "SKUNo": "AS2117",
        "CASNO": "13464‐ 82‐ 9",
        "ProductName": "INDIUM SULPHATE  99.9%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1858,
        "SKUNo": "AS2118",
        "CASNO": "120‐ 72‐ 9",
        "ProductName": "INDOLE AR (For estamination of DNA)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1859,
        "SKUNo": "AS2118",
        "CASNO": "120‐ 72‐ 9",
        "ProductName": "INDOLE AR (For estamination of DNA)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1860,
        "SKUNo": "AS2119",
        "CASNO": "87‐ 51‐ 4",
        "ProductName": "INDOLE‐3‐ACETIC ACID FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1861,
        "SKUNo": "AS2119",
        "CASNO": "87‐ 51‐ 4",
        "ProductName": "INDOLE‐3‐ACETIC ACID FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1862,
        "SKUNo": "AS2120",
        "CASNO": "133‐ 32‐4",
        "ProductName": "INDOLE‐3‐BUTYRIC ACID FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1863,
        "SKUNo": "AS2120",
        "CASNO": "133‐ 32‐4",
        "ProductName": "INDOLE‐3‐BUTYRIC ACID FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1864,
        "SKUNo": "AS2121",
        "CASNO": "58‐63‐9",
        "ProductName": "INOSINE FOR BIOCHEMISTRY ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1865,
        "SKUNo": "AS2121",
        "CASNO": "58‐63‐9",
        "ProductName": "INOSINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1866,
        "SKUNo": "AS2122",
        "CASNO": "58‐63‐9",
        "ProductName": "INOSINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1867,
        "SKUNo": "AS2123",
        "CASNO": "87‐ 89‐ 8",
        "ProductName": "meso‐INOSITOL FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29061390
    },
    {
        "Id": 1868,
        "SKUNo": "AS2123",
        "CASNO": "87‐ 89‐ 8",
        "ProductName": "meso‐INOSITOL FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29061390
    },
    {
        "Id": 1869,
        "SKUNo": "AS2123",
        "CASNO": "87‐ 89‐ 8",
        "ProductName": "meso‐INOSITOL FOR BIOCHEMISTRY ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29061390
    },
    {
        "Id": 1870,
        "SKUNo": "AS2124",
        "CASNO": "146‐ 68‐ 9",
        "ProductName": "I.N.T. AR 95 % ‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1871,
        "SKUNo": "AS2124",
        "CASNO": "146‐ 68‐ 9",
        "ProductName": "I.N.T. AR 95 % ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 1872,
        "SKUNo": "AS2125",
        "CASNO": "9005‐ 80‐ 5",
        "ProductName": "INULIN FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 11082000
    },
    {
        "Id": 1873,
        "SKUNo": "AS2125",
        "CASNO": "9005‐ 80‐ 5",
        "ProductName": "INULIN FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 11082000
    },
    {
        "Id": 1874,
        "SKUNo": "AS2126",
        "CASNO": "7782‐68‐5",
        "ProductName": "IODIC ACID AR 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 1875,
        "SKUNo": "AS2127",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE (RESUBLIMED) LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28012000
    },
    {
        "Id": 1876,
        "SKUNo": "AS2127",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE (RESUBLIMED) LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28012000
    },
    {
        "Id": 1877,
        "SKUNo": "AS2127",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE (RESUBLIMED) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28012000
    },
    {
        "Id": 1878,
        "SKUNo": "AS2128",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE (RESUBLIMED) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28012000
    },
    {
        "Id": 1879,
        "SKUNo": "AS2128",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE (RESUBLIMED) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28012000
    },
    {
        "Id": 1880,
        "SKUNo": "AS2129",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE SOLUTION 1%‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220019
    },
    {
        "Id": 1881,
        "SKUNo": "AS2130",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE 0.05mol (0.1N) SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1882,
        "SKUNo": "AS2130",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE 0.05mol (0.1N) SOLUTION‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 1883,
        "SKUNo": "AS2131",
        "CASNO": "7553‐56‐2",
        "ProductName": "IODINE SOLUTION 0.01 Normal volumetric solution ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1884,
        "SKUNo": "AS2132",
        "CASNO": "",
        "ProductName": "IODINE GRAMS STAINING SOLUTION ‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1885,
        "SKUNo": "AS2133",
        "CASNO": "",
        "ProductName": "IODINE GREEN‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32041990
    },
    {
        "Id": 1886,
        "SKUNo": "AS2134",
        "CASNO": "7789‐ 33‐ 5",
        "ProductName": "IODINE MONOBROMIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28129000
    },
    {
        "Id": 1887,
        "SKUNo": "AS2135",
        "CASNO": "7790‐ 99‐ 0",
        "ProductName": "IODINE MONOCHLORIDE",
        "PACKSIZE": "5X50GM",
        "HSNCODE": 28129000
    },
    {
        "Id": 1888,
        "SKUNo": "AS2136",
        "CASNO": "7790‐ 99‐ 0",
        "ProductName": "IODINE MONOCHLORIDE SOLUTION (WIJ’S SOLUTION)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1889,
        "SKUNo": "AS2137",
        "CASNO": "12029‐98‐0",
        "ProductName": "IODINE PENTOXIDE 99% AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28112990
    },
    {
        "Id": 1890,
        "SKUNo": "AS2138",
        "CASNO": "75‐47‐8",
        "ProductName": "IODOFORM LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29033990
    },
    {
        "Id": 1891,
        "SKUNo": "AS2139",
        "CASNO": "",
        "ProductName": "IODOPHOR (DISINFECTANT)‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 38089400
    },
    {
        "Id": 1892,
        "SKUNo": "AS2139",
        "CASNO": "",
        "ProductName": "IODOPHOR (DISINFECTANT)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 38089400
    },
    {
        "Id": 1893,
        "SKUNo": "AS2140",
        "CASNO": "516‐12‐1",
        "ProductName": "N‐IODOSUCCINIMIDE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1894,
        "SKUNo": "AS2140",
        "CASNO": "516‐12‐1",
        "ProductName": "N‐IODOSUCCINIMIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 1895,
        "SKUNo": "AS2141",
        "CASNO": "110‐ 19‐ 0",
        "ProductName": "ISO‐BUTYL ACETATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 1896,
        "SKUNo": "AS2141",
        "CASNO": "110‐ 19‐ 0",
        "ProductName": "ISO‐BUTYL ACETATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153990
    },
    {
        "Id": 1897,
        "SKUNo": "AS2142",
        "CASNO": "78‐84‐2",
        "ProductName": "Iso‐BUTYRALDEHYDE 99% For Synthesis ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29121910
    },
    {
        "Id": 1898,
        "SKUNo": "AS2142",
        "CASNO": "78‐84‐2",
        "ProductName": "Iso‐BUTYRALDEHYDE 99% For Synthesis ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29121910
    },
    {
        "Id": 1899,
        "SKUNo": "AS2143",
        "CASNO": "7439‐ 89‐ 6",
        "ProductName": "IRON (METAL) POWDER ELECTROLYTIC ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 72051019
    },
    {
        "Id": 1900,
        "SKUNo": "AS2143",
        "CASNO": "7439‐ 89‐ 6",
        "ProductName": "IRON (METAL) POWDER ELECTROLYTIC ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 72051019
    },
    {
        "Id": 1901,
        "SKUNo": "AS2144",
        "CASNO": "7439‐ 89‐ 6",
        "ProductName": "IRON (METAL) FILLING 100 (MESH)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 72051019
    },
    {
        "Id": 1902,
        "SKUNo": "AS2144",
        "CASNO": "7439‐ 89‐ 6",
        "ProductName": "IRON (METAL) FILLING 100 (MESH)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 72051019
    },
    {
        "Id": 1903,
        "SKUNo": "AS2145",
        "CASNO": "10025‐83‐9",
        "ProductName": "IRIDIUM TRICHLORIDE FOR SYNTHESIS (IR 46%)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 1904,
        "SKUNo": "AS2146",
        "CASNO": "91‐ 56‐ 5",
        "ProductName": "ISATIN AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29337900
    },
    {
        "Id": 1905,
        "SKUNo": "AS2146",
        "CASNO": "91‐ 56‐ 5",
        "ProductName": "ISATIN AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29337900
    },
    {
        "Id": 1906,
        "SKUNo": "AS2147",
        "CASNO": "64742‐48‐9",
        "ProductName": "ISOPAR G",
        "PACKSIZE": "1LTR",
        "HSNCODE": 38229090
    },
    {
        "Id": 1907,
        "SKUNo": "AS2148",
        "CASNO": "64742‐48‐9",
        "ProductName": "ISOPAR L",
        "PACKSIZE": "1LTR",
        "HSNCODE": 38229090
    },
    {
        "Id": 1908,
        "SKUNo": "AS2149",
        "CASNO": "73‐ 32‐ 5",
        "ProductName": "L‐ISO‐LEUCINE FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1909,
        "SKUNo": "AS2149",
        "CASNO": "73‐ 32‐ 5",
        "ProductName": "L‐ISO‐LEUCINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1910,
        "SKUNo": "AS2150",
        "CASNO": "54‐85‐3",
        "ProductName": "ISONIAZIDE LR 99% (Isonicotinic Acid Hydrazide)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 1911,
        "SKUNo": "AS2150",
        "CASNO": "54‐85‐3",
        "ProductName": "ISONIAZIDE LR 99% (Isonicotinic Acid Hydrazide)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 1912,
        "SKUNo": "AS2151",
        "CASNO": "121‐ 91‐ 5",
        "ProductName": "ISOPHTHALIC ACID 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173960
    },
    {
        "Id": 1913,
        "SKUNo": "AS2152",
        "CASNO": "108‐ 21‐ 4",
        "ProductName": "ISO‐PROPYL ACETATE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153910
    },
    {
        "Id": 1914,
        "SKUNo": "AS2152",
        "CASNO": "108‐ 21‐ 4",
        "ProductName": "ISO‐PROPYL ACETATE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153910
    },
    {
        "Id": 1915,
        "SKUNo": "AS2153",
        "CASNO": "75‐ 31‐ 0",
        "ProductName": "iso‐PROPYLAMINE LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 1916,
        "SKUNo": "AS2153",
        "CASNO": "75‐ 31‐ 0",
        "ProductName": "iso‐PROPYLAMINE LR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 1917,
        "SKUNo": "AS2154",
        "CASNO": "367‐ 93‐ 1",
        "ProductName": "ISO‐PROPYL‐b‐D‐1‐THIOGALACTOPYRANOSIDE (IPTG)‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29329900
    },
    {
        "Id": 1918,
        "SKUNo": "AS2154",
        "CASNO": "367‐ 93‐ 1",
        "ProductName": "ISO‐PROPYL‐b‐D‐1‐THIOGALACTOPYRANOSIDE (IPTG)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1919,
        "SKUNo": "AS2154",
        "CASNO": "367‐ 93‐ 1",
        "ProductName": "ISO‐PROPYL‐b‐D‐1‐THIOGALACTOPYRANOSIDE (IPTG)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29329900
    },
    {
        "Id": 1920,
        "SKUNo": "AS2155",
        "CASNO": "621‐59‐0",
        "ProductName": "ISOVANILINE 98% ‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29121990
    },
    {
        "Id": 1921,
        "SKUNo": "AS2155",
        "CASNO": "621‐59‐0",
        "ProductName": "ISOVANILINE 98% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29121990
    },
    {
        "Id": 1922,
        "SKUNo": "AS2156",
        "CASNO": "97‐ 65‐ 4",
        "ProductName": "ITACONIC ACID  ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171960
    },
    {
        "Id": 1923,
        "SKUNo": "AS2157",
        "CASNO": "9002‐ 13‐ 5",
        "ProductName": "JACK BEAN MEAL‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079069
    },
    {
        "Id": 1924,
        "SKUNo": "AS2157",
        "CASNO": "9002‐ 13‐ 5",
        "ProductName": "JACK BEAN MEAL‐500GM  **",
        "PACKSIZE": "500GM",
        "HSNCODE": 35079069
    },
    {
        "Id": 1925,
        "SKUNo": "AS2158",
        "CASNO": "2869‐ 83‐ 2",
        "ProductName": "JANUS GREEN B   for Microscopy     C. I. No. 11050‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32041399
    },
    {
        "Id": 1926,
        "SKUNo": "AS2159",
        "CASNO": "2869‐ 83‐ 2",
        "ProductName": "JANUS GREEN B   for Microscopy      C. I. No. 11051‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041399
    },
    {
        "Id": 1927,
        "SKUNo": "AS2160",
        "CASNO": "62851‐ 42‐ 7",
        "ProductName": "JENNER'S STAIN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041399
    },
    {
        "Id": 1928,
        "SKUNo": "AS2160",
        "CASNO": "62851‐ 42‐ 7",
        "ProductName": "JENNER'S STAIN FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041399
    },
    {
        "Id": 1929,
        "SKUNo": "AS2161",
        "CASNO": "        ",
        "ProductName": "J.S.B. STAIN SOLUTION NO.1‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1930,
        "SKUNo": "AS2161",
        "CASNO": "",
        "ProductName": "J.S.B. STAIN SOLUTION NO.2‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1931,
        "SKUNo": "AS2162",
        "CASNO": "                  ",
        "ProductName": "KAISER’S GLYCEROL ‐GELATIN‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 1932,
        "SKUNo": "AS2163",
        "CASNO": "143‐ 66‐ 8",
        "ProductName": "KALIGNOST AR (Sodium Tetraphenyl Boron)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 1933,
        "SKUNo": "AS2163",
        "CASNO": "143‐ 66‐ 8",
        "ProductName": "KALIGNOST AR (Sodium Tetraphenyl Boron)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 1934,
        "SKUNo": "AS2164",
        "CASNO": "1332‐ 58‐ 7",
        "ProductName": "KAOLIN LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25070029
    },
    {
        "Id": 1935,
        "SKUNo": "AS2165",
        "CASNO": "",
        "ProductName": "KARL FISCHER REAGENT Pyridine Free‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1936,
        "SKUNo": "AS2166",
        "CASNO": "328‐ 50‐ 7",
        "ProductName": "a‐KETOGLUTARIC ACID PURISS ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 1937,
        "SKUNo": "AS2166",
        "CASNO": "328‐ 50‐ 7",
        "ProductName": "a‐KETOGLUTARIC ACID PURISS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 1938,
        "SKUNo": "AS2167",
        "CASNO": "91053‐39‐3",
        "ProductName": "KIESELGUHR (purified white)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38029019
    },
    {
        "Id": 1939,
        "SKUNo": "AS2167",
        "CASNO": "91053‐39‐3",
        "ProductName": "KIESELGUHR (purified white)‐10KG",
        "PACKSIZE": "10KG",
        "HSNCODE": 38029019
    },
    {
        "Id": 1940,
        "SKUNo": "AS2168",
        "CASNO": "525‐ 79‐ 1",
        "ProductName": "KINETIN PURISS CHR‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29349900
    },
    {
        "Id": 1941,
        "SKUNo": "AS2168",
        "CASNO": "525‐ 79‐ 1",
        "ProductName": "KINETIN PURISS CHR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1942,
        "SKUNo": "AS2168",
        "CASNO": "525‐ 79‐ 1",
        "ProductName": "KINETIN PURISS CHR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 1943,
        "SKUNo": "AS2169",
        "CASNO": "                ",
        "ProductName": "KOVAC’S INDOLE REAGENT‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 1944,
        "SKUNo": "AS2170",
        "CASNO": "50‐ 21‐ 5",
        "ProductName": "LACTIC ACID LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29181110
    },
    {
        "Id": 1945,
        "SKUNo": "AS2170",
        "CASNO": "50‐ 21‐ 5",
        "ProductName": "LACTIC ACID LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29181110
    },
    {
        "Id": 1946,
        "SKUNo": "AS2171",
        "CASNO": "50‐ 21‐ 5",
        "ProductName": "LACTIC ACID AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29181110
    },
    {
        "Id": 1947,
        "SKUNo": "AS2171",
        "CASNO": "50‐ 21‐ 5",
        "ProductName": "LACTIC ACID AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29181110
    },
    {
        "Id": 1948,
        "SKUNo": "AS2172",
        "CASNO": "",
        "ProductName": "LACTOPHENOL (COTTON BLUE) FOR MICROSCOPY‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 1949,
        "SKUNo": "AS2173",
        "CASNO": "10039‐ 26‐ 6",
        "ProductName": "LACTOSE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17021110
    },
    {
        "Id": 1950,
        "SKUNo": "AS2174",
        "CASNO": "10039‐ 26‐ 6",
        "ProductName": "LACTOSE (MONOHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17021110
    },
    {
        "Id": 1951,
        "SKUNo": "AS2175",
        "CASNO": "8006‐ 54‐ 0",
        "ProductName": "LANOLIN ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 15050020
    },
    {
        "Id": 1952,
        "SKUNo": "AS2176",
        "CASNO": "54451‐ 24‐ 0",
        "ProductName": "LANTHANUM CARBOANTE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1953,
        "SKUNo": "AS2176",
        "CASNO": "54451‐ 24‐ 0",
        "ProductName": "LANTHANUM CARBOANTE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1954,
        "SKUNo": "AS2177",
        "CASNO": "10025‐84‐0",
        "ProductName": "LANTHANIUM CHLORIDE  AR   ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1955,
        "SKUNo": "AS2177",
        "CASNO": "10025‐84‐0",
        "ProductName": "LANTHANIUM CHLORIDE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1956,
        "SKUNo": "AS2178",
        "CASNO": "10277‐ 43‐ 7",
        "ProductName": "LANTHANIUM NITRATE  AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1957,
        "SKUNo": "AS2178",
        "CASNO": "10277‐ 43‐ 7",
        "ProductName": "LANTHANIUM NITRATE  AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1958,
        "SKUNo": "AS2179",
        "CASNO": "1312‐ 81‐ 8",
        "ProductName": "LANTHANIUM OXIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1959,
        "SKUNo": "AS2179",
        "CASNO": "1312‐ 81‐ 8",
        "ProductName": "LANTHANIUM OXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 1960,
        "SKUNo": "AS2180",
        "CASNO": "143‐ 07‐ 7",
        "ProductName": "LAURIC ACID LR (Dodecanoic acid)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 1961,
        "SKUNo": "AS2181",
        "CASNO": "112‐ 53‐ 8",
        "ProductName": "LAURYL ALCOHOL FOR SYNTHESIS 98% (Dodecan‐1‐ol)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051700
    },
    {
        "Id": 1962,
        "SKUNo": "AS2181",
        "CASNO": "112‐ 53‐ 8",
        "ProductName": "LAURYL ALCOHOL FOR SYNTHESIS 98% (Dodecan‐1‐ol)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051700
    },
    {
        "Id": 1963,
        "SKUNo": "AS2182",
        "CASNO": "7439‐ 92‐ 1",
        "ProductName": "LEAD (METAL) FOIL ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 78042000
    },
    {
        "Id": 1964,
        "SKUNo": "AS2183",
        "CASNO": "7439‐ 92‐ 1",
        "ProductName": "LEAD (METAL) FOIL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 78042000
    },
    {
        "Id": 1965,
        "SKUNo": "AS2184",
        "CASNO": "7439‐ 92‐ 1",
        "ProductName": "LEAD (METAL) GRANULAR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 78042000
    },
    {
        "Id": 1966,
        "SKUNo": "AS2185",
        "CASNO": "7439‐ 92‐ 1",
        "ProductName": "LEAD POWDER (LAB)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 78042000
    },
    {
        "Id": 1967,
        "SKUNo": "AS2186",
        "CASNO": "6080‐ 56‐ 4",
        "ProductName": "LEAD ACETATE (TRIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 1968,
        "SKUNo": "AS2187",
        "CASNO": "6080‐ 56‐ 4",
        "ProductName": "LEAD ACETATE (TRIHYDRATE) AR 99.5%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 1969,
        "SKUNo": "AS2188",
        "CASNO": "51404‐ 69‐ 4",
        "ProductName": "LEAD ACETATE BASIC ANHYDROUS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 1970,
        "SKUNo": "AS2188",
        "CASNO": "51404‐ 69‐ 4",
        "ProductName": "LEAD ACETATE BASIC ANHYDROUS‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 1971,
        "SKUNo": "AS2188",
        "CASNO": "51404‐ 69‐ 4",
        "ProductName": "LEAD ACETATE BASIC ANHYDROUS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 1972,
        "SKUNo": "AS2189",
        "CASNO": "10031‐ 22‐ 8",
        "ProductName": "LEAD BROMIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 1973,
        "SKUNo": "AS2190",
        "CASNO": "598‐ 63‐ 0",
        "ProductName": "LEAD CARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 1974,
        "SKUNo": "AS2191",
        "CASNO": "598‐ 63‐ 0",
        "ProductName": "LEAD CARBONATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 1975,
        "SKUNo": "AS2192",
        "CASNO": "7758‐ 95‐ 4",
        "ProductName": "LEAD CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 1976,
        "SKUNo": "AS2193",
        "CASNO": "7758‐ 97‐ 6",
        "ProductName": "LEAD CHROMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 1977,
        "SKUNo": "AS2194",
        "CASNO": "7758‐ 97‐ 6",
        "ProductName": "LEAD CHROMATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 1978,
        "SKUNo": "AS2194",
        "CASNO": "7758‐ 97‐ 6",
        "ProductName": "LEAD CHROMATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 1979,
        "SKUNo": "AS2195",
        "CASNO": "1309‐ 60‐ 0",
        "ProductName": "LEAD DIOXIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28249000
    },
    {
        "Id": 1980,
        "SKUNo": "AS2196",
        "CASNO": "1309‐ 60‐ 0",
        "ProductName": "LEAD DIOXIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28249000
    },
    {
        "Id": 1981,
        "SKUNo": "AS2197",
        "CASNO": "1317‐ 36‐ 8",
        "ProductName": "LEAD MONOXIDE (LITHARGE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28241010
    },
    {
        "Id": 1982,
        "SKUNo": "AS2197",
        "CASNO": "1317‐ 36‐ 8",
        "ProductName": "LEAD MONOXIDE (LITHARGE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28241010
    },
    {
        "Id": 1983,
        "SKUNo": "AS2198",
        "CASNO": "1317‐ 36‐ 8",
        "ProductName": "LEAD MONOXIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28241010
    },
    {
        "Id": 1984,
        "SKUNo": "AS2199",
        "CASNO": "10099‐ 74‐ 8",
        "ProductName": "LEAD NITRATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1985,
        "SKUNo": "AS2200",
        "CASNO": "10099‐ 74‐ 8",
        "ProductName": "LEAD NITRATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 1986,
        "SKUNo": "AS2201",
        "CASNO": "1314‐ 41‐ 6",
        "ProductName": "LEAD OXIDE (RED LEAD) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28249000
    },
    {
        "Id": 1987,
        "SKUNo": "AS2202",
        "CASNO": "7428‐48‐0",
        "ProductName": "LEAD STEARATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29157090
    },
    {
        "Id": 1988,
        "SKUNo": "AS2202",
        "CASNO": "7446‐ 14‐ 2",
        "ProductName": "LEAD SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 1989,
        "SKUNo": "AS2203",
        "CASNO": "12627‐ 53‐ 1",
        "ProductName": "LEISHMANS STAIN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1990,
        "SKUNo": "AS2203",
        "CASNO": "12627‐ 53‐ 1",
        "ProductName": "LEISHMANS STAIN FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1991,
        "SKUNo": "AS2204",
        "CASNO": "12627‐ 53‐ 1",
        "ProductName": "LEISHMANS STAINING SOLUTION‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 32041975
    },
    {
        "Id": 1992,
        "SKUNo": "AS2205",
        "CASNO": "61‐ 90‐ 5",
        "ProductName": "L‐LEUCINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1993,
        "SKUNo": "AS2205",
        "CASNO": "61‐ 90‐ 5",
        "ProductName": "L‐LEUCINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 1994,
        "SKUNo": "AS2206",
        "CASNO": "61‐ 90‐ 5",
        "ProductName": "L‐LEUCINE FOR BIOCHEMISTRY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29224990
    },
    {
        "Id": 1995,
        "SKUNo": "AS2207",
        "CASNO": "123‐76‐2",
        "ProductName": "LEVULINIC ACID‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 1996,
        "SKUNo": "AS2208",
        "CASNO": "5141‐ 20‐ 8",
        "ProductName": "LIGHT GREEN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1997,
        "SKUNo": "AS2208",
        "CASNO": "5141‐ 20‐ 8",
        "ProductName": "LIGHT GREEN FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 1998,
        "SKUNo": "AS2209",
        "CASNO": "1305‐62‐0",
        "ProductName": "LIME WATER‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28259040
    },
    {
        "Id": 1999,
        "SKUNo": "AS2210",
        "CASNO": "3087‐16‐9",
        "ProductName": "LISSAMINE GREEN  C.I. NO.44090‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2000,
        "SKUNo": "AS2211",
        "CASNO": "546‐ 89‐ 4",
        "ProductName": "LITHIUM ACETATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2001,
        "SKUNo": "AS2212",
        "CASNO": "546‐ 89‐ 4",
        "ProductName": "LITHIUM ACETATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2002,
        "SKUNo": "AS2213",
        "CASNO": "16853‐85‐3",
        "ProductName": "LITHIUM ALUMINIUM HYDRIDE (LAH) POWDER,‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28500010
    },
    {
        "Id": 2003,
        "SKUNo": "AS2214",
        "CASNO": "7550‐ 35‐ 8",
        "ProductName": "LITHIUM BROMIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275990
    },
    {
        "Id": 2004,
        "SKUNo": "AS2215",
        "CASNO": "554‐ 13‐ 2",
        "ProductName": "LITHIUM CARBONATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369100
    },
    {
        "Id": 2005,
        "SKUNo": "AS2215",
        "CASNO": "554‐ 13‐ 2",
        "ProductName": "LITHIUM CARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369100
    },
    {
        "Id": 2006,
        "SKUNo": "AS2216",
        "CASNO": "554‐ 13‐ 2",
        "ProductName": "LITHIUM CARBONATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28369100
    },
    {
        "Id": 2007,
        "SKUNo": "AS2216",
        "CASNO": "554‐ 13‐ 2",
        "ProductName": "LITHIUM CARBONATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369100
    },
    {
        "Id": 2008,
        "SKUNo": "AS2217",
        "CASNO": "7447‐ 41‐ 8",
        "ProductName": "LITHIUM CHLORIDE LR (ANHYDROUS)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2009,
        "SKUNo": "AS2217",
        "CASNO": "7447‐ 41‐ 8",
        "ProductName": "LITHIUM CHLORIDE LR (ANHYDROUS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2010,
        "SKUNo": "AS2218",
        "CASNO": "7447‐ 41‐ 8",
        "ProductName": "LITHIUM CHLORIDE AR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2011,
        "SKUNo": "AS2218",
        "CASNO": "7447‐ 41‐ 8",
        "ProductName": "LITHIUM CHLORIDE AR (ANHYDROUS) ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2012,
        "SKUNo": "AS2219",
        "CASNO": "6080‐ 58‐ 6",
        "ProductName": "tri‐LITHIUM CITRATE(TETRAHYDRATE) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 2013,
        "SKUNo": "AS2219",
        "CASNO": "6080‐ 58‐ 6",
        "ProductName": "tri‐LITHIUM CITRATE(TETRAHYDRATE) AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29181590
    },
    {
        "Id": 2014,
        "SKUNo": "AS2220",
        "CASNO": "7789‐ 24‐ 4",
        "ProductName": "LITHIUM FLOURIDE 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 2015,
        "SKUNo": "AS2221",
        "CASNO": "1310‐ 66‐ 3",
        "ProductName": "LITHIUM HYDROXIDE (MONOHYDRATE) ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28252000
    },
    {
        "Id": 2016,
        "SKUNo": "AS2221",
        "CASNO": "1310‐ 66‐ 3",
        "ProductName": "LITHIUM HYDROXIDE (MONOHYDRATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28252000
    },
    {
        "Id": 2017,
        "SKUNo": "AS2222",
        "CASNO": "1310‐ 66‐ 3",
        "ProductName": "LITHIUM HYDROXIDE AR (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28252000
    },
    {
        "Id": 2018,
        "SKUNo": "AS2222",
        "CASNO": "1310‐ 66‐ 3",
        "ProductName": "LITHIUM HYDROXIDE AR (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28252000
    },
    {
        "Id": 2019,
        "SKUNo": "AS2223",
        "CASNO": "867‐ 55‐ 0",
        "ProductName": "LITHIUM LACTATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 2020,
        "SKUNo": "AS2224",
        "CASNO": "13453‐ 69‐ 5",
        "ProductName": "LITHIUM METABORATE (ANHYDROUS) LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28402090
    },
    {
        "Id": 2021,
        "SKUNo": "AS2225",
        "CASNO": "13453‐ 69‐ 5",
        "ProductName": "LITHIUM METABORATE (ANHYDROUS)  AR  99% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28402090
    },
    {
        "Id": 2022,
        "SKUNo": "AS2225",
        "CASNO": "13453‐ 69‐ 5",
        "ProductName": "LITHIUM METABORATE (ANHYDROUS)  AR  99%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28402090
    },
    {
        "Id": 2023,
        "SKUNo": "AS2226",
        "CASNO": "10102‐ 25‐ 7",
        "ProductName": "LITHIUM SULPHATE (MONO) LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2024,
        "SKUNo": "AS2226",
        "CASNO": "10102‐ 25‐ 7",
        "ProductName": "LITHIUM SULPHATE (MONO) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2025,
        "SKUNo": "AS2225",
        "CASNO": "10102‐ 25‐ 7",
        "ProductName": "LITHIUM SULPHATE (MONO)  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2026,
        "SKUNo": "AS2225",
        "CASNO": "10102‐ 25‐ 7",
        "ProductName": "LITHIUM SULPHATE (MONO)  AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2027,
        "SKUNo": "AS2226",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "di‐LITHIUM TETRABORATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28402090
    },
    {
        "Id": 2028,
        "SKUNo": "AS2226",
        "CASNO": "10043‐ 35‐ 3",
        "ProductName": "di‐LITHIUM TETRABORATE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28402090
    },
    {
        "Id": 2029,
        "SKUNo": "AS2227",
        "CASNO": "1393‐ 92‐ 6",
        "ProductName": "LITMUS INDICATOR LR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 2030,
        "SKUNo": "AS2227",
        "CASNO": "1393‐ 92‐ 6",
        "ProductName": "LITMUS INDICATOR LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 2031,
        "SKUNo": "AS2227",
        "CASNO": "1393‐ 92‐ 6",
        "ProductName": "LITMUS INDICATOR LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 2032,
        "SKUNo": "AS2228",
        "CASNO": "1393‐ 92‐ 6",
        "ProductName": "LITMUS (pH INDICATOR) SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 2033,
        "SKUNo": "AS2229",
        "CASNO": "        ",
        "ProductName": "LITMUS BLUE INDICATOR PAPER‐10BKTS",
        "PACKSIZE": "10 BKTS",
        "HSNCODE": 38220090
    },
    {
        "Id": 2034,
        "SKUNo": "AS2230",
        "CASNO": null,
        "ProductName": "LITMUS BLUE SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2035,
        "SKUNo": "AS2231",
        "CASNO": "",
        "ProductName": "LITMUS RED INDICATOR PAPER‐10BKTS",
        "PACKSIZE": "10 BKTS",
        "HSNCODE": 38220090
    },
    {
        "Id": 2036,
        "SKUNo": "AS2232",
        "CASNO": null,
        "ProductName": "LITMUS RED SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2037,
        "SKUNo": "AS2233",
        "CASNO": "521‐31‐3",
        "ProductName": "LUMINOL 97%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2038,
        "SKUNo": "AS2233",
        "CASNO": "521‐31‐3",
        "ProductName": "LUMINOL 97%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2039,
        "SKUNo": "AS2234",
        "CASNO": "583‐61‐9",
        "ProductName": "2,3‐LUTIDINE (2,3‐DIMETHYLPYRIDENE) FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29333918
    },
    {
        "Id": 2040,
        "SKUNo": "AS2235",
        "CASNO": "108 ‐48 ‐5",
        "ProductName": "2, 6‐LUTIDINE FOR SYNTHESIS 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333918
    },
    {
        "Id": 2041,
        "SKUNo": "AS2236",
        "CASNO": "",
        "ProductName": "LIVER EXTRACT POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 30012020
    },
    {
        "Id": 2042,
        "SKUNo": "AS2237",
        "CASNO": "          ",
        "ProductName": "LUGOL'S IODINE SOLUTION FOR MICROSCOPY‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2043,
        "SKUNo": "AS2237",
        "CASNO": "",
        "ProductName": "LUGOL'S IODINE SOLUTION FOR MICROSCOPY‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2044,
        "SKUNo": "AS2238",
        "CASNO": "657‐ 27‐ 2",
        "ProductName": "L‐LYSINE MONOHYDROCHLORIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224100
    },
    {
        "Id": 2045,
        "SKUNo": "AS2238",
        "CASNO": "657‐ 27‐ 2",
        "ProductName": "L‐LYSINE MONOHYDROCHLORIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224100
    },
    {
        "Id": 2046,
        "SKUNo": "AS2239",
        "CASNO": "12772‐68‐8",
        "ProductName": "LYSOL (CRESOL AND SOAP SOLUTION)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38089990
    },
    {
        "Id": 2047,
        "SKUNo": "AS2239",
        "CASNO": "12772‐68‐8",
        "ProductName": "LYSOL (CRESOL AND SOAP SOLUTION)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 38089990
    },
    {
        "Id": 2048,
        "SKUNo": "AS2240",
        "CASNO": "7439‐ 95‐ 4",
        "ProductName": "MAGNESIUM (METAL) RIBBON ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 81041900
    },
    {
        "Id": 2049,
        "SKUNo": "AS2241",
        "CASNO": "7439‐ 95‐ 4",
        "ProductName": "MAGNESIUM (METAL) TURNING‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81043010
    },
    {
        "Id": 2050,
        "SKUNo": "AS2242",
        "CASNO": "7439‐ 95‐ 4",
        "ProductName": "MAGNESIUM (METAL)  POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81041900
    },
    {
        "Id": 2051,
        "SKUNo": "AS2242",
        "CASNO": "7439‐ 95‐ 4",
        "ProductName": "MAGNESIUM (METAL)  POWDER ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81041900
    },
    {
        "Id": 2052,
        "SKUNo": "AS2243",
        "CASNO": "16674‐ 78‐ 5",
        "ProductName": "MAGNESIUM ACETATE (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152920
    },
    {
        "Id": 2053,
        "SKUNo": "AS2243",
        "CASNO": "16674‐ 78‐ 5",
        "ProductName": "MAGNESIUM ACETATE (TETRAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29152920
    },
    {
        "Id": 2054,
        "SKUNo": "AS2244",
        "CASNO": "16674‐ 78‐ 5",
        "ProductName": "MAGNESIUM ACETATE AR (TETRAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152920
    },
    {
        "Id": 2055,
        "SKUNo": "AS2245",
        "CASNO": "39409‐ 82‐ 0",
        "ProductName": "MAGNESIUM CARBONATE (LIGHT) LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369920
    },
    {
        "Id": 2056,
        "SKUNo": "AS2245",
        "CASNO": "39409‐ 82‐ 0",
        "ProductName": "MAGNESIUM CARBONATE (LIGHT) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369920
    },
    {
        "Id": 2057,
        "SKUNo": "AS2246",
        "CASNO": "39409‐ 82‐ 0",
        "ProductName": "MAGNESIUM CARBONATE (LIGHT) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369920
    },
    {
        "Id": 2058,
        "SKUNo": "AS2247",
        "CASNO": "7791‐ 18‐ 6",
        "ProductName": "MAGNESIUM CHLORIDE LR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273100
    },
    {
        "Id": 2059,
        "SKUNo": "AS2247",
        "CASNO": "7791‐ 18‐ 6",
        "ProductName": "MAGNESIUM CHLORIDE LR (HEXAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273100
    },
    {
        "Id": 2060,
        "SKUNo": "AS2248",
        "CASNO": "7791‐ 18‐ 6",
        "ProductName": "MAGNESIUM CHLORIDE AR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273100
    },
    {
        "Id": 2061,
        "SKUNo": "AS2248",
        "CASNO": "7791‐ 18‐ 6",
        "ProductName": "MAGNESIUM CHLORIDE AR (HEXAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273100
    },
    {
        "Id": 2062,
        "SKUNo": "AS2249",
        "CASNO": "7783‐ 40‐ 6",
        "ProductName": "MAGNESIUM FLUORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261910
    },
    {
        "Id": 2063,
        "SKUNo": "AS2250",
        "CASNO": "1309‐ 42‐ 8",
        "ProductName": "MAGNESIUM HYDROXIDE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28161010
    },
    {
        "Id": 2064,
        "SKUNo": "AS2251",
        "CASNO": "13446‐ 18‐ 9",
        "ProductName": "MAGNESIUM NITRATE (HEXAHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342920
    },
    {
        "Id": 2065,
        "SKUNo": "AS2252",
        "CASNO": "13446‐ 18‐ 9",
        "ProductName": "MAGNESIUM NITRATE (HEXAHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342920
    },
    {
        "Id": 2066,
        "SKUNo": "AS2253",
        "CASNO": "1309‐ 48‐ 4",
        "ProductName": "MAGNESIUM OXIDE (LIGHT) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25199040
    },
    {
        "Id": 2067,
        "SKUNo": "AS2253",
        "CASNO": "1309‐ 48‐ 4",
        "ProductName": "MAGNESIUM OXIDE (LIGHT) LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 25199040
    },
    {
        "Id": 2068,
        "SKUNo": "AS2254",
        "CASNO": "1309‐ 48‐ 4",
        "ProductName": "MAGNESIUM OXIDE (LIGHT) AR  ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25199040
    },
    {
        "Id": 2069,
        "SKUNo": "AS2255",
        "CASNO": "1309‐ 48‐ 4",
        "ProductName": "MAGNESIUM OXIDE (HEAVY) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25199040
    },
    {
        "Id": 2070,
        "SKUNo": "AS2256",
        "CASNO": "64010‐ 42‐ 0",
        "ProductName": "MAGNESIUM PERCHLORATE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299010
    },
    {
        "Id": 2071,
        "SKUNo": "AS2256",
        "CASNO": "64010‐ 42‐ 0",
        "ProductName": "MAGNESIUM PERCHLORATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299010
    },
    {
        "Id": 2072,
        "SKUNo": "AS2257",
        "CASNO": "64010‐ 42‐ 0",
        "ProductName": "MAGNESIUM PERCHLORATE DRIED MAR 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299010
    },
    {
        "Id": 2073,
        "SKUNo": "AS2257",
        "CASNO": "64010‐ 42‐ 0",
        "ProductName": "MAGNESIUM PERCHLORATE DRIED MAR 99%   ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299010
    },
    {
        "Id": 2074,
        "SKUNo": "AS2258",
        "CASNO": "7782‐ 75‐ 4",
        "ProductName": "MAGNESIUM PHOSPHATE DIBASIC EXTRA  LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352920
    },
    {
        "Id": 2075,
        "SKUNo": "AS2258",
        "CASNO": "557‐ 04‐ 0",
        "ProductName": "MAGNESIUM STEARATE  PRECIPITED (FINE POWDER)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29157090
    },
    {
        "Id": 2076,
        "SKUNo": "AS2259",
        "CASNO": "10034‐ 99‐ 8",
        "ProductName": "MAGNESIUM SULPHATE LR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332100
    },
    {
        "Id": 2077,
        "SKUNo": "AS2259",
        "CASNO": "10034‐ 99‐ 8",
        "ProductName": "MAGNESIUM SULPHATE LR (HEPTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332100
    },
    {
        "Id": 2078,
        "SKUNo": "AS2260",
        "CASNO": "10034‐ 99‐ 8",
        "ProductName": "MAGNESIUM SULPHATE AR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332100
    },
    {
        "Id": 2079,
        "SKUNo": "AS2260",
        "CASNO": "10034‐ 99‐ 8",
        "ProductName": "MAGNESIUM SULPHATE AR (HEPTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332100
    },
    {
        "Id": 2080,
        "SKUNo": "AS2261",
        "CASNO": "39365‐87‐2",
        "ProductName": "MAGENSIUM TRISILICATE HYDRATE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28399010
    },
    {
        "Id": 2081,
        "SKUNo": "AS2262",
        "CASNO": "74‐ 39‐ 6",
        "ProductName": "MAGNESON I AR Sensitivity detects 1 ppm Mg ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2082,
        "SKUNo": "AS2262",
        "CASNO": "74‐ 39‐ 6",
        "ProductName": "MAGNESON I AR Sensitivity detects 1 ppm Mg‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2083,
        "SKUNo": "AS2263",
        "CASNO": "2437‐ 29‐ 8",
        "ProductName": "MALACHITE GREEN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041361
    },
    {
        "Id": 2084,
        "SKUNo": "AS2263",
        "CASNO": "2437‐ 29‐ 8",
        "ProductName": "MALACHITE GREEN FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041361
    },
    {
        "Id": 2085,
        "SKUNo": "AS2263",
        "CASNO": "2437‐ 29‐ 8",
        "ProductName": "MALACHITE GREEN FOR MICROSCOPY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 32041361
    },
    {
        "Id": 2086,
        "SKUNo": "AS2264",
        "CASNO": "2437‐29‐8",
        "ProductName": "MALACHITE GREEN SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2087,
        "SKUNo": "AS2265",
        "CASNO": "110‐ 16‐ 7",
        "ProductName": "MALEIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 2088,
        "SKUNo": "AS2265",
        "CASNO": "110‐ 16‐ 7",
        "ProductName": "MALEIC ACID FOR SYNTHESIS‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29171910
    },
    {
        "Id": 2089,
        "SKUNo": "AS2266",
        "CASNO": "110‐ 16‐ 7",
        "ProductName": "MALEIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 2090,
        "SKUNo": "AS2266",
        "CASNO": "110‐ 16‐ 7",
        "ProductName": "MALEIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171910
    },
    {
        "Id": 2091,
        "SKUNo": "AS2267",
        "CASNO": "108‐ 31‐ 6",
        "ProductName": "MALEIC ANHYDRIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171400
    },
    {
        "Id": 2092,
        "SKUNo": "AS2267",
        "CASNO": "108‐ 31‐ 6",
        "ProductName": "MALEIC ANHYDRIDE ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29171400
    },
    {
        "Id": 2093,
        "SKUNo": "AS2268",
        "CASNO": "123‐ 33‐ 1",
        "ProductName": "MALEIC HYDRAZIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2094,
        "SKUNo": "AS2268",
        "CASNO": "123‐ 33‐ 1",
        "ProductName": "MALEIC HYDRAZIDE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29339900
    },
    {
        "Id": 2095,
        "SKUNo": "AS2269",
        "CASNO": "617‐ 48‐ 1",
        "ProductName": "DL‐MALIC  ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2096,
        "SKUNo": "AS2270",
        "CASNO": "141‐ 82‐ 2",
        "ProductName": "MALONIC ACID FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29171920
    },
    {
        "Id": 2097,
        "SKUNo": "AS2270",
        "CASNO": "141‐ 82‐ 2",
        "ProductName": "MALONIC ACID FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29171920
    },
    {
        "Id": 2098,
        "SKUNo": "AS2271",
        "CASNO": "141‐ 82‐ 2",
        "ProductName": "MALONIC ACID AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171920
    },
    {
        "Id": 2099,
        "SKUNo": "AS2271",
        "CASNO": "141‐ 82‐ 2",
        "ProductName": "MALONIC ACID AR ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29171920
    },
    {
        "Id": 2100,
        "SKUNo": "AS2271",
        "CASNO": "141‐ 82‐ 2",
        "ProductName": "MALONIC ACID AR ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29171920
    },
    {
        "Id": 2101,
        "SKUNo": "AS2272",
        "CASNO": "8002‐ 48‐ 0",
        "ProductName": "MALT EXTRACT POWDER FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 19019010
    },
    {
        "Id": 2102,
        "SKUNo": "AS2273",
        "CASNO": "9050‐36‐6",
        "ProductName": "MALTO DEXTRINE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29094900
    },
    {
        "Id": 2103,
        "SKUNo": "AS2274",
        "CASNO": "6363‐ 53‐ 7",
        "ProductName": "MALTOSE MONOHYDRATE FOR BACTERIOLOGY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 17029020
    },
    {
        "Id": 2104,
        "SKUNo": "AS2274",
        "CASNO": "6363‐ 53‐ 7",
        "ProductName": "MALTOSE MONOHYDRATE FOR BACTERIOLOGY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 17029020
    },
    {
        "Id": 2105,
        "SKUNo": "AS2274",
        "CASNO": "6363‐ 53‐ 7",
        "ProductName": "MALTOSE MONOHYDRATE FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17029020
    },
    {
        "Id": 2106,
        "SKUNo": "AS2275",
        "CASNO": "90‐ 64‐ 2",
        "ProductName": "D‐MANDELIC ACID ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2107,
        "SKUNo": "AS2275",
        "CASNO": "90‐ 64‐ 2",
        "ProductName": "D‐MANDELIC ACID ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2108,
        "SKUNo": "AS2276",
        "CASNO": "611‐ 71‐ 2",
        "ProductName": "R(‐) MANDELIC ACID 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2109,
        "SKUNo": "AS2277",
        "CASNO": "17199‐ 29‐ 0",
        "ProductName": "S(+) MANDELIC ACID 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2110,
        "SKUNo": "AS2278",
        "CASNO": "90‐ 64‐ 2",
        "ProductName": "DL‐MANDELIC ACID  99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2111,
        "SKUNo": "AS2278",
        "CASNO": "90‐ 64‐ 2",
        "ProductName": "DL‐MANDELIC ACID  99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181990
    },
    {
        "Id": 2112,
        "SKUNo": "AS2279",
        "CASNO": "7439‐ 96‐ 5",
        "ProductName": "MANGANESE POWDER (LAB)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 81110090
    },
    {
        "Id": 2113,
        "SKUNo": "AS2280",
        "CASNO": "6156‐ 78‐ 1",
        "ProductName": "MANGANESE (II) ACETATE(TETRAHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152930
    },
    {
        "Id": 2114,
        "SKUNo": "AS2280",
        "CASNO": "6156‐ 78‐ 1",
        "ProductName": "MANGANESE (II) ACETATE  AR (TETRAHYDRATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152930
    },
    {
        "Id": 2115,
        "SKUNo": "AS2281",
        "CASNO": "34156‐ 69‐ 9",
        "ProductName": "MANGANESE CARBONATE (MANGANOUS  CARBONATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 2116,
        "SKUNo": "AS2282",
        "CASNO": "13446‐ 34‐ 9",
        "ProductName": "MANGANESE (II) CHLORIDE PURIFEID (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2117,
        "SKUNo": "AS2282",
        "CASNO": "13446‐ 34‐ 9",
        "ProductName": "MANGANESE (II) CHLORIDE PURIFEID (TETRAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273990
    },
    {
        "Id": 2118,
        "SKUNo": "AS2283",
        "CASNO": "13446‐ 34‐ 9",
        "ProductName": "MANGANESE (II) CHLORIDE AR (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 2119,
        "SKUNo": "AS2284",
        "CASNO": "1313‐ 13‐ 9",
        "ProductName": "MANGANESE DIOXIDE TECH.‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28201000
    },
    {
        "Id": 2120,
        "SKUNo": "AS2284",
        "CASNO": "1313‐ 13‐ 9",
        "ProductName": "MANGANESE DIOXIDE TECH.‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28201000
    },
    {
        "Id": 2121,
        "SKUNo": "AS2285",
        "CASNO": "1313‐ 13‐ 9",
        "ProductName": "MANGANESE DIOXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28201000
    },
    {
        "Id": 2122,
        "SKUNo": "AS2286",
        "CASNO": "10034‐96‐ 5",
        "ProductName": "MANGANESE (II) SULPHATE PURIFIED (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332940
    },
    {
        "Id": 2123,
        "SKUNo": "AS2286",
        "CASNO": "10034‐96‐ 5",
        "ProductName": "MANGANESE (II) SULPHATE PURIFIED (MONOHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332940
    },
    {
        "Id": 2124,
        "SKUNo": "AS2287",
        "CASNO": "10034‐96‐ 5",
        "ProductName": "MANGANESE (II) SULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332940
    },
    {
        "Id": 2125,
        "SKUNo": "AS2288",
        "CASNO": "69‐ 65‐ 8",
        "ProductName": "D(‐) MANNITOL LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29054300
    },
    {
        "Id": 2126,
        "SKUNo": "AS2288",
        "CASNO": "69‐ 65‐ 8",
        "ProductName": "D(‐) MANNITOL LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29054300
    },
    {
        "Id": 2127,
        "SKUNo": "AS2288",
        "CASNO": "69‐ 65‐ 8",
        "ProductName": "D(‐) MANNITOL LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29054300
    },
    {
        "Id": 2128,
        "SKUNo": "AS2289",
        "CASNO": "69‐ 65‐ 8",
        "ProductName": "D(‐) MANNITOL AR FOR BACTERIOLOGY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29054300
    },
    {
        "Id": 2129,
        "SKUNo": "AS2289",
        "CASNO": "69‐ 65‐ 8",
        "ProductName": "D(‐) MANNITOL AR FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29054300
    },
    {
        "Id": 2130,
        "SKUNo": "AS2290",
        "CASNO": "3458‐ 28‐ 4",
        "ProductName": "D‐MANNOSE 99% FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2131,
        "SKUNo": "AS2290",
        "CASNO": "3458‐ 28‐ 4",
        "ProductName": "D‐MANNOSE 99% FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2132,
        "SKUNo": "AS2290",
        "CASNO": "3458‐ 28‐ 4",
        "ProductName": "D‐MANNOSE 99% FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2133,
        "SKUNo": "AS2291",
        "CASNO": "95713‐52‐3",
        "ProductName": "MARFEY'S REAGENT (FDAA) >99% BY HPLC. (1‐FLUORO‐2‐4‐DINITROPHENYL‐5‐L‐ALANINE AMIDE)",
        "PACKSIZE": "100MG",
        "HSNCODE": 29242990
    },
    {
        "Id": 2134,
        "SKUNo": "AS2292",
        "CASNO": "",
        "ProductName": "MAY AND GRUNWALD’S STAIN FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2135,
        "SKUNo": "AS2293",
        "CASNO": "                ",
        "ProductName": "MAY & GRUNWALD’S SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 2136,
        "SKUNo": "AS2294",
        "CASNO": "                ",
        "ProductName": "MEAT EXTRACT POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 16030010
    },
    {
        "Id": 2137,
        "SKUNo": "AS2295",
        "CASNO": "108‐ 78‐ 1",
        "ProductName": "MELAMINE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29336100
    },
    {
        "Id": 2138,
        "SKUNo": "AS2296",
        "CASNO": "66009‐ 10‐ 7",
        "ProductName": "D(+)MELIBIOSE PURISS 99%‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2139,
        "SKUNo": "AS2296",
        "CASNO": "66009‐ 10‐ 7",
        "ProductName": "D(+)MELIBIOSE PURISS 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2140,
        "SKUNo": "AS2297",
        "CASNO": "58‐ 27‐ 5",
        "ProductName": "MENADIONE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29362990
    },
    {
        "Id": 2141,
        "SKUNo": "AS2297",
        "CASNO": "58‐ 27‐ 5",
        "ProductName": "MENADIONE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362990
    },
    {
        "Id": 2142,
        "SKUNo": "AS2298",
        "CASNO": "2216‐ 51‐ 5",
        "ProductName": "MENTHOL CRYSTALS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29061100
    },
    {
        "Id": 2143,
        "SKUNo": "AS2299",
        "CASNO": "60‐ 24‐ 2",
        "ProductName": "2‐MERCAPTOETHANOL FOR SYNTHESIS‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 2144,
        "SKUNo": "AS2299",
        "CASNO": "60‐ 24‐ 2",
        "ProductName": "2‐MERCAPTOETHANOL FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 2145,
        "SKUNo": "AS2300",
        "CASNO": "60‐ 24‐ 2",
        "ProductName": "2‐MERCAPTOETHANOL AR‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 2146,
        "SKUNo": "AS2300",
        "CASNO": "60‐ 24‐ 2",
        "ProductName": "2‐MERCAPTOETHANOL AR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 2147,
        "SKUNo": "AS2301",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE LR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2148,
        "SKUNo": "AS2301",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2149,
        "SKUNo": "AS2301",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2150,
        "SKUNo": "AS2302",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2151,
        "SKUNo": "AS2302",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2152,
        "SKUNo": "AS2302",
        "CASNO": "1600‐ 27‐ 7",
        "ProductName": "MERCURIC ACETATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2153,
        "SKUNo": "AS2303",
        "CASNO": "7789‐ 47‐ 1",
        "ProductName": "MERCURIC BROMIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2154,
        "SKUNo": "AS2303",
        "CASNO": "7789‐ 47‐ 1",
        "ProductName": "MERCURIC BROMIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2155,
        "SKUNo": "AS2304",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2156,
        "SKUNo": "AS2304",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2157,
        "SKUNo": "AS2304",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2158,
        "SKUNo": "AS2304",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2159,
        "SKUNo": "AS2305",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2160,
        "SKUNo": "AS2305",
        "CASNO": "7487‐ 94‐ 7",
        "ProductName": "MERCURIC CHLORIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2161,
        "SKUNo": "AS2306",
        "CASNO": "7774‐ 29‐ 0",
        "ProductName": "MERCURIC IODIDE RED LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2162,
        "SKUNo": "AS2306",
        "CASNO": "7774‐ 29‐ 0",
        "ProductName": "MERCURIC IODIDE RED LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2163,
        "SKUNo": "AS2307",
        "CASNO": "7774‐ 29‐ 0",
        "ProductName": "MERCURIC IODIDE RED AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2164,
        "SKUNo": "AS2307",
        "CASNO": "7774‐ 29‐ 0",
        "ProductName": "MERCURIC IODIDE RED AR‐500GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2165,
        "SKUNo": "AS2308",
        "CASNO": "7783‐34‐8",
        "ProductName": "MERCURIC NITRATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2166,
        "SKUNo": "AS2308",
        "CASNO": "7783‐ 34‐ 8",
        "ProductName": "MERCURIC NITRATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2167,
        "SKUNo": "AS2308",
        "CASNO": "7783‐ 34‐ 8",
        "ProductName": "MERCURIC NITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2168,
        "SKUNo": "AS2309",
        "CASNO": "7783‐ 34‐ 8",
        "ProductName": "MERCURIC NITRATE (HYDRATE) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2169,
        "SKUNo": "AS2309",
        "CASNO": "7783‐ 34‐ 8",
        "ProductName": "MERCURIC NITRATE (HYDRATE) AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2170,
        "SKUNo": "AS2310",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE RED LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2171,
        "SKUNo": "AS2310",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE RED LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2172,
        "SKUNo": "AS2311",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE RED AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2173,
        "SKUNo": "AS2311",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE RED AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2174,
        "SKUNo": "AS2312",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE YELLOW LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2175,
        "SKUNo": "AS2312",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE YELLOW LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2176,
        "SKUNo": "AS2313",
        "CASNO": "21908‐ 53‐ 2",
        "ProductName": "MERCURIC OXIDE YELLOW AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2177,
        "SKUNo": "AS2314",
        "CASNO": "7783‐ 35‐ 9",
        "ProductName": "MERCURIC SULPHATE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2178,
        "SKUNo": "AS2314",
        "CASNO": "7783‐ 35‐ 9",
        "ProductName": "MERCURIC SULPHATE ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2179,
        "SKUNo": "AS2314",
        "CASNO": "7783‐ 35‐ 9",
        "ProductName": "MERCURIC SULPHATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2180,
        "SKUNo": "AS2315",
        "CASNO": "7783‐ 35‐ 9",
        "ProductName": "MERCURIC SULPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2181,
        "SKUNo": "AS2315",
        "CASNO": "7783‐ 35‐ 9",
        "ProductName": "MERCURIC SULPHATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2182,
        "SKUNo": "AS2316",
        "CASNO": "592‐ 85‐ 8",
        "ProductName": "MERCURIC THIOCYANATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2183,
        "SKUNo": "AS2316",
        "CASNO": "592‐ 85‐ 8",
        "ProductName": "MERCURIC THIOCYANATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2184,
        "SKUNo": "AS2317",
        "CASNO": "129‐ 16‐ 8",
        "ProductName": "MERCUROCHROME(MERCURY DIBROMOFLUORESCEIN) 97.5%",
        "PACKSIZE": "25GM",
        "HSNCODE": 30039032
    },
    {
        "Id": 2185,
        "SKUNo": "AS2318",
        "CASNO": "10112‐ 91‐ 1",
        "ProductName": "MERCUROUS CHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2186,
        "SKUNo": "AS2318",
        "CASNO": "10112‐ 91‐ 1",
        "ProductName": "MERCUROUS CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2187,
        "SKUNo": "AS2319",
        "CASNO": "10112‐ 91‐ 1",
        "ProductName": "MERCUROUS CHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2188,
        "SKUNo": "AS2320",
        "CASNO": "14836‐ 60‐ 3",
        "ProductName": "MERCUROUS NITRATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2189,
        "SKUNo": "AS2320",
        "CASNO": "14836‐ 60‐ 3",
        "ProductName": "MERCUROUS NITRATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2190,
        "SKUNo": "AS2321",
        "CASNO": "14836‐ 60‐ 3",
        "ProductName": "MERCUROUS NITRATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2191,
        "SKUNo": "AS2321",
        "CASNO": "14836‐ 60‐ 3",
        "ProductName": "MERCUROUS NITRATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2192,
        "SKUNo": "AS2322",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2193,
        "SKUNo": "AS2322",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2194,
        "SKUNo": "AS2322",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2195,
        "SKUNo": "AS2323",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2196,
        "SKUNo": "AS2323",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2197,
        "SKUNo": "AS2323",
        "CASNO": "7439‐ 97‐ 6",
        "ProductName": "MERCURY (METAL) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28054000
    },
    {
        "Id": 2198,
        "SKUNo": "AS2324",
        "CASNO": "108‐67‐8",
        "ProductName": "MESITYLENE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29029090
    },
    {
        "Id": 2199,
        "SKUNo": "AS2324",
        "CASNO": "108‐67‐8",
        "ProductName": "MESITYLENE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29029090
    },
    {
        "Id": 2200,
        "SKUNo": "AS2325",
        "CASNO": "587‐ 98‐ 4",
        "ProductName": "METANIL YELLOW AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2201,
        "SKUNo": "AS2325",
        "CASNO": "587‐ 98‐ 4",
        "ProductName": "METANIL YELLOW AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2202,
        "SKUNo": "AS2326",
        "CASNO": "79‐41‐4",
        "ProductName": "METHACRYLIC ACID FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29161310
    },
    {
        "Id": 2203,
        "SKUNo": "AS2326",
        "CASNO": "79‐41‐4",
        "ProductName": "METHACRYLIC ACID FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29161310
    },
    {
        "Id": 2204,
        "SKUNo": "AS2327",
        "CASNO": "75‐75‐2",
        "ProductName": "METHANESULPHONIC ACID  FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29041090
    },
    {
        "Id": 2205,
        "SKUNo": "AS2327",
        "CASNO": "75‐75‐2",
        "ProductName": "METHANESULPHONIC ACID  FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29041090
    },
    {
        "Id": 2206,
        "SKUNo": "AS2328",
        "CASNO": "124‐ 63‐ 0",
        "ProductName": "METHANESULPHONYL CHLORIDE FOR SYNTHESIS 99%",
        "PACKSIZE": "500ML",
        "HSNCODE": 29041090
    },
    {
        "Id": 2207,
        "SKUNo": "AS2328",
        "CASNO": "124‐ 63‐ 0",
        "ProductName": "METHANESULPHONYL CHLORIDE FOR SYNTHESIS 99%",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29041090
    },
    {
        "Id": 2208,
        "SKUNo": "AS2329",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051100
    },
    {
        "Id": 2209,
        "SKUNo": "AS2329",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL LR‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2210,
        "SKUNo": "AS2329",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2211,
        "SKUNo": "AS2330",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051100
    },
    {
        "Id": 2212,
        "SKUNo": "AS2330",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL AR‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2213,
        "SKUNo": "AS2330",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2214,
        "SKUNo": "AS2331",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL ACETONE FREE‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051100
    },
    {
        "Id": 2215,
        "SKUNo": "AS2331",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL ACETONE FREE‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2216,
        "SKUNo": "AS2332",
        "CASNO": "67‐56‐1",
        "ProductName": "METHANOL BENZENE FREE‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051100
    },
    {
        "Id": 2217,
        "SKUNo": "AS2332",
        "CASNO": "67‐56‐1",
        "ProductName": "METHANOL BENZENE FREE‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2218,
        "SKUNo": "AS2333",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL (SPECIALLY DRIED) AR (End use certificate required)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051100
    },
    {
        "Id": 2219,
        "SKUNo": "AS2333",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL (SPECIALLY DRIED) AR (End use certificate required)‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2220,
        "SKUNo": "AS2333",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL (SPECIALLY DRIED) AR (End use certificate required)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2221,
        "SKUNo": "AS2334",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL 99.7% ELECTRONIC GRADE‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2222,
        "SKUNo": "AS2335",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2223,
        "SKUNo": "AS2335",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL FOR HPLC‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2224,
        "SKUNo": "AS2336",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL “GRADIENT GRADE” FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2225,
        "SKUNo": "AS2336",
        "CASNO": "67‐ 56‐ 1",
        "ProductName": "METHANOL “GRADIENT GRADE” FOR HPLC‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051100
    },
    {
        "Id": 2226,
        "SKUNo": "AS2337",
        "CASNO": "63‐ 68‐ 3",
        "ProductName": "L‐METHIONINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29304000
    },
    {
        "Id": 2227,
        "SKUNo": "AS2337",
        "CASNO": "63‐ 68‐ 3",
        "ProductName": "L‐METHIONINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29304000
    },
    {
        "Id": 2228,
        "SKUNo": "AS2337",
        "CASNO": "63‐ 68‐ 3",
        "ProductName": "L‐METHIONINE FOR BIOCHEMISTRY ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29304000
    },
    {
        "Id": 2229,
        "SKUNo": "AS2338",
        "CASNO": "59‐ 51‐ 8",
        "ProductName": "DL‐METHIONINE FOR BIOCHEMISTRY  ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29304000
    },
    {
        "Id": 2230,
        "SKUNo": "AS2338",
        "CASNO": "59‐ 51‐ 8",
        "ProductName": "DL‐METHIONINE FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29304000
    },
    {
        "Id": 2231,
        "SKUNo": "AS2339",
        "CASNO": "135‐02‐4",
        "ProductName": "2‐METHOXYBENZALDEHYDE (o‐Anisaldehyde)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29094400
    },
    {
        "Id": 2232,
        "SKUNo": "AS2340",
        "CASNO": "109‐ 86‐ 4",
        "ProductName": "2‐METHOXYETHANOL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094400
    },
    {
        "Id": 2233,
        "SKUNo": "AS2340",
        "CASNO": "109‐ 86‐ 4",
        "ProductName": "2‐METHOXYETHANOL LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094400
    },
    {
        "Id": 2234,
        "SKUNo": "AS2341",
        "CASNO": "109‐ 86‐ 4",
        "ProductName": "2‐METHOXYETHANOL AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094400
    },
    {
        "Id": 2235,
        "SKUNo": "AS2341",
        "CASNO": "109‐ 86‐ 4",
        "ProductName": "2‐METHOXYETHANOL AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094400
    },
    {
        "Id": 2236,
        "SKUNo": "AS2342",
        "CASNO": "104‐ 01‐ 8",
        "ProductName": "4‐METHOXYPHENYL ACETIC ACID 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29189900
    },
    {
        "Id": 2237,
        "SKUNo": "AS2342",
        "CASNO": "104‐ 01‐ 8",
        "ProductName": "4‐METHOXYPHENYL ACETIC ACID 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29189900
    },
    {
        "Id": 2238,
        "SKUNo": "AS2343",
        "CASNO": "79‐ 20‐ 9",
        "ProductName": "METHYL ACETATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153940
    },
    {
        "Id": 2239,
        "SKUNo": "AS2343",
        "CASNO": "79‐ 20‐ 9",
        "ProductName": "METHYL ACETATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153940
    },
    {
        "Id": 2240,
        "SKUNo": "AS2344",
        "CASNO": "96‐ 33‐ 3",
        "ProductName": "METHYL ACRYLATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153940
    },
    {
        "Id": 2241,
        "SKUNo": "AS2344",
        "CASNO": "96‐ 33‐ 3",
        "ProductName": "METHYL ACRYLATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153940
    },
    {
        "Id": 2242,
        "SKUNo": "AS2345",
        "CASNO": "74‐ 89‐ 5",
        "ProductName": "METHYLAMINE SOLUTION 40%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2243,
        "SKUNo": "AS2345",
        "CASNO": "74‐ 89‐ 5",
        "ProductName": "METHYLAMINE SOLUTION 40%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 2244,
        "SKUNo": "AS2346",
        "CASNO": "593‐ 51‐ 1",
        "ProductName": "METHYLAMMONIUM CHLORIDE FOR SYNTHESIS ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29211190
    },
    {
        "Id": 2245,
        "SKUNo": "AS2346",
        "CASNO": "593‐ 51‐ 1",
        "ProductName": "METHYLAMMONIUM CHLORIDE FOR SYNTHESIS ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29211190
    },
    {
        "Id": 2246,
        "SKUNo": "AS2347",
        "CASNO": "100‐ 61‐ 8",
        "ProductName": "N‐METHYLANILINE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214290
    },
    {
        "Id": 2247,
        "SKUNo": "AS2347",
        "CASNO": "100‐ 61‐ 8",
        "ProductName": "N‐METHYLANILINE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214290
    },
    {
        "Id": 2248,
        "SKUNo": "AS2348",
        "CASNO": "149022‐ 15‐ 1",
        "ProductName": "3‐METHYL‐2‐BENZOTHIAZOLINONE HYDRAZONE HYDROCHLORIDE AR (MBTH)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29342000
    },
    {
        "Id": 2249,
        "SKUNo": "AS2348",
        "CASNO": "149022‐ 15‐ 1",
        "ProductName": "3‐METHYL‐2‐BENZOTHIAZOLINONE HYDRAZONE HYDROCHLORIDE AR (MBTH)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29342000
    },
    {
        "Id": 2250,
        "SKUNo": "AS2349",
        "CASNO": "93‐58‐3",
        "ProductName": "METHYL BENZOATE LR (Solvent for Embedding)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29163130
    },
    {
        "Id": 2251,
        "SKUNo": "AS2349",
        "CASNO": "93‐58‐3",
        "ProductName": "METHYL BENZOATE LR (Solvent for Embedding)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29163130
    },
    {
        "Id": 2252,
        "SKUNo": "AS2350",
        "CASNO": "28983‐ 56‐ 4",
        "ProductName": "METHYL BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2253,
        "SKUNo": "AS2350",
        "CASNO": "28983‐ 56‐ 4",
        "ProductName": "METHYL BLUE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2254,
        "SKUNo": "AS2351",
        "CASNO": "78‐ 93‐ 3",
        "ProductName": "METHYL ETHYL KETONE LR (END USER CERTIFICATE REQUIRE)",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141200
    },
    {
        "Id": 2255,
        "SKUNo": "AS2351",
        "CASNO": "78‐ 93‐ 3",
        "ProductName": "METHYL ETHYL KETONE LR (END USER CERTIFICATE REQUIRE)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141200
    },
    {
        "Id": 2256,
        "SKUNo": "AS2352",
        "CASNO": "78‐ 93‐ 3",
        "ProductName": "METHYL ETHYL KETONE AR (END USER CERTIFICATE REQUIRE)",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141200
    },
    {
        "Id": 2257,
        "SKUNo": "AS2352",
        "CASNO": "78‐ 93‐ 3",
        "ProductName": "METHYL ETHYL KETONE AR (END USER CERTIFICATE REQUIRE)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141200
    },
    {
        "Id": 2258,
        "SKUNo": "AS2353",
        "CASNO": "108‐ 10‐ 1",
        "ProductName": "METHYL‐iso‐BUTYL KETONE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141300
    },
    {
        "Id": 2259,
        "SKUNo": "AS2353",
        "CASNO": "108‐ 10‐ 1",
        "ProductName": "METHYL‐iso‐BUTYL KETONE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141300
    },
    {
        "Id": 2260,
        "SKUNo": "AS2354",
        "CASNO": "108‐ 10‐ 1",
        "ProductName": "METHYL‐iso‐BUTYL KETONE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29141300
    },
    {
        "Id": 2261,
        "SKUNo": "AS2354",
        "CASNO": "108‐ 10‐ 1",
        "ProductName": "METHYL‐iso‐BUTYL KETONE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29141300
    },
    {
        "Id": 2262,
        "SKUNo": "AS2355",
        "CASNO": "9004‐ 67‐ 5",
        "ProductName": "METHYL CELLULOSE (LOW VISCOSITY) 350‐550 CPS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123922
    },
    {
        "Id": 2263,
        "SKUNo": "AS2356",
        "CASNO": "9004‐ 67‐ 5",
        "ProductName": "METHYL CELLULOSE (HIGH VISCOSITY) 4000 CPS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39123922
    },
    {
        "Id": 2264,
        "SKUNo": "AS2357",
        "CASNO": "79‐22‐1",
        "ProductName": "METHYL CHLOROFORMATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 2265,
        "SKUNo": "AS2357",
        "CASNO": "79‐22‐1",
        "ProductName": "METHYL CHLOROFORMATE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 2266,
        "SKUNo": "AS2358",
        "CASNO": "110‐ 26‐ 9",
        "ProductName": "N,N‐METHYLENE BISACRYLAMIDE AR 99% for Electrophoresis‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 2267,
        "SKUNo": "AS2358",
        "CASNO": "110‐ 26‐ 9",
        "ProductName": "N,N‐METHYLENE BISACRYLAMIDE AR 99% for Electrophoresis‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29241900
    },
    {
        "Id": 2268,
        "SKUNo": "AS2359",
        "CASNO": "61‐ 73‐ 4",
        "ProductName": "METHYLENE BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041351
    },
    {
        "Id": 2269,
        "SKUNo": "AS2359",
        "CASNO": "61‐ 73‐ 4",
        "ProductName": "METHYLENE BLUE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041351
    },
    {
        "Id": 2270,
        "SKUNo": "AS2360",
        "CASNO": "",
        "ProductName": "METHYLENE BLUE ALKALINE (LOFFLER’S) STAINING SOLUTION)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041359
    },
    {
        "Id": 2271,
        "SKUNo": "AS2361",
        "CASNO": "61‐73‐4",
        "ProductName": "METHYLENE BLUE (AQUEOUS)STAINING SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041359
    },
    {
        "Id": 2272,
        "SKUNo": "AS2362",
        "CASNO": "93‐15‐2",
        "ProductName": "METHYL EUGENOL FOR SYNTHESIS 98%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29093090
    },
    {
        "Id": 2273,
        "SKUNo": "AS2362",
        "CASNO": "93‐15‐2",
        "ProductName": "METHYL EUGENOL FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29093090
    },
    {
        "Id": 2274,
        "SKUNo": "AS2363",
        "CASNO": "107‐ 31‐ 3",
        "ProductName": "METHYL FORMATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29151300
    },
    {
        "Id": 2275,
        "SKUNo": "AS2363",
        "CASNO": "107‐ 31‐ 3",
        "ProductName": "METHYL FORMATE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29151300
    },
    {
        "Id": 2276,
        "SKUNo": "AS2364",
        "CASNO": "7114‐03‐6",
        "ProductName": "METHYL GREEN For microscopical staining‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2277,
        "SKUNo": "AS2364",
        "CASNO": "7114‐03‐6",
        "ProductName": "METHYL GREEN For microscopical staining‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2278,
        "SKUNo": "AS2364",
        "CASNO": "7114‐03‐6",
        "ProductName": "METHYL GREEN For microscopical staining‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2279,
        "SKUNo": "AS2365",
        "CASNO": "99‐ 76‐ 3",
        "ProductName": "METHYL‐p‐HYRDROXYBENZOATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 2280,
        "SKUNo": "AS2365",
        "CASNO": "99‐ 76‐ 3",
        "ProductName": "METHYL‐p‐HYRDROXYBENZOATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29183090
    },
    {
        "Id": 2281,
        "SKUNo": "AS2366",
        "CASNO": "5026‐ 62‐ 0",
        "ProductName": "METHYL‐p‐HYRDROXYBENZOATE SODIUM SALT‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 2282,
        "SKUNo": "AS2366",
        "CASNO": "5026‐ 62‐ 0",
        "ProductName": "METHYL‐p‐HYRDROXYBENZOATE SODIUM SALT‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29183090
    },
    {
        "Id": 2283,
        "SKUNo": "AS2367",
        "CASNO": "693‐98‐1",
        "ProductName": "2‐METHYLIMIDAZOLE LR 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 2284,
        "SKUNo": "AS2367",
        "CASNO": "693‐98‐1",
        "ProductName": "2‐METHYLIMIDAZOLE LR 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 2285,
        "SKUNo": "AS2368",
        "CASNO": "74‐88‐4",
        "ProductName": "METHYL IODIDE FOR SYNHTESIS 99%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 2286,
        "SKUNo": "AS2368",
        "CASNO": "74‐88‐4",
        "ProductName": "METHYL IODIDE FOR SYNHTESIS 99%‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29039990
    },
    {
        "Id": 2287,
        "SKUNo": "AS2369",
        "CASNO": "107‐83‐5",
        "ProductName": "2‐METHYLPENTANE 98%",
        "PACKSIZE": "500ML",
        "HSNCODE": 29011000
    },
    {
        "Id": 2288,
        "SKUNo": "AS2370",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL‐2‐PYROLIDONE  LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29339900
    },
    {
        "Id": 2289,
        "SKUNo": "AS2370",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL‐2‐PYROLIDONE  LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29339900
    },
    {
        "Id": 2290,
        "SKUNo": "AS2371",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL‐2‐PYROLIDONE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29339900
    },
    {
        "Id": 2291,
        "SKUNo": "AS2371",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL‐2‐PYROLIDONE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29339900
    },
    {
        "Id": 2292,
        "SKUNo": "AS2372",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL 2‐PYROLIDONE 99% HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29337900
    },
    {
        "Id": 2293,
        "SKUNo": "AS2373",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL 2‐PYROLIDONE 99% GC‐HS‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29339900
    },
    {
        "Id": 2294,
        "SKUNo": "AS2373",
        "CASNO": "872‐ 50‐ 4",
        "ProductName": "N‐METHYL 2‐PYROLIDONE 99% GC‐HS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29339900
    },
    {
        "Id": 2295,
        "SKUNo": "AS2374",
        "CASNO": "547‐ 58‐ 0",
        "ProductName": "METHYL ORANGE INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2296,
        "SKUNo": "AS2374",
        "CASNO": "547‐ 58‐ 0",
        "ProductName": "METHYL ORANGE INDICATOR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2297,
        "SKUNo": "AS2375",
        "CASNO": "",
        "ProductName": "METHYL ORANGE INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29270090
    },
    {
        "Id": 2298,
        "SKUNo": "AS2376",
        "CASNO": "109‐ 01‐ 3",
        "ProductName": "N‐METHYL PIPERZINE 99% FOR SYNTHESIS‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29339900
    },
    {
        "Id": 2299,
        "SKUNo": "AS2376",
        "CASNO": "109‐ 01‐ 3",
        "ProductName": "N‐METHYL PIPERZINE 99% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29339900
    },
    {
        "Id": 2300,
        "SKUNo": "AS2377",
        "CASNO": "493‐ 52‐ 7",
        "ProductName": "METHYL RED INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2301,
        "SKUNo": "AS2377",
        "CASNO": "493‐ 52‐ 7",
        "ProductName": "METHYL RED INDICATOR AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2302,
        "SKUNo": "AS2378",
        "CASNO": "493‐ 52‐ 7",
        "ProductName": "METHYL RED (pH INDICATOR SOLUTION)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29270090
    },
    {
        "Id": 2303,
        "SKUNo": "AS2379",
        "CASNO": "119‐ 36‐ 8",
        "ProductName": "METHYL SALICYLATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29182310
    },
    {
        "Id": 2304,
        "SKUNo": "AS2379",
        "CASNO": "119‐ 36‐ 8",
        "ProductName": "METHYL SALICYLATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29182310
    },
    {
        "Id": 2305,
        "SKUNo": "AS2380",
        "CASNO": "",
        "ProductName": "METHYL THYMOL BLUE PH INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2306,
        "SKUNo": "AS2380",
        "CASNO": "              ",
        "ProductName": "METHYL THYMOL BLUE PH INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2307,
        "SKUNo": "AS2381",
        "CASNO": "1945‐77‐3",
        "ProductName": "METHYL THYMOL BLUE COMPLEXONE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2308,
        "SKUNo": "AS2381",
        "CASNO": "1945‐77‐3",
        "ProductName": "METHYL THYMOL BLUE COMPLEXONE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2309,
        "SKUNo": "AS2382",
        "CASNO": "1779‐49‐3",
        "ProductName": "METHYL TRIPHENYLPHOSPHONIUM BROMIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 2310,
        "SKUNo": "AS2382",
        "CASNO": "1779‐49‐3",
        "ProductName": "METHYL TRIPHENYLPHOSPHONIUM BROMIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 2311,
        "SKUNo": "AS2383",
        "CASNO": "8004‐ 87‐ 3",
        "ProductName": "METHYL VIOLET FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041341
    },
    {
        "Id": 2312,
        "SKUNo": "AS2383",
        "CASNO": "8004‐ 87‐ 3",
        "ProductName": "METHYL VIOLET FOR MICROSCOPY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041341
    },
    {
        "Id": 2313,
        "SKUNo": "AS2384",
        "CASNO": "8004‐ 87‐ 3",
        "ProductName": "METHYL VIOLET  FOR STAINING SOLUTION   ‐125ML",
        "PACKSIZE": "125 ML",
        "HSNCODE": 32041341
    },
    {
        "Id": 2314,
        "SKUNo": "AS2385",
        "CASNO": "55‐ 55‐ 0",
        "ProductName": "METOL (For PhotoARaphic Purpose) (4‐Methylaminophenol Sulphate) ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222931
    },
    {
        "Id": 2315,
        "SKUNo": "AS2385",
        "CASNO": "55‐ 55‐ 0",
        "ProductName": "METOL (For PhotoARaphic Purpose) (4‐Methylaminophenol Sulphate)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29222931
    },
    {
        "Id": 2316,
        "SKUNo": "AS2386",
        "CASNO": "",
        "ProductName": "MILLON’S REAGENT‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2317,
        "SKUNo": "AS2386",
        "CASNO": "",
        "ProductName": "MILLON’S REAGENT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2318,
        "SKUNo": "AS2387",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "MINTROLEUM LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2319,
        "SKUNo": "AS2387",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "MINTROLEUM LR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 27101990
    },
    {
        "Id": 2320,
        "SKUNo": "AS2388",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "MINTROLEUM AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2321,
        "SKUNo": "AS2388",
        "CASNO": "110‐ 54‐ 3",
        "ProductName": "MINTROLEUM AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2322,
        "SKUNo": "AS2389",
        "CASNO": "27‐ 44‐ 2",
        "ProductName": "MOLECULAR SIEVES 3A X 1.5mm‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38249915
    },
    {
        "Id": 2323,
        "SKUNo": "AS2389",
        "CASNO": "1344‐00‐ 9",
        "ProductName": "MOLECULAR SIEVES 4A X 1.5mm‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38249915
    },
    {
        "Id": 2324,
        "SKUNo": "AS2389",
        "CASNO": "1327‐ 39‐5",
        "ProductName": "MOLECULAR SIEVES 5A X 1.5mm‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38249915
    },
    {
        "Id": 2325,
        "SKUNo": "AS2390",
        "CASNO": "1318‐02‐1",
        "ProductName": "MOLECULAR SIEVES 13X1.5MM ‐ 250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28421000
    },
    {
        "Id": 2326,
        "SKUNo": "AS2391",
        "CASNO": "",
        "ProductName": "MOLISCH'S REAGENT (FOR DETECTION OF CARBOHYDRATE)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2327,
        "SKUNo": "AS2392",
        "CASNO": "1317‐ 33‐ 5",
        "ProductName": "MOLYBDENUM DISULPHIDE POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 2328,
        "SKUNo": "AS2392",
        "CASNO": "1317‐ 33‐ 5",
        "ProductName": "MOLYBDENUM DISULPHIDE POWDER ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 2329,
        "SKUNo": "AS2393",
        "CASNO": "7839‐ 98‐7",
        "ProductName": "MOLYBDENUM METAL POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 2330,
        "SKUNo": "AS2394",
        "CASNO": "1313‐ 27‐ 5",
        "ProductName": "MOLYBDENUM TRIOXIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28257010
    },
    {
        "Id": 2331,
        "SKUNo": "AS2394",
        "CASNO": "1313‐ 27‐ 5",
        "ProductName": "MOLYBDENUM TRIOXIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28257010
    },
    {
        "Id": 2332,
        "SKUNo": "AS2395",
        "CASNO": "1313‐ 27‐ 5",
        "ProductName": "MOLYBDENUM TRIOXIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28257010
    },
    {
        "Id": 2333,
        "SKUNo": "AS2395",
        "CASNO": "1313‐ 27‐ 5",
        "ProductName": "MOLYBDENUM TRIOXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28257010
    },
    {
        "Id": 2334,
        "SKUNo": "AS2396",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYBDIC ACID LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28257020
    },
    {
        "Id": 2335,
        "SKUNo": "AS2396",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYBDIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28257020
    },
    {
        "Id": 2336,
        "SKUNo": "AS2397",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYBDIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28257020
    },
    {
        "Id": 2337,
        "SKUNo": "AS2397",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYBDIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28257020
    },
    {
        "Id": 2338,
        "SKUNo": "AS2398",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 01  ALKALINE (pH Value‐ 11‐12)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34022090
    },
    {
        "Id": 2339,
        "SKUNo": "AS2398",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 01  ALKALINE (pH Value‐ 11‐12)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 34022090
    },
    {
        "Id": 2340,
        "SKUNo": "AS2399",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 02 NEUTRAL  (pH Value‐ 6‐8)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34022090
    },
    {
        "Id": 2341,
        "SKUNo": "AS2399",
        "CASNO": "          ",
        "ProductName": "MOLYCLEAN MA 02 NEUTRAL  (pH Value‐ 6‐8)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 34022090
    },
    {
        "Id": 2342,
        "SKUNo": "AS2400",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 03 PHOSPHATE FREE  (Phosphate‐NMT0.002%)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34022090
    },
    {
        "Id": 2343,
        "SKUNo": "AS2400",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 03 PHOSPHATE FREE  (Phosphate‐NMT 0.002%)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 34022090
    },
    {
        "Id": 2344,
        "SKUNo": "AS2401",
        "CASNO": "",
        "ProductName": "MOLYCLEAN MA 05 (NEUTRAL) PHOSPHATE FREE ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34022090
    },
    {
        "Id": 2345,
        "SKUNo": "AS2401",
        "CASNO": "        ",
        "ProductName": "MOLYCLEAN MA 05 (NEUTRAL) PHOSPHATE FREE ‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 34022090
    },
    {
        "Id": 2346,
        "SKUNo": "AS2402",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYSOL ‘E’ AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 98020000
    },
    {
        "Id": 2347,
        "SKUNo": "AS2403",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYSOL ‘E’ FOR HPLC‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 98020000
    },
    {
        "Id": 2348,
        "SKUNo": "AS2404",
        "CASNO": "64‐17‐5",
        "ProductName": "MOLYSOL ‘E’ FOR UV SPECTROSCOPY‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 98020000
    },
    {
        "Id": 2349,
        "SKUNo": "AS2405",
        "CASNO": "110‐91‐8",
        "ProductName": "MORPHOLINE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333917
    },
    {
        "Id": 2350,
        "SKUNo": "AS2405",
        "CASNO": "110‐91‐8",
        "ProductName": "MORPHOLINE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29333917
    },
    {
        "Id": 2351,
        "SKUNo": "AS2406",
        "CASNO": "298‐ 93‐ 1",
        "ProductName": "M.T.T. TETRAZOLIUM AR‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 2352,
        "SKUNo": "AS2406",
        "CASNO": "298‐ 93‐ 1",
        "ProductName": "M.T.T. TETRAZOLIUM AR‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29339900
    },
    {
        "Id": 2353,
        "SKUNo": "AS2406",
        "CASNO": "298‐ 93‐ 1",
        "ProductName": "M.T.T. TETRAZOLIUM AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2354,
        "SKUNo": "AS2407",
        "CASNO": "96‐ 27‐5",
        "ProductName": "MONOTHIOGLYCEROL 90% ‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29309099
    },
    {
        "Id": 2355,
        "SKUNo": "AS2408",
        "CASNO": "96‐ 27‐5",
        "ProductName": "MONOTHIOGLYCEROL AR 98% ‐ 1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29309099
    },
    {
        "Id": 2356,
        "SKUNo": "AS2409",
        "CASNO": "68399‐ 77‐ 9",
        "ProductName": "MOPSO BUFFER  (3‐Morpholinoethane Sulphonic Acid)‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2357,
        "SKUNo": "AS2410",
        "CASNO": "1132‐61‐2",
        "ProductName": "MORPHOLINOPROPANE SULPHONIC ACID AR (Mops Buffer)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2358,
        "SKUNo": "AS2410",
        "CASNO": "1132‐61‐2",
        "ProductName": "MORPHOLINOPROPANE SULPHONIC ACID AR (Mops Buffer)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2359,
        "SKUNo": "AS2410",
        "CASNO": "1132‐61‐2",
        "ProductName": "MORPHOLINOPROPANE SULPHONIC ACID AR (Mops Buffer)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2360,
        "SKUNo": "AS2411",
        "CASNO": "145224‐94‐8",
        "ProductName": "MORPHOLINOETHANE SULFONIC ACID (MONOHYDRATE) (Mes Buffer)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2361,
        "SKUNo": "AS2411",
        "CASNO": "145224‐94‐8",
        "ProductName": "MORPHOLINOETHANE SULFONIC ACID (MONOHYDRATE) (Mes Buffer)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2362,
        "SKUNo": "AS2412",
        "CASNO": "544‐ 63‐ 8",
        "ProductName": "MYRISTIC ACID 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 2363,
        "SKUNo": "AS2413",
        "CASNO": "91‐ 20‐ 3",
        "ProductName": "NAPHTHALENE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29029040
    },
    {
        "Id": 2364,
        "SKUNo": "AS2414",
        "CASNO": "91‐ 20‐ 3",
        "ProductName": "NAPHTHALENE SCINTILATION GRADE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29029040
    },
    {
        "Id": 2365,
        "SKUNo": "AS2415",
        "CASNO": "91‐ 20‐ 3",
        "ProductName": "NAPTHALENE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29029040
    },
    {
        "Id": 2366,
        "SKUNo": "AS2416",
        "CASNO": "90‐ 15‐ 3",
        "ProductName": "1‐NAPHTHOL‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2367,
        "SKUNo": "AS2416",
        "CASNO": "90‐ 15‐ 3",
        "ProductName": "1‐NAPHTHOL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2368,
        "SKUNo": "AS2417",
        "CASNO": "90‐ 15‐ 3",
        "ProductName": "1‐NAPHTHOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2369,
        "SKUNo": "AS2417",
        "CASNO": "90‐ 15‐ 3",
        "ProductName": "1‐NAPHTHOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2370,
        "SKUNo": "AS2418",
        "CASNO": "135‐ 19‐ 3",
        "ProductName": "2‐NAPHTHOL FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2371,
        "SKUNo": "AS2418",
        "CASNO": "135‐ 19‐ 3",
        "ProductName": "2‐NAPHTHOL FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2372,
        "SKUNo": "AS2419",
        "CASNO": "135‐ 19‐ 3",
        "ProductName": "2‐NAPHTHOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2373,
        "SKUNo": "AS2419",
        "CASNO": "135‐ 19‐ 3",
        "ProductName": "2‐NAPHTHOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071510
    },
    {
        "Id": 2374,
        "SKUNo": "AS2420",
        "CASNO": "7143‐21‐7",
        "ProductName": "β‐NAPHTHOL VIOLET AR 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2375,
        "SKUNo": "AS2421",
        "CASNO": "145‐50‐6",
        "ProductName": "1‐NAPHTHOLBENZEIN (PH INDICATOR)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 2376,
        "SKUNo": "AS2421",
        "CASNO": "145‐50‐6",
        "ProductName": "1‐NAPHTHOLBENZEIN (PH INDICATOR)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29145000
    },
    {
        "Id": 2377,
        "SKUNo": "AS2422",
        "CASNO": "19381‐ 50‐ 1",
        "ProductName": "NAPHTHOL GREEN B for Microscopy C. I. No. 10020‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2378,
        "SKUNo": "AS2422",
        "CASNO": "19381‐ 50‐ 1",
        "ProductName": "NAPHTHOL GREEN B for Microscopy C. I. No. 10020‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2379,
        "SKUNo": "AS2423",
        "CASNO": "596‐ 01‐ 0",
        "ProductName": "1‐NAPHTHOLPHTHALEIN (pH INDICATOR)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2380,
        "SKUNo": "AS2423",
        "CASNO": "596‐ 01‐ 0",
        "ProductName": "1‐NAPHTHOLPHTHALEIN (pH INDICATOR)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2381,
        "SKUNo": "AS2424",
        "CASNO": "521‐ 24‐ 4",
        "ProductName": "1,2‐NAPHTHOQUINONE‐4 SULFONIC ACID SOD.SALT AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 2382,
        "SKUNo": "AS2424",
        "CASNO": "521‐ 24‐ 4",
        "ProductName": "1,2‐NAPHTHOQUINONE‐4 SULFONIC ACID SOD.SALT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29147090
    },
    {
        "Id": 2383,
        "SKUNo": "AS2425",
        "CASNO": "132‐ 86‐ 5",
        "ProductName": "1‐NAPTHORESORCINOL AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2384,
        "SKUNo": "AS2425",
        "CASNO": "132‐ 86‐ 5",
        "ProductName": "1‐NAPTHORESORCINOL AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2385,
        "SKUNo": "AS2426",
        "CASNO": "86‐ 87‐ 3",
        "ProductName": "1‐NAPHTHYL ACETIC  ACID {NAPHTHALENE ACETIC ACID}‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 2386,
        "SKUNo": "AS2426",
        "CASNO": "86‐ 87‐ 3",
        "ProductName": "1‐NAPHTHYL ACETIC  ACID {NAPHTHALENE ACETIC ACID}‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 2387,
        "SKUNo": "AS2426",
        "CASNO": "86‐ 87‐ 3",
        "ProductName": "1‐NAPHTHYL ACETIC  ACID {NAPHTHALENE ACETIC ACID}‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 2388,
        "SKUNo": "AS2427",
        "CASNO": "134‐32‐7",
        "ProductName": "1‐NAPHTHYLAMINE 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 291214511
    },
    {
        "Id": 2389,
        "SKUNo": "AS2428",
        "CASNO": "1465‐ 25‐ 4",
        "ProductName": "N‐1‐NAPHTHYL ETHYLENE DIAMINE DIHYDROCHLORIDE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 2390,
        "SKUNo": "AS2428",
        "CASNO": "1465‐ 25‐ 4",
        "ProductName": "N‐1‐NAPHTHYL ETHYLENE DIAMINE DIHYDROCHLORIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 2391,
        "SKUNo": "AS2428",
        "CASNO": "1465‐ 25‐ 4",
        "ProductName": "N‐1‐NAPHTHYL ETHYLENE DIAMINE DIHYDROCHLORIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 2392,
        "SKUNo": "AS2429",
        "CASNO": "122965‐ 43‐9",
        "ProductName": "NEISSER’S STAIN  A (Methylene Blue)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041310
    },
    {
        "Id": 2393,
        "SKUNo": "AS2430",
        "CASNO": "548‐ 62‐ 9",
        "ProductName": "NEISSER’S STAIN  B    (Crystal Violet)           C.I. No. 42555‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041310
    },
    {
        "Id": 2394,
        "SKUNo": "AS2431",
        "CASNO": "484‐ 11‐ 7",
        "ProductName": "NEOCUPROINE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2395,
        "SKUNo": "AS2431",
        "CASNO": "484‐ 11‐ 7",
        "ProductName": "NEOCUPROINE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2396,
        "SKUNo": "AS2432",
        "CASNO": "41066‐ 08‐ 4",
        "ProductName": "NEOCUPROINE HYDROCHLORIDE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2397,
        "SKUNo": "AS2432",
        "CASNO": "41066‐ 08‐ 4",
        "ProductName": "NEOCUPROINE HYDROCHLORIDE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2398,
        "SKUNo": "AS2433",
        "CASNO": "1313‐ 97‐ 9",
        "ProductName": "NEODYMIUM OXIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 2399,
        "SKUNo": "AS2433",
        "CASNO": "1313‐ 97‐ 9",
        "ProductName": "NEODYMIUM OXIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 2400,
        "SKUNo": "AS2434",
        "CASNO": "298‐95‐3",
        "ProductName": "NEOTETRAZOLIUM CHLORIDE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2401,
        "SKUNo": "AS2435",
        "CASNO": "7783‐ 33‐ 7",
        "ProductName": "NESSLER’S REAGENT (For ammonia & ammonium salt)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2402,
        "SKUNo": "AS2435",
        "CASNO": "7783‐ 33‐ 7",
        "ProductName": "NESSLER’S REAGENT (For ammonia & ammonium salt)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2403,
        "SKUNo": "AS2436",
        "CASNO": "7783‐ 33‐ 7",
        "ProductName": "NESSLER’S REAGENT (KING’S) (For determination of serum urea nitrogen)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2404,
        "SKUNo": "AS2437",
        "CASNO": "553‐ 24‐ 2",
        "ProductName": "NEUTRAL RED INDICATOR AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2405,
        "SKUNo": "AS2437",
        "CASNO": "553‐ 24‐ 2",
        "ProductName": "NEUTRAL RED INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2406,
        "SKUNo": "AS2437",
        "CASNO": "553‐ 24‐ 2",
        "ProductName": "NEUTRAL RED INDICATOR AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2407,
        "SKUNo": "AS2438",
        "CASNO": "553‐ 24‐ 2",
        "ProductName": "NEUTRAL RED INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32049000
    },
    {
        "Id": 2408,
        "SKUNo": "AS2439",
        "CASNO": "3248‐ 91‐ 7",
        "ProductName": "NEW FUCHSIN‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2409,
        "SKUNo": "AS2439",
        "CASNO": "3248‐ 91‐ 7",
        "ProductName": "NEW FUCHSIN‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2410,
        "SKUNo": "AS2440",
        "CASNO": "                ",
        "ProductName": "NEWMAN’S STAIN(MODIFIED)",
        "PACKSIZE": "100ML",
        "HSNCODE": 32041349
    },
    {
        "Id": 2411,
        "SKUNo": "AS2441",
        "CASNO": "7440‐ 02‐ 0",
        "ProductName": "NICKEL (POWDER) 200 MESH‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 75040000
    },
    {
        "Id": 2412,
        "SKUNo": "AS2441",
        "CASNO": "7440‐ 02‐ 0",
        "ProductName": "NICKEL (POWDER) 200 MESH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 75040000
    },
    {
        "Id": 2413,
        "SKUNo": "AS2442",
        "CASNO": "6018‐ 89‐ 9",
        "ProductName": "NICKEL ACETATE LR (TETRAHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2414,
        "SKUNo": "AS2442",
        "CASNO": "6018‐ 89‐ 9",
        "ProductName": "NICKEL ACETATE LR (TETRAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2415,
        "SKUNo": "AS2443",
        "CASNO": "12003‐ 78‐ 0",
        "ProductName": "NICKEL ALUMINIUM ALLOY POWDER‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 75022030
    },
    {
        "Id": 2416,
        "SKUNo": "AS2444",
        "CASNO": "39430‐ 27‐ 8",
        "ProductName": "NICKEL CARBONATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 2417,
        "SKUNo": "AS2445",
        "CASNO": "7791‐ 20‐ 0",
        "ProductName": "NICKEL CHLORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273500
    },
    {
        "Id": 2418,
        "SKUNo": "AS2445",
        "CASNO": "7791‐ 20‐ 0",
        "ProductName": "NICKEL CHLORIDE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28273500
    },
    {
        "Id": 2419,
        "SKUNo": "AS2446",
        "CASNO": "13478‐ 00‐ 7",
        "ProductName": "NICKEL NITRATE LR HEXAHYDRATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 2420,
        "SKUNo": "AS2447",
        "CASNO": "13478‐ 00‐ 7",
        "ProductName": "NICKEL NITRATE AR HEXAHYDRATE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 2421,
        "SKUNo": "AS2447",
        "CASNO": "13478‐ 00‐ 7",
        "ProductName": "NICKEL NITRATE AR HEXAHYDRATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 2422,
        "SKUNo": "AS2448",
        "CASNO": "1314‐ 06‐ 3",
        "ProductName": "NICKEL OXIDE BLACK LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28254000
    },
    {
        "Id": 2423,
        "SKUNo": "AS2448",
        "CASNO": "1314‐ 06‐ 3",
        "ProductName": "NICKEL OXIDE BLACK LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28254000
    },
    {
        "Id": 2424,
        "SKUNo": "AS2449",
        "CASNO": "10101‐ 97‐ 0",
        "ProductName": "NICKEL SULPHATE LR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2425,
        "SKUNo": "AS2449",
        "CASNO": "10101‐ 97‐ 0",
        "ProductName": "NICKEL SULPHATE LR (HEXAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 2426,
        "SKUNo": "AS2450",
        "CASNO": "10101‐ 97‐ 0",
        "ProductName": "NICKEL SULPHATE AR (HEXAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2427,
        "SKUNo": "AS2451",
        "CASNO": "13770‐ 89‐ 3",
        "ProductName": "NICKEL SULPHAMATE SOLUTION  110GM Nickel per Ltr‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2428,
        "SKUNo": "AS2451",
        "CASNO": "13770‐ 89‐ 3",
        "ProductName": "NICKEL SULPHAMATE SOLUTION  110GM Nickel per Ltr‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 2429,
        "SKUNo": "AS2452",
        "CASNO": "98‐ 92‐ 0",
        "ProductName": "NICOTINAMIDE 99% FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362920
    },
    {
        "Id": 2430,
        "SKUNo": "AS2452",
        "CASNO": "98‐ 92‐ 0",
        "ProductName": "NICOTINAMIDE 99% FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29362920
    },
    {
        "Id": 2431,
        "SKUNo": "AS2453",
        "CASNO": "59‐ 67‐ 6",
        "ProductName": "NICOTINIC ACID (NIACIN)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29362920
    },
    {
        "Id": 2432,
        "SKUNo": "AS2453",
        "CASNO": "59‐ 67‐ 6",
        "ProductName": "NICOTINIC ACID (NIACIN)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362920
    },
    {
        "Id": 2433,
        "SKUNo": "AS2453",
        "CASNO": "59‐ 67‐ 6",
        "ProductName": "NICOTINIC ACID (NIACIN)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29362920
    },
    {
        "Id": 2434,
        "SKUNo": "AS2454",
        "CASNO": "8005‐02‐5",
        "ProductName": "NIGROSINE (ALCOHOL SOLUBLE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2435,
        "SKUNo": "AS2454",
        "CASNO": "8005‐02‐5",
        "ProductName": "NIGROSINE (ALCOHOL SOLUBLE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2436,
        "SKUNo": "AS2455",
        "CASNO": "8005‐03‐6",
        "ProductName": "NIGROSIN STAIN 10% W/V‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 32041399
    },
    {
        "Id": 2437,
        "SKUNo": "AS2456",
        "CASNO": "8005‐03‐6",
        "ProductName": "NIGROSINE FOR MICROSCOPY (WATER SOLUBLE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2438,
        "SKUNo": "AS2456",
        "CASNO": "8005‐03‐6",
        "ProductName": "NIGROSINE FOR MICROSCOPY (WATER SOLUBLE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2439,
        "SKUNo": "AS2457",
        "CASNO": "3625‐ 57‐ 8",
        "ProductName": "NILE BLUE SULPHATE‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2440,
        "SKUNo": "AS2457",
        "CASNO": "3625‐ 57‐ 8",
        "ProductName": "NILE BLUE SULPHATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2441,
        "SKUNo": "AS2458",
        "CASNO": "485‐47‐2",
        "ProductName": "NINHYDRIN AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 2442,
        "SKUNo": "AS2458",
        "CASNO": "485‐47‐2",
        "ProductName": "NINHYDRIN AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 2443,
        "SKUNo": "AS2458",
        "CASNO": "485‐47‐2",
        "ProductName": "NINHYDRIN AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 2444,
        "SKUNo": "AS2459",
        "CASNO": "          ",
        "ProductName": "NINHYDRIN SOLUTION FOR TLC SPRAY‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2445,
        "SKUNo": "AS2460",
        "CASNO": "1313‐ 96‐ 8",
        "ProductName": "NIOBIUM PENTOXIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 2446,
        "SKUNo": "AS2460",
        "CASNO": "1313‐ 96‐ 8",
        "ProductName": "NIOBIUM PENTOXIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 2447,
        "SKUNo": "AS2460",
        "CASNO": "1313‐ 96‐ 8",
        "ProductName": "NIOBIUM PENTOXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 2448,
        "SKUNo": "AS2461",
        "CASNO": "5423/07/04",
        "ProductName": "NITRAZINE YELLOW‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32041329
    },
    {
        "Id": 2449,
        "SKUNo": "AS2461",
        "CASNO": "5423/07/04",
        "ProductName": "NITRAZINE YELLOW‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041329
    },
    {
        "Id": 2450,
        "SKUNo": "AS2462",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID LR LR 69‐72%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28080010
    },
    {
        "Id": 2451,
        "SKUNo": "AS2462",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID LR LR 69‐72%‐2.5LTR  (4X2.5LTR)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28080010
    },
    {
        "Id": 2452,
        "SKUNo": "AS2463",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID AR 69‐71%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28080010
    },
    {
        "Id": 2453,
        "SKUNo": "AS2463",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID AR 69‐71%‐2.5LTR  (4X2.5LTR)",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28080010
    },
    {
        "Id": 2454,
        "SKUNo": "AS2464",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID 69.5% FOR TRACE METAL ANALYSIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28080010
    },
    {
        "Id": 2455,
        "SKUNo": "AS2464",
        "CASNO": "7697‐ 37‐ 2",
        "ProductName": "NITRIC ACID 69.5% FOR TRACE METAL ANALYSIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28080010
    },
    {
        "Id": 2456,
        "SKUNo": "AS2465",
        "CASNO": "139‐ 13‐ 9",
        "ProductName": "NITRILOTRIACETIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2457,
        "SKUNo": "AS2465",
        "CASNO": "139‐ 13‐ 9",
        "ProductName": "NITRILOTRIACETIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2458,
        "SKUNo": "AS2466",
        "CASNO": "88‐74‐4",
        "ProductName": "2‐NITROANILINE LR 98%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214225
    },
    {
        "Id": 2459,
        "SKUNo": "AS2467",
        "CASNO": "99‐09‐2",
        "ProductName": "3‐NITROANILINE ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214523
    },
    {
        "Id": 2460,
        "SKUNo": "AS2468",
        "CASNO": "100‐ 01‐ 6",
        "ProductName": "4‐NITROANILINE  LR (1‐Amino‐4‐nitrobenzene )  C.I. 37035 ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214226
    },
    {
        "Id": 2461,
        "SKUNo": "AS2468",
        "CASNO": "100‐ 01‐ 6",
        "ProductName": "4‐NITROANILINE  LR (1‐Amino‐4‐nitrobenzene )  C.I. 37035‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214226
    },
    {
        "Id": 2462,
        "SKUNo": "AS2469",
        "CASNO": "98‐ 95‐ 3",
        "ProductName": "NITROBENZENE FOR SYNTHESIS",
        "PACKSIZE": "500ML",
        "HSNCODE": 29042010
    },
    {
        "Id": 2463,
        "SKUNo": "AS2469",
        "CASNO": "98‐ 95‐ 3",
        "ProductName": "NITROBENZENE FOR SYNTHESIS",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29042010
    },
    {
        "Id": 2464,
        "SKUNo": "AS2470",
        "CASNO": "98‐ 95‐ 3",
        "ProductName": "NITROBENZENE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29042010
    },
    {
        "Id": 2465,
        "SKUNo": "AS2470",
        "CASNO": "98‐ 95‐ 3",
        "ProductName": "NITROBENZENE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29042010
    },
    {
        "Id": 2466,
        "SKUNo": "AS2471",
        "CASNO": "121‐92‐6",
        "ProductName": "3‐NITROBENZOIC ACID 98% For Synthesis ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29163190
    },
    {
        "Id": 2467,
        "SKUNo": "AS2471",
        "CASNO": "121‐92‐6",
        "ProductName": "3‐NITROBENZOIC ACID 98% For Synthesis ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163190
    },
    {
        "Id": 2468,
        "SKUNo": "AS2472",
        "CASNO": "62‐ 23‐ 7",
        "ProductName": "4‐NITROBENZOIC ACID  99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 2469,
        "SKUNo": "AS2473",
        "CASNO": "552‐ 89‐ 6",
        "ProductName": "2‐NITROBENZALDEHYDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 2470,
        "SKUNo": "AS2473",
        "CASNO": "552‐ 89‐ 6",
        "ProductName": "2‐NITROBENZALDEHYDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 2471,
        "SKUNo": "AS2473",
        "CASNO": "552‐ 89‐ 6",
        "ProductName": "2‐NITROBENZALDEHYDE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29130090
    },
    {
        "Id": 2472,
        "SKUNo": "AS2474",
        "CASNO": "555‐ 16‐ 8",
        "ProductName": "4‐NITROBENZALDEHYDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 2473,
        "SKUNo": "AS2474",
        "CASNO": "555‐ 16‐ 8",
        "ProductName": "4‐NITROBENZALDEHYDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29130090
    },
    {
        "Id": 2474,
        "SKUNo": "AS2475",
        "CASNO": "298‐ 83‐ 9",
        "ProductName": "NITRO B.T. AR (NITRO BLUE TETRA ZOLIUM CHLORIDE AR)‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 32049000
    },
    {
        "Id": 2475,
        "SKUNo": "AS2475",
        "CASNO": "298‐ 83‐ 9",
        "ProductName": "NITRO B.T. AR (NITRO BLUE TETRA ZOLIUM CHLORIDE AR)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2476,
        "SKUNo": "AS2476",
        "CASNO": "554‐ 84‐ 7",
        "ProductName": "m‐NITROPHENOL INDICATOR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2477,
        "SKUNo": "AS2476",
        "CASNO": "554‐ 84‐ 7",
        "ProductName": "m‐NITROPHENOL INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2478,
        "SKUNo": "AS2477",
        "CASNO": "100‐02‐7",
        "ProductName": "P‐NITROPHENOL INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2479,
        "SKUNo": "AS2477",
        "CASNO": "100‐02‐7",
        "ProductName": "P‐NITROPHENOL INDICATOR AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2480,
        "SKUNo": "AS2477",
        "CASNO": "100‐02‐7",
        "ProductName": "P‐NITROPHENOL INDICATOR AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2481,
        "SKUNo": "AS2478",
        "CASNO": "2492‐ 87‐ 7",
        "ProductName": "4‐NITROPHENYL b‐d GLUCOPYRANOSIDE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2482,
        "SKUNo": "AS2478",
        "CASNO": "2492‐ 87‐ 7",
        "ProductName": "4‐NITROPHENYL b‐d GLUCOPYRANOSIDE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2483,
        "SKUNo": "AS2479",
        "CASNO": "369‐07‐3",
        "ProductName": "o‐NITROPHENYL b‐d GALACTOPYRANOSIDE LR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2484,
        "SKUNo": "AS2480",
        "CASNO": "4264‐ 83‐ 9",
        "ProductName": "4‐NITROPHENYL PHOSPHATE DISODIUM SALT AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29199090
    },
    {
        "Id": 2485,
        "SKUNo": "AS2480",
        "CASNO": "4264‐ 83‐ 9",
        "ProductName": "4‐NITROPHENYL PHOSPHATE DISODIUM SALT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29199090
    },
    {
        "Id": 2486,
        "SKUNo": "AS2481",
        "CASNO": "603‐11‐2",
        "ProductName": "3‐NITROPHTHALIC ACID 98% For Synthesis‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2487,
        "SKUNo": "AS2481",
        "CASNO": "603‐11‐2",
        "ProductName": "3‐NITROPHTHALIC ACID 98% For Synthesis‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2488,
        "SKUNo": "AS2482",
        "CASNO": "610‐27‐5",
        "ProductName": "4‐NITROPHTHALIC ACID 80% For Synthesis‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2489,
        "SKUNo": "AS2482",
        "CASNO": "610‐27‐5",
        "ProductName": "4‐NITROPHTHALIC ACID 80% For Synthesis‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2490,
        "SKUNo": "AS2483",
        "CASNO": "131‐ 91‐ 9",
        "ProductName": "1‐NITROSO‐2‐NAPTHOL‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2491,
        "SKUNo": "AS2483",
        "CASNO": "131‐ 91‐ 9",
        "ProductName": "1‐NITROSO‐2‐NAPTHOL‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2492,
        "SKUNo": "AS2484",
        "CASNO": "131‐ 91‐ 9",
        "ProductName": "1‐NITROSO‐2‐NAPTHOL AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2493,
        "SKUNo": "AS2484",
        "CASNO": "131‐ 91‐ 9",
        "ProductName": "1‐NITROSO‐2‐NAPTHOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2494,
        "SKUNo": "AS2485",
        "CASNO": "88‐72‐2",
        "ProductName": "2‐NITROTOLUENE 99% For Synthesis‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29042030
    },
    {
        "Id": 2495,
        "SKUNo": "AS2485",
        "CASNO": "88‐72‐2",
        "ProductName": "2‐NITROTOLUENE 99% For Synthesis‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29042030
    },
    {
        "Id": 2496,
        "SKUNo": "AS2486",
        "CASNO": "99‐ 99‐ 0",
        "ProductName": "4‐NITROTOLUENE  FOR SYNTHESIS ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29042050
    },
    {
        "Id": 2497,
        "SKUNo": "AS2487",
        "CASNO": "6709‐77‐4",
        "ProductName": "NUCLEAR FAST RED  C.I. NO. 60760‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 2498,
        "SKUNo": "AS2487",
        "CASNO": "6709‐77‐4",
        "ProductName": "NUCLEAR FAST RED  C.I. NO. 60760‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 2499,
        "SKUNo": "AS2488",
        "CASNO": "5324‐ 84‐ 5",
        "ProductName": "1‐OCTANE SULPHONIC ACID SODIUM SALT(ANHYDROUS) AR For HPLC‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2500,
        "SKUNo": "AS2488",
        "CASNO": "5324‐ 84‐ 5",
        "ProductName": "1‐OCTANE SULPHONIC ACID SODIUM SALT(ANHYDROUS) AR For HPLC‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2501,
        "SKUNo": "AS2488",
        "CASNO": "207596‐ 29‐ 0",
        "ProductName": "1‐OCTANE SULPHONIC ACID SODIUM SALT (MONOHYDRATE) AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2502,
        "SKUNo": "AS2488",
        "CASNO": "207596‐ 29‐ 0",
        "ProductName": "1‐OCTANE SULPHONIC ACID SODIUM SALT (MONOHYDRATE) AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2503,
        "SKUNo": "AS2488",
        "CASNO": "207596‐ 29‐ 0",
        "ProductName": "1‐OCTANE SULPHONIC ACID SODIUM SALT (MONOHYDRATE) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2504,
        "SKUNo": "AS2489",
        "CASNO": "111‐ 87‐ 5",
        "ProductName": "n‐OCTANOL 99% FOR SYNTHESIS (OCTAN‐1‐OL, CAPRYL ALCOHOL)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051690
    },
    {
        "Id": 2505,
        "SKUNo": "AS2489",
        "CASNO": "111‐ 87‐ 5",
        "ProductName": "n‐OCTANOL 99% FOR SYNTHESIS (OCTAN‐1‐OL, CAPRYL ALCOHOL)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051690
    },
    {
        "Id": 2506,
        "SKUNo": "AS2490",
        "CASNO": "142‐ 31‐ 4",
        "ProductName": "OCTYL SULFATE SODIUM SALT FOR HPLC‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29209099
    },
    {
        "Id": 2507,
        "SKUNo": "AS2491",
        "CASNO": "1320‐06‐5",
        "ProductName": "OIL RED O for ELECTROPHORESIS C.I. No 26125‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2508,
        "SKUNo": "AS2491",
        "CASNO": "1320‐06‐5",
        "ProductName": "OIL RED O for ELECTROPHORESIS C.I. No 26125‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2509,
        "SKUNo": "AS2492",
        "CASNO": "112‐ 80‐ 1",
        "ProductName": "OLEIC ACID (Suitable for Pharma Industry)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38231200
    },
    {
        "Id": 2510,
        "SKUNo": "AS2492",
        "CASNO": "112‐ 80‐ 1",
        "ProductName": "OLEIC ACID (Suitable for Pharma Industry)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38231200
    },
    {
        "Id": 2511,
        "SKUNo": "AS2493",
        "CASNO": "8001‐ 25‐ 0",
        "ProductName": "OLIVE OIL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 15091000
    },
    {
        "Id": 2512,
        "SKUNo": "AS2493",
        "CASNO": "8001‐ 25‐ 0",
        "ProductName": "OLIVE OIL‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 15091000
    },
    {
        "Id": 2513,
        "SKUNo": "AS2494",
        "CASNO": "4395‐ 65‐ 7",
        "ProductName": "ORACET BLUE 2R(1‐AMINO‐4‐ANILINOANTHRAQUINONE) C.I. No.61110‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32041975
    },
    {
        "Id": 2514,
        "SKUNo": "AS2495",
        "CASNO": "12769‐16‐3",
        "ProductName": "ORCET BLUE B INDICATOR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32041975
    },
    {
        "Id": 2515,
        "SKUNo": "AS2495",
        "CASNO": "12769‐16‐3",
        "ProductName": "ORCET BLUE B INDICATOR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041975
    },
    {
        "Id": 2516,
        "SKUNo": "AS2496",
        "CASNO": "1936‐ 15‐ 8",
        "ProductName": "ORANGE G Indicator For microscopy‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2517,
        "SKUNo": "AS2496",
        "CASNO": "1936‐ 15‐ 8",
        "ProductName": "ORANGE G Indicator For microscopy‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2518,
        "SKUNo": "AS2497",
        "CASNO": "1400‐ 62‐ 0",
        "ProductName": "ORCEIN FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 2519,
        "SKUNo": "AS2497",
        "CASNO": "1400‐ 62‐ 0",
        "ProductName": "ORCEIN FOR MICROSCOPY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32030090
    },
    {
        "Id": 2520,
        "SKUNo": "AS2498",
        "CASNO": "6153‐ 39‐ 5",
        "ProductName": "ORCINOL ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29071190
    },
    {
        "Id": 2521,
        "SKUNo": "AS2498",
        "CASNO": "6153‐ 39‐ 5",
        "ProductName": "ORCINOL ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29071190
    },
    {
        "Id": 2522,
        "SKUNo": "AS2498",
        "CASNO": "6153‐ 39‐ 5",
        "ProductName": "ORCINOL ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29071190
    },
    {
        "Id": 2523,
        "SKUNo": "AS2499",
        "CASNO": "3184‐ 13‐ 2",
        "ProductName": "L‐ORNITHINE MONOHYDROCHLORIDE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2524,
        "SKUNo": "AS2499",
        "CASNO": "3184‐ 13‐ 2",
        "ProductName": "L‐ORNITHINE MONOHYDROCHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2525,
        "SKUNo": "AS2499",
        "CASNO": "3184‐ 13‐ 2",
        "ProductName": "L‐ORNITHINE MONOHYDROCHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2526,
        "SKUNo": "AS2500",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28092010
    },
    {
        "Id": 2527,
        "SKUNo": "AS2500",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2528,
        "SKUNo": "AS2500",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2529,
        "SKUNo": "AS2501",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28092010
    },
    {
        "Id": 2530,
        "SKUNo": "AS2501",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2531,
        "SKUNo": "AS2501",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2532,
        "SKUNo": "AS2502",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR 88‐93%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28092010
    },
    {
        "Id": 2533,
        "SKUNo": "AS2502",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR 88‐93%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2534,
        "SKUNo": "AS2502",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID LR 88‐93%‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2535,
        "SKUNo": "AS2503",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR 88‐93%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28092010
    },
    {
        "Id": 2536,
        "SKUNo": "AS2503",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR 88‐93%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2537,
        "SKUNo": "AS2503",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID AR 88‐93%‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2538,
        "SKUNo": "AS2504",
        "CASNO": "7664‐ 38‐ 2",
        "ProductName": "ORTHOPHOSPHORIC ACID FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28092010
    },
    {
        "Id": 2539,
        "SKUNo": "AS2505",
        "CASNO": "20816‐ 12‐ 0",
        "ProductName": "OSMIC ACID AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2540,
        "SKUNo": "AS2506",
        "CASNO": "20816‐ 12‐ 0",
        "ProductName": "OSMIC ACID SOLUTION 2% W/V FOR MICROSCOPY‐5ML",
        "PACKSIZE": "5ML",
        "HSNCODE": 28439020
    },
    {
        "Id": 2541,
        "SKUNo": "AS2507",
        "CASNO": "6153‐ 56‐ 6",
        "ProductName": "OXALIC ACID PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171110
    },
    {
        "Id": 2542,
        "SKUNo": "AS2507",
        "CASNO": "6153‐ 56‐ 6",
        "ProductName": "OXALIC ACID PURIFIED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29171110
    },
    {
        "Id": 2543,
        "SKUNo": "AS2508",
        "CASNO": "6153‐ 56‐ 6",
        "ProductName": "OXALIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171110
    },
    {
        "Id": 2544,
        "SKUNo": "AS2509",
        "CASNO": "6153‐ 56‐ 6",
        "ProductName": "OXALIC ACID 0.1 N (N/10)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29171110
    },
    {
        "Id": 2545,
        "SKUNo": "AS2510",
        "CASNO": "              ",
        "ProductName": "OX‐BILE DRIED POWDER FOR MICROBIOLOGY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 5100020
    },
    {
        "Id": 2546,
        "SKUNo": "AS2510",
        "CASNO": "",
        "ProductName": "OX‐BILE DRIED POWDER FOR MICROBIOLOGY",
        "PACKSIZE": "500GM",
        "HSNCODE": 5100020
    },
    {
        "Id": 2547,
        "SKUNo": "AS2511",
        "CASNO": "8008‐ 63‐ 7",
        "ProductName": "OX‐GALL POWDER BACTERIOLOGICAL GRADE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 5100020
    },
    {
        "Id": 2548,
        "SKUNo": "AS2511",
        "CASNO": "8008‐ 63‐ 7",
        "ProductName": "OX‐GALL POWDER BACTERIOLOGICAL GRADE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 5100020
    },
    {
        "Id": 2549,
        "SKUNo": "AS2512",
        "CASNO": "",
        "ProductName": "PALLADIUM SPONGE 99.9% POWDER‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 38151210

    },
    {
        "Id": 2550,
        "SKUNo": "AS2512",
        "CASNO": "",
        "ProductName": "PALLADIUM SPONGE 99.9% POWDER‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 38151210
    },
    {
        "Id": 2551,
        "SKUNo": "AS2513",
        "CASNO": "3375‐ 31‐ 3",
        "ProductName": "PALLADIUM ACETATE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2552,
        "SKUNo": "AS2513",
        "CASNO": "3375‐ 31‐ 3",
        "ProductName": "PALLADIUM ACETATE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2553,
        "SKUNo": "AS2514",
        "CASNO": "              ",
        "ProductName": "PALLADIUM‐CALCIUM CARBONATE(10% pd)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 38151210
    },
    {
        "Id": 2554,
        "SKUNo": "AS2515",
        "CASNO": "7440‐05‐3",
        "ProductName": "PALLADIUM‐CHARCOAL  ACTIVATED (5%pd)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 38151210
    },
    {
        "Id": 2555,
        "SKUNo": "AS2516",
        "CASNO": "7440‐05‐3",
        "ProductName": "PALLADIUM ‐CHARCOAL  ACTIVATED (10%pd)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 38151210
    },
    {
        "Id": 2556,
        "SKUNo": "AS2517",
        "CASNO": "7647‐10‐1",
        "ProductName": "PALLADIUM CHLORIDE PURISS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2557,
        "SKUNo": "AS2517",
        "CASNO": "7647‐10‐1",
        "ProductName": "PALLADIUM CHLORIDE PURISS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2558,
        "SKUNo": "AS2518",
        "CASNO": "              ",
        "ProductName": "PALLADIUM HYDROXIDE 20% ON CHARCOAL‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2559,
        "SKUNo": "AS2518",
        "CASNO": "              ",
        "ProductName": "PALLADIUM HYDROXIDE 20% ON CHARCOAL‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2560,
        "SKUNo": "AS2519",
        "CASNO": "207596‐32‐5",
        "ProductName": "PALLADIUM NITRATE (44% PD content)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2561,
        "SKUNo": "AS2520",
        "CASNO": "1314‐ 08‐ 5",
        "ProductName": "PALLADIUM (II) OXIDE HYDRATE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2562,
        "SKUNo": "AS2521",
        "CASNO": "13566‐03‐5",
        "ProductName": "PALLDIUM SULPHATE‐250MG",
        "PACKSIZE": "250 MG",
        "HSNCODE": 28439019
    },
    {
        "Id": 2563,
        "SKUNo": "AS2521",
        "CASNO": "13566‐03‐5",
        "ProductName": "PALLDIUM SULPHATE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2564,
        "SKUNo": "AS2522",
        "CASNO": "57‐ 10‐ 3",
        "ProductName": "PALMITIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29157010
    },
    {
        "Id": 2565,
        "SKUNo": "AS2523",
        "CASNO": "57‐ 10‐ 3",
        "ProductName": "PALMITIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29157010
    },
    {
        "Id": 2566,
        "SKUNo": "AS2523",
        "CASNO": "57‐ 10‐ 3",
        "ProductName": "PALMITIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29157010
    },
    {
        "Id": 2567,
        "SKUNo": "AS2524",
        "CASNO": "85‐ 85‐ 8",
        "ProductName": "PAN INDICATOR AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2568,
        "SKUNo": "AS2524",
        "CASNO": "85‐ 85‐ 8",
        "ProductName": "PAN INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2569,
        "SKUNo": "AS2525",
        "CASNO": "8049‐ 47‐ 6",
        "ProductName": "PANCREATIN (ACTIVITY EQ. TO 1NF)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079020
    },
    {
        "Id": 2570,
        "SKUNo": "AS2525",
        "CASNO": "8049‐ 47‐ 6",
        "ProductName": "PANCREATIN (ACTIVITY EQ. TO 1NF)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35079020
    },
    {
        "Id": 2571,
        "SKUNo": "AS2526",
        "CASNO": "9001‐73‐4",
        "ProductName": "PAPAIN LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079071
    },
    {
        "Id": 2572,
        "SKUNo": "AS2526",
        "CASNO": "9001‐73‐4",
        "ProductName": "PAPAIN LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35079071
    },
    {
        "Id": 2573,
        "SKUNo": "AS2527",
        "CASNO": "",
        "ProductName": "PAPANICOLAOUS SOLUTION 1a‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 2574,
        "SKUNo": "AS2528",
        "CASNO": "          ",
        "ProductName": "PAPANICOLAOUS SOLUTION 2b‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 2575,
        "SKUNo": "AS2529",
        "CASNO": "          ",
        "ProductName": "PAPANICOLAUOS SOLUTION 3b‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32030090
    },
    {
        "Id": 2576,
        "SKUNo": "AS2530",
        "CASNO": "16593‐ 81‐ 0",
        "ProductName": "PAR INDICATOR AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2577,
        "SKUNo": "AS2530",
        "CASNO": "16593‐ 81‐ 0",
        "ProductName": "PAR INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2578,
        "SKUNo": "AS2531",
        "CASNO": "8012‐ 95‐ 1",
        "ProductName": "PARAFFIN LIQUID COLOURLESS,HEAVY‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2579,
        "SKUNo": "AS2531",
        "CASNO": "8012‐ 95‐ 1",
        "ProductName": "PARAFFIN LIQUID COLOURLESS,HEAVY‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2580,
        "SKUNo": "AS2532",
        "CASNO": "8012‐ 95‐ 1",
        "ProductName": "PARAFFIN LIQUID COLOURLESS LIGHT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2581,
        "SKUNo": "AS2532",
        "CASNO": "8012‐ 95‐ 1",
        "ProductName": "PARAFFIN LIQUID COLOURLESS LIGHT‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2582,
        "SKUNo": "AS2533",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 56‐58C‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2583,
        "SKUNo": "AS2533",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 56‐58C‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 27122010
    },
    {
        "Id": 2584,
        "SKUNo": "AS2534",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 58‐60C‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2585,
        "SKUNo": "AS2534",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 58‐60C‐2KG",
        "PACKSIZE": "2KG",
        "HSNCODE": 27122010
    },
    {
        "Id": 2586,
        "SKUNo": "AS2535",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX‐58‐60C PELLETS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2587,
        "SKUNo": "AS2535",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX‐58‐60C PELLETS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 27122010
    },
    {
        "Id": 2588,
        "SKUNo": "AS2536",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX‐58‐60C BLOCK/BRICKS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2589,
        "SKUNo": "AS2537",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 60‐62C‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2590,
        "SKUNo": "AS2537",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 60‐62C‐2KG",
        "PACKSIZE": "2KG",
        "HSNCODE": 27122010
    },
    {
        "Id": 2591,
        "SKUNo": "AS2538",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX 60‐62CBLOCK/BRICKS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2592,
        "SKUNo": "AS2539",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX WITH CERESIN CONGEALING POINT ABOUT 60C‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2593,
        "SKUNo": "AS2539",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX WITH CERESIN CONGEALING POINT ABOUT 60C‐2KG",
        "PACKSIZE": "2KG",
        "HSNCODE": 27122010
    },
    {
        "Id": 2594,
        "SKUNo": "AS2540",
        "CASNO": "8002‐ 74‐ 2",
        "ProductName": "PARAFFIN WAX WITH CERESIN CONGEALING POINT ABOUT 60C BLOCK/BRICKS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27122010
    },
    {
        "Id": 2595,
        "SKUNo": "AS2541",
        "CASNO": "30525‐ 89‐ 4",
        "ProductName": "PARAFORMALDEHYDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29126000
    },
    {
        "Id": 2596,
        "SKUNo": "AS2542",
        "CASNO": "467‐ 62‐ 9",
        "ProductName": "PARAROSANILINE (BASE) FOR MICROSCOPY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 2597,
        "SKUNo": "AS2543",
        "CASNO": "569‐ 61‐ 9",
        "ProductName": "PARAROSANILINE CHLORIDE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 2598,
        "SKUNo": "AS2543",
        "CASNO": "569‐ 61‐ 9",
        "ProductName": "PARAROSANILINE CHLORIDE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 2599,
        "SKUNo": "AS2544",
        "CASNO": "129‐ 17‐ 9",
        "ProductName": "PATENT BLUE V (VF)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2600,
        "SKUNo": "AS2544",
        "CASNO": "129‐ 17‐ 9",
        "ProductName": "PATENT BLUE V (VF)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2601,
        "SKUNo": "AS2545",
        "CASNO": "3737‐ 95‐ 9",
        "ProductName": "PATTON AND REEDER’S REAGENT AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2602,
        "SKUNo": "AS2545",
        "CASNO": "3737‐ 95‐ 9",
        "ProductName": "PATTON AND REEDER’S REAGENT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 2603,
        "SKUNo": "AS2546",
        "CASNO": "9000‐ 69‐ 5",
        "ProductName": "PECTIN LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 13022000
    },
    {
        "Id": 2604,
        "SKUNo": "AS2546",
        "CASNO": "9000‐ 69‐ 5",
        "ProductName": "PECTIN LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 13022000
    },
    {
        "Id": 2605,
        "SKUNo": "AS2547",
        "CASNO": "109‐ 66‐ 0",
        "ProductName": "N‐PENTANE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 2606,
        "SKUNo": "AS2547",
        "CASNO": "109‐ 66‐ 0",
        "ProductName": "N‐PENTANE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29012990
    },
    {
        "Id": 2607,
        "SKUNo": "AS2548",
        "CASNO": "109‐ 66‐ 0",
        "ProductName": "N‐PENTANE  AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29012990
    },
    {
        "Id": 2608,
        "SKUNo": "AS2548",
        "CASNO": "109‐ 66‐ 0",
        "ProductName": "N‐PENTANE  AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 2609,
        "SKUNo": "AS2549",
        "CASNO": "109‐ 66‐ 0",
        "ProductName": "N‐PENTANE  FOR HPLC/SPECTROSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29012990
    },
    {
        "Id": 2610,
        "SKUNo": "AS2550",
        "CASNO": "22767‐ 49‐ 3",
        "ProductName": "1‐PENTANE SULFONIC ACID SODIUM SALT FOR HPLC (ANHYDROUS)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2611,
        "SKUNo": "AS2550",
        "CASNO": "22767‐ 49‐ 3",
        "ProductName": "1‐PENTANE SULFONIC ACID SODIUM SALT FOR HPLC (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2612,
        "SKUNo": "AS2551",
        "CASNO": "22767‐ 49‐ 3",
        "ProductName": "1‐PENTANE SULFONIC ACID SODIUM SALT FOR HPLC (MONOHYDRATE)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2613,
        "SKUNo": "AS2551",
        "CASNO": "22767‐ 49‐ 3",
        "ProductName": "1‐PENTANE SULFONIC ACID SODIUM SALT FOR HPLC (MONOHYDRATE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2614,
        "SKUNo": "AS2551",
        "CASNO": "22767‐ 49‐ 3",
        "ProductName": "1‐PENTANE SULFONIC ACID SODIUM SALT FOR HPLC (MONOHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 2615,
        "SKUNo": "AS2552",
        "CASNO": "8006‐ 90‐ 4",
        "ProductName": "PEPPERMINT OIL LR‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 33012400
    },
    {
        "Id": 2616,
        "SKUNo": "AS2552",
        "CASNO": "8006‐ 90‐ 4",
        "ProductName": "PEPPERMINT OIL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 33012400
    },
    {
        "Id": 2617,
        "SKUNo": "AS2553",
        "CASNO": "91079‐ 38‐8",
        "ProductName": "PEPTONE BACTERIOLOGICAL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 2618,
        "SKUNo": "AS2553",
        "CASNO": "91079‐ 38‐8",
        "ProductName": "PEPTONE BACTERIOLOGICAL‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 35040010
    },
    {
        "Id": 2619,
        "SKUNo": "AS2554",
        "CASNO": "91079‐ 38‐8",
        "ProductName": "PEPTONE BACTERIOLOGICAL GRANULAR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 2620,
        "SKUNo": "AS2554",
        "CASNO": "91079‐ 38‐ 8",
        "ProductName": "PEPTONE BACTERIOLOGICAL GRANULAR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 35040010
    },
    {
        "Id": 2621,
        "SKUNo": "AS2555",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR  60%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28112990
    },
    {
        "Id": 2622,
        "SKUNo": "AS2555",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR  60%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28112990
    },
    {
        "Id": 2623,
        "SKUNo": "AS2556",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR 70%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28112990
    },
    {
        "Id": 2624,
        "SKUNo": "AS2556",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR 70%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28112990
    },
    {
        "Id": 2625,
        "SKUNo": "AS2557",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR 70% (SUITABLE FOR DIAMOND INDUSTRY)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28112990
    },
    {
        "Id": 2626,
        "SKUNo": "AS2557",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID AR 70% (SUITABLE FOR DIAMOND INDUSTRY)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28112990
    },
    {
        "Id": 2627,
        "SKUNo": "AS2558",
        "CASNO": "7601‐ 90‐ 3",
        "ProductName": "PERCHLORIC ACID 0.1 N IN GLACIAL ACETIC ACID‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2628,
        "SKUNo": "AS2558",
        "CASNO": "7601‐90‐3",
        "ProductName": "PERCHLORIC ACID 0.1N IN GLACIAL ACETIC ACID ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 2629,
        "SKUNo": "AS2559",
        "CASNO": "7601‐90‐3",
        "ProductName": "PERCHLORIC ACID 20%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28112990
    },
    {
        "Id": 2630,
        "SKUNo": "AS2559",
        "CASNO": "7601‐90‐3",
        "ProductName": "PERCHLORIC ACID 20%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28112990
    },
    {
        "Id": 2631,
        "SKUNo": "AS2560",
        "CASNO": "10450‐ 60‐ 9",
        "ProductName": "PERIODIC ACID FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2632,
        "SKUNo": "AS2560",
        "CASNO": "10450‐ 60‐ 9",
        "ProductName": "PERIODIC ACID FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2633,
        "SKUNo": "AS2561",
        "CASNO": "10450‐ 60‐ 9",
        "ProductName": "PERIODIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2634,
        "SKUNo": "AS2561",
        "CASNO": "10450‐ 60‐ 9",
        "ProductName": "PERIODIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2635,
        "SKUNo": "AS2562",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 40‐60C LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2636,
        "SKUNo": "AS2562",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 40‐60C LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2637,
        "SKUNo": "AS2562",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 40‐60C AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2638,
        "SKUNo": "AS2562",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 40‐60C AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2639,
        "SKUNo": "AS2563",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 60‐80C LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2640,
        "SKUNo": "AS2563",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 60‐80C LR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2641,
        "SKUNo": "AS2564",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 60‐80C AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2642,
        "SKUNo": "AS2564",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 60‐80C AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2643,
        "SKUNo": "AS2565",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 100‐200C FOR SYNTHESIS",
        "PACKSIZE": "500ML",
        "HSNCODE": 27101990
    },
    {
        "Id": 2644,
        "SKUNo": "AS2565",
        "CASNO": "8032‐ 32‐ 4",
        "ProductName": "PETROLEUM ETHER 100‐200C FOR SYNTHESIS",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27101990
    },
    {
        "Id": 2645,
        "SKUNo": "AS2566",
        "CASNO": "8009/03/08",
        "ProductName": "PETROLEUM JELLY WHITE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 27121090
    },
    {
        "Id": 2646,
        "SKUNo": "AS2567",
        "CASNO": "5144‐ 89‐ 8",
        "ProductName": "1,10 PHENANTHROLINE AR MONOHYDRATE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2647,
        "SKUNo": "AS2567",
        "CASNO": "5144‐ 89‐ 8",
        "ProductName": "1,10 PHENANTHROLINE AR MONOHYDRATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2648,
        "SKUNo": "AS2567",
        "CASNO": "5144‐ 89‐ 8",
        "ProductName": "1,10 PHENANTHROLINE AR MONOHYDRATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2649,
        "SKUNo": "AS2568",
        "CASNO": "18851‐33‐7",
        "ProductName": "1,10 PHENANTHROLINE HCL AR 99.5%‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2650,
        "SKUNo": "AS2568",
        "CASNO": "18851‐33‐7",
        "ProductName": "1,10 PHENANTHROLINE HCL AR 99.5%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2651,
        "SKUNo": "AS2569",
        "CASNO": "299‐ 11‐ 6",
        "ProductName": "PHENAZINE METHOLSULPHATE‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2652,
        "SKUNo": "AS2569",
        "CASNO": "299‐ 11‐ 6",
        "ProductName": "PHENAZINE METHOLSULPHATE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2653,
        "SKUNo": "AS2570",
        "CASNO": "108‐ 95‐ 2",
        "ProductName": "PHENOL CRYSTAL LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071110
    },
    {
        "Id": 2654,
        "SKUNo": "AS2570",
        "CASNO": "108‐ 95‐ 2",
        "ProductName": "PHENOL CRYSTAL LR‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29071110
    },
    {
        "Id": 2655,
        "SKUNo": "AS2571",
        "CASNO": "108‐ 95‐ 2",
        "ProductName": "PHENOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071110
    },
    {
        "Id": 2656,
        "SKUNo": "AS2571",
        "CASNO": "108‐ 95‐ 2",
        "ProductName": "PHENOL AR‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29071110
    },
    {
        "Id": 2657,
        "SKUNo": "AS2572",
        "CASNO": "77‐ 09‐ 8",
        "ProductName": "PHENOLPHTHALEIN INDICATOR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 2658,
        "SKUNo": "AS2572",
        "CASNO": "77‐ 09‐ 8",
        "ProductName": "PHENOLPHTHALEIN INDICATOR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 2659,
        "SKUNo": "AS2572",
        "CASNO": "77‐ 09‐ 8",
        "ProductName": "PHENOLPHTHALEIN INDICATOR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 2660,
        "SKUNo": "AS2573",
        "CASNO": "77‐ 09‐ 8",
        "ProductName": "PHENOLPHTHALEIN (INDICATOR) SOLUTION (1%)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2661,
        "SKUNo": "AS2573",
        "CASNO": "77‐ 09‐ 8",
        "ProductName": "PHENOLPHTHALEIN (INDICATOR) SOLUTION (1%)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2662,
        "SKUNo": "AS2574",
        "CASNO": "143‐ 74‐ 8",
        "ProductName": "PHENOL RED AR (pH indicator)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2663,
        "SKUNo": "AS2574",
        "CASNO": "143‐ 74‐ 8",
        "ProductName": "PHENOL RED AR (pH indicator)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2664,
        "SKUNo": "AS2574",
        "CASNO": "143‐ 74‐ 8",
        "ProductName": "PHENOL RED AR (pH indicator)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2665,
        "SKUNo": "AS2575",
        "CASNO": "143‐ 74‐ 8",
        "ProductName": "PHENOL RED INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 32041963
    },
    {
        "Id": 2666,
        "SKUNo": "AS2576",
        "CASNO": "122‐ 99‐ 6",
        "ProductName": "2‐PHENOXYETHANOL  FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094900
    },
    {
        "Id": 2667,
        "SKUNo": "AS2576",
        "CASNO": "122‐ 99‐ 6",
        "ProductName": "2‐PHENOXYETHANOL  FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094900
    },
    {
        "Id": 2668,
        "SKUNo": "AS2577",
        "CASNO": "673‐ 06‐ 3",
        "ProductName": "D‐PHENYLALANINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2669,
        "SKUNo": "AS2577",
        "CASNO": "673‐ 06‐ 3",
        "ProductName": "D‐PHENYLALANINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2670,
        "SKUNo": "AS2577",
        "CASNO": "673‐ 06‐ 3",
        "ProductName": "D‐PHENYLALANINE FOR BIOCHEMISTRY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29224990
    },
    {
        "Id": 2671,
        "SKUNo": "AS2578",
        "CASNO": "63‐ 91‐ 2",
        "ProductName": "L‐PHENYLALANINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2672,
        "SKUNo": "AS2578",
        "CASNO": "63‐ 91‐ 2",
        "ProductName": "L‐PHENYLALANINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2673,
        "SKUNo": "AS2578",
        "CASNO": "63‐ 91‐ 2",
        "ProductName": "L‐PHENYLALANINE FOR BIOCHEMISTRY ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2674,
        "SKUNo": "AS2579",
        "CASNO": "150‐30‐1",
        "ProductName": "DL‐ PHENYLALANINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 2675,
        "SKUNo": "AS2580",
        "CASNO": "91‐ 40‐ 7",
        "ProductName": "N‐PHENYLANTHRANILIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224300
    },
    {
        "Id": 2676,
        "SKUNo": "AS2580",
        "CASNO": "91‐ 40‐ 7",
        "ProductName": "N‐PHENYLANTHRANILIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224300
    },
    {
        "Id": 2677,
        "SKUNo": "AS2581",
        "CASNO": "1885‐14‐9",
        "ProductName": "PHENYL CHLOROFORMATE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 2678,
        "SKUNo": "AS2581",
        "CASNO": "1885‐14‐9",
        "ProductName": "PHENYL CHLOROFORMATE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153990
    },
    {
        "Id": 2679,
        "SKUNo": "AS2582",
        "CASNO": "95‐ 54‐ 5",
        "ProductName": "o‐PHENYLENEDIAMINE FOR SYNTHESIS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29215110
    },
    {
        "Id": 2680,
        "SKUNo": "AS2582",
        "CASNO": "95‐ 54‐ 5",
        "ProductName": "o‐PHENYLENEDIAMINE FOR SYNTHESIS ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29215110
    },
    {
        "Id": 2681,
        "SKUNo": "AS2583",
        "CASNO": "106‐ 50‐ 3",
        "ProductName": "p‐PHENYLENEDIAMINE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29215130
    },
    {
        "Id": 2682,
        "SKUNo": "AS2583",
        "CASNO": "106‐ 50‐ 3",
        "ProductName": "p‐PHENYLENEDIAMINE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29215130
    },
    {
        "Id": 2683,
        "SKUNo": "AS2584",
        "CASNO": "100‐63‐0",
        "ProductName": "PHENYL HYDRAZINE FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29280090
    },
    {
        "Id": 2684,
        "SKUNo": "AS2584",
        "CASNO": "100‐63‐0",
        "ProductName": "PHENYL HYDRAZINE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29280090
    },
    {
        "Id": 2685,
        "SKUNo": "AS2584",
        "CASNO": "100‐63‐0",
        "ProductName": "PHENYL HYDRAZINE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29280090
    },
    {
        "Id": 2686,
        "SKUNo": "AS2585",
        "CASNO": "100‐63‐0",
        "ProductName": "PHENYL HYDRAZINE AR‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29280090
    },
    {
        "Id": 2687,
        "SKUNo": "AS2585",
        "CASNO": "100‐63‐0",
        "ProductName": "PHENYL HYDRAZINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29280090
    },
    {
        "Id": 2688,
        "SKUNo": "AS2586",
        "CASNO": "59‐ 88‐ 1",
        "ProductName": "PHENYL HYDRAZINE HYDROCHLORIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 2689,
        "SKUNo": "AS2586",
        "CASNO": "59‐ 88‐ 1",
        "ProductName": "PHENYL HYDRAZINE HYDROCHLORIDE ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 2690,
        "SKUNo": "AS2587",
        "CASNO": "59‐ 88‐ 1",
        "ProductName": "PHENYL HYDRAZINE HYDROCHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 2691,
        "SKUNo": "AS2587",
        "CASNO": "59‐ 88‐ 1",
        "ProductName": "PHENYL HYDRAZINE HYDROCHLORIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 2692,
        "SKUNo": "AS2588",
        "CASNO": "62‐ 38‐ 4",
        "ProductName": "PHENYL MERCURY ACETATE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2693,
        "SKUNo": "AS2588",
        "CASNO": "62‐ 38‐ 4",
        "ProductName": "PHENYL MERCURY ACETATE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2694,
        "SKUNo": "AS2589",
        "CASNO": "8003/05/02",
        "ProductName": "PHENYL MERCURY NITRATE (BASIC) FOR SYNTHESIS ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2695,
        "SKUNo": "AS2589",
        "CASNO": "8003/05/02",
        "ProductName": "PHENYL MERCURY NITRATE (BASIC) FOR SYNTHESIS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28521000
    },
    {
        "Id": 2696,
        "SKUNo": "AS2590",
        "CASNO": "3279‐ 54‐ 7",
        "ProductName": "PHENYL PHOSPHATE DISODIUM SALT AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29199090
    },
    {
        "Id": 2697,
        "SKUNo": "AS2590",
        "CASNO": "3279‐ 54‐ 7",
        "ProductName": "PHENYL PHOSPHATE DISODIUM SALT AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29199090
    },
    {
        "Id": 2698,
        "SKUNo": "AS2591",
        "CASNO": "103‐85‐5",
        "ProductName": "N– PHENYL THIOUREA‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 2699,
        "SKUNo": "AS2592",
        "CASNO": "138‐ 24‐ 9",
        "ProductName": "PHENYL TRIMETHYL AMMONIUM CHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 2700,
        "SKUNo": "AS2592",
        "CASNO": "138‐ 24‐ 9",
        "ProductName": "PHENYL TRIMETHYL AMMONIUM CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 2701,
        "SKUNo": "AS2593",
        "CASNO": "108‐ 73‐ 6",
        "ProductName": "PHLOROGLUCINOL AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2702,
        "SKUNo": "AS2593",
        "CASNO": "108‐ 73‐ 6",
        "ProductName": "PHLOROGLUCINOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2703,
        "SKUNo": "AS2594",
        "CASNO": "18472‐ 87‐ 2",
        "ProductName": "PHLOXIN B FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2704,
        "SKUNo": "AS2594",
        "CASNO": "18472‐ 87‐ 2",
        "ProductName": "PHLOXIN B FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2705,
        "SKUNo": "AS2595",
        "CASNO": "51429‐ 74‐ 4",
        "ProductName": "PHOSPHOMOLYBDIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2706,
        "SKUNo": "AS2595",
        "CASNO": "51429‐ 74‐ 4",
        "ProductName": "PHOSPHOMOLYBDIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2707,
        "SKUNo": "AS2596",
        "CASNO": "37267‐ 86‐ 0",
        "ProductName": "meta‐PHOSPHORIC ACID (GLACIAL STICKS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28092010
    },
    {
        "Id": 2708,
        "SKUNo": "AS2597",
        "CASNO": "37267‐ 86‐ 0",
        "ProductName": "meta‐PHOSPHORIC ACID AR (GLACIAL STICKS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28092010
    },
    {
        "Id": 2709,
        "SKUNo": "AS2597",
        "CASNO": "37267‐ 86‐ 0",
        "ProductName": "meta‐PHOSPHORIC ACID AR (GLACIAL STICKS)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28092010
    },
    {
        "Id": 2710,
        "SKUNo": "AS2598",
        "CASNO": "10025‐87‐3",
        "ProductName": "PHOSPHORUS OXYCHLORIDE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28129000
    },
    {
        "Id": 2711,
        "SKUNo": "AS2598",
        "CASNO": "10025‐87‐3",
        "ProductName": "PHOSPHORUS OXYCHLORIDE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28129000
    },
    {
        "Id": 2712,
        "SKUNo": "AS2599",
        "CASNO": "1314‐ 56‐ 3",
        "ProductName": "PHOSPHORUS PENTAOXIDE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28091000
    },
    {
        "Id": 2713,
        "SKUNo": "AS2599",
        "CASNO": "1314‐ 56‐ 3",
        "ProductName": "PHOSPHORUS PENTAOXIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28091000
    },
    {
        "Id": 2714,
        "SKUNo": "AS2600",
        "CASNO": "1314‐ 56‐ 3",
        "ProductName": "PHOSPHORUS PENTOXIDE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28091000
    },
    {
        "Id": 2715,
        "SKUNo": "AS2601",
        "CASNO": "7719/12/02",
        "ProductName": "PHOSPHORUS TRICHLORIDE FOR SYNTHESIS ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28129000
    },
    {
        "Id": 2716,
        "SKUNo": "AS2601",
        "CASNO": "7719/12/02",
        "ProductName": "PHOSPHORUS TRICHLORIDE FOR SYNTHESIS ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28129000
    },
    {
        "Id": 2717,
        "SKUNo": "AS2602",
        "CASNO": "12501‐ 23‐ 4",
        "ProductName": "PHOSPHOTUNGSTIC ACID LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2718,
        "SKUNo": "AS2602",
        "CASNO": "12501‐ 23‐ 4",
        "ProductName": "PHOSPHOTUNGSTIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2719,
        "SKUNo": "AS2603",
        "CASNO": "12501‐ 23‐ 4",
        "ProductName": "PHOSPHOTUNGSTIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2720,
        "SKUNo": "AS2603",
        "CASNO": "12501‐ 23‐ 4",
        "ProductName": "PHOSPHOTUNGSTIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 2721,
        "SKUNo": "AS2604",
        "CASNO": "643‐79‐8",
        "ProductName": "o‐PHTHALADEHYDE  AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29122990
    },
    {
        "Id": 2722,
        "SKUNo": "AS2604",
        "CASNO": "643‐79‐8",
        "ProductName": "o‐PHTHALADEHYDE  AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29122990
    },
    {
        "Id": 2723,
        "SKUNo": "AS2605",
        "CASNO": "88‐ 99‐ 3",
        "ProductName": "PHTHALIC ACID FOR SYNTHESIS ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173930
    },
    {
        "Id": 2724,
        "SKUNo": "AS2606",
        "CASNO": "88‐ 99‐ 3",
        "ProductName": "PHTHALIC ACID  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173930
    },
    {
        "Id": 2725,
        "SKUNo": "AS2607",
        "CASNO": "85‐ 44‐ 9",
        "ProductName": "PHTHALIC ANHYDRIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173500
    },
    {
        "Id": 2726,
        "SKUNo": "AS2607",
        "CASNO": "85‐ 44‐ 9",
        "ProductName": "PHTHALIC ANHYDRIDE FOR SYNTHESIS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29173500
    },
    {
        "Id": 2727,
        "SKUNo": "AS2608",
        "CASNO": "87‐ 41‐ 2",
        "ProductName": "PHTHALIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 2728,
        "SKUNo": "AS2608",
        "CASNO": "87‐ 41‐ 2",
        "ProductName": "PHTHALIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 2729,
        "SKUNo": "AS2609",
        "CASNO": "85‐ 41‐ 6",
        "ProductName": "PHTHALIMIDE FOR SYNTHESIS ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 2730,
        "SKUNo": "AS2610",
        "CASNO": "88‐89‐1",
        "ProductName": "PICRIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2731,
        "SKUNo": "AS2611",
        "CASNO": "88‐89‐1",
        "ProductName": "PICRIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2732,
        "SKUNo": "AS2611",
        "CASNO": "88‐89‐1",
        "ProductName": "PICRIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29089990
    },
    {
        "Id": 2733,
        "SKUNo": "AS2612",
        "CASNO": "88‐89‐1",
        "ProductName": "PICRIC ACID SOLUTION AR 1.2%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29089990
    },
    {
        "Id": 2734,
        "SKUNo": "AS2612",
        "CASNO": "88‐89‐1",
        "ProductName": "PICRIC ACID SOLUTION AR 1.2%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29089990
    },
    {
        "Id": 2735,
        "SKUNo": "AS2613",
        "CASNO": "110‐ 85‐ 0",
        "ProductName": "PIPERAZINE (Anhydrous) 98%‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2736,
        "SKUNo": "AS2613",
        "CASNO": "110‐ 85‐ 0",
        "ProductName": "PIPERAZINE (Anhydrous) 98%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29335990
    },
    {
        "Id": 2737,
        "SKUNo": "AS2614",
        "CASNO": "5625‐ 37‐ 6",
        "ProductName": "PIPES (BUFFER) {piperazine ‐N,N‐Bis‐2‐Ethene Sulfonic acid}‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2738,
        "SKUNo": "AS2614",
        "CASNO": "5625‐ 37‐ 6",
        "ProductName": "PIPES (BUFFER) {piperazine ‐N,N‐Bis‐2‐Ethene Sulfonic acid}‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2739,
        "SKUNo": "AS2614",
        "CASNO": "5625‐ 37‐ 6",
        "ProductName": "PIPES (BUFFER) {piperazine ‐N,N‐Bis‐2‐Ethene Sulfonic acid}‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2740,
        "SKUNo": "AS2615",
        "CASNO": "110‐ 89‐ 4",
        "ProductName": "PIPERIDINE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333200
    },
    {
        "Id": 2741,
        "SKUNo": "AS2615",
        "CASNO": "110‐ 89‐ 4",
        "ProductName": "PIPERIDINE FOR SYNTHESIS 98%‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29333200
    },
    {
        "Id": 2742,
        "SKUNo": "AS2615",
        "CASNO": "110‐ 89‐ 4",
        "ProductName": "PIPERIDINE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29333200
    },
    {
        "Id": 2743,
        "SKUNo": "AS2616",
        "CASNO": "110‐ 89‐ 4",
        "ProductName": "PIPERIDINE AR 99%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29333200
    },
    {
        "Id": 2744,
        "SKUNo": "AS2616",
        "CASNO": "110‐ 89‐ 4",
        "ProductName": "PIPERIDINE AR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333200
    },
    {
        "Id": 2745,
        "SKUNo": "AS2617",
        "CASNO": "18497‐ 13‐ 7",
        "ProductName": "PLATINUM CHLORIDE (Pt 40%)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2746,
        "SKUNo": "AS2618",
        "CASNO": "52785‐ 06‐ 5",
        "ProductName": "PLATINIUM OXIDE(Pt 80%)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2747,
        "SKUNo": "AS2619",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 200‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 39072090
    },
    {
        "Id": 2748,
        "SKUNo": "AS2619",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 200‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 39072090
    },
    {
        "Id": 2749,
        "SKUNo": "AS2620",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 300‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34042000
    },
    {
        "Id": 2750,
        "SKUNo": "AS2620",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 300‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 34042000
    },
    {
        "Id": 2751,
        "SKUNo": "AS2621",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 400‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 39072090
    },
    {
        "Id": 2752,
        "SKUNo": "AS2621",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 400‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 39072090
    },
    {
        "Id": 2753,
        "SKUNo": "AS2622",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 600‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 39072090
    },
    {
        "Id": 2754,
        "SKUNo": "AS2622",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 600‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 39072090
    },
    {
        "Id": 2755,
        "SKUNo": "AS2623",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 1500‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39072090
    },
    {
        "Id": 2756,
        "SKUNo": "AS2624",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 4000‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39072090
    },
    {
        "Id": 2757,
        "SKUNo": "AS2624",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 4000‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 39072090
    },
    {
        "Id": 2758,
        "SKUNo": "AS2625",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 6000‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39072090
    },
    {
        "Id": 2759,
        "SKUNo": "AS2625",
        "CASNO": "25322‐ 68‐ 3",
        "ProductName": "POLYETHYLENE GLYCOL 6000‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 39072090
    },
    {
        "Id": 2760,
        "SKUNo": "AS2626",
        "CASNO": "8017‐ 16‐ 1",
        "ProductName": "POLYPHOSPHORIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28092020
    },
    {
        "Id": 2761,
        "SKUNo": "AS2626",
        "CASNO": "8017‐ 16‐ 1",
        "ProductName": "POLYPHOSPHORIC ACID FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28092020
    },
    {
        "Id": 2762,
        "SKUNo": "AS2627",
        "CASNO": "9002‐ 89‐ 5",
        "ProductName": "POLYVINYL ALCOHOL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39053000
    },
    {
        "Id": 2763,
        "SKUNo": "AS2627",
        "CASNO": "9002‐ 89‐ 5",
        "ProductName": "POLYVINYL ALCOHOL‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 39053000
    },
    {
        "Id": 2764,
        "SKUNo": "AS2628",
        "CASNO": "9003‐ 39‐ 8",
        "ProductName": "POLYVINYL PYRROLIDONE (PVP)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 39059910
    },
    {
        "Id": 2765,
        "SKUNo": "AS2628",
        "CASNO": "9003‐ 39‐ 8",
        "ProductName": "POLYVINYL PYRROLIDONE  (PVP)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39059910
    },
    {
        "Id": 2766,
        "SKUNo": "AS2629",
        "CASNO": "9003‐39‐8",
        "ProductName": "POLYVINYL PYRROLIDONE K 90(PVP)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39059910
    },
    {
        "Id": 2767,
        "SKUNo": "AS2630",
        "CASNO": "6226‐ 79‐ 5",
        "ProductName": "PONCEAU S FOR ELECTROPHORESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2768,
        "SKUNo": "AS2630",
        "CASNO": "6226‐ 79‐ 5",
        "ProductName": "PONCEAU S FOR ELECTROPHORESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2769,
        "SKUNo": "AS2631",
        "CASNO": "1806‐  34‐ 4",
        "ProductName": "POPOP Scintillation Grade (1,4‐bis(5‐phenyloxaza‐2yl)benzene‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2770,
        "SKUNo": "AS2631",
        "CASNO": "1806‐  34‐ 4",
        "ProductName": "POPOP Scintillation Grade (1,4‐bis(5‐phenyloxaza‐2yl)benzene‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2771,
        "SKUNo": "AS2632",
        "CASNO": "1806‐  34‐ 4",
        "ProductName": "POPOP Scintillation Grade (1,4‐bis(5‐phenyloxaza‐2yl)benzene‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2772,
        "SKUNo": "AS2633",
        "CASNO": "68189‐ 43‐ 5",
        "ProductName": "POPSO BUFFER FOR BIOCHEMISTRY‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2773,
        "SKUNo": "AS2633",
        "CASNO": "68189‐ 43‐ 5",
        "ProductName": "POPSO BUFFER FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2774,
        "SKUNo": "AS2634",
        "CASNO": "127‐ 08‐ 2",
        "ProductName": "POTASSIUM ACETATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2775,
        "SKUNo": "AS2635",
        "CASNO": "127‐ 08‐ 2",
        "ProductName": "POTASSIUM ACETATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 2776,
        "SKUNo": "AS2636",
        "CASNO": "298‐ 14‐ 6",
        "ProductName": "POTASSIUM BICARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28364000
    },
    {
        "Id": 2777,
        "SKUNo": "AS2636",
        "CASNO": "298‐ 14‐ 6",
        "ProductName": "POTASSIUM BICARBONATE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28364000
    },
    {
        "Id": 2778,
        "SKUNo": "AS2637",
        "CASNO": "7758‐01‐2",
        "ProductName": "POTASSIUM BROMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299020
    },
    {
        "Id": 2779,
        "SKUNo": "AS2638",
        "CASNO": "7758‐01‐2",
        "ProductName": "POTASSIUM BROMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299020
    },
    {
        "Id": 2780,
        "SKUNo": "AS2639",
        "CASNO": "7758‐02‐3",
        "ProductName": "POTASSIUM BROMIDE FOR IR SPECTROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28275120
    },
    {
        "Id": 2781,
        "SKUNo": "AS2640",
        "CASNO": "7758‐02‐3",
        "ProductName": "POTASSIUM BROMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275120
    },
    {
        "Id": 2782,
        "SKUNo": "AS2641",
        "CASNO": "7758‐02‐3",
        "ProductName": "POTASSIUM BROMIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275120
    },
    {
        "Id": 2783,
        "SKUNo": "AS2642",
        "CASNO": "584‐ 08‐ 7",
        "ProductName": "POTASSIUM CARBONATE ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28364000
    },
    {
        "Id": 2784,
        "SKUNo": "AS2642",
        "CASNO": "584‐ 08‐ 7",
        "ProductName": "POTASSIUM CARBONATE ANHYDROUS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28364000
    },
    {
        "Id": 2785,
        "SKUNo": "AS2643",
        "CASNO": "584‐ 08‐ 7",
        "ProductName": "POTASSIUM CARBONATE ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28364000
    },
    {
        "Id": 2786,
        "SKUNo": "AS2644",
        "CASNO": "7447‐ 40‐ 7",
        "ProductName": "POTASSIUM CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31042000
    },
    {
        "Id": 2787,
        "SKUNo": "AS2644",
        "CASNO": "7447‐ 40‐ 7",
        "ProductName": "POTASSIUM CHLORIDE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31042000
    },
    {
        "Id": 2788,
        "SKUNo": "AS2645",
        "CASNO": "7447‐40‐7",
        "ProductName": "POTASSIUM CHLORIDE‐AQUA GRADE ‐50KG",
        "PACKSIZE": "50KG",
        "HSNCODE": 31042000
    },
    {
        "Id": 2789,
        "SKUNo": "AS2646",
        "CASNO": "7447‐ 40‐ 7",
        "ProductName": "POTASSIUM CHLORIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31042000
    },
    {
        "Id": 2790,
        "SKUNo": "AS2646",
        "CASNO": "7447‐ 40‐ 7",
        "ProductName": "POTASSIUM CHLORIDE AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31042000
    },
    {
        "Id": 2791,
        "SKUNo": "AS2647",
        "CASNO": "16921‐30‐ 5",
        "ProductName": "POTASSIUM CHLOROPLATINATE ‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2792,
        "SKUNo": "AS2648",
        "CASNO": "7789‐ 00‐ 6",
        "ProductName": "POTASSIUM CHROMATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 2793,
        "SKUNo": "AS2649",
        "CASNO": "7789‐ 00‐ 6",
        "ProductName": "POTASSIUM CHROMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 2794,
        "SKUNo": "AS2650",
        "CASNO": "6100/05/06",
        "ProductName": "POTASSIUM CITRATE LR (Tripotassium citrate)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181510
    },
    {
        "Id": 2795,
        "SKUNo": "AS2651",
        "CASNO": "7778‐ 50‐ 9",
        "ProductName": "POTASSIUM DICHROMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 2796,
        "SKUNo": "AS2651",
        "CASNO": "7778‐ 50‐ 9",
        "ProductName": "POTASSIUM DICHROMATE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28415090
    },
    {
        "Id": 2797,
        "SKUNo": "AS2651",
        "CASNO": "7778‐ 50‐ 9",
        "ProductName": "POTASSIUM DICHROMATE LR‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 28415090
    },
    {
        "Id": 2798,
        "SKUNo": "AS2652",
        "CASNO": "7778‐ 50‐ 9",
        "ProductName": "POTASSIUM DICHROMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415090
    },
    {
        "Id": 2799,
        "SKUNo": "AS2653",
        "CASNO": "7778‐ 77‐ 0",
        "ProductName": "POTASSIUM DIHYDROGEN ORTHOPHOSPHATE ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352400
    },
    {
        "Id": 2800,
        "SKUNo": "AS2654",
        "CASNO": "7778‐ 77‐ 0",
        "ProductName": "POTASSIUM DIHYDROGEN ORTHOPHOSPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352400
    },
    {
        "Id": 2801,
        "SKUNo": "AS2655",
        "CASNO": "13746‐ 66‐ 2",
        "ProductName": "POTASSIUM FERRICYANIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28372030
    },
    {
        "Id": 2802,
        "SKUNo": "AS2655",
        "CASNO": "13746‐ 66‐ 2",
        "ProductName": "POTASSIUM FERRICYANIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372030
    },
    {
        "Id": 2803,
        "SKUNo": "AS2656",
        "CASNO": "13746‐ 66‐ 2",
        "ProductName": "POTASSIUM FERRICYANIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372030
    },
    {
        "Id": 2804,
        "SKUNo": "AS2657",
        "CASNO": "14459‐ 95‐ 1",
        "ProductName": "POTASSIUM FERROCYANIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372030
    },
    {
        "Id": 2805,
        "SKUNo": "AS2658",
        "CASNO": "14459‐ 95‐ 1",
        "ProductName": "POTASSIUM FERROCYANIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372030
    },
    {
        "Id": 2806,
        "SKUNo": "AS2659",
        "CASNO": "7789‐ 23‐ 3",
        "ProductName": "POTASSIUM FLUORIDE ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 2807,
        "SKUNo": "AS2660",
        "CASNO": "7789‐ 23‐ 3",
        "ProductName": "POTASSIUM FLUORIDE AR  ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 2808,
        "SKUNo": "AS2661",
        "CASNO": "590‐ 29‐ 4",
        "ProductName": "POTASSIUM FORMATE LR 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29151290
    },
    {
        "Id": 2809,
        "SKUNo": "AS2661",
        "CASNO": "590‐ 29‐ 4",
        "ProductName": "POTASSIUM FORMATE LR 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29151290
    },
    {
        "Id": 2810,
        "SKUNo": "AS2662",
        "CASNO": "590‐ 29‐ 4",
        "ProductName": "POTASSIUM FORMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29151290
    },
    {
        "Id": 2811,
        "SKUNo": "AS2663",
        "CASNO": "877‐ 24‐ 7",
        "ProductName": "POTASSIUM HYDROGEN PHTHALATE  LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2812,
        "SKUNo": "AS2664",
        "CASNO": "877‐ 24‐ 7",
        "ProductName": "POTASSIUM HYDROGEN PHTHALATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29173990
    },
    {
        "Id": 2813,
        "SKUNo": "AS2665",
        "CASNO": "7646‐ 93‐ 7",
        "ProductName": "POTASSIUM HYDROGEN SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2814,
        "SKUNo": "AS2666",
        "CASNO": "7646‐ 93‐ 7",
        "ProductName": "POTASSIUM HYDROGEN SULPHATE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2815,
        "SKUNo": "AS2667",
        "CASNO": "868‐ 14‐ 4",
        "ProductName": "POTASSIUM HYDROGEN (+) TARTRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181310
    },
    {
        "Id": 2816,
        "SKUNo": "AS2668",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE FLAKES LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28152000
    },
    {
        "Id": 2817,
        "SKUNo": "AS2668",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE FLAKES LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28152000
    },
    {
        "Id": 2818,
        "SKUNo": "AS2669",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE POWDER LR 85%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28152000
    },
    {
        "Id": 2819,
        "SKUNo": "AS2669",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE POWDER LR 85%‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28152000
    },
    {
        "Id": 2820,
        "SKUNo": "AS2670",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE PELLETS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28152000
    },
    {
        "Id": 2821,
        "SKUNo": "AS2670",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE PELLETS LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28152000
    },
    {
        "Id": 2822,
        "SKUNo": "AS2671",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE PELLETS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28152000
    },
    {
        "Id": 2823,
        "SKUNo": "AS2671",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE PELLETS AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28152000
    },
    {
        "Id": 2824,
        "SKUNo": "AS2672",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE 40% W/W SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 2825,
        "SKUNo": "AS2672",
        "CASNO": "1310‐ 58‐ 3",
        "ProductName": "POTASSIUM HYDROXIDE 40% W/W SOLUTION‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 2826,
        "SKUNo": "AS2673",
        "CASNO": "7758/05/06",
        "ProductName": "POTASSIUM IODATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2827,
        "SKUNo": "AS2673",
        "CASNO": "7758/05/06",
        "ProductName": "POTASSIUM IODATE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2828,
        "SKUNo": "AS2674",
        "CASNO": "7758/05/06",
        "ProductName": "POTASSIUM IODATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2829,
        "SKUNo": "AS2674",
        "CASNO": "7758/05/06",
        "ProductName": "POTASSIUM IODATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2830,
        "SKUNo": "AS2675",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE (CONFIRMING TO IP)‐25 GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2831,
        "SKUNo": "AS2675",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE (CONFIRMING TO IP)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2832,
        "SKUNo": "AS2675",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE (CONFIRMING TO IP)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2833,
        "SKUNo": "AS2675",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE (CONFIRMING TO IP)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2834,
        "SKUNo": "AS2675",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE (CONFIRMING TO IP)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28276010
    },
    {
        "Id": 2835,
        "SKUNo": "AS2676",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2836,
        "SKUNo": "AS2676",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2837,
        "SKUNo": "AS2676",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2838,
        "SKUNo": "AS2676",
        "CASNO": "7681‐ 11‐ 0",
        "ProductName": "POTASSIUM IODIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28276010
    },
    {
        "Id": 2839,
        "SKUNo": "AS2677",
        "CASNO": "16731‐ 55‐ 8",
        "ProductName": "POTASSIUM METABISULPHITE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28322010
    },
    {
        "Id": 2840,
        "SKUNo": "AS2677",
        "CASNO": "16731‐ 55‐ 8",
        "ProductName": "POTASSIUM METABISULPHITE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28322010
    },
    {
        "Id": 2841,
        "SKUNo": "AS2678",
        "CASNO": "16731‐ 55‐ 8",
        "ProductName": "POTASSIUM METABISULPHITE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28322010
    },
    {
        "Id": 2842,
        "SKUNo": "AS2679",
        "CASNO": "7790‐ 21‐ 8",
        "ProductName": "POTASSIUM METAPERIODATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2843,
        "SKUNo": "AS2679",
        "CASNO": "7790‐ 21‐ 8",
        "ProductName": "POTASSIUM METAPERIODATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2844,
        "SKUNo": "AS2680",
        "CASNO": "7790‐ 21‐ 8",
        "ProductName": "POTASSIUM METAPERIODATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2845,
        "SKUNo": "AS2680",
        "CASNO": "7790‐ 21‐ 8",
        "ProductName": "POTASSIUM METAPERIODATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 2846,
        "SKUNo": "AS2681",
        "CASNO": "13769‐43‐2",
        "ProductName": "POTASSIUM METAVANDATE LR 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2847,
        "SKUNo": "AS2681",
        "CASNO": "13769‐43‐2",
        "ProductName": "POTASSIUM METAVANDATE LR 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2848,
        "SKUNo": "AS2682",
        "CASNO": "7757‐ 79‐ 1",
        "ProductName": "POTASSIUM NITRATE PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342100
    },
    {
        "Id": 2849,
        "SKUNo": "AS2682",
        "CASNO": "7757‐ 79‐ 1",
        "ProductName": "POTASSIUM NITRATE PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28342100
    },
    {
        "Id": 2850,
        "SKUNo": "AS2683",
        "CASNO": "7757‐ 79‐ 1",
        "ProductName": "POTASSIUM NITRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342100
    },
    {
        "Id": 2851,
        "SKUNo": "AS2684",
        "CASNO": "7758‐ 09‐ 0",
        "ProductName": "POTASSIUM NITRITE PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342100
    },
    {
        "Id": 2852,
        "SKUNo": "AS2684",
        "CASNO": "6487‐ 48‐ 5",
        "ProductName": "POTASSIUM OXALATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 2853,
        "SKUNo": "AS2685",
        "CASNO": "6487‐ 48‐ 5",
        "ProductName": "POTASSIUM OXALATE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 2854,
        "SKUNo": "AS2686",
        "CASNO": "7722‐ 64‐ 7",
        "ProductName": "POTASSIUM PERMANGANATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28416100
    },
    {
        "Id": 2855,
        "SKUNo": "AS2686",
        "CASNO": "7722‐ 64‐ 7",
        "ProductName": "POTASSIUM PERMANGANATE ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28416100
    },
    {
        "Id": 2856,
        "SKUNo": "AS2687",
        "CASNO": "7722‐ 64‐ 7",
        "ProductName": "POTASSIUM PERMANGANATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28416100
    },
    {
        "Id": 2857,
        "SKUNo": "AS2688",
        "CASNO": "7727‐ 21‐ 1",
        "ProductName": "POTASSIUM PERSULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2858,
        "SKUNo": "AS2689",
        "CASNO": "7727‐ 21‐ 1",
        "ProductName": "POTASSIUM PERSULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 2859,
        "SKUNo": "AS2690",
        "CASNO": "7758‐11‐4",
        "ProductName": "POTASSIUM PHOSPHATE DIBASIC ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352400
    },
    {
        "Id": 2860,
        "SKUNo": "AS2691",
        "CASNO": "7758‐11‐4",
        "ProductName": "POTASSIUM PHOSPHATE DIBASIC ANHYDROUS AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352400
    },
    {
        "Id": 2861,
        "SKUNo": "AS2692",
        "CASNO": "12208‐ 13‐ 8",
        "ProductName": "POTASSIUM PYROANTIMONATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2862,
        "SKUNo": "AS2692",
        "CASNO": "12208‐ 13‐ 8",
        "ProductName": "POTASSIUM PYROANTIMONATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2863,
        "SKUNo": "AS2693",
        "CASNO": "12208‐ 13‐ 8",
        "ProductName": "POTASSIUM  PYROANTIMONATE  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2864,
        "SKUNo": "AS2693",
        "CASNO": "12208‐ 13‐ 8",
        "ProductName": "POTASSIUM  PYROANTIMONATE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 2865,
        "SKUNo": "AS2694",
        "CASNO": "7320‐34‐5",
        "ProductName": "TETRA‐POTASSIUM PYROPHOSPHATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 2866,
        "SKUNo": "AS2695",
        "CASNO": "16871‐ 90‐ 2",
        "ProductName": "POTASSIUM SILICOFLUORIDE 98%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28262020
    },
    {
        "Id": 2867,
        "SKUNo": "AS2696",
        "CASNO": "6381‐ 59‐ 5",
        "ProductName": "POTASSIUM SODIUM (+) TARTRATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 2868,
        "SKUNo": "AS2696",
        "CASNO": "6381‐ 59‐ 5",
        "ProductName": "POTASSIUM SODIUM (+) TARTRATE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181390
    },
    {
        "Id": 2869,
        "SKUNo": "AS2697",
        "CASNO": "6381‐ 59‐ 5",
        "ProductName": "POTASSIUM SODIUM (+) TARTRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 2870,
        "SKUNo": "AS2698",
        "CASNO": "24634‐ 61‐ 5",
        "ProductName": "POTASSIUM SORBATE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29161990
    },
    {
        "Id": 2871,
        "SKUNo": "AS2698",
        "CASNO": "24634‐ 61‐ 5",
        "ProductName": "POTASSIUM SORBATE‐10KG",
        "PACKSIZE": "10KG",
        "HSNCODE": 29161990
    },
    {
        "Id": 2872,
        "SKUNo": "AS2699",
        "CASNO": "7778‐ 80‐ 5",
        "ProductName": "POTASSIUM SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31043000
    },
    {
        "Id": 2873,
        "SKUNo": "AS2700",
        "CASNO": "7778‐ 80‐ 5",
        "ProductName": "POTASSIUM SULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31043000
    },
    {
        "Id": 2874,
        "SKUNo": "AS2701",
        "CASNO": "123333‐ 66‐ 4",
        "ProductName": "POTASSIUM TELLURITE FOR MICROBIOLOGY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2875,
        "SKUNo": "AS2701",
        "CASNO": "123333‐ 66‐ 4",
        "ProductName": "POTASSIUM TELLURITE FOR MICROBIOLOGY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2876,
        "SKUNo": "AS2702",
        "CASNO": "333‐ 20‐ 0",
        "ProductName": "POTASSIUM THIOCYANATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2877,
        "SKUNo": "AS2703",
        "CASNO": "333‐ 20‐ 0",
        "ProductName": "POTASSIUM THIOCYANATE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 2878,
        "SKUNo": "AS2704",
        "CASNO": "92‐ 71‐ 7",
        "ProductName": "PPO SCINTILLATION GRADE 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2879,
        "SKUNo": "AS2704",
        "CASNO": "92‐ 71‐ 7",
        "ProductName": "PPO SCINTILLATION GRADE 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2880,
        "SKUNo": "AS2704",
        "CASNO": "92‐ 71‐ 7",
        "ProductName": "PPO SCINTILLATION GRADE 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2881,
        "SKUNo": "AS2705",
        "CASNO": "75‐75‐2",
        "ProductName": "D‐PROLINE ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 2882,
        "SKUNo": "AS2705",
        "CASNO": "75‐75‐2",
        "ProductName": "D‐PROLINE ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 2883,
        "SKUNo": "AS2706",
        "CASNO": "147‐ 85‐ 3",
        "ProductName": "L‐PROLINE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2884,
        "SKUNo": "AS2706",
        "CASNO": "147‐ 85‐ 3",
        "ProductName": "L‐PROLINE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2885,
        "SKUNo": "AS2706",
        "CASNO": "147‐ 85‐ 3",
        "ProductName": "L‐PROLINE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 2886,
        "SKUNo": "AS2707",
        "CASNO": "79‐ 09‐ 4",
        "ProductName": "PROPIONIC ACID LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29155000
    },
    {
        "Id": 2887,
        "SKUNo": "AS2707",
        "CASNO": "79‐ 09‐ 4",
        "ProductName": "PROPIONIC ACID LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29155000
    },
    {
        "Id": 2888,
        "SKUNo": "AS2708",
        "CASNO": "71‐ 23‐ 8",
        "ProductName": "n‐PROPYL ALCOHOL(Propan‐1‐ol) LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051210
    },
    {
        "Id": 2889,
        "SKUNo": "AS2708",
        "CASNO": "71‐ 23‐ 8",
        "ProductName": "n‐PROPYL ALCOHOL(Propan‐1‐ol) LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051210
    },
    {
        "Id": 2890,
        "SKUNo": "AS2709",
        "CASNO": "71‐ 23‐ 8",
        "ProductName": "n‐PROPYL ALCOHOL(Propan‐1‐ol) AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051210
    },
    {
        "Id": 2891,
        "SKUNo": "AS2709",
        "CASNO": "71‐ 23‐ 8",
        "ProductName": "n‐PROPYL ALCOHOL(Propan‐1‐ol) AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051210
    },
    {
        "Id": 2892,
        "SKUNo": "AS2710",
        "CASNO": "109‐60‐4",
        "ProductName": "N‐PROPYL ACETATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 2893,
        "SKUNo": "AS2710",
        "CASNO": "109‐60‐4",
        "ProductName": "N‐PROPYL ACETATE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29153990
    },
    {
        "Id": 2894,
        "SKUNo": "AS2711",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL LR (IPA)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051220
    },
    {
        "Id": 2895,
        "SKUNo": "AS2711",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL LR (IPA)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2896,
        "SKUNo": "AS2712",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL (DISINFECTANT) (IPA 70%)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051220
    },
    {
        "Id": 2897,
        "SKUNo": "AS2712",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL (DISINFECTANT) (IPA 70%)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2898,
        "SKUNo": "AS2712",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL (DISINFECTANT) (IPA 70%)‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2899,
        "SKUNo": "AS2713",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL AR (IPA)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051220
    },
    {
        "Id": 2900,
        "SKUNo": "AS2713",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL AR (IPA)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2901,
        "SKUNo": "AS2714",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL 99.5% ELECTRONIC GRADE‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051220
    },
    {
        "Id": 2902,
        "SKUNo": "AS2714",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL 99.5% ELECTRONIC GRADE‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2903,
        "SKUNo": "AS2715",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL HPLC SPECTROSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2904,
        "SKUNo": "AS2715",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL HPLC SPECTROSCOPY‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29051220
    },
    {
        "Id": 2905,
        "SKUNo": "AS2716",
        "CASNO": "67‐ 63‐ 0",
        "ProductName": "iso‐PROPYL ALCOHOL SPECIALLY DRIED/AR 99.7%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29051220
    },
    {
        "Id": 2906,
        "SKUNo": "AS2717",
        "CASNO": "108‐32‐7",
        "ProductName": "n‐PROPYLAMINE LR ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 2907,
        "SKUNo": "AS2717",
        "CASNO": "108‐32‐7",
        "ProductName": "n‐PROPYLAMINE LR ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 2908,
        "SKUNo": "AS2718",
        "CASNO": "108‐32‐7",
        "ProductName": "PROPYLENE CARBONATE 99% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29209099
    },
    {
        "Id": 2909,
        "SKUNo": "AS2718",
        "CASNO": "108‐32‐7",
        "ProductName": "PROPYLENE CARBONATE 99% FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29209099
    },
    {
        "Id": 2910,
        "SKUNo": "AS2719",
        "CASNO": "57‐ 55‐ 6",
        "ProductName": "PROPYLENE GLYCOL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29053200
    },
    {
        "Id": 2911,
        "SKUNo": "AS2719",
        "CASNO": "57‐ 55‐ 6",
        "ProductName": "PROPYLENE GLYCOL LR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29053200
    },
    {
        "Id": 2912,
        "SKUNo": "AS2720",
        "CASNO": "57‐ 55‐ 6",
        "ProductName": "PROPYLENE GLYCOL AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29053200
    },
    {
        "Id": 2913,
        "SKUNo": "AS2720",
        "CASNO": "57‐ 55‐ 6",
        "ProductName": "PROPYLENE GLYCOL AR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29053200
    },
    {
        "Id": 2914,
        "SKUNo": "AS2721",
        "CASNO": "107‐ 98‐ 2",
        "ProductName": "PROPYLENE GLYCOL MONOMETHYL ETHER LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094900
    },
    {
        "Id": 2915,
        "SKUNo": "AS2721",
        "CASNO": "107‐ 98‐ 2",
        "ProductName": "PROPYLENE GLYCOL MONOMETHYL ETHER LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094900
    },
    {
        "Id": 2916,
        "SKUNo": "AS2722",
        "CASNO": "121‐ 79‐ 9",
        "ProductName": "PROPYL GALLATE (Anti‐Oxidant)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29182930
    },
    {
        "Id": 2917,
        "SKUNo": "AS2722",
        "CASNO": "121‐ 79‐ 9",
        "ProductName": "PROPYL GALLATE (Anti‐Oxidant)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 2918,
        "SKUNo": "AS2723",
        "CASNO": "94‐ 13‐ 3",
        "ProductName": "PROPYL‐4‐HYDROXYBENZOATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 2919,
        "SKUNo": "AS2723",
        "CASNO": "94‐ 13‐ 3",
        "ProductName": "PROPYL‐4‐HYDROXYBENZOATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29182990
    },
    {
        "Id": 2920,
        "SKUNo": "AS2724",
        "CASNO": "35285‐ 69‐ 9",
        "ProductName": "PROPYL‐4‐HYDROXYBENZOATE SODIUM SALT PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182990
    },
    {
        "Id": 2921,
        "SKUNo": "AS2724",
        "CASNO": "35285‐ 69‐ 9",
        "ProductName": "PROPYL‐4‐HYDROXYBENZOATE SODIUM SALT PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29153990
    },
    {
        "Id": 2922,
        "SKUNo": "AS2725",
        "CASNO": "110‐ 27‐ 0",
        "ProductName": "iso‐PROPYL MYRISTATE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29153990
    },
    {
        "Id": 2923,
        "SKUNo": "AS2725",
        "CASNO": "110‐ 27‐ 0",
        "ProductName": "iso‐PROPYL MYRISTATE LR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 25131900
    },
    {
        "Id": 2924,
        "SKUNo": "AS2726",
        "CASNO": "1332‐ 09‐ 8",
        "ProductName": "PUMICE FINE POWDER 250‐300 MESH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29333100
    },
    {
        "Id": 2925,
        "SKUNo": "AS2727",
        "CASNO": "110‐ 86‐ 1",
        "ProductName": "PYRIDINE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333100
    },
    {
        "Id": 2926,
        "SKUNo": "AS2727",
        "CASNO": "110‐ 86‐ 1",
        "ProductName": "PYRIDINE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29333100
    },
    {
        "Id": 2927,
        "SKUNo": "AS2728",
        "CASNO": "110‐ 86‐ 1",
        "ProductName": "PYRIDINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333100
    },
    {
        "Id": 2928,
        "SKUNo": "AS2728",
        "CASNO": "110‐ 86‐ 1",
        "ProductName": "PYRIDINE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29362500
    },
    {
        "Id": 2929,
        "SKUNo": "AS2729",
        "CASNO": "58‐ 56‐ 0",
        "ProductName": "PYRIDOXINE HYDROCHLORIDE FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362500
    },
    {
        "Id": 2930,
        "SKUNo": "AS2729",
        "CASNO": "58‐ 56‐ 0",
        "ProductName": "PYRIDOXINE HYDROCHLORIDE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29362500
    },
    {
        "Id": 2931,
        "SKUNo": "AS2729",
        "CASNO": "58‐ 56‐ 0",
        "ProductName": "PYRIDOXINE HYDROCHLORIDE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2932,
        "SKUNo": "AS2730",
        "CASNO": "1046‐ 56‐ 6",
        "ProductName": "3‐(2‐PYRIDYL)‐5,6‐DIPHENYL 1,2,4‐TRIAZINE AR ‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2933,
        "SKUNo": "AS2730",
        "CASNO": "1046‐ 56‐ 6",
        "ProductName": "3‐(2‐PYRIDYL)‐5,6‐DIPHENYL 1,2,4‐TRIAZINE AR ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 2934,
        "SKUNo": "AS2731",
        "CASNO": "28048‐ 33‐ 1",
        "ProductName": "3‐(2‐PYRIDYL)‐5,6,DIPHENYL 1,2,4‐TRIAZINE ‐1GM    (4'4'DISULPHONIC ACID)",
        "PACKSIZE": "1GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2935,
        "SKUNo": "AS2732",
        "CASNO": "120‐ 80‐ 9",
        "ProductName": "PYROCATECHOL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2936,
        "SKUNo": "AS2733",
        "CASNO": "120‐ 80‐ 9",
        "ProductName": "PYROCATECHOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2937,
        "SKUNo": "AS2733",
        "CASNO": "120‐ 80‐ 9",
        "ProductName": "PYROCATECHOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2938,
        "SKUNo": "AS2734",
        "CASNO": "115‐41‐3",
        "ProductName": "PYROCATECHOL VIOLET AR (Catechol Violet)‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2939,
        "SKUNo": "AS2734",
        "CASNO": "115‐41‐3",
        "ProductName": "PYROCATECHOL VIOLET AR (Catechol Violet)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2940,
        "SKUNo": "AS2735",
        "CASNO": "87‐ 66‐ 1",
        "ProductName": "PYROGALLOL FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2941,
        "SKUNo": "AS2735",
        "CASNO": "87‐ 66‐ 1",
        "ProductName": "PYROGALLOL FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2942,
        "SKUNo": "AS2736",
        "CASNO": "87‐ 66‐ 1",
        "ProductName": "PYROGALLOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072990
    },
    {
        "Id": 2943,
        "SKUNo": "AS2736",
        "CASNO": "87‐ 66‐ 1",
        "ProductName": "PYROGALLOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2944,
        "SKUNo": "AS2737",
        "CASNO": "32638‐ 88‐ 3",
        "ProductName": "PYROGALLOL RED AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29337900
    },
    {
        "Id": 2945,
        "SKUNo": "AS2738",
        "CASNO": "123‐75‐1",
        "ProductName": "PYRROLIDINE 99% For Synthesis ‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29339990
    },
    {
        "Id": 2946,
        "SKUNo": "AS2738",
        "CASNO": "123‐75‐1",
        "ProductName": "PYRROLIDINE 99% For Synthesis ‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29339990
    },
    {
        "Id": 2947,
        "SKUNo": "AS2739",
        "CASNO": "616‐ 45‐ 5",
        "ProductName": "2‐PYROLIDONE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29337900
    },
    {
        "Id": 2948,
        "SKUNo": "AS2739",
        "CASNO": "616‐ 45‐ 5",
        "ProductName": "2‐PYROLIDONE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 32049000
    },
    {
        "Id": 2949,
        "SKUNo": "AS2740",
        "CASNO": "2150‐ 48‐ 3",
        "ProductName": "PYRONIN B     C.I. No. 45010‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2950,
        "SKUNo": "AS2740",
        "CASNO": "92‐ 32‐ 0",
        "ProductName": "PYRONIN G     C.I. No. 45005‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 25062900
    },
    {
        "Id": 2951,
        "SKUNo": "AS2741",
        "CASNO": "14808‐ 60‐ 7",
        "ProductName": "QUARTZ  AR (FINE GRANULAR)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 25062900
    },
    {
        "Id": 2952,
        "SKUNo": "AS2742",
        "CASNO": "14808‐ 60‐ 7",
        "ProductName": "QUARTZ  AR (FINE GRANULAR)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 3507909
    },
    {
        "Id": 2953,
        "SKUNo": "AS2743",
        "CASNO": "849061‐ 97‐ 8",
        "ProductName": "QUERCETIN HYDRATE 95% LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 3507909
    },
    {
        "Id": 2954,
        "SKUNo": "AS2743",
        "CASNO": "849061‐ 97‐ 8",
        "ProductName": "QUERCETIN HYDRATE 95% LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2955,
        "SKUNo": "AS2744",
        "CASNO": "91‐ 63‐ 4",
        "ProductName": "QUINALDINE FOR SYNTHESIS (2‐Methylqunoline)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29333990
    },
    {
        "Id": 2956,
        "SKUNo": "AS2744",
        "CASNO": "91‐ 63‐ 4",
        "ProductName": "QUINALDINE FOR SYNTHESIS (2‐Methylqunoline)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333990
    },
    {
        "Id": 2957,
        "SKUNo": "AS2745",
        "CASNO": "117‐ 92‐ 0",
        "ProductName": "QUINALDINE RED INDICATOR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 2958,
        "SKUNo": "AS2745",
        "CASNO": "117‐ 92‐ 0",
        "ProductName": "QUINALDINE RED INDICATOR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29420090
    },
    {
        "Id": 2959,
        "SKUNo": "AS2746",
        "CASNO": "106‐ 34‐ 3",
        "ProductName": "QUINHYDRONE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29420090
    },
    {
        "Id": 2960,
        "SKUNo": "AS2746",
        "CASNO": "106‐ 34‐ 3",
        "ProductName": "QUINHYDRONE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29392030
    },
    {
        "Id": 2961,
        "SKUNo": "AS2747",
        "CASNO": "6119‐ 20‐ 6",
        "ProductName": "QUNINE SULPHATE (DIHYDRATE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29392030
    },
    {
        "Id": 2962,
        "SKUNo": "AS2748",
        "CASNO": "6119‐ 20‐ 6",
        "ProductName": "QUININE SULPHATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29333919
    },
    {
        "Id": 2963,
        "SKUNo": "AS2749",
        "CASNO": "91‐22‐5",
        "ProductName": "QUINOLINE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29333919
    },
    {
        "Id": 2964,
        "SKUNo": "AS2749",
        "CASNO": "91‐22‐5",
        "ProductName": "QUINOLINE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29333990
    },
    {
        "Id": 2965,
        "SKUNo": "AS2750",
        "CASNO": "8004‐ 92‐ 0",
        "ProductName": "QUINOLINE YELLOW FOR MICROSCOPY C.I. NO 47000‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2966,
        "SKUNo": "AS2751",
        "CASNO": "17629‐ 30‐ 0",
        "ProductName": "D‐RAFFINOSE(PENTAHYDRATE) (Melitose)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2967,
        "SKUNo": "AS2751",
        "CASNO": "17629‐ 30‐ 0",
        "ProductName": "D‐RAFFINOSE(PENTAHYDRATE) (Melitose)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2968,
        "SKUNo": "AS2751",
        "CASNO": "17629‐ 30‐ 0",
        "ProductName": "D‐RAFFINOSE(PENTAHYDRATE) (Melitose)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2969,
        "SKUNo": "AS2752",
        "CASNO": "62758‐ 13‐ 8",
        "ProductName": "RESAZURIN AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2970,
        "SKUNo": "AS2752",
        "CASNO": "62758‐ 13‐ 8",
        "ProductName": "RESAZURIN AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29362990
    },
    {
        "Id": 2971,
        "SKUNo": "AS2753",
        "CASNO": "50‐ 55‐ 5",
        "ProductName": "RESERPINE PURISS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29362990
    },
    {
        "Id": 2972,
        "SKUNo": "AS2753",
        "CASNO": "50‐ 55‐ 5",
        "ProductName": "RESERPINE PURISS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29072100
    },
    {
        "Id": 2973,
        "SKUNo": "AS2754",
        "CASNO": "108‐ 46‐ 3",
        "ProductName": "RESORCINOL LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29072100
    },
    {
        "Id": 2974,
        "SKUNo": "AS2754",
        "CASNO": "108‐ 46‐ 3",
        "ProductName": "RESORCINOL LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29072100
    },
    {
        "Id": 2975,
        "SKUNo": "AS2755",
        "CASNO": "108‐ 46‐ 3",
        "ProductName": "RESORCINOL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29072100
    },
    {
        "Id": 2976,
        "SKUNo": "AS2755",
        "CASNO": "108‐ 46‐ 3",
        "ProductName": "RESORCINOL AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2977,
        "SKUNo": "AS2756",
        "CASNO": "10030‐ 85‐ 0",
        "ProductName": "L‐RHAMNOSE FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2978,
        "SKUNo": "AS2756",
        "CASNO": "10030‐ 85‐ 0",
        "ProductName": "L‐RHAMNOSE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041342
    },
    {
        "Id": 2979,
        "SKUNo": "AS2757",
        "CASNO": "81‐ 88‐ 9",
        "ProductName": "RHODAMINE B AR FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041342
    },
    {
        "Id": 2980,
        "SKUNo": "AS2757",
        "CASNO": "81‐ 88‐ 9",
        "ProductName": "RHODAMINE B AR FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041342
    },
    {
        "Id": 2981,
        "SKUNo": "AS2758",
        "CASNO": "989‐ 38‐ 8",
        "ProductName": "RHODAMINE 6G       C.I. No. 45160‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041342
    },
    {
        "Id": 2982,
        "SKUNo": "AS2758",
        "CASNO": "989‐ 38‐ 8",
        "ProductName": "RHODAMINE 6G C.I. No. 45160",
        "PACKSIZE": "100GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2983,
        "SKUNo": "AS2759",
        "CASNO": "13569‐ 65‐ 8",
        "ProductName": "RHODIUM TRICHLORIDE(‘Rh’ 40%) FOR SYNTHESIS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29362310
    },
    {
        "Id": 2984,
        "SKUNo": "AS2760",
        "CASNO": "83‐ 88‐ 5",
        "ProductName": "RIBOFLAVIN FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362310
    },
    {
        "Id": 2985,
        "SKUNo": "AS2760",
        "CASNO": "83‐ 88‐ 5",
        "ProductName": "RIBOFLAVIN FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2986,
        "SKUNo": "AS2761",
        "CASNO": "63231‐ 63‐ 0",
        "ProductName": "RIBONEUCLEIC ACID‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2987,
        "SKUNo": "AS2762",
        "CASNO": "73049‐ 77‐ 1",
        "ProductName": "RIBONEUCLEIC ACID (WHITE SPECIAL POWDER) AR ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 2988,
        "SKUNo": "AS2762",
        "CASNO": "73049‐ 77‐ 1",
        "ProductName": "RIBONEUCLEIC ACID (WHITE SPECIAL POWDER) AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2989,
        "SKUNo": "AS2763",
        "CASNO": "50‐ 69‐ 1",
        "ProductName": "D(+)RIBOSE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 2990,
        "SKUNo": "AS2763",
        "CASNO": "50‐ 69‐ 1",
        "ProductName": "D(+)RIBOSE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2991,
        "SKUNo": "AS2764",
        "CASNO": "603‐ 45‐ 2",
        "ProductName": "ROSE BENGAL AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 2992,
        "SKUNo": "AS2764",
        "CASNO": "603‐ 45‐ 2",
        "ProductName": "ROSE BENGAL AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129020
    },
    {
        "Id": 2993,
        "SKUNo": "AS2765",
        "CASNO": "632‐69‐9",
        "ProductName": "p‐ROSOLIC ACID FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129020
    },
    {
        "Id": 2994,
        "SKUNo": "AS2765",
        "CASNO": "603‐ 45‐ 2",
        "ProductName": "p‐ROSOLIC ACID FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 2995,
        "SKUNo": "AS2766",
        "CASNO": "569‐ 61‐ 9",
        "ProductName": "p‐ROSANILINE HYDROCHLORIDE  C.I. NO.42500  ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041929
    },
    {
        "Id": 2996,
        "SKUNo": "AS2766",
        "CASNO": "569‐ 61‐ 9",
        "ProductName": "p‐ROSANILINE HYDROCHLORIDE  C.I. NO.42500  ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2997,
        "SKUNo": "AS2767",
        "CASNO": "11103‐ 72‐ 3",
        "ProductName": "RUTHENIUM RED FOR MICROSCOPY‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2998,
        "SKUNo": "AS2767",
        "CASNO": "11103‐ 72‐ 3",
        "ProductName": "RUTHENIUM RED FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 2999,
        "SKUNo": "AS2768",
        "CASNO": "13815‐ 94‐ 6",
        "ProductName": "RUTHENIUM TRICHLORIDE PURISS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 28439019
    },
    {
        "Id": 3000,
        "SKUNo": "AS2768",
        "CASNO": "13815‐ 94‐ 6",
        "ProductName": "RUTHENIUM TRICHLORIDE PURISS‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29251100
    },
    {
        "Id": 3001,
        "SKUNo": "AS2769",
        "CASNO": "87‐07‐2",
        "ProductName": "SACCHARIN INSOLUBLE 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251100
    },
    {
        "Id": 3002,
        "SKUNo": "AS2770",
        "CASNO": "6155‐ 57‐ 3",
        "ProductName": "SACCHARIN SODIUM 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32041310
    },
    {
        "Id": 3003,
        "SKUNo": "AS2771",
        "CASNO": "477‐ 73‐ 6",
        "ProductName": "SAFRANINE FOR MICROSCOPY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041310
    },
    {
        "Id": 3004,
        "SKUNo": "AS2771",
        "CASNO": "477‐ 73‐ 6",
        "ProductName": "SAFRANINE FOR MICROSCOPY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041310
    },
    {
        "Id": 3005,
        "SKUNo": "AS2771",
        "CASNO": "477‐ 73‐ 6",
        "ProductName": "SAFRANINE FOR MICROSCOPY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 3006,
        "SKUNo": "AS2772",
        "CASNO": "477‐ 73‐ 6",
        "ProductName": "SAFRANINE SOLUTIONS (GRAM)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 0
    },
    {
        "Id": 3007,
        "SKUNo": "AS2773",
        "CASNO": "138‐52‐3",
        "ProductName": "SALICIN 99% For Microbiology ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 3008,
        "SKUNo": "AS2773",
        "CASNO": "138‐52‐3",
        "ProductName": "SALICIN 99% For Microbiology‐25GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 3009,
        "SKUNo": "AS2774",
        "CASNO": "69‐ 72‐ 7",
        "ProductName": "SALICYLIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182110
    },
    {
        "Id": 3010,
        "SKUNo": "AS2774",
        "CASNO": "69‐ 72‐ 7",
        "ProductName": "SALICYLIC ACID LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29182110
    },
    {
        "Id": 3011,
        "SKUNo": "AS2775",
        "CASNO": "69‐ 72‐ 7",
        "ProductName": "SALICYLIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3012,
        "SKUNo": "AS2776",
        "CASNO": "94‐67‐7",
        "ProductName": "SALICYLALDOXIME 98% AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3013,
        "SKUNo": "AS2776",
        "CASNO": "94‐67‐7",
        "ProductName": "SALICYLALDOXIME 98% AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29122990
    },
    {
        "Id": 3014,
        "SKUNo": "AS2777",
        "CASNO": "959‐36‐4",
        "ProductName": "SALICYLDEHYDE AZINE ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29242990
    },
    {
        "Id": 3015,
        "SKUNo": "AS2778",
        "CASNO": "65‐45‐2",
        "ProductName": "SALICYLAMIDE 99% LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 3016,
        "SKUNo": "AS2779",
        "CASNO": "12060‐ 58‐ 1",
        "ProductName": "SAMARIUM OXIDE AR 99.9%‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 3017,
        "SKUNo": "AS2779",
        "CASNO": "12060‐ 58‐ 1",
        "ProductName": "SAMARIUM OXIDE AR 99.9%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 3018,
        "SKUNo": "AS2780",
        "CASNO": "8047‐ 15‐ 2",
        "ProductName": "SAPONIN PURIFIED‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29389090
    },
    {
        "Id": 3019,
        "SKUNo": "AS2780",
        "CASNO": "8047‐ 15‐ 2",
        "ProductName": "SAPONIN PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3020,
        "SKUNo": "AS2781",
        "CASNO": "",
        "ProductName": "SCHIFF’S REAGENT‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 25059000
    },
    {
        "Id": 3021,
        "SKUNo": "AS2782",
        "CASNO": "7631‐86‐9",
        "ProductName": "SEASAND PURIFIED (PARTICLE SIZE 40‐150 MESH)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 25059000
    },
    {
        "Id": 3022,
        "SKUNo": "AS2782",
        "CASNO": "7631‐86‐9",
        "ProductName": "SEASAND AR (PARTICLE SIZE 40‐150 MESH)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29171300
    },
    {
        "Id": 3023,
        "SKUNo": "AS2783",
        "CASNO": "111‐ 20‐ 6",
        "ProductName": "SEBACIC ACID 98% for synthesis‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28049000
    },
    {
        "Id": 3024,
        "SKUNo": "AS2784",
        "CASNO": "7782‐ 49‐ 2",
        "ProductName": "SELENIUM POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28049000
    },
    {
        "Id": 3025,
        "SKUNo": "AS2784",
        "CASNO": "7782‐ 49‐ 2",
        "ProductName": "SELENIUM POWDER ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28049000
    },
    {
        "Id": 3026,
        "SKUNo": "AS2785",
        "CASNO": "7782‐ 49‐ 2",
        "ProductName": "SELENIUM POWDER BLACK AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28049000
    },
    {
        "Id": 3027,
        "SKUNo": "AS2785",
        "CASNO": "7782‐ 49‐ 2",
        "ProductName": "SELENIUM POWDER BLACK AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28049000
    },
    {
        "Id": 3028,
        "SKUNo": "AS2786",
        "CASNO": "7782‐ 49‐ 2",
        "ProductName": "SELENIUM METAL PELLETS (electronic GRADE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28112990
    },
    {
        "Id": 3029,
        "SKUNo": "AS2787",
        "CASNO": "7446/08/04",
        "ProductName": "SELENIUM DIOXIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28112990
    },
    {
        "Id": 3030,
        "SKUNo": "AS2787",
        "CASNO": "7446/08/04",
        "ProductName": "SELENIUM DIOXIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 3031,
        "SKUNo": "AS2788",
        "CASNO": "7783‐ 00‐ 8",
        "ProductName": "SELENOUS ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 3032,
        "SKUNo": "AS2788",
        "CASNO": "7783‐ 00‐ 8",
        "ProductName": "SELENOUS ACID‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 3033,
        "SKUNo": "AS2789",
        "CASNO": "96‐ 48‐ 0",
        "ProductName": "SELIWANOFF’S REAGENT  (for detection of fructose)‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29280090
    },
    {
        "Id": 3034,
        "SKUNo": "AS2790",
        "CASNO": "563‐ 41‐ 7",
        "ProductName": "SEMICARBAZIDE HYDROCHLORIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3035,
        "SKUNo": "AS2790",
        "CASNO": "563‐ 41‐ 7",
        "ProductName": "SEMICARBAZIDE HYDROCHLORIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3036,
        "SKUNo": "AS2791",
        "CASNO": "563‐ 41‐ 7",
        "ProductName": "SEMICARBAZIDE HYDROCHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3037,
        "SKUNo": "AS2791",
        "CASNO": "563‐ 41‐ 7",
        "ProductName": "SEMICARBAZIDE HYDROCHLORIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3038,
        "SKUNo": "AS2792",
        "CASNO": "56‐ 45‐ 1",
        "ProductName": "L‐SERINE FOR BIOCHEMISTRY ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3039,
        "SKUNo": "AS2792",
        "CASNO": "56‐ 45‐ 1",
        "ProductName": "L‐SERINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3040,
        "SKUNo": "AS2793",
        "CASNO": "302‐ 84‐ 1",
        "ProductName": "DL‐SERINE PURISS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3041,
        "SKUNo": "AS2793",
        "CASNO": "302‐ 84‐ 1",
        "ProductName": "DL‐SERINE PURISS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 13019099
    },
    {
        "Id": 3042,
        "SKUNo": "AS2794",
        "CASNO": "9000‐ 59‐ 3",
        "ProductName": "SHELLAC FLAKES Arsenic free‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3043,
        "SKUNo": "AS2795",
        "CASNO": "              ",
        "ProductName": "SHORR’S STAINING SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38249925
    },
    {
        "Id": 3044,
        "SKUNo": "AS2796",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL SELF INDICATING  5‐8 MESH (BLUE COARSE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3045,
        "SKUNo": "AS2796",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL SELF INDICATING  5‐8 MESH (BLUE COARSE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38249925
    },
    {
        "Id": 3046,
        "SKUNo": "AS2797",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL SELF INDICATING (BLUE) 6‐20 MESH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3047,
        "SKUNo": "AS2797",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL SELF INDICATING (BLUE) 6‐20 MESH‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38249925
    },
    {
        "Id": 3048,
        "SKUNo": "AS2798",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL 60‐120 MESH (FOR COLUMN CHROMOTOGRAPHY)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3049,
        "SKUNo": "AS2799",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL 100‐200 MESH (FOR COLUMN CHROMOTOGRAPHY)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3050,
        "SKUNo": "AS2800",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL 60‐200 MESH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3051,
        "SKUNo": "AS2801",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL 200‐400 MESH FOR COLUMN CHROMOTOGRAPHY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3052,
        "SKUNo": "AS2802",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL 400‐700 MESH‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3053,
        "SKUNo": "AS2803",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL G  FOR THIN LAYER CHROMOTOGRAPHY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3054,
        "SKUNo": "AS2803",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL G  FOR THIN LAYER CHROMOTOGRAPHY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3055,
        "SKUNo": "AS2804",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL GF 254 FOR TLC‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3056,
        "SKUNo": "AS2805",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL H FOR TLC‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3057,
        "SKUNo": "AS2806",
        "CASNO": "112926‐ 00‐ 8",
        "ProductName": "SILICA GEL HF 254 FOR TLC‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38249925
    },
    {
        "Id": 3058,
        "SKUNo": "AS2807",
        "CASNO": "7440‐ 21‐ 3",
        "ProductName": "SILICON (METAL) POWDER 200 Mesh 98.5%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28046900
    },
    {
        "Id": 3059,
        "SKUNo": "AS2807",
        "CASNO": "7440‐ 21‐ 3",
        "ProductName": "SILICON (METAL) POWDER 200 Mesh 98.5%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39100090
    },
    {
        "Id": 3060,
        "SKUNo": "AS2808",
        "CASNO": "              ",
        "ProductName": "SILICON ANTIFLOOMING AGENT 30%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 39100090
    },
    {
        "Id": 3061,
        "SKUNo": "AS2808",
        "CASNO": "          ",
        "ProductName": "SILICON ANTIFLOOMING AGENT 30%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 39100090
    },
    {
        "Id": 3062,
        "SKUNo": "AS2808",
        "CASNO": "",
        "ProductName": "SILICON ANTIFLOOMING AGENT 30%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28112200
    },
    {
        "Id": 3063,
        "SKUNo": "AS2809",
        "CASNO": "7631‐86‐9",
        "ProductName": "SILICON DIOXIDE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39100010
    },
    {
        "Id": 3064,
        "SKUNo": "AS2810",
        "CASNO": "",
        "ProductName": "SILICONE HIGH VACUUM GREASE (LAB)‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 39100010
    },
    {
        "Id": 3065,
        "SKUNo": "AS2810",
        "CASNO": "          ",
        "ProductName": "SILICONE HIGH VACUUM GREASE (LAB)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 39100020
    },
    {
        "Id": 3066,
        "SKUNo": "AS2811",
        "CASNO": "63148‐ 62‐ 9",
        "ProductName": "SILICONE OIL (LAB)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 39100020
    },
    {
        "Id": 3067,
        "SKUNo": "AS2811",
        "CASNO": "63148‐ 62‐ 9",
        "ProductName": "SILICONE OIL (LAB)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28111990
    },
    {
        "Id": 3068,
        "SKUNo": "AS2812",
        "CASNO": "12027‐ 43‐ 9",
        "ProductName": "SILICOTUNGSTIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 3069,
        "SKUNo": "AS2812",
        "CASNO": "12027‐ 43‐ 9",
        "ProductName": "SILICOTUNGSTIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 71061000
    },
    {
        "Id": 3070,
        "SKUNo": "AS2813",
        "CASNO": "7440‐ 22‐ 4",
        "ProductName": "SILVER (METAL) POWDER 99.9%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 71061000
    },
    {
        "Id": 3071,
        "SKUNo": "AS2813",
        "CASNO": "7440‐ 22‐ 4",
        "ProductName": "SILVER (METAL) POWDER 99.9%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 71061000
    },
    {
        "Id": 3072,
        "SKUNo": "AS2814",
        "CASNO": "7440‐22 ‐4",
        "ProductName": "SILVER (METAL) WIRE 99.9% (0.5MM)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3073,
        "SKUNo": "AS2815",
        "CASNO": "563‐ 63‐ 3",
        "ProductName": "SILVER ACETATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3074,
        "SKUNo": "AS2815",
        "CASNO": "563‐ 63‐ 3",
        "ProductName": "SILVER ACETATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3075,
        "SKUNo": "AS2816",
        "CASNO": "7785‐ 23‐ 1",
        "ProductName": "SILVER BROMIDE (LAB) 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3076,
        "SKUNo": "AS2817",
        "CASNO": "534‐ 16‐ 7",
        "ProductName": "SILVER CARBONATE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3077,
        "SKUNo": "AS2818",
        "CASNO": "7783‐ 90‐ 6",
        "ProductName": "SILVER CHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3078,
        "SKUNo": "AS2818",
        "CASNO": "7783‐ 90‐ 6",
        "ProductName": "SILVER CHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3079,
        "SKUNo": "AS2819",
        "CASNO": "1470‐ 61‐ 1",
        "ProductName": "SILVER DIETHYL DITHIOCARBAMATE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3080,
        "SKUNo": "AS2819",
        "CASNO": "1470‐ 61‐ 1",
        "ProductName": "SILVER DIETHYL DITHIOCARBAMATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3081,
        "SKUNo": "AS2820",
        "CASNO": "7783‐ 96‐ 2",
        "ProductName": "SILVER IODIDE (lAB) 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3082,
        "SKUNo": "AS2821",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE LR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3083,
        "SKUNo": "AS2821",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3084,
        "SKUNo": "AS2821",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3085,
        "SKUNo": "AS2822",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3086,
        "SKUNo": "AS2822",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432100
    },
    {
        "Id": 3087,
        "SKUNo": "AS2822",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3088,
        "SKUNo": "AS2823",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE N/10 VOLUMETRIC SOLUTION (0.10)N‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3089,
        "SKUNo": "AS2824",
        "CASNO": "7761‐88 ‐8",
        "ProductName": "SILVER NITRATE N/50 SOLUTION (0.02)N‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28432900
    },
    {
        "Id": 3090,
        "SKUNo": "AS2825",
        "CASNO": "20667‐ 12‐ 3",
        "ProductName": "SILVER OXIDE LR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3091,
        "SKUNo": "AS2826",
        "CASNO": "20667‐ 12‐ 3",
        "ProductName": "SILVER OXIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3092,
        "SKUNo": "AS2827",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE LR ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3093,
        "SKUNo": "AS2827",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE LR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3094,
        "SKUNo": "AS2827",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE LR ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3095,
        "SKUNo": "AS2728",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3096,
        "SKUNo": "AS2728",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28432900
    },
    {
        "Id": 3097,
        "SKUNo": "AS2728",
        "CASNO": "10294‐ 26‐ 5",
        "ProductName": "SILVER SULPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 34011920
    },
    {
        "Id": 3098,
        "SKUNo": "AS2729",
        "CASNO": "822‐16‐2",
        "ProductName": "SOAP POWDER (WHITE)",
        "PACKSIZE": "1KG",
        "HSNCODE": 34011920
    },
    {
        "Id": 3099,
        "SKUNo": "AS2729",
        "CASNO": "822‐16‐2",
        "ProductName": "SOAP POWDER (WHITE)",
        "PACKSIZE": "10KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 3100,
        "SKUNo": "AS2730",
        "CASNO": "8006‐28‐8",
        "ProductName": "SODA LIME WITH INDICATOR AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 3101,
        "SKUNo": "AS2730",
        "CASNO": "8006‐28‐8",
        "ProductName": "SODA LIME WITH INDICATOR AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28530099
    },
    {
        "Id": 3102,
        "SKUNo": "AS2731",
        "CASNO": "7782‐ 92‐ 5",
        "ProductName": "SODAMIDE ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28530099
    },
    {
        "Id": 3103,
        "SKUNo": "AS2731",
        "CASNO": "7782‐ 92‐ 5",
        "ProductName": "SODAMIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28051100
    },
    {
        "Id": 3104,
        "SKUNo": "AS2732",
        "CASNO": "7440‐ 23‐ 5",
        "ProductName": "SODIUM (METAL) COATED WITH LIQUID PARAFFIN‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28051100
    },
    {
        "Id": 3105,
        "SKUNo": "AS2732",
        "CASNO": "7440‐ 23‐ 5",
        "ProductName": "SODIUM (METAL) COATED WITH LIQUID PARAFFIN‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28051100
    },
    {
        "Id": 3106,
        "SKUNo": "AS2732",
        "CASNO": "7440‐ 23‐ 5",
        "ProductName": "SODIUM (METAL) COATED WITH LIQUID PARAFFIN‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28051100
    },
    {
        "Id": 3107,
        "SKUNo": "AS2733",
        "CASNO": "7440‐23‐5",
        "ProductName": "SODIUM (METAL) AR (Coated with liquid paraffin)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28051100
    },
    {
        "Id": 3108,
        "SKUNo": "AS2733",
        "CASNO": "7440‐ 23‐ 5",
        "ProductName": "SODIUM (METAL) AR (Coated with liquid paraffin)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3109,
        "SKUNo": "AS2734",
        "CASNO": "127‐ 09‐ 3",
        "ProductName": "SODIUM ACETATE ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3110,
        "SKUNo": "AS2734",
        "CASNO": "127‐ 09‐ 3",
        "ProductName": "SODIUM ACETATE ANHYDROUS LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 3111,
        "SKUNo": "AS2734",
        "CASNO": "127‐ 09‐ 3",
        "ProductName": "SODIUM ACETATE ANHYDROUS AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3112,
        "SKUNo": "AS2734",
        "CASNO": "127‐ 09‐ 3",
        "ProductName": "SODIUM ACETATE ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3113,
        "SKUNo": "AS2735",
        "CASNO": "6131‐ 90‐ 4",
        "ProductName": "SODIUM ACETATE TRIHYDRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3114,
        "SKUNo": "AS2735",
        "CASNO": "6131‐ 90‐ 4",
        "ProductName": "SODIUM ACETATE TRIHYDRATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29152990
    },
    {
        "Id": 3115,
        "SKUNo": "AS2736",
        "CASNO": "6131‐ 90‐ 4",
        "ProductName": "SODIUM ACETATE TRIHYDRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39131010
    },
    {
        "Id": 3116,
        "SKUNo": "AS2737",
        "CASNO": "9005‐ 38‐ 3",
        "ProductName": "SODIUM ALGINATE (Confirming to NF)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39131010
    },
    {
        "Id": 3117,
        "SKUNo": "AS2737",
        "CASNO": "9005‐ 38‐ 3",
        "ProductName": "SODIUM ALGINATE (Confirming to NF)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 39131010
    },
    {
        "Id": 3118,
        "SKUNo": "AS2738",
        "CASNO": "9005‐ 38‐ 3",
        "ProductName": "SODIUM ALGINATE (LOW VISCOSITY)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 39131010
    },
    {
        "Id": 3119,
        "SKUNo": "AS2738",
        "CASNO": "9005‐ 38‐ 3",
        "ProductName": "SODIUM ALGINATE (LOW VISCOSITY)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28429010
    },
    {
        "Id": 3120,
        "SKUNo": "AS2739",
        "CASNO": "10048‐ 95‐ 0",
        "ProductName": "SODIUM ARSENATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28429010
    },
    {
        "Id": 3121,
        "SKUNo": "AS2739",
        "CASNO": "10048‐ 95‐ 0",
        "ProductName": "SODIUM ARSENATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28429010
    },
    {
        "Id": 3122,
        "SKUNo": "AS2739",
        "CASNO": "10048‐ 95‐ 0",
        "ProductName": "SODIUM ARSENATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429010
    },
    {
        "Id": 3123,
        "SKUNo": "AS2740",
        "CASNO": "7784‐ 46‐ 5",
        "ProductName": "SODIUM ARSENITE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28429010
    },
    {
        "Id": 3124,
        "SKUNo": "AS2740",
        "CASNO": "7784‐ 46‐ 5",
        "ProductName": "SODIUM ARSENITE AR ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28429010
    },
    {
        "Id": 3125,
        "SKUNo": "AS2740",
        "CASNO": "7784‐ 46‐ 5",
        "ProductName": "SODIUM ARSENITE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3126,
        "SKUNo": "AS2741",
        "CASNO": "7784‐ 46‐ 5",
        "ProductName": "SODIUM ARSENITE SOLUTION AR 0.1N (N/10)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29362700
    },
    {
        "Id": 3127,
        "SKUNo": "AS2742",
        "CASNO": "134‐ 03‐ 2",
        "ProductName": "SODIUM L (+) ASCORBATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362700
    },
    {
        "Id": 3128,
        "SKUNo": "AS2742",
        "CASNO": "134‐ 03‐ 2",
        "ProductName": "SODIUM L (+) ASCORBATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28500030
    },
    {
        "Id": 3129,
        "SKUNo": "AS2743",
        "CASNO": "26628‐ 22‐ 8",
        "ProductName": "SODIUM AZIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28500030
    },
    {
        "Id": 3130,
        "SKUNo": "AS2743",
        "CASNO": "26628‐ 22‐ 8",
        "ProductName": "SODIUM AZIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28500030
    },
    {
        "Id": 3131,
        "SKUNo": "AS2744",
        "CASNO": "26628‐ 22‐ 8",
        "ProductName": "SODIUM AZIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28500030
    },
    {
        "Id": 3132,
        "SKUNo": "AS2744",
        "CASNO": "26628‐ 22‐ 8",
        "ProductName": "SODIUM AZIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163140
    },
    {
        "Id": 3133,
        "SKUNo": "AS2745",
        "CASNO": "532‐ 32‐ 1",
        "ProductName": "SODIUM BENZOATE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163140
    },
    {
        "Id": 3134,
        "SKUNo": "AS2745",
        "CASNO": "532‐ 32‐ 1",
        "ProductName": "SODIUM BENZOATE ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29163140
    },
    {
        "Id": 3135,
        "SKUNo": "AS2746",
        "CASNO": "532‐ 32‐ 1",
        "ProductName": "SODIUM BENZOATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3136,
        "SKUNo": "AS2747",
        "CASNO": "7782‐ 82‐ 3",
        "ProductName": "SODIUM BISELENITE  {Sodium Hydrogen Selenite}‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3137,
        "SKUNo": "AS2747",
        "CASNO": "7782‐ 82‐ 3",
        "ProductName": "SODIUM BISELENITE  {Sodium Hydrogen Selenite}‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3138,
        "SKUNo": "AS2748",
        "CASNO": "12232‐ 99‐ 4",
        "ProductName": "SODIUM BISMUTHATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3139,
        "SKUNo": "AS2749",
        "CASNO": "12232‐ 99‐ 4",
        "ProductName": "SODIUM BISMUTHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28331910
    },
    {
        "Id": 3140,
        "SKUNo": "AS2750",
        "CASNO": "10034‐ 88‐ 5",
        "ProductName": "SODIUM BISULPHATE (MONOHYDRATE) 99% LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331910
    },
    {
        "Id": 3141,
        "SKUNo": "AS2750",
        "CASNO": "10034‐ 88‐ 5",
        "ProductName": "SODIUM BISULPHATE (MONOHYDRATE) 99% AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3142,
        "SKUNo": "AS2751",
        "CASNO": "7631‐ 90‐ 5",
        "ProductName": "SODIUM BISULPHITE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3143,
        "SKUNo": "AS2751",
        "CASNO": "7631‐ 90‐ 5",
        "ProductName": "SODIUM BISULPHITE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28321010
    },
    {
        "Id": 3144,
        "SKUNo": "AS2752",
        "CASNO": "7631‐ 90‐ 5",
        "ProductName": "SODIUM BISULPHITE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3145,
        "SKUNo": "AS2752",
        "CASNO": "7631‐ 90‐ 5",
        "ProductName": "SODIUM BISULPHITE AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28500010
    },
    {
        "Id": 3146,
        "SKUNo": "AS2753",
        "CASNO": "16940‐ 66‐ 2",
        "ProductName": "SODIUM BOROHYDRIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28500010
    },
    {
        "Id": 3147,
        "SKUNo": "AS2753",
        "CASNO": "16940‐ 66‐ 2",
        "ProductName": "SODIUM BOROHYDRIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275110
    },
    {
        "Id": 3148,
        "SKUNo": "AS2754",
        "CASNO": "7789‐ 38‐ 0",
        "ProductName": "SODIUM BROMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275110
    },
    {
        "Id": 3149,
        "SKUNo": "AS2754",
        "CASNO": "7647‐ 15‐ 6",
        "ProductName": "SODIUM BROMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28275110
    },
    {
        "Id": 3150,
        "SKUNo": "AS2755",
        "CASNO": "7647‐ 15‐ 6",
        "ProductName": "SODIUM BROMIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29051990
    },
    {
        "Id": 3151,
        "SKUNo": "AS2756",
        "CASNO": "865‐ 48‐ 5",
        "ProductName": "SODIUM tert‐BUTOXIDE 98% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29051990
    },
    {
        "Id": 3152,
        "SKUNo": "AS2756",
        "CASNO": "865‐ 48‐ 5",
        "ProductName": "SODIUM tert‐BUTOXIDE 98% ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28362010
    },
    {
        "Id": 3153,
        "SKUNo": "AS2757",
        "CASNO": "497‐ 19‐ 8",
        "ProductName": "SODIUM CARBONATE ANHYDROUS LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28362010
    },
    {
        "Id": 3154,
        "SKUNo": "AS2757",
        "CASNO": "497‐ 19‐ 8",
        "ProductName": "SODIUM CARBONATE ANHYDROUS LR ‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28362010
    },
    {
        "Id": 3155,
        "SKUNo": "AS2758",
        "CASNO": "497‐ 19‐ 8",
        "ProductName": "SODIUM CARBONATE ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28362010
    },
    {
        "Id": 3156,
        "SKUNo": "AS2758",
        "CASNO": "497‐ 19‐ 8",
        "ProductName": "SODIUM CARBONATE ANHYDROUS AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 25010010
    },
    {
        "Id": 3157,
        "SKUNo": "AS2759",
        "CASNO": "7647‐ 14‐ 5",
        "ProductName": "SODIUM CHLORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25010010
    },
    {
        "Id": 3158,
        "SKUNo": "AS2759",
        "CASNO": "7647‐ 14‐ 5",
        "ProductName": "SODIUM CHLORIDE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 25010010
    },
    {
        "Id": 3159,
        "SKUNo": "AS2760",
        "CASNO": "7647‐ 14‐ 5",
        "ProductName": "SODIUM CHLORIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 25010010
    },
    {
        "Id": 3160,
        "SKUNo": "AS2760",
        "CASNO": "7647‐ 14‐ 5",
        "ProductName": "SODIUM CHLORIDE AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 25010010
    },
    {
        "Id": 3161,
        "SKUNo": "AS2761",
        "CASNO": "7647‐14‐5",
        "ProductName": "SODIUM CHLORIDE SOLUTION0.85% w/v (Normal Saline)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28289030
    },
    {
        "Id": 3162,
        "SKUNo": "AS2762",
        "CASNO": "7758‐ 19‐ 2",
        "ProductName": "SODIUM CHLORITE FLAKES 80%‐500GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28289030
    },
    {
        "Id": 3163,
        "SKUNo": "AS2762",
        "CASNO": "7758‐ 19‐ 2",
        "ProductName": "SODIUM CHLORITE FLAKES 80%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28415010
    },
    {
        "Id": 3164,
        "SKUNo": "AS2763",
        "CASNO": "10034‐ 82‐ 9",
        "ProductName": "SODIUM CHROMATE (TETRAHYDRATE) LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28415010
    },
    {
        "Id": 3165,
        "SKUNo": "AS2764",
        "CASNO": "10034‐ 82‐ 9",
        "ProductName": "SODIUM CHROMATE(TETRAHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181520
    },
    {
        "Id": 3166,
        "SKUNo": "AS2765",
        "CASNO": "6132‐04‐3",
        "ProductName": "tri‐SODIUM CITRATE LR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181520
    },
    {
        "Id": 3167,
        "SKUNo": "AS2765",
        "CASNO": "6132‐04‐3",
        "ProductName": "tri‐SODIUM CITRATE LR (DIHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181520
    },
    {
        "Id": 3168,
        "SKUNo": "AS2766",
        "CASNO": "6132‐04‐3",
        "ProductName": "tri‐SODIUM CITRATE  AR  (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181520
    },
    {
        "Id": 3169,
        "SKUNo": "AS2766",
        "CASNO": "6132‐04‐3",
        "ProductName": "tri‐SODIUM CITRATE  AR  (DIHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181520
    },
    {
        "Id": 3170,
        "SKUNo": "AS2767",
        "CASNO": "              ",
        "ProductName": "SODIUM CITRATE SOLUTION 3.8 % w / v‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28429090
    },
    {
        "Id": 3171,
        "SKUNo": "AS2768",
        "CASNO": "13600‐98‐1",
        "ProductName": "SODIUM COBALTINITRITE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3172,
        "SKUNo": "AS2769",
        "CASNO": "13600‐98‐1",
        "ProductName": "SODIUM COBALTINITRITE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28413000
    },
    {
        "Id": 3173,
        "SKUNo": "AS2770",
        "CASNO": "7789‐ 12‐ 0",
        "ProductName": "SODIUM DICHROMATE (DIHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28413000
    },
    {
        "Id": 3174,
        "SKUNo": "AS2771",
        "CASNO": "7789‐ 12‐ 0",
        "ProductName": "SODIUM DICHROMATE  AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29336990
    },
    {
        "Id": 3175,
        "SKUNo": "AS2772",
        "CASNO": "2893‐ 78‐ 9",
        "ProductName": "SODIUM DICHLOROISOCYANURATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29302000
    },
    {
        "Id": 3176,
        "SKUNo": "AS2773",
        "CASNO": "20624‐ 25‐ 3",
        "ProductName": "SODIUM DIETHYL DITHIOCARBOMATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29302000
    },
    {
        "Id": 3177,
        "SKUNo": "AS2773",
        "CASNO": "20624‐ 25‐ 3",
        "ProductName": "SODIUM DIETHYL DITHIOCARBOMATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29302000
    },
    {
        "Id": 3178,
        "SKUNo": "AS2774",
        "CASNO": "20624‐ 25‐ 3",
        "ProductName": "SODIUM DIETHYL DITHIOCARBOMATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29302000
    },
    {
        "Id": 3179,
        "SKUNo": "AS2774",
        "CASNO": "20624‐ 25‐ 3",
        "ProductName": "SODIUM DIETHYL DITHIOCARBOMATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352200
    },
    {
        "Id": 3180,
        "SKUNo": "AS2775",
        "CASNO": "13472‐ 35‐ 0",
        "ProductName": "SODIUM DIHYDROGEN ORTHOPHOSPHATE (DIHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352200
    },
    {
        "Id": 3181,
        "SKUNo": "AS2775",
        "CASNO": "13472‐ 35‐ 0",
        "ProductName": "SODIUM DIHYDROGEN ORTHOPHOSPHATE (DIHYDRATE) LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28352200
    },
    {
        "Id": 3182,
        "SKUNo": "AS2776",
        "CASNO": "13472‐ 35‐ 0",
        "ProductName": "SODIUM DIHYDROGEN ORTHOPHOSPHATE AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352200
    },
    {
        "Id": 3183,
        "SKUNo": "AS2777",
        "CASNO": "10049‐ 21‐ 5",
        "ProductName": "SODIUM DIHYDROGEN ORTHOPHOSPHATE (MONOHYDRATE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3184,
        "SKUNo": "AS2778",
        "CASNO": "6152‐ 67‐ 6",
        "ProductName": "SODIUM DIPHENYLAMINE SULPHONATE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3185,
        "SKUNo": "AS2778",
        "CASNO": "6152‐ 67‐ 6",
        "ProductName": "SODIUM DIPHENYLAMINE SULPHONATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28311010
    },
    {
        "Id": 3186,
        "SKUNo": "AS2779",
        "CASNO": "7681‐ 49‐ 4",
        "ProductName": "SODIUM DITHIONITE PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 3187,
        "SKUNo": "AS2780",
        "CASNO": "7681‐ 49‐ 4",
        "ProductName": "SODIUM FLUORIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 3188,
        "SKUNo": "AS2780",
        "CASNO": "7681‐ 49‐ 4",
        "ProductName": "SODIUM FLUORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28261990
    },
    {
        "Id": 3189,
        "SKUNo": "AS2781",
        "CASNO": "7681‐ 49‐ 4",
        "ProductName": "SODIUM FLUORIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28269000
    },
    {
        "Id": 3190,
        "SKUNo": "AS2782",
        "CASNO": "13755‐ 29‐ 8",
        "ProductName": "SODIUM FLUOROBORATE 97%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28311020
    },
    {
        "Id": 3191,
        "SKUNo": "AS2783",
        "CASNO": "149‐ 44‐ 0",
        "ProductName": "SODIUM FORMALDEHYDE SULFOXLATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28311020
    },
    {
        "Id": 3192,
        "SKUNo": "AS2783",
        "CASNO": "149‐ 44‐ 0",
        "ProductName": "SODIUM FORMALDEHYDE SULFOXLATE LR‐2.5KG",
        "PACKSIZE": "2.5KG",
        "HSNCODE": 29151210
    },
    {
        "Id": 3193,
        "SKUNo": "AS2784",
        "CASNO": "141‐ 53‐ 7",
        "ProductName": "SODIUM FORMATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181690
    },
    {
        "Id": 3194,
        "SKUNo": "AS2785",
        "CASNO": "527‐ 07‐ 1",
        "ProductName": "SODIUM GLUCONATE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29199040
    },
    {
        "Id": 3195,
        "SKUNo": "AS2786",
        "CASNO": "16564‐43‐5",
        "ProductName": "SODIUM GLYCOCHENODEOXYCHOLATE 98% ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29157090
    },
    {
        "Id": 3196,
        "SKUNo": "AS2787",
        "CASNO": "338950‐81‐5",
        "ProductName": "SODIUM GLYCOCHOLATE HYDRATE, 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29157090
    },
    {
        "Id": 3197,
        "SKUNo": "AS2788",
        "CASNO": "13408‐ 09‐ 8",
        "ProductName": "SODIUM‐B‐GLYCEROPHOSPHATE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29199040
    },
    {
        "Id": 3198,
        "SKUNo": "AS2788",
        "CASNO": "13408‐ 09‐ 8",
        "ProductName": "SODIUM‐B‐GLYCEROPHOSPHATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29199040
    },
    {
        "Id": 3199,
        "SKUNo": "AS2788",
        "CASNO": "13408‐ 09‐ 8",
        "ProductName": "SODIUM‐B‐GLYCEROPHOSPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352940
    },
    {
        "Id": 3200,
        "SKUNo": "AS2789",
        "CASNO": "10124‐56‐8",
        "ProductName": "SODIUM HEXAMETAPHOSPHATE 68% PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352940
    },
    {
        "Id": 3201,
        "SKUNo": "AS2789",
        "CASNO": "10124‐56‐8",
        "ProductName": "SODIUM HEXAMETAPHOSPHATE 68% PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28363000
    },
    {
        "Id": 3202,
        "SKUNo": "AS2790",
        "CASNO": "144‐ 55‐ 8",
        "ProductName": "SODIUM HYDROGEN CARBONATE PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28363000
    },
    {
        "Id": 3203,
        "SKUNo": "AS2790",
        "CASNO": "144‐ 55‐ 8",
        "ProductName": "SODIUM HYDROGEN CARBONATE PURIFIED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28363000
    },
    {
        "Id": 3204,
        "SKUNo": "AS2790",
        "CASNO": "144‐ 55‐ 8",
        "ProductName": "SODIUM HYDROGEN CARBONATE PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28363000
    },
    {
        "Id": 3205,
        "SKUNo": "AS2791",
        "CASNO": "144‐ 55‐ 8",
        "ProductName": "SODIUM HYDROGEN CARBONATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28151110
    },
    {
        "Id": 3206,
        "SKUNo": "AS2792",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE FLAKES‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28151110
    },
    {
        "Id": 3207,
        "SKUNo": "AS2792",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE FLAKES‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28151190
    },
    {
        "Id": 3208,
        "SKUNo": "AS2793",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE PELLETS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28151190
    },
    {
        "Id": 3209,
        "SKUNo": "AS2793",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE PELLETS LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28151190
    },
    {
        "Id": 3210,
        "SKUNo": "AS2794",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE PELLETS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28151190
    },
    {
        "Id": 3211,
        "SKUNo": "AS2794",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE PELLETS AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 38220090
    },
    {
        "Id": 3212,
        "SKUNo": "AS2795",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE SOLUTION N/10‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3213,
        "SKUNo": "AS2796",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE 50% SOLUTION IN WATER AR",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3214,
        "SKUNo": "AS2797",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE SOLUTION IN (1M) (N1)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3215,
        "SKUNo": "AS2797",
        "CASNO": "1310‐73‐2",
        "ProductName": "SODIUM HYDROXIDE SOLUTION IN (1M) (N1)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28289019
    },
    {
        "Id": 3216,
        "SKUNo": "AS2798",
        "CASNO": "7681‐ 52‐ 9",
        "ProductName": "SODIUM HYPOCHLORITE SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28289019
    },
    {
        "Id": 3217,
        "SKUNo": "AS2798",
        "CASNO": "7681‐ 52‐ 9",
        "ProductName": "SODIUM HYPOCHLORITE SOLUTION‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28289019
    },
    {
        "Id": 3218,
        "SKUNo": "AS2798",
        "CASNO": "7681‐ 52‐ 9",
        "ProductName": "SODIUM HYPOCHLORITE SOLUTION‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28353900
    },
    {
        "Id": 3219,
        "SKUNo": "AS2799",
        "CASNO": "10039‐ 56‐ 2",
        "ProductName": "SODIUM HYPOPHOSPHITE (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 3220,
        "SKUNo": "AS2800",
        "CASNO": "10039‐ 56‐ 2",
        "ProductName": "SODIUM HYPOPHOSPHITE (MONOHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28276020
    },
    {
        "Id": 3221,
        "SKUNo": "AS2801",
        "CASNO": "7681‐ 82‐ 5",
        "ProductName": "SODIUM IODIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276020
    },
    {
        "Id": 3222,
        "SKUNo": "AS2801",
        "CASNO": "7681‐ 82‐ 5",
        "ProductName": "SODIUM IODIDE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28276020
    },
    {
        "Id": 3223,
        "SKUNo": "AS2802",
        "CASNO": "7681‐ 82‐ 5",
        "ProductName": "SODIUM IODIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28276020
    },
    {
        "Id": 3224,
        "SKUNo": "AS2802",
        "CASNO": "7681‐ 82‐ 5",
        "ProductName": "SODIUM IODIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 3225,
        "SKUNo": "AS2803",
        "CASNO": "7681‐55‐2",
        "ProductName": "SODIUM IODATE 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181190
    },
    {
        "Id": 3226,
        "SKUNo": "AS2804",
        "CASNO": "72‐ 17‐ 3",
        "ProductName": "SODIUM LACTATE 60% SOLN.‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29181190
    },
    {
        "Id": 3227,
        "SKUNo": "AS2804",
        "CASNO": "72‐ 17‐ 3",
        "ProductName": "SODIUM LACTATE 60% SOLN.‐2.5 LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 34022090
    },
    {
        "Id": 3228,
        "SKUNo": "AS2805",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE (NEEDLE‐SHAPE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 34022090
    },
    {
        "Id": 3229,
        "SKUNo": "AS2805",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE (NEEDLE‐SHAPE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 34029091
    },
    {
        "Id": 3230,
        "SKUNo": "AS2806",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 34029091
    },
    {
        "Id": 3231,
        "SKUNo": "AS2806",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE POWDER LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 34029091
    },
    {
        "Id": 3232,
        "SKUNo": "AS2807",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE AR 99% for Electrophoresis‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 34029091
    },
    {
        "Id": 3233,
        "SKUNo": "AS2807",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE AR 99% for Electrophoresis‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 34022090
    },
    {
        "Id": 3234,
        "SKUNo": "AS2808",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE AR HPLC‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 34022090
    },
    {
        "Id": 3235,
        "SKUNo": "AS2808",
        "CASNO": "151‐ 21‐ 3",
        "ProductName": "SODIUM LAURYL SULPHATE AR HPLC‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3236,
        "SKUNo": "AS2809",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3237,
        "SKUNo": "AS2809",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28321010
    },
    {
        "Id": 3238,
        "SKUNo": "AS2809",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28321010
    },
    {
        "Id": 3239,
        "SKUNo": "AS2810",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321010
    },
    {
        "Id": 3240,
        "SKUNo": "AS2810",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28321010
    },
    {
        "Id": 3241,
        "SKUNo": "AS2810",
        "CASNO": "7681‐ 57‐ 4",
        "ProductName": "SODIUM METABISULPHITE AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28401900
    },
    {
        "Id": 3242,
        "SKUNo": "AS2811",
        "CASNO": "10555‐ 76‐ 7",
        "ProductName": "SODIUM METABORATE TETRAHYDRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29054900
    },
    {
        "Id": 3243,
        "SKUNo": "AS2812",
        "CASNO": "124‐ 41‐ 4",
        "ProductName": "SODIUM METHOXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29054900
    },
    {
        "Id": 3244,
        "SKUNo": "AS2813",
        "CASNO": "124‐ 41‐ 4",
        "ProductName": "SODIUM METHOXIDE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3245,
        "SKUNo": "AS2814",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE LR  (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3246,
        "SKUNo": "AS2814",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE LR  (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3247,
        "SKUNo": "AS2814",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE LR  (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3248,
        "SKUNo": "AS2815",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE AR (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3249,
        "SKUNo": "AS2815",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE AR (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28417020
    },
    {
        "Id": 3250,
        "SKUNo": "AS2815",
        "CASNO": "10102‐ 40‐ 6",
        "ProductName": "SODIUM MOLYBDATE AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29199090
    },
    {
        "Id": 3251,
        "SKUNo": "AS2816",
        "CASNO": "81012‐ 89‐ 7",
        "ProductName": "SODIUM 1‐NAPHTHYL PHOSPHATE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 31025000
    },
    {
        "Id": 3252,
        "SKUNo": "AS2817",
        "CASNO": "7631‐ 99‐ 4",
        "ProductName": "SODIUM NITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31025000
    },
    {
        "Id": 3253,
        "SKUNo": "AS2817",
        "CASNO": "7631‐ 99‐ 4",
        "ProductName": "SODIUM NITRATE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31025000
    },
    {
        "Id": 3254,
        "SKUNo": "AS2818",
        "CASNO": "7631‐ 99‐ 4",
        "ProductName": "SODIUM NITRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28341010
    },
    {
        "Id": 3255,
        "SKUNo": "AS2819",
        "CASNO": "7632‐ 00‐ 0",
        "ProductName": "SODIUM NITRITE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28341010
    },
    {
        "Id": 3256,
        "SKUNo": "AS2819",
        "CASNO": "7632‐ 00‐ 0",
        "ProductName": "SODIUM NITRITE LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28341010
    },
    {
        "Id": 3257,
        "SKUNo": "AS2820",
        "CASNO": "7632‐ 00‐ 0",
        "ProductName": "SODIUM NITRITE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372050
    },
    {
        "Id": 3258,
        "SKUNo": "AS2821",
        "CASNO": "13755‐ 38‐ 9",
        "ProductName": "SODIUM NITROPRUSIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28372050
    },
    {
        "Id": 3259,
        "SKUNo": "AS2821",
        "CASNO": "13755‐ 38‐ 9",
        "ProductName": "SODIUM NITROPRUSIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28372050
    },
    {
        "Id": 3260,
        "SKUNo": "AS2822",
        "CASNO": "13755‐ 38‐ 9",
        "ProductName": "SODIUM NITROPRUSIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28372050
    },
    {
        "Id": 3261,
        "SKUNo": "AS2822",
        "CASNO": "13755‐ 38‐ 9",
        "ProductName": "SODIUM NITROPRUSIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29161590
    },
    {
        "Id": 3262,
        "SKUNo": "AS2823",
        "CASNO": "143‐ 19‐ 1",
        "ProductName": "SODIUM OLEATE 99% LR",
        "PACKSIZE": "250GM",
        "HSNCODE": 29161590
    },
    {
        "Id": 3263,
        "SKUNo": "AS2823",
        "CASNO": "143‐ 19‐ 1",
        "ProductName": "SODIUM OLEATE 99% LR",
        "PACKSIZE": "1KG",
        "HSNCODE": 28352990
    },
    {
        "Id": 3264,
        "SKUNo": "AS2824",
        "CASNO": "10101‐ 89‐ 0",
        "ProductName": "tri‐SODIUM ORTHOPHOSPHATE (DODECAHYDRATE LR)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3265,
        "SKUNo": "AS2824",
        "CASNO": "10101‐ 89‐ 0",
        "ProductName": "tri‐SODIUM ORTHOPHOSPHATE (DODECAHYDRATE LR)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28352990
    },
    {
        "Id": 3266,
        "SKUNo": "AS2825",
        "CASNO": "10101‐ 89‐ 0",
        "ProductName": "tri‐SODIUM ORTHOPHOSPHATE AR (DODECAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 3267,
        "SKUNo": "AS2826",
        "CASNO": "62‐ 76‐ 0",
        "ProductName": "SODIUM OXALATE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171190
    },
    {
        "Id": 3268,
        "SKUNo": "AS2827",
        "CASNO": "62‐ 76‐ 0",
        "ProductName": "SODIUM OXALATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29071190
    },
    {
        "Id": 3269,
        "SKUNo": "AS2828",
        "CASNO": "131‐ 52‐ 2",
        "ProductName": "SODIUM PENTACHLOROPHENATE (Santobrite)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 3270,
        "SKUNo": "AS2829",
        "CASNO": "10486‐ 00‐ 7",
        "ProductName": "SODIUM PERBORATE (TRIHYDRATE LR)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 3271,
        "SKUNo": "AS2829",
        "CASNO": "10486‐ 00‐ 7",
        "ProductName": "SODIUM PERBORATE (TRIHYDRATE LR)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28369990
    },
    {
        "Id": 3272,
        "SKUNo": "AS2830",
        "CASNO": "15630‐ 89‐ 4",
        "ProductName": "SODIUM PERCARBONATE TABLET‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28369990
    },
    {
        "Id": 3273,
        "SKUNo": "AS2831",
        "CASNO": "15630‐ 89‐ 4",
        "ProductName": "SODIUM PERCARBONATE GRANULAR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28299030
    },
    {
        "Id": 3274,
        "SKUNo": "AS2832",
        "CASNO": "7790‐ 28‐ 5",
        "ProductName": "SODIUM (META) PERIODATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 3275,
        "SKUNo": "AS2832",
        "CASNO": "7790‐ 28‐ 5",
        "ProductName": "SODIUM (META) PERIODATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 3276,
        "SKUNo": "AS2833",
        "CASNO": "7790‐ 28‐ 5",
        "ProductName": "SODIUM (META) PERIODATE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28299030
    },
    {
        "Id": 3277,
        "SKUNo": "AS2833",
        "CASNO": "7790‐ 28‐ 5",
        "ProductName": "SODIUM (META) PERIODATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28153000
    },
    {
        "Id": 3278,
        "SKUNo": "AS2834",
        "CASNO": "1313‐ 60‐ 6",
        "ProductName": "SODIUM PEROXIDE AR (GRANULAR)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28153000
    },
    {
        "Id": 3279,
        "SKUNo": "AS2834",
        "CASNO": "1313‐ 60‐ 6",
        "ProductName": "SODIUM PEROXIDE AR (GRANULAR)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331990
    },
    {
        "Id": 3280,
        "SKUNo": "AS2835",
        "CASNO": "7775‐ 27‐ 1",
        "ProductName": "SODIUM PERSULPHATE LR (Sodium peroxydisulfate)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331990
    },
    {
        "Id": 3281,
        "SKUNo": "AS2836",
        "CASNO": "7775‐ 27‐ 1",
        "ProductName": "SODIUM PERSULPHATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3282,
        "SKUNo": "AS2837",
        "CASNO": "7558‐ 79‐ 4",
        "ProductName": "SODIUM PHOSPHATE DIBASIC ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3283,
        "SKUNo": "AS2837",
        "CASNO": "7558‐ 79‐ 4",
        "ProductName": "SODIUM PHOSPHATE DIBASIC ANHYDROUS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28352990
    },
    {
        "Id": 3284,
        "SKUNo": "AS2838",
        "CASNO": "7558‐ 79‐ 4",
        "ProductName": "SODIUM PHOSPHATE DIBASIC ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3285,
        "SKUNo": "AS2839",
        "CASNO": "10028‐ 24‐ 7",
        "ProductName": "SODIUM PHOSPHATE DIBASIC DIHYDRATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3286,
        "SKUNo": "AS2839",
        "CASNO": "10028‐ 24‐ 7",
        "ProductName": "SODIUM PHOSPHATE DIBASIC DIHYDRATE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28352990
    },
    {
        "Id": 3287,
        "SKUNo": "AS2840",
        "CASNO": "10028‐ 24‐ 7",
        "ProductName": "SODIUM PHOSPHATE DIBASIC DIHYDRATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3288,
        "SKUNo": "AS2841",
        "CASNO": "10039‐32‐4",
        "ProductName": "SODIUM PHOSPHATE DIBASIC (DODECAHYDRATE)LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3289,
        "SKUNo": "AS2842",
        "CASNO": "10039‐32‐4",
        "ProductName": "SODIUM PHOSPHATE DIBASIC (DODECAHYDRATE) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29155000
    },
    {
        "Id": 3290,
        "SKUNo": "AS2843",
        "CASNO": "137‐40‐ 6",
        "ProductName": "SODIUM PROPIONATE LR 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 3291,
        "SKUNo": "AS2844",
        "CASNO": "7722‐ 88‐ 5",
        "ProductName": "tetra‐SODIUM PYROPHOSPHATE (ANHYDROUS) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29183090
    },
    {
        "Id": 3292,
        "SKUNo": "AS2845",
        "CASNO": "113‐ 24‐ 6",
        "ProductName": "SODIUM PYRUVATE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 3293,
        "SKUNo": "AS2845",
        "CASNO": "113‐ 24‐ 6",
        "ProductName": "SODIUM PYRUVATE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 3294,
        "SKUNo": "AS2845",
        "CASNO": "113‐ 24‐ 6",
        "ProductName": "SODIUM PYRUVATE FOR BIOCHEMISTRY ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182120
    },
    {
        "Id": 3295,
        "SKUNo": "AS2846",
        "CASNO": "523‐21‐7",
        "ProductName": "SODIUM RHODIZONATE AR 98.55%",
        "PACKSIZE": "1GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 3296,
        "SKUNo": "AS2846",
        "CASNO": "523‐21‐7",
        "ProductName": "SODIUM RHODIZONATE AR 98.55%",
        "PACKSIZE": "5GM",
        "HSNCODE": 29143990
    },
    {
        "Id": 3297,
        "SKUNo": "AS2847",
        "CASNO": "54‐ 21‐ 7",
        "ProductName": "SODIUM SALICYLATE PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182120
    },
    {
        "Id": 3298,
        "SKUNo": "AS2848",
        "CASNO": "54‐ 21‐ 7",
        "ProductName": "SODIUM SALICYLATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3299,
        "SKUNo": "AS2849",
        "CASNO": "13410‐ 01‐ 0",
        "ProductName": "SODIUM SELENATE AR ANHYDROUS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3300,
        "SKUNo": "AS2849",
        "CASNO": "13410‐ 01‐ 0",
        "ProductName": "SODIUM SELENATE AR ANHYDROUS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28419000
    },
    {
        "Id": 3301,
        "SKUNo": "AS2850",
        "CASNO": "10102‐ 18‐ 8",
        "ProductName": "SODIUM SELENITE LR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3302,
        "SKUNo": "AS2850",
        "CASNO": "10102‐ 18‐ 8",
        "ProductName": "SODIUM SELENITE LR (ANHYDROUS)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28419000
    },
    {
        "Id": 3303,
        "SKUNo": "AS2851",
        "CASNO": "26970‐82‐1",
        "ProductName": "SODIUM SELENITE(PENTAHYDRATE)LR (CONFIRMING TO B.P.)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3304,
        "SKUNo": "AS2851",
        "CASNO": "26970‐82‐1",
        "ProductName": "SODIUM SELENITE(PENTAHYDRATE)LR (CONFIRMING TO B.P.)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3305,
        "SKUNo": "AS2852",
        "CASNO": "10102‐ 18‐ 8",
        "ProductName": "SODIUM SELENITE AR (ANHYDROUS)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3306,
        "SKUNo": "AS2852",
        "CASNO": "10102‐ 18‐ 8",
        "ProductName": "SODIUM SELENITE AR (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28391100
    },
    {
        "Id": 3307,
        "SKUNo": "AS2853",
        "CASNO": "13517‐ 24‐ 3",
        "ProductName": "SODIUM SILICATE POWDER (META) HYDRATED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28391100
    },
    {
        "Id": 3308,
        "SKUNo": "AS2853",
        "CASNO": "13517‐ 24‐ 3",
        "ProductName": "SODIUM SILICATE POWDER (META) HYDRATED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28391900
    },
    {
        "Id": 3309,
        "SKUNo": "AS2854",
        "CASNO": "1344‐ 09‐ 8",
        "ProductName": "SODIUM SILICATE SOLUTION",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28269000
    },
    {
        "Id": 3310,
        "SKUNo": "AS2855",
        "CASNO": "16893‐ 85‐ 9",
        "ProductName": "SODIUM SILICOFLUORIDE 98%‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28419000
    },
    {
        "Id": 3311,
        "SKUNo": "AS2856",
        "CASNO": "12209‐ 98‐ 2",
        "ProductName": "SODIUM STANNATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331990
    },
    {
        "Id": 3312,
        "SKUNo": "AS2857",
        "CASNO": "7757‐ 82‐ 6",
        "ProductName": "SODIUM SULPHATE ANHYDROUS PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331990
    },
    {
        "Id": 3313,
        "SKUNo": "AS2857",
        "CASNO": "7757‐ 82‐ 6",
        "ProductName": "SODIUM SULPHATE ANHYDROUS PURIFIED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28331990
    },
    {
        "Id": 3314,
        "SKUNo": "AS2857",
        "CASNO": "7757‐ 82‐ 6",
        "ProductName": "SODIUM SULPHATE ANHYDROUS PURIFIED‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28331990
    },
    {
        "Id": 3315,
        "SKUNo": "AS2858",
        "CASNO": "7757‐ 82‐ 6",
        "ProductName": "SODIUM SULPHATE ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28331990
    },
    {
        "Id": 3316,
        "SKUNo": "AS2858",
        "CASNO": "7757‐ 82‐ 6",
        "ProductName": "SODIUM SULPHATE ANHYDROUS AR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28301000
    },
    {
        "Id": 3317,
        "SKUNo": "AS2859",
        "CASNO": "27610‐ 45‐ 3",
        "ProductName": "SODIUM SULPHIDE FLAKES (IRON FREE) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28301000
    },
    {
        "Id": 3318,
        "SKUNo": "AS2860",
        "CASNO": "27610‐ 45‐ 3",
        "ProductName": "SODIUM SULPHIDE FLAKES AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321090
    },
    {
        "Id": 3319,
        "SKUNo": "AS2861",
        "CASNO": "7757‐ 83‐ 7",
        "ProductName": "SODIUM SULPHITE ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28321090
    },
    {
        "Id": 3320,
        "SKUNo": "AS2862",
        "CASNO": "7757‐ 83‐ 7",
        "ProductName": "SODIUM SULPHITE ANHYDROUS AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 3321,
        "SKUNo": "AS2863",
        "CASNO": "6106‐ 24‐ 7",
        "ProductName": "SODIUM (+) TARTRATE PURIFIED (DIHYDRATE) ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 3322,
        "SKUNo": "AS2864",
        "CASNO": "6106‐ 24‐ 7",
        "ProductName": "SODIUM (+) TARTRATE PURIFIED (DIHYDRATE)  AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29181390
    },
    {
        "Id": 3323,
        "SKUNo": "AS2864",
        "CASNO": "6106‐ 24‐ 7",
        "ProductName": "SODIUM (+) TARTRATE PURIFIED (DIHYDRATE)  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3324,
        "SKUNo": "AS2865",
        "CASNO": "145‐ 42‐ 6",
        "ProductName": "SODIUM TELLURITE 96%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3325,
        "SKUNo": "AS2865",
        "CASNO": "145‐ 42‐ 6",
        "ProductName": "SODIUM TELLURITE 96%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28401100
    },
    {
        "Id": 3326,
        "SKUNo": "AS2866",
        "CASNO": "1303‐ 96‐ 4",
        "ProductName": "di‐SODIUM TETRABORATE (BORAX) LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28401100
    },
    {
        "Id": 3327,
        "SKUNo": "AS2866",
        "CASNO": "1303‐ 96‐ 4",
        "ProductName": "di‐SODIUM TETRABORATE (BORAX) LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28401100
    },
    {
        "Id": 3328,
        "SKUNo": "AS2867",
        "CASNO": "1303‐ 96‐ 4",
        "ProductName": "di‐SODIUM TETRABORATE (BORAX) AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28401100
    },
    {
        "Id": 3329,
        "SKUNo": "AS2867",
        "CASNO": "1303‐ 96‐ 4",
        "ProductName": "di‐SODIUM TETRABORATE (BORAX) AR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28429090
    },
    {
        "Id": 3330,
        "SKUNo": "AS2868",
        "CASNO": "540‐ 72‐ 7",
        "ProductName": "SODIUM THIOCYANATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28429090
    },
    {
        "Id": 3331,
        "SKUNo": "AS2869",
        "CASNO": "540‐ 72‐ 7",
        "ProductName": "SODIUM THIOCYANATE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28323010
    },
    {
        "Id": 3332,
        "SKUNo": "AS2870",
        "CASNO": "10102‐ 17‐ 7",
        "ProductName": "SODIUM THIOSULPHATE LR (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28323010
    },
    {
        "Id": 3333,
        "SKUNo": "AS2870",
        "CASNO": "10102‐ 17‐ 7",
        "ProductName": "SODIUM THIOSULPHATE LR (PENTAHYDRATE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28323010
    },
    {
        "Id": 3334,
        "SKUNo": "AS2870",
        "CASNO": "10102‐ 17‐ 7",
        "ProductName": "SODIUM THIOSULPHATE LR (PENTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28323010
    },
    {
        "Id": 3335,
        "SKUNo": "AS2871",
        "CASNO": "10102‐ 17‐ 7",
        "ProductName": "SODIUM THIOSULPHATE AR (PENTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28353100
    },
    {
        "Id": 3336,
        "SKUNo": "AS2872",
        "CASNO": "7758‐ 29‐ 4",
        "ProductName": "SODIUM TRIPOLYPHOSPHATE(ANHYDROUS) STPP‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28418010
    },
    {
        "Id": 3337,
        "SKUNo": "AS2873",
        "CASNO": "10213‐ 10‐ 2",
        "ProductName": "SODIUM TUNGSTATE (DIHYDRATE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28418010
    },
    {
        "Id": 3338,
        "SKUNo": "AS2873",
        "CASNO": "10213‐ 10‐ 2",
        "ProductName": "SODIUM TUNGSTATE (DIHYDRATE)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28418010
    },
    {
        "Id": 3339,
        "SKUNo": "AS2874",
        "CASNO": "10213‐ 10‐ 2",
        "ProductName": "SODIUM TUNGSTATE (DIHYDRATE) AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28418010
    },
    {
        "Id": 3340,
        "SKUNo": "AS2874",
        "CASNO": "10213‐ 10‐ 2",
        "ProductName": "SODIUM TUNGSTATE (DIHYDRATE) AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3341,
        "SKUNo": "AS2875",
        "CASNO": "13718‐ 26‐ 8",
        "ProductName": "SODIUM (META) VANADATE ANHYDROUS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28419000
    },
    {
        "Id": 3342,
        "SKUNo": "AS2875",
        "CASNO": "13718‐ 26‐ 8",
        "ProductName": "SODIUM (META) VANADATE ANHYDROUS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 3343,
        "SKUNo": "AS2876",
        "CASNO": "8‐85‐4",
        "ProductName": "SOLOCHROME DARK BLUE (CALCON)‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 3344,
        "SKUNo": "AS2876",
        "CASNO": "8‐85‐4",
        "ProductName": "SOLOCHROME DARK BLUE (CALCON)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29161960
    },
    {
        "Id": 3345,
        "SKUNo": "AS2877",
        "CASNO": "110‐ 44‐ 1",
        "ProductName": "SORBIC ACID PURISS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29161960
    },
    {
        "Id": 3346,
        "SKUNo": "AS2877",
        "CASNO": "110‐ 44‐ 1",
        "ProductName": "SORBIC ACID PURISS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29054400
    },
    {
        "Id": 3347,
        "SKUNo": "AS2878",
        "CASNO": "50‐ 70‐ 4",
        "ProductName": "SORBITOL 70% LIQUID (CONFIRMING TO PHARMA SPECIFICATION)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29054400
    },
    {
        "Id": 3348,
        "SKUNo": "AS2878",
        "CASNO": "50‐ 70‐ 4",
        "ProductName": "SORBITOL 70% LIQUID (CONFIRMING TO PHARMA SPECIFICATION)‐500ML",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29054400
    },
    {
        "Id": 3349,
        "SKUNo": "AS2879",
        "CASNO": "50‐ 70‐ 4",
        "ProductName": "D‐SORBITOL LR FOR MICROBIOLOGY‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29054400
    },
    {
        "Id": 3350,
        "SKUNo": "AS2879",
        "CASNO": "50‐ 70‐ 4",
        "ProductName": "D‐SORBITOL LR FOR MICROBIOLOGY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29400000
    },
    {
        "Id": 3351,
        "SKUNo": "AS2880",
        "CASNO": "87‐ 79‐ 6",
        "ProductName": "L(‐) SORBOSE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 3352,
        "SKUNo": "AS2880",
        "CASNO": "87‐ 79‐ 6",
        "ProductName": "L(‐) SORBOSE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 21061000
    },
    {
        "Id": 3353,
        "SKUNo": "AS2881",
        "CASNO": "68513‐ 95‐ 1",
        "ProductName": "SOYABEAN MEAL (defatted)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 3354,
        "SKUNo": "AS2882",
        "CASNO": "",
        "ProductName": "SOYA PEPTONE (SOYATONE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29232010
    },
    {
        "Id": 3355,
        "SKUNo": "AS2883",
        "CASNO": "8002‐43‐5",
        "ProductName": "SOYA LECITHIN 30%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29232010
    },
    {
        "Id": 3356,
        "SKUNo": "AS2883",
        "CASNO": "8002‐43‐5",
        "ProductName": "SOYA LECITHIN 30%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 3357,
        "SKUNo": "AS2884",
        "CASNO": "23647‐ 14‐ 5",
        "ProductName": "SPADNS AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 3358,
        "SKUNo": "AS2884",
        "CASNO": "23647‐ 14‐ 5",
        "ProductName": "SPADNS AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29270090
    },
    {
        "Id": 3359,
        "SKUNo": "AS2884",
        "CASNO": "23647‐ 14‐ 5",
        "ProductName": "SPADNS AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 3360,
        "SKUNo": "AS2885",
        "CASNO": "1338‐ 39‐ 2",
        "ProductName": "SPAN 20  (Sorbitan Monolaurate)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3361,
        "SKUNo": "AS2886",
        "CASNO": "26266‐ 57‐ 9",
        "ProductName": "SPAN 40 ( Sorbitan Monopalmitate)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 3362,
        "SKUNo": "AS2887",
        "CASNO": "1338‐ 41‐ 6",
        "ProductName": "SPAN 60  ((Sorbitane Monostearate)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29159090
    },
    {
        "Id": 3363,
        "SKUNo": "AS2887",
        "CASNO": "1338‐ 43‐ 8",
        "ProductName": "SPAN 80 (SORBITANE MONOOLEATE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3364,
        "SKUNo": "AS2887",
        "CASNO": "1338‐ 43‐ 8",
        "ProductName": "SPAN 80 (SORBITANE MONOOLEATE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28273990
    },
    {
        "Id": 3365,
        "SKUNo": "AS2888",
        "CASNO": "10026‐ 06‐ 9",
        "ProductName": "STANNIC CHLORIDE (PENTAHYDRATED) LR 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259010
    },
    {
        "Id": 3366,
        "SKUNo": "AS2889",
        "CASNO": "18282‐10‐5",
        "ProductName": "STANNIC OXIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28259010
    },
    {
        "Id": 3367,
        "SKUNo": "AS2890",
        "CASNO": "18282‐10‐5",
        "ProductName": "STANNIC OXIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3368,
        "SKUNo": "AS2891",
        "CASNO": "10025‐ 69‐ 1",
        "ProductName": "STANNOUS CHLORIDE (Tin chloride)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3369,
        "SKUNo": "AS2891",
        "CASNO": "10025‐ 69‐ 1",
        "ProductName": "STANNOUS CHLORIDE (Tin chloride)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3370,
        "SKUNo": "AS2892",
        "CASNO": "10025‐ 69‐ 1",
        "ProductName": "STANNOUS CHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3371,
        "SKUNo": "AS2892",
        "CASNO": "10025‐ 69‐ 1",
        "ProductName": "STANNOUS CHLORIDE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 3372,
        "SKUNo": "AS2893",
        "CASNO": "7488‐ 55‐ 3",
        "ProductName": "STANNOUS SULPHATE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 3373,
        "SKUNo": "AS2893",
        "CASNO": "7488‐ 55‐ 3",
        "ProductName": "STANNOUS SULPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 3374,
        "SKUNo": "AS2894",
        "CASNO": "7488‐ 55‐ 3",
        "ProductName": "STANNOUS SULPHATE AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3375,
        "SKUNo": "AS2895",
        "CASNO": "",
        "ProductName": "STARCH IODIDE PAPER ‐200IVS",
        "PACKSIZE": "200IVS",
        "HSNCODE": 11081200
    },
    {
        "Id": 3376,
        "SKUNo": "AS2896",
        "CASNO": "9005‐ 25‐ 8",
        "ProductName": "STARCH MAIZE (CORN)",
        "PACKSIZE": "500GM",
        "HSNCODE": 11081200
    },
    {
        "Id": 3377,
        "SKUNo": "AS2896",
        "CASNO": "9005‐ 25‐ 8",
        "ProductName": "STARCH MAIZE (CORN)",
        "PACKSIZE": "5KG",
        "HSNCODE": 11081300
    },
    {
        "Id": 3378,
        "SKUNo": "AS2897",
        "CASNO": "9005‐ 84‐ 9",
        "ProductName": "STARCH POTATO‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 11081300
    },
    {
        "Id": 3379,
        "SKUNo": "AS2897",
        "CASNO": "9005‐ 84‐ 9",
        "ProductName": "STARCH POTATO‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 35051090
    },
    {
        "Id": 3380,
        "SKUNo": "AS2898",
        "CASNO": "9005‐ 84‐ 9",
        "ProductName": "STARCH SOLUBLE (EX POTATO)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35051090
    },
    {
        "Id": 3381,
        "SKUNo": "AS2899",
        "CASNO": "9005‐ 84‐ 9",
        "ProductName": "STARCH SOLUBLE AR (EX POTATO)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38231190
    },
    {
        "Id": 3382,
        "SKUNo": "AS2900",
        "CASNO": "57‐ 11‐ 4",
        "ProductName": "STEARIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29051700
    },
    {
        "Id": 3383,
        "SKUNo": "AS2901",
        "CASNO": "112‐ 92‐ 5",
        "ProductName": "STEARYL ALCOHOL LR (alcohol C18)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369200
    },
    {
        "Id": 3384,
        "SKUNo": "AS2902",
        "CASNO": "1633‐ 05‐ 2",
        "ProductName": "STRONTIUM CARBONATE LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28369200
    },
    {
        "Id": 3385,
        "SKUNo": "AS2902",
        "CASNO": "1633‐ 05‐ 2",
        "ProductName": "STRONTIUM CARBONATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273930
    },
    {
        "Id": 3386,
        "SKUNo": "AS2903",
        "CASNO": "10025‐ 70‐ 4",
        "ProductName": "STRONTIUM CHLORIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342910
    },
    {
        "Id": 3387,
        "SKUNo": "AS2904",
        "CASNO": "10042‐ 76‐ 9",
        "ProductName": "STRONTIUM NITRATE ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332950
    },
    {
        "Id": 3388,
        "SKUNo": "AS2905",
        "CASNO": "7759/02/06",
        "ProductName": "STRONTIUM SULFATE (ANHYDROUS) LR 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 3389,
        "SKUNo": "AS2906",
        "CASNO": "505‐48‐6",
        "ProductName": "SUBERIC ACID‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 3390,
        "SKUNo": "AS2906",
        "CASNO": "505‐48‐6",
        "ProductName": "SUBERIC ACID‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29171990
    },
    {
        "Id": 3391,
        "SKUNo": "AS2906",
        "CASNO": "505‐48‐6",
        "ProductName": "SUBERIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171930
    },
    {
        "Id": 3392,
        "SKUNo": "AS2907",
        "CASNO": "110‐ 15‐ 6",
        "ProductName": "SUCCINIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171930
    },
    {
        "Id": 3393,
        "SKUNo": "AS2908",
        "CASNO": "110‐ 15‐ 6",
        "ProductName": "SUCCINIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171930
    },
    {
        "Id": 3394,
        "SKUNo": "AS2908",
        "CASNO": "110‐ 15‐ 6",
        "ProductName": "SUCCINIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29171930
    },
    {
        "Id": 3395,
        "SKUNo": "AS2909",
        "CASNO": "108‐ 30‐ 5",
        "ProductName": "SUCCINIC ANHYDRIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29171930
    },
    {
        "Id": 3396,
        "SKUNo": "AS2909",
        "CASNO": "108‐ 30‐ 5",
        "ProductName": "SUCCINIC ANHYDRIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 3397,
        "SKUNo": "AS2910",
        "CASNO": "123‐ 56‐ 8",
        "ProductName": "SUCCINIMIDE 99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29251900
    },
    {
        "Id": 3398,
        "SKUNo": "AS2910",
        "CASNO": "123‐ 56‐ 8",
        "ProductName": "SUCCINIMIDE 99%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17019990
    },
    {
        "Id": 3399,
        "SKUNo": "AS2911",
        "CASNO": "57‐ 50‐ 1",
        "ProductName": "SUCROSE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 17019990
    },
    {
        "Id": 3400,
        "SKUNo": "AS2911",
        "CASNO": "57‐ 50‐ 1",
        "ProductName": "SUCROSE LR‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 17019990
    },
    {
        "Id": 3401,
        "SKUNo": "AS2912",
        "CASNO": "57‐ 50‐ 1",
        "ProductName": "SUCROSE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3402,
        "SKUNo": "AS2913",
        "CASNO": "85‐ 86‐ 9",
        "ProductName": "SUDAN III FOR MICROSCOPY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3403,
        "SKUNo": "AS2913",
        "CASNO": "85‐ 86‐ 9",
        "ProductName": "SUDAN III FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3404,
        "SKUNo": "AS2913",
        "CASNO": "85‐ 86‐ 9",
        "ProductName": "SUDAN III FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3405,
        "SKUNo": "AS2914",
        "CASNO": "85‐ 83‐ 6",
        "ProductName": "SUDAN IV FOR MICROSCOPY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3406,
        "SKUNo": "AS2914",
        "CASNO": "85‐ 83‐ 6",
        "ProductName": "SUDAN IV FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3407,
        "SKUNo": "AS2914",
        "CASNO": "85‐ 83‐ 6",
        "ProductName": "SUDAN IV FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3408,
        "SKUNo": "AS2915",
        "CASNO": "4197‐ 25‐ 5",
        "ProductName": "SUDAN BLACK B FOR MICROSCOPY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3409,
        "SKUNo": "AS2915",
        "CASNO": "4197‐ 25‐ 5",
        "ProductName": "SUDAN BLACK B FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3410,
        "SKUNo": "AS2915",
        "CASNO": "4197‐ 25‐ 5",
        "ProductName": "SUDAN BLACK B FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041990
    },
    {
        "Id": 3411,
        "SKUNo": "AS2916",
        "CASNO": "5329‐ 14‐ 6",
        "ProductName": "SULPHAMIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 3412,
        "SKUNo": "AS2916",
        "CASNO": "5329‐ 14‐ 6",
        "ProductName": "SULPHAMIC ACID‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28111990
    },
    {
        "Id": 3413,
        "SKUNo": "AS2917",
        "CASNO": "5329‐ 14‐ 6",
        "ProductName": "SULPHAMIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28111990
    },
    {
        "Id": 3414,
        "SKUNo": "AS2917",
        "CASNO": "5329‐ 14‐ 6",
        "ProductName": "SULPHAMIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29350090
    },
    {
        "Id": 3415,
        "SKUNo": "AS2918",
        "CASNO": "63‐ 74‐ 1",
        "ProductName": "SULPHANILAMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29350090
    },
    {
        "Id": 3416,
        "SKUNo": "AS2919",
        "CASNO": "63‐ 74‐ 1",
        "ProductName": "SULPHANILAMIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29350090
    },
    {
        "Id": 3417,
        "SKUNo": "AS2919",
        "CASNO": "63‐ 74‐ 1",
        "ProductName": "SULPHANILAMIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214234
    },
    {
        "Id": 3418,
        "SKUNo": "AS2920",
        "CASNO": "121‐57‐3",
        "ProductName": "SULPHANILIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214234
    },
    {
        "Id": 3419,
        "SKUNo": "AS2920",
        "CASNO": "121‐57‐3",
        "ProductName": "SULPHANILIC ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214234
    },
    {
        "Id": 3420,
        "SKUNo": "AS2921",
        "CASNO": "121‐57‐3",
        "ProductName": "SULPHANILIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214234
    },
    {
        "Id": 3421,
        "SKUNo": "AS2921",
        "CASNO": "121‐57‐3",
        "ProductName": "SULPHANILIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182390
    },
    {
        "Id": 3422,
        "SKUNo": "AS2922",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "5‐SULPHOSALICYLIC ACID LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29182390
    },
    {
        "Id": 3423,
        "SKUNo": "AS2922",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "5‐SULPHOSALICYLIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29182390
    },
    {
        "Id": 3424,
        "SKUNo": "AS2923",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "5‐SULPHOSALICYLIC ACID AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29182390
    },
    {
        "Id": 3425,
        "SKUNo": "AS2923",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "5‐SULPHOSALICYLIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3426,
        "SKUNo": "AS2924",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "SULPHOSALICYLIC ACID SOLUTION 3% w / v‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3427,
        "SKUNo": "AS2925",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "SULPHOSALICYLIC ACID SOLUTION 10% w / v‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3428,
        "SKUNo": "AS2926",
        "CASNO": "5965‐ 83‐ 3",
        "ProductName": "SULPHOSALICYLIC ACID SOLUTION 20% w / v‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 28070010
    },
    {
        "Id": 3429,
        "SKUNo": "AS2927",
        "CASNO": "7664‐93‐9",
        "ProductName": "SULPHURIC ACID 90% For Synthesis ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28070010
    },
    {
        "Id": 3430,
        "SKUNo": "AS2927",
        "CASNO": "7664‐93‐9",
        "ProductName": "SULPHURIC ACID 90% For Synthesis ‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28070010
    },
    {
        "Id": 3431,
        "SKUNo": "AS2928",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 98% LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28070010
    },
    {
        "Id": 3432,
        "SKUNo": "AS2928",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 98% LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28070010
    },
    {
        "Id": 3433,
        "SKUNo": "AS2928",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 98% LR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28070010
    },
    {
        "Id": 3434,
        "SKUNo": "AS2929",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28070010
    },
    {
        "Id": 3435,
        "SKUNo": "AS2929",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28070010
    },
    {
        "Id": 3436,
        "SKUNo": "AS2929",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID AR‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 38220090
    },
    {
        "Id": 3437,
        "SKUNo": "AS2930",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID N/10‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3438,
        "SKUNo": "AS2931",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID N/50 ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3439,
        "SKUNo": "AS2932",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 25% v/v‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3440,
        "SKUNo": "AS2932",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 25% v/v‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28070010
    },
    {
        "Id": 3441,
        "SKUNo": "AS2933",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 96% FOR TRACE METAL ANALYSIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28070010
    },
    {
        "Id": 3442,
        "SKUNo": "AS2933",
        "CASNO": "7664‐ 93‐ 9",
        "ProductName": "SULPHURIC ACID 96% FOR TRACE METAL ANALYSIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 28399090
    },
    {
        "Id": 3443,
        "SKUNo": "AS2934",
        "CASNO": "14807‐ 96‐ 6",
        "ProductName": "TALC FINE POWDER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32019090
    },
    {
        "Id": 3444,
        "SKUNo": "AS2935",
        "CASNO": "1401‐ 55‐ 4",
        "ProductName": "TANNIC ACID POWDER LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32019090
    },
    {
        "Id": 3445,
        "SKUNo": "AS2935",
        "CASNO": "1401‐ 55‐ 4",
        "ProductName": "TANNIC ACID POWDER LR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 32019090
    },
    {
        "Id": 3446,
        "SKUNo": "AS2936",
        "CASNO": "1401‐ 55‐ 4",
        "ProductName": "TANNIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32019090
    },
    {
        "Id": 3447,
        "SKUNo": "AS2936",
        "CASNO": "1401‐ 55‐ 4",
        "ProductName": "TANNIC ACID AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 3448,
        "SKUNo": "AS2937",
        "CASNO": "1314‐61‐0",
        "ProductName": "TANTALUM PENTOXIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28251090
    },
    {
        "Id": 3449,
        "SKUNo": "AS2937",
        "CASNO": "1314‐61‐0",
        "ProductName": "TANTALUM PENTOXIDE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3450,
        "SKUNo": "AS2938",
        "CASNO": "29915‐ 38 ‐6",
        "ProductName": "TAPS BUFFER FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3451,
        "SKUNo": "AS2938",
        "CASNO": "29915‐ 38 ‐6",
        "ProductName": "TAPS BUFFER FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181200
    },
    {
        "Id": 3452,
        "SKUNo": "AS2939",
        "CASNO": "87‐ 69‐ 4",
        "ProductName": "TARTARIC ACID LR (+) DEXTRORATATORY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181200
    },
    {
        "Id": 3453,
        "SKUNo": "AS2939",
        "CASNO": "87‐ 69‐ 4",
        "ProductName": "TARTARIC ACID LR (+) DEXTRORATATORY‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29181200
    },
    {
        "Id": 3454,
        "SKUNo": "AS2940",
        "CASNO": "87‐ 69‐ 4",
        "ProductName": "TARTARIC ACID AR (+) DEXTRORATATORY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181200
    },
    {
        "Id": 3455,
        "SKUNo": "AS2941",
        "CASNO": "147‐71‐7",
        "ProductName": "D( ‐ ) TARTARIC ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29181200
    },
    {
        "Id": 3456,
        "SKUNo": "AS2941",
        "CASNO": "147‐71‐7",
        "ProductName": "D( ‐ ) TARTARIC ACID ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29181200
    },
    {
        "Id": 3457,
        "SKUNo": "AS2942",
        "CASNO": "133‐ 37‐ 9",
        "ProductName": "DL‐TARTARIC ACID (Synthetic)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 32041982
    },
    {
        "Id": 3458,
        "SKUNo": "AS2943",
        "CASNO": "1934‐ 21‐ 0",
        "ProductName": "TARTRAZINE AR FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041982
    },
    {
        "Id": 3459,
        "SKUNo": "AS2943",
        "CASNO": "1934‐ 21‐ 0",
        "ProductName": "TARTRAZINE AR FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 3460,
        "SKUNo": "AS2943",
        "CASNO": "107‐35‐7",
        "ProductName": "TAURINE  FOR BIOCHEMISTRY (2‐AMINOETHANE SULPHONIC ACID)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 3461,
        "SKUNo": "AS2943",
        "CASNO": "107‐35‐7",
        "ProductName": "TAURINE  FOR BIOCHEMISTRY (2‐AMINOETHANE SULPHONIC ACID)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28045020
    },
    {
        "Id": 3462,
        "SKUNo": "AS2944",
        "CASNO": "13494‐ 80‐ 9",
        "ProductName": "TELLURIUM (METAL) POWDER ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3463,
        "SKUNo": "AS2945",
        "CASNO": "125700‐67‐6",
        "ProductName": "TBTU  FOR SYNTHESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3464,
        "SKUNo": "AS2945",
        "CASNO": "125700‐67‐6",
        "ProductName": "TBTU  FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3465,
        "SKUNo": "AS2945",
        "CASNO": "125700‐67‐6",
        "ProductName": "TBTU  FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29173600
    },
    {
        "Id": 3466,
        "SKUNo": "AS2946",
        "CASNO": "100‐ 21‐ 0",
        "ProductName": "TEREPHTHALIC ACID LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 3467,
        "SKUNo": "AS2947",
        "CASNO": "7365‐ 44‐ 8",
        "ProductName": "TES BUFFER FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29221990
    },
    {
        "Id": 3468,
        "SKUNo": "AS2947",
        "CASNO": "7365‐ 44‐ 8",
        "ProductName": "TES BUFFER FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3469,
        "SKUNo": "AS2948",
        "CASNO": "1643‐ 19‐ 2",
        "ProductName": "TETRABUTYL AMMONIUM BROMIDE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3470,
        "SKUNo": "AS2948",
        "CASNO": "1643‐ 19‐ 2",
        "ProductName": "TETRABUTYL AMMONIUM BROMIDE FOR SYNTHESIS‐ 1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29239000
    },
    {
        "Id": 3471,
        "SKUNo": "AS2949",
        "CASNO": "1643‐ 19‐ 2",
        "ProductName": "TETRABUTYL AMMONIUM BROMIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3472,
        "SKUNo": "AS2949",
        "CASNO": "1643‐ 19‐ 2",
        "ProductName": "TETRABUTYL AMMONIUM BROMIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3473,
        "SKUNo": "AS2950",
        "CASNO": "5574‐ 97‐ 0",
        "ProductName": "TETRABUTYL AMMONIUM DIHYDROGEN PHOSPHATE AR HPLC‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3474,
        "SKUNo": "AS2950",
        "CASNO": "5574‐ 97‐ 0",
        "ProductName": "TETRABUTYL AMMONIUM DIHYDROGEN PHOSPHATE AR HPLC‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3475,
        "SKUNo": "AS2951",
        "CASNO": "32503‐ 27‐ 8",
        "ProductName": "TETRABUTYL AMMONIUM HYDROGEN SULPHATE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3476,
        "SKUNo": "AS2951",
        "CASNO": "32503‐ 27‐ 8",
        "ProductName": "TETRABUTYL AMMONIUM HYDROGEN SULPHATE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3477,
        "SKUNo": "AS2952",
        "CASNO": "32503‐ 27‐ 8",
        "ProductName": "TETRABUTYL AMMONIUM HYDROGEN SULPHATE 99% HPLC‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3478,
        "SKUNo": "AS2952",
        "CASNO": "32503‐ 27‐ 8",
        "ProductName": "TETRABUTYL AMMONIUM HYDROGEN SULPHATE 99% HPLC‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3479,
        "SKUNo": "AS2953",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL AMMONIUM HYDROXIDE 10% AQUEOUS SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3480,
        "SKUNo": "AS2954",
        "CASNO": "",
        "ProductName": "TETRA BUTYL AMMONIUM HYDROXIDE 0.1 NORMAL IN IPA‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3481,
        "SKUNo": "AS2955",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE 20% AQUEOUS SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3482,
        "SKUNo": "AS2955",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE 20% AQUEOUS SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3483,
        "SKUNo": "AS2956",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE 40% AQUEOUS SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3484,
        "SKUNo": "AS2957",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL AMMONIUM HYDROXIDE 40% IN METHANOL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3485,
        "SKUNo": "AS2957",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL AMMONIUM HYDROXIDE 40% IN METHANOL‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3486,
        "SKUNo": "AS2958",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE 25% IN METHANOL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3487,
        "SKUNo": "AS2958",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE 25% IN METHANOL‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3488,
        "SKUNo": "AS2959",
        "CASNO": "2052‐ 49‐ 5",
        "ProductName": "TETRA BUTYL  AMMONIUM HYDROXIDE10% IN METHANOL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29239000
    },
    {
        "Id": 3489,
        "SKUNo": "AS2960",
        "CASNO": "311‐ 28‐ 4",
        "ProductName": "TETRABUTYL AMMONIUM IODIDE AR (phase transfer catalyst)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3490,
        "SKUNo": "AS2960",
        "CASNO": "311‐ 28‐ 4",
        "ProductName": "TETRABUTYL AMMONIUM IODIDE AR (phase transfer catalyst)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29031910
    },
    {
        "Id": 3491,
        "SKUNo": "AS2961",
        "CASNO": "79‐ 34‐ 5",
        "ProductName": "1,1,2,2‐TETRACHLOROETHANE LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031910
    },
    {
        "Id": 3492,
        "SKUNo": "AS2961",
        "CASNO": "79‐ 34‐ 5",
        "ProductName": "1,1,2,2‐TETRACHLOROETHANE LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29031910
    },
    {
        "Id": 3493,
        "SKUNo": "AS2962",
        "CASNO": "79‐ 34‐ 5",
        "ProductName": "1,1,2,2‐TETRACHLOROETHANE AR  98.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29031910
    },
    {
        "Id": 3494,
        "SKUNo": "AS2962",
        "CASNO": "79‐ 34‐ 5",
        "ProductName": "1,1,2,2‐TETRACHLOROETHANE AR  98.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29032300
    },
    {
        "Id": 3495,
        "SKUNo": "AS2963",
        "CASNO": "127‐ 18‐ 4",
        "ProductName": "TETRACHLOROETHYLENE LR (Perchloroethylene)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29032300
    },
    {
        "Id": 3496,
        "SKUNo": "AS2963",
        "CASNO": "127‐ 18‐ 4",
        "ProductName": "TETRACHLOROETHYLENE LR (Perchloroethylene)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29032300
    },
    {
        "Id": 3497,
        "SKUNo": "AS2964",
        "CASNO": "127‐ 18‐ 4",
        "ProductName": "TETRACHLOROETHYLENE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29032300
    },
    {
        "Id": 3498,
        "SKUNo": "AS2964",
        "CASNO": "127‐ 18‐ 4",
        "ProductName": "TETRACHLOROETHYLENE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29239000
    },
    {
        "Id": 3499,
        "SKUNo": "AS2965",
        "CASNO": "14937‐42‐9",
        "ProductName": "TETRA DECYLAMMONIUM BROMIDE AR FOR HPLC  ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3500,
        "SKUNo": "AS2965",
        "CASNO": "14937‐42‐9",
        "ProductName": "TETRA DECYLAMMONIUM BROMIDE AR FOR HPLC  ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3501,
        "SKUNo": "AS2965",
        "CASNO": "14937‐42‐9",
        "ProductName": "TETRA DECYLAMMONIUM BROMIDE AR FOR HPLC  ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3502,
        "SKUNo": "AS2966",
        "CASNO": "71‐ 91‐ 0",
        "ProductName": "TETRAETHYL AMMONIUM BROMIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3503,
        "SKUNo": "AS2966",
        "CASNO": "71‐ 91‐ 0",
        "ProductName": "TETRAETHYL AMMONIUM BROMIDE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3504,
        "SKUNo": "AS2966",
        "CASNO": "71‐ 91‐ 0",
        "ProductName": "TETRAETHYL AMMONIUM BROMIDE FOR SYNTHESIS‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29239000
    },
    {
        "Id": 3505,
        "SKUNo": "AS2967",
        "CASNO": "16873‐ 13‐ 5",
        "ProductName": "TETRAETHYL AMMONIUM HYDROGEN SULPHATE FOR HPLC99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3506,
        "SKUNo": "AS2967",
        "CASNO": "16873‐ 13‐ 5",
        "ProductName": "TETRAETHYL AMMONIUM HYDROGEN SULPHATE FOR HPLC99%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3507,
        "SKUNo": "AS2968",
        "CASNO": "68‐05‐3",
        "ProductName": "TETRAETHYL AMMONIUM IODIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3508,
        "SKUNo": "AS2968",
        "CASNO": "68‐05‐3",
        "ProductName": "TETRAETHYL AMMONIUM IODIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3509,
        "SKUNo": "AS2969",
        "CASNO": "4368‐ 51‐ 8",
        "ProductName": "TETRA HEPTYL AMMONIUM BROMIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3510,
        "SKUNo": "AS2969",
        "CASNO": "4368‐ 51‐ 8",
        "ProductName": "TETRA HEPTYL AMMONIUM BROMIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29321100
    },
    {
        "Id": 3511,
        "SKUNo": "AS2970",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN STABILISED FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29321100
    },
    {
        "Id": 3512,
        "SKUNo": "AS2970",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN STABILISED FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29321100
    },
    {
        "Id": 3513,
        "SKUNo": "AS2971",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN  AR  STABILISED SPECIALLY DRIED‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29321100
    },
    {
        "Id": 3514,
        "SKUNo": "AS2971",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN  AR  STABILISED SPECIALLY DRIED‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29321100
    },
    {
        "Id": 3515,
        "SKUNo": "AS2972",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29321100
    },
    {
        "Id": 3516,
        "SKUNo": "AS2972",
        "CASNO": "109‐99‐9",
        "ProductName": "TETRAHYDROFURAN FOR HPLC‐2.5LTR",
        "PACKSIZE": "2.5LTTR",
        "HSNCODE": 29029090
    },
    {
        "Id": 3517,
        "SKUNo": "AS2973",
        "CASNO": "119‐ 64‐ 2",
        "ProductName": "TETRALIN FOR SYNTHESIS 98% (1 2 3 4‐Tetrahydronaphthalene‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29029090
    },
    {
        "Id": 3518,
        "SKUNo": "AS2973",
        "CASNO": "119‐ 64‐ 2",
        "ProductName": "TETRALIN FOR SYNTHESIS 98% (1 2 3 4‐Tetrahydronaphthalene‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29239000
    },
    {
        "Id": 3519,
        "SKUNo": "AS2974",
        "CASNO": "64‐ 20‐ 0",
        "ProductName": "TETRAMETHYL AMMONIUM BROMIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3520,
        "SKUNo": "AS2974",
        "CASNO": "64‐ 20‐ 0",
        "ProductName": "TETRAMETHYL AMMONIUM BROMIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3521,
        "SKUNo": "AS2975",
        "CASNO": "75‐ 57‐ 0",
        "ProductName": "TETRAMETHYL AMMONIUM CHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3522,
        "SKUNo": "AS2975",
        "CASNO": "75‐ 57‐ 0",
        "ProductName": "TETRAMETHYL AMMONIUM CHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3523,
        "SKUNo": "AS2976",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRA METHYL AMMONIUM HYDROXIDE (AQUEOUS SOLUTION) 10% ‐50ML",
        "PACKSIZE": "50ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3524,
        "SKUNo": "AS2976",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRA METHYL AMMONIUM HYDROXIDE (AQUEOUS SOLUTION) 10% ‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3525,
        "SKUNo": "AS2977",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRA METHYL AMMONIUM HYDROXIDE (AQUEOUS SOLUTION) 10% ‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3526,
        "SKUNo": "AS2978",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRAMETHYL AMMONIUM HYDROXIDE SOLUTION 25%‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3527,
        "SKUNo": "AS2978",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRAMETHYL AMMONIUM HYDROXIDE SOLUTION 25%‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3528,
        "SKUNo": "AS2979",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRAMETHYL  AMMONIUM HYDROXIDE SOLUTION 25% IN METHANOL‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3529,
        "SKUNo": "AS2980",
        "CASNO": "75‐ 59‐ 2",
        "ProductName": "TETRAMETHYL  AMMONIUM HYDROXIDE SOLUTION 25% IN METHANOL‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29239000
    },
    {
        "Id": 3530,
        "SKUNo": "AS2981",
        "CASNO": "10424‐65‐4",
        "ProductName": "TETRAMETHYL AMMONIUM HYDROXIDE PENTAHYDRATE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3531,
        "SKUNo": "AS2981",
        "CASNO": "10424‐65‐4",
        "ProductName": "TETRAMETHYL AMMONIUM HYDROXIDE PENTAHYDRATE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3532,
        "SKUNo": "AS2982",
        "CASNO": "75‐ 8‐ 1",
        "ProductName": "TETRAMETHYL AMMONIUM IODIDE  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3533,
        "SKUNo": "AS2982",
        "CASNO": "75‐ 8‐ 1",
        "ProductName": "TETRAMETHYL AMMONIUM IODIDE  AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 3534,
        "SKUNo": "AS2983",
        "CASNO": "54827‐ 17‐ 7",
        "ProductName": "3,3’5.5’‐TETRAMETHYL BENZIDINE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 3535,
        "SKUNo": "AS2983",
        "CASNO": "54827‐ 17‐ 7",
        "ProductName": "3,3’5.5’‐TETRAMETHYL BENZIDINE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29215990
    },
    {
        "Id": 3536,
        "SKUNo": "AS2983",
        "CASNO": "54827‐ 17‐ 7",
        "ProductName": "3,3’5.5’‐TETRAMETHYL BENZIDINE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29212990
    },
    {
        "Id": 3537,
        "SKUNo": "AS2984",
        "CASNO": "110‐ 18‐ 9",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL ETHYLENEDIAMINE (TEMED)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29212990
    },
    {
        "Id": 3538,
        "SKUNo": "AS2984",
        "CASNO": "110‐ 18‐ 9",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL ETHYLENEDIAMINE (TEMED)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29212990
    },
    {
        "Id": 3539,
        "SKUNo": "AS2985",
        "CASNO": "110‐ 18‐ 9",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL ETHYLENEDIAMINE AR (TEMED)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29212990
    },
    {
        "Id": 3540,
        "SKUNo": "AS2985",
        "CASNO": "110‐ 18‐ 9",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL ETHYLENEDIAMINE AR (TEMED)‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29215190
    },
    {
        "Id": 3541,
        "SKUNo": "AS2986",
        "CASNO": "637‐ 01‐ 4",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL‐p‐PHENYLENEDIAMINE DIHYDROCHLORIDE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29215190
    },
    {
        "Id": 3542,
        "SKUNo": "AS2986",
        "CASNO": "637‐ 01‐ 4",
        "ProductName": "N,N,N’,N’‐TETRAMETHYL‐p‐PHENYLENEDIAMINE DIHYDROCHLORIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3543,
        "SKUNo": "AS2987",
        "CASNO": "2564‐83‐2",
        "ProductName": "2,2,6,6 TETRAMETHYLPIPERIDINE‐1‐OXYL 98% (FREE RADICAL) (TEMPO) FOR SYNTHESIS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3544,
        "SKUNo": "AS2987",
        "CASNO": "2564‐83‐2",
        "ProductName": "2,2,6,6 TETRAMETHYLPIPERIDINE‐1‐OXYL 98% (FREE RADICAL) (TEMPO) FOR SYNTHESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3545,
        "SKUNo": "AS2987",
        "CASNO": "2564‐83‐2",
        "ProductName": "2,2,6,6 TETRAMETHYLPIPERIDINE‐1‐OXYL 98% (FREE RADICAL) (TEMPO) FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3546,
        "SKUNo": "AS2988",
        "CASNO": "1184‐ 43‐ 6",
        "ProductName": "TETRANITRO B.T. AR (Tetranitro Blue Tetrazolium Chloride)‐100MG",
        "PACKSIZE": "100MG",
        "HSNCODE": 32049000
    },
    {
        "Id": 3547,
        "SKUNo": "AS2988",
        "CASNO": "1184‐ 43‐ 6",
        "ProductName": "TETRANITRO B.T. AR (Tetranitro Blue Tetrazolium Chloride)‐250MG",
        "PACKSIZE": "250MG",
        "HSNCODE": 29319090
    },
    {
        "Id": 3548,
        "SKUNo": "AS2989",
        "CASNO": "2751‐ 90‐ 8",
        "ProductName": "TETRAPHENYL PHOSPHONIUM BROMIDE‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3549,
        "SKUNo": "AS2989",
        "CASNO": "2751‐ 90‐ 8",
        "ProductName": "TETRAPHENYL PHOSPHONIUM BROMIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3550,
        "SKUNo": "AS2990",
        "CASNO": "1941‐30‐6",
        "ProductName": "TETRA PROPYL AMMONIUM BROMIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29239000
    },
    {
        "Id": 3551,
        "SKUNo": "AS2990",
        "CASNO": "1941‐30‐6",
        "ProductName": "TETRA PROPYL AMMONIUM BROMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3552,
        "SKUNo": "AS2991",
        "CASNO": "4499‐ 86‐ 9",
        "ProductName": "TETRA PROPYL AMMONIUM HYDROXIDE 20% AQUEOUS SOLUTION‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3553,
        "SKUNo": "AS2991",
        "CASNO": "4499‐ 86‐ 9",
        "ProductName": "TETRA PROPYL AMMONIUM HYDROXIDE 20% AQUEOUS SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3554,
        "SKUNo": "AS2992",
        "CASNO": "4499‐ 86‐ 9",
        "ProductName": "TETRA PROPYL AMMONIUM HYDROXIDE 40% AQUEOUS SOLUTION ‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3555,
        "SKUNo": "AS2992",
        "CASNO": "4499‐ 86‐ 9",
        "ProductName": "TETRA PROPYL AMMONIUM HYDROXIDE 40% AQUEOUS SOLUTION ‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3556,
        "SKUNo": "AS2993",
        "CASNO": "288‐ 94‐ 8",
        "ProductName": "1H‐TETRAZOLE FOR DNA SYNTHESIS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3557,
        "SKUNo": "AS2993",
        "CASNO": "288‐ 94‐ 8",
        "ProductName": "1H‐TETRAZOLE FOR DNA SYNTHESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3558,
        "SKUNo": "AS2993",
        "CASNO": "288‐ 94‐ 8",
        "ProductName": "1H‐TETRAZOLE FOR DNA SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3559,
        "SKUNo": "AS2994",
        "CASNO": "298‐ 96‐4",
        "ProductName": "TETRAZOLIUM SALT AR (TTC) (2,3,5 triphenyl tetrazolium chloride)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3560,
        "SKUNo": "AS2994",
        "CASNO": "298‐ 96‐4",
        "ProductName": "TETRAZOLIUM SALT AR (TTC) (2,3,5 triphenyl tetrazolium chloride)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3561,
        "SKUNo": "AS2995",
        "CASNO": "326‐ 91‐ 0",
        "ProductName": "2‐THENOYL TRIFLUOROACETONE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3562,
        "SKUNo": "AS2995",
        "CASNO": "326‐ 91‐ 0",
        "ProductName": "2‐THENOYL TRIFLUOROACETONE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3563,
        "SKUNo": "AS2995",
        "CASNO": "326‐ 91‐ 0",
        "ProductName": "2‐THENOYL TRIFLUOROACETONE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3564,
        "SKUNo": "AS2995",
        "CASNO": "326‐ 91‐ 0",
        "ProductName": "2‐THENOYL TRIFLUOROACETONE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29395900
    },
    {
        "Id": 3565,
        "SKUNo": "AS2996",
        "CASNO": "58‐ 55‐ 9",
        "ProductName": "THEOPHYLLINE (ANHYDROUS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29362210
    },
    {
        "Id": 3566,
        "SKUNo": "AS2997",
        "CASNO": "67‐ 03‐ 8",
        "ProductName": "THIAMINE HYDROCHLORIDE FOR BIOCHEMISTRY (VITAMIN B1)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29362210
    },
    {
        "Id": 3567,
        "SKUNo": "AS2997",
        "CASNO": "67‐ 03‐ 8",
        "ProductName": "THIAMINE HYDROCHLORIDE FOR BIOCHEMISTRY (VITAMIN B1)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29362210
    },
    {
        "Id": 3568,
        "SKUNo": "AS2997",
        "CASNO": "67‐ 03‐ 8",
        "ProductName": "THIAMINE HYDROCHLORIDE FOR BIOCHEMISTRY (VITAMIN B1)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29342000
    },
    {
        "Id": 3569,
        "SKUNo": "AS2998",
        "CASNO": "62‐ 55‐ 5",
        "ProductName": "THIOACETAMIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3570,
        "SKUNo": "AS2998",
        "CASNO": "62‐ 55‐ 5",
        "ProductName": "THIOACETAMIDE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3571,
        "SKUNo": "AS2999",
        "CASNO": "62‐ 55‐ 5",
        "ProductName": "THIOACETAMIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3572,
        "SKUNo": "AS2999",
        "CASNO": "62‐ 55‐ 5",
        "ProductName": "THIOACETAMIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32041329
    },
    {
        "Id": 3573,
        "SKUNo": "AS3000",
        "CASNO": "2390‐ 54‐ 7",
        "ProductName": "THIOFLAVINE T‐5GM",
        "PACKSIZE": "5 GM",
        "HSNCODE": 32041329
    },
    {
        "Id": 3574,
        "SKUNo": "AS3000",
        "CASNO": "2390‐ 54‐ 7",
        "ProductName": "THIOFLAVINE T‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041329
    },
    {
        "Id": 3575,
        "SKUNo": "AS3001",
        "CASNO": "504‐ 17‐ 6",
        "ProductName": "THIOBARBITURIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335200
    },
    {
        "Id": 3576,
        "SKUNo": "AS3001",
        "CASNO": "504‐ 17‐ 6",
        "ProductName": "THIOBARBITURIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3577,
        "SKUNo": "AS3002",
        "CASNO": "68‐ 11‐ 1",
        "ProductName": "THIOGLYCOLLIC ACID LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 3578,
        "SKUNo": "AS3002",
        "CASNO": "68‐ 11‐ 1",
        "ProductName": "THIOGLYCOLLIC ACID LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 3579,
        "SKUNo": "AS3003",
        "CASNO": "70‐ 49‐ 5",
        "ProductName": "THIOMALIC ACID FOR SYNTHESIS (mercaptosuccinic acid)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3580,
        "SKUNo": "AS3003",
        "CASNO": "70‐ 49‐ 5",
        "ProductName": "THIOMALIC ACID FOR SYNTHESIS (mercaptosuccinic acid)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29309070
    },
    {
        "Id": 3581,
        "SKUNo": "AS3004",
        "CASNO": "54‐ 64‐ 8",
        "ProductName": "THIOMERSAL (CONFIRMING TO USP/BP STANDARDS)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29309070
    },
    {
        "Id": 3582,
        "SKUNo": "AS3004",
        "CASNO": "54‐ 64‐ 8",
        "ProductName": "THIOMERSAL (CONFIRMING TO USP/BP STANDARDS)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309070
    },
    {
        "Id": 3583,
        "SKUNo": "AS3004",
        "CASNO": "54‐ 64‐ 8",
        "ProductName": "THIOMERSAL (CONFIRMING TO USP/BP STANDARDS)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3584,
        "SKUNo": "AS3005",
        "CASNO": "78338‐ 22‐ 4",
        "ProductName": "THIONIN (ACETATE) For Microscopy‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3585,
        "SKUNo": "AS3005",
        "CASNO": "78338‐ 22‐ 4",
        "ProductName": "THIONIN (ACETATE) For Microscopy‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28129000
    },
    {
        "Id": 3586,
        "SKUNo": "AS3006",
        "CASNO": "7719‐09‐07",
        "ProductName": "THIONYL CHLORIDE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 28129000
    },
    {
        "Id": 3587,
        "SKUNo": "AS3006",
        "CASNO": "7719‐09‐07",
        "ProductName": "THIONYL CHLORIDE FOR SYNTHESIS‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 3588,
        "SKUNo": "AS3007",
        "CASNO": "108‐ 98‐ 5",
        "ProductName": "THIOPHENOL LR 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29309099
    },
    {
        "Id": 3589,
        "SKUNo": "AS3007",
        "CASNO": "108‐ 98‐ 5",
        "ProductName": "THIOPHENOL LR 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29309099
    },
    {
        "Id": 3590,
        "SKUNo": "AS3008",
        "CASNO": "79‐19‐6",
        "ProductName": "THIOSEMICARBAZIDE FOR SYNTHESIS‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3591,
        "SKUNo": "AS3008",
        "CASNO": "79‐19‐6",
        "ProductName": "THIOSEMICARBAZIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3592,
        "SKUNo": "AS3009",
        "CASNO": "79‐19‐6",
        "ProductName": "THIOSEMICARBAZIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29309099
    },
    {
        "Id": 3593,
        "SKUNo": "AS3009",
        "CASNO": "79‐19‐6",
        "ProductName": "THIOSEMICARBAZIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3594,
        "SKUNo": "AS3010",
        "CASNO": "141‐90‐2",
        "ProductName": "2‐THIOURACIL 98%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3595,
        "SKUNo": "AS3010",
        "CASNO": "141‐90‐2",
        "ProductName": "2‐THIOURACIL 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29309010
    },
    {
        "Id": 3596,
        "SKUNo": "AS3011",
        "CASNO": "62‐ 56‐ 6",
        "ProductName": "THIOUREA (PURIFIED)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29309010
    },
    {
        "Id": 3597,
        "SKUNo": "AS3012",
        "CASNO": "62‐ 56‐ 6",
        "ProductName": "THIOUREA AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3598,
        "SKUNo": "AS3013",
        "CASNO": "3688‐ 92‐ 4",
        "ProductName": "THORIN INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3599,
        "SKUNo": "AS3013",
        "CASNO": "3688‐ 92‐ 4",
        "ProductName": "THORIN INDICATOR AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3600,
        "SKUNo": "AS3014",
        "CASNO": "72‐ 19‐ 5",
        "ProductName": "L‐THREONINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3601,
        "SKUNo": "AS3014",
        "CASNO": "72‐ 19‐ 5",
        "ProductName": "L‐THREONINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3602,
        "SKUNo": "AS3014",
        "CASNO": "72‐ 19‐ 5",
        "ProductName": "L‐THREONINE FOR BIOCHEMISTRY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3603,
        "SKUNo": "AS3015",
        "CASNO": "50‐ 89‐ 5",
        "ProductName": "THYMIDINE FOR  BIOCHEMISTRY 99%‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3604,
        "SKUNo": "AS3015",
        "CASNO": "50‐ 89‐ 5",
        "ProductName": "THYMIDINE FOR  BIOCHEMISTRY 99%‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29214490
    },
    {
        "Id": 3605,
        "SKUNo": "AS3015",
        "CASNO": "50‐ 89‐ 5",
        "ProductName": "THYMIDINE FOR  BIOCHEMISTRY 99%‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29214490
    },
    {
        "Id": 3606,
        "SKUNo": "AS3016",
        "CASNO": "65‐ 71‐ 4",
        "ProductName": "THYMINE FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29214490
    },
    {
        "Id": 3607,
        "SKUNo": "AS3016",
        "CASNO": "65‐ 71‐ 4",
        "ProductName": "THYMINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29071930
    },
    {
        "Id": 3608,
        "SKUNo": "AS3017",
        "CASNO": "89‐ 83‐ 8",
        "ProductName": "THYMOL (CRYSTAL) PURISS ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29071930
    },
    {
        "Id": 3609,
        "SKUNo": "AS3017",
        "CASNO": "89‐ 83‐ 8",
        "ProductName": "THYMOL (CRYSTAL) PURISS ‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3610,
        "SKUNo": "AS3018",
        "CASNO": "76‐ 61‐ 9",
        "ProductName": "THYMOL BLUE INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3611,
        "SKUNo": "AS3018",
        "CASNO": "76‐ 61‐ 9",
        "ProductName": "THYMOL BLUE INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3612,
        "SKUNo": "AS3019",
        "CASNO": "76‐ 61 ‐9",
        "ProductName": "THYMOL BLUE INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 3613,
        "SKUNo": "AS3020",
        "CASNO": "62625‐ 21‐ 2",
        "ProductName": "THYMOL BLUE SODIUM SALT WATER SOLUBLE‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3614,
        "SKUNo": "AS3021",
        "CASNO": "1913‐ 93‐ 5",
        "ProductName": "THYMOLPHTHALEIN COMPLEXON AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3615,
        "SKUNo": "AS3021",
        "CASNO": "1913‐ 93‐ 5",
        "ProductName": "THYMOLPHTHALEIN COMPLEXON AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 3616,
        "SKUNo": "AS3022",
        "CASNO": "125‐20‐2",
        "ProductName": "THYMOLPHTHALEIN INDICATOR AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29322090
    },
    {
        "Id": 3617,
        "SKUNo": "AS3022",
        "CASNO": "125‐ 20‐ 2",
        "ProductName": "THYMOLPHTHALEIN INDICATOR AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3618,
        "SKUNo": "AS3022",
        "CASNO": "125‐ 20‐ 2",
        "ProductName": "THYMOLPHTHALEIN INDICATOR SOLUTION‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 28269000
    },
    {
        "Id": 3619,
        "SKUNo": "AS3023",
        "CASNO": "13814‐ 97‐ 6",
        "ProductName": "TIN FLUOBORATE 50%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3620,
        "SKUNo": "AS3024",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN METAL POWDER AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3621,
        "SKUNo": "AS3024",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN METAL POWDER AR‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3622,
        "SKUNo": "AS3025",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN (METAL) GRANULAR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3623,
        "SKUNo": "AS3025",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN (METAL) GRANULAR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3624,
        "SKUNo": "AS3026",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN (METAL) GRANULAR AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3625,
        "SKUNo": "AS3026",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN (METAL) GRANULAR AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 80070090
    },
    {
        "Id": 3626,
        "SKUNo": "AS3027",
        "CASNO": "7440‐ 31‐ 5",
        "ProductName": "TIN METAL FOIL 99.5%",
        "PACKSIZE": "250GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3627,
        "SKUNo": "AS3028",
        "CASNO": "1829‐ 00‐ 1",
        "ProductName": "TITAN YELLOW GR ‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3628,
        "SKUNo": "AS3029",
        "CASNO": "1829‐ 00‐ 1",
        "ProductName": "TITAN YELLOW AR ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28230010
    },
    {
        "Id": 3629,
        "SKUNo": "AS3030",
        "CASNO": "13463‐ 67‐ 7",
        "ProductName": "TITANIUM DIOXIDE ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28230010
    },
    {
        "Id": 3630,
        "SKUNo": "AS3030",
        "CASNO": "13463‐ 67‐ 7",
        "ProductName": "TITANIUM DIOXIDE‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28230010
    },
    {
        "Id": 3631,
        "SKUNo": "AS3030",
        "CASNO": "13463‐ 67‐ 7",
        "ProductName": "TITANIUM DIOXIDE‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28230010
    },
    {
        "Id": 3632,
        "SKUNo": "AS3031",
        "CASNO": "13463‐ 67‐ 7",
        "ProductName": "TITANIUM DIOXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28230010
    },
    {
        "Id": 3633,
        "SKUNo": "AS3032",
        "CASNO": "7440‐ 32‐ 6",
        "ProductName": "TITANIUM METAL POWDER AR ( 150‐200MESH) 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29420090
    },
    {
        "Id": 3634,
        "SKUNo": "AS3033",
        "CASNO": "7695‐ 91‐ 2",
        "ProductName": "TITANIUM TRICHLORIDE SOLUTION 15% FOR SYNTHESIS‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29420090
    },
    {
        "Id": 3635,
        "SKUNo": "AS3033",
        "CASNO": "7695‐ 91‐ 2",
        "ProductName": "TITANIUM TRICHLORIDE SOLUTION 15% FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29362800
    },
    {
        "Id": 3636,
        "SKUNo": "AS3034",
        "CASNO": "7695‐ 91‐ 2",
        "ProductName": "DL‐a‐TOCOPHEROL  ACETATE  FOR BIOCHEMISTRY(vit‐E)‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 29362800
    },
    {
        "Id": 3637,
        "SKUNo": "AS3035",
        "CASNO": "119‐93‐7",
        "ProductName": "o‐TOLIDINE(REAGENT) FOR CHLORINE ESTIMATION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29214330
    },
    {
        "Id": 3638,
        "SKUNo": "AS3036",
        "CASNO": "119‐93‐7",
        "ProductName": "o‐TOLIDINE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214330
    },
    {
        "Id": 3639,
        "SKUNo": "AS3036",
        "CASNO": "119‐93‐7",
        "ProductName": "o‐TOLIDINE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214330
    },
    {
        "Id": 3640,
        "SKUNo": "AS3037",
        "CASNO": "119‐93‐7",
        "ProductName": "o‐TOLIDINE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29214330
    },
    {
        "Id": 3641,
        "SKUNo": "AS3037",
        "CASNO": "119‐93‐7",
        "ProductName": "o‐TOLIDINE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214330
    },
    {
        "Id": 3642,
        "SKUNo": "AS3038",
        "CASNO": "612‐ 82‐ 8",
        "ProductName": "o‐TOLIDINE DIHYDROCHLORIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29214330
    },
    {
        "Id": 3643,
        "SKUNo": "AS3038",
        "CASNO": "612‐ 82‐ 8",
        "ProductName": "o‐TOLIDINE DIHYDROCHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3644,
        "SKUNo": "AS3039",
        "CASNO": "",
        "ProductName": "TOLLEN'S REAGENT‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29023000
    },
    {
        "Id": 3645,
        "SKUNo": "AS3040",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29023000
    },
    {
        "Id": 3646,
        "SKUNo": "AS3040",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE LR‐2.5LTR",
        "PACKSIZE": "2.5LT",
        "HSNCODE": 29023000
    },
    {
        "Id": 3647,
        "SKUNo": "AS3041",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29023000
    },
    {
        "Id": 3648,
        "SKUNo": "AS3041",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE AR‐2.5LTR",
        "PACKSIZE": "2.5LT",
        "HSNCODE": 29023000
    },
    {
        "Id": 3649,
        "SKUNo": "AS3042",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE(METHANOL FREE)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29023000
    },
    {
        "Id": 3650,
        "SKUNo": "AS3042",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE (METHANOL FREE)‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29023000
    },
    {
        "Id": 3651,
        "SKUNo": "AS3043",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE FOR HPLC / UV SPECTOSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29023000
    },
    {
        "Id": 3652,
        "SKUNo": "AS3043",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE FOR HPLC / UV SPECTOSCOPY‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29023000
    },
    {
        "Id": 3653,
        "SKUNo": "AS3044",
        "CASNO": "108‐ 88‐ 3",
        "ProductName": "TOLUENE SPECIALLY DRIED AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29041090
    },
    {
        "Id": 3654,
        "SKUNo": "AS3045",
        "CASNO": "6192‐ 52‐ 5",
        "ProductName": "p‐TOLUENE SULFONIC ACID FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29041090
    },
    {
        "Id": 3655,
        "SKUNo": "AS3045",
        "CASNO": "6192‐ 52‐ 5",
        "ProductName": "p‐TOLUENE SULFONIC ACID FOR SYNTHESIS‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29041090
    },
    {
        "Id": 3656,
        "SKUNo": "AS3046",
        "CASNO": "98‐ 59‐ 9",
        "ProductName": "4‐TOLUENESULFONYL CHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 3657,
        "SKUNo": "AS3047",
        "CASNO": "118‐ 90‐ 1",
        "ProductName": "o‐TOLUIC ACID 98% (2‐Methylbenzoic acid)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 3658,
        "SKUNo": "AS3048",
        "CASNO": "99‐94‐5",
        "ProductName": "p‐TOLUIC ACID 99% (4‐Methylbenzoic acid)‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29214350
    },
    {
        "Id": 3659,
        "SKUNo": "AS3048",
        "CASNO": "99‐ 94‐ 5",
        "ProductName": "p‐TOLUIC ACID 99% (4‐Methylbenzoic acid)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29214350
    },
    {
        "Id": 3660,
        "SKUNo": "AS3049",
        "CASNO": "540‐ 23 ‐8",
        "ProductName": "p‐TOLUIDINE HYDROCHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29214350
    },
    {
        "Id": 3661,
        "SKUNo": "AS3049",
        "CASNO": "540‐ 23 ‐8",
        "ProductName": "p‐TOLUIDINE HYDROCHLORIDE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3662,
        "SKUNo": "AS3050",
        "CASNO": "6586‐04‐5",
        "ProductName": "TOLUIDINE BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3663,
        "SKUNo": "AS3050",
        "CASNO": "6586‐04‐5",
        "ProductName": "TOLUIDINE BLUE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3664,
        "SKUNo": "AS3051",
        "CASNO": "              ",
        "ProductName": "TOPFER’S REAGENT (SOLUTION)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3665,
        "SKUNo": "AS3052",
        "CASNO": "",
        "ProductName": "TOTAL HARDNESS INDICATOR TABLETS ‐100TAB",
        "PACKSIZE": "100TAB",
        "HSNCODE": 29400000
    },
    {
        "Id": 3666,
        "SKUNo": "AS3053",
        "CASNO": "6138‐23‐4",
        "ProductName": "TREHALOSE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 3667,
        "SKUNo": "AS3053",
        "CASNO": "6138‐23‐4",
        "ProductName": "TREHALOSE FOR BIOCHEMISTRY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 3668,
        "SKUNo": "AS3053",
        "CASNO": "6138‐23‐4",
        "ProductName": "TREHALOSE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 3669,
        "SKUNo": "AS3054",
        "CASNO": "102‐ 82‐ 9",
        "ProductName": "TRIBUTYLAMINE FOR SYNTHESIS99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 3670,
        "SKUNo": "AS3054",
        "CASNO": "102‐ 82‐ 9",
        "ProductName": "TRIBUTYLAMINE FOR SYNTHESIS99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29332990
    },
    {
        "Id": 3671,
        "SKUNo": "AS3055",
        "CASNO": "288‐ 88‐ 0",
        "ProductName": "1,2,4 ‐TRIAZOLE FOR SYNTHESIS 98%‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29332990
    },
    {
        "Id": 3672,
        "SKUNo": "AS3055",
        "CASNO": "288‐ 88‐ 0",
        "ProductName": "1,2,4 ‐TRIAZOLE FOR SYNTHESIS 98%‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3673,
        "SKUNo": "AS3056",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLORO ACETIC  ACID‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3674,
        "SKUNo": "AS3056",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLORO ACETIC  ACID‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3675,
        "SKUNo": "AS3057",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLOROACETIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3676,
        "SKUNo": "AS3057",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLOROACETIC ACID AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3677,
        "SKUNo": "AS3058",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLORO ACETIC ACID ACS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29154030
    },
    {
        "Id": 3678,
        "SKUNo": "AS3059",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLOROACETIC ACID AR 20% W/V‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29154030
    },
    {
        "Id": 3679,
        "SKUNo": "AS3059",
        "CASNO": "76‐ 03‐ 9",
        "ProductName": "TRICHLOROACETIC ACID AR 10% W/V‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 29032200
    },
    {
        "Id": 3680,
        "SKUNo": "AS3060",
        "CASNO": "71‐55‐6",
        "ProductName": "1,1,1 TRICHLORO ETHANE 99%‐25ML",
        "PACKSIZE": "25ML",
        "HSNCODE": 29031910
    },
    {
        "Id": 3681,
        "SKUNo": "AS3061",
        "CASNO": "115‐20‐8",
        "ProductName": "2,2,2‐TRICHLOROETHANOL 98% BY HPLC ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29055998
    },
    {
        "Id": 3682,
        "SKUNo": "AS3062",
        "CASNO": "79‐ 01‐ 6",
        "ProductName": "TRICHLOROETHYLENE LR 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29032200
    },
    {
        "Id": 3683,
        "SKUNo": "AS3062",
        "CASNO": "79‐ 01‐ 6",
        "ProductName": "TRICHLOROETHYLENE LR 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29032200
    },
    {
        "Id": 3684,
        "SKUNo": "AS3063",
        "CASNO": "79‐ 01‐ 6",
        "ProductName": "TRICHLOROETHYLENE AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29032200
    },
    {
        "Id": 3685,
        "SKUNo": "AS3063",
        "CASNO": "79‐ 01‐ 6",
        "ProductName": "TRICHLOROETHYLENE AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29225090
    },
    {
        "Id": 3686,
        "SKUNo": "AS3064",
        "CASNO": "5704‐04‐1",
        "ProductName": "TRICINE (N‐TRIS(HYDROXYMETHYL)METHYL GLYCINE)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3687,
        "SKUNo": "AS3064",
        "CASNO": "5704‐04‐1",
        "ProductName": "TRICINE (N‐TRIS(HYDROXYMETHYL)METHYL GLYCINE)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29199050
    },
    {
        "Id": 3688,
        "SKUNo": "AS3065",
        "CASNO": "1330‐ 78‐ 5",
        "ProductName": "TRI‐CRESYL PHOSPHATE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29199050
    },
    {
        "Id": 3689,
        "SKUNo": "AS3065",
        "CASNO": "1330‐ 78‐ 5",
        "ProductName": "TRI‐CRESYL PHOSPHATE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29221310
    },
    {
        "Id": 3690,
        "SKUNo": "AS3066",
        "CASNO": "102‐ 71‐ 6",
        "ProductName": "TRIETHANOLAMINE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29221310
    },
    {
        "Id": 3691,
        "SKUNo": "AS3066",
        "CASNO": "102‐ 71‐ 6",
        "ProductName": "TRIETHANOLAMINE LR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29221310
    },
    {
        "Id": 3692,
        "SKUNo": "AS3067",
        "CASNO": "102‐ 71‐ 6",
        "ProductName": "TRIETHANOLAMINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29221310
    },
    {
        "Id": 3693,
        "SKUNo": "AS3067",
        "CASNO": "102‐ 71‐ 6",
        "ProductName": "TRIETHANOLAMINE AR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29215990
    },
    {
        "Id": 3694,
        "SKUNo": "AS3068",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29215990
    },
    {
        "Id": 3695,
        "SKUNo": "AS3068",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE LR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29215990
    },
    {
        "Id": 3696,
        "SKUNo": "AS3069",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29215990
    },
    {
        "Id": 3697,
        "SKUNo": "AS3069",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE AR‐2.5LTR",
        "PACKSIZE": "2.5LIT",
        "HSNCODE": 29211990
    },
    {
        "Id": 3698,
        "SKUNo": "AS3070",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE HPLC‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29211990
    },
    {
        "Id": 3699,
        "SKUNo": "AS3070",
        "CASNO": "121‐ 44‐ 8",
        "ProductName": "TRIETHYLAMINE HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29211990
    },
    {
        "Id": 3700,
        "SKUNo": "AS3071",
        "CASNO": "112‐ 27‐ 6",
        "ProductName": "TRIETHYLENE GLYCOL FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29094900
    },
    {
        "Id": 3701,
        "SKUNo": "AS3071",
        "CASNO": "112‐ 27‐ 6",
        "ProductName": "TRIETHYLENE GLYCOL FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29094900
    },
    {
        "Id": 3702,
        "SKUNo": "AS3072",
        "CASNO": "76‐ 05‐ 1",
        "ProductName": "TRIFLUOROACETIC ACID‐500ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3703,
        "SKUNo": "AS3072",
        "CASNO": "76‐ 05‐ 1",
        "ProductName": "TRIFLUOROACETIC ACID‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3704,
        "SKUNo": "AS3072",
        "CASNO": "76‐ 05‐ 1",
        "ProductName": "TRIFLUOROACETIC ACID‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 3705,
        "SKUNo": "AS3073",
        "CASNO": "76‐ 05‐ 1",
        "ProductName": "TRIFLUOROACETIC ACID AR‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3706,
        "SKUNo": "AS3074",
        "CASNO": "88‐ 82‐ 4",
        "ProductName": "2.3.5‐TRIIODOBENZOIC ACID AR(TIBA)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29163990
    },
    {
        "Id": 3707,
        "SKUNo": "AS3075",
        "CASNO": "593‐81‐7",
        "ProductName": "TRIMETHYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29211190
    },
    {
        "Id": 3708,
        "SKUNo": "AS3075",
        "CASNO": "593‐81‐7",
        "ProductName": "TRIMETHYLAMINE HYDROCHLORIDE FOR SYNTHESIS‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29211190
    },
    {
        "Id": 3709,
        "SKUNo": "AS3076",
        "CASNO": "149‐ 73‐ 5",
        "ProductName": "TRIMETHYL ORTHOFORMATE FOR SYNTHESIS 98%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29159090
    },
    {
        "Id": 3710,
        "SKUNo": "AS3076",
        "CASNO": "149‐ 73‐ 5",
        "ProductName": "TRIMETHYL ORTHOFORMATE FOR SYNTHESIS 98%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29159090
    },
    {
        "Id": 3711,
        "SKUNo": "AS3077",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE (iso‐Octane) 99.5%‐ 500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29011000
    },
    {
        "Id": 3712,
        "SKUNo": "AS3077",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE (iso‐Octane) 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29011000
    },
    {
        "Id": 3713,
        "SKUNo": "AS3078",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE (iso‐Octane) FOR HPLC‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 29011000
    },
    {
        "Id": 3714,
        "SKUNo": "AS3078",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE (iso‐Octane) FOR HPLC‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29011000
    },
    {
        "Id": 3715,
        "SKUNo": "AS3079",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE AR 99.5%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29011000
    },
    {
        "Id": 3716,
        "SKUNo": "AS3079",
        "CASNO": "540‐ 84‐ 1",
        "ProductName": "2,2,4‐TRIMETHYLPENTANE AR 99.5%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29011000
    },
    {
        "Id": 3717,
        "SKUNo": "AS3080",
        "CASNO": "78‐ 50‐ 2",
        "ProductName": "TRI‐n‐OCTYLPHOSPHINE OXIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3718,
        "SKUNo": "AS3080",
        "CASNO": "78‐ 50‐ 2",
        "ProductName": "TRI‐n‐OCTYLPHOSPHINE OXIDE AR‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3719,
        "SKUNo": "AS3081",
        "CASNO": "603‐ 35‐ 0",
        "ProductName": "TRIPHENYL PHOSPHINE FOR SYNTHESIS‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3720,
        "SKUNo": "AS3081",
        "CASNO": "603‐ 35‐ 0",
        "ProductName": "TRIPHENYL PHOSPHINE FOR SYNTHESIS‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 29319090
    },
    {
        "Id": 3721,
        "SKUNo": "AS3082",
        "CASNO": "1096‐ 80‐ 6",
        "ProductName": "2,3,5‐TRIPHENYL TETRAZOLIUM BROMIDE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3722,
        "SKUNo": "AS3083",
        "CASNO": "3682‐ 35‐ 7",
        "ProductName": "2,4,6‐TRI‐(2‐PYRIDYL)1,3,5‐TRIAZINE AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3723,
        "SKUNo": "AS3083",
        "CASNO": "3682‐ 35‐ 7",
        "ProductName": "2,4,6‐TRI‐(2‐PYRIDYL)1,3,5‐TRIAZINE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29333990
    },
    {
        "Id": 3724,
        "SKUNo": "AS3084",
        "CASNO": "77‐ 86‐ 1",
        "ProductName": "TRIS BUFFER LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3725,
        "SKUNo": "AS3084",
        "CASNO": "77‐ 86‐ 1",
        "ProductName": "TRIS BUFFER LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3726,
        "SKUNo": "AS3084",
        "CASNO": "77‐ 86‐ 1",
        "ProductName": "TRIS BUFFER LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 29225090
    },
    {
        "Id": 3727,
        "SKUNo": "AS3085",
        "CASNO": "77‐ 86‐ 1",
        "ProductName": "TRIS BUFFER AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3728,
        "SKUNo": "AS3085",
        "CASNO": "77‐ 86‐ 1",
        "ProductName": "TRIS BUFFER AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3729,
        "SKUNo": "AS3086",
        "CASNO": "1185‐ 53‐ 1",
        "ProductName": "TRIS‐HYDROCHLORIDE AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3730,
        "SKUNo": "AS3086",
        "CASNO": "1185‐ 53‐ 1",
        "ProductName": "TRIS‐HYDROCHLORIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29225090
    },
    {
        "Id": 3731,
        "SKUNo": "AS3087",
        "CASNO": "100‐ 85‐ 6",
        "ProductName": "TRITON B FOR SYNTHESIS (Benzyltrimethylammonium hydroxide)‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29239000
    },
    {
        "Id": 3732,
        "SKUNo": "AS3087",
        "CASNO": "100‐ 85‐ 6",
        "ProductName": "TRITON B FOR SYNTHESIS (Benzyltrimethylammonium hydroxide)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29239000
    },
    {
        "Id": 3733,
        "SKUNo": "AS3088",
        "CASNO": "9002‐ 93‐ 1",
        "ProductName": "TRITON X 100‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34021300
    },
    {
        "Id": 3734,
        "SKUNo": "AS3088",
        "CASNO": "9002‐ 93‐ 1",
        "ProductName": "TRITON X 100‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 34021300
    },
    {
        "Id": 3735,
        "SKUNo": "AS3089",
        "CASNO": "547‐57‐9",
        "ProductName": "TROPEOLIN 0 FOR MICROSCOPY C.I. NO.14270‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 3736,
        "SKUNo": "AS3089",
        "CASNO": "547‐57‐9",
        "ProductName": "TROPEOLIN 0 FOR MICROSCOPY C.I. NO.14270‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 3737,
        "SKUNo": "AS3090",
        "CASNO": "633‐ 96‐ 5",
        "ProductName": "TROPEOLIN 000 C. I. NO. 15510‐ 25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 3738,
        "SKUNo": "AS3090",
        "CASNO": "633‐ 96‐ 5",
        "ProductName": "TROPEOLIN 000 C. I. NO. 15510‐ 100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32129090
    },
    {
        "Id": 3739,
        "SKUNo": "AS3091",
        "CASNO": "72‐ 57‐ 1",
        "ProductName": "TRYPAN BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3740,
        "SKUNo": "AS3091",
        "CASNO": "72‐ 57‐ 1",
        "ProductName": "TRYPAN BLUE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3741,
        "SKUNo": "AS3092",
        "CASNO": "9002‐07‐7",
        "ProductName": "TRYPSIN U/G 2000‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079099
    },
    {
        "Id": 3742,
        "SKUNo": "AS3092",
        "CASNO": "9002‐07‐7",
        "ProductName": "TRYPSIN U/G 2000‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35079099
    },
    {
        "Id": 3743,
        "SKUNo": "AS3093",
        "CASNO": "9002‐07‐7",
        "ProductName": "TRYPSIN 1: 250‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 35079099
    },
    {
        "Id": 3744,
        "SKUNo": "AS3093",
        "CASNO": "9002‐07‐7",
        "ProductName": "TRYPSIN 1: 250‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 35079099
    },
    {
        "Id": 3745,
        "SKUNo": "AS3094",
        "CASNO": "73049‐ 73‐ 7",
        "ProductName": "TRYPTONE BACTERIOLOGICAL ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 3746,
        "SKUNo": "AS3095",
        "CASNO": "              ",
        "ProductName": "TRYPTOSE BACTERIOLOGICAL‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 35040010
    },
    {
        "Id": 3747,
        "SKUNo": "AS3096",
        "CASNO": "73‐ 22‐ 3",
        "ProductName": "L‐TRYPTOPHAN ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3748,
        "SKUNo": "AS3096",
        "CASNO": "73‐ 22‐ 3",
        "ProductName": "L‐TRYPTOPHAN ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3749,
        "SKUNo": "AS3097",
        "CASNO": "54‐ 12 ‐ 6",
        "ProductName": "DL‐TRYPTOPHAN ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3750,
        "SKUNo": "AS3097",
        "CASNO": "54‐ 12 ‐ 6",
        "ProductName": "DL‐TRYPTOPHAN ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29339900
    },
    {
        "Id": 3751,
        "SKUNo": "AS3098",
        "CASNO": "60‐ 19‐5",
        "ProductName": "TYRAMINE HYDROCHLORIDE FOR SYNTHESIS‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29211990
    },
    {
        "Id": 3752,
        "SKUNo": "AS3098",
        "CASNO": "60‐ 19‐5",
        "ProductName": "TYRAMINE HYDROCHLORIDE FOR SYNTHESIS‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 3753,
        "SKUNo": "AS3099",
        "CASNO": "7440‐ 33‐ 7",
        "ProductName": "TUNGSTEN POWDER 99% ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 81019990
    },
    {
        "Id": 3754,
        "SKUNo": "AS3099",
        "CASNO": "7440‐ 33‐ 7",
        "ProductName": "TUNGSTEN POWDER 99% ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 81019990
    },
    {
        "Id": 3755,
        "SKUNo": "AS3100",
        "CASNO": "7783‐03‐1",
        "ProductName": "TUNGSTIC ACID  AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28259090
    },
    {
        "Id": 3756,
        "SKUNo": "AS3100",
        "CASNO": "              ",
        "ProductName": "TURK’S SOLUTION‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3757,
        "SKUNo": "AS3101",
        "CASNO": "8006‐64‐2",
        "ProductName": "TURPENTINE OIL LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38051010
    },
    {
        "Id": 3758,
        "SKUNo": "AS3101",
        "CASNO": "8006‐64‐2",
        "ProductName": "TURPENTINE OIL LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 38051010
    },
    {
        "Id": 3759,
        "SKUNo": "AS3102",
        "CASNO": "9005‐ 65‐ 6",
        "ProductName": "TWEEN® 20(POLYOXYETHYLENE(20) Sorbitan Monolaurate‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34029099
    },
    {
        "Id": 3760,
        "SKUNo": "AS3102",
        "CASNO": "9005‐ 65‐ 6",
        "ProductName": "TWEEN® 20(POLYOXYETHYLENE(20) Sorbitan Monolaurate‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 34029099
    },
    {
        "Id": 3761,
        "SKUNo": "AS3103",
        "CASNO": "9005‐ 65‐ 6",
        "ProductName": "TWEEN® 80 (POLYOXYETHYLENE(20) Sorbitan Monolaurate‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 34029099
    },
    {
        "Id": 3762,
        "SKUNo": "AS3103",
        "CASNO": "9005‐ 65‐ 6",
        "ProductName": "TWEEN® 80 (POLYOXYETHYLENE(20) Sorbitan Monolaurate‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 34029099
    },
    {
        "Id": 3763,
        "SKUNo": "AS3103",
        "CASNO": "9005‐ 65‐ 6",
        "ProductName": "TWEEN® 80 (POLYOXYETHYLENE(20) Sorbitan Monolaurate‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 34029099
    },
    {
        "Id": 3764,
        "SKUNo": "AS3104",
        "CASNO": "60‐ 18‐ 4",
        "ProductName": "L‐TYROSINE FOR BIOCHEMISTRY ‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 3765,
        "SKUNo": "AS3104",
        "CASNO": "60‐ 18‐ 4",
        "ProductName": "L‐TYROSINE FOR BIOCHEMISTRY ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 3766,
        "SKUNo": "AS3104",
        "CASNO": "60‐ 18‐ 4",
        "ProductName": "L‐TYROSINE FOR BIOCHEMISTRY ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29222990
    },
    {
        "Id": 3767,
        "SKUNo": "AS3105",
        "CASNO": "              ",
        "ProductName": "UNIVERSAL INDICATOR SOLUTION Ph 4 ‐ 11‐125ML",
        "PACKSIZE": "125ML",
        "HSNCODE": 38220000
    },
    {
        "Id": 3768,
        "SKUNo": "AS3105",
        "CASNO": "                ",
        "ProductName": "UNIVERSAL INDICATOR SOLUTION Ph 4 ‐ 12‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220000
    },
    {
        "Id": 3769,
        "SKUNo": "AS3106",
        "CASNO": "              ",
        "ProductName": "UNIVERSAL INDICATOR PAPERS PH 1‐10 (INCLUDING COLOURSCALE)‐10BKTS",
        "PACKSIZE": "10BKTS",
        "HSNCODE": 38220000
    },
    {
        "Id": 3770,
        "SKUNo": "AS3107",
        "CASNO": "66‐ 22‐ 8",
        "ProductName": "URACIL FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3771,
        "SKUNo": "AS3107",
        "CASNO": "66‐ 22‐ 8",
        "ProductName": "URACIL FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29335990
    },
    {
        "Id": 3772,
        "SKUNo": "AS3108",
        "CASNO": "6159‐44‐0",
        "ProductName": "URANYL ACETATE DIHYDRATE FOR MICROSCOPY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 28443010
    },
    {
        "Id": 3773,
        "SKUNo": "AS3108",
        "CASNO": "6159‐44‐0",
        "ProductName": "URANYL ACETATE DIHYDRATE FOR MICROSCOPY‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28443010
    },
    {
        "Id": 3774,
        "SKUNo": "AS3109",
        "CASNO": "57‐ 13‐ 6",
        "ProductName": "UREA LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31021000
    },
    {
        "Id": 3775,
        "SKUNo": "AS3109",
        "CASNO": "57‐ 13‐ 6",
        "ProductName": "UREA LR‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 31021000
    },
    {
        "Id": 3776,
        "SKUNo": "AS3110",
        "CASNO": "57‐ 13‐ 6",
        "ProductName": "UREA AR FOR BIOCHEMICAL PURPOSE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 31021000
    },
    {
        "Id": 3777,
        "SKUNo": "AS3111",
        "CASNO": "4861‐ 19‐ 2",
        "ProductName": "UREA PHOSPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3778,
        "SKUNo": "AS3112",
        "CASNO": "69‐ 93‐ 2",
        "ProductName": "URIC ACID AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3779,
        "SKUNo": "AS3112",
        "CASNO": "69‐ 93‐ 2",
        "ProductName": "URIC ACID AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28352990
    },
    {
        "Id": 3780,
        "SKUNo": "AS3113",
        "CASNO": "",
        "ProductName": "URIC ACID REAGENT FOLIN / NEWTON‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29349900
    },
    {
        "Id": 3781,
        "SKUNo": "AS3114",
        "CASNO": "58‐ 96‐ 8",
        "ProductName": "URIDINE 99%  for biochemistry‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3782,
        "SKUNo": "AS3114",
        "CASNO": "58‐ 96‐ 8",
        "ProductName": "URIDINE 99%  for biochemistry‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3783,
        "SKUNo": "AS3114",
        "CASNO": "58‐ 96‐ 8",
        "ProductName": "URIDINE 99%  for biochemistry‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29156020
    },
    {
        "Id": 3784,
        "SKUNo": "AS3115",
        "CASNO": "109‐ 52‐ 4",
        "ProductName": "n‐VALERIC ACID 99%‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29156020
    },
    {
        "Id": 3785,
        "SKUNo": "AS3115",
        "CASNO": "109‐ 52‐ 4",
        "ProductName": "n‐VALERIC ACID 99%‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29156020
    },
    {
        "Id": 3786,
        "SKUNo": "AS3116",
        "CASNO": "72‐18‐4",
        "ProductName": "L‐VALINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 3787,
        "SKUNo": "AS3116",
        "CASNO": "72‐18‐4",
        "ProductName": "L‐VALINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 3788,
        "SKUNo": "AS3116",
        "CASNO": "72‐18‐4",
        "ProductName": "L‐VALINE FOR BIOCHEMISTRY‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 29224990
    },
    {
        "Id": 3789,
        "SKUNo": "AS3117",
        "CASNO": "516‐ 06‐ 3",
        "ProductName": "DL‐VALINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 3790,
        "SKUNo": "AS3117",
        "CASNO": "516‐ 06‐ 3",
        "ProductName": "DL‐VALINE FOR BIOCHEMISTRY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29224990
    },
    {
        "Id": 3791,
        "SKUNo": "AS3118",
        "CASNO": "1314‐ 62‐ 1",
        "ProductName": "VANADIUM PENTOXIDE LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28253010
    },
    {
        "Id": 3792,
        "SKUNo": "AS3118",
        "CASNO": "1314‐ 62‐ 1",
        "ProductName": "VANADIUM PENTOXIDE LR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28253010
    },
    {
        "Id": 3793,
        "SKUNo": "AS3119",
        "CASNO": "1314‐ 62‐ 1",
        "ProductName": "VANADIUM PENTOXIDE AR ‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28253010
    },
    {
        "Id": 3794,
        "SKUNo": "AS3119",
        "CASNO": "1314‐ 62‐ 1",
        "ProductName": "VANADIUM PENTOXIDE AR ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28253010
    },
    {
        "Id": 3795,
        "SKUNo": "AS3120",
        "CASNO": "123334 ‐ 20 ‐ 3",
        "ProductName": "VANADYL SULPHATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28332990
    },
    {
        "Id": 3796,
        "SKUNo": "AS3121",
        "CASNO": "",
        "ProductName": "VAN GIESON II SOLUTION FOR MICROSCOPY‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3797,
        "SKUNo": "AS3122",
        "CASNO": "121‐33‐5",
        "ProductName": "VANILLIN FOR SYNTHESIS LR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29124100
    },
    {
        "Id": 3798,
        "SKUNo": "AS3122",
        "CASNO": "121‐33‐5",
        "ProductName": "VANILLIN FOR SYNTHESIS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29124100
    },
    {
        "Id": 3799,
        "SKUNo": "AS3123",
        "CASNO": "121‐33‐5",
        "ProductName": "VANILLIN AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29124100
    },
    {
        "Id": 3800,
        "SKUNo": "AS3123",
        "CASNO": "121‐33‐5",
        "ProductName": "VANILLIN AR‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29124100
    },
    {
        "Id": 3801,
        "SKUNo": "AS3124",
        "CASNO": "2580‐ 56‐ 5",
        "ProductName": "VICTORIA BLUE FOR MICROSCOPY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041352
    },
    {
        "Id": 3802,
        "SKUNo": "AS3124",
        "CASNO": "2580‐ 56‐ 5",
        "ProductName": "VICTORIA BLUE FOR MICROSCOPY‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 38220090
    },
    {
        "Id": 3803,
        "SKUNo": "AS3125",
        "CASNO": "",
        "ProductName": "WANKLYN SOLUTION‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3804,
        "SKUNo": "AS3126",
        "CASNO": "7732‐ 18‐ 5",
        "ProductName": "WATER DISTILLED‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 22011010
    },
    {
        "Id": 3805,
        "SKUNo": "AS3127",
        "CASNO": "7732‐ 18‐ 5",
        "ProductName": "WATER FOR HPLC &SPECTROSCOPY‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28539010
    },
    {
        "Id": 3806,
        "SKUNo": "AS3127",
        "CASNO": "7732‐ 18‐ 5",
        "ProductName": "WATER FOR HPLC &SPECTROSCOPY‐5LTR",
        "PACKSIZE": "5LTR",
        "HSNCODE": 28539010
    },
    {
        "Id": 3807,
        "SKUNo": "AS3128",
        "CASNO": "7732‐ 18‐ 5",
        "ProductName": "WATER ELECTRONIC GRADE‐1LTR",
        "PACKSIZE": "1LTR",
        "HSNCODE": 28539010
    },
    {
        "Id": 3808,
        "SKUNo": "AS3129",
        "CASNO": "          ",
        "ProductName": "W.B.C. DILUTING FLUID(TRUCK’S)‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3809,
        "SKUNo": "AS3130",
        "CASNO": "68988‐ 92‐ 1",
        "ProductName": "WRIGHT’S STAIN(for microscopical staining)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3810,
        "SKUNo": "AS3130",
        "CASNO": "68988‐ 92‐ 1",
        "ProductName": "WRIGHT’S STAIN(for microscopical staining)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 32049000
    },
    {
        "Id": 3811,
        "SKUNo": "AS3131",
        "CASNO": "68988‐ 92‐ 1",
        "ProductName": "WRIGHT’S STAINING SOLUTION FOR MICROSCOPY ‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 38220090
    },
    {
        "Id": 3812,
        "SKUNo": "AS3132",
        "CASNO": "11138‐ 66‐ 2",
        "ProductName": "XANTHAN GUM LR (FOOD GRADE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 13019034
    },
    {
        "Id": 3813,
        "SKUNo": "AS3133",
        "CASNO": "69‐ 89‐ 6",
        "ProductName": "XANTHINE FOR BIOCHEMISTRY‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 27075000
    },
    {
        "Id": 3814,
        "SKUNo": "AS3133",
        "CASNO": "69‐ 89‐ 6",
        "ProductName": "XANTHINE FOR BIOCHEMISTRY‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 27075000
    },
    {
        "Id": 3815,
        "SKUNo": "AS3134",
        "CASNO": "1330‐ 20‐ 7",
        "ProductName": "XYLENE LR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27075000
    },
    {
        "Id": 3816,
        "SKUNo": "AS3134",
        "CASNO": "1330‐ 20‐ 7",
        "ProductName": "XYLENE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27075000
    },
    {
        "Id": 3817,
        "SKUNo": "AS3135",
        "CASNO": "1330‐ 20‐ 7",
        "ProductName": "XYLENE AR‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 27075000
    },
    {
        "Id": 3818,
        "SKUNo": "AS3135",
        "CASNO": "1330‐ 20‐ 7",
        "ProductName": "XYLENE AR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 27075000
    },
    {
        "Id": 3819,
        "SKUNo": "AS3136",
        "CASNO": "95‐ 47‐ 6",
        "ProductName": "o‐XYLENE FOR SYNTHESIS‐500ML",
        "PACKSIZE": "500ML",
        "HSNCODE": 29024100
    },
    {
        "Id": 3820,
        "SKUNo": "AS3136",
        "CASNO": "95‐ 47‐ 6",
        "ProductName": "o‐XYLENE FOR SYNTHESIS",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29024100
    },
    {
        "Id": 3821,
        "SKUNo": "AS3137",
        "CASNO": "2650‐ 17‐ 1",
        "ProductName": "XYLENE CYANOL FF (REDOX INDICATOR)‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 32041979
    },
    {
        "Id": 3822,
        "SKUNo": "AS3137",
        "CASNO": "2650‐ 17‐ 1",
        "ProductName": "XYLENE CYANOL FF (REDOX INDICATOR)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 32041979
    },
    {
        "Id": 3823,
        "SKUNo": "AS3138",
        "CASNO": "3618‐ 43‐ 7",
        "ProductName": "XYLENOL ORANGE AR‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3824,
        "SKUNo": "AS3138",
        "CASNO": "3618‐ 43‐ 7",
        "ProductName": "XYLENOL ORANGE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 29349900
    },
    {
        "Id": 3825,
        "SKUNo": "AS3139",
        "CASNO": "87‐ 62‐ 7",
        "ProductName": "2,6 XYLIDINE LR‐250ML",
        "PACKSIZE": "250ML",
        "HSNCODE": 29214910
    },
    {
        "Id": 3826,
        "SKUNo": "AS3139",
        "CASNO": "87‐ 62‐ 7",
        "ProductName": "2,6 XYLIDINE LR‐2.5LTR",
        "PACKSIZE": "2.5LTR",
        "HSNCODE": 29214910
    },
    {
        "Id": 3827,
        "SKUNo": "AS3140",
        "CASNO": "58‐ 86‐ 6",
        "ProductName": "D‐XYLOSE PURISS CHR (Culture Media Additive)‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 3828,
        "SKUNo": "AS3140",
        "CASNO": "58‐ 86‐ 6",
        "ProductName": "D‐XYLOSE PURISS CHR (Culture Media Additive)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 29400000
    },
    {
        "Id": 3829,
        "SKUNo": "AS3141",
        "CASNO": "58‐ 86‐ 6",
        "ProductName": "YEAST EXTRACT POWDER FOR BACTERIOLOGY‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 21021010
    },
    {
        "Id": 3830,
        "SKUNo": "AS3141",
        "CASNO": "8013/01/02",
        "ProductName": "YEAST EXTRACT POWDER FOR BACTERIOLOGY‐5KG",
        "PACKSIZE": "5 KG",
        "HSNCODE": 21021010
    },
    {
        "Id": 3831,
        "SKUNo": "AS3142",
        "CASNO": "8013/01/02",
        "ProductName": "YEAST EXTRACT GRANULAR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 21021010
    },
    {
        "Id": 3832,
        "SKUNo": "AS3143",
        "CASNO": "1314‐ 36‐ 9",
        "ProductName": "YTTRIUM OXIDE AR‐10GM",
        "PACKSIZE": "10GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 3833,
        "SKUNo": "AS3143",
        "CASNO": "1314‐ 36‐ 9",
        "ProductName": "YTTRIUM OXIDE AR‐25GM",
        "PACKSIZE": "25GM",
        "HSNCODE": 28469090
    },
    {
        "Id": 3834,
        "SKUNo": "AS3144",
        "CASNO": "              ",
        "ProductName": "ZENKER’S FIXING‐100ML",
        "PACKSIZE": "100ML",
        "HSNCODE": 29152990
    },
    {
        "Id": 3835,
        "SKUNo": "AS3145",
        "CASNO": "5970‐ 45‐ 6",
        "ProductName": "ZINC ACETATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3836,
        "SKUNo": "AS3146",
        "CASNO": "5970‐ 45‐ 6",
        "ProductName": "ZINC ACETATE AR (DIHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3837,
        "SKUNo": "AS3147",
        "CASNO": "7699‐ 45‐ 8",
        "ProductName": "ZINC BROMIDE  ANHYDROUS LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29152990
    },
    {
        "Id": 3838,
        "SKUNo": "AS3148",
        "CASNO": "5263/02/05",
        "ProductName": "ZINC CARBONATE BASIC‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28369990
    },
    {
        "Id": 3839,
        "SKUNo": "AS3149",
        "CASNO": "7440‐ 66‐ 6",
        "ProductName": "ZINC DUST LR (325 MESH)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 79031000
    },
    {
        "Id": 3840,
        "SKUNo": "AS3150",
        "CASNO": "7440‐ 66‐ 6",
        "ProductName": "ZINC DUST AR (325 MESH)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 79031000
    },
    {
        "Id": 3841,
        "SKUNo": "AS3151",
        "CASNO": "7646‐ 85‐ 7",
        "ProductName": "ZINC CHLORIDE (DRY) PURIFIED‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3842,
        "SKUNo": "AS3152",
        "CASNO": "7646‐ 85‐ 7",
        "ProductName": "ZINC CHLORIDE (DRY) PURIFIED‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28273990
    },
    {
        "Id": 3843,
        "SKUNo": "AS3153",
        "CASNO": "7646‐ 85‐ 7",
        "ProductName": "ZINC CHLORIDE DRY AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3844,
        "SKUNo": "AS3154",
        "CASNO": "10139‐ 47‐ 6",
        "ProductName": "ZINC IODIDE FOR SYNTHESIS‐50GM",
        "PACKSIZE": "50GM",
        "HSNCODE": 28152000
    },
    {
        "Id": 3845,
        "SKUNo": "AS3155",
        "CASNO": "62625‐ 22‐ 3",
        "ProductName": "ZINCON AR‐1GM",
        "PACKSIZE": "1GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3846,
        "SKUNo": "AS3155",
        "CASNO": "62625‐ 22‐ 3",
        "ProductName": "ZINCON AR ‐5GM",
        "PACKSIZE": "5GM",
        "HSNCODE": 29280090
    },
    {
        "Id": 3847,
        "SKUNo": "AS3156",
        "CASNO": "7440‐ 66‐ 6",
        "ProductName": "ZINC (METAL) GRANULAR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 79050040
    },
    {
        "Id": 3848,
        "SKUNo": "AS3157",
        "CASNO": "10196‐ 18‐ 6",
        "ProductName": "ZINC NITRATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 3849,
        "SKUNo": "AS3158",
        "CASNO": "1314‐ 13‐ 2",
        "ProductName": "ZINC OXIDE (CONFIRMING TO I.P.)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28170010
    },
    {
        "Id": 3850,
        "SKUNo": "AS3158",
        "CASNO": "1314‐ 13‐ 2",
        "ProductName": "ZINC OXIDE (CONFIRMING TO I.P.)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28170010
    },
    {
        "Id": 3851,
        "SKUNo": "AS3158",
        "CASNO": "1314‐ 13‐ 2",
        "ProductName": "ZINC OXIDE (CONFIRMING TO I.P.)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28170010
    },
    {
        "Id": 3852,
        "SKUNo": "AS3159",
        "CASNO": "1314‐ 13‐ 2",
        "ProductName": "ZINC OXIDE AR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28170010
    },
    {
        "Id": 3853,
        "SKUNo": "AS3160",
        "CASNO": "7779‐90‐0",
        "ProductName": "ZINC PHOSPHATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28353900
    },
    {
        "Id": 3854,
        "SKUNo": "AS3161",
        "CASNO": "557‐ 05‐ 1",
        "ProductName": "ZINC STEARATE LR‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 29157090
    },
    {
        "Id": 3855,
        "SKUNo": "AS3162",
        "CASNO": "7446‐ 19‐ 7",
        "ProductName": "ZINC SULPHATE DRIED  (MONOHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332690
    },
    {
        "Id": 3856,
        "SKUNo": "AS3163",
        "CASNO": "7446‐ 20‐ 0",
        "ProductName": "ZINC SULPHATE LR  (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332690
    },
    {
        "Id": 3857,
        "SKUNo": "AS3163",
        "CASNO": "7446‐ 20‐ 0",
        "ProductName": "ZINC SULPHATE LR  (HEPTAHYDRATE)‐1KG",
        "PACKSIZE": "1KG",
        "HSNCODE": 28332690
    },
    {
        "Id": 3858,
        "SKUNo": "AS3163",
        "CASNO": "7446‐ 20‐ 0",
        "ProductName": "ZINC SULPHATE LR  (HEPTAHYDRATE)‐5KG",
        "PACKSIZE": "5KG",
        "HSNCODE": 28332690
    },
    {
        "Id": 3859,
        "SKUNo": "AS3164",
        "CASNO": "7446‐20‐0",
        "ProductName": "ZINC SULPHATE (HEPTAHYDRATE)‐AQUA GRADE ‐50KG",
        "PACKSIZE": "50KG",
        "HSNCODE": 28332690
    },
    {
        "Id": 3860,
        "SKUNo": "AS3165",
        "CASNO": "7446‐ 20‐ 0",
        "ProductName": "ZINC SULPHATE AR (HEPTAHYDRATE)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28332690
    },
    {
        "Id": 3861,
        "SKUNo": "AS3166",
        "CASNO": "1314‐ 98‐ 3",
        "ProductName": "ZINC SULPHIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28309010
    },
    {
        "Id": 3862,
        "SKUNo": "AS3167",
        "CASNO": "57219‐ 64‐ 4",
        "ProductName": "ZIRCONIUM CARBONATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28256020
    },
    {
        "Id": 3863,
        "SKUNo": "AS3167",
        "CASNO": "57219‐ 64‐ 4",
        "ProductName": "ZIRCONIUM CARBONATE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28256020
    },
    {
        "Id": 3864,
        "SKUNo": "AS3168",
        "CASNO": "1314‐ 23‐ 4",
        "ProductName": "ZIRCONIUM DIOXIDE  ‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28256020
    },
    {
        "Id": 3865,
        "SKUNo": "AS3169",
        "CASNO": "1314‐ 23‐ 4",
        "ProductName": "ZIRCONIUM DIOXIDE AR (fine mesh)‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28256020
    },
    {
        "Id": 3866,
        "SKUNo": "AS3170",
        "CASNO": "7699‐ 43‐ 6",
        "ProductName": "ZIRCONIUM OXYCHLORIDE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3867,
        "SKUNo": "AS3170",
        "CASNO": "7699‐ 43‐ 6",
        "ProductName": "ZIRCONIUM OXYCHLORIDE‐500GM",
        "PACKSIZE": "500GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3868,
        "SKUNo": "AS3171",
        "CASNO": "7699‐ 43‐ 6",
        "ProductName": "ZIRCONIUM OXYCHLORIDE AR (FOR FLUORINE DETERMINATION)‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28273990
    },
    {
        "Id": 3869,
        "SKUNo": "AS3172",
        "CASNO": "14985‐ 18‐ 3",
        "ProductName": "ZIRCONYL NITRATE‐100GM",
        "PACKSIZE": "100GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 3870,
        "SKUNo": "AS3172",
        "CASNO": "14985‐ 18‐ 3",
        "ProductName": "ZIRCONYL NITRATE‐250GM",
        "PACKSIZE": "250GM",
        "HSNCODE": 28342990
    },
    {
        "Id": 3871,
        "SKUNo": "AS3173",
        "CASNO": "‐",
        "ProductName": "PARAFILM M",
        "PACKSIZE": "4 in x125ft",
        "HSNCODE": 39219099
    },
    {
        "Id": 3872,
        "SKUNo": "AS3173",
        "CASNO": "‐",
        "ProductName": "PARAFILM M",
        "PACKSIZE": "2 in x250ft",
        "HSNCODE": 38220090
    },
    {
        "Id": 3873,
        "SKUNo": "AS3174",
        "CASNO": "7647‐ 01‐ 0",
        "ProductName": "Hydrochloric Acid N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3874,
        "SKUNo": "AS3175",
        "CASNO": "6153‐ 56‐ 6",
        "ProductName": "Oxalic Acid N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3875,
        "SKUNo": "AS3176",
        "CASNO": "7778‐ 50‐ 9",
        "ProductName": "Potassium Dichromate N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3876,
        "SKUNo": "AS3177",
        "CASNO": "1310‐ 73‐ 2",
        "ProductName": "Sodium Hydroxide N/1",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3877,
        "SKUNo": "AS3178",
        "CASNO": "1310‐ 73‐ 2",
        "ProductName": "Sodium Hydroxide N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3878,
        "SKUNo": "AS3179",
        "CASNO": "10102‐ 17‐ 7",
        "ProductName": "Sodium Thiosulphate N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    },
    {
        "Id": 3879,
        "SKUNo": "AS3180",
        "CASNO": "7664‐93‐9",
        "ProductName": "Sulphuric Acid N/10",
        "PACKSIZE": "3 Amp",
        "HSNCODE": 38220090
    }
];

constructor(){this.filteredLocationList = this.jsonData}

groupedData: { [key: string]: Product[] } = {};

  ngOnInit() {
    this.sortAndGroupData();
  }
  
  @ViewChild('dtEmployee') dtEmployee!: Table; // Add this reference

  applyGlobalFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dtEmployee.filterGlobal(inputValue, 'contains');
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.jsonData;
      return;
    }
  
    this.filteredLocationList = this.jsonData.filter(
      x => x.ProductName.toLowerCase().includes(text.toLowerCase())
    );
  }

  sortAndGroupData() {
    // Sort the data alphabetically by 'NAME OF THE PRODUCT'

    // Group the sorted data by the first letter of 'NAME OF THE PRODUCT'
    this.groupedData = this.jsonData.reduce((group: { [key: string]: Product[] }, item: Product) => {
        const firstLetter = item.ProductName[0].toUpperCase();
        if (!group[firstLetter]) {
          group[firstLetter] = [];
        }
        group[firstLetter].push(item);
        return group;
      }, {});

  }

  openGroups: Set<string> = new Set();

  // Toggle the visibility of the group
  toggleGroup(key: string) {
    if (this.openGroups.has(key)) {
      this.openGroups.delete(key);
    } else {
      this.openGroups.add(key);
    }
  }

  // Check if a group is open
  isGroupOpen(key: string): boolean {
    return this.openGroups.has(key);
  }

  trackByIndex(index: number): number {
    return index;
  }
}

interface Product {
    Id: number;
    SKUNo: string;
    CASNO: string | null;
    ProductName:string;
    PACKSIZE: string;
    HSNCODE :number
  }
