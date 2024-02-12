import AppelIcon from '../../../../ui/icons/icon/AppelIcon'
import AppleMusicIcon from '../../../../ui/icons/icon/AppleMusicIcon'
import styles from './InformationSize.module.scss'

const InformationSize = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<AppleMusicIcon isActiveBorder={true} />
				<h2 className={styles.title}>Free Apple Music Trial</h2>
			</div>
			<p className={styles.text}>Get 6 months of access to over 100 million songs, ad-free</p>
			<div className={styles.block}>
				<AppelIcon isActiveBorder={true} />
				<h2 className={styles.title}>In-Store Pickup</h2>
			</div>
			<p className={styles.textBottom}>Pick up your Beats at an Apple Store near you</p>

			<div className={styles.bottom}>
				<h2 className={styles.title}>Earbuds</h2>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Height:</p>
					<p className={styles.bottomRight}>0.59 in / 1.5 cm</p>
				</div>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Weight:</p>
					<p className={styles.bottomRight}>5 g</p>
				</div>
				<h2 className={styles.titleCase}>Case</h2>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Height:</p>
					<p className={styles.bottomRight}>1 in / 2.55 cm</p>
				</div>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Weight:</p>
					<p className={styles.bottomRight}>48 g</p>
				</div>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Length:</p>
					<p className={styles.bottomRight}>2.83 in / 7.2 cm</p>
				</div>
				<div className={styles.bottomText}>
					<p className={styles.bottomLeft}>Width:</p>
					<p className={styles.bottomRight}>2 in / 5.1 cm</p>
				</div>
			</div>
		</div>
	)
}

export default InformationSize
