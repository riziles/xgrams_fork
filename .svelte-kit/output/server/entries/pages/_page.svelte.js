import { c as create_ssr_component, j as each, a as add_attribute, e as escape, q as null_to_empty, l as subscribe, v as validate_component } from "../../chunks/index2.js";
import { m as myStore, O as OptionIndex, d as deepCopy } from "../../chunks/data.js";
const Keyboard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".how-to-play.svelte-5dfhiz.svelte-5dfhiz{color:var(--color-text)}.how-to-play.svelte-5dfhiz.svelte-5dfhiz::before{content:'i';display:inline-block;font-size:0.8em;font-weight:900;width:1em;height:1em;padding:0.2em;line-height:1;border:1.5px solid var(--color-text);border-radius:50%;text-align:center;margin:0 0.5em 0 0;position:relative;top:-0.05em}.grid.svelte-5dfhiz.svelte-5dfhiz{--width:min(100vw, 40vh, 380px);max-width:var(--width);align-self:center;justify-self:center;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start}@media(prefers-reduced-motion: no-preference){.row.current.svelte-5dfhiz.svelte-5dfhiz{animation:svelte-5dfhiz-wiggle 0.5s}}.row.current.svelte-5dfhiz.svelte-5dfhiz{filter:drop-shadow(3px 3px 10px var(--color-bg-0))}.letter.svelte-5dfhiz.svelte-5dfhiz{aspect-ratio:1;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;text-transform:lowercase;border:none;font-size:calc(0.08 * var(--width));border-radius:2px;background:white;margin:0;color:rgba(0, 0, 0, 0.7)}.letter.missing.svelte-5dfhiz.svelte-5dfhiz{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.letter.exact.svelte-5dfhiz.svelte-5dfhiz{background:var(--color-theme-2);color:white}.letter.close.svelte-5dfhiz.svelte-5dfhiz{border:2px solid var(--color-theme-2)}.selected.svelte-5dfhiz.svelte-5dfhiz{outline:2px solid var(--color-theme-1)}.controls.svelte-5dfhiz.svelte-5dfhiz{text-align:center;justify-content:center;height:min(18vh, 10rem)}.keyboard.svelte-5dfhiz.svelte-5dfhiz{--gap:0.2rem;position:relative;display:flex;flex-direction:column;gap:var(--gap);height:100%}.keyboard.svelte-5dfhiz .row.svelte-5dfhiz{display:flex;justify-content:center;gap:0.2rem;flex:1}.keyboard.svelte-5dfhiz button.svelte-5dfhiz,.keyboard.svelte-5dfhiz button.svelte-5dfhiz:disabled{--size:min(8vw, 4vh, 40px);background-color:white;color:black;width:var(--size);border:none;border-radius:2px;font-size:calc(var(--size) * 0.5);margin:0}.keyboard.svelte-5dfhiz button.exact.svelte-5dfhiz{background:var(--color-theme-2);color:white}.keyboard.svelte-5dfhiz button.missing.svelte-5dfhiz{opacity:0.5}.keyboard.svelte-5dfhiz button.close.svelte-5dfhiz{border:2px solid var(--color-theme-2)}.keyboard.svelte-5dfhiz button.svelte-5dfhiz:focus{background:var(--color-theme-1);color:white;outline:none}.keyboard.svelte-5dfhiz button[data-key='enter'].svelte-5dfhiz,.keyboard.svelte-5dfhiz button[data-key='backspace'].svelte-5dfhiz{position:absolute;bottom:0;width:calc(1.5 * var(--size));height:calc(1 / 4 * (100% - 2 * var(--gap)));text-transform:uppercase;font-size:calc(0.3 * var(--size));padding-top:calc(0.15 * var(--size))}.keyboard.svelte-5dfhiz button[data-key='enter'].svelte-5dfhiz{right:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-5dfhiz button[data-key='backspace'].svelte-5dfhiz{left:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.svelte-5dfhiz button[data-key='enter'].svelte-5dfhiz:disabled{opacity:0.5}.restart.svelte-5dfhiz.svelte-5dfhiz{width:100%;padding:1rem;background:rgba(255, 255, 255, 0.5);border-radius:2px;border:none}.restart.svelte-5dfhiz.svelte-5dfhiz:focus,.restart.svelte-5dfhiz.svelte-5dfhiz:hover{background:var(--color-theme-1);color:white;outline:none}@keyframes svelte-5dfhiz-wiggle{0%{transform:translateX(0)}10%{transform:translateX(-2px)}30%{transform:translateX(4px)}50%{transform:translateX(-6px)}70%{transform:translateX(+4px)}90%{transform:translateX(-2px)}100%{transform:translateX(0)}}",
  map: null
};
const Keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classnames;
  let description;
  $$result.css.add(css$4);
  {
    {
      classnames = {};
      description = {};
    }
  }
  return `<div class="${"keyboard svelte-5dfhiz"}"><button data-key="${"enter"}" ${""} class="${["svelte-5dfhiz", "selected"].join(" ").trim()}">enter</button>

	<button data-key="${"backspace"}" name="${"key"}" value="${"backspace"}" class="${"svelte-5dfhiz"}">back</button>

	${each(["`1234567890-=", "qwertyuiop[]\\", "asdfghjkl;'", "zxcvbnm,."], (row) => {
    return `<div class="${"row svelte-5dfhiz"}">${each(row, (letter) => {
      return `<button${add_attribute("data-key", letter, 0)} class="${escape(null_to_empty(classnames[letter]), true) + " svelte-5dfhiz"}" name="${"key"}"${add_attribute("value", letter, 0)} aria-label="${escape(letter, true) + " " + escape(description[letter] || "", true)}">${escape(letter)}
				</button>`;
    })}
		</div>`;
  })}
