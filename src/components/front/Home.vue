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
  mounted() {
    console.log(
      "Your process.env.VUE_APP_PUBLIC_URL",
      process.env.VUE_APP_PUBLIC_URL
    );
  },
};
</script>

<style></style>
