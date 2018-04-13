<template>
  <div class="hello">
    <h1>{{msg}}</h1>   
	   <button @click="addOne">add one</button>
	   <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'i am a apple',
      price:5
    }
  },
  methods:{
  	addOne(){
  		this.$store.dispatch('increase',this.price)
  	},
  	minusOne(){
  		this.$store.dispatch('decrease',this.price)
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
