import { ReactElement } from "react";
import styles from './Box.module.scss';
interface BoxProps { 
    title: string,
    children: ReactElement | ReactElement[]
}

export default function Box({ title, children }: BoxProps) {
    return (
        <div className={styles.box}>
            <h3>{title}</h3>
            <div className="box-body">
               { children }
            </div>
        </div> 
    );
}