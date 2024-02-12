import styles from './Preview.module.scss'
import { previewDataIcons } from './data/previewDataIcons'

const Preview = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<h1 className={styles.title}>
					Beats Studio Buds <span>+</span>
				</h1>
				<p className={styles.text}>Powerful Sound. Perfect Fit</p>

				<div className={styles.prise}>
					<p className={styles.priseNumber}>£150</p>
					<p className={styles.priseNumber}>£5</p>
				</div>
			</div>

			<div className={styles.informationIcons}>
				{previewDataIcons.map((el, index) => (
					<div className={styles.informationIcon} key={`_Icons-${index}`}>
						<div
							className={styles.informationIconBody}
							style={{ backgroundImage: 'url(svg/preview-icons.svg)' }}
						>
							<img src={el.imgIcon} alt={el.imgAlt} />
							<p className={styles.informationIconText}>{el.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Preview
