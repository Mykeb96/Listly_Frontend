import styles from '../../styles/pages/[state]/StatePage.module.scss'

import { useRouter } from 'next/router'

import CategorySection from '@/components/categories/CategorySection';
import LocationSection from '@/components/locations/LocationSection';

export default function StatePage() {
    const router = useRouter()
    const { state } = router.query;




    return (
        <div className={styles.container}>
            <CategorySection />
            <LocationSection />
        </div>
    )
}