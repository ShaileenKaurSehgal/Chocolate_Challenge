import { Component, OnInit } from '@angular/core';
import { ChocolateDataService } from 'src/app/chocolate-data.service';
import { Nutrition } from '../details-chocolate/details-chocolate.component';

@Component({
  selector: 'app-overview-chocolate',
  templateUrl: './overview-chocolate.component.html',
  styleUrl: './overview-chocolate.component.scss',
})
export class OverviewChocolateComponent implements OnInit {
  allChocolates: Chocolate[] = [];
  allUpdatedData: Chocolate[] = [];
  lowestPriceChocolate = 0;
  constructor(private chocolateService: ChocolateDataService) {}

  ngOnInit(): void {
    this.getAllChocolates();
  }

  getAllChocolates() {
    // Service Call To Get All Chocolate Data
    this.chocolateService.getAllData().subscribe({
      next: (res: any) => {
        this.allChocolates = res.data;
        this.getChocolateDataDisplayed(this.allChocolates);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getChocolateDataDisplayed(allData: any) {
    this.allUpdatedData = allData.map((chocolate: Chocolate) => {
      // Storing all prices per100g for every chocolate
      const prices = chocolate.prices.map((singleChocoPrices: Price) => {
        // Getting all Chocolate prices and its link per 100g by converting kg into grams
        const pricePerHundredGram =
          singleChocoPrices.unit.toLowerCase() === 'kg'
            ? Number(
                (singleChocoPrices.price /
                  (parseFloat(singleChocoPrices.amount) * 1000)) *
                  100
              )
            : Number(
                (singleChocoPrices.price /
                  parseFloat(singleChocoPrices.amount)) *
                  100
              );
        return {
          link: singleChocoPrices.link,
          pricesPerHundredGram: pricePerHundredGram,
        };
      });
      // Getting the array of prices per chocolate
      const pricesPerChocolate = prices.map(
        (chocolate: { pricesPerHundredGram: number }) =>
          chocolate.pricesPerHundredGram
      );

      return {
        id: chocolate.id,
        name: chocolate.name,
        brand: chocolate.brand,
        prices: prices,
        // Finding te lowest price chocolate in one entry and its corresponding link
        lowestPriceDetails:
          prices.length > 0
            ? prices.find(
                (choco: { pricesPerHundredGram: number }) =>
                  choco.pricesPerHundredGram === Math.min(...pricesPerChocolate)
              )
            : {},
        // Average price using the values stored in pricesPerChocolate
        averagePrice:
          pricesPerChocolate.reduce(
            (price: number, value: number) => price + value,
            0
          ) / pricesPerChocolate.length,
      };
    });
    return this.allUpdatedData;
  }

  // Getting the lowest Chocolate price
  highlight(allChocolates: Chocolate[]) {
    const arrayOfChocolatePrices = allChocolates
      .filter((c: Chocolate) => Object.keys(c.lowestPriceDetails).length > 0)
      .map((el: Chocolate) => el.lowestPriceDetails.pricesPerHundredGram)
      .flat();
    this.lowestPriceChocolate = Math.min(...arrayOfChocolatePrices);
    return this.lowestPriceChocolate;
  }
}

export interface Chocolate {
  id: string;
  name: string;
  brand: string;
  prices: Price[];
  lowestPriceDetails: LowestPrice;
  averagePrice: string;
  nutrition: Nutrition;
}

export interface LowestPrice {
  link: string;
  pricesPerHundredGram: [];
}

export interface Price {
  price: number;
  shop: string;
  link: string;
  unit: string;
  amount: string;
}
