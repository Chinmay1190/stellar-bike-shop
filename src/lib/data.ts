
import { Brand, Category, Product } from "./types";

export const brands: Brand[] = [
  {
    id: "b1",
    name: "Kawasaki",
    slug: "kawasaki",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kawasaki_Heavy_Industries_Logo.svg/2560px-Kawasaki_Heavy_Industries_Logo.svg.png",
    description: "Kawasaki motorcycles are manufactured by Kawasaki Heavy Industries, known for their high-performance bikes."
  },
  {
    id: "b2",
    name: "Ducati",
    slug: "ducati",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Logo_Ducati.svg/2560px-Logo_Ducati.svg.png",
    description: "Ducati Motor Holding S.p.A. is an Italian company that designs and manufactures motorcycles."
  },
  {
    id: "b3",
    name: "BMW",
    slug: "bmw",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
    description: "BMW Motorrad is the motorcycle division of BMW, known for their premium motorcycles."
  },
  {
    id: "b4",
    name: "Honda",
    slug: "honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png",
    description: "Honda Motor Co., Ltd. is a Japanese public multinational conglomerate manufacturer of motorcycles."
  },
  {
    id: "b5",
    name: "Yamaha",
    slug: "yamaha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yamaha_Motor_Logo.svg/2560px-Yamaha_Motor_Logo.svg.png",
    description: "Yamaha Motor Company Limited is a Japanese manufacturer of motorcycles, marine products and other motorized products."
  },
  {
    id: "b6",
    name: "Suzuki",
    slug: "suzuki",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png",
    description: "Suzuki Motor Corporation is a Japanese multinational corporation that manufactures motorcycles, among other products."
  },
  {
    id: "b7",
    name: "KTM",
    slug: "ktm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/KTM_logo.svg/2560px-KTM_logo.svg.png",
    description: "KTM AG is an Austrian motorcycle, bicycle and sports car manufacturer."
  },
  {
    id: "b8",
    name: "Triumph",
    slug: "triumph",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Triumph_Motorcycles_Ltd_logo.svg/2560px-Triumph_Motorcycles_Ltd_logo.svg.png",
    description: "Triumph Motorcycles Ltd is the largest British motorcycle manufacturer, established in 1983."
  },
  {
    id: "b9",
    name: "Aprilia",
    slug: "aprilia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Aprilia_logo.svg/2560px-Aprilia_logo.svg.png",
    description: "Aprilia is an Italian motorcycle company, one of the brands owned by Piaggio."
  },
  {
    id: "b10",
    name: "MV Agusta",
    slug: "mv-agusta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Logo_MV_Agusta.svg/2560px-Logo_MV_Agusta.svg.png",
    description: "MV Agusta is a motorcycle manufacturer founded in 1945 near Milan in Cascina Costa, Italy."
  }
];

