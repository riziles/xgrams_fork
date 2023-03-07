import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, s as setContext, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object, j as each, k as createEventDispatcher, l as subscribe, v as validate_component, m as missing_component, n as now, o as loop, p as set_store_value } from "../../chunks/index2.js";
import { l as localStorageStore, T as TrinaryValue, O as OptionIndex, m as myStore, L as LanguageIndex, S as SourceNames, a as ScopeValues, b as ScopeNames, c as SoundNames } from "../../chunks/data.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
import { w as writable } from "../../chunks/index.js";
const discord = "/_app/immutable/assets/discord-mark-blue.400c9152.svg";
const githubDark = "/_app/immutable/assets/github-mark-white.fab00c2d.svg";
const svelte = "/_app/immutable/assets/svelte-logo.c57002cc.svg";
const twitter = "/_app/immutable/assets/twitter-circle-blue.6ab047a7.svg";
const storePopup = writable(void 0);
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const drawerStore = drawerService();
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const modalStore = modalService();
const cBase$4 = "flex flex-col space-y-4";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$4} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="${"app-bar"}" role="${"toolbar"}"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBase$3 = "p-1";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { display = "inline-flex" } = $$props;
  let { background = "bg-surface-200-700-token" } = $$props;
  let { border = "border-token border-surface-400-500-token" } = $$props;
  let { spacing = "space-x-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { padding = "px-4 py-1" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { color = "" } = $$props;
  let { fill = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("rounded", rounded);
  setContext("padding", padding);
  setContext("active", active);
  setContext("hover", hover);
  setContext("color", color);
  setContext("fill", fill);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$3} ${display} ${background} ${border} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"radio-group " + escape(classesBase, true)}" data-testid="${"radio-group"}" role="${"radiogroup"}"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$2 = "flex-auto text-base text-center cursor-pointer";
