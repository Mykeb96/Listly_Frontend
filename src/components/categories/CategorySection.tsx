import styles from './CategorySection.module.scss'

import { tempCategories } from './tempCategories'

export default function CategorySection() {


    return (
        <div className={styles.container}>
            {tempCategories.map((category, index) => <span className={styles.category}>{category}</span>)}
        </div>
    )
}