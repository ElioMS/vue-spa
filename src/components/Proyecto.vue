<template>
    <div>
        <h2> Listado de proyectos  </h2>
        <hr>
        <div class="row">
            <div class="col-md-6" style="margin-bottom: 5px;" v-for="(proyecto, index) in proyectos" :key="index">
                <div class="card">
                    <div class="card-header">
                        {{ proyecto.name }}
                    </div>

                    <div class="card-body">
                        {{ proyecto.description }}
                    </div>

                    <div class="card-footer">
                        <a :href="/proyecto/ +proyecto.slug " class="btn btn-info float-right"> Ver detalle </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Proyecto",
        created() {
            this.getProyectos();
        },
        data () {
            return {
                proyectos : []
            }
        },
        methods: {
            getProyectos() {
                this.$http.get('http://192.168.1.190:8000/api/projects')
                .then( response => {
                    this.proyectos = response.data;
                });
            }
        }
    }
</script>

<style scoped>
    h2  {
        color: indianred;
        font-weight: bold;
        padding-top: 5px;
    }
</style>