const cDisabled = "opacity-50 cursor-not-allowed";
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let classesActive;
  let classesDisabled;
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "label",
    "rounded",
    "padding",
    "active",
    "hover",
    "color",
    "fill"
  ]);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { label = "" } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { color = getContext("color") } = $$props;
  let { fill = getContext("fill") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  checked = value === group;
  classesActive = checked ? `${active} ${color} ${fill}` : hover;
  classesDisabled = $$props.disabled ? cDisabled : "";
  classesBase = `${cBase$2} ${padding} ${rounded} ${classesActive} ${classesDisabled}`;
  return `
<label class="${"radio-item " + escape(classesBase, true)}" role="${"radio"}"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)} tabindex="${"0"}" data-testid="${"radio-item"}">
	<div class="${"h-0 w-0 overflow-hidden"}"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>
	${slots.default ? slots.default({}) : ``}</label>`;
});
const cBase$1 = "space-y-2";
const cBaseLabel = "";
const cBaseContent = "flex justify-center py-2";
const cBaseInput = "w-full h-2";
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let $$restProps = compute_rest_props($$props, ["name", "id", "value", "min", "max", "step", "ticked", "accent", "label"]);
  let $$slots = compute_slots(slots);
  let { name } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { value = 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { ticked = false } = $$props;
  let { accent = "accent-secondary-500" } = $$props;
  let { label = "" } = $$props;
  let tickmarks;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.ticked === void 0 && $$bindings.ticked && ticked !== void 0)
    $$bindings.ticked(ticked);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesInput = `${cBaseInput} ${accent}`;
  return `<div class="${"range-slider " + escape(classesBase, true)}" data-testid="${"range-slider"}">
	${$$slots.default ? `<label class="${"range-slider-label " + escape(cBaseLabel, true)}"${add_attribute("for", id, 0)}>${slots.default ? slots.default({}) : ``}</label>` : ``}

	
	<div class="${"range-content " + escape(cBaseContent, true)}">
		<input${spread(
    [
      { type: "range" },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      {
        class: "range-slider-input " + escape(classesInput, true)
      },
      { list: "tickmarks-" + escape(id, true) },
      {
        "aria-label": escape_attribute_value(label)
      },
      { min: escape_attribute_value(min) },
      { max: escape_attribute_value(max) },
      { step: escape_attribute_value(step) },
      escape_object(prunedRestProps())
    ],
    {}
  )}${add_attribute("value", value, 0)}>

		
		${ticked && tickmarks && tickmarks.length ? `<datalist id="${"tickmarks-" + escape(id, true)}" class="${"range-slider-ticks"}">${each(tickmarks, (tm) => {
    return `<option${add_attribute("value", tm, 0)}${add_attribute("label", tm, 0)}></option>`;
  })}</datalist>` : ``}</div>

	
	${$$slots.trail ? `<div class="${"range-slider-trail"}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>`;
});
const cBase = "inline-block";
const cLabel = "unstyled flex items-center";
const cTrack$1 = "flex transition-all duration-[200ms] cursor-pointer";
const cThumb = "w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";
const SlideToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cTrackActive;
  let cThumbBackground;
  let cThumbPos;
  let classesDisabled;
  let classesBase;
  let classesLabel;
  let classesTrack;
  let classesThumb;
  let $$restProps = compute_rest_props($$props, ["name", "checked", "size", "active", "border", "rounded", "label"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { name } = $$props;
  let { checked = false } = $$props;
  let { size = "md" } = $$props;
  let { active = "bg-surface-900 dark:bg-surface-300" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { label = "" } = $$props;
  let trackSize;
  switch (size) {
    case "sm":
      trackSize = "w-12 h-6";
      break;
    case "lg":
      trackSize = "w-20 h-10";
      break;
    default:
      trackSize = "w-16 h-8";
  }
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  cTrackActive = checked ? active : "bg-surface-400 dark:bg-surface-700 cursor-pointer";
  cThumbBackground = checked ? "bg-white/75" : "bg-white";
  cThumbPos = checked ? "translate-x-full" : "";
  classesDisabled = $$props.disabled === true ? "opacity-50" : "hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer";
  classesBase = `${cBase} ${rounded} ${classesDisabled} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesTrack = `${cTrack$1} ${border} ${rounded} ${trackSize} ${cTrackActive}`;
  classesThumb = `${cThumb} ${rounded} ${cThumbBackground} ${cThumbPos}`;
  return `<div${add_attribute("id", label, 0)} class="${"slide-toggle " + escape(classesBase, true)}" data-testid="${"slide-toggle"}" role="${"switch"}"${add_attribute("aria-label", label, 0)}${add_attribute("aria-checked", checked, 0)} tabindex="${"0"}"><label class="${"slide-toggle-label " + escape(classesLabel, true)}">
		<input${spread(
    [
      { type: "checkbox" },
      { class: "slide-toggle-input hidden" },
      { name: escape_attribute_value(name) },
      escape_object(prunedRestProps()),
      { disabled: $$props.disabled || null }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}>
		
		<div class="${[
    "slide-toggle-track " + escape(classesTrack, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"><div class="${[
    "slide-toggle-thumb " + escape(classesThumb, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"></div></div>
		
		${$$slots.default ? `<div class="${"slide-toggle-text ml-3"}">${slots.default ? slots.default({}) : ``}</div>` : ``}</label></div>`;
});
const cBackdrop$1 = "fixed top-0 left-0 right-0 bottom-0 z-[999]";
const cTransitionLayer = "w-full h-full p-4 overflow-y-auto flex justify-center";
const cModal = "block";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  createEventDispatcher();
  let { position = "items-center" } = $$props;
  let { components = {} } = $$props;
  let { duration = 150 } = $$props;
  let { flyOpacity = 0 } = $$props;
  let { flyX = 0 } = $$props;
  let { flyY = 100 } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  modalStore.subscribe((modals) => {
    if (!modals.length)
      return;
    if (modals[0].type === "prompt")
      promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  });
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.flyOpacity === void 0 && $$bindings.flyOpacity && flyOpacity !== void 0)
    $$bindings.flyOpacity(flyOpacity);
  if ($$props.flyX === void 0 && $$bindings.flyX && flyX !== void 0)
    $$bindings.flyX(flyX);
  if ($$props.flyY === void 0 && $$bindings.flyY && flyY !== void 0)
    $$bindings.flyY(flyY);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop$1} ${regionBackdrop} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    duration,
    flyOpacity,
    flyX,
    flyY,
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    onClose
  };
  $$unsubscribe_modalStore();
  return `

${$modalStore.length > 0 ? `
		<div class="${"modal-backdrop " + escape(classesBackdrop, true)}" data-testid="${"modal-backdrop"}">
			<div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? `
					<div class="${"modal " + escape(classesModal, true)}" data-testid="${"modal"}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>
						${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}
						
						${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}
						
						${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="${"Modal"}">` : ``}
						
						${$modalStore[0].type === "alert" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="${"button"}" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="${"button"}" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
								<button type="${"button"}" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? `
							<form class="${"space-y-4"}"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}>
								<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="${"button"}" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
									<button type="${"submit"}" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `
					
					<div class="${"modal contents " + escape($modalStore[0].modalClasses ?? "", true)}" data-testid="${"modal-component"}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->`;
    }
  })}</div>`}</div></div>` : ``}`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 z-40 flex";
const cDrawer = "ox-border overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { duration = 150 } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "backdrop-blur-xs" } = $$props;
  let { padding = "" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const propDefaults = {
    position,
    duration,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    labelledby,
    describedby,
    regionBackdrop,
    regionDrawer
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    duration = settings.duration || propDefaults.duration;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
  }
  function applyAnimationSettings() {
    if (window === void 0)
      return;
    switch (position) {
      case "top":
        break;
      case "bottom":
        break;
      case "left":
        break;
      case "right":
        break;
      default:
        console.error("Error: unknown position property value.");
        break;
    }
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
    applyAnimationSettings();
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  return `

${$drawerStore.open === true ? `
	<div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="${"drawer-backdrop"}"${add_attribute("this", elemBackdrop, 0)}>
		<div class="${"drawer " + escape(classesDrawer, true)}" data-testid="${"drawer"}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}>
			${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const userDarkLight = localStorageStore("userDarkLight", TrinaryValue.neither);
const currentDarklight = localStorageStore("currentDarklight", false);
const cTrack = "cursor-pointer";
const DarkLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesTrack;
  let $currentDarklight, $$unsubscribe_currentDarklight;
  let $userDarkLight, $$unsubscribe_userDarkLight;
  $$unsubscribe_currentDarklight = subscribe(currentDarklight, (value) => $currentDarklight = value);
  $$unsubscribe_userDarkLight = subscribe(userDarkLight, (value) => $userDarkLight = value);
  let { width = "w-12" } = $$props;
  let { height = "w-12" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${$$props.class ?? ""}`;
  $$unsubscribe_currentDarklight();
  $$unsubscribe_userDarkLight();
  return `<div${add_attribute("class", classesTrack, 0)} role="${"button"}" aria-label="${"Dark Mode Button"}"${add_attribute("aria-current", $currentDarklight, 0)} title="${"Toggle " + escape(
    $userDarkLight == 2 ? "Use OS" : $userDarkLight == 1 ? "Light" : "Dark",
    true
  ) + " Mode"}" tabindex="${"0"}">${$userDarkLight == 0 ? `${slots.dark ? slots.dark({}) : `Missing dark icon`}` : `${$userDarkLight == 1 ? `${slots.light ? slots.light({}) : `Missing light icon`}` : `${$userDarkLight == 2 ? `${slots.os ? slots.os({}) : `Missing OS icon`}` : ``}`}`}</div>`;
});
const all = "";
const app = "";
const xgtheme = "";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Counter_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-16ry2r1{width:50%;height:50%;stroke:white;stroke:width 1px}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset2;
  let $displayed_count, $$unsubscribe_displayed_count;
  let { count = 0 } = $$props;
  let { min = 1 } = $$props;
  let { max = 101 } = $$props;
  let { step = 5 } = $$props;
  let { id = "range" } = $$props;
  let { name = "name" } = $$props;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      displayed_count.set(count);
    }
    offset2 = modulo($displayed_count, 1);
    $$rendered = `<div class="${"card"}"><header class="${"card-header"}">${escape(name)}</header>
	<div class="${"p-4 grid grid-rows-1 sm:grid-cols-3 gap-1"}"><button aria-label="${"Decrease the counter by one"}"><svg viewBox="${"0 0 1 1"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-16ry2r1"}"><path d="${"M0,0.5 L1,0.5"}" stroke-width="${"5%"}"></path></svg></button>
		<span class="${"counter-viewport"}"><div class="${"counter-digits"}" style="${"transform: translate(0, " + escape(100 * offset2, true) + "%)"}"><strong class="${"hidden"}" aria-hidden="${"true"}">${escape(Math.floor($displayed_count + 1))}</strong>
				<strong>${escape(Math.floor($displayed_count))}</strong></div></span>
		<button aria-label="${"Increase the counter by one"}"><svg viewBox="${"0 0 1 1"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-16ry2r1"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" stroke-width="${"5%"}"></path></svg></button></div>
	<div class="${"range"}">${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        id,
        name,
        label: name,
        min,
        max,
        step,
        value: count
      },
      {
        value: ($$value) => {
          count = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_displayed_count();
  return $$rendered;
});
let status = "Closed";
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let $sources, $$unsubscribe_sources;
  let $settings, $$unsubscribe_settings;
  const { data, settings, sources } = myStore;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_sources = subscribe(sources, (value) => $sources = value);
  function updateCodeWords(status2) {
    if (status2 == "Closing") {
      let codeWordsProccessed = [
        ...$data.languages[LanguageIndex.languageCpp] ? $sources.code.languageCpp : [],
        ...$data.languages[LanguageIndex.languageCs] ? $sources.code.languageCs : [],
        ...$data.languages[LanguageIndex.languageGo] ? $sources.code.languageGo : [],
        ...$data.languages[LanguageIndex.languageJava] ? $sources.code.languageJava : [],
        ...$data.languages[LanguageIndex.languageJavascript] ? $sources.code.languageJavascript : [],
        ...$data.languages[LanguageIndex.languagePython] ? $sources.code.languagePython : [],
        ...$data.languages[LanguageIndex.languageRust] ? $sources.code.languageRust : [],
        ...$data.languages[LanguageIndex.languageSwift] ? $sources.code.languageSwift : [],
        ...$data.languages[LanguageIndex.languageTypescript] ? $sources.code.languageTypescript : []
      ];
      set_store_value(sources, $sources.source[OptionIndex.code_words] = codeWordsProccessed, $sources);
      sources.set($sources);
      data.set($data);
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      updateCodeWords(status);
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}

<section><h1 class="${"p-4"}">Settings</h1>
	<br></section>
<section class="${"grid grid-cols-1 sm:grid-cols-5 gap-2"}"><div class="${"card"}"><header class="${"card-header"}">Source</header>
		<div class="${"p-4"}">${validate_component(RadioGroup, "RadioGroup").$$render(
      $$result,
      {
        rounded: "rounded-2xl",
        display: "flex-col",
        active: "variant-filled-primary",
        hover: "hover:variant-soft-primary"
      },
      {},
      {
        default: () => {
          return `${each(SourceNames, (name, i) => {
            return `${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                label: name,
                name,
                value: i,
                group: $data.source
              },
              {
                group: ($$value) => {
                  $data.source = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(name)}`;
                }
              }
            )}`;
          })}
				${validate_component(RadioItem, "RadioItem").$$render(
            $$result,
            {
              name: "Code",
              value: OptionIndex.code_words,
              group: $data.source
            },
            {
              group: ($$value) => {
                $data.source = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Code
					<button class="${"btn h-0 px-0 space-y-0"}">⚙️</button>`;
              }
            }
          )}
				${validate_component(RadioItem, "RadioItem").$$render(
            $$result,
            {
              name: "Custom",
              value: OptionIndex.custom_words,
              group: $data.source
            },
            {
              group: ($$value) => {
                $data.source = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<span class="${"space-y-0"}">Custom</span>
					<button class="${"btn h-0 px-0 space-y-0"}">⚙️</button>`;
              }
            }
          )}`;
        }
      }
    )}</div></div>
	<div class="${"card"}"><header class="${"card-header"}">Scope</header>
		<div class="${"p-4"}">${validate_component(RadioGroup, "RadioGroup").$$render(
      $$result,
      {
        rounded: "rounded-2xl",
        display: "flex-col",
        active: "variant-filled-primary",
        hover: "hover:variant-soft-primary"
      },
      {},
      {
        default: () => {
          return `${each(ScopeNames, (name, i) => {
            return `${validate_component(RadioItem, "RadioItem").$$render(
              $$result,
              {
                name,
                value: ScopeValues[i],
                group: $data.currentOptions.scope
              },
              {
                group: ($$value) => {
                  $data.currentOptions.scope = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(name)}`;
                }
              }
            )}`;
          })}`;
        }
      }
    )}</div></div>
	<div class="${"card p-0 space-y-0 m-0"}"><header class="${"card-header"}">Generate</header>
		<div class="${"p-4"}">${validate_component(Counter, "Counter").$$render(
      $$result,
      {
        name: "Combination",
        count: $data.currentOptions.combination
      },
      {
        count: ($$value) => {
          $data.currentOptions.combination = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Counter, "Counter").$$render(
      $$result,
      {
        name: "Repetition",
        count: $data.currentOptions.repetition
      },
      {
        count: ($$value) => {
          $data.currentOptions.repetition = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			<label class="${"label"}"><span>Filter
					<button class="${"btn px-0"}">⚙️</button></span></label></div></div>
	<div class="${"card p-4 space-y-4"}"><header class="${"card-header"}">Goals</header>
		<div class="${"p-4"}">${validate_component(Counter, "Counter").$$render(
      $$result,
      {
        name: "Minimum WPM",
        max: 401,
        step: 10,
        count: $settings.minimumWPM
      },
      {
        count: ($$value) => {
          $settings.minimumWPM = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Counter, "Counter").$$render(
      $$result,
      {
        name: "Minimum Accuracy",
        count: $settings.minimumAccuracy
      },
      {
        count: ($$value) => {
          $settings.minimumAccuracy = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
	<div class="${"card p-4 space-y-4"}"><header class="${"card-header"}">Sounds</header>
		<div class="${"p-4"}"><div>${each(SoundNames, (name, i) => {
      return `${validate_component(SlideToggle, "SlideToggle").$$render(
        $$result,
        {
          active: "variant-filled-primary",
          hover: "hover:variant-soft-primary",
          name,
          checked: $settings.sounds[i]
        },
        {
          checked: ($$value) => {
            $settings.sounds[i] = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${escape(name)}`;
          }
        }
      )}`;
    })}</div></div></div></section>

<button type="${"button"}" id="${"headlessui-listbox-button-4"}" aria-haspopup="${"true"}" aria-expanded="${"false"}" data-headlessui-state="${""}" aria-labelledby="${"headlessui-listbox-label-3 headlessui-listbox-button-4"}" class="${""}"><span class="${"dark:hidden"}"><svg viewBox="${"0 0 24 24"}" fill="${"none"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"w-6 h-6"}"><path d="${"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}" class="${"stroke-slate-400 dark:stroke-slate-500"}"></path><path d="${"M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"}" class="${"stroke-slate-400 dark:stroke-slate-500"}"></path></svg></span><span class="${"hidden dark:inline"}"><svg viewBox="${"0 0 24 24"}" fill="${"none"}" class="${"w-6 h-6"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"}" class="${"fill-transparent"}"></path><path d="${"m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"}" class="${"fill-slate-400 dark:fill-slate-500"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"}" class="${"fill-slate-400 dark:fill-slate-500"}"></path></svg></span></button>`;
  } while (!$$settled);
  $$unsubscribe_data();
  $$unsubscribe_sources();
  $$unsubscribe_settings();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $drawerStore, $$unsubscribe_drawerStore;
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  $$unsubscribe_drawerStore();
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}
<div></div>

${validate_component(Drawer, "Drawer").$$render($$result, { top: true }, {}, {
    default: () => {
      return `${$drawerStore.id === "settings" ? `<div>${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}</div>` : `${$drawerStore.id === "example-2" ? `(show &#39;example-2&#39; contents)` : `(fallback contents)`}`}`;
    }
  })}
${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      gridColumns: "grid-cols-3",
      slotDefault: "place-self-center",
      slotTrail: "place-content-end p-4"
    },
    {},
    {
      trail: () => {
        return `<button class="${"btn-icon"}"><h1>🧜‍♀️</h1></button>`;
      },
      default: () => {
        return `<h1><span class="${"gradient-heading"}">Xgrams</span></h1>`;
      },
      lead: () => {
        return `${validate_component(DarkLight, "Darklight").$$render($$result, {}, {}, {
          light: () => {
            return `<button slot="${"light"}" class="${"btn-icon"}"><h1>🌕</h1></button>`;
          },
          os: () => {
            return `<button slot="${"os"}" class="${"btn-icon"}"><h1>🌓</h1></button>`;
          },
          dark: () => {
            return `<button slot="${"dark"}" class="${"btn-icon"}"><h1>🌑</h1></button>`;
          }
        })}`;
      }
    }
  )}

