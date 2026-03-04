import styles from './CategorySection.module.scss'
import { useRouter } from 'next/router'

import { tempCategories } from './tempCategories'

export default function CategorySection() {
    const router = useRouter()
    const { state } = router.query

    function handleNav(category: string) {
        if (!category) return
        router.push(`/${state}/${category}`)
    }

    return (
        <div className={styles.container}>
            {tempCategories.map((category, index) => 
                <span onClick={() => handleNav(category)} className={styles.category}>{category}</span>
            )}
        </div>
    )
}