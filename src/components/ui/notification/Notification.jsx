import styles from './Notification.module.scss'

const Notification = () => {
	return (
		<div
			className={styles.wrapper}
		>
			<p className={styles.text}>
				Flash Sale in 'Country': Free 2-3 Day express delivery!
			</p>
		</div>
	)
}

export default Notification
