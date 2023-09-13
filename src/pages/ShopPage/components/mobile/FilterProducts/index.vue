<script setup>
import {
  Brands,
  Colors,
  SizeOptions,
} from "@/pages/ShopPage/components/desktop";
import { useBottomOffcanvas, BottomOffcanvas } from "@/components/Offcanvas";
import { useRoute, useRouter } from "vue-router";
import FilterHeader from "@/pages/ShopPage/components/mobile/FilterProducts/FilterHeader.vue";
import FilterItem from "@/pages/ShopPage/components/mobile/FilterProducts/FilterItem.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { FilterStore, useProductsStore } from "@/pages/ShopPage/stores";
import { watch } from "vue";

const { getProducts } = useShopPageService();
const route = useRoute();
const router = useRouter();

const productsStore = useProductsStore();

const filterProducts = async () => {
  await getProducts({
    category_url: route.params.categoryUrl,
    query: route.query,
  });
};
function clearAll() {
  for (const iterator in FilterStore) {
    FilterStore[iterator] = [];
  }
  useBottomOffcanvas.close("filter");
}

const removeQuery = async (index, item, queryString) => {
  // FilterStore?.[queryString].splice(index, 1);
};
</script>

<template>
  <div class="col border-start">
    <button
      class="sort-filter-btns"
      @click="useBottomOffcanvas.open('filter')"
      type="button"
      id="mobile-offcanvas-filter-btn"
    >
      <i class="bi bi-funnel-fill"></i><span>Filter</span>
    </button>
  </div>

  <BottomOffcanvas id="filter">
    <template #header>
      <FilterHeader @clearAll="clearAll" />
    </template>
    <template #body>
      <FilterItem
        title="brands"
        offcanvasId="brands-filter"
        :FilteredItems="route.query.brand"
        @onClose="filterProducts('brand')"
        @removeQuery="({ index, item }) => removeQuery(index, item, 'brand')"
      >
        <Brands />
      </FilterItem>
      <FilterItem
        title="Colors"
        offcanvasId="colors-filter"
        @removeQuery="({ index, item }) => removeQuery(index, item, 'color')"
        :FilteredItems="route.query.color"
        @onClose="filterProducts('color')"
      >
        <Colors />
      </FilterItem>
      <FilterItem
        title="Size"
        offcanvasId="sizes-filter"
        :FilteredItems="route.query.size"
        @onClose="filterProducts('size')"
        @removeQuery="({ index, item }) => removeQuery(index, item, 'size')"
      >
        <SizeOptions />
      </FilterItem>
    </template>
    <template #footer>
      <button
        type="button"
        @click="useBottomOffcanvas.close('filter')"
        class="btn btn-primary show-products-btn"
      >
        show products ({{ productsStore.total }})
      </button>
    </template>
  </BottomOffcanvas>
</template>
