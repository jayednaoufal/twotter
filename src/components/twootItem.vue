<template>
    
    <div class="card twoot-card" @click="favouriteTwoot(twoot.id)">

        <div class="card-body  col-md-10 justify-content-start">

            <div class="row">
                <div><strong>@{{username}}</strong></div>
                <div> Twoot: {{twoot.content}}</div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name : 'twootItem',
    props :{
        twoot:{
            type: Object, 
            required:true
        },
        username:{
            type: String,
            required: true
        }
    },
    methods:{
        favouriteTwoot(id){
            this.$emit('favourite', id);
        }
    }


}
</script>

<style lang="scss" scoped>

    .twoot-card{
        transition : all 0.25s ease;
        
        &:hover{
        transform : scale(1.1,1.1);
    }
    }


</style>