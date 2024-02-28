<template>
  <section class="section-padding section-bg" id="section_3">
    <div class="container">
      <div class="row justify-content-center barista-section">
        <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
          <em class="text-white">{{ $t("range") }}</em>
          <h2 class="text-white">{{ $t("categories") }}</h2>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-12 mb-4"
            v-for="category in categories"
            :key="category.id"
            @click="
              selectedCategory =
                selectedCategory === category.id ? null : category.id;
              zoomedCategory =
                zoomedCategory === category.id ? null : category.id;
            "
          >
            <div
              class="team-block-wrap"
              :class="{ highlight: selectedCategory === category.id }"
            >
              <div class="team-block-info d-flex flex-column">
                <div class="d-flex mt-auto mb-3">
                  <h4 class="text-white mb-0">{{ $t(category.name) }}</h4>
                  <p class="badge ms-4"><em>Boss</em></p>
                </div>
                <p class="text-white mb-0">
                  {{ $t(category.description) }}
                </p>
              </div>

              <div class="team-block-image-wrap">
                <img
                  :src="category.image"
                  class="team-block-image img-fluid"
                  alt=""
                  @mouseover="hoveredCategory = category.id"
                  @mouseleave="hoveredCategory = null"
                  :class="{
                    highlight: selectedCategory === category.id,
                    zoom:
                      zoomedCategory === category.id ||
                      hoveredCategory === category.id,
                  }"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="my-gallery"
          class="container gallery-container"
          v-if="selectedCategoryData"
        >
          <div class="tz-gallery">
            <div class="row">
              <div
                class="col-sm-12 col-md-4"
                v-for="(imageBlock, blockIndex) in selectedCategoryData.images"
                :key="`block-${blockIndex}`"
              >
                <div
                  v-for="(image, imageIndex) in imageBlock"
                  :key="`image-${imageIndex}`"
                >
                  <a
                    :href="image.largeURL"
                    :data-pswp-width="image.width"
                    :data-pswp-height="image.height"
                    target="_blank"
                    rel="noreferrer"
                    @click.prevent
                  >
                    <img
                      :src="image.thumbnailURL"
                      class="img-fluid shadow-1-strong rounded mb-4"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 767px) {
  .album-large {
    display: none;
  }
}

@media (min-width: 768px) {
  .album-small {
    display: none;
  }
}

.container.gallery-container {
  color: #35373a;
  min-height: 100vh;
  padding: 30px 50px;
}

.gallery-container p.page-description {
  text-align: center;
  margin: 25px auto;
  font-size: 18px;
  color: #999;
}

.tz-gallery {
  padding: 40px;
}

/* Override bootstrap column paddings */
.tz-gallery .row > div {
  padding: 2px;
}

.tz-gallery .lightbox img {
  width: 100%;
  border-radius: 0;
  position: relative;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }
}
</style>

<script>
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
export default {
  name: "Categories",
  watch: {
    selectedCategoryData(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$nextTick(() => {
          if (this.lightbox) {
            this.lightbox.destroy();
          }
          this.lightbox = new PhotoSwipeLightbox({
            gallery: "#my-gallery",
            children: "[data-pswp-src]",

            children: "a",
            pswpModule: PhotoSwipe,
          });
          this.lightbox.init();
        });
      }
    },
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: "#my-gallery",
        children: "[data-pswp-src]",
        children: "a",
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
  data() {
    return {
      lightbox: null,
      selectedCategory: null,
      zoomedCategory: null, // Add this line
      hoveredCategory: null,
      categories: [
        {
          id: 1,
          name: "streets",
          description: "streetMessage",
          image: "https://imgur.com/kEmxAyv.jpeg",
          images: [
            [
              {
                largeURL: "@/images/panorama.jpeg",
                thumbnailURL: "https://imgur.com/Q8OruUX.jpeg",
                width: 1600,
                height: 1066,
              },

              {
                largeURL: "https://imgur.com/kEmxAyv.jpeg",
                thumbnailURL: "https://imgur.com/EGDhC5R.jpeg",
                width: 1066,
                height: 1600,
              },
              {
                largeURL: "https://imgur.com/bPEuq4H.jpeg",
                thumbnailURL: "https://imgur.com/qUhgtp6.jpeg",
                width: 1066,
                height: 1600,
              },
            ],
            [
              {
                largeURL: "https://imgur.com/op2IEOr.jpeg",
                thumbnailURL: "https://imgur.com/FfwKMia.jpeg",
                width: 1600,
                height: 1066,
              },
              {
                largeURL: "https://imgur.com/xQBjYKa.jpeg",
                thumbnailURL: "https://imgur.com/1V8FUbz.jpeg",
                width: 1066,
                height: 1600,
              },
            ],
            [
              {
                largeURL: "https://imgur.com/6qPlq5m.jpeg",
                thumbnailURL: "https://imgur.com/wVV2GBw.jpeg",
                width: 1600,
                height: 1066,
              },
              {
                largeURL: "https://imgur.com/NSQBSmk.jpeg",
                thumbnailURL: "https://imgur.com/EsCECkp.jpeg",
                width: 1066,
                height: 1600,
              },
            ],
          ],
        },
        {
          id: 2,
          name: "portraits",
          description: "portraitsMessage",
          image: "src/images/team/portrait-elegant-old-man-wearing-suit.jpg",
          images: [
            [
              {
                src: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
              },
              {
                src: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg",
              },
            ],
          ],
        },
        {
          id: 3,
          name: "landscapes",
          description: "landscapesMessage",
          image: "src/images/team/portrait-elegant-old-man-wearing-suit.jpg",
          images: [
            [
              {
                src: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
              },
              {
                src: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg",
              },
            ],
          ],
        },
        {
          id: 4,
          name: "Category 4",
          description: "fdfdfdf",
          image: "src/images/team/portrait-elegant-old-man-wearing-suit.jpg",
          images: [
            [
              {
                src: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
              },
              {
                src: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg",
              },
            ],
            [
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg",
              },
              {
                src: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg",
              },
            ],
          ],
        },
      ],
    };
  },
  computed: {
    selectedCategoryData() {
      return this.categories.find((c) => c.id === this.selectedCategory);
    },
  },
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language;
    },
    openLightbox(imageSrc) {
      this.lightbox.open(imageSrc);
    },
  },
};
</script>
