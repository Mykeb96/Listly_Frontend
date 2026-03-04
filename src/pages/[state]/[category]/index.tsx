import { useRouter } from "next/router"

export default function CategoryPage() {
    const router = useRouter()
    const { category } = router.query

    return (
        <div>
            {category}
        </div>
    )
}