<template>
  <h1>ClassMain</h1>
  <ClassChild/>
</template>

<script lang="ts">

import ClassChild from '@/components/ClassChild.vue';
import {Options as Component, Vue} from "vue-class-component";

@Component({
  components: {
    ClassChild,
  },
})
export default class ClassMain extends Vue {

}
</script>
