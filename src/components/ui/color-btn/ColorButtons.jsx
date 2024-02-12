import cn from 'clsx'
import styles from './ColorButtons.module.scss'

const ColorButtons = ({ bgColor, clickHandler, isActive }) => {
	return (
		<button
			onClick={clickHandler}
			className={cn(styles.wrapper, {
				[styles.activeBorder]: isActive
			})}
		>
			<span style={bgColor}></span>
		</button>
	)
}

export default ColorButtons
