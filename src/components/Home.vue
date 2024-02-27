<template>
  <section
    class="hero-section d-flex justify-content-center align-items-center"
    id="section_1"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12 mx-auto">
          <em class="small-text">{{ $t("welcomeMessage") }}</em>

          <h1>Andy Legović</h1>

          <p class="text-white mb-4 pb-lg-2">
            {{ $t("explore") }} <em>{{ $t("lens") }}</em
            >.
          </p>

          <a
            class="btn custom-btn custom-border-btn smoothscroll me-3"
            href="#section_2"
          >
            {{ $t("myStory") }}
          </a>

          <a class="btn custom-btn smoothscroll me-2 mb-2" href="#section_4"
            ><strong>{{ $t("myGallery") }}</strong></a
          >
        </div>
      </div>
    </div>

    <div class="hero-slides"></div>
  </section>
</template>

<script>
export default {
  name: "Home",
  // Add any props, data, computed properties, methods, etc. here
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
