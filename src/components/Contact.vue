<template>
  <section class="contact-section section-padding" id="section_5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12">
          <em class="text-white">{{ $t("hi") }}</em>
          <h2 class="text-white mb-4 pb-lg-2">{{ $t("contact") }}</h2>
        </div>

        <div class="col-lg-6 col-12">
          <form
            @submit.prevent="get"
            action="#"
            method="post"
            class="custom-form contact-form"
            role="form"
          >
            <div class="row">
              <div class="col-lg-6 col-12">
                <label for="name" class="form-label"
                  >{{ $t("name") }} <sup class="text-danger">*</sup></label
                >
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  :placeholder="$t('namePlaceholder')"
                  required
                />
              </div>

              <div class="col-lg-6 col-12">
                <label for="email" class="form-label">{{ $t("email") }}</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  class="form-control"
                  :placeholder="$t('emailPlaceholder')"
                  required
                />
              </div>

              <div class="col-12">
                <label for="message" class="form-label">{{ $t("help") }}</label>
                <textarea
                  v-model="text"
                  name="message"
                  rows="4"
                  class="form-control"
                  id="message"
                  required
                  :placeholder="$t('message')"
                ></textarea>
              </div>
            </div>

            <div class="col-lg-5 col-12 mx-auto mt-3">
              <button type="submit" class="form-control">
                {{ $t("sendMessage") }}
              </button>
            </div>
          </form>
        </div>

        <div class="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44956.81453205264!2d13.556543509810515!3d45.231594893963425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477c979c94879029%3A0x7a9e5b587feaabd!2zUG9yZcSN!5e0!3m2!1sen!2shr!4v1708106896641!5m2!1sen!2shr"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { postData } from "@/services/index.js";
export default {
  name: "Contact",

  data() {
    return {
      name: "",
      email: "",
      text: "",
    };
  },

  methods: {
    async get() {
      let success = await postData.postData(this.name, this.email, this.text);
      console.log(this.name, this.email, this.text);
      if (success == true) {
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
