"use strict";(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[8489],{870:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ee});t(6540);var s=t(6644),a=t(6992),i=t(4848);function l(){const{metadata:e,frontMatter:n,assets:t}=(0,a.u)();return(0,i.jsx)(s.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var o=t(8215),r=t(2216),c=t(3230),d=t(3555);function u(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(d.A,{...n,subLabel:(0,i.jsx)(c.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(d.A,{...t,subLabel:(0,i.jsx)(c.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function m(){const{metadata:e}=(0,a.u)();return(0,i.jsx)(u,{previous:e.previous,next:e.next})}var h=t(7639),v=t(4783),b=t(9802),x=t(8630),g=t(2780),p=t(3403);const f={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function j(e){const n=f[e.versionMetadata.banner];return(0,i.jsx)(n,{...e})}function A(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,i.jsx)(c.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(v.A,{to:t,onClick:s,children:(0,i.jsx)(c.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,h.A)(),{pluginId:a}=(0,b.vT)({failfast:!0}),{savePreferredVersionName:l}=(0,g.g1)(a),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,b.HW)(a),d=r??(u=c).docs.find((e=>e.id===u.mainDocId));var u;return(0,i.jsxs)("div",{className:(0,o.A)(n,x.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(j,{siteTitle:s,versionMetadata:t})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(A,{versionLabel:c.label,to:d.path,onClick:()=>l(c.name)})})]})}function C(e){let{className:n}=e;const t=(0,p.r)();return t.banner?(0,i.jsx)(L,{className:n,versionMetadata:t}):null}function N(e){let{className:n}=e;const t=(0,p.r)();return t.badge?(0,i.jsx)("span",{className:(0,o.A)(n,x.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(c.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var _=t(1113),k=t(5659);function T(){const{metadata:e}=(0,a.u)(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:l}=e,r=l.length>0,c=!!(n||t||s);return r||c?(0,i.jsxs)("footer",{className:(0,o.A)(x.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,i.jsx)("div",{className:(0,o.A)("row margin-top--sm",x.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(_.A,{tags:l})})}),c&&(0,i.jsx)(k.A,{className:(0,o.A)("margin-top--sm",x.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var H=t(4549),M=t(1507);const y={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function I(e){let{collapsed:n,...t}=e;return(0,i.jsx)("button",{type:"button",...t,className:(0,o.A)("clean-btn",y.tocCollapsibleButton,!n&&y.tocCollapsibleButtonExpanded,t.className),children:(0,i.jsx)(c.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const E={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function w(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:l,toggleCollapsed:r}=(0,H.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,o.A)(E.tocCollapsible,!l&&E.tocCollapsibleExpanded,t),children:[(0,i.jsx)(I,{collapsed:l,onClick:r}),(0,i.jsx)(H.N,{lazy:!0,className:E.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(M.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const B={tocMobile:"tocMobile_ITEo"};function O(){const{toc:e,frontMatter:n}=(0,a.u)();return(0,i.jsx)(w,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,o.A)(x.G.docs.docTocMobile,B.tocMobile)})}var V=t(8793);function G(){const{toc:e,frontMatter:n}=(0,a.u)();return(0,i.jsx)(V.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:x.G.docs.docTocDesktop})}var R=t(5225),S=t(9492);function F(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=(0,a.u)();return n.hide_title||void 0!==t?null:e.title}();return(0,i.jsxs)("div",{className:(0,o.A)(x.G.docs.docMarkdown,"markdown"),children:[t&&(0,i.jsx)("header",{children:(0,i.jsx)(R.A,{as:"h1",children:t})}),(0,i.jsx)(S.A,{children:n})]})}var P=t(5215),U=t(260),D=t(8180);function z(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const W={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function q(){const e=(0,D.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(v.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(z,{className:W.breadcrumbHomeIcon})})})}const $={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Q(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,i.jsx)(v.A,{className:a,href:t,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:n})}):(0,i.jsx)("span",{className:a,children:n})}function X(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,o.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Y(){const e=(0,P.OF)(),n=(0,U.Dt)();return e?(0,i.jsx)("nav",{className:(0,o.A)(x.G.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,i.jsx)(q,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,i.jsx)(X,{active:s,index:t,addMicrodata:!!a,children:(0,i.jsx)(Q,{href:a,isLast:s,children:n.label})},t)}))]})}):null}var Z=t(6057);const J={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function K(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=(0,a.u)(),t=(0,r.l)(),s=e.hide_table_of_contents,l=!s&&n.length>0;return{hidden:s,mobile:l?(0,i.jsx)(O,{}):void 0,desktop:!l||"desktop"!==t&&"ssr"!==t?void 0:(0,i.jsx)(G,{})}}(),{metadata:{unlisted:s}}=(0,a.u)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.A)("col",!t.hidden&&J.docItemCol),children:[s&&(0,i.jsx)(Z.A,{}),(0,i.jsx)(C,{}),(0,i.jsxs)("div",{className:J.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(Y,{}),(0,i.jsx)(N,{}),t.mobile,(0,i.jsx)(F,{children:n}),(0,i.jsx)(T,{})]}),(0,i.jsx)(m,{})]})]}),t.desktop&&(0,i.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ee(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,i.jsx)(a._,{content:e.content,children:(0,i.jsxs)(s.e3,{className:n,children:[(0,i.jsx)(l,{}),(0,i.jsx)(K,{children:(0,i.jsx)(t,{})})]})})}},3555:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(8215),a=t(4783),i=t(4848);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},8793:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(8215),a=t(1507);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:o,linkActiveClassName:r})})}},1507:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(6540),a=t(6957);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(4783),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[o,r,x,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:o,...h})}},1883:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(8215),a=t(4783);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(4848);function o(e){let{permalink:n,label:t,count:o,description:r}=e;return(0,l.jsxs)(a.A,{href:n,title:r,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[t,o&&(0,l.jsx)("span",{children:o})]})}},1113:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(8215),a=t(3230),i=t(1883);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=t(4848);function r(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},6057:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var s=t(8215),a=t(3230),i=t(1141),l=t(4848);function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(8630),u=t(4182);function m(e){let{className:n}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);
//# sourceMappingURL=8489.a9fac062.js.map