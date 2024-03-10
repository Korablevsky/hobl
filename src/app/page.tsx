import Accordeon from '@/components/Accordeon/Accordeon'
import AccordeonAndSchedule from '@/components/AccordeonAndSchedule/AccordeonAndSchedule'
import AccrodeonStats from '@/components/AccrodeonStats/AccrodeonStats'
import CardNoImage from '@/components/CardNoImage/CardNoImage'
import CardStrategy from '@/components/Card_strategy/CardStrategy'
import Title from '@/components/Title/Title'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.container}>
			<section>
				<Title text='ХОБЛ: мифы и реальность' />
				<Accordeon icon='/Icon_man.png' childrenOpen={<AccordeonAndSchedule />}>
					В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
					(COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было
					выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество
					женщин и мужчин.
				</Accordeon>
				<Accordeon icon='/Icon_arrow.png' childrenOpen={<AccrodeonStats />}>
					Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
					одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
					77% пациентов1
				</Accordeon>
			</section>
			<section>
				<Title text='Терапия ХОБЛ: что в фокусе?' />
				<h2 className={styles.title}>
					Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
				</h2>
				<h3 className={styles.sub_title}>
					Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
					<span className={styles.sup}>1</span> :
				</h3>

				<div className={styles.container__card}>
					<div className={styles.cards}>
						<CardStrategy
							img='/Card1.png'
							title='Ингаляционный'
							titleBold='антихолинергик'
						>
							Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с
							ним в конкурентный антагонизм за взаимодействие с эффекторными
							мускариновыми рецепторами, дополняет и потенцирует эффект
							β2-агонистов<span className={styles.sup}>1</span>
						</CardStrategy>
						<CardStrategy
							img='/Card2.png'
							title='Ингаляционный'
							titleBold='β2-агонист'
						>
							Вызывает бронходилатацию посредством релаксации гладкомышечных
							клеток бронхов независимо от характера констриктивных стимулов, т.
							е. выступают в качестве функциональных антагонистов
							бронхоконстрикции
						</CardStrategy>
						<CardStrategy
							img='/Card3.png'
							title='Ингаляционный'
							titleBold='глюкокортикостероид'
						>
							Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют
							хроническое воспаление при астме и снижают гиперреактивность
							дыхательных путей
						</CardStrategy>
					</div>
					<div className={styles.cards_no_image}>
						<CardNoImage>
							Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с
							разными механизмами действия; Назначение 2-х бронходилататоров из
							группы длительнодействующих β2-агонистов (ДДБА) и
							длительнодействующих антихолинергиков (ДДАХ), действие которых
							дополняет и усиливает друг друга
							<span className={styles.sup}>1</span>.
						</CardNoImage>
						<CardNoImage>
							Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых
							обострений в течение 1 года/1 тяжелое обострение, потребовавшее
							госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;
							Последние исследования показали, что амбулаторное применение
							ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по
							сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)
							<span className={styles.sup}>1</span>.
						</CardNoImage>
					</div>
				</div>
			</section>
		</main>
	)
}
