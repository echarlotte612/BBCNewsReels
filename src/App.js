import React from 'react';
import './App.css';
import Reel from './components/Reel';
import Heading from './components/Heading';
import News1 from './images/news-1.jpeg';
import News2 from './images/news-2.jpeg';
import News3 from './images/news-3.jpeg';
import News4 from './images/news-4.jpeg';
import News5 from './images/news-5.jpg';
import News6 from './images/news-6.jpg';
import News7 from './images/news-7.jpg';
import News8 from './images/news-8.jpg';
import News9 from './images/news-9.jpg';
import News10 from './images/news-10.jpg';


function App() {
  return (
  <div>
    <div className="wrapper main">
      <Heading 
        headingTitle="Long Reads"/>
      <Reel
        imageSrc={News1}
        newsTitle="Follow Live: Woman Stares Out At Bridge Until She Finds Happiness" />
      <Reel
        imageSrc={News2}
        newsTitle="This Taxi Driver's Patriotic Attempt To Beat Out Uber Competitors Will Scare You" />
      <Reel
        imageSrc={News3}
        newsTitle="Lots Of Folks In Funny Hats Decide To Buy Horses" />
      <Reel
        imageSrc={News4}
        newsTitle="Working From Home - A Step-By-Step Guide To Always Look Busy" />
      <Reel
        imageSrc={News5}
        newsTitle="Gemma Collins Weight Loss Trick Revealed In Exclusive Tell All" />
    </div>
    <div className="wrapper secondary">
      <Heading
        headingTitle="Short Reads"/>
      <Reel
        imageSrc={News6}
        newsTitle="How Best To Scuba During Covid-19" />
      <Reel
        imageSrc={News7}
        newsTitle="Don't Ask Don't Tell. The New Rules On Furries In The Military" />
      <Reel
        imageSrc={News8}
        newsTitle="PHONES BAD" />
      <Reel
        imageSrc={News9}
        newsTitle="How To Plug Your Insta At Work" />
      <Reel
        imageSrc={News10}
        newsTitle='He Wanted Her - She Did Crochet. "Age has never been a problem for us" says 87 year old Greta' />
    </div>
  </div>

  );
}

export default App;
