import React from 'react';
import "./css/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image"  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                    alt="banner_image"/>
                    <div className="home_row">
                        <Product 
                        id='1'
                        title="Sony PlayStation 5 White"
                        price={169.99}
                        image="https://tse3.mm.bing.net/th/id/OIP.ERGSjRtbHvfVaAFVE5LBaAHaHH?pid=Api&P=0&h=220"
                        rating={5}
                        />
                        <Product 
                        id='2'
                        title="DELL Inspiron 15 Laptop '15.6'"
                        price={834.900}
                        image="https://tse3.mm.bing.net/th/id/OIP.MA5nbSsyk7V6Cm0z7gIUpwHaFD?pid=Api&P=0&h=220"
                        rating={4}
                        />
                       <Product 
                        id='3'
                        title="Iphone 16 pro 512GB"
                        price={1299}
                        image="https://tse1.mm.bing.net/th/id/OIP.4rUOdiyaL-F62t7ETBsO1AHaHa?pid=Api&P=0&h=220"
                        rating={4}
                       />
                    </div>
                    <div className="home_row">
                        <Product 
                        id='4'
                        title="24 Pack Airtight Food Storage Containers"
                        price={28.99}
                        image="https://tse1.mm.bing.net/th/id/OIP.q9alLPJ37mkiNAj1F1_mLgHaHa?pid=Api&P=0&h=220"
                        rating={2}
                    />
                    <Product 
                        id='5'
                        title="High quality Laptop Backpack with usb phone charger"
                        price={120}
                        image="https://tse1.mm.bing.net/th/id/OIP.ivVLoAbUnNOKoTNyI1NSvAHaHa?pid=Api&P=0&h=220"
                        rating={5}
                    />
                   </div>  
                <div className="home_row">
                    <Product 
                        id='6'
                        title="Samsung 70' curve smart tv"
                        price={1059.89}
                        image="https://tse4.mm.bing.net/th/id/OIP.v5LS-uFpupaj_4q9h_VNdwHaHa?pid=Api&P=0&h=220"
                        rating={5}
                    />
                    </div>
        </div>
    </div>
  )
}

export default Home