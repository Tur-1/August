import { reactive, ref } from "vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches)
{
    isMobile.value = true;
    isDesktop.value = false;
}

export { isMobile, isDesktop };

export const isNotNull = (value) =>
{
    return value != null;
}

export const isNull = (value) =>
{
    return value == null;
}

export const isUnprocessableContent = (error) =>
{
    return error && error.response?.status == 422
}

export const isNotAuthenticated = (error) =>
{
    return error && error.response?.status == 401
}
export const isNotAuthorized = (error) =>
{
    return error && error.response?.status == 403
}
export const isNotFound = (error) =>
{
    return error && error.response?.status == 404
}
export const skeletonLoading = reactive({
    isLoading: false,
    item: null,
    show(item = null)
    {
        if (isNotNull(item))
        {
            this.item = item;
        }
        this.isLoading = true;
    },
    hide(item = null)
    {
        this.item = null;

        this.isLoading = false;
    }
});
