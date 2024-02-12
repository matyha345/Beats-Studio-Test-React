import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './SwiperReviews.module.scss'
import { useEffect, useRef, useState } from 'react'
import CustomPagination from './custom-pagination/CustomPagination'

const SwiperRevies = ({ dataArrayReviews }) => {
	
	const [activeSlide, setActiveSlide] = useState(1)
	const swiperRef = useRef(null)

	useEffect(() => {
		if (activeSlide !== null && swiperRef.current) {
			swiperRef.current.slideTo(activeSlide)
		}
	}, [activeSlide])

	const handleSlideChange = index => {
		setActiveSlide(index)
	}
	return (
		<div>
			<Swiper
				className={styles.main}
				modules={[Pagination]}
				spaceBetween={3}
				slidesPerView={1.3}
				centeredSlides={true}
				pagination={false}
				initialSlide={1}
				onSwiper={swiper => (swiperRef.current = swiper)}
				onActiveIndexChange={swiper => setActiveSlide(swiper.activeIndex)}
			>
				{dataArrayReviews.map((item, index) => (
					<SwiperSlide key={`_arrayReviews-${index}`}>
						<div className={styles.wrapper}>
							<div className={styles.content}>
								<div className={styles.inner}>
									<p className={styles.text}>{item.title}</p>
									<div className={styles.nameReview}>
										<img src='svg/youtube.svg' alt='YouTube Icon' />
										<h1 className={styles.title}>{item.name}</h1>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<CustomPagination
				slides={dataArrayReviews}
				activeIndex={activeSlide}
				onSlideClick={handleSlideChange}
			/>
		</div>
	)
}

export default SwiperRevies
