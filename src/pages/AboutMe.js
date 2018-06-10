import React from 'react';
import { Page } from '../ui';
import profilePicture from '../assets/maja.jpg';

export default ({ match }) => (
  <Page match={match}>
    <div className="profile">
      <img className="profile__picture" src={profilePicture} />
      <div className="profile__description">
        <p>My name is Maja. I’m a product design graduate based in Stockholm looking for a UI/UX designer position.</p>
        <p>Driven by problem solving, I love to design simple and beautiful digital experiences that create real value for end users.</p>
        <p>I like to work closely to customers and I strongly believe that a good design can not be achieved without them. User feedback help me reflect on my work to improve it and create a better user experience.</p>
      </div>
    </div>
    <div className="contact">
      <p>Contact:</p>
      <ul className="contact__list">
        <li className="contact__list__item">Linkedin: <a href="https://www.linkedin.com/in/maja-johansson-998a20135/" target="_blank">Maja Johansson</a></li>
        <li className="contact__list__item">Email: <a href="mailto:maja.johansson1993@gmail.com">maja.johansson1993@gmail.com</a></li>
      </ul>
    </div>
  </Page>
)
