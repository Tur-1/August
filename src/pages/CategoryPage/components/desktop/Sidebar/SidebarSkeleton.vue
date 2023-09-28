<template>
  <div v-for="(h, index) in 4">
    <div class="list-group">
      <label
        class="mb-2 placeholder-wave d-flex align-items-center"
        v-for="(brand, index) in 5"
        :key="index"
      >
        <input
          class="form-check-input me-1 placeholder"
          type="checkbox"
          disabled
          name="brand[]"
        />
        <span class="placeholder w-75 rounded-1"> </span>
      </label>
    </div>
    <br />
  </div>
</template>
