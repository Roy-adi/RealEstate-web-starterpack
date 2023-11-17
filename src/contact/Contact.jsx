import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
  return (
    <section className='c-wrapper'>
    <div className='paddings innerWidth flexCenter c-container'>
    {/* left side */ }
    <div className='c-left flexColStart' >
    <span className='orangeText' >Our Contact</span>
    <span className='primaryText'>Easy to contact us</span>
    <span className='secondaryText' >We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better
    </span>

    <div className='flexColStart contactModes'>
     {/* 1st column */ }
    <div className='flexStart row cont' >
    {/* 1st Mode */ }
    <div className='flexColCenter mode'>
    <div className='flexStart'>
    <div className='flexCenter icon'>
        <MdCall size={25}/>
    </div>
    <div className='flexColStart details'>
    <span className='primaryText'>Call</span>
    <span>+03241259511</span>
    </div>
    </div>
    <div className='flexColStart button'>
    call now
    </div>
    </div>
    {/* 2nd Mode */ }
    <div className='flexColCenter mode'>
    <div className='flexStart'>
    <div className='flexCenter icon'>
        <BsFillChatDotsFill size={25}/>
    </div>
    <div className='flexColStart details'>
    <span className='primaryText'>Chat</span>
    <span>+03241713301</span>
    </div>
    </div>
    <div className='flexColStart button'>
    Chat now
    </div>
    </div>
    </div>
   {/* 2nd column */ }
    <div className='flexStart row cont'>
    {/* 3rd Mode */ }
    <div className='flexColCenter mode'>
    <div className='flexStart'>
    <div className='flexCenter icon'>
        <BsFillChatDotsFill size={25}/>
    </div>
    <div className='flexColStart details'>
    <span className='primaryText'>Video Call</span>
    <span>+03241259511</span>
    </div>
    </div>
    <div className='flexColStart button'>
   Video call now
    </div>
    </div>
    {/* 4th mode */ }
    <div className='flexColCenter mode'>
    <div className='flexStart'>
    <div className='flexCenter icon'>
        <HiChatBubbleBottomCenter size={25}/>
    </div>
    <div className='flexColStart details'>
    <span className='primaryText'>Message</span>
    <span>+03241713301</span>
    </div>
    </div>
    <div className='flexColStart button'>
    Chat now
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='C-right'>
     <div className='image-container' >
     <img src='contact.jpg' alt=''/>
     </div>
    </div>
    </div>
    </section>
  )
}

export default Contact