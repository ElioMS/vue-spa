<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg fixed-top row">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"> <router-link to="/"> Home </router-link> </li>
                    <li class="nav-item active"> <router-link to="/proyectos"> Proyectos </router-link> </li>
                </ul>
            </div>
        </nav>

        <div class="container" style="margin-bottom: 30px;">
            <router-view/>
        </div>
        <!--<h2> Otras páginas </h2>-->

        <footer> Vue SPA + Laravel WS </footer>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style scoped>

    .container {
        margin-top: 50px;
    }

    body {
        margin-bottom: 15px;
    }

    footer {
        text-align: center;
        position: fixed;
        bottom: 0;
        background-color: black;
        color: white;
        width: 100%;
    }

</style>


