<template>
  <div id="app" class="app-wrap">
    <transition name="fade" >
      <router-view name="fullView"></router-view>
    </transition>
    <left-side></left-side>
    <main-content>
      <router-view></router-view>
    </main-content>
  </div>
</template>

<script>
  import LeftSide from '@/components/LeftSide';
  import MainContent from '@/components/mainContent/MainContent';
  
  export default {
    name: 'app',
    components: {
      LeftSide,
      MainContent
    },
  }
</script>

