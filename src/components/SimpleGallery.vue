<template>
  <section class="section-padding section-bg" id="section_3">
    <div id="my-test-gallery">
      <div v-for="(category, categoryKey) in categories" :key="categoryKey">
        <a
          v-for="(imageBlock, blockKey) in category.images"
          :key="`block-${blockKey}`"
        >
          <div
            v-for="(image, imageKey) in imageBlock"
            :key="`image-${imageKey}`"
          >
            <a
              :href="image.largeURL || image.src"
              :data-pswp-width="image.width"
              :data-pswp-height="image.height"
              target="_blank"
              rel="noreferrer"
            >
              <img :src="image.thumbnailURL || image.src" alt="" />
            </a>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoSwipe from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/dist/photoswipe.css";

export default {
  name: "App",
  data() {
    return {
      lightbox: null,
      selectedCategory: null,
      zoomedCategory: null,
      hoveredCategory: null,
      categories: [
        {
          id: 1,
          name: "streets",
          description: "streetMessage",
          image: "src/images/team/portrait-elegant-old-man-wearing-suit.jpg",
          images: [
            [
              {
                largeURL:
                  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
                thumbnailURL:
                  "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
                width: 1875,
                height: 2500,
              },
            ],
            // [
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            // ],
            // [
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            //   {
            //     src: "https://imgur.com/xQBjYKa.jpeg",
            //   },
            // ],
          ],
        },
      ],
    };
  },

  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallerySelector: "#my-test-gallery",
        childSelector: "a",
        pswpModule: PhotoSwipe,
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
};
</script>
