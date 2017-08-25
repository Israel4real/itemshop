import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit {
  items: any;
  selectedItem: any;

  constructor(
    private itemService: ItemService
    ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  testClick() {
    console.log(this.items)
  }

  onSelect(item) {
    this.selectedItem = item;
    
  }

  // removeItem(item){
  //    this.itemService.removeItem(item).subscribe(item =>)
  // }

}
