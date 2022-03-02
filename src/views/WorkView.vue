<template>
    <WorkComponent progress="100"/>
</template>

<script>
// @ is an alias to /src
import WorkComponent from '@/components/WorkComponent.vue'

export default {
  name: 'WorkView',
  components: {
    WorkComponent
  }
}
</script>