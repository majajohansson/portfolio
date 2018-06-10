import React from 'react';
import { Page } from '../../ui';

import signupFlow from '../../assets/signupflow.png';
import signupFlowNew from '../../assets/signupflownew.png';
import myPayments from '../../assets/mypayments.png';
import myPaymentsNew from '../../assets/mypaymentsnew.png';
import articleMoankPicture from '../../assets/article-moank.png';

export default ({ match }) => (
  <Page match={match}>
    <h1 className="post__title">Revamp of loan company website</h1>
    <img className="post__main-image" src={articleMoankPicture} />
    <p className="post__paragraph">
      During the spring of 2018 I was hired by Moank, a company specialising in consumer loans, to do a revamp of the website.<br />
      The following are a few examples of what I worked on.
    </p>
    <h2 className="post__header">Sign up flow</h2>
    <img className="post__image" src={signupFlow} />
    <p className="post__paragraph">The sign up flow had one main problem: its inconsistency with the rest of the website. It was also quite long to finish because it was composed of 4 different steps. These lead to a high drop off rate, clearly a big problem.</p>
    <img className="post__image" src={signupFlowNew} />
    <p className="post__paragraph">To solve this, I gave it a design that was consistent with the rest of the website. The image that Moank wants to give to their customers is a modern and serious tech company. I therefore gave it a modernised, clean look by using white colour and minimalistic information. I also changed the font to Proxima Nova because it gives a more modern look than the previous one.</p>
    <p className="post__paragraph">The last step of the sign up flow was actually not part of the sign up, but more a proposal page. It was therefore unnecessary to include it in the sign up steps. Advertising for 3 steps instead of 4 can make a huge difference on the conversion rate.</p>
    <p className="post__paragraph">In the previous version, the steps were shown as Step 1 - Step 4. Following the minimalistic approach, I replaced them with dots instead. It gives the same amount of information to the customer, while not taking his attention to let him focus more on the form.</p>

    <h2 className="post__header">Personal page</h2>
    <img className="post__image" src={myPayments} />
    <p className="post__paragraph">The personal page consisted of one single page, with lots of scrolling because it displayed all your invoices. There was also a lot of unused space. That made it very difficult for the customer to find relevant information to him. Interviews and tests showed that the personal page was not really easy to understand and was lacking critical information.</p>
    <img className="post__image" src={myPaymentsNew} />
    <p className="post__paragraph">In the new version, the personal page is built up by a dashboard, something that is very trendy now. There was no need to display the whole payment plan. Customers were logging in to their personal page to check if they have a payment to do. This is why I decided to only display the next payment details on the dashboard. The full payment plan is then available on a separate page. Another frequent request from customers was to be able to see their payments, which is why I added a page displaying all their transactions.</p>
    <p className="post__paragraph">An important revenue source for Moank comes from customers making a withdrawal on their credit, especially because there is no acquisition cost. This is why it was important to highlight the withdrawal button on the dashboard. In order to do that I chose to put it as the first item on the dashboard. The button is large and in a green colour to stand out and give a positive feeling. The dashboard both makes it easier for the user to get  information at-a-glance, and also saves time as it got rid of the scrolling.</p>
  </Page>
)
