<template>
  <h1>PropertyDecoratorMain</h1>
  <PropertyDecoratorChild/>
</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";
import PropertyDecoratorChild from "@/components/PropertyDecoratorChild.vue";

@Options({
  components: {
    PropertyDecoratorChild,
  },
})
export default class PropertyDecoratorMain extends Vue {

}
</script>
