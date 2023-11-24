import { mergeProps, useSSRContext, resolveComponent, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar" }, _attrs))}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/Header/avatar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ProfileHeaderAvatar = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ProfileHeaderAvatar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile/Header/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: posts, error } = us;
    eFetch("http://localhost/shv/wp-json/wp/v2/posts");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileHeader = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProfileHeader, null, null, _parent));
      _push(`<section class="container py-16">`);
      if (unref(posts) && unref(posts).length) {
        _push(`<div class="grid sm:grid-cols-3 gap-5"><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<div class="bg-white p-6 shadow-md rounded-md"><h2 class="text-xl font-bold mb-4">${ssrInterpolate(post.title.rendered)}</h2>`);
          if (post.featured_media) {
            _push(`<img${ssrRenderAttr("src", post.featured_media.source_url)} alt="Blog Image" class="mb-4 rounded-md">`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_router_link, {
            to: "/" + post.slug,
            class: "text-blue-500 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Read more`);
              } else {
                return [
                  createTextVNode("Read more")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center text-gray-600"> Loading posts... </div>`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8c7a1cde.js.map
