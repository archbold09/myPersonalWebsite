exports.ids=[3],exports.modules={120:function(t,e,r){"use strict";r(124);var n=r(38),o=r(6),l=r(14),c=r(21),d=r(9),h=r(0),v=r(3);const m=Object(v.a)(o.a,Object(l.b)(["absolute","fixed","top","bottom"]),c.a,d.a);e.a=m.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h.c)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h.c)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.$vuetify.rtl?"right":"left"]:Object(h.c)(this.normalizedValue,"%"),width:Object(h.c)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?n.b:n.c},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h.c)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const slot=Object(h.i)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize:t=>t<0?0:t>100?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h.c)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},121:function(t,e,r){"use strict";var n=r(120);e.a=n.a},122:function(t,e,r){var content=r(123);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("e23b7040",content,!0)},123:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.54)}.theme--light.v-card.v-card--outlined{border:1px solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:1px solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle{padding:16px}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""])},124:function(t,e,r){var content=r(125);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("cf87dc84",content,!0)},125:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s;width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{transform:translateX(-8px)}}@keyframes stream{to{transform:translateX(-8px)}}",""])},126:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(129),o=r(0);const l=Object(o.e)("v-card__actions"),c=Object(o.e)("v-card__subtitle"),d=Object(o.e)("v-card__text"),h=Object(o.e)("v-card__title");n.a},129:function(t,e,r){"use strict";r(122);var n=r(37),o=r(1),l=r.n(o),c=r(121),d=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(c.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),h=r(12),v=r(3);e.a=Object(v.a)(d,h.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...h.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...n.a.options.computed.classes.call(this)}},styles(){const style={...n.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const t=d.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},144:function(t,e,r){var content=r(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("3ccf8ce0",content,!0,t)}},163:function(t,e,r){t.exports=r.p+"img/1a495ba.png"},164:function(t,e,r){t.exports=r.p+"img/1b644fc.png"},165:function(t,e,r){t.exports=r.p+"img/c88f024.png"},166:function(t,e,r){t.exports=r.p+"img/d791b30.png"},167:function(t,e,r){"use strict";r.r(e);var n=r(144),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=o.a},168:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".temaBoton{color:#00c78f!important}.textoGris{color:#2f495e}.textoGris2{color:#718096}.textoVerde{color:#00c58e}",""])},202:function(t,e,r){"use strict";r.r(e);let n=r(164),o=r(165),l=r(166);var c={head:{titleTemplate:"Angel Archbold ~ Portafolio"},data:()=>({projects:[{route:"/proyectos/horarioCNCA",image:n,title:"Horario CNCA",description:"Software de horarios, para gestionar y agilizar la creacion y el\n              manejo de los horarios de las fichas, ambientes e instructores del\n              SENA."},{route:"/proyectos/confeccionesLucelis",image:o,title:"Confecciones Lucelis",description:" Página para la visualización de los productos e información del\n              negocio Confecciones Lucelis del Colombo Alemán."},{route:"/proyectos/myWebsite",image:l,title:"Mi página web personal",description:"Mi portafolio web, creado para subir la evidencia de mi trabajo, información y tecnologías que manejo."}]}),mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start(),setTimeout(()=>this.$nuxt.$loading.finish(),1e3)})}},d=r(13),h=r(20),v=r.n(h),m=r(110),f=r(129),_=r(126);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition"},[t._ssrNode('<div class="container mt-8 mb-2"><div class="row text-center"><div class="col-md-6 mb-3"><h1 class="font-weight-bold textoGris text-left">Portafolio</h1> <p class="title font-weight-medium textoGris2 text-left">\n          A continuación, un listado de los proyectos de desarrollo con\n          descripción e imágenes.\n        </p></div> <div class="col-md-6 mb-8"><img'+t._ssrAttr("src",r(163))+' class="img-fluid"></div></div></div> '),t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="row">',"</div>",t._l(t.projects,(function(e,i){return t._ssrNode('<div class="col-md-4">',"</div>",[n("v-card",{staticClass:"mx-auto text-center",attrs:{"max-width":"344","min-height":"344",hover:"",outlined:""}},[n("nuxt-link",{attrs:{to:e.route}},[n("img",{staticClass:"img-fluid",attrs:{src:e.image}})]),t._v(" "),n("v-card-text",{staticClass:"font-weight-bold title textoGris2"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("v-card-text",{staticClass:"font-weight-bold subtitle-2 textoGris2"},[t._v("\n            "+t._s(e.description)+"\n          ")]),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"text-center",attrs:{color:"#00c58e",outlined:"",to:e.route}},[t._v("\n              Ver más información\n            ")])],1)],1)],1)})),0)])],2)}),[],!1,(function(t){var e=r(167);e.__inject__&&e.__inject__(t)}),null,"51b53c98");e.default=component.exports;v()(component,{VBtn:m.a,VCard:f.a,VCardText:_.a})}};