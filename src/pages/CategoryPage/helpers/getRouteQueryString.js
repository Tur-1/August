import ProductsFilterStore from "@/pages/CategoryPage/stores/ProductsFilterStore";



export default function getRouteQueryString(routeQuery)
{

    let queryString;
    for (queryString in routeQuery)
    {


        if (Array.isArray(routeQuery[queryString]) || 'sort' == queryString)
        {
            ProductsFilterStore[queryString] = routeQuery[queryString];
        } else
        {
            ProductsFilterStore[queryString] = [routeQuery[queryString]];

        }
    }

}