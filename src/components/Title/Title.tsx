import styles from "./Title.module.css";

export default function Title({text}: {text: string}) {
	return <h2 className={styles.text}>{text}</h2>
}
