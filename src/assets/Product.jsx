import image1 from '../assets/productImage.png';
import image2 from '../assets/productImage.png';
import image3 from '../assets/productImage.png';

// Function to randomly select an age from the given options
const getRandomAge = () => {
  const ages = [12, 17, 45];
  return ages[Math.floor(Math.random() * ages.length)];
};

const Product = [
  {
    productId: 1,
    title: "Smartphone X",
    category: "ignition",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 500,
    new_price: 450,
    description: "This is a great smartphone with amazing features.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 2,
    title: "Smartphone Y",
    category: "explorer",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 600,
    new_price: 550,
    description: "Introducing Smartphone Y - the ultimate blend of cutting-edge technology, sleek design, and unparalleled performance. Designed for the modern user, Smartphone Y offers a seamless experience that transcends expectations. Smartphone Y isn’t just a phone; it’s a statement of innovation, style, and performance. Whether you’re a tech enthusiast, a mechanical on the go, or someone who loves capturing life’s moments, Smartphone Y is designed to exceed your expectations. Embrace the future of mobile technology with Smartphone Y – where excellence meets elegance.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 3,
    title: "Smartphone X",
    category: "ignition",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 500,
    new_price: 450,
    description: "This is a great smartphone with amazing features.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 4,
    title: "Smartphone X",
    category: "mechanical",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 500,
    new_price: 450,
    description: "This is a great smartphone with amazing features.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 5,
    title: "Smartphone Y",
    category: "explorer",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 600,
    new_price: 550,
    description: "Another great smartphone with amazing features.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 6,
    title: "Smartphone X",
    category: "ignition",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 500,
    new_price: 450,
    description: "This is a great smartphone with amazing features.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 7,
    title: "Smartphone X",
    category: "mechanical",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 500,
    new_price: 450,
    description: "Introducing Smartphone Y - the ultimate blend of cutting-edge technology, sleek design, and unparalleled performance. Designed for the modern user, Smartphone Y offers a seamless experience that transcends expectations. Smartphone Y isn’t just a phone; it’s a statement of innovation, style, and performance. Whether you’re a tech enthusiast, a mechanical on the go, or someone who loves capturing life’s moments, Smartphone Y is designed to exceed your expectations. Embrace the future of mobile technology with Smartphone Y – where excellence meets elegance.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
  {
    productId: 8,
    title: "Smartphone Y",
    category: "explorer",
    images: {
      image1: image1,
      image2: image2,
      image3: image3
    },
    old_price: 600,
    new_price: 550,
    description: "Introducing Smartphone Y - the ultimate blend of cutting-edge technology, sleek design, and unparalleled performance. Designed for the modern user, Smartphone Y offers a seamless experience that transcends expectations. Smartphone Y isn’t just a phone; it’s a statement of innovation, style, and performance. Whether you’re a tech enthusiast, a mechanical on the go, or someone who loves capturing life’s moments, Smartphone Y is designed to exceed your expectations. Embrace the future of mobile technology with Smartphone Y – where excellence meets elegance.",
    age: getRandomAge(),
    processors: [{
      processor: "Raspberry Pi Pico",
      numberOfItem: 1
    }],
    sensors: [
      {
        sensor: "Temperature Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Humidity Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Pressure Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Gas Sensor",
        numberOfItem: 1
      },
      {
        sensor: "Light Sensor",
        numberOfItem: 1
      }
    ],
    reviews: []
  },
];

export default Product;
