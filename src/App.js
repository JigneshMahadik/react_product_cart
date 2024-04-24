// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart.js'
import {useState} from "react"

function App() {

  const [state, setState] = useState([
    {
      id : 1,
      name : "iphone 14 pro",
      price : "399.99",
      quantity : 0,
      image : "https://www.reliancedigital.in/medias/iPhone-14-Pro-Space-Black-PDP-Image-493177779-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDA2OHxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaDc5LzEwMDE2OTAzNDMwMTc0LmpwZ3xlNGM4MDJjMDU3N2VmNmE4YmJhODQwMGQ2MjBhN2M0MGJlMzk2ZTcxZjc1MDk0ZTQyMjhmNzk5MTEzZjBmYTU1"
    },
    {
      id : 2,
      name : "iphone 12",
      price : "299.99",
      quantity : 0,
      image : "https://itronics.in/wp-content/uploads/2020/10/iphone-12-purple-e1619960903786.png"
    },
    {
      id : 3,
      name : "Redmi 13c Pro",
      price : "200.00",
      quantity : 0,
      image : "https://img.ws.mms.shopee.co.id/id-11134207-7qukx-lf50s3x6mckh96"
    },
    {
      id : 4,
      name : "iphone 14 Red",
      price : "399.99",
      quantity : 0,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj2kn2fD6XauNU41OrFKx8vvhKS0H2y_AJv5ZZAy27w&s"
    },
    {
      id : 5,
      name : "Realme Narzo 70 Pro 5G",
      price : "250.00",
      quantity : 0,
      image : "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/1000/1000/detailed/10149/full_body_housing_for_realme_narzo_70_pro_5g_black_maxbhi_com_92199.jpg?t=1711973011"
    },
  ]);

  const [quantity, setQuantity] = useState(0);

  return (
    <div class="App">
      <Navbar quantity={quantity}/>
      <Cart state={state} setState={setState} quantity={quantity} setQuantity={setQuantity}/>
    </div>
  );
}

export default App;
