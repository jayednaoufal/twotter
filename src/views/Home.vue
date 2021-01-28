<template>

  <div class="row justify-content-center mt-5">
    
      <router-link class="col-md-2 btn btn-warning"  v-for="(user,index) in state.allUsers" :key="index" :to="{name :'userProfile', params :{'userId' : user.id} }">

        {{user.username}}

      </router-link>


  </div>
    
</template>

<script>

import {reactive} from 'vue';

import {users} from '../assets/users';

export default {
  name: 'Home',


  setup(){

    const state= reactive({
      allUsers : users
    })

    return {
      state
    }


  }
 
}
</script>
