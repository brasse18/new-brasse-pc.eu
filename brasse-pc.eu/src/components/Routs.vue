<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { getCookie, getUserNameFromCookie, getUserImageFromCookie, removeToken } from '../components/CookiHandler'

const emit = defineEmits(['loggedOut']);
const isNotLogdin = ref(false);
const showMenu = ref(false);
const isNotLogdinKey = ref(0);

if (getCookie("token") === "") {
  isNotLogdin.value = true;
}

function toggelUserMenu() {
  showMenu.value = !showMenu.value;
  //console.log("Klick");
}

function Logout() {
  isNotLogdin.value = true;
  removeToken();
  isNotLogdinKey.value += 1;
  console.log("logout");
  emit('loggedOut');
}

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Om mig</RouterLink>
    <RouterLink to="/servers">Spel Servers</RouterLink>
    <RouterLink to="/downloade">Nerladning</RouterLink>
    <RouterLink to="/list">Önskelista</RouterLink>
    <RouterLink to="/login" v-if="isNotLogdin" class="login">Login</RouterLink>
    <template v-if="!isNotLogdin">
      
      <div class="user-menue" @click="toggelUserMenu()">
      <img :src="getUserImageFromCookie()" alt="My Image" class="rounded-image user-menue">
      {{ getUserNameFromCookie()}}
      
      </div>
      <div class="dropdown-menu" v-if="showMenu">
        <ul>
          <li><a @click="Logout">Logout</a></li>
        </ul>
      </div>
    </template>
  </nav>
</template>

<style scoped>
.rounded-image {
  margin-top: -13px;
  width: 80px; /* Sätt bilden till att fylla hela förälderns bredd */
  height: auto; /* Automatisk höjd för att behålla bildens proportioner */
  border-radius: 50%; /* Gör bilden rund genom att sätta border-radius till 50% */
}
.user-menue {
  float: right;
  padding: 0 1rem;
}

.login {
  float: right;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

/* Styla grundläggande länkar och ta bort liststilen */
.dropdown-menu ul {
  list-style: none;
  padding: 0;
}

.dropdown-menu li {
  display: inline-block;
  margin-right: 20px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #333;
}

/* Dölj menyns innehåll som standard */
.dropdown-menu ul {}

/* Visa menyns innehåll när musen hovrar över menyn */
.dropdown-menu:hover ul {
  display: block;
}
</style>