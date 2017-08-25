import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  name: String;
  description: String;
  price: Number;
  category: String;

  constructor(
    private itemService: ItemService,
    private _flashMessagesService: FlashMessagesService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  itemSubmit() {
    const item = {
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category
    }

    this.itemService.createItem(item).subscribe(data => {
      if (data.success) {
        this._flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/item-shop']);
      } else {
        this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/add-item']);
      }
    });
  }

}
