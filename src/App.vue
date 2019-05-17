<template>
    <div id="app">
        <hello-world msg="Hello Vue Single-File Component!" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'app',
    components: {
        HelloWorld
    }

}
</script>

<style>

</style>
