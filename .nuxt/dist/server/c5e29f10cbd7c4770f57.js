exports.ids=[6],exports.modules={120:function(t,e,r){"use strict";r(124);var o=r(38),n=r(6),l=r(14),c=r(21),d=r(9),h=r(0),v=r(3);const f=Object(v.a)(n.a,Object(l.b)(["absolute","fixed","top","bottom"]),c.a,d.a);e.a=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h.c)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h.c)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.$vuetify.rtl?"right":"left"]:Object(h.c)(this.normalizedValue,"%"),width:Object(h.c)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?o.b:o.c},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h.c)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const slot=Object(h.i)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize:t=>t<0?0:t>100?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h.c)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},121:function(t,e,r){"use strict";var o=r(120);e.a=o.a},122:function(t,e,r){var content=r(123);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("e23b7040",content,!0)},123:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.54)}.theme--light.v-card.v-card--outlined{border:1px solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#424242;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:1px solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle{padding:16px}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions .v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions .v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""])},124:function(t,e,r){var content=r(125);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("cf87dc84",content,!0)},125:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s;width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{transform:translateX(-8px)}}@keyframes stream{to{transform:translateX(-8px)}}",""])},127:function(t,e,r){var content=r(128);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("7132a15d",content,!0)},128:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""])},129:function(t,e,r){"use strict";r(122);var o=r(37),n=r(1),l=r.n(n),c=r(121),d=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(c.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),h=r(12),v=r(3);e.a=Object(v.a)(d,h.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...h.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...o.a.options.computed.classes.call(this)}},styles(){const style={...o.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const t=d.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},130:function(t,e,r){"use strict";const o={inserted:function(t,e){const r=e.value,o=e.options||{passive:!0};window.addEventListener("resize",r,o),t._onResize={callback:r,options:o},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t){if(!t._onResize)return;const{callback:e,options:r}=t._onResize;window.removeEventListener("resize",e,r),delete t._onResize}};e.a=o},131:function(t,e,r){"use strict";var o=r(0);const n=t=>{const{touchstartX:e,touchendX:r,touchstartY:o,touchendY:n}=t;t.offsetX=r-e,t.offsetY=n-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&r<e-16&&t.left(t),t.right&&r>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&n<o-16&&t.up(t),t.down&&n>o+16&&t.down(t))};function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>(function(t,e){const r=t.changedTouches[0];e.touchstartX=r.clientX,e.touchstartY=r.clientY,e.start&&e.start(Object.assign(t,e))})(t,e),touchend:t=>(function(t,e){const r=t.changedTouches[0];e.touchendX=r.clientX,e.touchendY=r.clientY,e.end&&e.end(Object.assign(t,e)),n(e)})(t,e),touchmove:t=>(function(t,e){const r=t.changedTouches[0];e.touchmoveX=r.clientX,e.touchmoveY=r.clientY,e.move&&e.move(Object.assign(t,e))})(t,e)}}const c={inserted:function(t,e,r){const n=e.value,c=n.parent?t.parentElement:t,d=n.options||{passive:!0};if(!c)return;const h=l(e.value);c._touchHandlers=Object(c._touchHandlers),c._touchHandlers[r.context._uid]=h,Object(o.m)(h).forEach(t=>{c.addEventListener(t,h[t],d)})},unbind:function(t,e,r){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const l=n._touchHandlers[r.context._uid];Object(o.m)(l).forEach(t=>{n.removeEventListener(t,l[t])}),delete n._touchHandlers[r.context._uid]}};e.a=c},132:function(t,e,r){"use strict";r(138);var o=r(133),n=r(134),l=r(9),c=r(3);e.a=Object(c.a)(l.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(o.a,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,r=[];for(let i=0;i<this.items.length;i++){const o=this.items[i];r.push(o.text),e?t.push(this.$scopedSlots.item({item:o})):t.push(this.$createElement(n.a,{key:r.join("."),props:o},[o.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},133:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r(132),n=r(134),l=r(0);const c=Object(l.e)("v-breadcrumbs__divider","li");o.a,n.a},134:function(t,e,r){"use strict";var o=r(12),n=r(3);e.a=Object(n.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:data}=this.generateRouteLink();return t("li",[t(e,{...data,attrs:{...data.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}})},136:function(t,e,r){var content=r(137);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("8f7a87bc",content,!0)},137:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""])},138:function(t,e,r){var content=r(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("b1bed018",content,!0)},139:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""])},141:function(t,e,r){"use strict";r(127);var o=r(9);e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},142:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));r(136);var o=r(29),n=r(38),l=r(10),c=r(130),d=r(131),h=r(3);const v=Object(h.a)(l.a).extend({name:"base-slide-group",directives:{Resize:c.a,Touch:d.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...l.a.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:content,wrapper:t}=this.widths;return content>Math.abs(this.scrollOffset)+t},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[slot])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const r=this[`has${`${t[0].toUpperCase()}${t.slice(1)}`}`];return this.showArrows||r?this.$createElement(o.a,{props:{disabled:!r}},this[`${e}Icon`]):null},genPrev(){const slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[slot])},genTransition(t){return this.$createElement(n.b,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,r,o){const n=r?-1:1,l=n*o+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:content}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:content,wrapper:t}=this.$refs,e=content.clientWidth-t.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-e&&(this.scrollOffset=-e):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=e&&(this.scrollOffset=e)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,r,o){const n=t.clientWidth,l=r?e.content-t.offsetLeft-n:t.offsetLeft;r&&(o=-o);const c=e.wrapper+o,d=n+l,h=.4*n;return l<o?o=Math.max(l-h,0):c<d&&(o=Math.min(o-(c-d-h),e.content-e.wrapper)),r?-o:o},calculateCenteredOffset(t,e,r){const{offsetLeft:o,clientWidth:n}=t;if(r){const t=e.content-o-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=o+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:content,wrapper:t}=this.$refs;this.widths={content:content?content.clientWidth:0,wrapper:t?t.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=v.extend({name:"v-slide-group",provide(){return{slideGroup:this}}})},149:function(t,e,r){var content=r(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(5).default;t.exports.__inject__=function(t){o("709d9e24",content,!0,t)}},151:function(t,e,r){"use strict";var o=r(19),n=r(3),l=r(2),c=r(1);const d=r.n(c).a.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(l.c)("v-item is missing a default scopedSlot",this),null;let element;return this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:{[this.activeClass]:this.isActive}}),element):(Object(l.c)("v-item should only contain a single element",this),element)}});Object(n.a)(d,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(n.a)(d,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},193:function(t,e,r){t.exports=r.p+"img/d791b30.png"},194:function(t,e,r){"use strict";r.r(e);var o=r(149),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},195:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".temaBoton{color:#00c78f!important}.textoGris{color:#2f495e}.textoGris2{color:#718096}.textoVerde{color:#00c58e}",""])},201:function(t,e,r){"use strict";r.r(e);var o={head:{titleTemplate:"Angel Archbold ~ HORARIO CNCA"},data:()=>({experienciaLaboral:[{titulo:"SENA - INVESTIGADOR Y PROGRAMADOR EN SENNOVA",texto:"Desarrolle aplicativo de contabilidad y pagina publicitaria del CONGRESO 2019 SENNOVA",color:"primary",year:"Julio 2019 - Enero 2020"},{titulo:"SENA - MONITORIAS COMO PROGRAMADOR EN SENNOVA",texto:"Desarrolle aplicativo de horarios, para gestionar el horario de las fichas e instructores y mejorar el proceso de creacion para los funcionarios SENA.",color:"primary",year:"Abril 2019 - Julio 2019"}],backEnd:[{icono:"mdi mdi-vuejs",colorIcono:"#3FB37F",valor:"90",valor2:"90%",colorValor:"#3FB37F"},{icono:"mdi mdi-language-html5",colorIcono:"#FE4C1E",valor:"99",valor2:"99%",colorValor:"#FE4C1E"},{icono:"mdi mdi-language-css3",colorIcono:"#379AD6",valor:"40",valor2:"40%",colorValor:"#379AD6"},{icono:"mdi mdi-language-javascript",colorIcono:"#F7E018",valor:"90",valor2:"90%",colorValor:"#F7E018"},{icono:"mdi mdi-nuxt",colorIcono:"#32ABEA",valor:"90",valor2:"90%",colorValor:"#32ABEA"},{icono:"mdi mdi-bootstrap",colorIcono:"#543B79",valor:"99",valor2:"99%",colorValor:"#543B79"},{icono:"mdi mdi-vuetify",colorIcono:"#1697F6",valor:"80",valor2:"80%",colorValor:"#1697F6"},{icono:"mdi mdi-material-design",colorIcono:"#BEBCBF",valor:"80",valor2:"80%",colorValor:"#BEBCBF"}],options:[{text:"Portafolio",disabled:!1,to:"../portafolio"},{text:"My Website",disabled:!0}]}),mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start(),setTimeout(()=>this.$nuxt.$loading.finish(),1e3)})}},n=r(13),l=r(20),c=r.n(l),d=r(31),h=r(132),v=r(129),f=r(141),m=r(33),_=r(120),x=r(8),w=r(142),y=r(151);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"transition"},[t._ssrNode('<div class="container mt-8 mb-8">',"</div>",[t._ssrNode("<div>","</div>",[o("v-breadcrumbs",{attrs:{items:t.options,divider:">",large:""}})],1),t._ssrNode(' <div class="row text-center"><div class="col-md-6 mb-3 pt-4"><h1 class="font-weight-bold textoGris text-left"> Archbold Website </h1> <p class="title font-weight-medium textoGris2 text-left">\n             Mi portafolio web, creado para subir la evidencia de mi trabajo, información y tecnologías que manejo.\n          </p></div> <div class="col-md-6 mb-8"><img'+t._ssrAttr("src",r(193))+' class="img-fluid rounded"></div></div>')],2),t._ssrNode(" "),t._ssrNode('<section style="background-color:white;">',"</section>",[t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="row text-center">',"</div>",[t._ssrNode('<div class="col-md-12">',"</div>",[t._ssrNode('<p class="title font-weight-medium textoGris2">',"</p>",[o("v-icon",{attrs:{color:"#00c58e",size:"40"}},[t._v("mdi mdi-github")]),t._ssrNode(' <a href="https://github.com/archbold09/myPersonalWebsite">https://github.com/archbold09/myPersonalWebsite</a>')],2)])])])]),t._ssrNode(" "),t._ssrNode('<div class="container mt-8">',"</div>",[t._ssrNode('<div class="row text-center">',"</div>",[t._ssrNode('<div class="col-md-6 mb-3 pt-12 mt-12">',"</div>",[t._ssrNode('<h1 class="font-weight-bold textoGris text-left"> Estado del proyecto </h1> '),o("v-divider",{attrs:{width:"200",color:"#00C78F"}})],2),t._ssrNode(" "),t._ssrNode('<div class="col-md-12">',"</div>",[t._ssrNode('<h2 class="font-weight-bold text-left error--text">Terminado</h2> '),o("v-progress-linear",{attrs:{value:"100",height:"10",striped:"",color:"error"}})],2)],2)]),t._ssrNode(" "),t._ssrNode('<div class="container mb-8">',"</div>",[t._ssrNode('<div class="row text-center">',"</div>",[t._ssrNode('<div class="col-md-6 mb-3 ">',"</div>",[t._ssrNode('<h1 class="font-weight-bold textoGris text-left"> Tecnología usada </h1> '),o("v-divider",{attrs:{width:"200",color:"#00C78F"}})],2),t._ssrNode(" "),t._ssrNode('<div class="col-md-12">',"</div>",[o("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"1200","max-height":"800"}},[o("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":""}},t._l(t.backEnd,(function(e,i){return o("v-slide-item",{key:i},[o("v-card",{staticClass:"ma-4 text-center",attrs:{height:"100",width:"100",hover:""}},[o("v-avatar",{attrs:{size:"90"}},[o("v-icon",{attrs:{size:"60",color:e.colorIcono}},[t._v(" "+t._s(e.icono)+" ")])],1)],1)],1)})),1)],1)],1)],2)])],2)}),[],!1,(function(t){var e=r(194);e.__inject__&&e.__inject__(t)}),null,"5aec0313");e.default=component.exports;c()(component,{VAvatar:d.a,VBreadcrumbs:h.a,VCard:v.a,VDivider:f.a,VIcon:m.a,VProgressLinear:_.a,VSheet:x.a,VSlideGroup:w.b,VSlideItem:y.a})}};