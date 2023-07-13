import React from "react";
import styles from "./Dashboard.module.css";

import bellIcon from "../../assets/bell.svg";
import searchIcon from "../../assets/search.svg";
import menu from "../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg";
export const Dashboard = () => {
	return (
		<div className={styles.maincontainer}>
			<div className={styles.datachip}>
				<div className={styles.chipname}>Dashboard</div>
				<div className={styles.chipOptions}>
					<div className={styles.searhBar}>
						<input type="text" placeholder="Search.." />
					</div>
					<div className={`${styles.icon} ${styles.search}`}>
						<img className={styles.searchIcon} src={searchIcon} alt="search" />
					</div>
					<div className={styles.menu}>
						<img src={menu} alt="" />
					</div>
					<div className={styles.icon}>
						<img className={styles.bell} src={bellIcon} alt="Bell Icon" />
					</div>
					<div className={styles.icon}>
						<div className={styles.avatar}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
