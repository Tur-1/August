import { createRouter, createWebHistory } from 'vue-router'
import config from "@/config/app";
import useRouterStore from '@/router/RouterStore'
import AuthMiddleware from '@/Middleware/AuthMiddleware'

const router = createRouter({



  history: createWebHistory(import.meta.env.BASE_URL),


  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage/views/index.vue'),
      meta: {
        title: config.APP_NAME,
      }
    }, {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/pages/WishlistPage/views/index.vue'),
      meta: {
        requiresAuth: true,
        title: 'wishlist',
      },
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/pages/CategoriesPage/views/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        hidePageTitle: true,
        title: 'categories',

      },

    },
    {
      path: '/categories/:category_url',
      name: 'category_page',
      component: () => import('@/pages/CategoryPage/views/index.vue'),

      meta: {
        previousPage: '/categories',
        hidePageTitle: true,
        title: '',

      }
    },
    {
      path: '/product-detail/:productSlug',
      name: 'productDetail',
      component: () => import('@/pages/ProductDetailPage/views/index.vue'),
      meta: {
        title: config.APP_NAME,
        transition: 'slide-left',
      },

    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: () => import('@/pages/MyAccountPage/views/index.vue'),
      meta: {
        requiresAuth: true,
        title: 'My Account',
      },

    },
    {
      path: '/my-account/orders/:order_id',
      name: 'orderPage',
      component: () => import('@/pages/MyAccountPage/views/OrderPage/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        previousPage: '/my-account',
        requiresAuth: true,
        title: 'order',
      },
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/pages/CheckoutPage/views/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        previousPage: '/cart',
        requiresAuth: true,
        title: 'checkout',
      }
    },

    {
      path: '/cart',
      name: 'shoppingCart',
      component: () => import('@/pages/ShoppingCartPage/views/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        requiresAuth: true,
        title: 'shopping cart',
      }
    },
    {
      path: '/password-reset/:token',
      name: 'ResetPassword',
      component: () => import('@/pages/AuthPage/views/ResetPasswordView.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        title: 'reset password',
      },

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      meta: {
        title: config.APP_NAME,
      },
      component: () => import('@/pages/Errors/PageNotFound.vue'),

    },

  ],
  scrollBehavior(to, from, savedPosition)
  {


    if (savedPosition)
    {
      return savedPosition
    } else
    {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
});


router.beforeEach((to, from, next) =>
{


  if (to.meta.requiresAuth)
  {
    return AuthMiddleware({ to, from, next });
  }

  next();

})


router.afterEach((to, from) =>
{

  const routerStore = useRouterStore();


  routerStore.setPageBackgroundColor(to.meta.backgroundColor);
  routerStore.setPageTitle(to.meta.title);
  routerStore.setPreviousPage(to.name == 'productDetail' ? from.fullPath : to.meta.previousPage);


})

export default router
