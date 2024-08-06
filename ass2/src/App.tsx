import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductManagementPage from "./ProductManagementPage";
import ProductDetail from "./ProductDetail";
import AddNewProductPage from "./AddNewProductPage";
import UpdateProductPage from "./UpdateProductPage";
import { useEffect, useState } from "react";
import { error } from "console";


function App() {
  const[p,setP] = useState([])
  useEffect(() =>{
    const getData = () =>{
      fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setP(data))
    }
    getData()
  },[])

  const remove = (id:any) =>{
      if(confirm("xoa")){
        fetch(`http://localhost:3000/products/${id}`,{
          method:"DELETE"
        })
        const newP = p.filter ((item) => item.id != id)
        setP(newP)
      }
  }

  const onHandleSubmit = (data: any) => {
    fetch("http://localhost:3000/products", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(newData => {
      const newP = p.map(item => item.id === newData.id ? newData : item);
      setP(newP);
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/admin/products-ProductManagementPage">ProductManagementPage</Link>
          </li>
          <li>
            <Link to="/admin/products/add-AddNewProductPage">AddNewProductPage</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/admin/products-ProductManagementPage" element={<ProductManagementPage p={p} remove={remove} />} />
        <Route path="/admin/products/:id-ProductDetail" element={<ProductDetail />} />
        <Route path="/admin/products/add-AddNewProductPage" element={<AddNewProductPage onHandleSubmit={onHandleSubmit} />} />
        <Route path="/admin/products/:id/update-UpdateProductPage" element={<UpdateProductPage />} />
      </Routes>
    </>
  );
}

export default App;
