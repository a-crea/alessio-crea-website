<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
      <generic-panel>
        <div class="flex flex-col lg:flex-row items-center gap-3">
          <div>
            <h1
              data-aos="fade-down"
              :data-aos-duration="EOS_DURATION"
              class="text-4xl md:text-7xl mb-6"
            >
              Ciao! 👋🏼<br />
              Sono
              <span class="font-bold"> Alessio Crea</span>,<br />
              <span class="font-mono"
                >Freelance
                <span class="font-bold" :style="{ wordSpacing: 0.8 }"
                  >Web Developer</span
                >
              </span>
            </h1>
            <div
              data-aos="fade-down"
              :data-aos-delay="500"
              :data-aos-duration="EOS_DURATION"
              class="flex flex-col gap-3 md:flex-row md:text-lg mb-6"
            >
              <a
                :href="`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`"
                target="_blank"
                class="btn btn-primary"
              >
                <i class="las la-envelope"></i>
                <span> Contattami </span>
              </a>
              <a
                :href="`${LINKEDIN_URL}`"
                target="_blank"
                class="btn btn-outline btn-primary"
              >
                <i class="lab la-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
          <div class="basis-1/2 flex justify-center">
            <div
              class="relative flex justify-center rounded-full bg-gradient-to-br from-neutral to-primary border-primary h-72 w-72 md:w-96 md:h-96 overflow-hidden"
              data-aos="fade-left"
            >
              <img
                src="@/assets/images/profile.png"
                alt="Alessio Crea"
                class="h-72 md:h-96 max-w-none grayscale"
                data-aos="zoom-in-up"
                :data-aos-duration="EOS_DURATION - 300"
              />
            </div>
          </div>
        </div>
      </generic-panel>
    </div>
  </div>
</template>

<script setup>
import GenericPanel from "~/components/commons/GenericPanel";
import { EMAIL, EMAIL_SUBJECT, LINKEDIN_URL } from "~/assets/data/config.json";

import ogImage from "../assets/images/profile.jpeg";

const EOS_DURATION = 1500;

useHead({
  title: "Alessio Crea - Freelance Web Developer",
  description: "Alessio Crea, Freelance Web Developer",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  meta: [
    {
      hid: "og:image",
      name: "og:image",
      property: "og:image",
      content: ogImage,
    },
  ],
});
</script>
