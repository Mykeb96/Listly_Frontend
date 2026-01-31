import styles from '../../styles/pages/[state]/StatePage.module.scss'

import { useRouter } from 'next/router'

import Categories from '@/components/categories/Categories';

export default function StatePage() {
    const router = useRouter()
    const { state } = router.query;




    return (
        <div className={styles.container}>
            <Categories />
        </div>
    )
}