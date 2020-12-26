<template>
            <section id="content">
            <h2>Ultimos articulos</h2>

            <div id="articles">

                <!--Listado articulos-->
                <article class="article-item" id="article-template">
                    <div class="image-wrap">
                        <img src="https://okdiario.com/img/viajes/2016/12/08/ws_valley_of_the_ten_peaks_1920x1200.jpg" alt="Paisaje" title="Paisaje">
                    </div>
                    <h2 class="subheader">Articulo de Prueba</h2>
                    <span class="date">
                    Hace 5 minutos
                </span>
                    <a href="#">Leer Mas</a>
                    <div class="clearfix"></div>
                </article>
                <!--Añadir Articulos via js-->

            </div>


        </section>
</template>

<script>
export default {
    name: 'LastArticles'
}
</script>