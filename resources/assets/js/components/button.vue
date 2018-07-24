<template>
    <a href="javascript:;"
       class="button"
       :class="{ disabled: disabled, loading: loading }"
       @click="onClick"
    >
        {{ label }}
        <i v-show="loading" class="icon-spin animate-spin"></i>
    </a>
</template>

<script>
    export default {
        props: [ 'label', 'disabled', 'loading' ],
        methods:{
            onClick(){
                if (!this.disabled) {
                    this.$emit('click');
                }
            }
        },
        mounted() {
        }
    }
</script>
