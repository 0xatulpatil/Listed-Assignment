import React from "react";
import styles from "./Datachip.module.css";

export const Datachip = ({ icon, text, color, data }) => {
	return (
		<div className={styles.chip} style={{ backgroundColor: color }}>
			<div className={styles.data}>
				<div className={styles.chipText}>{text}</div>
				<div className={styles.chipNumber}>{data}</div>
			</div>
			<img src={icon} className={styles.icon} alt="icon"></img>
		</div>
	);
};
