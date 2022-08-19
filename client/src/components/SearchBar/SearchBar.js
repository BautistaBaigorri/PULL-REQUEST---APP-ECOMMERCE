import React, { useState } from 'react'
import { useDispatch } from "react-redux";
/* import { Link } from 'react-router-dom'; */
import { getProductsByName } from '../../Actions'
import styles from "../SearchBar/SearchBar.module.css"

function SearchBar() {
  const dispatch = useDispatch()


  const [search, setSearch] = useState({name:""})
  
  const onChange = (e) => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(search.name === ""){return}
        else{
        dispatch(getProductsByName(search.name))
        }
        setSearch({name:""})
        
  }

  return (
    <div>
      
      <form onSubmit={onSubmit}>
    <input className={styles.searchBar} type="text" name="name" value={search.name} onChange={onChange}></input>
    {/* <Link to="/search"> */}<button className={styles.searchButton} type='submit' onSubmit={onSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>{/* </Link> */}
    </form>
    
    </div>
  )
}

export default SearchBar