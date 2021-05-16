import foodpic1 from "../../assets/images/food1.jpg";
import foodpic2 from "../../assets/images/wall.jpg";

export const infoObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    header: 'info1',
    headline: 'Health is the most precious',
    description:
      'While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.According to a study conducted by the University of Florida, the brain releases heroin-like chemicals called endogenous opioids when an individual indulges on sweet, salty or fatty foods.',
    buttonLabel: 'Read More',
    imgStart: '',
    //img: url(${ foodpic1}),
    alt: 'food1',
    start: ''
  };
  
  export const infoObjTwo = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    header: 'info2',
    headline: 'About us',
    description:
      "We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans in your area.For us, sustainability is not a lofty idea but a fundamental, and necessary, endeavor. Our concept is about the food and drink of course, but it’s also about our team, our facilities, our practices, and the hundreds of decisions we make each day that affect the world around us. We believe it’s about finding a balance, which allows us to sustain our quest of making quality, accessible food, while also giving back to our community and the environment.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img : require('../../assets/foodpic2.jpg'),
    alt: 'food2',
    start: 'true'
  };