export const categories: Category[] = [
  {
    id: "c1",
    name: "Sport Bikes",
    slug: "sport-bikes",
    description: "High-performance motorcycles designed for speed and agility.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070",
    featured: true
  },
  {
    id: "c2",
    name: "Naked Bikes",
    slug: "naked-bikes",
    description: "Performance-oriented motorcycles without fairings, offering a more upright riding position.",
    image: "https://images.unsplash.com/photo-1634968899714-2ebe03e89178?q=80&w=2070",
    featured: true
  },
  {
    id: "c3",
    name: "Adventure Bikes",
    slug: "adventure-bikes",
    description: "Versatile motorcycles designed for both on-road and off-road use.",
    image: "https://images.unsplash.com/photo-1605754202046-82a0437b1cf8?q=80&w=2070",
    featured: true
  },
  {
    id: "c4",
    name: "Cruisers",
    slug: "cruisers",
    description: "Motorcycles designed for comfortable, long-distance riding with a relaxed riding position.",
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070",
    featured: false
  },
  {
    id: "c5",
    name: "Touring Bikes",
    slug: "touring-bikes",
    description: "Motorcycles designed for long-distance travel with features for rider and passenger comfort.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070",
    featured: false
  },
  {
    id: "c6",
    name: "Off-Road Bikes",
    slug: "off-road-bikes",
    description: "Motorcycles designed for use on rough terrain and unpaved surfaces.",
    image: "https://images.unsplash.com/photo-1552129293-35c92d618558?q=80&w=2070",
    featured: false
  },
  {
    id: "c7",
    name: "Electric Bikes",
    slug: "electric-bikes",
    description: "Modern motorcycles powered by electric motors rather than internal combustion engines.",
    image: "https://images.unsplash.com/photo-1558980394-da1f85d3b540?q=80&w=2070",
    featured: false
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "Sport Bikes",
    price: 1599000,
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years.",
    specs: {
      engine: "998 cc, Liquid-cooled, 4-stroke In-line Four",
      power: "203 PS @ 13,200 rpm",
      torque: "114.9 Nm @ 11,400 rpm",
      transmission: "6-speed, return",
      topSpeed: "299 km/h",
      weight: "207 kg",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=2070",
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210401121758_Kawasaki_Ninja_ZX_10R_front_right.jpg&w=700&q=90&c=1"
    ],
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "p2",
    name: "Panigale V4",
    brand: "Ducati",
    category: "Sport Bikes",
    price: 2395000,
    description: "The Ducati Panigale V4 is a sport bike with a 1,103 cc V4 engine, introduced by Ducati in 2018 as the successor to the V-twin engined 1299. The motorcycle is named after the small manufacturing town of Borgo Panigale.",
    specs: {
      engine: "1,103 cc, Desmosedici Stradale V4, 90° V4, 4 Desmodromically actuated valves per cylinder, liquid cooled",
      power: "214 PS @ 13,000 rpm",
      torque: "124.0 Nm @ 10,000 rpm",
      transmission: "6-speed, with Ducati Quick Shift (DQS) up/down",
      topSpeed: "305+ km/h",
      weight: "198 kg",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070",
      "https://bd.gaadicdn.com/processedimages/ducati/panigale-v4/640X309/panigale-v46366de753fc81.jpg"
    ],
    featured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: "p3",
    name: "S 1000 RR",
    brand: "BMW",
    category: "Sport Bikes",
    price: 2095000,
    description: "The BMW S 1000 RR is a race oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship. It is an exceptional track tool with advanced electronics and powerful engine.",
    specs: {
      engine: "999 cc, Water/oil-cooled 4-cylinder 4-stroke in-line engine, four titanium valves per cylinder",
      power: "207 PS @ 13,500 rpm",
      torque: "113 Nm @ 11,000 rpm",
      transmission: "6-speed, constant mesh gearbox with straight-toothed gears",
      topSpeed: "303 km/h",
      weight: "197 kg",
      fuelCapacity: "16.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1591637333222-2d5ef44f79bf?q=80&w=2071",
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220705010903_BMW_S1000RR_front_right.jpg&w=726&q=75&c=1"
    ],
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "p4",
    name: "CBR 1000RR-R Fireblade",
    brand: "Honda",
    category: "Sport Bikes",
    price: 2399000,
    description: "The Honda CBR1000RR-R Fireblade, also known as the CBR1000RR-R, is a 1,000 cc class sports bike made by Honda since 2020, succeeding the previous CBR1000RR. It is the 7th generation of Honda's CBR1000RR series.",
    specs: {
      engine: "1,000 cc, Liquid-cooled 4-stroke 16-valve DOHC inline-4",
      power: "217.5 PS @ 14,500 rpm",
      torque: "113 Nm @ 12,500 rpm",
      transmission: "6-speed",
      topSpeed: "299 km/h",
      weight: "201 kg",
      fuelCapacity: "16.1 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580974511812-4b7ed65616c9?q=80&w=2073",
      "https://bd.gaadicdn.com/processedimages/honda/cbr-1000rr/640X309/cbr-1000rr6188487d82360.jpg"
    ],
    featured: false,
    inStock: true,
    rating: 4.7
  },
  {
    id: "p5",
    name: "YZF-R1",
    brand: "Yamaha",
    category: "Sport Bikes",
    price: 2077000,
    description: "The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998 and has undergone significant updates and revisions over the years.",
    specs: {
      engine: "998 cc, liquid-cooled, 4-stroke, DOHC, forward-inclined parallel 4-cylinder, 4-valve",
      power: "200 PS @ 13,500 rpm",
      torque: "112.4 Nm @ 11,500 rpm",
      transmission: "6-speed, return",
      topSpeed: "299 km/h",
      weight: "201 kg",
      fuelCapacity: "17 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1635073908681-7c02640c33ba?q=80&w=1974",
      "https://bd.gaadicdn.com/processedimages/yamaha/yzf-r1/640X309/yzf-r15e0e459301df8.jpg"
    ],
    featured: false,
    inStock: true,
    rating: 4.7
  },
  {
    id: "p6",
    name: "GSX-R1000R",
    brand: "Suzuki",
    category: "Sport Bikes",
    price: 1995000,
    description: "The Suzuki GSX-R1000 is a sport bike from Suzuki's GSX-R series of motorcycles. It was introduced in 2001 to replace the GSX-R1100 and is powered by a liquid-cooled 999 cc inline four-cylinder, four-stroke engine.",
    specs: {
      engine: "999.8 cc, 4-stroke, liquid-cooled, 4-cylinder, DOHC",
      power: "202 PS @ 13,200 rpm",
      torque: "117.6 Nm @ 10,800 rpm",
      transmission: "6-speed, constant mesh",
      topSpeed: "299 km/h",
      weight: "203 kg",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&h=1500",
      "https://bd.gaadicdn.com/processedimages/suzuki/gsx-r1000r-2017/640X309/gsx-r1000r-201762e0e1160a69b.jpg"
    ],
    featured: false,
    inStock: true,
    rating: 4.6
  },
  {
    id: "p7",
    name: "1290 Super Duke R",
    brand: "KTM",
    category: "Naked Bikes",
    price: 1899000,
    description: "The KTM 1290 Super Duke R is a 1,301 cc V-twin engine naked bike, made by KTM since 2014. It is known for its aggressive styling and high performance, earning it the nickname 'The Beast'.",
    specs: {
      engine: "1,301 cc, 2-cylinder, 4-stroke, V 75°",
      power: "180 PS @ 9,500 rpm",
      torque: "140 Nm @ 8,000 rpm",
      transmission: "6-speed",
      topSpeed: "285 km/h",
      weight: "189 kg",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070",
      "https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/ktm-bikes/1290-super-duke-r/1290-super-duke-r.png"
    ],
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: "p8",
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    category: "Naked Bikes",
    price: 1795000,
    description: "The Triumph Speed Triple is a series of motorcycles produced by Triumph Motorcycles. It is known for its naked streetfighter styling and powerful three-cylinder engine.",
    specs: {
      engine: "1,160 cc, Liquid-cooled, 12 valve, DOHC, inline 3-cylinder",
      power: "180 PS @ 10,750 rpm",
      torque: "125 Nm @ 9,000 rpm",
      transmission: "6-speed, with Triumph Shift Assist",
      topSpeed: "274 km/h",
      weight: "198 kg",
      fuelCapacity: "15.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?q=80&w=2070",
      "https://www.triumphmotorcycles.in/motorcycles/roadsters-supersports/speed-triple-1200-rs/image-gallery#lightbox-gallery-image-47492"
    ],
    featured: false,
    inStock: true,
    rating: 4.7
  },
  {
    id: "p9",
    name: "Tuono V4 1100 Factory",
    brand: "Aprilia",
    category: "Naked Bikes",
    price: 2045000,
    description: "The Aprilia Tuono V4 1100 Factory is a naked bike produced by Aprilia. It features a 1,077 cc V4 engine derived from the RSV4 superbike, making it one of the most powerful naked bikes on the market.",
    specs: {
      engine: "1,077 cc, V4 65° 4-stroke, liquid-cooled",
      power: "175 PS @ 11,000 rpm",
      torque: "121 Nm @ 9,000 rpm",
      transmission: "6-speed",
      topSpeed: "270 km/h",
      weight: "209 kg",
      fuelCapacity: "18.5 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070",
      "https://bd.gaadicdn.com/processedimages/aprilia/tuono-v4/640X309/tuono-v45e150561c6c6a.jpg"
    ],
    featured: false,
    inStock: true,
    rating: 4.8
  },
  {
    id: "p10",
    name: "Brutale 1000 RR",
    brand: "MV Agusta",
    category: "Naked Bikes",
    price: 2995000,
    discountedPrice: 2795000,
    description: "The MV Agusta Brutale 1000 RR is a high-performance naked bike produced by Italian motorcycle manufacturer MV Agusta. It features a 998 cc inline-four engine.",
    specs: {
      engine: "998 cc, Inline 4-cylinder, 4-stroke, 16-valve",
      power: "208 PS @ 13,000 rpm",
      torque: "116.5 Nm @ 11,000 rpm",
      transmission: "6-speed with electronic quickshifter",
      topSpeed: "302 km/h",
      weight: "186 kg",
      fuelCapacity: "16 liters"
    },
    images: [
      "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?q=80&w=2070",
      "https://bd.gaadicdn.com/processedimages/mv-agusta/brutale-1000/640X309/brutale-100060ad7f5aa697e.jpg"
    ],
    featured: true,
    inStock: true,
    rating: 4.9
  }
];

// Generate 45 more products to meet the requirement of 55+ products
export const allProducts: Product[] = [
  ...products,
  ...Array(45).fill(null).map((_, index) => {
    const baseProduct = products[index % 10];
    const id = `p${index + 11}`;
    const priceVariation = Math.random() * 0.2 - 0.1; // -10% to +10%
    const newPrice = Math.round(baseProduct.price * (1 + priceVariation));
    const hasDiscount = Math.random() > 0.7;
    const discountPercent = hasDiscount ? Math.random() * 0.15 + 0.05 : 0; // 5% to 20% discount
    
    return {
      ...baseProduct,
      id,
      name: `${baseProduct.name} ${Math.random() > 0.5 ? 'Pro' : 'Elite'} ${(index % 3) + 1}`,
      price: newPrice,
      discountedPrice: hasDiscount ? Math.round(newPrice * (1 - discountPercent)) : undefined,
      featured: Math.random() > 0.8,
      inStock: Math.random() > 0.2,
      rating: Math.min(5, baseProduct.rating + (Math.random() * 0.4 - 0.2)) // Slightly vary the rating
    };
  })
];
