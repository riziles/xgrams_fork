import { c as create_ssr_component } from "../../chunks/index2.js";
import "../../chunks/data.js";
const Keyboard_svelte_svelte_type_style_lang = "";
const Celebration_svelte_svelte_type_style_lang = "";
let characters = [
  "🥳",
  "🪅",
  "🎉",
  "🎊",
  "✨",
  "🎭",
  "🤩",
  "🫧",
  "🥳",
  "🥰",
  "❤️‍🔥",
  "🎁",
  "💫",
  "🌟",
  "🐣",
  "🌟",
  "🌜",
  "🌛",
  "🌝",
  "⚡"
];
new Array(97).fill("🥳").map((_, i) => {
  return {
    character: characters[i % characters.length],
    x: Math.random() * 100,
    y: -20 - Math.random() * 100,
    r: 0.1 + Math.random() * 1.5,
    d: "emoj" + i,
    o: 0,
    e: null
  };
}).sort((a, b) => a.r - b.r);
const Timer_svelte_svelte_type_style_lang = "";
const Typist_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-f71atx-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-f71atx-pulse{50%{transform:scale(1.5)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container h-full mx-auto flex justify-center items-center"}"><div class="${"space-y-10 text-center"}"><div class="${"text-3xl space-y-2"}">Use this link instead: <a class="${"text-3xl"}" href="${"https://xgrams.vercel.app/"}">https://xgrams.vercel.app/</a>
			</div></div>
</div>`;
});
export {
  Page as default
};
