<template>
  <div class="container mx-auto">
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>

<script>
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";

export default {
  components: {
    PopularMovies,
    UpcomingMovies,
  },
};
</script>

<style></style>
