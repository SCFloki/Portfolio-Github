<template>
  <div>
  <b-container>
      <b-row id="work-container">
          <b-col id="profile">
            <img src="@/assets/images/profile.jpg"><br><br>Doublet Kévin
          </b-col>
          <b-col class="work-col">
              Langage<br><br>
              <WorkComponent 
                v-for="language in languages"
                :key="language.id"
                :name="language.name"
                :progress="language.progress"
              />
          </b-col>
          <b-col class="work-col">
            Framework<br><br>
            <WorkComponent 
              v-for="framework in frameworks"
              :key="framework.id"
              :name="framework.name"
              :progress="framework.progress"
            />
          </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkComponent from '@/components/WorkComponent.vue'

export default {
  name: 'WorkView',
  components: {
    WorkComponent,
  },
  data() {
    return {
      languages: [
        {
          id: 0,
          name: "HTML/CSS",
          progress: "100",
        },
        {
          id: 1,
          name: "JS",
          progress: "70",
        },       
        {
          id: 3,
          name: "PHP",
          progress: "60",
        },        
        {
          id: 4,
          name: "SQL",
          progress: "60",
        },
        {
          id: 5,
          name: "Python",
          progress: "70",
        }
      ],
      frameworks: [
        {
          id: 0,
          name: "Vue",
          progress: "70",
        },
        {
          id: 1,
          name: "React Native",
          progress: "60",
        },
        {
          id: 2,
          name: "Symfony",
          progress: "65",
        },
        {
          id: 3,
          name: "Django",
          progress: "80",
        }

      ],
    }
  }
}
</script>

<style lang="scss">

  img {
    border-radius: 50%;
    width: 50%;
    border: 2px solid white;
  }

  #work-container {
      margin-top: 50px;
      margin-right: 90px;
      margin-left: 90px;
      padding-bottom: 30px;
      color: white;
      letter-spacing: 5px;
      background-image: url('@/assets/images/bg.png');
      background-position: bottom left;
      background-repeat: repeat-x;
      border-bottom: 2px dashed white;
  }

  #profile {
    margin: auto;
    border-right: 1px solid white;
  }

  .work-col{
    margin:auto;
  }

  .work-col p{
    font-weight: bold;
  }
 
</style>