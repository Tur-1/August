import { reactive } from "vue";



const SortProductsStore = reactive({
    list: [
        {
            id: "1",
            name: "Suggested",
            slug: "suggested",
            icon: "bi bi-card-list me-2",
        },
        {
            id: "2",
            name: "new",
            slug: "new",
            icon: "bi bi-fire me-2",
        },
        {
            id: "3",
            name: "Price: High to Low",
            slug: "price-high-to-low",
            icon: "bi bi-sort-up me-2",
        },
        {
            id: "4",
            name: "Price: Low to High",
            slug: "price-low-to-high",
            icon: "bi bi-sort-down-alt me-2",
        },
    ]
});
export default SortProductsStore;