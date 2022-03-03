<template>
    <div>
        <b-container id="project-container">
            <b-row>
                <b-col id="project-item">
                    <img id="ks-logo" :src="image" alt="Keyboard Society">
                    <h2> {{ name }} </h2>
                    {{ desc }}
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'ProjectsComponent',
    props: {
        name: String,
        desc: Number,
        date: String,
        image: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#project-container {
    text-align: start;
}
#ks-logo {
    width: 15%;
    float: left;
    padding: 5px;
    margin-right: 30px;
}
#project-item {
    display: block;
    transition: opacity 0.5s;
}
#project-item h2 {
    color: rgba(255, 255, 255, .9);
}
#project-item:hover {
    background: radial-gradient(circle, rgba(255,255,255,0.12) 57%, rgba(255,255,255,0) 100%);
}
</style>
