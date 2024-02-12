import styles from './Header.module.scss'

const Header = () => {
	const dataNameLink = ['About Product', 'Reviews', 'Contact Us']

	return (
		<div className={styles.wrapper}>
			<a href='/' className={styles.logo}>
				<img src='svg/logo.svg' alt='' />
			</a>

			<ul className={styles.item}>
				{dataNameLink.map((item, index) => (
					<li key={`_link-${index}`} className={styles.list}>
						<a className={styles.link} href='#'>
							{item}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Header
