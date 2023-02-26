import React from 'react'
import Image from "./hero-banner.png"
import "./App.css"
import axios from 'axios'
import { useEffect,useState } from 'react'

function Hero() {
    const [values, setValues] = useState([]);
    useEffect(() => {
        axios
          .get("https://api.coingecko.com/api/v3/coins/")
          .then((res) => {
            setValues(res.data);
            
          })
          .catch((err) => {
            console.log(err);
          })
      }, [])
    return (
        <>
            <section class="section hero" >
                <div class="container">

                    <div class="hero-content">

                        <h3 class="h1 hero-title">My Assignment crypto website The Kabeer Currency.</h3>

                        <p class="hero-text">
                            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                        </p>

                        <a href="#" class="btn btn-primary ">No way Home</a>

                    </div>

                    <figure class="hero-banner">
                        <img src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?w=740&t=st=1676624451~exp=1676625051~hmac=94f7fca2da103f1781876735e7b6fb9f70b5859d4757c3d995ca142e598665fe" width="570" height="448" alt="hero banner" class="w-100"/>
                    </figure>

                </div>
            </section>

  

        </>
    )
}

export default Hero