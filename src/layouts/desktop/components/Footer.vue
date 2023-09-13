<script setup>
let currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer desktop-footer">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="navbar-brand">AUGUST</h1>
        <div>Copyright &copy;{{ currentYear }} AUGUST</div>
      </div>
    </div>
  </footer>
</template>
