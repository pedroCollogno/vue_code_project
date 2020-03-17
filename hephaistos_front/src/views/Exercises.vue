<template>
  <div class="exercises">
    <ExercisesList />
  </div>
</template>

<script>
// @ is an alias to /src
import ExercisesList from "@/components/exercises/ExercisesList.vue";

export default {
  name: "Exercises",
  components: {
    ExercisesList
  }
};
</script>