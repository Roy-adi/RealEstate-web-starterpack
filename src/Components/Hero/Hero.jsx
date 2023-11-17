import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth hero-container flexCenter">
            {/* left side */}
            <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange"/>
                <motion.h1
                initial={{y:"2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:2,type:'just'}
                }
                >
                    Discover <br/>
                    Most Suitable <br/> property
                </motion.h1>
            </div>
            <div className="flexColStart hero-description">
                <span className='secondaryText' >Find a property that suit you vary easily</span>
                <span className='secondaryText' >Forget all difficulties in finding a residence for you</span>
            </div>
            <div className=" flexCenter serach-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type='text'/>
                <button className='button'>search</button>
            </div>
            <div className="stats flexCenter">
                <div className="flexColCenter stat">
                    <span> <CountUp start={8000} end={9000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>premium product</span>
                </div>
                <div className="flexColCenter stat">
                    <span> <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Coustomers</span>
                </div>
                <div className="flexColCenter stat">
                    <span> <CountUp  end={28} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Award winning</span>
                </div>
            </div>
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x:"7rem",opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:4,type:"spring"
                }}

                className="image-container">
                    <img src='./hero-image.png' alt=''/>
                </motion.div>

            </div>
        </div>
    

    </section>
  )
}

export default Hero