import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import dbIcon from "../../assets/dashboard.svg";
import txnIcon from "../../assets/transactions.svg";
import userIcon from "../../assets/users.svg";
import settingIcon from "../../assets/settings.svg";
import scdIcon from "../../assets/schedules.svg";

export const Navbar = () => {
	return (
		<div className={styles.rightContainer}>
			<div className={`${styles.container} ${styles.fixed}`}>
				<div className={styles.navbar}>
					<div className={styles.options}>
						<div className={styles.logo}>Board.</div>
						<div className={`${styles.logo} ${styles.logoS}`}>B.</div>
						<div className={styles.links}>
							<div className={styles.mainLinks}>
								<Link className={styles.hyperlink} to="/user/dashboard">
									<div className={styles.link}>
										<div className={styles.linkIcon}>
											<img src={dbIcon} alt="logo" />
										</div>
										<div className={styles.linkText}>Dashboard</div>
									</div>
								</Link>
								<Link className={styles.hyperlink} to="/user/txn">
									<div className={styles.link}>
										<div className={styles.linkIcon}>
											<img src={txnIcon} alt="logo" />
										</div>
										<div className={styles.linkText}>Transactions</div>
									</div>
								</Link>
								<Link className={styles.hyperlink} to="/user/txn">
									<div className={styles.link}>
										<div className={styles.linkIcon}>
											<img src={scdIcon} alt="logo" />
										</div>
										<div className={styles.linkText}>Schedules</div>
									</div>
								</Link>
								<Link className={styles.hyperlink} to="/user/txn">
									<div className={styles.link}>
										<div className={styles.linkIcon}>
											<img src={userIcon} alt="logo" />
										</div>
										<div className={styles.linkText}>User</div>
									</div>
								</Link>
								<Link className={styles.hyperlink} to="/user/txn">
									<div className={styles.link}>
										<div className={styles.linkIcon}>
											<img src={settingIcon} alt="logo" />
										</div>
										<div className={styles.linkText}>Settings</div>
									</div>
								</Link>
							</div>
							<div className={styles.subLinks}>
								<div className={styles.sl}>Help</div>
								<div className={styles.sl}>Contact Us</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.container} ${styles.dummy}`}>
				<div className={styles.navbar}>
					<div className={styles.options}>
						<div className={styles.logo}>Board.</div>
						<div className={`${styles.logo} ${styles.logoS}`}>B.</div>
						<div className={styles.links}>
							<div className={styles.subLinks}>
								<div className={styles.sl}>Help</div>
								<div className={styles.sl}>Contact Us</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};
