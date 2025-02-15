var D = Object.defineProperty;
var R = (e, t, i) => t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var h = (e, t, i) => R(e, typeof t != "symbol" ? t + "" : t, i);
class w {
  constructor(t) {
    h(this, "element");
    this.element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      t
    );
  }
  /*
   * 属性を一括指定
   */
  setAttributes(t, i) {
    for (const r in i)
      t.setAttribute(r, i[r].toString());
  }
}
class Q extends w {
  // ここのperはテールの距離を含めて0 - 1の値
  // onlyCircleがtrueの場合は、perが1のものが、そもそも来ない
  constructor(i, r, s, a, c, n, o, l, p) {
    super("rect");
    h(this, "edgeY", 0);
    this.setAttributes(this.element, {
      x: -s / 2,
      y: -a / 2,
      width: s,
      height: a,
      fill: i,
      opacity: r
    });
    const g = o * p, m = g / n;
    if (m < 1) {
      const u = 6.28 * m, d = Math.cos(u) * c, C = Math.sin(u) * c, f = u * 180 / Math.PI;
      this.setAttributes(this.element, {
        transform: `translate(${d}, ${C}) rotate(${f})`
      });
    } else {
      const u = l - a * 0.5, d = (g - n) / (o - n) || 0;
      this.setAttributes(this.element, {
        transform: `translate(${c}, ${d * u})`
      }), this.edgeY = d * u + a / 2;
    }
  }
}
class q extends w {
  constructor(t) {
    super("g"), this.setAttributes(this.element, {
      // id: id,
      class: t,
      transform: "translate(13, 13)"
    });
  }
}
class z extends w {
  constructor(i) {
    super("path");
    h(this, "type");
    this.type = i, this.element.setAttribute("class", "iris-mask"), this.element.setAttribute("fill", "red"), this.element.setAttribute("opacity", "0.4");
  }
  draw(i, r) {
    const s = i.outerRadius, a = i.innerRadius, c = Math.asin(r / s);
    if (i.mask) {
      const n = Math.sqrt(s * s - a * a);
      let o = "";
      if (this.type === "iris")
        if (r === 0)
          o = `
          L${a},0 
          `;
        else {
          const l = i.lineThickness * 0.5;
          o = `
          L${s},${-l}
          L${a},${-l}
          L${a},0
          `;
        }
      else
        o = `
        L${a},0
        `;
      if (r <= 0)
        this.element.setAttribute(
          "d",
          `
          M${s},0
          A${s},${s} 0 0 1 0,${s}
          A${s},${s} 0 0 1 ${-s},0
          A${s},${s} 0 0 1 0,${-s}
          A${s},${s} 0 0 1 ${s},0
          Z
        `
        );
      else if (n < r) {
        const l = Math.atan2(n, a);
        console.log("shape1"), this.element.setAttribute(
          "d",
          `
          M${a},0
          L${a},${Math.sin(l) * s}
          A${s},${s} 0 0 1 0,${s}
          A${s},${s} 0 0 1 ${-s},0
          A${s},${s} 0 0 1 0,${-s}
          A${s},${s} 0 0 1 ${s},0
          ${o}
          Z
        `
        );
      } else
        console.log("shape2"), this.element.setAttribute(
          "d",
          `
          M${a},0
          L${a},${Math.sin(c) * s}
          L${Math.cos(c) * s},${Math.sin(c) * s}
          A${s},${s} 0 0 1 0,${s}
          A${s},${s} 0 0 1 ${-s},0
          A${s},${s} 0 0 1 0,${-s}
          A${s},${s} 0 0 1 ${s},0
          ${o}
          Z
        `
        );
    } else
      this.element.setAttribute(
        "d",
        `
        M${s},0
        A${s},${s} 0 0 1 0,${s}
        A${s},${s} 0 0 1 ${-s},0
        A${s},${s} 0 0 1 0,${-s}
        A${s},${s} 0 0 1 ${s},0
        Z
      `
      );
  }
}
const v = (e, t) => {
  switch (e) {
    case "linear":
      return t;
    case "easeInSine":
      return N(t);
    case "easeOutSine":
      return B(t);
    case "easeInOutSine":
      return _(t);
    case "easeInQuad":
      return U(t);
    case "easeOutQuad":
      return V(t);
    case "easeInOutQuad":
      return Y(t);
    case "easeInCubic":
      return j(t);
    case "easeOutCubic":
      return H(t);
    case "easeInOutCubic":
      return Z(t);
    case "easeInQuart":
      return K(t);
    case "easeOutQuart":
      return X(t);
    case "easeInOutQuart":
      return J(t);
    case "easeInQuint":
      return W(t);
    case "easeOutQuint":
      return tt(t);
    case "easeInOutQuint":
      return et(t);
    case "easeInExpo":
      return st(t);
    case "easeOutExpo":
      return it(t);
    case "easeInOutExpo":
      return rt(t);
    case "easeInCirc":
      return nt(t);
    case "easeOutCirc":
      return ot(t);
    case "easeInOutCirc":
      return at(t);
    default:
      return t;
  }
};
function N(e) {
  return -1 * Math.cos(e * (Math.PI / 2)) + 1;
}
function B(e) {
  return Math.sin(e * (Math.PI / 2));
}
function _(e) {
  return -0.5 * (Math.cos(Math.PI * e) - 1);
}
function U(e) {
  return e * e;
}
function V(e) {
  return e * (2 - e);
}
function Y(e) {
  return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
}
function j(e) {
  return e * e * e;
}
function H(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Z(e) {
  return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
}
function K(e) {
  return e * e * e * e;
}
function X(e) {
  const t = e - 1;
  return 1 - t * t * t * t;
}
function J(e) {
  const t = e - 1;
  return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * t * t * t * t;
}
function W(e) {
  return e * e * e * e * e;
}
function tt(e) {
  const t = e - 1;
  return 1 + t * t * t * t * t;
}
function et(e) {
  const t = e - 1;
  return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * t * t * t * t * t;
}
function st(e) {
  return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
}
function it(e) {
  return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
}
function rt(e) {
  if (e === 0 || e === 1)
    return e;
  const t = e * 2, i = t - 1;
  return t < 1 ? 0.5 * Math.pow(2, 10 * i) : 0.5 * (-Math.pow(2, -10 * i) + 2);
}
function nt(e) {
  const t = e / 1;
  return -1 * (Math.sqrt(1 - t * e) - 1);
}
function ot(e) {
  const t = e - 1;
  return Math.sqrt(1 - t * t);
}
function at(e) {
  const t = e * 2, i = t - 2;
  return t < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - i * i) + 1);
}
const S = (e) => {
  for (; e.firstChild; )
    e.removeChild(e.firstChild);
}, b = (e, t) => {
  e.querySelector("." + t.getAttribute("class")) && e.removeChild(t);
}, A = class A {
  constructor(t, i, r) {
    // public props: LogoProperty;
    h(this, "svg");
    h(this, "rootGraphics");
    h(this, "mask");
    h(this, "props");
    h(this, "logoId", A._id++);
    h(this, "_size", 0);
    h(this, "enterFrameFunc");
    h(this, "isEnterFrame");
    h(this, "currentKey");
    h(this, "intervalTimer");
    this.rootGraphics = new q(i), this.svg = t, this.mask = new z(i), this.currentKey = 0, this.enterFrameFunc = null, this.intervalTimer = 0, this.isEnterFrame = !1, this.props = r;
  }
  set size(t) {
    this._size = Math.round(t), this.svg.setAttribute("width", `${this._size}`), this.svg.setAttribute("height", `${this._size}`);
  }
  get size() {
    return this._size;
  }
  update(t) {
    this.props = { ...this.props, ...t };
  }
  append() {
    this.svg.appendChild(this.rootGraphics.element);
  }
  remove() {
    b(this.svg, this.rootGraphics.element);
  }
  anim(t) {
    this.props = { ...this.props, ...t };
    const i = this.props.animDuration * 1e3;
    let r = 0;
    const s = 0;
    this.props.drawProgress = s;
    let a = 0;
    this.update(t), this.onEnterFrame = (c) => {
      r += c, r >= i && (r = i), a++;
      const n = v(this.props.animCurve, r / i);
      this.props.drawProgress = n, this.update(this.props), r >= i && (this.deleteEnterFrame, console.log("fps = " + a));
    };
  }
  getSVG() {
    const t = this.svg.cloneNode(!0);
    return t.removeAttribute("transform"), t.removeAttribute("style"), t.removeAttribute("class"), t.removeAttribute("id"), t.outerHTML;
  }
  getSVGURL() {
    const t = this.getSVG();
    return "data:text/plain;charset=utf-8," + encodeURIComponent(t);
  }
  /*
   * EnterFrame実行
   */
  set onEnterFrame(t) {
    this.enterFrameFunc && this.deleteEnterFrame, this.enterFrameFunc = t;
    const i = this;
    this.currentKey++;
    const r = this.currentKey;
    if (!this.isEnterFrame) {
      this.isEnterFrame = !0;
      let s = (/* @__PURE__ */ new Date()).getTime();
      (function a() {
        if (!i.enterFrameFunc) {
          i.isEnterFrame = !1;
          return;
        }
        if (r != i.currentKey)
          return;
        const c = (/* @__PURE__ */ new Date()).getTime();
        let n = c - s;
        n < 0 && (n = 1), i.enterFrameFunc(n), s = c, i.intervalTimer = requestAnimationFrame(() => a());
      })();
    }
  }
  /*
   * EnterFrame停止
   */
  get deleteEnterFrame() {
    return this.isEnterFrame = !1, this.enterFrameFunc = null, cancelAnimationFrame(this.intervalTimer), this.intervalTimer = -1, !0;
  }
};
h(A, "_id", 0);
let y = A;
const M = (e, t, i) => {
  const r = T(e), s = T(t);
  return ht(
    Math.round((s.r - r.r) * i + r.r),
    Math.round((s.g - r.g) * i + r.g),
    Math.round((s.b - r.b) * i + r.b)
  );
}, T = (e) => {
  const t = e.substring(1), i = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), s = parseInt(t.substring(4, 6), 16);
  return { r: i, g: r, b: s };
}, ht = (e, t, i) => `#${E(e)}${E(t)}${E(i)}`, E = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
};
class O extends y {
  constructor(i, r) {
    super(i, "iris", r);
    h(this, "lineContainer");
    // こちらにはマスクかけたくないので尻尾用はコンテナを分ける
    h(this, "lineTailContainer");
    this.lineContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    ), this.lineContainer.setAttribute("id", `iris-line-container-${this.logoId}`), this.lineContainer.setAttribute(
      "clip-path",
      `url(#clip-iris-${this.logoId})`
    ), this.rootGraphics.element.appendChild(this.lineContainer), this.lineTailContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    ), this.lineTailContainer.setAttribute(
      "id",
      `iris-line-tail-container-${this.logoId}`
    ), this.rootGraphics.element.appendChild(this.lineTailContainer);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "defs"), a = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "clipPath"
    );
    a.setAttribute("id", `clip-iris-${this.logoId}`), this.rootGraphics.element.append(s), s.append(a), a.appendChild(this.mask.element);
  }
  update(i) {
    super.update(i), S(this.lineContainer), S(this.lineTailContainer);
    const r = this.props.outerRadius * (this.props.tailEndDistance == 0 ? 1 : 65.75 / 70.43), s = this.props.outerRadius - this.props.innerRadius, a = this.props.lineThickness, c = s * 0.5 + this.props.innerRadius, n = c * 2 * Math.PI, o = this.props.onlyCircle ? n : n + r, l = n / o, p = this.props.division * this.props.drawProgress, g = r * (this.props.drawProgress - l) / (1 - l);
    let m = 0;
    for (let u = 0; u <= p; u++) {
      const d = u / this.props.division, C = v(this.props.opacityCurve, d), f = v(this.props.rgbCurve, d), F = M(
        this.props.rgbStart,
        this.props.rgbEnd,
        f
      ), G = (this.props.opacityEnd - this.props.opacityStart) * C + this.props.opacityStart, $ = new Q(
        F,
        G,
        s,
        a,
        c,
        n,
        o,
        r,
        d
      ), L = o * d / (n * 1);
      L < 1 ? L < 0.75 ? this.lineContainer.appendChild($.element) : this.lineTailContainer.appendChild($.element) : $.edgeY <= g && (this.lineTailContainer.appendChild($.element), m = $.edgeY);
    }
    this.mask.draw(this.props, m);
  }
}
class ct extends w {
  constructor(t, i, r, s, a, c) {
    super("path");
    const n = Math.cos(r) * i, o = Math.sin(r) * i, l = Math.cos(s) * i, p = Math.sin(s) * i, g = Math.cos(r) * t, m = Math.sin(r) * t, u = Math.cos(s) * t, d = Math.sin(s) * t;
    this.element.setAttribute("fill", a), this.element.setAttribute("opacity", c.toString()), this.element.setAttribute(
      "d",
      `
      M${n},${o}
      L${g},${m}
      A${t},${t} 0 0 1 ${u},${d}
      L${l},${p}
      A${i},${i} 1 0 0 ${n},${o}
      Z
    `
    );
  }
}
class lt extends w {
  constructor() {
    super("path"), this.element.setAttribute("class", "tail-circular");
  }
  draw(t) {
    t.drawProgress, this.element.setAttribute("fill", "red"), this.element.setAttribute(
      "d",
      `
      M10,0
      A10,10 0 1 1 -10,0 Z
    `
    ), this.element.setAttribute("transform", "translate(10, 0) rotate(90)");
  }
}
const I = class I extends w {
  constructor() {
    super("g");
    h(this, "stop0");
    h(this, "stop1");
    h(this, "rect");
    h(this, "id", I._id++);
    this.element.setAttribute("class", "tail-fill");
    const i = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    ), r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    ), s = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    ), a = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    );
    r.setAttribute("id", `grad-${this.id}`), r.setAttribute("x1", "0"), r.setAttribute("x2", "0"), r.setAttribute("y1", "0"), r.setAttribute("y2", "1"), s.setAttribute("offset", "0%"), a.setAttribute("offset", "100%"), r.appendChild(s), r.appendChild(a), i.appendChild(r);
    const c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    this.setAttributes(c, {
      fill: `url(#grad-${this.id})`,
      opacity: 1
      //0.7
    }), this.stop0 = s, this.stop1 = a, this.rect = c, this.element.appendChild(i), this.element.appendChild(c);
  }
  draw(i, r, s, a, c, n, o, l) {
    this.stop0.setAttribute("stop-color", s), this.stop0.setAttribute("stop-opacity", c.toString()), this.stop1.setAttribute("stop-color", a), this.stop1.setAttribute("stop-opacity", n.toString()), this.setAttributes(this.rect, {
      width: i - r,
      height: l * o,
      transform: `translate(${r}, 0)`
    });
  }
};
h(I, "_id", 0);
let x = I;
class P extends y {
  constructor(i, r) {
    super(i, "paint", r);
    h(this, "arcContainer");
    h(this, "tail");
    h(this, "tailCircular");
    const s = document.createElementNS("http://www.w3.org/2000/svg", "defs"), a = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "clipPath"
    );
    a.setAttribute("id", `clip-${this.logoId}`), this.rootGraphics.element.append(s), s.append(a), a.appendChild(this.mask.element), this.arcContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    ), this.arcContainer.setAttribute("clip-path", `url(#clip-${this.logoId})`), this.rootGraphics.element.append(this.arcContainer), this.tail = new x(), this.rootGraphics.element.appendChild(this.tail.element), this.tailCircular = new lt(), this.rootGraphics.element.appendChild(this.tailCircular.element);
  }
  update(i) {
    super.update(i), S(this.arcContainer);
    const r = this.props.outerRadius * (this.props.tailEndDistance == 0 ? 1 : 65.75 / 70.43), s = (this.props.innerRadius + this.props.outerRadius * 0.5) * 2 * Math.PI, a = s + r, c = s / a, n = this.props.paintDivision, o = 6.28 / n;
    let l = 0;
    this.props.onlyCircle ? l = n * this.props.drawProgress : l = Math.min(n, n * this.props.drawProgress / c);
    for (let p = 0; p < l; p++) {
      const g = p / n * c, m = v(this.props.rgbCurve, g), u = M(
        this.props.rgbStart,
        this.props.rgbEnd,
        m
      ), d = (this.props.opacityEnd - this.props.opacityStart) * v(this.props.opacityCurve, g) + this.props.opacityStart, C = p === Math.ceil(l) - 1 ? l - p : 1, f = new ct(
        this.props.outerRadius,
        this.props.innerRadius,
        o * p,
        o * p + o * C + this.props.paintOverlap,
        u,
        d
      );
      this.arcContainer.insertBefore(f.element, this.arcContainer.firstChild);
    }
    this.mask.draw(
      this.props,
      this.props.outerRadius * (this.props.drawProgress - c) / (1 - c)
    ), this.props.onlyCircle ? (b(this.rootGraphics.element, this.tail.element), b(this.rootGraphics.element, this.tailCircular.element)) : (this.props.drawProgress > c ? (this.tail.draw(
      this.props.outerRadius,
      this.props.innerRadius,
      M(
        this.props.rgbStart,
        this.props.rgbEnd,
        v(this.props.rgbCurve, c)
      ),
      this.props.rgbEnd,
      (this.props.opacityEnd - this.props.opacityStart) * c + this.props.opacityStart,
      this.props.opacityEnd,
      (this.props.drawProgress - c) / (1 - c),
      r
    ), this.rootGraphics.element.appendChild(this.tail.element)) : b(this.rootGraphics.element, this.tail.element), b(this.rootGraphics.element, this.tailCircular.element));
  }
}
class pt {
  constructor(t, i) {
    h(this, "el");
    h(this, "svgLogo");
    h(this, "_type");
    h(this, "props");
    this.props = {
      onlyCircle: !1,
      drawProgress: 0,
      innerRadius: 0,
      outerRadius: 0,
      lineThickness: 0.1,
      division: 1,
      mask: !1,
      tailEndDistance: 0,
      // TODO: leave it for now
      // lineCap: "rectangular",
      opacityStart: 0,
      opacityEnd: 0,
      opacityCurve: "linear",
      rgbStart: "",
      rgbEnd: "",
      rgbCurve: "linear",
      paintDivision: 4,
      paintOverlap: 0.02,
      animCurve: "linear",
      animDuration: 1,
      ...i
    }, this.el = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.el.setAttribute("width", "100"), this.el.setAttribute("height", "100"), this.el.setAttribute("viewBox", "0 0 26 26"), this._type = t, this.svgLogo = this.type === "iris" ? new O(this.el, this.props) : new P(this.el, this.props), this.svgLogo.append(), this.update(this.props);
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = t, this.svgLogo && this.svgLogo.remove(), this.svgLogo = this.type === "iris" ? new O(this.el, this.props) : new P(this.el, this.props), this.svgLogo.append(), this.update(this.props);
  }
  get size() {
    return this.svgLogo.size;
  }
  set size(t) {
    this.svgLogo.size = t;
  }
  update(t) {
    this.props = { ...this.props, ...t }, this.svgLogo.update(this.props);
  }
  anim(t, i) {
    this.props = { ...this.props, ...t }, this.props.animDuration = i, this.svgLogo.anim(this.props);
  }
}
class ut {
  constructor(t) {
    h(this, "onChange");
    h(this, "name");
    h(this, "value");
    this.name = t.dataset.name;
    const i = t.querySelector(
      "input"
    );
    i.addEventListener("change", () => {
      this.value = i.value, this.applyColorInput(i.value);
    }), i.addEventListener("input", () => {
      this.value = i.value, this.applyColorInput(i.value);
    }), this.value = i.value, this.applyColorInput(i.value), console.log("Value ", i.value);
  }
  applyColorInput(t) {
    this.onChange && this.onChange(this.name, t);
  }
}
class k {
  constructor(t) {
    h(this, "name");
    h(this, "text");
    h(this, "onChange");
    h(this, "value");
    this.name = t.dataset.name, this.text = t.querySelector(".js-SliderText");
    const i = t.querySelector(
      "input"
    );
    this.value = parseFloat(i.value), this.updateText(i.value), i.addEventListener("change", () => {
      this.updateText(i.value), this.onChange && this.onChange(this.name, parseFloat(i.value));
    }), i.addEventListener("input", () => {
      this.updateText(i.value), this.onChange && this.onChange(this.name, parseFloat(i.value));
    });
  }
  updateText(t) {
    this.text.textContent = t;
  }
}
class dt {
  constructor() {
    h(this, "logo");
    h(this, "sideUI");
    h(this, "props");
    h(this, "SVGDownloadButton");
    this.sideUI = document.querySelector(".js-side"), this.props = {
      onlyCircle: !1,
      drawProgress: 1,
      innerRadius: 10,
      outerRadius: 13,
      lineThickness: 0.08,
      division: 60,
      mask: !1,
      tailEndDistance: 1,
      // TODO: leave it for now
      // lineCap: "rectangular",
      opacityStart: 1,
      opacityEnd: 1,
      opacityCurve: "linear",
      rgbStart: "#999999",
      rgbEnd: "#444444",
      rgbCurve: "linear",
      paintDivision: 4,
      paintOverlap: 0.02,
      animCurve: "linear",
      animDuration: 1
    }, this.logo = new pt("paint", this.props), document.getElementById(
      "logo-container"
    ).appendChild(this.logo.el), this.setUIEvent(), this.changeType(
      document.getElementById("shapeType0").checked ? "0" : "1"
    ), document.getElementById(
      "button-play"
    ).addEventListener("click", () => {
      this.logo.anim(this.props, this.props.animDuration);
    }), this.logo.update(this.props), this.SVGDownloadButton = document.getElementById(
      "button-download-svg"
    ), this.SVGDownloadButton.setAttribute("download", "logo.svg"), this.SVGDownloadButton.addEventListener("mouseover", () => {
      const r = this.logo.svgLogo.getSVGURL();
      this.SVGDownloadButton.setAttribute("href", r);
    });
  }
  setUIEvent() {
    const t = document.querySelectorAll(".js-Slider");
    for (let n = 0; n < t.length; n++)
      if (t[n].dataset.noevent != "true") {
        const o = new k(t[n]);
        o.onChange = (l, p) => {
          console.log(l, p), this.props[l] = p, this.logo.update(this.props);
        }, this.props[o.name] = o.value;
      }
    const i = document.querySelectorAll(".js-Checkbox");
    for (let n = 0; n < i.length; n++) {
      const o = i[n];
      o.addEventListener("change", () => {
        console.log(o.dataset.name, o.checked);
        const l = o.dataset.name;
        this.props[l] = o.checked, this.logo.update(this.props);
      });
    }
    const r = document.querySelectorAll(".js-ColorPicker");
    for (let n = 0; n < r.length; n++) {
      const o = new ut(r[n]);
      o.onChange = (l, p) => {
        console.log(l, p), this.props[l] = p, this.logo.update(this.props);
      }, this.props[o.name] = o.value;
    }
    const s = document.querySelectorAll(".js-ComboBox");
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      o.addEventListener("change", (l) => {
        const p = o.dataset.name;
        console.log(p, l.target.value), this.props[p] = l.target.value, this.logo.update(this.props);
      });
    }
    const a = document.querySelectorAll(
      ".js-radio-type input"
    );
    for (let n = 0; n < a.length; n++) {
      const o = a[n];
      o.addEventListener("change", (l) => {
        o.name === "shapeType" ? this.changeType(o.value) : (this.props[o.name] = l.target.value, console.log(o.name + " = " + this.props[o.name])), this.logo.update(this.props);
      });
    }
    const c = new k(
      document.getElementById("size")
    );
    c.onChange = (n, o) => {
      this.logo.el.style.left = `calc(50% - ${Math.round(o / 2)}px)`, this.logo.el.style.top = `calc(50% - ${Math.round(o / 2)}px)`, this.logo.size = o;
    }, this.logo.el.classList.add("l-main__svg"), this.logo.el.style.left = `calc(50% - ${Math.round(c.value / 2)}px)`, this.logo.el.style.top = `calc(50% - ${Math.round(c.value / 2)}px)`, this.logo.size = c.value;
  }
  changeType(t) {
    t === "0" ? (this.sideUI.classList.remove("--iris"), this.sideUI.classList.add("--paint"), this.logo.type = "paint") : t === "1" && (this.sideUI.classList.add("--iris"), this.sideUI.classList.remove("--paint"), this.logo.type = "iris");
  }
}
window.onload = () => {
  new dt();
};
export {
  pt as AkariLogo
};
