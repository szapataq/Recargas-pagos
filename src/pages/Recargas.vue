<script>
import axios from 'axios';

export default{
    data(){
        return{
            providers:[],
            url:'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com'
        }
    },

    mounted(){

      axios.get(this.url +'/getProviders', { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
        .then((response => {
        this.providers = [...response.data?.data?.companies]
        }))
        .catch((error) => {
            console.log(error)
        })
    }
}

</script>
<template>
    <div class="px-4 py-5">
      <form>   
          <label for="search-busines" class="text-slate-600 mr-2 font-medium">Buscar empresa</label>
          <div class="relative">
              <input type="search" id="search-busines" class="block w-full p-4 text-mg text-gray-900 rounded-md bg-slate-100" placeholder="ej. Culqi" required>
              <button type="submit" class="absolute end-2.5 bottom-2.5 px-2 py-2"><img src="../assets/icon/search.svg"></button>
          </div>
      </form>
      <div class="mt-4 flex gap-2">
        <button class="flex flex-row items-center border border-slate-300 rounded-2xl px-3 py-1 mb-4">
          <img class=" mr-1" src="../assets/icon/like.svg">
          <p>Todas</p>
        </button>
        <button class="flex flex-row items-center border border-slate-300 rounded-2xl px-3 py-1 mb-4">
          <img class=" mr-1" src="../assets/icon/like.svg">
          <p>Favoritas</p>
        </button> 
        <button class="flex flex-row items-center border border-slate-300 rounded-2xl px-3 py-1 mb-4">
          <img class=" mr-1" src="../assets/icon/like.svg">
          <p>Telefonía</p>
        </button>
      </div>
      <div>
        <div class="flex items-center justify-between p-4 border-b" v-for="item in providers" :key="item._id">
          <div class="flex items-center">
            <img class="icon-company mr-4" :src="item.image">
            <p>{{item.company}}</p>
          </div>
          <img class="mr-1" src="../assets/icon/favorite.svg">
        </div>
      </div>
    </div>
</template>
<style scoped>
    .icon-company{
      width: 30px
    }
</style>