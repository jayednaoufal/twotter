<template>

    <div class="row">
                <div class="col-md-12">
                    <div class="card-header" :class="{'--exceeded' : newTwootCharacterCount >180}">Add a new Twoot! ({{newTwootCharacterCount}}/180)</div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row justify-content-center">
                                     <div class="col-md-6">
                                        <select class="custom-select" name="" id="" v-model="state.typesOfInput.content">
                                            <option v-for="(typeOfInput,index) in state.typesOfInput" :key="index" :value='typeOfInput.content'>{{typeOfInput.content}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                    <form @submit.prevent="addNewTwoot">
                                        <div class="row form-group">
                                            <label class="col-md-1" for="newTwootTextArea"></label>
                                            <textarea name="newTwoot" id="newTwootTextArea" cols="30" rows="10" class="form-control" v-model="state.newTwoot"></textarea>
                                        </div>
                                        <div class="row form-group">
                                            <button class="form-control btn btn-success">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
</template>

<script>

import { reactive, computed } from 'vue';

export default {

    name : 'profileForm',

    setup(props, ctx){

        const state= reactive({

            newTwoot : '',

            typesOfInput : [
            {id : 1, content: 'Draft'},
            {id : 2, content: 'New twoot'}
             ]
        })

        const newTwootCharacterCount=computed(() => state.newTwoot.length)

        function addNewTwoot(){
            if(state.newTwoot != '' && state.typesOfInput.content != 'Draft'){
                ctx.emit('addNewTwoot',state.newTwoot)
            }
        }

        return {
            state,
            newTwootCharacterCount,
            addNewTwoot
        }

    },

    props : {

        'user' : {
            type: Object,
            required : true
        },

    }
    
}
</script>

<style lang="scss" scoped>

    .--exceeded{
    color:red;
}

</style>