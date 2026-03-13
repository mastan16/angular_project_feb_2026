import { Component } from '@angular/core';
import { CategoryItem } from '../category-item/category-item';

@Component({
  selector: 'app-categories',
  imports: [ CategoryItem ],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
 categoryArr = [
  { label: "Fashion", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/5dca7713b355df43.jpg?q=60" },
  { label: "Travel", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/d7eae409dc461a54.jpg?q=60" },
  { label: "Electronics", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/a080ac3397f3612d.png?q=60" },
  { label: "Home & Kitchen", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/506347d817d14025.jpg?q=60" },
  { label: "Toys,baby...", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/d4d87d1307cd2a29.jpg?q=60" },
  { label: "Furniture", img_url: "https://rukminim1.flixcart.com/fk-p-flap/196/196/image/9be859f78d39cc22.jpg?q=60" },
  { label: "Mobiles", img_url: "https://rukminim2.flixcart.com/fk-p-flap/196/196/image/a6189afdd765a687.jpg?q=60" },
  { label: "Flipkart Pay", img_url: "https://rukminim2.flixcart.com/fk-p-flap/196/196/image/38e2f5617d0edd27.png?q=60" },
  { label: "Next Gen", img_url: "https://rukminim2.flixcart.com/fk-p-flap/196/196/image/c7f57c3d9a547417.jpg?q=60" }
];


}
