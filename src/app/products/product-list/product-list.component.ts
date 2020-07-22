import { Component, OnInit } from '@angular/core';

import { ScanSettings } from 'scandit-sdk';
import { Barcode } from 'scandit-sdk/build/main/lib/barcode';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public settings = new ScanSettings({
    enabledSymbologies: [Barcode.Symbology.CODE128],
  });
  constructor() { }

  ngOnInit(): void {
  }
  onScan(event) {
    console.log(event);
  }

  onError(err) {
    console.log(err)
  }
}
