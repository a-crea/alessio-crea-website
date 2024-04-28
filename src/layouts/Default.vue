<template>
  <div :data-theme="theme">
    <slot />
    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <h1 class="text-lg font-bold">Alessio Crea</h1>
        <p class="text-base">
          Il sito è ancora in costruzione, per avere più informazioni<br />vai
          pure sul mio
          <a :href="`${LINKEDIN_URL}`" target="_blank" class="underline"
            >LinkedIn</a
          >
          o
          <a
            :href="`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`"
            target="_blank"
            class="underline"
            >scrivimi</a
          >
          per organizzare un piccolo meeting conoscitivo 😊
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4 text-2xl">
          <a :href="`${LINKEDIN_URL}`" target="_blank">
            <i class="lab la-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { EMAIL, EMAIL_SUBJECT, LINKEDIN_URL } from "~/assets/data/config.json";

import { ref, watch, onMounted } from "vue";
const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
export default {
  setup() {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem("daisyui-theme", value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem("daisyui-theme") || "light";
    });
    return {
      theme,
      themes: THEMES,
      EMAIL,
      EMAIL_SUBJECT,
      LINKEDIN_URL,
    };
  },
};
</script>
