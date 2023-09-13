import { FC } from "react";
import styles from './Footer.module.css';

export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <p>Powered by Tramvai</p>
        </div>
    )
}