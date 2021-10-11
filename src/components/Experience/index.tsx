import { ReactElement } from 'react';
import styles from './Experience.module.scss';

interface ExperienceProps { 
    experience: {
        id: number,
        occupation: string,
        time: string,
        company: string,
    }
    children: ReactElement | ReactElement[]
}
export default function Experience({ experience, children }: ExperienceProps) {
    return (
        <div className={styles.experience}>
            <h4>{experience.occupation}</h4>
            <small>{experience.company} ({experience.time})</small>
            { children }    
            <hr/>         
        </div>
    )
}