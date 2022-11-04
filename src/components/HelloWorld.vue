<template>
  <div>
    {{metric1}}

    {{func1}}
  </div>
</template>

<script>
import {BaseObj} from "@/components/BaseObj";
import {FuncObj} from "@/components/FuncObj";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      metric1: { },
      func1: {}
    }
  },
  created() {
    this.test()
  },
  mounted() {
  },
  methods: {
    test(){
      let metric1 = new BaseObj('metric','name')
      let func2 = new FuncObj('func_contains',metric1, 'sb')
      let func1 = new FuncObj('func_contains',func2, 'nh')
      this.metric1 = metric1
      this.func1 = func1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
