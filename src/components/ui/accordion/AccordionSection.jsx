import { useState, useEffect, useRef } from 'react'
import styles from './Accordion.module.scss'
import clsx from 'clsx'

const AccordionSection = ({ section, isActiveSection, toggleSection }) => {
	
	const [contentHeight, setContentHeight] = useState(0)
	const contentRef = useRef(null)

	useEffect(() => {
		if (isActiveSection && contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight)
		}
	}, [isActiveSection])

	const handleToggle = () => {
		toggleSection()
		// Вычисляем высоту контента при его открытии
		if (!isActiveSection) {
			setContentHeight(contentRef.current.scrollHeight)
		} else {
			setContentHeight(0) // Скрываем контент при закрытии
		}
	}

	return (
		<div className={styles.body} onClick={handleToggle}>
			<div className={styles.inner}>
				<div className={styles.heading}>
					<div className={styles.icon}>{<section.icon />}</div>
					<div className={styles.title}>{section.title}</div>
				</div>
				<div>
					{isActiveSection ? (
						<img src='svg/button_arrow.svg' alt='Icon up' />
					) : (
						<img src='svg/button_arrow_plus.svg' alt='Icon Down' />
					)}
				</div>
			</div>
			<div
				ref={contentRef}
				id={`content-${section.title}`}
				className={clsx(styles.text, {
					[styles.active]: isActiveSection,
					[styles.collapsed]: !isActiveSection
				})}
				style={{ maxHeight: contentHeight }}
			>
				{section.text}
			</div>
		</div>
	)
}

export default AccordionSection
