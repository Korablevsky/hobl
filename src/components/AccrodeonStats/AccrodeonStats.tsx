import Image from 'next/image'
import styles from './AccrodeonStats.module.css'

type CardProps = {
	img: string
	number: number
	text: string
	textBold: string
	small: string
	type?: string
}

export default function AccrodeonStats() {
	return (
		<div className={styles.container}>
			<h3 className={styles.text_bold}>
				Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно
				среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
				пациентов<span className={styles.sup}>1</span>
			</h3>
			<p className={styles.text}>
				В течение 5 лет после первого тяжёлого обострения в живых остаются
				только 40% пациентов.<span className={styles.sup}>2</span> Прогноз после
				обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте
				миокарда и некоторых злокачественных опухолях.
			</p>
			<h2 className={styles.title}>Пятилетняя выживаемость пациентов</h2>

			<div className={styles.card__box}>
				<Card
					img='/Card_Heart.png'
					number={45.5}
					text='пациентов с'
					textBold='сердечной недостаточностью'
					small='Популяционное когортное исследование (N=385)'
					type='sup'
				/>
				<Card
					img='/Card_Man.png'
					number={55.3}
					text='пациентов с '
					textBold='инфарктом миокарда'
					small='Апостериорный анализ когортного исследования (N=2887)'
					type='sup'
				/>

				<Card img='/Card_Pis.png'
				number={50.5}
				text='пациентов с'
				textBold='раком мочевого пузыря'
				small='Исследование Национальной статистической службы (N=42642)'
				/>
			</div>
		</div>
	)
}

function Card({ img, number, text, textBold, small, type }: CardProps) {
	return (
		<div className={styles.card}>
			<Image
				className={styles.image}
				src={img}
				alt='icon'
				width={100}
				height={131}
			/>
			<span className={styles.card__number}>{number}%</span>
			<p className={styles.card__text}>
				{text}{' '}
				<span className={styles.bold}>
					{textBold}
					{type === 'sup' && <span className={styles.sup}>1</span>}
				</span>{' '}
			</p>
			<small className={styles.card__small}>{small}</small>
		</div>
	)
}
