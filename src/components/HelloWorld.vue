<template>
  <div>
    <h1>{{ sampleString }}</h1>
  </div>
</template>

<script setup>
  import { computed, defineProps} from "vue";
  const props = defineProps({
    title:{
      default: "DEFAULT TITLE",
      type: String
    }
  })
  const sampleString = computed(()=> `COMPUTED: ${props.title}`);
</script>

<style lang="scss" scoped>

</style>