<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch, ref } from 'vue'
import Menue from './components/Menu.vue'
import { setCookie, getCookie } from './components/CookiHandler'
import router from '@/router';


let loginStatus: boolean = false;
let credential: string = "";
const componentKey = ref(0);
if (getCookie("token") === "") {
  setCookie('token', "", 7);
}

const token = ref(getCookie('token'));

function setOnlineStatus(status: boolean) {
  loginStatus = status;
}

function saveCredential(inCredential: any) {
  //console.log("Authorisation code", inCredential);
  credential = inCredential;
  setCookie("token", inCredential, 7);
  router.push('/list');
  componentKey.value += 1;
}

watch(token, (newValue, oldValue) => {
  // Här reagerar du på ändringar i kakan
  console.log('token ändrades från', oldValue, 'till', newValue);
});


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <Menue id="Menue" :key="componentKey" />
  </header>

  <RouterView @loggedIn="setOnlineStatus" @credential="saveCredential" id="RouterView" />
</template>

<style scoped>

header {
  line-height: 1.5;
  display: flex;
  width: 100%;
}

.logo {
  padding: 10px;
}

#Menue {
  width: 100%;
}

#RouterView {
  padding-top: 30px;
  padding-left: 30px;
}
</style>
