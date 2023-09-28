<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const addScale = (id) => {
  let elem = document.getElementById(id);

  elem.classList.add("scaleFooterItem");
  setTimeout(() => {
    elem.classList.remove("scaleFooterItem");
  }, 100);
};

const props = defineProps({
  pageName: String,
  routeName: String,
  icon: String,
  activeRouteNames: Array,
  fill: {
    default: true,
    type: Boolean,
  },
});
</script>
<template>
  <li class="footer-item" @click="addScale(`footer-item-${routeName}`)">
    <Link
      :to="{ name: routeName }"
      :id="`footer-item-${routeName}`"
      :class="{
        'active-footer-item':
          route.name == routeName || activeRouteNames?.includes(route.name),
      }"
    >
      <i
        class="position-relative"
        :class="[
          { icon: route.name == routeName && !fill },
          (route.name == routeName && fill) ||
          (activeRouteNames?.includes(route.name) && fill)
            ? `${icon}-fill`
            : icon,
        ]"
      >
        <slot name="badge" />
      </i>
      <span>{{ pageName }}</span>
    </Link>
  </li>
</template>
