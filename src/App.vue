<template>
  <main>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          Andy Legović
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-lg-auto">
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_1">{{
                $t("home")
              }}</a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_2">{{
                $t("about")
              }}</a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_3">{{
                $t("categories")
              }}</a>
            </li>

            <li class="nav-item">
              <a class="nav-link click-scroll" href="#section_4">{{
                $t("myGallery")
              }}</a>
            </li>

            <li class="nav-item">
              <a
                class="btn custom-btn custom-border-btn nav-link"
                href="#section_5"
              >
                {{ $t("contact") }}
                <i class="bi-arrow-up-right ms-2"></i>
              </a>
            </li>

            <li class="nav-item">
              <button
                :class="{ active: $i18n.locale === 'en' }"
                class="btn button-lan custom-btn custom-border-btn"
                href="#en"
                @click="setLanguage('en')"
              >
                EN
              </button>

              <button
                :class="{ active: $i18n.locale === 'hr' }"
                class="btn button-lan custom-btn custom-border-btn"
                href="#hr"
                @click="setLanguage('hr')"
              >
                HR
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Home />

    <About />

    <Categories />

    <MyGallery />

    <Contact />

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0 text-center">
            <em class="text-white d-block mb-4"> {{ $t("where") }}</em>
            <strong class="text-white">
              <i class="bi-geo-alt me-2"></i>
              Poreč, Istra
            </strong>
          </div>

          <div class="col-lg-4 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0 text-center">
            <em class="text-white d-block mb-4"> {{ $t("social") }}</em>
            <ul
              class="social-icon mt-2 d-flex justify-content-center align-items-center"
            >
              <li class="social-icon-item me-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61556562899986&sfnsn=wa&mibextid=RUbZ1f"
                  class="social-icon-link bi-facebook fs-2"
                ></a>
              </li>
              <li class="social-icon-item me-3">
                <a
                  href="https://www.instagram.com/legovicphoto/"
                  target="_new"
                  class="social-icon-link bi-instagram fs-2"
                ></a>
              </li>
              <li class="social-icon-item">
                <a
                  href="https://wa.me/+385989157574"
                  class="social-icon-link bi-whatsapp fs-2"
                ></a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0 text-center">
            <em class="text-white d-block mb-4"> {{ $t("contact") }}</em>
            <div class="contact-info">
              <div>
                <p class="mb-1">
                  <strong class="me-2"> {{ $t("phone") }}:</strong>
                  <a href="tel:+385 98 915 7574" class="site-footer-link"
                    >(+385) 98 915 7574</a
                  >
                </p>

                <p>
                  <strong class="me-2"> {{ $t("email") }}:</strong>
                  <a
                    href="mailto:legovicphoto@gmail.com"
                    class="site-footer-link"
                    >legovicphoto@gmail.com</a
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-12 col-12 mt-4 text-center">
            <p class="copyright-text mb-0 text-center">
              Copyright © Barista Cafe 2048 - Design:
              <a rel="sponsored" href="https://www.tooplate.com" target="_blank"
                >Tooplate</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
<script>
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Categories from "@/components/Categories.vue";
import MyGallery from "@/components/MyGallery.vue";
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Home,
    About,
    Categories,
    MyGallery,
    Contact,
  },

  methods: {
    setLanguage(language) {
      this.$i18n.locale = language;
    },
  },
  mounted() {
    window.addEventListener(
      "hashchange",
      () => window.history.pushState({}, "", "/"),
      {}
    );
  },
  beforeDestroy() {
    // It's a good practice to remove the event listener when the component is destroyed
    window.removeEventListener(
      "hashchange",
      () => window.history.pushState({}, "", "/"),
      {}
    );
  },
};
</script>
<style>
.highlight {
  border: 2px solid orange;
  filter: brightness(1.3);
  border-radius: 20px;
  box-sizing: border-box;
}
.zoom {
  transform: scale(1);
  transition: transform 0.9s ease-in-out;
}
a.lb-close {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 9999;
}

div#lightbox {
  width: auto;
  left: 50% !important;
  transform: translateX(-50%);
}

.lb-nav a.lb-prev {
  width: 10%;
}

.lb-nav a.lb-next {
  width: 10%;
}
.album .responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.album .responsive-container-block.bg {
  max-width: 1320px;
  margin: 0 0 0 0;
}

.album .img {
  width: 100%;
  margin: 30px;
}

.album #i9rb {
  color: black;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.album #ir6i {
  color: black;
}

.album #ikz3b {
  color: black;
}

.album .responsive-container-block.img-cont {
  flex-direction: column;
  max-width: 33.3%;
  min-height: auto;
  margin: 0 0 0 0;
  height: 100%;
}

