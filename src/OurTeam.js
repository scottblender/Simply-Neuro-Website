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
		{id: 2, name: 'Aravind Krishnan', title: 'President of the Board of Directors and Director of Legislation Project', description: 'Aravind is a high school Junior from Hillsborough, New Jersey. As director of Legislation, he is spearheading a campaign to reform the place mental health has in our society and create awareness for it. To do so, the team is lobbying state and national legislatures for legal reform on these issues and ensuring that people have adequate access to mental health therapy. He also serves as President of the Board of Directors and manages the legal and organizational affairs of Simply Neuroscience in this role. Aside from SN, Aravind enjoys debating in Model UN and Congress, playing the violin, working in the lab, and dabbling in badminton.'}, 
		{id: 3, name: 'Peter Cao', title: 'Vice President of the Board of Directors | Director of Computational & Statistical Neuroscience', description: 'Peter is a senior in Sacramento, CA, and he is deeply interested in Computer Science and physics, although his time here has awakened a growing interest in cognitive science and computational neuroscience, which is the exciting intersection of physics, computer science, and neuroscience. He is involved in many efforts to increase access to education about these disciplines to new audiences such as Gen Z. In his free time, Peter enjoys talking to friends, drinking boba, and listening to music.'}, 
		{id: 4, name: 'Dharshan Varia', title: 'Secretary of the Board of Directors', description: ''}, 
		{id: 5, name: 'Parin Shaik', title: 'Treasurer of Board of Directors | Co-Director of Awareness Content Creation | Director of Conferencing & Fundraising', description: ''},
		{id: 6, name: 'Serene Feng', title: 'Co-Director of Outreach & Research | Podcast Team Head Host', description: 'Serene is a homeschooled senior from Connecticut who loves listening to podcasts, reading non-fiction books, and melding flavors together (aka cooking)! She is in the Outreach department and loves working in teams to inspire high school students to explore STEM/Neuroscience. She firmly believes that anyone can create opportunities for others, and is proud that Simply Neuroscience offers that!'},
		{id: 7, name: 'Ishika Kohli', title: 'Director of Editing | Human Resources Department Manager', description: ''},
		{id: 8, name: 'Skyler Basco', title: 'Co-Director of Brain Resource Creation | GirlsGotSTEAM x SN Project Lead', description: 'Skyler is a high school junior from Merrick, New York with an ever-expanding interest for neuroscience technologies, especially CRISPR-Cas9. She is an artist, a public speaking enthusiast, along with a Young Member of the New York Academy of Sciences, through which she collaborates with individuals across the globe to develop innovative solutions to real world issues. Outside of Simply Neuroscience, Skyler is a TEDEd Club Co-Founder and TEDx speaker, where she is passionate about providing her peers a platform to share their ideas worth spreading. Through Simply Neuroscience, she leads a collaboration with GirlGotSTEAM in hopes to help educate underprivileged youth about the brain through interactive workshops. '},
		{id: 9, name: 'Scott Blender', title: 'Director of Writing and Web Development', description: ''},
		{id: 10, name: 'Jed Quiaoit', title: 'Co-Director of Brain Resource Creation', description: ''},
		{id: 11, name: 'Luis Verdin', title: 'Director of Marketing', description: ''},
		{id: 12, name: 'Sheima Bana', title: 'Co-Director of Awareness Content Creation', description: 'Sheima is a Year 12 student from London, England. She is particularly interested in neurodegenerative diseases and potential treatments for diseases/disorders as well as being an advocate for mental health. She enjoys spending her time reading novels, learning new languages, and has shown a keen interest in public health. She is currently doing her A Levels and has ambitions to study medicine in the near future.'},
		{id: 13, name: 'Daewon Kwon', title: 'Director of Media', description: 'Daewon Kwon is currently a junior in California interested in behavioral neuropsychology. He joined Simply Neuroscience because it seemed like a fun organization to really explore new opportunities and expand on his interests through creative measures such as podcasts. Outside of SN, Daewon has various interests like playing in a band, reading, ceramics, and painting.'}
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
