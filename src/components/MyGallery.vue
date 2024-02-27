<template>
  <section class="album menu-block-wrap" id="section_4">
    <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
      <em class="text-white">by Andy Legović</em>
      <h2 class="text-white">{{ $t("myGallery") }}</h2>
    </div>
    <div class="responsive-container-block bg">
      <div
        class="responsive-container-block img-cont"
        v-for="(imageBlock, blockIndex) in displayedImages"
        :key="'block_' + blockIndex"
      >
        <a
          v-for="(image, imageIndex) in imageBlock"
          :key="'image_' + imageIndex"
          :href="image.pic"
          data-lightbox="image-set"
        >
          <img
            class="img"
            :src="image.pic"
            :alt="'Image ' + (imageIndex + 1)"
          />
        </a>
      </div>
    </div>
    <div class="button-container">
      <button class="load-more" @click="loadMore">{{ $t("load") }}</button>
    </div>
  </section>
</template>

<script>
import { getData } from "@/services/index.js";
export default {
  name: "MyGallery",
  data() {
    return {
      blocksToShow: 3,
      index: null,

      imageBlocks: [],
    };
  },

  async mounted() {
    let result = await getData.getData();
    this.imageBlocks = result;
  },
  computed: {
    displayedImages() {
      return this.imageBlocks.slice(0, this.blocksToShow);
    },
  },

  methods: {
    loadMore() {
      this.blocksToShow += 3;
    },
    setLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
