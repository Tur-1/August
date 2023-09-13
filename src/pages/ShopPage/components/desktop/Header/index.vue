<template>
  <div class="desktop-shop-page-header">
    <div class="row">
      <CurrentCategory />
      <div class="col-lg-10">
        <div class="d-flex justify-content-between align-items-center">
          <Breadcrumb />

          <SortProducts />
        </div>
      </div>
    </div>

    <BackToButton
      :backTo="CategoriesStore.parentCategory?.name ?? 'Home'"
      :routeName="CategoriesStore.parentCategory != null ? 'shop' : 'home'"
      :params="CategoriesStore.parentCategory?.url ?? null"
    />

    <hr class="mt-0 mb-0" />
  </div>
</template>

<script setup>
import {
  CurrentCategory,
  Breadcrumb,
  SortProducts,
  BackToButton,
} from "@/pages/ShopPage/components/desktop";
import useCategoriesStore from "@/pages/ShopPage/stores/CategoriesStore";

const CategoriesStore = useCategoriesStore();
</script>
