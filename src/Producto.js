import React from "react";
import zanahoria from './img/zanahoria.jpeg';


export const Producto = () => {
    let nombre = "Zanahoria";
    let descripcion = "A david y a eduard les gusta la zanahoria"
    let usuario = {
        nombreCompleto : "Fernando Clavijo",
        edad : 40
    }


    return (
        <div className="Productos">
            <hr></hr>
            <h2>Lista de productos en venta</h2>
            <ul>
                <li>Nombre del producto: {nombre} </li>
                <li>Descripción del producto: {descripcion}</li>
                <li>Nombre del jefe: {usuario.nombreCompleto} </li>
            </ul>
            <br></br>
            <img src = {zanahoria} alt="zanahoria"></img>


        </div>
    )
}