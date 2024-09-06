import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { product } from '../component/product-view/productmodal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist: product[] = [];
  public productSubject = new BehaviorSubject<product[]>([]);
  public amount: number = 0;
  protected productList: product[] = [
    {
      id: 1,
      title: " Gamo Banana",
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 459.99,
      discountPercentage: 7.17,
      stock: 5,
      images: '/assets/arbaminch00.jpg',
      thumbnail: '/assets/arbaminch00.jpg'
    },
    {
        id: 2,
        title: "Gamo Fruits",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 439.99,
        discountPercentage: 7.17,
        stock: 5,
        images: '/assets/arbaminch01.jpg',
        thumbnail: '/assets/arbaminch01.jpg'
      },
      
    {
        id: 3,
        title: "Gamo TakeAway Foods",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 349.99,
        discountPercentage: 7.17,
        stock: 5,
        images: '/assets/arbaminch02.jpg',
        thumbnail: '/assets/arbaminch02.jpg'
      },
      
    {
        id: 4,
        title: "Gamo Corocodile Sell Center",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 349.99,
        discountPercentage: 7.17,
        stock: 5,
        images: '/assets/arbaminch03.jpg',
        thumbnail: '/assets/arbaminch03.jpg'
      },
      
    {
        id: 5,
        title: "Gamo Traditional Clothes",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9767.99,
        discountPercentage: 7.17,
        stock: 5,
        images: '/assets/arbaminch04.jpg',
        thumbnail: '/assets/arbaminch04.jpg'
      },
      
    {
        id: 6,
        title: "Gamo Fruits",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 78979.99,
        discountPercentage: 73.17,
        stock: 5,
        images: '/assets/arbaminch05.jpg',
        thumbnail: '/assets/arbaminch05.jpg'
      },
      
    {
        id: 7,
        title: "Gamo Traditional Home Tools",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 799.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/arbaminch06.jpg',
        thumbnail: '/assets/arbaminch06.jpg'
      },
      
    {
        id: 8,
        title: "Gamo Fruits/Mango",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9899.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/arbaminch07.jpg',
        thumbnail: '/assets/arbaminch07.jpg'
      },
      
    {
        id: 9,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 98978.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail1.png',
        thumbnail: '/assets/thumbnail1.png'
      },
      
    {
        id: 10,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9454.99,
        discountPercentage: 47.17,
        stock: 5,
        images: '/assets/thumbnail2.png',
        thumbnail: '/assets/thumbnail2.png'
      },
      
    {
        id: 11,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 45359.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail3.png',
        thumbnail: '/assets/thumbnail3.png'
      },
      
    {
        id: 12,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9878.99,
        discountPercentage: 77.17,
        stock: 5,
        images: '/assets/thumbnail4.png',
        thumbnail: '/assets/thumbnail4.png'
      },
      
    {
        id: 13,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 67679.99,
        discountPercentage: 47.17,
        stock: 5,
        images: '/assets/thumbnail5.png',
        thumbnail: '/assets/thumbnail5.png'
      },
      
    {
        id: 14,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 569.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail6.png',
        thumbnail: '/assets/thumbnail6.png'
      },
      
    {
        id: 15,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9565.99,
        discountPercentage: 17.17,
        stock: 5,
        images: '/assets/thumbnail7.png',
        thumbnail: '/assets/thumbnail7.png'
      },
      
    {
        id: 16,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9656.99,
        discountPercentage: 71.17,
        stock: 5,
        images: '/assets/thumbnail8.png',
        thumbnail: '/assets/thumbnail8.png'
      },
      
    {
        id: 17,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9575.99,
        discountPercentage: 77.17,
        stock: 5,
        images: '/assets/thumbnail9.png',
        thumbnail: '/assets/thumbnail9.png'
      },
      
    {
        id: 18,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 94343.99,
        discountPercentage: 47.17,
        stock: 5,
        images: '/assets/thumbnail10.png',
        thumbnail: '/assets/thumbnail10.png'
      },
      
    {
        id: 19,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9453.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail11.png',
        thumbnail: '/assets/thumbnail11.png'
      },
      
    {
        id: 20,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 956.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail12.png',
        thumbnail: '/assets/thumbnail12.png'
      },
      
    {
        id: 21,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8799.99,
        discountPercentage: 27.17,
        stock: 5,
        images: '/assets/thumbnail13.png',
        thumbnail: '/assets/thumbnail13.png'
      },
      
    {
        id: 22,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 71.17,
        stock: 5,
        images: '/assets/thumbnail14.png',
        thumbnail: '/assets/thumbnail14.png'
      },
      
    {
        id: 23,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9899.99,
        discountPercentage: 73.17,
        stock: 5,
        images: '/assets/thumbnail15.png',
        thumbnail: '/assets/thumbnail15.png'
      },
      
    {
        id: 24,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 980989.99,
        discountPercentage: 57.17,
        stock: 5,
        images: '/assets/thumbnail16.png',
        thumbnail: '/assets/thumbnail16.png'
      },
      
    {
        id: 89825,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9989.99,
        discountPercentage: 76.17,
        stock: 5,
        images: '/assets/thumbnail17.png',
        thumbnail: '/assets/thumbnail17.png'
      },
      
    {
        id: 26,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9889.99,
        discountPercentage: 67.17,
        stock: 5,
        images: '/assets/thumbnail18.png',
        thumbnail: '/assets/thumbnail18.png'
      },
      
    {
        id: 27,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 79.17,
        stock: 5,
        images: '/assets/thumbnail19.png',
        thumbnail: '/assets/thumbnail19.png'
      },
      
    {
        id: 28,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 97.17,
        stock: 5,
        images: '/assets/thumbnail20.png',
        thumbnail: '/assets/thumbnail20.png'
      },
      
    {
        id: 29,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8969.99,
        discountPercentage: 70.17,
        stock: 5,
        images: '/assets/thumbnail21.png',
        thumbnail: '/assets/thumbnail21.png'
      },
      
    {
        id: 30,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 47.17,
        stock: 5,
        images: '/assets/thumbnail22.png',
        thumbnail: '/assets/thumbnail22.png'
      },
      
    {
        id: 31,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 57.17,
        stock: 5,
        images: '/assets/thumbnail23.png',
        thumbnail: '/assets/thumbnail23.png'
      },
      
    {
        id: 32,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8969.99,
        discountPercentage: 47.17,
        stock: 5,
        images: '/assets/thumbnail24.png',
        thumbnail: '/assets/thumbnail24.png'
      },
      
    {
        id: 33,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8989.99,
        discountPercentage: 75.17,
        stock: 5,
        images: '/assets/thumbnail25.png',
        thumbnail: '/assets/thumbnail25.png'
      },
      
    {
        id: 34,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8869.99,
        discountPercentage: 77.17,
        stock: 5,
        images: '/assets/thumbnail26.png',
        thumbnail: '/assets/thumbnail26.png'
      },
      
    {
        id: 35,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 5469.99,
        discountPercentage: 75.17,
        stock: 5,
        images: '/assets/thumbnail27.png',
        thumbnail: '/assets/thumbnail27.png'
      },
      
    {
        id: 36,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 5369.99,
        discountPercentage: 1.17,
        stock: 5,
        images: '/assets/thumbnail28.png',
        thumbnail: '/assets/thumbnail28.png'
      },
      
    {
        id: 37,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 65469.99,
        discountPercentage: 17.17,
        stock: 5,
        images: '/assets/thumbnail29.png',
        thumbnail: '/assets/thumbnail29.png'
      },
      
    {
        id: 38,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price:65569.99,
        discountPercentage: 72.17,
        stock: 5,
        images: '/assets/thumbnail30.png',
        thumbnail: '/assets/thumbnail30.png'
      },
      
    {
        id: 39,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 8539.99,
        discountPercentage: 32.17,
        stock: 5,
        images: '/assets/thumbnail31.jpg',
        thumbnail: '/assets/thumbnail31.jpg'
      },
      
    {
        id: 40,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 95656.99,
        discountPercentage: 63.17,
        stock: 5,
        images: '/assets/thumbnail32.jpg',
        thumbnail: '/assets/thumbnail32.jpg'
      },
      
    {
        id: 41,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 87979.99,
        discountPercentage: 37.17,
        stock: 5,
        images: '/assets/thumbnail33.jpg',
        thumbnail: '/assets/thumbnail33.jpg'
      },
      
    {
        id: 42,
        title: "yedesta lijoch",
        description: "ye desta lijoch betam erebash silehonu be haraji yeshtalu. shiten megelagel silmnfelg berkash waga yishetalu.yesim zirzirachewum 1-Absil Tsegaw 2-Tigist Tsegaw 3-Genet Tsegaw 4-Heba-Mariam Tsegaw yibalalu.Shachi Tsegawuna Desta.yemishetubet wanegna mikinyat Kaleabin Silemirebishu new.",
        category: "EREBASH",
        price: 0.99,
        discountPercentage: 0.17 ,
        stock: 5,
        images: '/assets/yedesta lijoch.jpg',
        thumbnail: '/assets/yedesta lijoch.jpg'
      }
  ];

  constructor() { }

  getproduct(): Observable<product[]> {
    return of(this.productList);
  }

  getproductbyid(id: number): product | undefined {
    return this.productList.find(product => product.id === id);
  }

  addtocart(data: product) {
    this.cartitemlist.push(data);
    this.productSubject.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }

  products() {
    return this.productSubject.asObservable();
  }

  removecartitem(data: product) {
    const indexToRemove = this.cartitemlist.findIndex((a: product) => data.id === a.id);

    if (indexToRemove !== -1) {
      this.cartitemlist.splice(indexToRemove, 1);
      this.productSubject.next([...this.cartitemlist]); // Using spread operator to create a new array
    }
  }

  // total calculation
  calculateprice() {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.price;
    });
    return total;
  }

  // remove all items
  removeallitems() {
    this.cartitemlist = [];
    this.productSubject.next(this.cartitemlist);
  }

  // Passing data from one component to another
  sendfinalamount(data: number) {
    this.amount = data;
  }

  recievefinalamount(): number {
    return this.amount;
  }
}


function products() {
  throw new Error('Function not implemented.');
}



