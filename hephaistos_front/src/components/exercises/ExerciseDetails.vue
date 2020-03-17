<template>
  <div class="exerciseDetails">
    <h2>{{exercise.title}}</h2>
    <div>
        {{exercise.instructions}}     
    </div>
  </div>
</template>

<script>
// import ApiRequestServices from "../services/ApiRequestServices";
// import currentUser from "../services/UserServices";
// import router from "../router";

export default {
  methods: {
  },
  name: "ExerciseDetails",
  props: {
    exercise: Object
  }
};
</script>
