<template>
  <div class="col">
    <button
      class="sort-filter-btns"
      type="button"
      @click="useBottomOffcanvas.open('sort-products')"
    >
      <span>sort</span>
    </button>
  </div>

  <BottomOffcanvas id="sort-products" height="40%">
    <template #header>
      <span class="sort-products-title">Sort</span>
    </template>
    <template #body>
      <div class="mobile-sort-products">
        <div class="body">
          <div class="list-group">
            <a
              role="button"
              v-for="(sort, index) in SortProductsStore.list"
              class="text-dark list-group-item"
              @click="
                sortPorudtcs({
                  slug: sort.slug,
                }),
                  useBottomOffcanvas.close('sort-products')
              "
            >
              <div>
                <i :class="sort.icon"></i>
                {{ sort.name }}
              </div>
              <div class="circle-wrap">
                <span
                  :class="{
                    'active-sort': ProductsFilterStore.sort == sort.slug,
                  }"
                ></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
  </BottomOffcanvas>
</template>
<script setup>
import { useBottomOffcanvas, BottomOffcanvas } from "@/components/Offcanvas";
import SortProductsStore from "@/pages/ShopPage/stores/SortProductsStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import useSortProductsService from "@/pages/ShopPage/services/useSortProductsService";

const { sortPorudtcs } = useSortProductsService();
</script>
