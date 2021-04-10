import React from 'react';
import { Link } from '@reach/router';
// import Typography from '@material-ui/core/Typography';
// import Layout from '../components/layout';
// import Content from '../components/content';
import Header from '../components/header';

export default function About() {
  return (
    <>
      <h2>
        Welcome to <Header />
      </h2>
      <p>
        My name is Jason Han and here in <Header />, I'll be sharing my experiences in both providing useful information
        through my blogs and also keeping track of my journey as a developer.
      </p>
      <p>Here are some facts about me:</p>
      <ul>
        <li>
          Born in South Korea, grew up in Canada(Canadian Citizen) but currently living in South Korea. I'm fluent in
          Korean and English.
        </li>
        <li>
          I am a Self taught developer with an entrepreneurial spirit. I've ran my own business for over 10 years and
          gained a lot of skills and experiences that might've been hard to obtain otherwise.
        </li>
        {/* <li>
          It's been about 6 months since I've been concentrating on learning how to code and working on becoming a React
          front-end developer. So let me know if you're hiring! <Link to="/contact/"> *wink wink*</Link>
        </li> */}
        <li>
          I've developed a keen eye in UX/UI designs but I've seen many in my career who can design better than I can
          and so, I'd like to become a full stack developer after becoming a front-end dev in the near future.
        </li>
        <li>I'm currently working on JavaScript, React and GraphQL since this site is built using Gatsby.</li>

        <li>Last updated: Feb, 4th 2021</li>
      </ul>
    </>
  );
}
