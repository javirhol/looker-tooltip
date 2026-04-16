!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
var _=R("./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R("./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});

// =============================
// ICONOS SVG
// =============================
const DEFAULT_ICON_COLOR = "#1a73e8";

const svgIcons = [
  `
  <svg id="svgicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <style type="text/css">.iconstyle { fill:${DEFAULT_ICON_COLOR}; }</style>
    <path class="iconstyle" d="M256 8C119.03 8 8 119.03 8 256c0 58.74 20.42 112.7 54.56 155.18L47.9 443.9c-10.6 23.67 14.1 48.37 37.77 37.77l32.72-14.66C160.3 491.58 210.12 504 256 504c136.97 0 248-111.03 248-248S392.97 8 256 8z"/>
    <circle cx="256" cy="119" r="34" fill="#FFFFFF"/>
    <path fill="#FFFFFF" d="M208 196c-6.63 0-12 5.37-12 12v12c0 6.63 5.37 12 12 12h8c9.94 0 18 8.06 18 18v111c0 9.94-8.06 18-18 18h-8c-6.63 0-12 5.37-12 12v12c0 6.63 5.37 12 12 12h96c6.63 0 12-5.37 12-12v-12c0-6.63-5.37-12-12-12h-8c-9.94 0-18-8.06-18-18V208c0-6.63-5.37-12-12-12z"/>
  </svg>
  `,
  `
  <svg id="svgicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <style type="text/css">.iconstyle { fill:${DEFAULT_ICON_COLOR}; }</style>
    <path class="iconstyle" d="M256 8C119.03 8 8 119.03 8 256c0 58.74 20.42 112.7 54.56 155.18L47.9 443.9c-10.6 23.67 14.1 48.37 37.77 37.77l32.72-14.66C160.3 491.58 210.12 504 256 504c136.97 0 248-111.03 248-248S392.97 8 256 8z"/>
    <path fill="#FFFFFF" d="M256 140c-49.7 0-90 40.3-90 90 0 31.5 16.5 59.2 41.3 75.2 6.3 4 10.7 10.6 10.7 17.9v7.9c0 6.6 5.4 12 12 12h52c6.6 0 12-5.4 12-12v-7.9c0-7.3 4.4-13.9 10.7-17.9C329.5 289.2 346 261.5 346 230c0-49.7-40.3-90-90-90z"/>
    <rect x="216" y="350" width="80" height="20" rx="6" fill="#FFFFFF"/>
    <rect x="224" y="380" width="64" height="16" rx="6" fill="#FFFFFF"/>
  </svg>
  `
];

// =============================
// TOOLTIP
// =============================
const Tooltip = function () {
  this.content = document.createElement("div");
  this.content.className = "tooltip-content";

  this.shadow = document.createElement("div");
  this.shadow.className = "tooltip-shadow";
  this.shadow.style.visibility = "hidden";
  this.shadow.style.position = "absolute";
  this.shadow.style.zIndex = "9999";

  this.shadow.appendChild(this.content);
  document.body.appendChild(this.shadow);
};

Tooltip.DELAY = 150;
Tooltip.OFFSET = 15;

Tooltip.prototype = {
  Show: function (text, x, y, tcolor, bcolor, tfont, tsize, bwidth, bstyle, bradius, bgcolor) {
    this.content.innerText = text;
    this.content.style.color = tcolor;
    this.content.style.border = `${bwidth}px ${bstyle} ${bcolor}`;
    this.content.style.borderRadius = `${bradius}px`;
    this.content.style.fontFamily = tfont;
    this.content.style.fontSize = `${tsize}px`;
    this.content.style.backgroundColor = bgcolor;
    this.content.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.15)";

    this.shadow.style.left = `${x}px`;
    this.shadow.style.top = `${y}px`;
    this.shadow.style.visibility = "visible";
  },

  Hide: function () {
    this.shadow.style.visibility = "hidden";
  },

  Schedule: function (targetElement, event, tColor, bColor, tFont, tSize, bWidth, bStyle, bRadius, bgColor) {
    const e = event || window.event;
    let x = e.clientX;
    let y = e.clientY;

    x += window.pageXOffset || document.documentElement.scrollLeft;
    y += window.pageYOffset || document.documentElement.scrollTop;

    const _this = this;
    const timerID = setTimeout(function () {
      const text = targetElement.getAttribute("tooltip");
      if (text) {
        _this.Show(
          text,
          x + Tooltip.OFFSET,
          y + Tooltip.OFFSET,
          tColor,
          bColor,
          tFont,
          tSize,
          bWidth,
          bStyle,
          bRadius,
          bgColor
        );
      }
    }, Tooltip.DELAY);

    function MouseOut() {
      _this.Hide();
      clearTimeout(timerID);
      targetElement.removeEventListener("mouseout", MouseOut, false);
    }

    targetElement.addEventListener("mouseout", MouseOut, false);
  }
};

