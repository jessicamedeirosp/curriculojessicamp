import styles from './Skills.module.scss';

interface skillsProps {
    skills: string[];
}

export default function Skills({ skills }: skillsProps) {
    return (
        <ul className={styles.skills}>
            {skills.map(skill =>
                <li>{skill}</li>
            )}           
        </ul>
    );
}