</div>`;
});
const Celebration_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-5tira4{position:absolute;font-size:5vw;user-select:none;pointer-events:none}",
  map: null
};
let element;
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
let confetti = new Array(97).fill("🥳").map((_, i) => {
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
const Celebration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : `
		${each(confetti, (c) => {
    return `<span${add_attribute("id", c.d, 0)} style="${"left: " + escape(c.x, true) + "%; top: " + escape(c.y, true) + "%; transform: scale(" + escape(c.r, true) + ")"}" class="${"svelte-5tira4"}">${escape(c.character)}</span>`;
  })}
	`}
</div>`;
});
let rightLetterSound = null;
let wrongLetterSound = null;
let failedGoalsSound = null;
let passedGoalsSound = null;
let lessonsDoneSound = null;
const PlaySounds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<audio src="${"/click.mp3"}"${add_attribute("this", rightLetterSound, 0)}></audio>
<audio src="${"/clack.mp3"}"${add_attribute("this", wrongLetterSound, 0)}></audio>
<audio src="${"/failed.mp3"}"${add_attribute("this", failedGoalsSound, 0)}></audio>
<audio src="${"/ding.wav"}"${add_attribute("this", passedGoalsSound, 0)}></audio>
<audio src="${"/tng_transporter9.mp3"}"${add_attribute("this", lessonsDoneSound, 0)}></audio>`;
});
const Timer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1sed7qq{width:100%;height:100%}.clock-face-outer.svelte-1sed7qq{fill:#001010}.clock-face-inner.svelte-1sed7qq{fill:#002525}.hour.svelte-1sed7qq,.hour-counterweight.svelte-1sed7qq{fill:#0066a6;stroke:#066;stroke-width:2}.major.svelte-1sed7qq,.clock-face-outer.svelte-1sed7qq{stroke:#066;stroke-width:2}.hour-counterweight.svelte-1sed7qq{stroke-width:6}.minute-counterweight.svelte-1sed7qq,.clock-face-inner.svelte-1sed7qq{stroke:#099;stroke-width:1.5}.minute.svelte-1sed7qq,.minor-inner.svelte-1sed7qq{fill:#001530;stroke:#099;stroke-width:0.5}.minute-counterweight.svelte-1sed7qq{stroke-width:3}.second.svelte-1sed7qq,.second-counterweight.svelte-1sed7qq,.minor.svelte-1sed7qq{fill:#009090;stroke:#0ee;stroke-width:1}.second-counterweight.svelte-1sed7qq{fill:#001530;stroke-width:2}",
  map: null
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hours;
  let minutes;
  let seconds;
  let time = new Date();
  function startTimer() {
  }
  function stopTimer() {
  }
  if ($$props.startTimer === void 0 && $$bindings.startTimer && startTimer !== void 0)
    $$bindings.startTimer(startTimer);
  if ($$props.stopTimer === void 0 && $$bindings.stopTimer && stopTimer !== void 0)
    $$bindings.stopTimer(stopTimer);
  $$result.css.add(css$2);
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  time.getMilliseconds();
  return `<svg viewBox="${"-50 -50 100 100"}" class="${"svelte-1sed7qq"}"><circle class="${"clock-face-outer svelte-1sed7qq"}" r="${"40"}" style="${"fill-opacity: .25;"}"></circle><circle class="${"clock-face-inner svelte-1sed7qq"}" r="${"20"}" style="${"fill-opacity: .25;"}"></circle>${each([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], (minute) => {
    return `<g transform="${"rotate(" + escape(30 * minute, true) + ")"}"><line class="${"major svelte-1sed7qq"}" y1="${"35"}" y2="${"45"}"></line><line class="${"minor-inner svelte-1sed7qq"}" y1="${"20"}" y2="${"23"}"></line></g>

		${each([1, 2, 3, 4], (offset) => {
      return `<g transform="${"rotate(" + escape(6 * (minute + offset), true) + ")"}"><line class="${"minor svelte-1sed7qq"}" y1="${"35"}" y2="${"38"}"></line><line class="${"minor-inner svelte-1sed7qq"}" y1="${"20"}" y2="${"23"}"></line></g>`;
    })}`;
  })}<g transform="${"rotate(" + escape(30 * hours, true) + ")"}"><line class="${"hour svelte-1sed7qq"}" y1="${"-33"}" y2="${"-40"}"></line><line class="${"hour-counterweight svelte-1sed7qq"}" y1="${"-45"}" y2="${"-50"}"></line><circle class="${"hour svelte-1sed7qq"}" r="${"4"}" cx="${"0"}" cy="${"-29"}" style="${"fill-opacity: .25;"}"></circle></g><g transform="${"rotate(" + escape(6 * minutes, true) + ")"}"><line class="${"minute svelte-1sed7qq"}" y1="${"0"}" y2="${"-20"}"></line><circle class="${"minute svelte-1sed7qq"}"${add_attribute("r", 9 * (1 - Math.cos(seconds / 30 * Math.PI)), 0)} cx="${"0"}" cy="${"0"}" style="${"fill-opacity: .05;"}"></circle><line class="${"minute-counterweight svelte-1sed7qq"}" y1="${"-15"}" y2="${"-17"}"></line><circle class="${"minute svelte-1sed7qq"}"${add_attribute("r", 3 * (1 + Math.cos(seconds / 30 * Math.PI)), 0)} cx="${"0"}" cy="${"-29"}" style="${"fill-opacity: .25;"}"></circle></g><g transform="${"rotate(" + escape(6 * seconds, true) + ")"}"><line class="${"second-counterweight svelte-1sed7qq"}" y1="${"-34"}" y2="${"-45"}"></line><line class="${"second svelte-1sed7qq"}" y1="${"-24"}" y2="${"-19.5"}"></line><circle class="${"second svelte-1sed7qq"}" r="${"5"}" cx="${"0"}" cy="${"-29"}" style="${"fill-opacity: .25;"}"></circle></g></svg>`;
});
const Typist_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-kfa4fq{font-size:2em;justify-content:center;align-items:center;max-width:100%;font-kerning:auto}h4.svelte-kfa4fq{display:flex;font-size:1em;justify-content:center;align-items:center;max-width:100%;font-kerning:auto}.textZone.svelte-kfa4fq{margin:1em 0;padding:1em}.textBlur.svelte-kfa4fq{border-color:rgba(255, 0, 0, 0.6);box-shadow:inset 0 2px 2px rgba(0, 0, 0, 0.1), 0 0 8px rgba(255, 0, 0, 0.6)}.textFocus.svelte-kfa4fq{cursor:none;border-color:rgba(0, 0, 255, 0.6);box-shadow:inset 0 2px 2px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 255, 0.6)}.normalChar.svelte-kfa4fq{color:--theme-font-color}.typingChar.svelte-kfa4fq{border-bottom:4px solid #f78d1d}.failedChar.svelte-kfa4fq{color:#ff0000}.remedyChar.svelte-kfa4fq{color:#ff8000}.betterChar.svelte-kfa4fq{color:#aaa;text-shadow:0px 1px 1px #fff, 0px 2px 2px #fff}",
  map: null
};
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function padToMultiple(array, multiple) {
  while (array.length % multiple > 0) {
    let j = Math.floor(Math.random() * (array.length - 1));
    array.push(array[j]);
  }
}
const Typist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let $$unsubscribe_settings;
  let $sources, $$unsubscribe_sources;
  const { data, settings, sources } = myStore;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_sources = subscribe(sources, (value) => $sources = value);
  let expectedPhrase = "";
  let typedPhrase = "";
  let rawWPM = 0;
  let accuracy = 0;
  let phrasesCurrentIndex = 0;
  function initializeLesson() {
    let dataSource = $data.currentOptions;
    dataSource.phrases = generatePhrases(dataSource.combination, dataSource.repetition, dataSource.filter);
    expectedPhrase = dataSource.phrases[0] || "";
    dataSource.phrasesCurrentIndex = 0;
    initializePhrase();
  }
  function generatePhrases(numberOfItemsToCombine, repetitions, filter) {
    let dataSource = $data.currentOptions;
    let scope = dataSource.scope;
    let source = $sources.source[$data.source];
    if (source == null) {
      source = $sources.source[OptionIndex.bigrams];
    }
    if (scope) {
      source = source.slice(0, scope);
    }
    if (filter.length > 0) {
      let orList = filter.split("\n");
      source = source.filter(function(element2) {
        for (let andString of orList) {
          let chosen = true;
          for (let mandatoryChar of andString) {
            if (!element2.includes(mandatoryChar)) {
              chosen = false;
              break;
            }
          }
          if (chosen)
            return true;
        }
        return false;
      });
    }
    let ngrams = deepCopy(source);
    shuffle(ngrams);
    padToMultiple(ngrams, numberOfItemsToCombine);
    let phrases = [];
    while (ngrams.length) {
      let ngramsSublist = ngrams.slice(0, numberOfItemsToCombine);
      let subPhrase = ngramsSublist.join(" ");
      let _phrase = [];
      for (let i = 0; i < repetitions; i++) {
        _phrase.push(subPhrase);
      }
      phrases.push(_phrase.join(" "));
      ngrams.splice(0, numberOfItemsToCombine);
    }
    return phrases;
  }
  const ColorChars = {
    untoldChar: 0,
    normalChar: 1,
    typingChar: 2,
    betterChar: 3,
    failedChar: 4,
    remedyChar: 5
  };
  let colorPhrase = [];
  const ClassSpan = ["", "normalChar", "typingChar", "betterChar", "failedChar", "remedyChar"];
  let classPhrase = [];
  function makeColorPhrase() {
    let currentColor = ColorChars.untoldChar;
    let currentIsTyping = false;
    let currentClass = {
      class: ClassSpan[ColorChars.typingChar],
      chars: "",
      typing: false
    };
    let aClassPhrase = [];
    let typingIndex = typedPhrase.length;
    let length = colorPhrase.length;
    for (let i = 0; i < length; i++) {
      let c = colorPhrase[i];
      if (i > typingIndex) {
        c = ColorChars.normalChar;
      }
      let isTyping = i == typingIndex;
      if (c != currentColor || isTyping != currentIsTyping) {
        currentColor = c;
        currentIsTyping = isTyping;
        currentClass = {
          class: ClassSpan[currentColor],
          chars: "",
          typing: isTyping
        };
        aClassPhrase.push(currentClass);
      }
      let t = expectedPhrase[i];
      if (t == " ") {
        currentClass.chars += ` `;
      } else if (t == "&") {
        currentClass.chars += `&`;
      } else if (t === void 0)
        ;
      else {
        currentClass.chars += t;
      }
    }
    classPhrase = aClassPhrase;
  }
  function initializePhrase() {
    typedPhrase = "";
    colorPhrase.length = expectedPhrase.length;
    colorPhrase = colorPhrase.fill(ColorChars.normalChar, 0, expectedPhrase.length);
    colorPhrase[0] = ColorChars.typingChar;
    makeColorPhrase();
    phrasesCurrentIndex = $data.currentOptions.phrasesCurrentIndex;
  }
  function averageWPM() {
    let dataSource = $data.currentOptions;
    if (dataSource.WPMs.length == 0) {
      return 0;
    }
    let sum = dataSource.WPMs.reduce(
      function(a, b) {
        return a + b;
      },
      0
    );
    let average = sum / dataSource.WPMs.length;
    return Math.round(average);
  }
  function onDataChange(data2) {
    initializeLesson();
  }
  $$result.css.add(css$1);
  {
    onDataChange();
  }
  $$unsubscribe_data();
  $$unsubscribe_settings();
  $$unsubscribe_sources();
  return `<div id="${"textZone"}" class="${escape(
    null_to_empty("font-sans textBlur textZone"),
    true
  ) + " svelte-kfa4fq"}" tabindex="${"-1"}">
	<h3 class="${"svelte-kfa4fq"}">${each(classPhrase, (cp) => {
    return `${cp.typing ? `<span class="${escape(null_to_empty("font-sans " + cp.class + " " + ClassSpan[ColorChars.typingChar]), true) + " svelte-kfa4fq"}">${escape(cp.chars)}</span>` : `<span class="${escape(null_to_empty("font-sans " + cp.class), true) + " svelte-kfa4fq"}">${escape(cp.chars)}</span>`}`;
  })}</h3>
	<h4 class="${"flex place-content-evenly gap-x-3 mt-6 svelte-kfa4fq"}"><div><strong>Lesson ${escape(phrasesCurrentIndex)} / ${escape($data.currentOptions.phrases.length)}</strong></div></h4>
	<h4 class="${"flex place-content-evenly gap-x-3 mt-0 svelte-kfa4fq"}"><div>WPM: ${escape(rawWPM)}</div>
		<div>Accuracy: ${escape(accuracy)}%</div>
		<div>Average WPM: ${escape(averageWPM())}</div></h4></div>
<div>${validate_component(Timer, "Timer").$$render($$result, {}, {}, {})}</div>




${validate_component(PlaySounds, "PlaySounds").$$render($$result, {}, {}, {})}
<div>${validate_component(Celebration, "Celebration").$$render($$result, {}, {}, {})}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-f71atx-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-f71atx-pulse{50%{transform:scale(1.5)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container h-full mx-auto flex justify-center items-center"}"><div class="${"space-y-10 text-center"}"><div class="${"space-y-2"}">Use this link instead: <a href="${"https://xgrams.vercel.app/"}">https://xgrams.vercel.app/</a>
			<div>${validate_component(Typist, "Typist").$$render($$result, {}, {}, {})}</div>
			<div>${validate_component(Keyboard, "Keyboard").$$render($$result, {}, {}, {})}</div></div></div>
</div>`;
});
export {
  Page as default
};
