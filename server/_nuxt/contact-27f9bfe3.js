import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const ContactForm_vue_vue_type_style_index_0_scoped_f0c750d6_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)} data-v-f0c750d6><label for="name" data-v-f0c750d6>Name:</label><input type="text" id="name"${ssrRenderAttr("value", $data.formData.name)} required data-v-f0c750d6><label for="email" data-v-f0c750d6>Email:</label><input type="email" id="email"${ssrRenderAttr("value", $data.formData.email)} required data-v-f0c750d6><label for="message" data-v-f0c750d6>Message:</label><textarea id="message" required data-v-f0c750d6>${ssrInterpolate($data.formData.message)}</textarea><button type="submit" data-v-f0c750d6>Submit</button></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f0c750d6"]]);
const _sfc_main = {
  components: {
    ContactForm: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactForm = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Contact Page</h1>`);
  _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-27f9bfe3.js.map
