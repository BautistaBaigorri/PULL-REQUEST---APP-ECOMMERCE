import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ShoppingCar from './components/ShoppingCar/ShoppingCar'
import Order from "./components/Order/Order";
import Payment from "./components/Payment/Payment"
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Detail from "./components/Detail/Detail";
import SignUp from "./components/SignUp/SignUp";




function App() {
  return (
    <div className="App">

      <Route path="/" component={NavBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shoppingCar" component={ShoppingCar} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/createProduct" component={CreateProduct} /> 
      <Route exact path={"/cart"} component={ShoppingCar} />
      <Route path={"/"} component={Footer} />
      <Route exact path="/sign" component={SignUp} />

    </div>
  );
}

export default App;
