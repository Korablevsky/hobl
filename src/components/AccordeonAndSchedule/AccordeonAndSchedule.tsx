import Image from 'next/image'
import styles from './AccordeonAndSchedule.module.css'

export default function AccordeonAndSchedule() {
	return (
		<div className={styles.container}>
			<p className={styles.text}>
				В десятилетнем исследовании{' '}
				<span className={styles.bold}>
					«Генетическая эпидемиология ХОБЛ» (COPDGene)
				</span>{' '}
				среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено{' '}
				<span className={styles.bold}>преобладание женщин (66%)</span>, а в
				возрасте 60-64 лет количество женщин и мужчин.
			</p>
			<p className={styles.text}>
				Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть
				связано с тем, что дыхательные пути курящих женщин имеют более{' '}
				<span className={styles.bold}> высокий процент площади стенок</span>, но
				меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей
				по сравнению с курящими мужчинами.
			</p>
			<Image
				className={styles.image}
				src='/Shedule.png'
				alt='card'
				width={1000}
				height={300}
			/>
		</div>
	)
}
