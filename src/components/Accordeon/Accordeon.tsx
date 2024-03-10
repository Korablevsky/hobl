'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Accordeon.module.css'

type AccordeonProps = {
	icon: string
	children: React.ReactNode
	childrenOpen: JSX.Element
}

export default function Accordeon({
	icon,
	children,
	childrenOpen,
}: AccordeonProps) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordeon = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.box}>
			<Image
				className={`${isOpen === true  ? styles.hidden : styles.image }`}
				src={icon}
				alt='Icon_man'
				width={100}
				height={100}
			/>
			<h3 className={`${isOpen ? styles.hidden : ''} ${styles.text}`}>
				ХОБЛ болеют <br />
				<span className={styles.span}>
					преимущественно <br />
					мужчины?
				</span>
			</h3>
			<div
				onClick={toggleAccordeon}
				className={`${styles.accordeon} ${isOpen ? styles.open : ''} ${
					!isOpen ? styles.horizontal_shadow : ''
				} `}
			>
				{isOpen ? childrenOpen : children}
			</div>
		</div>
	)
}
