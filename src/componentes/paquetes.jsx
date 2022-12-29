import React from "react";
import './paquetes.css'

function paquetes (){
   return(
      <div className="divider">
         <p>PAQUETES DISPONIBLES</p>
         <div className="card-container2">
            <div className="card">
               <p className="titulo-card">Paquete basico</p>
               <p className="texto-card">Paquete pensado para las microempresas. Con él podrás realizar ventas con ticket, remisión y facturas. Te permitirá llevar el control de las ventas y proporcionará información sobre la utilidad del negocio. Cuenta con una aplicación de venta de tiempo aire (recargas telefónicas) y pago de servicios.</p>
               <a href="#" className="card-btn">Conoce mas</a>
            </div>
            <div className="card">
               <p className="titulo-card">Paquete estandar</p>
               <p className="texto-card">Es el paquete ideal para microempresas, pero también puede ser usado por pequeños negocios. Además de las ventajas que te ofrece el plan Básico, te permitirá administrar y controlar las ventas y compras que tu negocio requiere. Muestra la información estadística de las ventas para facilitar y mejorar la toma de decisiones.</p>
               <a href="#" className="card-btn">Conoce mas</a>
            </div>
            <div className="card">
               <p className="titulo-card">Paquete Premium</p>
               <p className="texto-card">Diseñado específicamente para negocios con más de una sucursal. Incluye todos los beneficios del paquete Control Total, además te permitirá controlar eficientemente el surtido de sucursales y los traspasos de mercancía. Posee una herramienta para el registro de entrada-salida del personal ayudando a que la administración de tu negocio sea más fácil.</p>
               <a href="#" className="card-btn">Conoce mas</a>
            </div>
         </div>
      </div>
   )
}
export default paquetes;