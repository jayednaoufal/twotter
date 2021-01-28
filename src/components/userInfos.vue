<template>
    <div class="row card justify-content-center">
        <div class="card-body">
                <div class="col-md-12 col-sm-12 d-flex flex-column align-items-center ">
                    <div>Username: @{{user.username}}</div>

                    <div><strong> {{fullName}}</strong></div>

                    <div v-if="user.isAdmin">Admin</div>
                    <div v-else>Not Admin</div>

                    <div class="pb-2">Followers : {{followers}}</div>

                    <button class="btn btn-primary form-control float-left" @click="followUser">Follow</button>
                    
                </div>
        </div>
    </div>
</template>

<script>
    export default {

        name:'userInfos',

        props:{
            'user' : {
                type : Object,
                required : true
            },

            'followers' : {
                type : Number,
                required : true
            },

            'fullName' : {
                type : Function,
                required : true
            },

            'followUser' : {
                type : Function,
                required : true
            },

        }
        
    }
</script>