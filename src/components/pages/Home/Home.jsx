import { useState } from 'react'
import Layout from '../../layout/Layout'
import ColorButtons from '../../ui/color-btn/ColorButtons'
import SwiperElement from '../../ui/swiper/SwiperElement'
import Preview from './components-page/preview/Preview'
import { imageData } from './data/dataRenderSwiper'
import styles from './Home.module.scss'
import Button from '../../ui/button/Button'
import Alert from '../../ui/alert/Alert'
import Pay from '../../ui/icons/pay/Pay'
import InformationSize from './components-page/information-size/InformationSize'
import Accordion from '../../ui/accordion/Accordion'
import { dataInformation } from './data/dataInformation'
import SwiperRevies from '../../ui/swiper/reviews/SwiperReviews'
import { dataInformationReviews } from './data/dataInformationReviews'

const Home = () => {
	const [activeCard, setActiveCard] = useState(imageData.silver)

	const handleCardChange = cardType => {
		setActiveCard(imageData[cardType])
	}

	return (
		<Layout>
			<div className={styles.wrapper}>
				<Preview />
				<div className={styles.reviews}>
					<p className={styles.reviewsText}>See our 437 reviews on</p>
					<img src='svg/reviews-icons.svg' alt='Reviews Image' />
				</div>

				<div className={styles.swiper}>
					<SwiperElement dataArray={activeCard} />

					<h2 className={styles.swiperTitle}>
						Beats Studio Buds <span>+</span>
					</h2>
					<p className={styles.swiperText}>True Wireless Noise Cancelling Earbuds</p>

					<div className={styles.swiperPrise}>
						<p className={styles.swiperNumber}>£150</p>
						<p className={styles.swiperNumber}>£3</p>

						<div className={styles.swiperDiscount}>
							<span>90% OFF</span>
						</div>
					</div>

					<div className={styles.colorHandler}>
						<h3 className={styles.colorHandlerTitle}>Color:</h3>
						<div className={styles.colorHandlerInner}>
							<ColorButtons
								clickHandler={() => handleCardChange('silver')}
								isActive={activeCard === imageData.silver ? true : null}
								bgColor={{ backgroundColor: '#adacb1' }}
							/>
							<ColorButtons
								clickHandler={() => handleCardChange('black')}
								isActive={activeCard === imageData.black ? true : null}
								bgColor={{ backgroundColor: '#282828' }}
							/>
							<ColorButtons
								clickHandler={() => handleCardChange('pink')}
								isActive={activeCard === imageData.pink ? true : null}
								bgColor={{ backgroundColor: '#ECAAA7' }}
							/>
							<ColorButtons
								clickHandler={() => handleCardChange('white')}
								isActive={activeCard === imageData.white ? true : null}
								bgColor={{ backgroundColor: '#ECE5DD' }}
							/>
						</div>
					</div>
				</div>

				<div className={styles.button}>
					<Button>BUY NOW</Button>
					<Alert />
					<Pay />
				</div>

				<div className={styles.informationSize}>
					<InformationSize />
				</div>

				<div className={styles.accordion}>
					<Accordion sections={dataInformation} />
				</div>

				<div className={styles.swiperReviews}>
					<h2 className={styles.swiperReviewsTitle}>What the Experts are Saying</h2>
					<SwiperRevies dataArrayReviews={dataInformationReviews} />
				</div>

				<div style={{ opacity: '0' }}>opacity</div>
			</div>
		</Layout>
	)
}
export default Home
