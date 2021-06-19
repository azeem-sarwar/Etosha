import { images } from '../constants'

export const RiderData=[{
    id:"1",
    resturantName:"Burger King",
    fromLocation:"Town Hall, Main City",
    toLocation:"Lincoln Street, Downtown NYC",
    img:require('../assets/foodPics/dish.jpg'),
    inTime:"As soon as possible"
},
{
    id:"2",
    resturantName:"Burger King",
    fromLocation:"Town Hall, Main City",
    toLocation:"Lincoln Street, Downtown NYC",
    img:require('../assets/images/japanese-restaurant.jpg'),
    inTime:"2:35 PM"
},
{
    id:"3",
    resturantName:"Burger King",
    fromLocation:"Town Hall, Main City",
    toLocation:"Lincoln Street, Downtown NYC",
    img:require('../assets/images/burger-restaurant.jpg'),
    inTime:"2:45 PM"

}

]


export const NotificcationData=[{
    id:"1",
    fromresturant:"You just received new order from Pizza Hut",
    inTime:"10 min ago"
},
{
    id:"2",
    fromresturant:"You just received new order from Pizza Hut",
    inTime:"10 min ago"
},
{
    id:"3",
    fromresturant:"You just received new order from Pizza Hut",
    inTime:"10 min ago"
},
{
    id:"4",
    fromresturant:"You just received new order from Pizza Hut",
    inTime:"10 min ago"
}

]

export const OrderDataResturant=[{
    id:'1',
    CustomerName:"Cambry Kay",
    Time:"2 minutes ago",
    totalPrice:5.98,
    customerImg:images.DeliveryBoy,
    orderList:[
        {
            id:"1",
            FoodName:"Casserole",
            Quantity:"5x",
            size:"Small"
        },
        {
            id:"2",
            FoodName:"Cheese Cake",
            Quantity:"1x",
            size:"1 Pound"
        },
        {
            id:"3",
            FoodName:"Apple Pie",
            Quantity:"2x",
            size:"Medium"
        }
    ]
},
{
    id:'2',
    CustomerName:"Cambry Kay",
    Time:"2 minutes ago",
    totalPrice:5.98,
    customerImg:images.DeliveryBoy,
    orderList:[
        {
            id:"1",
            FoodName:"Casserole",
            Quantity:"5x",
            size:"Small"
        },
        {
            id:"2",
            FoodName:"Cheese Cake",
            Quantity:"1x",
            size:"1 Pound"
        },
        {
            id:"3",
            FoodName:"Apple Pie",
            Quantity:"2x",
            size:"Medium"
        }
    ]
},
{
    id:'3',
    CustomerName:"Cambry Kay",
    Time:"2 minutes ago",
    totalPrice:5.98,
    customerImg:images.DeliveryBoy,
    orderList:[
        {
            id:"1",
            FoodName:"Casserole",
            Quantity:"5x",
            size:"Small"
        },
        {
            id:"2",
            FoodName:"Cheese Cake",
            Quantity:"1x",
            size:"1 Pound"
        },
        {
            id:"3",
            FoodName:"Apple Pie",
            Quantity:"2x",
            size:"Medium"
        },
        {
            id:"4",
            FoodName:"Apple Pie",
            Quantity:"2x",
            size:"Medium"
        }
    ]
},

]


export const NearByReturent = [
    {
      id: '1',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/dish.jpg'),
      price: 200.0,
      Rating: 4.9,
      foodDescrition:"Fresh Food",

      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
    {
      id: '2',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/popularFood.png'),
      foodDescrition:"Fresh Food",
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
    {
      id: '3',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/popularFood.png'),
      foodDescrition:"Fresh Food",
  
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
    {
      id: '4',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/dish.jpg'),
      price: 200.0,
      Rating: 4.9,
      foodDescrition:"Fresh Food",

      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
    {
      id: '5',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/popularFood.png'),
      foodDescrition:"Fresh Food",
  
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
    {
      id: '6',
      FoodName: 'Shrimps and Arugula',
      img: require('../assets/images/popularFood.png'),
      foodDescrition:"Fresh Food",
  
      price: 200.0,
      Rating: 4.9,
      Time: '20 min',
      tags: [
        {id: '1', tag: 'Foods'},
        {id: '2', tag: 'Buger'},
        {id: '3', tag: 'Pizza'},
      ],
    },
  ];
  