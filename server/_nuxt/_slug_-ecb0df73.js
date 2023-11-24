import { u as useRoute } from "../server.mjs";
import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>Example:${ssrInterpolate(unref(route).params.slug)}</h1>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-ecb0df73.js.map
