import { ReactElement } from 'react';
import styles from './Education.module.scss';

interface EducationProps { 
    education: {
        id: number,    
        course: string,
        institution: string,        
    }
    children: ReactElement | ReactElement[]
}
export default function Education({ education, children }: EducationProps) {
    return (
        <div className={styles.education}>
            <h4>{education.course}</h4>
            <small>{education.institution}</small>
            { children }    
            <hr/>         
        </div>
    )
}