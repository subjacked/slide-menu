!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";var i,s,a,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(3),n(1),i=jQuery,s={position:"right",showBackLink:!0,keycodeOpen:null,keycodeClose:27,submenuLinkBefore:"",submenuLinkAfter:"",backLinkBefore:"",backLinkAfter:""},a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.menu=e.elem,this.menu.find("ul:first").wrap('<div class="slider">'),this.anchors=this.menu.find("a"),this.slider=this.menu.find(".slider:first"),this.level=0,this.isOpen=!1,this.isAnimating=!1,this.hasMenu=this.anchors.length>0,this.lastAction=null,this.setupEventHandlers(),this.setupMenu(),this.hasMenu&&this.setupSubmenus()}return o(t,[{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=void 0;null!==t?(t?(n=0,this.isOpen=!0):(n="left"===this.options.position?"-100%":"100%",this.isOpen=!1),this.triggerEvent(),e?this.triggerAnimation(this.menu,n):(this.pauseAnimations(this.triggerAnimation.bind(this,this.menu,n)),this.isAnimating=!1)):this.isOpen?this.close():this.open()}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.lastAction="open",this.toggle(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.lastAction="close",this.toggle(!1,t)}},{key:"back",value:function(){this.lastAction="back",this.navigate(null,-1)}},{key:"navigateTo",value:function(t){var e=this;if(!(t=this.menu.find(i(t)).first()).length)return!1;var n=t.parents("ul"),s=n.length-1;if(0===s)return!1;this.pauseAnimations(function(){e.level=s,n.show().first().addClass("active"),e.triggerAnimation(e.slider,100*-e.level)})}},{key:"setupEventHandlers",value:function(){var t=this;this.hasMenu&&this.anchors.click(function(e){var n=i(e.target).is("a")?i(e.target):i(e.target).parents("a:first");t.navigate(n)}),i(this.menu.add(this.slider)).on("transitionend msTransitionEnd",function(){t.isAnimating=!1,t.triggerEvent(!0)}),i(document).keydown(function(e){switch(e.which){case t.options.keycodeClose:t.close();break;case t.options.keycodeOpen:t.open();break;default:return}e.preventDefault()}),this.menu.on("sm.back-after",function(){var e="ul "+".active ".repeat(t.level+1);t.menu.find(e).removeClass("active").hide()})}},{key:"triggerEvent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e="sm."+this.lastAction;t&&(e+="-after"),this.menu.trigger(e)}},{key:"navigate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!this.isAnimating){var n=-100*(this.level+e);if(e>0){if(!t.next("ul").length)return;t.next("ul").addClass("active").show()}else if(0===this.level)return;this.lastAction=e>0?"forward":"back",this.level=this.level+e,this.triggerAnimation(this.slider,n)}}},{key:"triggerAnimation",value:function(t,e){this.triggerEvent(),String(e).includes("%")||(e+="%"),t.css("transform","translateX("+e+")"),this.isAnimating=!0}},{key:"setupMenu",value:function(){var t=this;this.pauseAnimations(function(){switch(t.options.position){case"left":t.menu.css({left:0,right:"auto",transform:"translateX(-100%)"});break;default:t.menu.css({left:"auto",right:0})}t.menu.show()})}},{key:"pauseAnimations",value:function(t){this.menu.addClass("no-transition"),t(),this.menu[0].offsetHeight,this.menu.removeClass("no-transition")}},{key:"setupSubmenus",value:function(){var t=this;this.anchors.each(function(e,n){if((n=i(n)).next("ul").length){n.click(function(t){t.preventDefault()});var s=n.text();if(n.html(t.options.submenuLinkBefore+s+t.options.submenuLinkAfter),t.options.showBackLink){var a=i('<a href class="slide-menu-control" data-action="back">'+s+"</a>");a.html(t.options.backLinkBefore+a.text()+t.options.backLinkAfter),n.next("ul").prepend(i("<li>").append(a))}}})}}]),t}(),i("body").on("click",".slide-menu-control",function(t){var e=void 0,n=i(this).data("target");if((e=n&&"this"!==n?i("#"+n):i(this).parents(".slide-menu:first")).length){var s=e.data("slideMenu"),a=i(this).data("action");s&&"function"==typeof s[a]&&s[a]()}}),i.fn.slideMenu=function(t){if(i(this).length){(t=i.extend({},s,t)).elem=i(this);var e=new a(t);return i(this).data("slideMenu",e),e}console.warn("Slide Menu: Unable to find menu DOM element. Maybe a typo?")}}]);