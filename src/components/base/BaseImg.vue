<template>
    <img :src="require(`@/assets/icons/${icon}.${type}`)" alt="">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"BaseImg",
    props: {
        icon: String,
        type:{
            type:String,
            default: "svg"
        }
    }
})
</script>
