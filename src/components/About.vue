<template>
  <section class="about-section section-padding" id="section_2">
    <div class="section-overlay"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <div class="ratio ratio-1x1">
            <video autoplay="" loop="" muted="" class="custom-video" poster="">
              <source
                src="@/videos/pexels-mike-jones-9046237.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

            <div class="about-video-info d-flex flex-column">
              <h4 class="mt-auto">We Started Since 2009.</h4>

              <h4>Best Cafe in Klang.</h4>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
          <h2 class="text-white mb-3">{{ $t("aboutMe") }}</h2>

          <p class="text-white">
            {{ $t("aboutText1") }}
          </p>

          <p class="text-white">
            {{ $t("aboutText2") }}
          </p>

          <a
            href="#section_5"
            class="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
            >{{ $t("contact") }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  // Add any props, data, computed properties, methods, etc. here
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
