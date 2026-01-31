import styles from './Categories.module.scss'

import { tempCategories } from './tempCategories'

export default function Categories() {


    return (
        <div className={styles.container}>
            {tempCategories.map((category, index) => <span className={styles.category}>{category}</span>)}
        </div>
    )
}