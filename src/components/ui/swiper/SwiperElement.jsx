import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './SwiperElement.module.scss'
import { useEffect, useRef, useState } from 'react'

const SwiperElement = ({dataArray}) => {
	const [swiperIndex, setSwiperIndex] = useState(0)
	const swiperRef = useRef(null)

	useEffect(() => {
		if (swiperIndex !== null && swiperRef.current) {
			swiperRef.current.slideTo(swiperIndex)
		}
	}, [swiperIndex])

	const handleImageClick = index => {
		setSwiperIndex(index)
	}

	return (
		<section className={styles.main}>
			<Swiper
				className={styles.Swiper}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				navigation={{
					nextEl: '.next',
					prevEl: '.prev',
					clickable: true
				}}
				onSwiper={swiper => (swiperRef.current = swiper)}
				onActiveIndexChange={swiper => setSwiperIndex(swiper.activeIndex)}
			>
				{dataArray.map((item, index) => (
					<SwiperSlide key={`_img-${index}`}>
						<div className={styles.wrapper}>
							<div className={styles.card}>
								{index === swiperIndex ? (
									<img src={item} alt='images card' style={{ border: '1px solid #dcdcdc' }} />
								) : (
									<img src={item} alt='images card' />
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className={styles.controller}>
					<div className={`${styles.next} next`}>
						<img src='svg/next.svg' alt='Next Icons' />
					</div>
					<div className={`${styles.prev} prev`}>
						<img src='svg/prev.svg' alt='Prev Icons' />
					</div>
				</div>
			</Swiper>

			<div className={styles.warpperBottom}>
				{dataArray.map((item, index) => (
					<div
						onClick={() => handleImageClick(index)}
						key={`_imgBottom-${index}`}
						className={styles.imagesBottom}
					>
						{index === swiperIndex ? (
							<img src={item} alt='images card' style={{ border: '1px solid #dcdcdc' }} />
						) : (
							<img src={item} alt='images card' />
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default SwiperElement
