<template>
  <div class="categories-page-header placeholder-wave">
    <span class="section-tab placeholder" v-for="n in 3" />
  </div>
  <div class="categories-page-body">
    <div class="section-content active_section_content">
      <div class="categories-sidebar placeholder-wave"></div>
      <div class="categories-content content_active">
        <div v-for="n in 15" class="card-category placeholder-wave">
          <div class="placeholder bg-secondary"></div>
        </div>
      </div>
    </div>
  </div>
</template>
