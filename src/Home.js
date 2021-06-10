import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
                    price={18.68}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="49538094"
                    title="2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"
                    price={949.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SL450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="The 7 Habits of Highly Effective People (30th Anniversary Edition)"
                    price={17.39}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51KVkEDF2KL._SX326_BO1,204,203,200_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="Sony XBR-65A8G 65 Inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2019 Model"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81iXvdDSnsL._AC_SL1500_.jpg"
                />
            </div>


        </div>
    )
}

export default Home;
