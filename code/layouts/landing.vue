<template>
    <div class="w-100" style="background-color: rgb(229, 229, 229);">
        <NavBar v-if="useUserDataStore().loggedIn"> </NavBar>
        <slot></slot>
    </div>
</template>

<script setup>
import { useUserDataStore } from '~~/stores/userDataStore';

</script>
