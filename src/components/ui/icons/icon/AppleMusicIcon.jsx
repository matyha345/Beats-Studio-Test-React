import styles from './icon.module.scss'
import cn from 'clsx'
const AppleMusicIcon = ({ isActiveBorder }) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.activeBorder]: isActiveBorder
			})}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0_1_3577)'>
					<path
						d='M23.6101 0.254879C23.365 0.0470607 23.038 -0.037161 22.7205 0.0151004L7.44781 2.70186C6.92581 2.79462 6.54546 3.24753 6.54546 3.77726V16.3607C6.54546 16.9629 6.05644 17.4521 5.45457 17.4521H4.36362C1.95704 17.452 0 18.9206 0 20.726C0 22.5314 1.95704 24 4.36362 24C6.7702 24 8.72725 22.5314 8.72725 20.726V9.05781L21.8182 6.74757V14.178C21.8182 14.7801 21.3291 15.2693 20.7273 15.2693H19.6364C17.2297 15.2693 15.2728 16.738 15.2728 18.5434C15.2728 20.3487 17.2298 21.8174 19.6364 21.8174C22.043 21.8174 24 20.3487 24 18.5434V1.09045C24 0.767522 23.8573 0.461675 23.6101 0.254879Z'
						fill='#282828'
					/>
				</g>
				<defs>
					<clipPath id='clip0_1_3577'>
						<rect width='24' height='24' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}

export default AppleMusicIcon
