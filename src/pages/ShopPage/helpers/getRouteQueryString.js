import { FilterStore } from "@/pages/ShopPage/stores";



export default function getRouteQueryString(routeQuery)
{

    let queryString;
    for (queryString in routeQuery)
    {


        if (Array.isArray(routeQuery[queryString]) || 'sort' == queryString)
        {
            FilterStore[queryString] = routeQuery[queryString];
        } else
        {
            FilterStore[queryString] = [routeQuery[queryString]];

        }
    }

}