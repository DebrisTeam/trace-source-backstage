<template>
  <div class="main-content">
    
    <main-header></main-header>
    <slot></slot>
    <!--<main-footer></main-footer>-->
    
  </div>
</template>

<script>
  import MainHeader from './MainHeader';
  import MainFooter from './MainFooter';
  export default {
    components: {
      MainHeader, MainFooter,
    }
  }
</script>

<style>
  .main-content {
    position: relative;
    margin-left: 200px;
    padding-top: 64px;
    /*padding-bottom: 40px;*/ 
    min-height: 100vh;
  }
  .main-card {
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
</style>