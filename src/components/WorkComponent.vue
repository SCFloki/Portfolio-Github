<template>
    <div>
        <b-row id="work-container">
            <b-col id="work-col-1">
                <h1>Personnal Exp</h1><br>
                Portfolio Github :<br>
                <progress id="test" max="100" value="70"/><br>
            </b-col>
            <b-col id="work-col-2">Skills<br>progress : {{ progress }}</b-col>
            <b-col id="work-col-3">Professionnal Exp<br>progress : {{ progress }}</b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'WorkComponent',
    props: {
        progress: Number,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#work-container {
    margin-top: 50px;
    margin-right: 90px;
    margin-left: 90px;
        color: white;
    letter-spacing: 5px;
}

#work-col-1 {
    border-right: 1px solid white;
}

#work-col-2 {
    border-left: 1px solid white;
    border-right: 1px solid white;
}

#work-col-3 {
    border-left: 1px solid white;
}

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
