import{_ as l,o as d,c as _,s as r,v as i,a as o,x as f,p as b,f as x,b as g}from"./entry.ab66d1b4.js";const v={data(){return{formData:{name:"",email:"",message:""}}},methods:{submitForm(){console.log("Form submitted:",this.formData)}}},n=a=>(b("data-v-f0c750d6"),a=a(),x(),a),D=n(()=>o("label",{for:"name"},"Name:",-1)),F=n(()=>o("label",{for:"email"},"Email:",-1)),h=n(()=>o("label",{for:"message"},"Message:",-1)),y=n(()=>o("button",{type:"submit"},"Submit",-1));function S(a,e,u,p,s,m){return d(),_("form",{onSubmit:e[3]||(e[3]=f((...t)=>m.submitForm&&m.submitForm(...t),["prevent"]))},[D,r(o("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>s.formData.name=t),required:""},null,512),[[i,s.formData.name]]),F,r(o("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>s.formData.email=t),required:""},null,512),[[i,s.formData.email]]),h,r(o("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=t=>s.formData.message=t),required:""},null,512),[[i,s.formData.message]]),y],32)}const c=l(v,[["render",S],["__scopeId","data-v-f0c750d6"]]),V={components:{ContactForm:c}},C=o("h1",null,"Contact Page",-1);function I(a,e,u,p,s,m){const t=c;return d(),_("div",null,[C,g(t)])}const w=l(V,[["render",I]]);export{w as default};
