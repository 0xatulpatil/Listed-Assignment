import React from "react";
import styles from "./Schedule.module.css";

export const Schedule = () => {
	return (
		<div className={styles.mainCont}>
			<div className={styles.headers}>
				<div className={styles.header}>Todays Schedule</div>
				<div className={styles.dates}>See All </div>
			</div>
			<div className={styles.charts}>
				<div className={styles.data}>
					<div className={styles.schd}>
						<div className={styles.bar}></div>
						<div className={styles.infodata}>
							<div className={styles.infoText}>Meeting with Suppliers</div>
							<div className={styles.infoSubtext}>14:00 15:00</div>
							<div className={styles.infoSubtext}>
								At Sunset Road, Kuta, Bali
							</div>
						</div>
					</div>
					<div className={styles.schd}>
						<div
							style={{ backgroundColor: "#6972C3" }}
							className={styles.bar}
						></div>
						<div className={styles.infodata}>
							<div className={styles.infoText}>Meeting with Suppliers</div>
							<div className={styles.infoSubtext}>14:00 15:00</div>
							<div className={styles.infoSubtext}>
								At Sunset Road, Kuta, Bali
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
