import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';

export class BankDetails {
  constructor(
    public ifsc: String,
    public bank_id: Number,
    public branch: String,
    public address: String,
    public city: String,
    public district: String,
    public state: String,
    public bank_name: String,
    
  //  checkArr=[
  //   {id:1,select:false,name:'bank_name'},
  //   {id:1,select:true,name:'bank_id'},
  //   {id:1,select:false,name:'bank_branch'}
  // ]

  ) {
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private baseUrl = "https://vast-shore-74260.herokuapp.com/banks";
  public myCity = "MUMBAI"

  bank_name: any


  

  bankDetails: BankDetails[] = [];

  p: number = 1

  selectedValue:any

  constructor(private httpClient: HttpClient, private bs: BanksService) { }

  ngOnInit(): void {
    this.getBankDetails()
  }

  getBankDetails() {
    this.httpClient.get<any>(this.baseUrl + '?city=' + this.myCity)
    .subscribe(
      response => {
        console.log(response);
        this.bankDetails = response;
      }
    );
  }

  changeCity(e:any){
    console.log(e.target.value);
    this.selectedValue=e.target.value
    this.httpClient.get<any>(this.baseUrl + '?city=' + this.selectedValue)
        .subscribe(
          response => {
            console.log(response);
            this.bankDetails = response;
          }
        );
      }


  

  addToFavourites() {
    // this.checked=true
    // for(let i=0;i<this.bankDetails.length;i++){
    //   if(this.checked){
        
    //   }
    // }
    alert("Add to Favourites Successfully")
  }

 

  onChangeCheck($event:any){
    // const id=$event.target.value;
    // const isChecked=$event.target.checked;
    // console.log(id,isChecked);
    
  }

  //checkAllCheckBox(ev) { // Angular 9
  // checkAllCheckBox(ev: any) { // Angular 13
	// 	this.bankDetails.forEach(x => x.checked = ev.target.checked)
	// }

  // isAllCheckBoxChecked() {
	// 	return this.bankDetails.every(p => p.checked);
	// }

  // Search() {
  //   if (this.bank_name == "") {
  //     this.ngOnInit();

  //   } else {
  //     this.bankDetails = this.bankDetails.filter(response => {
  //       return this.bank_name.toLocaleLowerCase().match(this.bank_name.toLocaleLowerCase())
  //     })
  //   }
  // }


}
