import styles from './CardNoImage.module.css'

export default function CardNoImage({
	children,
}: {
	children: React.ReactNode
}) {
	return <div className={styles.container}>
		{children}
	</div>
}
