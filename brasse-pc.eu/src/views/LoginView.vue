<script setup lang="ts">
import { ref } from 'vue';
import jwt_decode from 'jwt-decode';

const isLoggedIn = ref(false);
const emit = defineEmits(['loggedIn', 'credential']);

function checkLoginStatus() {
    if (isLoggedIn.value) {
        console.log('Användaren är inloggad');
        // Utför åtgärder för inloggad användare
        emit('loggedIn', true);
    } else {
        console.log('Användaren är inte inloggad');
        // Utför åtgärder för utloggad användare
        emit('loggedIn', false);
    }
}

function saveCredential(credential) {
    emit('credential', credential);
}

function callback(response: any) {
    isLoggedIn.value = true;
    checkLoginStatus();
    console.log("Authorisation code", response.profileObj);
    saveCredential(response.credential);
    const decodedToken = jwt_decode(response.credential);
    console.log(decodedToken);
    const { name, email } = decodedToken;

    console.log('Användarnamn:', name);
    console.log('E-postadress:', email);
};
</script>

<template>
    <GoogleLogin :callback="callback" />
</template>