<template>

   
    <div class="row justify-content-center mt-4">
        <div class="col-md-4">
            <userInfos class="mx-3 mb-5" :user='state.user' :fullName='fullName' :followers='state.followers' :followUser='followUser'/>
            <!--<h3>{{userId}}</h3>-->
            <profileForm class="mx-3 my-3" :user='user' @addNewTwoot='addNewTwoot'/>
        </div>
        <div class="col-md-8">
            <twootItem class="mx-2"
            :key="twoot.id"
            v-for="twoot in state.user.twoots" 
            :username="state.user.username" 
            :twoot="twoot"
            @favourite="toggleFavourite"/>
        </div>
    </div>
</template>
<script>

    import twootItem from "../components/twootItem";
    import userInfos from "../components/userInfos";
    import profileForm from "../components/profileForm";


    import { useRoute } from 'vue-router';
    import {reactive, watch, computed} from 'vue';

    import {users} from '../assets/users';


    export default {
    name: 'userProfile',
    components : {
        twootItem,
        userInfos,
        profileForm
    },

    setup(){

        const route = useRoute()

        const userId = computed (() => route.params.userId)

        const state = reactive({

            followers : 0,
            user: users[userId.value-1] || users[0]

        })

        const fullName = computed (() =>  `${state.user.firstName} ${state.user.lastName}`)

        const followers = watch (state.followers,(newFollowers,oldFollowers) => {
            if(oldFollowers < newFollowers)
                console.log(`${state.user.username} has gained a follower`);
        })


        function followUser(){
            state.followers++;
        }

        function toggleFavourite(id){
            console.log(`Favourited twoot # ${id}`);
        }
        
        function addNewTwoot(newTwootContent){

            state.user.twoots.unshift({
                id: state.user.twoots.length +1,
                content : newTwootContent
            })

        }

        return {
            state,
            route,
            fullName,
            userId,
            followers,
            followUser,
            toggleFavourite,
            addNewTwoot,

        }
    }
}
</script>

<style lang="scss" scoped>


</style>
