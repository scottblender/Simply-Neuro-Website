import React, {useState} from 'react'
import Chinmayi from './assets/images/chinmayi.png'
import './OurTeam.css'
import useLockBodyScroll from './useLockBodyScroll'
import Aux from './Auxilliary'

// displays executive team with hovering animations (will use react-bootstrap as template)
const OurTeam = () => {

		const team = [
		{id: 0, name: 'Chinmayi Balusu', title: 'Founder and CEO', description: 'Chinmayi is an undergraduate student at Columbia University and currently serves as the CEO. She founded Simply Neuroscience to share her love of learning about the brain with others and encourage students to pursue their interdisciplinary interests with neuroscience and psychology. Chinmayi has a background in longevity, biomedical, and neurodegenerative disease research, and she is passionate about the intersection of medicine and the humanities. In her free time, Chinmayi enjoys writing poetry, practicing taekwondo, and exploring nature.'}, 
		{id: 1, name: 'Athena', title: 'COO and Co-Director of Outreach & Research', description: 'Athena is a high school senior from Wantagh, New York and is a rising freshman at Duke University. She is an avid reader, artist, aspiring neuroscientist, and advocate for mental health awareness in her community'}, 
		{id: 2, name: 'Athena', title: 'COO and Co-Director of Outreach & Research', description: 'Athena is a high school senior from Wantagh, New York and is a rising freshman at Duke University. She is an avid reader, artist, aspiring neuroscientist, and advocate for mental health awareness in her community'}, 
]

		// Make dummy array to pass into state
		let teamHover = []
		for (var i = 0; i < team.length; i++) { 
			teamHover.push(false)
		}

		let [isHovering, setHovering] = useState(teamHover)

		// Make the array of elements to be displayed
		let teamItems = team.map(function (person) {
		  return (
				<div style={{width: "30%"}}>
					<img
						onMouseLeave={() =>  { 
							let newIsHovering = [] 
							for (var i = 0; i < team.length; i++) { 
								newIsHovering.push(isHovering[i])
							} 
							newIsHovering[person.id] = !newIsHovering[person.id]
							setHovering(newIsHovering)
						} }
						onMouseOver = { () => { 
							let newIsHovering = [] 
							for (var i = 0; i < team.length; i++) { 
								newIsHovering.push(isHovering[i])
							} 
							newIsHovering[person.id] = true
							setHovering(newIsHovering)

						} } 
						src={Chinmayi} alt=''> 
					</img>
					
					<h2 style={{color: "white"}} >{person.name}</h2>
					<h3 style={{color: "white"}}>{person.title}</h3>  
					<p style={{display: isHovering[person.id] ? "inline" : "none"}}> {person.description} </p>
				</div> 
			)
		})
		
    useLockBodyScroll()

    return(
        <Aux>
            <div className='Container'>
							{teamItems}
						</div>
        </Aux>
    )
}

export default OurTeam;
