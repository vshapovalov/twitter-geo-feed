<template>
    <div class="sidebar" :class="{ sidebar_opened: isOpened}">

        <a href="javascript:;"
           class="toggle-button"
           @click="toggleOpened"
        >
            <i v-if="isOpened" class="icon-right-open"></i>
            <i v-else class="icon-left-open"></i>
        </a>
        <div class="sidebar-header">
            <slot name="header"></slot>
        </div>
        <div class="sidebar-body">
            <div class="scroll-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                isOpened: true
            };
        },
        watch:{
        },
        methods:{
            toggleOpened(){

                this.isOpened = !this.isOpened;
            },


        },
        mounted() {

        }
    }
</script>