.album #ipix {
  color: black;
}

.album #ipzoh {
  color: black;
}

.album #ig5q8 {
  color: black;
}

.album #imtzl {
  color: black;
}

.album #i53es {
  color: black;
}

.album .img.img-big {
  height: 50%;
  margin: 0 0 16px 0;
}

@media (max-width: 1024px) {
  .album .img {
    margin: 0 0 18px 0;
  }
}

@media (max-width: 768px) {
  .album .img {
    max-width: 32.5%;
    margin: 0 0 0 0;
  }

  .album .responsive-container-block.bg {
    flex-direction: column;
  }

  .album .responsive-container-block.img-cont {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .album .img.img-big {
    max-width: 49%;
    margin: 0 0 0 0;
  }
}

@media (max-width: 500px) {
  .album .img {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .responsive-container-block.img-cont {
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
  }

  .album .img.img-big {
    max-width: 94%;
    margin: 0 0 25px 0;
  }

  .album .img.img-last {
    margin: 0 0 5px 0;
  }
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap");

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .wk-desk-1 {
    width: 8.333333%;
  }

  .wk-desk-2 {
    width: 16.666667%;
  }

  .wk-desk-3 {
    width: 25%;
  }

  .wk-desk-4 {
    width: 33.333333%;
  }

  .wk-desk-5 {
    width: 41.666667%;
  }

  .wk-desk-6 {
    width: 50%;
  }

  .wk-desk-7 {
    width: 58.333333%;
  }

  .wk-desk-8 {
    width: 66.666667%;
  }

  .wk-desk-9 {
    width: 75%;
  }

  .wk-desk-10 {
    width: 83.333333%;
  }

  .wk-desk-11 {
    width: 91.666667%;
  }

  .wk-desk-12 {
    width: 100%;
  }

  @media (max-width: 1024px) {
    .wk-ipadp-1 {
      width: 8.333333%;
    }

    .wk-ipadp-2 {
      width: 16.666667%;
    }

    .wk-ipadp-3 {
      width: 25%;
    }

    .wk-ipadp-4 {
      width: 33.333333%;
    }

    .wk-ipadp-5 {
      width: 41.666667%;
    }

    .wk-ipadp-6 {
      width: 50%;
    }

    .wk-ipadp-7 {
      width: 58.333333%;
    }

    .wk-ipadp-8 {
      width: 66.666667%;
    }

    .wk-ipadp-9 {
      width: 75%;
    }

    .wk-ipadp-10 {
      width: 83.333333%;
    }

    .wk-ipadp-11 {
      width: 91.666667%;
    }

    .wk-ipadp-12 {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .wk-tab-1 {
      width: 8.333333%;
    }

    .wk-tab-2 {
      width: 16.666667%;
    }

    .wk-tab-3 {
      width: 25%;
    }

    .wk-tab-4 {
      width: 33.333333%;
    }

    .wk-tab-5 {
      width: 41.666667%;
    }

    .wk-tab-6 {
      width: 50%;
    }

    .wk-tab-7 {
      width: 58.333333%;
    }

    .wk-tab-8 {
      width: 66.666667%;
    }

    .wk-tab-9 {
      width: 75%;
    }

    .wk-tab-10 {
      width: 83.333333%;
    }

    .wk-tab-11 {
      width: 91.666667%;
    }

    .wk-tab-12 {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .wk-mobile-1 {
      width: 8.333333%;
    }

    .wk-mobile-2 {
      width: 16.666667%;
    }

    .wk-mobile-3 {
      width: 25%;
    }

    .wk-mobile-4 {
      width: 33.333333%;
    }

    .wk-mobile-5 {
      width: 41.666667%;
    }

    .wk-mobile-6 {
      width: 50%;
    }

    .wk-mobile-7 {
      width: 58.333333%;
    }

    .wk-mobile-8 {
      width: 66.666667%;
    }

    .wk-mobile-9 {
      width: 75%;
    }

    .wk-mobile-10 {
      width: 83.333333%;
    }

    .wk-mobile-11 {
      width: 91.666667%;
    }

    .wk-mobile-12 {
      width: 100%;
    }
  }
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.load-more {
  background: var(--custom-btn-bg-color);
  border: 2px solid transparent;
  border-radius: var(--border-radius-large);
  color: var(--white-color);
  font-size: var(--btn-font-size);
  font-weight: var(--font-weight-bold);
  line-height: normal;
  transition: all 0.3s;
  padding: 6px 24px;
}

.load-more:hover {
  background: var(--custom-btn-bg-hover-color);
  color: var(--white-color);
}

.custom-border-btn {
  background: transparent;
  border: 2px solid var(--white-color);
  color: var(--white-color);
}
</style>
