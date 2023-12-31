import React from "react";
import styles from "./Linechart.module.css";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	// responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
	},
	maintainAspectRatio: false,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Guest",
			data: labels.map(() => faker.number.int()),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "User",
			data: labels.map(() => faker.number.int()),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export const Linechart = () => {
	return (
		<div className={styles.mainCont}>
			<div className={styles.cardHeading}>Activities</div>
			<div className={styles.cardData}>May - June 2021</div>
			<div className={styles.lineline}>
				<Line options={options} data={data} />
			</div>
		</div>
	);
};
