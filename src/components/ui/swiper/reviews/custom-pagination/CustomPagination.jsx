import React from 'react'
import cn from 'clsx'
import styles from './CustomPagination.module.scss'

const CustomPagination = ({ slides, activeIndex, onSlideClick }) => {
	return (
		<div className={styles.customPagination}>
			{slides.map((slide, index) => (
				<div
					key={`pagination-${index}`}
					className={cn(styles.paginationItem, { [styles.active]: index === activeIndex })}
					onClick={() => onSlideClick(index)}
				/>
			))}
		</div>
	)
}

export default CustomPagination
