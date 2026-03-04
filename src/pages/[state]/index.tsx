import styles from '../../styles/pages/[state]/StatePage.module.scss'

import { useRouter } from 'next/router'

import CategorySection from '@/components/categories/CategorySection';
import LocationSection from '@/components/locations/LocationSection';

export default function StatePage() {
    const router = useRouter()
    const { state } = router.query;




    return (
        <div className={styles.container}>
            <h2 className={styles.State_Header}>{state}</h2>
            <div className={styles.Sections}>
                <CategorySection />
                <LocationSection />
            </div>
        </div>
    )
}