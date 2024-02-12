import styles from './Pay.module.scss'

const Pay = () => {
	const arrivalSistemPay = [
		'svg/visa.svg',
		'svg/master-cart.svg',
		'svg/samsung-pay.svg',
		'svg/appel-pay.svg',
		'svg/google-pay.svg'
	]
	return (
		<div className={styles.wrapper}>
			{arrivalSistemPay.map((item, index) => (
				<div key={`__payCart-${index}`} className={styles.body}>
					<img src={item} alt='Pay Cart' />
				</div>
			))}
		</div>
	)
}
export default Pay
