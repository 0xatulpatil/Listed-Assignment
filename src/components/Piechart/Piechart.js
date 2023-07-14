import React from "react";
import styles from "./Piechart.module.css";
import { PieChart, Pie, Cell } from "recharts";

const data = [
	{ name: "Group A", value: 550 },
	{ name: "Group B", value: 310 },
	{ name: "Group C", value: 140 },
	// { name: "Group D", value: 200 },
];

const COLORS = ["#98D89E", "#EE8484", "#F6DC7D", "#DEE0EF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export const Piechart = () => {
	return (
		<div className={styles.mainCont}>
			<div className={styles.headers}>
				<div className={styles.header}>Top Products</div>
				<div className={styles.dates}>May - June 2021</div>
			</div>
			<div className={styles.charts}>
				<div className={styles.chart}>
					<PieChart className={styles.cch} width={200} height={200}>
						<Pie
							data={data}
							cx={100}
							cy={100}
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</div>
				<div className={styles.data}>
					<div className={styles.info}>
						<div className={styles.colorDot}></div>
						<div className={styles.infotext}>
							<div className={styles.info_heading}>Basic Tees</div>
							<div className={styles.info_subheading}>55%</div>
						</div>
					</div>
					<div className={styles.info}>
						<div
							style={{ backgroundColor: "#F6DC7D" }}
							className={styles.colorDot}
						></div>
						<div className={styles.infotext}>
							<div className={styles.info_heading}>Custom Short Pants</div>
							<div className={styles.info_subheading}>31%</div>
						</div>
					</div>
					<div className={styles.info}>
						<div
							style={{ backgroundColor: "#EE8484" }}
							className={styles.colorDot}
						></div>
						<div className={styles.infotext}>
							<div className={styles.info_heading}>Super Hoodies</div>
							<div className={styles.info_subheading}>14%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
