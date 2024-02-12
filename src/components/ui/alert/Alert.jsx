import { useEffect, useState } from 'react'
import styles from './Alert.module.scss'

const Alert = () => {
	const [timeLeft, setTimeLeft] = useState({
		hours: 3,
		minutes: 59,
		seconds: 37,
		tenths: 7 // Добавляем десятые доли секунды
	})

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prevTime => {
				let newTime = { ...prevTime }

				// Уменьшаем десятые доли секунды
				newTime.tenths -= 1

				// Если десятые доли секунды меньше нуля, уменьшаем секунды и восстанавливаем десятые доли секунды
				if (newTime.tenths < 0) {
					newTime.seconds -= 1
					newTime.tenths = 9

					// Если секунды меньше нуля, уменьшаем минуты и восстанавливаем секунды
					if (newTime.seconds < 0) {
						newTime.minutes -= 1
						newTime.seconds = 59

						// Если минуты меньше нуля, уменьшаем часы и восстанавливаем минуты
						if (newTime.minutes < 0) {
							newTime.hours -= 1
							newTime.minutes = 59
						}
					}
				}

				// Если время вышло, останавливаем таймер
				if (newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds < 0) {
					clearInterval(timer)
				}

				return newTime
			})
		}, 100) // Обновляем каждые 100 миллисекунд

		return () => clearInterval(timer)
	}, [])

	// Форматирование чисел
	const formatNumber = num => {
		return num < 10 ? `0${num}` : num
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<img src='svg/time.svg' alt='Time image' />
				<p className={styles.text}>Hurry up! Sale Ends in</p>
			</div>

			<div className={styles.timeСhange}>
				<span>{formatNumber(Math.floor(timeLeft.hours))} h</span>
				<p>:</p>
				<span>{formatNumber(Math.floor(timeLeft.minutes))} m</span>
				<p>:</p>
				<span>
					{formatNumber(Math.floor(timeLeft.seconds))}.{timeLeft.tenths} s
				</span>{' '}
				{/* Вывод десятых долей секунды */}
			</div>
		</div>
	)
}

export default Alert
