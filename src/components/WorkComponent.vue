<template>
    <div>
        <b-row>
            <b-col>
                {{name}}
            </b-col>
            <b-col>
                <progress max="100" :value="progress"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'WorkComponent',
    props: {
        name: String,
        progress: Number,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

progress {
  border: 1px solid white;
  padding: 2px;
  width: 250px;
  height: 20px;
}

progress::-webkit-progress-value {
  background: repeating-linear-gradient(90deg, 
    #16D30D, 
    #16D30D 12px, 
    #000000 12px, 
    #000000 13.6px,
  );
}

progress::-webkit-progress-bar {
  background: repeating-linear-gradient(90deg, 
    #475841, 
    #475841 12px, 
    #000000 12px, 
    #000000 13.6px,
  );
}
</style>
