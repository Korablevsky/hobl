import Image from 'next/image'
import styles from './CardStrategy.module.css'

type CardStrategyProps = {
	img: string
	title: string
	titleBold: string
	children: React.ReactNode
}

export default function CardStrategy({
	img,
	title,
	titleBold,
	children,
}: CardStrategyProps) {
	return (
		<div className={styles.card}>
			<Image
				className={styles.image}
				src={img}
				alt='card'
				width={125}
				height={105}
			/>

			<h3 className={styles.card_title}>
				{title}
				<br />
				<span className={styles.bold}>{titleBold}</span>
			</h3>

			<p className={styles.card_text}>{children}</p>
		</div>
	)
}
