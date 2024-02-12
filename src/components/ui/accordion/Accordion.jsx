import { useState } from 'react'
import styles from './Accordion.module.scss'
import AccordionSection from './AccordionSection'

const Accordion = ({ sections }) => {
	const [activeSections, setActiveSections] = useState([0,1])

	const toggleSection = index => {
		if (activeSections.includes(index)) {
			setActiveSections(activeSections.filter(i => i !== index))
		} else {
			setActiveSections([...activeSections, index])
		}
	}

	return (
		<div className={styles.wrapper}>
			{sections.map((section, index) => (
				<AccordionSection
					section={section}
					key={`_mapAccordion_${index}`}
					isActiveSection={activeSections.includes(index)}
					toggleSection={() => toggleSection(index)}
				/>
			))}
		</div>
	)
}

export default Accordion