// =============================
// HELPERS
// =============================
function getStyleVal(styleObj, fallback) {
  if (!styleObj) return fallback;

  if (styleObj.value !== undefined) {
    if (typeof styleObj.value === "object" && styleObj.value !== null) {
      if (styleObj.value.color !== undefined) return styleObj.value.color;
      if (styleObj.value.value !== undefined) return styleObj.value.value;
    }
    return styleObj.value;
  }

  if (styleObj.defaultValue !== undefined) {
    if (typeof styleObj.defaultValue === "object" && styleObj.defaultValue !== null) {
      if (styleObj.defaultValue.color !== undefined) return styleObj.defaultValue.color;
      if (styleObj.defaultValue.value !== undefined) return styleObj.defaultValue.value;
    }
    return styleObj.defaultValue;
  }

  return fallback;
}

function normalizeIconValue(rawValue) {
  return String(rawValue).trim();
}

function ensureRoot() {
  document.documentElement.style.width = "100%";
  document.documentElement.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.body.style.position = "relative";
  document.body.style.background = "transparent";
}

function ensureIconContainer() {
  let divIcon = document.getElementById("iconDiv");

  if (!divIcon) {
    divIcon = document.createElement("div");
    divIcon.id = "iconDiv";
    document.body.appendChild(divIcon);
  }

  divIcon.style.position = "absolute";
  divIcon.style.top = "0";
  divIcon.style.left = "0";
  divIcon.style.width = "100%";
  divIcon.style.height = "100%";
  divIcon.style.display = "flex";
  divIcon.style.justifyContent = "flex-start";
  divIcon.style.alignItems = "flex-start";
  divIcon.style.padding = "8px";
  divIcon.style.boxSizing = "border-box";
  divIcon.style.pointerEvents = "none";
  divIcon.style.visibility = "visible";

  return divIcon;
}

function paintIcon(svg, color) {
  const coloredParts = svg.querySelectorAll(".iconstyle");
  coloredParts.forEach((node) => {
    node.style.fill = color;
  });
}

function attachTooltip(svg, text, st, tooltipInstance) {
  svg.setAttribute("tooltip", text);
  svg.style.pointerEvents = "auto";
  svg.style.cursor = "pointer";

  svg.onmouseover = function (event) {
    tooltipInstance.Schedule(
      this,
      event,
      st.textColor,
      st.borderColor,
      st.textFont,
      st.textSize,
      st.borderWidth,
      st.borderStyle,
      st.borderRadius,
      st.backgroundColor
    );
  };

  svg.onmouseout = function () {
    tooltipInstance.Hide();
  };
}

// =============================
// RENDER
// =============================
let miTooltip;
let renderScheduled = false;
let lastData = null;

function renderNow(data) {
  if (!miTooltip) {
    miTooltip = new Tooltip();
  }

  ensureRoot();
  const divIcon = ensureIconContainer();

  const st = {
    textColor: getStyleVal(data.style?.textcolor, "#ffffff"),
    borderColor: getStyleVal(data.style?.bordercolor, "#111111"),
    textFont: getStyleVal(data.style?.textfont, "Arial"),
    textSize: Number(getStyleVal(data.style?.textsize, 12)),
    borderWidth: Number(getStyleVal(data.style?.borderwidth, 1)),
    borderStyle: getStyleVal(data.style?.borderstyle, "solid"),
    borderRadius: Number(getStyleVal(data.style?.borderradius, 8)),
    iconSize: Number(getStyleVal(data.style?.iconsize, 24)),
    iconColor: getStyleVal(data.style?.iconcolor, DEFAULT_ICON_COLOR),
    backgroundColor: getStyleVal(data.style?.backgroundcolor, "#111111"),
    tooltipIcon: normalizeIconValue(getStyleVal(data.style?.tooltipicon, "0")),
    tooltipText: getStyleVal(data.style?.tooltiptext, "Texto de ayuda...")
  };

  const iconIndex = st.tooltipIcon === "1" ? 1 : 0;
  divIcon.innerHTML = svgIcons[iconIndex];

  const svg = document.getElementById("svgicon");
  if (!svg) return;

  svg.style.width = `${st.iconSize}px`;
  svg.style.height = `${st.iconSize}px`;
  svg.style.display = "block";
  svg.style.visibility = "visible";
  svg.style.flex = "0 0 auto";

  paintIcon(svg, st.iconColor);
  attachTooltip(svg, st.tooltipText, st, miTooltip);
}

function scheduleRender(data) {
  lastData = data;
  if (renderScheduled) return;
  renderScheduled = true;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      renderScheduled = false;
      if (lastData) {
        renderNow(lastData);
      }
    });
  });
}

function drawViz(data) {
  scheduleRender(data);
}

window.addEventListener("resize", () => {
  if (lastData) {
    scheduleRender(lastData);
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && lastData) {
    scheduleRender(lastData);
  }
});

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });