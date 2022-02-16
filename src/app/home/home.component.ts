import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  bankDetails: BankDetails[] = [];

  bank_name: any

  p: number = 1

  selectedValue: any

  constructor(private httpClient: HttpClient) { }

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

  changeCity(e: any) {
    console.log(e.target.value);
    this.selectedValue = e.target.value
    this.httpClient.get<any>(this.baseUrl + '?city=' + this.selectedValue)
      .subscribe(
        response => {
          console.log(response);
          this.bankDetails = response;
        }
      );
  }

  addToFavourites() {
    alert("Add to Favourites Successfully")
  }

}
