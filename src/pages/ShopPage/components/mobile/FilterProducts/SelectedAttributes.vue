<template>
  <div
    class="filtered-items mb-1 mt-2"
    v-if="props.items && props.items.length !== 0"
  >
    <template v-if="Array.isArray(props.items)">
      <div class="filtered-items-card" v-for="(item, index) in props.items">
        <span class="name">{{ item }}</span>
        <button type="button" @click="$emit('removeQuery', { index, item })">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </template>
    <template v-else>
      <div class="filtered-items-card">
        <span class="name">{{ props.items }}</span>
        <button type="button" @click="$emit('removeQuery', 0, props.items)">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </template>
  </div>
</template>
<script setup>
const props = defineProps(["items"]);

defineEmits(["removeQuery"]);
</script>
