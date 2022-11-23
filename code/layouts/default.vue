<template>
    <div class="h-100 w-100">
        <NavBar />
        <slot></slot>
        <Footer></Footer>
    </div>
</template>


<style>
#navbar {
    position: static !important;
}
</style>