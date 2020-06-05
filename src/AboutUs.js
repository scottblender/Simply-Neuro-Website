import React from 'react'
import useLockBodyScroll from './useLockBodyScroll'
import './AboutUs.css'
import Aux from './Auxilliary'
import BRC from './assets/images/brc.png'
import Podcast from './assets/images/podcast.png'
import Writing from './assets/images/writing.png'
const AboutUs = () => {
    useLockBodyScroll()
    return(
        <Aux>
        <div className='About'>
            <p>Simply Neuroscience is an organization dedicated to developing students' interest in neuroscience and psychology, specifically through education, outreach, and awareness. We want to build a stronger bridge between neuroscience and psychology in high school and higher education while also increasing the impact of these fields on local, regional, national, and international levels. Our organization fosters a highly collaborative atmosphere among team members in hopes of providing a space for everyone to pursue their passion for learning about the brain; we welcome and highly encourage students with diverse and interdisciplinary interests. 
                We aim to provide access to equal opportunities in neuroscience and psychology for every student regardless of their education, socioeconomic background, race, or gender identity. We provide information about neuroscience and psychology classes, online courses, guest speakers and professionals, and more. Additionally, our Research team matches students with internships and opportunities based on their interests. Moreover, our team is creating resources for high school students to study neuroscience and psychology and compete in neuroscience competitions. We are in the works of developing online educational workshops about getting involved in hands-on research as well as creating a curriculum on computational and statistical neuroscience as well, with an extension to AI/ML! Simply Neuroscience also hopes to help spread understanding and acceptance about mental health and neurological and psychological conditions and illnesses. 
                We are in the works of creating guides about mental health along with illnesses that are not very well known to provide students with the knowledge and resources to promote awareness in their communities. Additionally, we are working to get legislation regarding mental illness passed by Congress. Furthermore, we are putting together a resource bank of undergraduate students, graduate students, and professionals involved in neuroscience and psychology as a part of our mentorship network. 
                We hope that these individuals can serve as a point of contact for high school students interested in pursuing neuroscience or psychology in college and beyond and can provide guidance along the way. Last but not least, we are currently organizing neuroscience and psychology conferences/conventions for high school students. Currently, we are organizing a virtual/online conference for the summer of 2020, and we hope to introduce high school students to the wonders of the brain and develop their interests. 
                Overall, Our goal is to guide and support students in every step of their neuroscience and psychology journey!
                </p>
        </div>
        <div className="Section">
            <h3>
                Our Departments
            </h3>
            <img src = {Writing} alt = ''></img>
            <img src = {Podcast} alt = ''></img>
            <img src = {BRC} alt = ''></img>
        </div>
        </Aux>
    )
}
export default AboutUs