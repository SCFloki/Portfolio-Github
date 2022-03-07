<template>
    <div id="projects-container">
        <h2 id="title">- Projects -</h2>

        <ProjectsComponent
            v-for="project in projects"
            :key="project.id"
            :image="project.image"
            :name="project.name"
            :desc="project.desc"
            :date="project.date"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import ProjectsComponent from '@/components/ProjectsComponent.vue'

export default {
  name: 'ProjectsView',
  components: {
    ProjectsComponent,
  },
  data() {
    return {
      projects: [
        {
          id: 0,
          name: "Keyboard Society",
          image: require('@/assets/images/logo.png'),
          desc: "Association évènementiel de jeux vidéo",
          date: "2018-2020"
        },
                {
          id: 2,
          name: "Keyboard Society",
          image: require('@/assets/images/logo.png'),
          desc: "Association évènementiel de jeux vidéo",
          date: "2018-2020"
        },
                {
          id: 3,
          name: "Keyboard Society",
          image: require('@/assets/images/logo.png'),
          desc: "Association évènementiel de jeux vidéo",
          date: "2018-2020"
        },
      ],
    }
  }
}
</script>

<style lang="scss">

#project-container {
    text-align: start;
}
  #projects-container {
    margin-top: 50px;
  }
  #title{
    color: white;
    letter-spacing: 5px;
    margin: 40px;
  }
</style>