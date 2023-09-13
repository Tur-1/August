<template>
  <div class="mb-3 d-flex flex-column">
    <label for="gender-btns" class="form-input-label">Gender *</label>
    <div class="gender-btns-wrap">
      <div class="gender-btns">
        <input
          type="radio"
          class="btn-check"
          id="gender_male"
          value="Male"
          checked
          v-model="form.fields.gender"
        />
        <label class="btn btn-outline-secondary" for="gender_male">
          Male
        </label>
      </div>
      <div class="gender-btns">
        <input
          type="radio"
          class="btn-check"
          value="Female"
          v-model="form.fields.gender"
          id="gender_female"
        />
        <label class="btn btn-outline-secondary" for="gender_female">
          Female
        </label>
      </div>
    </div>
    <span class="text-danger text-sm" v-show="form.errors.gender">
      {{ form.errors.gender }}
    </span>
  </div>
</template>

<script setup>
defineProps(["form"]);
</script>
