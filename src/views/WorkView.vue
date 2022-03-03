<template>
  <div>
      <b-row id="work-container">
          <b-col class="work-col">
              <p>Personnal Experiences</p><br>
              <WorkComponent 
                v-for="personnal_exp in personnal_exps"
                :key="personnal_exp.id"
                :name="personnal_exp.name"
                :progress="personnal_exp.progress"
              />
          </b-col>
          <b-col class="work-col">
              <p>Skills</p><br>
              <WorkComponent 
                v-for="skill in skills"
                :key="skill.id"
                :name="skill.name"
                :progress="skill.progress"
              />
          </b-col>
          <b-col class="work-col">
            <p>Professional Exp</p><br>
              <WorkComponent 
                v-for="professional_exp in professional_exps"
                :key="professional_exp.id"
                :name="professional_exp.name"
                :progress="professional_exp.progress"
              />
          </b-col>
      </b-row>
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
      skills: [
        {
          id: 0,
          name: "HTML/CSS",
          progress: "100",
        },
        {
          id: 1,
          name: "JS",
          progress: "60",
        }
      ],
      personnal_exps: [
        {
          id: 0,
          name: "React",
          progress: "80",
        },
        {
          id: 1,
          name: "Vue",
          progress: "40",
        }
      ],
      professional_exps: [
        {
          id: 0,
          name: "Django",
          progress: "60",
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #work-container {
      margin-top: 50px;
      margin-right: 90px;
      margin-left: 90px;
      color: white;
      letter-spacing: 5px;
  }

  .work-col{
      margin-right: 70px;
      margin-left: 70px;
  }

  .work-col p{
    font-weight: bold;
  }
</style>