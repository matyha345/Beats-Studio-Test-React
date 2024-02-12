import Notification from '../ui/notification/Notification'
import Header from './header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Notification />
			<Header />
			{children}
		</div>
	)
}

export default Layout
