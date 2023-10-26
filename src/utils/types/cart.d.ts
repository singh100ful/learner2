interface CartState {
  loading: {
    cart: boolean;
  };
  error: {
    cartErr: any;
  };
  cart: CartMovie[] | [];
}

interface CartMovie {
  imdbID: string;
  title: string;
  image: string;
  year: string;
  quantity: number;
  price: number;
}
