import { Component, OnInit } from '@angular/core';
// import { Food } from 'src/app/models/food';
import { foodData } from "../../data/food"

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
// foodData file (as an array of Obj) in data/food
foods: any[] = foodData;

constructor(){}

  onDelete(elem: any) {
    this.foods.forEach((row: any, index: any) => {
      if(row === elem) {
        this.foods.splice(index, 1);
        console.log(`You deleted row>> ${row.foodId}`)
      }
    })
  }

  // New Delete Methods - works! 
  // onDelete(elem: any) {
  //   let index = this.foods.indexOf(elem);
  //   this.foods.splice(index, 1)
  // }

  ngOnInit(): void {
    console.log('Food Array>>', this.foods);
  }
}
