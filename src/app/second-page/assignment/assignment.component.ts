import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {
foods: any = [
    { 
        foodId : 1,
        	protein : {
            beans : "Beans",
            egg : "Egg",
            fish: "Fish"
        },
        carbonhydrate : {
            rice : "Rice",
            yam : "Yam",
            indomie : "Noodles"
        },
        junks :{
            biscuits : "Biscuit",
            doughnut : "Doughnut",
            chips : "Plaintain-chips"
        },
        drinks :{
            water : "Water",
            heinaken : "Heinaken",
            beveraga : "Tea"
        } 
    },
    {
        foodId : 2,
        protein : {
            beans : "Beans",
            egg : "Egg",
            fish: "Fish"
        },
        carbonhydrate : {
            rice : "Rice",
            yam : "Yam",
            indomie : "Noodles"
        },
        junks :{
            biscuits : "Biscuit",
            doughnut : "Doughnut",
            chips : "Plaintain-chips"
        },
        drinks :{
            water : "Water",
            heinaken : "Heinaken",
            beveraga : "Tea"
        }
    },
    {
        foodId : 3,
        protein : {
            beans : "Beans",
            egg : "Egg",
            fish: "Fish"
        },
        carbonhydrate : {
            rice : "Rice",
            yam : "Yam",
            indomie : "Noodles"
        },
        junks :{
            biscuits : "Biscuit",
            doughnut : "Doughnut",
            chips : "Plaintain-chips"
        },
        drinks :{
            water : "Water",
            heinaken : "Heinaken",
            beveraga : "Tea"
        }
    },
    {
        foodId : 4,
        protein : {
            beans : "Beans",
            egg : "Egg",
            fish: "Fish"
        },
        carbonhydrate : {
            rice : "Rice",
            yam : "Yam",
            indomie : "Noodles"
        },
        junks :{
            biscuits : "Biscuit",
            doughnut : "Doughnut",
            chips : "Plaintain-chips"
        },
        drinks :{
            water : "Water",
            heinaken : "Heinaken",
            beveraga : "Tea"
        }
    },
    {
        foodId : 5,
        protein : {
            beans : "Beans",
            egg : "Egg",
            fish: "Fish"
        },
        carbonhydrate : {
            rice : "Rice",
            yam : "Yam",
            indomie : "Noodles"
        },
        junks :{
            biscuits : "Biscuit",
            doughnut : "Doughnut",
            chips : "Plaintain-chips"
        },
        drinks :{
            water : "Water",
            heinaken : "Heinaken",
            beveraga : "Tea"
        } 
    }
]

constructor(){}


  ngOnInit(): void {
    console.log('Food Array>>', this.foods);
  }
}
