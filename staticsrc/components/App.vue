<template>
    <div>{{msg}}</div>
</template>

<script type="text/ecmascript-6">

    export default {
        props: {},
        data () {
            return {
                msg: 'Hello from vues'
            }
        }
    }

</script>

<style>
    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: cadetblue;
    }

</style>
