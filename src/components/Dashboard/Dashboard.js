import React from "react";
import styles from "./Dashboard.module.css";

import bellIcon from "../../assets/bell.svg";
import searchIcon from "../../assets/search.svg";
import menu from "../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg";
import revenue from "../../assets/Vector.svg";
import likes from "../../assets/Vector (1).svg";
import users from "../../assets/Vector (2).svg";
import transactions from "../../assets/total_transactions_icon.svg";

import { Datachip } from "../Datachip/Datachip";
import { Linechart } from "../Linechart/Linechart";
import { Link } from "react-router-dom";
import { Piechart } from "../Piechart/Piechart";
import { Schedule } from "../Schedule/Schedule";

export const Dashboard = () => {
	const dataChips = [
		{
			text: "Total Revenue",
			icon: revenue,
			color: "#DDEFE0",
			data: "$2,123",
		},
		{
			text: "Total Transaction",
			icon: transactions,
			color: "#F4ECDD",
			data: "1,520",
		},
		{
			text: "Total Likes",
			icon: likes,
			color: "#EFDADA",
			data: "9,721",
		},
		{
			text: "Total Users",
			icon: users,
			color: "#DEE0EF",
			data: "892",
		},
	];

	return (
		<div className={styles.maincontainer}>
			<div className={styles.datachip}>
				<div className={styles.chipname}>Dashboard</div>
				<div className={styles.chipOptions}>
					<div className={styles.searhBar}>
						<input
							className={styles.input}
							type="text"
							placeholder="Search.."
						/>
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
			<div className={styles.chipData}>
				{dataChips.map((chip) => (
					<Datachip
						icon={chip.icon}
						color={chip.color}
						text={chip.text}
						data={chip.data}
					/>
				))}
			</div>
			<div className={styles.linechart}>
				<Linechart />
			</div>
			<div className={styles.otherCharts}>
				<Piechart className={styles.piechart} />
				<Schedule className={styles.schedule} />
			</div>
		</div>
	);
};
