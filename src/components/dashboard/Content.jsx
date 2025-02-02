import { Route, Routes } from "react-router-dom";
import {Productos} from '../productos/Products'
import { AddProduct } from "../productos/Product";

export const Content = ({products, getProducts}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="productos" element={<Productos Productos={Productos}/>} />
                <Route path="agregarProducto" element={<AddProduct/>} />
            </Routes>

        </div>
    )
}