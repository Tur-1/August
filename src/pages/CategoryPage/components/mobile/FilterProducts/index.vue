<script setup>
import {
  Brands,
  Colors,
  SizeOptions,
} from "@/pages/CategoryPage/components/desktop";
import { useBottomOffcanvas, BottomOffcanvas } from "@/components/Offcanvas";
import { useRoute } from "vue-router";
import FilterHeader from "@/pages/CategoryPage/components/mobile/FilterProducts/FilterHeader.vue";
import FilterItem from "@/pages/CategoryPage/components/mobile/FilterProducts/FilterItem.vue";
import useProductsFilterService from "@/pages/CategoryPage/services/useProductsFilterService";
import useProductsStore from "@/pages/CategoryPage/stores/ProductsStore";

const route = useRoute();

const productsStore = useProductsStore();

const { clearAll, filterProducts, removeQuery, countProductsTotal } =
  useProductsFilterService();
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
  <Teleport to="#BottomOffcanvas">
    <BottomOffcanvas id="filter">
      <template #header>
        <FilterHeader @clearAll="clearAll(route.query)" />
      </template>
      <template #body>
        <FilterItem
          title="brands"
          offcanvasId="brands-filter"
          @onClose="countProductsTotal"
          :FilteredItems="route.query.brand"
          @removeQuery="({ index, item }) => removeQuery(index, item, 'brand')"
        >
          <Brands />
        </FilterItem>
        <FilterItem
          title="Colors"
          offcanvasId="colors-filter"
          @onClose="countProductsTotal"
          @removeQuery="({ index, item }) => removeQuery(index, item, 'color')"
          :FilteredItems="route.query.color"
        >
          <Colors />
        </FilterItem>
        <FilterItem
          title="Size"
          offcanvasId="sizes-filter"
          :FilteredItems="route.query.size"
          @onClose="countProductsTotal"
          @removeQuery="({ index, item }) => removeQuery(index, item, 'size')"
        >
          <SizeOptions />
        </FilterItem>
      </template>
      <template #footer>
        <button
          type="button"
          @click="filterProducts({ query: route.query })"
          class="btn btn-primary show-products-btn"
        >
          show products ({{ productsStore.total }})
        </button>
      </template>
    </BottomOffcanvas>
  </Teleport>
</template>
