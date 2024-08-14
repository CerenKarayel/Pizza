import React from 'react'
import "./OrderPizza.css";

const OrderPizza = () => {
  return (
    <header className="header">
            <h1>Teknolojik Yemekler</h1>
            <nav className='link-container'>
                <a href="#link1" className="anasayfa-link">Anasayfa</a>
                <a href="#link2" className="siparis-link">Sipariş Oluştur</a>
            </nav>
        </header>
  )
}

export default OrderPizza

