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
    brand: "Nike Sportswear",
    model: "Air Max Triax 96 SP",
    price: "$149",
    description:
      "Debuted in the late ’90s as a running sneaker alternative to the already pretty stacked Nike running catalog, the Nike Air Max Triax 96 SP returns in a full camo look for the inner-city camouflage-fit finish. Constructed with a lightweight mesh and synthetic upper, boasting a large-volume visible Air unit, the Safari Camo Nike Air Max Triax 96 is more than just a camo sneaker, it’s the cherry on the ice of all camo sneakers.",
    inCart: false,
    img: "/images/miror.png"
  },
  {
    id: 1,
    brand: "Converse",
    model: "Pro Leather OG Ox",
    price: "99$",
    description:
      "Converse nods to its extensive basketball history in the ‘70s and ‘80s with the “Raise Your Game” pack. The homage to vintage basketball shoes includes the Converse Pro Leather OG, kept in a subtle cream/white, boasting a gold foil “Pro Leather” logo as well as the signature Chevron logo. Made from premium leather and featuring luxe leather lining, this blast from the past celebrates the rich history of Converse basketball and is round off by an American flag sockliner.",
    inCart: false,
    img: "/images/converse-pro-leather-og-ox.jpg"
  },

  {
    id: 2,
    brand: "adidas Originals",
    model: "LXCON x WM",
    price: "219$",
    description:
      "Long-time adidas partner and Japanese brand White Mountaineering reimagine one of adidas’ bold sneakers that reappeared over the previous months. The adidas LXCON, a reinterpretation of the adidas Lexicon comes equipped with a futuristic retro look featuring a unique piping construction that flips the lacing system into buckles.",
    inCart: false,
    img: "/images/adidas-lxcon-x-wm.jpg"
  },
  {
    id: 3,
    brand: "Nike SB",
    model: "GTS Return Premium",
    price: "85$",
    description:
      "Nike’s latest skateboarding shoe, the Nike SB GTS Return offers a classic look, namely the colorway of the OG Air Max 1. Dressed in red and white, as the original retro runner, the premium skate show reinterprets a classic Nike skate shoe with a cupsole for a more flexible and lightweight construction for daily on and off the deck wear.",
    inCart: false,
    img: "/images/adidas-stadt.jpg"
  },
  {
    id: 4,
    brand: "Vans",
    model: "YeezOG Old Skool LX",
    price: "75$",
    description:
      "Premium versions of classic shoes are well-seen item (at least here in our office), this Vans Old Skool looks to the original design but utilizes a luce update, featuring an all-suede upper and vulcanized off-white midsole for a great contrast. The leather Vans sidestripe rounds off a staple that shouldn’t be missing your rotation.",
    inCart: false,
    img: "/images/vans-og-old-skool-lx.jpg"
  },
  {
    id: 5,
    brand: "Nike ACG",
    model: "Air Wildwood ACG",
    price: "109$",
    description:
      "Sending you straight back to 1989 with these Nike Air Wildwood ACGs. The perfect mix of sneaker and outdoor shoe, made with a leather upper, the Nike Air Wildwood ACG is the truth, like Paul Pierce. Get the latest drop now.",
    inCart: false,
    img: "/images/nike-air-wildwood-acg.jpg"
  },
  {
    id: 6,
    brand: "Nike Sportswear",
    model: "Air Max 720 ISPA",
    price: "210$",
    description:
      "The Nike ISPA Air Max 720 combines Nike innovation and a futuristic Ninja-themed feeling. The technical sneaker from Nike’s improvise, scavenge, protect and adapt thinktank is inspired by the Zoom Turf 96, featuring Nike’s biggest heel Air boasting “Contains High Pressure Nitrogen” lettering, to cushion every step of yours like a cloud. The eye-catching rubber outsole comes with rubber pods to provide a grippy stand.",
    inCart: false,
    img: "/images/nike-air-max-720-ispa.jpg"
  },
  {
    id: 7,
    brand: "Nike Sportswear",
    model: "Air Force 1 '07 QS",
    price: "130$",
    description:
      "Mid-February is the time for most of the NBA to relax and take a quick break if you weren’t selected to participate in the NBA All-Star Game. This year the exhibition and all-around fun game will be held in Chicago, and if you know your sneakers, you know that Nike brings out the big guns for the event. The Nike Air Force 1 ´07 “City of Dreams” is part of the extensive ASG line-up and features a multicolored upper highlighting the diversity of Chi-Town, which is locked-down through a unique heel tap embroidered reading “NIKE CHI.” 3M reflective detailing as well as mismatching gum rubber midsole offering a great finish.",
    inCart: false,
    img: "/images/air-force-1-07-qs.jpg"
  }
];
