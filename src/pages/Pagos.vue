<script>
import axios from 'axios';

export default{
    data(){
        return{
            balance:null,
            url:'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com'

            
        }
    },

    mounted(){

      axios.get(this.url +'/getActualBalance', { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
        .then((response => {
        this.balance = response.data?.data?.balanceCommerce
        }))
        .catch((error) => {
            console.log(error)
        })
    }
}

</script>

<template>
    <div class="px-4 py-5">
        <div>
            <div class="flex flex-row items-center  mb-2">
                    <p class="text-slate-500 mr-2 font-medium">Saldo virtual</p>
                    <img class="icon" src="../assets/icon/info.png">
            </div>
            <div class="flex flex-row items-center mb-3">
                    <p class="text-3xl mr-2 font-bold " v-if="this.balance">S/ {{this.balance}}</p>
                    <p class="text-slate-500 mr-2 font-medium" v-else>cargando...</p>
                    <img class="icon" src="../assets/icon/load.png">
            </div>
                
            <button class="flex flex-row items-center border border-slate-300 rounded-2xl px-3 py-1 mb-4">
                    <img class="icon-btn mr-1" src="../assets/icon/like.png">
                    <p>¿Cómo cargar mi saldo vitual?</p>
            </button>
            <p class="text-slate-500 mr-2 font-medium mb-6">Código para cargar tu saldo: <span class="code">{123456789}</span></p>
        </div>
        <hr class="my-6">
        
        <div>
            <router-link to="/recargas" custom v-slot="{ navigate }">
                <div role="link" @click="navigate" class="flex flex-row items-center  mb-4 rounded-md bg-slate-100 p-4 cursor-pointer">
                    <div class="card-items rounded-md p-2 mr-3">
                        <img class="icon-list" src="../assets/icon/recarga.png">
                    </div>
                    <p class="font-medium mr-2 text-xl">Recargas</p>
                </div> 
            </router-link>
            <div class="flex flex-row items-center  mb-4 rounded-md bg-slate-100 p-4 cursor-pointer">
                <div class="card-items rounded-md p-2 mr-3">
                    <img class="icon-list" src="../assets/icon/foco.png">
                </div>
                <p class="font-medium mr-2 text-xl">Pago de servicios</p>
            </div> 
            <div class="flex flex-row items-center  mb-4 rounded-md bg-slate-100 p-4 cursor-pointer">
                <div class="card-items rounded-md p-2 mr-3">
                    <img class="icon-list" src="../assets/icon/calendar.png">
                </div>
                <p class="font-medium mr-2 text-xl">Historial de ganacias </p>
            </div> 
        </div>

    </div>
</template>

<style scoped>
    .icon{
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    .icon-btn {
        width: 15px;
        height: 15px; 
    }
    .code{
        color:#4DBDB9
    }
    .card-items{
        background: #eb742c;
    }
    .icon-list{
        width: 25px;
        height: 25px;
    }
</style>