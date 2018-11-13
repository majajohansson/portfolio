import React from 'react';
import { Page } from '../../ui';

import signupFlow from '../../assets/signupflow.png';
import signupFlowNew from '../../assets/signupflownew.png';
import myPayments from '../../assets/mypayments.png';
import myPaymentsNew from '../../assets/mypaymentsnew.png';
import articleNewProductsPicture from '../../assets/Masthead.png';
import PortfolioExample from '../../assets/PortfolioExample.png';

export default ({ match }) => (
  <Page match={match}>
    <h1 className="post__title">Releasing new products</h1>
    <img className="post__main-image" src={articleNewProductsPicture} />
    <p className="post__paragraph">

    </p>
    <h2 className="post__header">Releasing new products</h2>
    <p className="post__paragraph">Releasing new products is a project which started in July 2018 and is still ongoing. In this project I am the UX/UI designer and responsible for all aspects of product design, for example designing the process and website, user testing and creating material and presentations for stakeholders, while also improving the current product. The goal of the project is to release three new products; Samlingslån, personal loan and partner loan.</p>
  <p className="post__paragraph">I am currently working on creating a set of illustrations that will be used as hero images and also throughout the website. I am making the illustrations in Sketch.
Soon I will be able to share more pictures and comments on what I have been working on this fall.

</p>
</Page>
)
