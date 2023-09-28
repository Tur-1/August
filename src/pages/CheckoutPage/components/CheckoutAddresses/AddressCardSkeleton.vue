<template>
  <div class="card p-2 pe-3 pb-0 mb-3 w-100" v-for="index in 3">
    <div class="d-flex align-items-center justify-content-between pb-2 w-100">
      <label class="form-check-label d-flex align-items-center">
        <div class="align-self-start placeholder-wave">
          <span
            class="placeholder"
            style="width: 20px; height: 20px; border-radius: 100% !important"
          />
        </div>
        <div class="d-flex flex-column ms-4">
          <div class="row text-dark placeholder-wave mb-2">
            <span class="placeholder" style="width: 160px" />
          </div>

          <div class="row text-dark placeholder-wave mb-2">
            <span class="placeholder" style="width: 120px" />
          </div>
          <div class="row text-dark placeholder-wave mb-2">
            <span class="placeholder me-2" style="width: 170px" />
            <span class="placeholder" style="width: 100px" />
          </div>
          <div class="row text-dark placeholder-wave">
            <span class="placeholder me-2" style="width: 140px" />
          </div>
        </div>
      </label>
    </div>
  </div>
</template>
