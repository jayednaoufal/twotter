<template>

     <div class="row my-0">
        <div class="col-md-12 px-0">
        
            <nav class="navbar navbar-light bg-light my-0 px-5">
                <router-link to="/"><div class="navbar-brand">Twooter</div></router-link>
                <div v-if="user" class="float-right">{{user.username}}</div>
            </nav>
        
        </div>
    </div>

    <router-view/>
  
</template>


<script>

  import { useStore } from 'vuex';
  import { computed } from 'vue';

  export default {
    name : "App",
    setup(){

      const store= useStore()
      const user = computed (() => store.state.User.user)

      return {
        user
      }

    }
  }


</script>

<style>

</style>
