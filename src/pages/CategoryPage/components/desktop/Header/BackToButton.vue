<template>
  <div class="row" v-if="skeletonLoading.item !== 'sidebar'">
    <div class="col-lg-2 col-md-2">
      <div class="text-start text-dark" style="font-size: 12px">
        <i class="bi bi-caret-left-fill"></i>
        <Link
          v-if="props.params !== null"
          :to="{
            name: routeName,
            params: { category_url: props.params },
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

  <BackToButtonSkeleton v-if="skeletonLoading.item == 'sidebar'" />
</template>

<script setup>
import { skeletonLoading } from "@/helpers";
import { BackToButtonSkeleton } from "@/pages/CategoryPage/components/desktop";

const props = defineProps(["backTo", "params", "routeName"]);
</script>
