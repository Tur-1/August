
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import useProductPageApi from '@/pages/ProductDetailPage/api/useProductPageApi';
import useRouterStore from '@/router/RouterStore';
import useToastNotification from '@/components/Toast/useToastNotification';
import { useRoute } from "vue-router";
import { ref } from 'vue';
import { isNotFound, isNull, isUnprocessableContent, skeletonLoading } from '@/helpers';
import { useAuthModalStore, useAuthUserStore } from '@/pages/AuthPage/stores';
import { useCartCounterStore } from '@/pages/ShoppingCartPage/stores';
import
{
    useReviewsStore,
    useProductStore
} from '@/pages/ProductDetailPage/stores';

const review = ref({
    comment: "",
    errors: null,
});
export default function useProductPageService()
{
    const CartCounter = useCartCounterStore();
    const productStore = useProductStore();

    const getProductDetail = async () =>
    {


        skeletonLoading.show();
        let route = useRoute();

        try
        {

            let response = await useProductPageApi.getProductDetail(route.params.productSlug);

            productStore.product = response.data.product;
            productStore.categories = response.data.categories;
            productStore.images = response.data.images;
            productStore.sizeOptions = response.data.sizeOptions;

        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterStore.redirectToRoute('pageNotFound');
            }
        }

        skeletonLoading.hide();

    };
    const getProductReviews = async (product_id) =>
    {

        try
        {
            let reviewsStore = useReviewsStore();
            let response = await useProductPageApi.getProductReviews(product_id);

            reviewsStore.reviews = response.data.reviews;

            review.value.comment = '';
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterStore.redirectToRoute('pageNotFound');
            }
        }
    };
    const getRelatedProducts = async () =>
    {

        try
        {

            let response = await useProductPageApi.getRelatedProducts(productStore.product.id);

            productStore.relatedProducts = response.data.relatedProducts;

        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterStore.redirectToRoute('pageNotFound');
            }
        }

    };
    const sendComment = async (productSlug) =>
    {

        useLoadingSpinner.show();

        try
        {
            let response = await useProductPageApi.sendComment(productSlug, review.value);


            review.value.comment = '';

            await getProductReviews(productStore.product.id);


            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {

            if (isUnprocessableContent(error))
            {
                review.value.errors = error.response.data.errors.comment;
            }
            if (isNotFound(error))
            {
                useToastNotification.open({ error: true })
                    .withMessage(error.response.data.message);
            }
        }


        useLoadingSpinner.hide();

    };
    const addToCart = async () =>
    {

        if (isSizeNotSelected() || !productStore.product.in_stock) return;

        if (!useAuthUserStore().isAuthenticated)
        {
            useAuthModalStore.open();
            return;
        }
        useLoadingSpinner.show();

        try
        {
            let response = await useProductPageApi.addToCart(productStore.selectedSize);


            CartCounter.increase();

            useToastNotification.open().withMessage(response.data.message);


        } catch (error)
        {
            if (error.response.status == 404)
            {
                useRouterStore.redirectToRoute('pageNotFound');
            }
        }


        useLoadingSpinner.hide();
    };

    const isSizeNotSelected = () =>
    {
        return isNull(productStore.selectedSize.size_id) || isNull(productStore.selectedSize.product_id);
    }
    return {
        getProductDetail,
        review,
        getProductReviews,
        addToCart,
        sendComment,
        getRelatedProducts


    }
}
