export interface Product {
  id: number;
  brand: string;
  model?: string;
  price: string; // todo change to number
  description: string;
  inCart: false;
  img: string;
}

export const productData: Array<Product> = [
  {
    id: 0,
    brand: "Nike",
    model: "Old Skool",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 1,
    brand: "Vans",
    model: "Old Skool",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 2,
    brand: "Nike",
    model: "Air Force 1",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 3,
    brand: "Nike",
    model: "Air Max",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 4,
    brand: "Nike",
    model: "Air Jordan 1",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 5,
    brand: "Adidas",
    model: "Yeezy",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 6,
    brand: "Adidas",
    model: "Stan Smith",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.ellosgroup.com/i/ellos/sth_7008927-09_Fm?%24sg%24&%24sd%24&w=500"
  },
  {
    id: 7,
    brand: "Nike",
    model: "Air Max 97",
    price: "40$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit",
    inCart: false,
    img:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_Vit_FV3284_01_standard.jpg"
  }
];
