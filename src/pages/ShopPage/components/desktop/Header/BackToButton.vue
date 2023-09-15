<template>
  <div class="row" v-if="!skeletonLoading.isLoading">
    <div class="col-lg-2 col-md-2">
      <div class="text-start text-dark" style="font-size: 12px">
        <i class="bi bi-caret-left-fill"></i>
        <Link
          v-if="props.params !== null"
          :to="{
            name: routeName,
            params: { categoryUrl: props.params },
          }"
          id="catalog_return"
          class="text-dark"
        >
          Back To {{ backTo }}
        </Link>

        <Link
          v-if="props.params == null"
          :to="{
            name: routeName,
          }"
          id="catalog_return"
          class="text-dark"
        >
          Back To {{ backTo }}
        </Link>
      </div>
    </div>
  </div>

  <BackToButtonSkeleton v-if="skeletonLoading.isLoading" />
</template>

<script setup>
import { skeletonLoading } from "@/helpers";
import { BackToButtonSkeleton } from "@/pages/ShopPage/components/desktop";
import { useCategoriesStore } from "@/pages/ShopPage/stores";

const props = defineProps(["backTo", "params", "routeName"]);

const CategoriesStore = useCategoriesStore();
</script>
