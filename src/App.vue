<template>
  <div id="app" class="app-wrap" v-show="loading">
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
  import axios from 'axios';
  
  export default {
    data() {
      return {
          loading: true
      }
    },
    name: 'app',
    components: {
      LeftSide,
      MainContent
    },
    created() {
        this.islogin();
    },
    
    methods: {
        islogin() {
            axios.get('/api/islogin').then(function (response) {
               this.loading = true;
               if (response.data.islogin === false) {
                   this.$router.push('/login');
               }
            }.bind(this)).catch(function (err) {
                console.log(err)
            });
        }
    }
  }
</script>

