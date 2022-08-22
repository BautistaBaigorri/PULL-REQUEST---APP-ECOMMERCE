import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Actions";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import style from "./ShoppingCar.module.css";
import swal from "sweetalert";
import { createCont } from "../contexto/contextProvider";


function ShoppingCar() {



  const {stringLocalStorage} = useContext(createCont)
  
  const {flag,setFlag} = useState(true)
  

  let y = JSON.parse(localStorage.getItem(stringLocalStorage));
  let productsFromLocalStorage = y? Array.from(y) : "No hay productos"
  y = y? productsFromLocalStorage.reduce((acc, o)=>{
    let cant = o.quantity ? o.quantity : 1
  acc += o.price * cant
  return acc
},0) : 0
  const [price,setPrice] = useState(y);
  const returnPrice = ()=>{
    let x = JSON.parse(localStorage.getItem(stringLocalStorage));
    console.log("x",x)
    if(!x.length) setPrice(0)
        let a = x.reduce((acc, o)=>{
          let cant = o.quantity ? o.quantity : 1
        acc += o.price * cant
        return acc
      },0)
      setPrice(a)
  }

  const deleteProduct = (o) => {
    swal({
      title: "Estás seguro?",
      text: "Una vez eliminado, no puedes recuperar el producto seleccionado.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(productsFromLocalStorage)
        productsFromLocalStorage = productsFromLocalStorage.filter((e) => e.idProduct !== o.idProduct)
    
        localStorage.setItem(stringLocalStorage, JSON.stringify(productsFromLocalStorage));
        
        returnPrice()
        swal("Poof! El producto ha sido eliminado correctamente!", {
          icon: "success",
        });
      } else {
        swal("El producto se ha salvado!");
      }
    });
  };

 

  return (
    <div className={style.containerCart}>
    {console.log(stringLocalStorage)}
      <div className={style.containerInfo}>
      <Link to={"/home"}>
      <button>Seguir comprando</button>
      </Link>
        <h2>Mi orden</h2>
        <div className={style.containerPrice}>
          <h2>Precio total: ${price}</h2>
        </div>
        <div>
          <Link to="/resumeOrder">
            <button>Resumen de la orden</button>
          </Link>
        </div>
      </div>

      <div className={style.cards}>
        {productsFromLocalStorage.length && Array.isArray(productsFromLocalStorage) ?
           productsFromLocalStorage.map((e) => (
            <CardCart key={e.idProduct}  returnPrice={returnPrice}  deleteP={deleteProduct} obj={e} />
          )): (<h2>No hay productos!</h2>)}
      </div>
    </div>
  );
}

export default ShoppingCar;
