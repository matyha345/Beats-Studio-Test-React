import styles from './Buttons.module.scss'

const Button = ({children}) => {
    return(
        <button className={styles.button}>{children}</button>
    )
}

export default Button