<section>${slots.default ? slots.default({}) : ``}</section>

<footer class="${"m-8"}"><div class="${"flex justify-center gap-8 items-center"}"><div class="${"lg:block"}"><a href="${"https://kit.svelte.dev"}">
				<img width="${"40"}" height="${"40"}"${add_attribute("src", svelte, 0)} alt="${"SvelteKit"}"></a></div>
		<div><a href="${"https://www.skeleton.dev/"}" target="${"_blank"}" rel="${"noreferrer"}"><svg class="${"fill-token"}" width="${"40px"}" height="${"40px"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 40 40"}"><g fill-rule="${"evenodd"}"><path d="${"M17.355 10.21c5.07 0 9.398 1.736 12.495 4.588l.057-.017c.388-.12.72-.244.994-.37.879-.406 2.032-1.236 3.46-2.492-.232 2.188-.48 3.794-.747 4.818a19.306 19.306 0 0 1-.662 1.994 15.855 15.855 0 0 1 1.707 4.672c1.221 6.057-.871 8.735-5.727 10.23.037.18.065.373.086.58.173 1.772-.733 4.633-1.82 4.633-.716 0-1.181-.986-1.68-2.426-.155 1.666-.923 3.58-1.813 3.58-.958 0-1.467-1.767-2.21-4.022C21.118 37.75 20.55 40 19.546 40c-1.02 0-.46-3.177-2.181-4.523-8.721.47-16.057-2.718-16.057-11.916 0-1.693.405-3.346 1.147-4.88-.132-.257-.255-.51-.37-.761C1.505 16.656.81 14.744 0 12.183c2.074 1.53 3.665 2.442 4.772 2.735.11.029.226.055.346.077 2.906-2.879 7.248-4.785 12.237-4.785ZM15.32 22.62c-2.947 0-5.336 2.294-5.336 5.124 0 2.83 2.389 5.124 5.336 5.124 2.946 0 5.335-2.294 5.335-5.124 0-2.76-2.27-5.009-5.115-5.12Zm7.573 6.4c-.891 0-1.362 1.883-1.362 2.727 0 .66.224 1.024.589 1.09.885.082.615-1.194 1.056-1.194.47 0 1.02 1.305 1.48 1.128.547-.322.338-1.024.149-1.578-.665-1.394-1.02-2.173-1.912-2.173Zm5.801-6.7c-2.03 0-3.676 2.014-3.676 4.5 0 2.485 1.646 4.5 3.676 4.5 2.03 0 3.677-2.015 3.677-4.5 0-2.486-1.646-4.5-3.677-4.5ZM16 25a3 3 0 1 1-.5 5.958 3 3 0 0 0 0-5.917c.162-.027.33-.041.5-.041Zm12.5-1c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3c-.171 0-.339-.02-.5-.06 1.141-.278 2-1.489 2-2.94 0-1.451-.859-2.662-2-2.94.161-.04.329-.06.5-.06Zm.284-18.586.324.207c.146.093.19.288.096.434l-2.39 3.655a.314.314 0 0 1-.433.093l-.324-.207a.314.314 0 0 1-.095-.434l2.39-3.655a.314.314 0 0 1 .432-.093Zm-23.177.554 1.94 2.75c.1.141.066.337-.076.437l-.319.22a.314.314 0 0 1-.435-.077l-1.94-2.749a.314.314 0 0 1 .076-.438l.318-.22a.314.314 0 0 1 .436.077ZM18.183 0l.58 4.826 2.146-2.385.06 5.942-.426-.094c-1.242-.273-2.369-.41-3.379-.41a9.635 9.635 0 0 0-2.821.399l-.474.143.382-7.432 1.967 3.675L18.183 0Z"}"></path></g></svg></a></div>
		<div><a href="${"https://discord.com/channels/1003691521280856084"}" target="${"_blank"}" rel="${"noreferrer"}"><img width="${"40"}" height="${"40"}"${add_attribute("src", discord, 0)} alt="${"Discord"}"></a></div>
		<div><a href="${"https://twitter.com/SkeletonUI"}" target="${"_blank"}" rel="${"noreferrer"}"><img width="${"40"}" height="${"40"}"${add_attribute("src", twitter, 0)} alt="${"Discord"}"></a></div>
		<div><a href="${"https://github.com/dirk-bester/xgrams"}" target="${"_blank"}" rel="${"noreferrer"}"><img width="${"40"}" height="${"40"}"${add_attribute("src", githubDark, 0)} alt="${"Discord"}"></a></div></div></footer>`;
});
export {
  Layout as default
};
