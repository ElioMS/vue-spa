<template>
    <div>
        <div class="proyecto-content">
            <h2 class="title"> {{ proyecto.name }} </h2>
            <img :src="proyecto.image" alt="">
            <p>
                {{ proyecto.description }}
            </p>
        </div>
        <hr>
        <h2 class="title"> Proyectos relacionados </h2>
        
        <div class="row">
            <div class="col-md-4 espaciado-item" v-for="(relacionado, index) in relacionados" :key="index">
                <div class="card">

                        <!--{{ relacionado.name }}-->


                    <div class="card-body">
                        <img :src="proyecto.image" alt="" width="320px">
                        <!--{{ relacionado.description }}-->
                    </div>
                    
                    <div class="card-footer">
                        <a :href="/proyecto/ + relacionado.slug" class="btn btn-info float-right"> Ver detalle </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProyectoDetalle",
        created() {
            this.getProyecto();
            this.getRelacionados();
        },
        data () {
            return {
                param: this.$route.params.slug,
                proyecto: [],
                relacionados: []
            }
        },
        methods: {
            getProyecto() {
                this.$http.get('http://192.168.1.190:8000/api/projects/'+this.param)
                .then ( response => {
                    this.proyecto = response.data;
                });
            },
            getRelacionados () {
                this.$http.post('http://192.168.1.190:8000/api/projects-related/', {
                    param : this.param
                })
                .then ( response => {
                    this.relacionados = response.data;
                });
            }
        }
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);
    h2  {
        color: indianred;
        font-weight: bold;
        padding-top: 5px;
    }

    h2.title {
        padding: 0px 0px 20px 0px;
    }

    .proyecto-content {
        text-align: center;
    }

    .proyecto-content p {
        padding-top: 35px;
    }

    .espaciado-item {
        margin-bottom: 5px;
    }
</style>