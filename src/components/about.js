import React, { Component } from 'react'
import linkedinlogo from '../img/linkedin.png';
import gitlogo from '../img/github.png';

export class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I'm Travis</h1>
        <p>
        I pride myself on being an excellent learner, solution based-thinker, innovative leader and a strong communicator. I have over 7 years experience working in Calgary’s sport and recreation community. My areas of expertise include customer service, program development and management, coaching and providing feedback, written and verbal communication and building and sustaining relationships in the workplace.
        </p>
        <br/>
        <h3>Learn even more about me!</h3>
        <div className='icon'>
          <a href = "https://www.linkedin.com/in/travismilne/"><img src={linkedinlogo} className='icon'></img></a>
        </div>
        <div className='icon'>
          <a href = "https://github.com/TAMilne"><img src={gitlogo} className='icon'></img></a>
        </div>
      </div>
    )
  }
}

export default About;