
import { useState } from 'react';
import './App.css';

function App() {

  const [languageName, setLanguageName] = useState('English')

  return (
    <div className="App">
      <div className="header">
        <div className="title-bar">
          <div className="logo"></div>
          <div className="title-boxes">

            <div className="language-toggle">
              <i class="fa-solid fa-globe"></i>
              {languageName}
              <i class="fa-sharp fa-solid fa-sort-down"></i>
            </div>
            <div className="sign-in-box">
              Sign In
            </div>

          </div>

        </div>




        <div className="main-content">
          <div className="main-title-head">
            Unlimited movies, TV shows and more.
          </div>
          <div className="sub-head">
            Watch anywhere. Cancel anytime
          </div>
          <div className="email-text">
            Ready to watch? Enter your email to create or restart your membership.
          </div>
          <form className="email-box">
            <input type="email" id="email-scan" placeholder='Email address' required />
            <button type="submit" className='get-started'>
              Get Started
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </form>
        </div>


      </div>
      <div className="section">
        <div className="text-section ">
          <div className="section-head">
            Enjoy on your TV.
          </div>
          <div className="section-sub-head">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </div>
        </div>
        <div className="img-section-one">
        </div>
      </div>


      <div className="section-inverted">
        <div className="img-section-two">
        </div>
        <div className="text-section ">
          <div className="section-head">
            Download your shows to watch offline.
          </div>
          <div className="section-sub-head">
            Save your favourites easily and always have something to watch.
          </div>
        </div>

      </div>



      <div className="section">
        <div className="text-section ">
          <div className="section-head">
            Watch everywhere.
          </div>
          <div className="section-sub-head">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </div>
        </div>
        <div className="img-section-three">
        </div>
      </div>


      <div className="section-inverted">
        <div className="img-section-four">
        </div>
        <div className="text-section ">
          <div className="section-head">
            Create profiles for children.
          </div>
          <div className="section-sub-head">
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </div>
        </div>

      </div>


      <div className="faq-section">
        <div className="section-head">
          Frequently Asked Questions
        </div>
        <div className="question-tag question-one">
          <div className="faq">
            What is Netflix?
          </div><i class="fa-solid fa-plus"></i>
        </div>
        <div className="question-tag question-two">
          <div className="faq">How much Netflix cost?
          </div> <i class="fa-solid fa-plus"></i>
        </div>
        <div className="question-tag question-three"><div className="faq">
          Where can I watch?
        </div>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="question-tag question-four"><div className="faq">
          How do I cancel?
        </div>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="question-tag question-five"><div className="faq">
          What can I watch on Netflix?
        </div>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="question-tag question-six">
          <div className="faq">
            Is Netflix good for kids?
          </div><i class="fa-solid fa-plus"></i>
        </div>

        <div className="email-text">
            Ready to watch? Enter your email to create or restart your membership.
          </div>

        <form className="email-box">
          <input type="email" id="email-scan" placeholder='Email address' required />
          <button type="submit" className='get-started'>
            Get Started
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </form>

      </div>

    </div>
  );
}

export default App;
