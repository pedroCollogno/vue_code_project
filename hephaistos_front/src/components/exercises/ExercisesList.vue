<template>
  <div class="exercises">
    <h1>All your code exercises</h1>
    <ul>
        <li><ExerciseDetails v-bind:exercise="this.exercisesList[0]" /></li>
        <li><ExerciseDetails v-bind:exercise="this.exercisesList[1]" /></li>
    </ul>
  </div>
</template>

<script>
// import ApiRequestServices from "../services/ApiRequestServices";
// import currentUser from "../services/UserServices";
// import router from "../router";
import ExerciseDetails from "./ExerciseDetails.vue";

export default {
  data() {
    return {
      exercisesList: [
        {
            id: 1,
            instructions: "Blablabla",
            lang: "python",
            title: "Exercise 1",
            tests: "",
            solution: "",
            template_regions: [],
            template_regions_rw: [0],
            difficulty: 0,
            score: 0
        },
        {
            id: 2,
            instructions: "Blehblehbleh",
            lang: "python",
            title: "Exercise 2",
            tests: "",
            solution: "",
            template_regions: [],
            template_regions_rw: [0],
            difficulty: 0,
            score: 0
        }
      ]
    }
  },
  methods: {
  },
  name: "ExercisesList",
  props: {
  },
  components: {
    ExerciseDetails
  }
};
</script>
