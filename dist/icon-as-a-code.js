var R = Object.defineProperty;
var z = (e, t, i) => t in e ? R(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var c = (e, t, i) => z(e, typeof t != "symbol" ? t + "" : t, i);
class C {
  constructor(t) {
    c(this, "element");
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
class N extends C {
  // ここのperはテールの距離を含めて0 - 1の値
  // onlyCircleがtrueの場合は、perが1のものが、そもそも来ない
  constructor(i, r, s, a, h, n, o, l, p) {
    super("rect");
    c(this, "edgeY", 0);
    this.setAttributes(this.element, {
      x: -s / 2,
      y: -a / 2,
      width: s,
      height: a,
      fill: i,
      opacity: r
    });
    const u = o * p, m = u / n;
    if (m < 1) {
      const d = 6.28 * m, g = Math.cos(d) * h, w = Math.sin(d) * h, $ = d * 180 / Math.PI;
      this.setAttributes(this.element, {
        transform: `translate(${g}, ${w}) rotate(${$})`
      });
    } else {
      const d = l - a * 0.5, g = (u - n) / (o - n) || 0;
      this.setAttributes(this.element, {
        transform: `translate(${h}, ${g * d})`
      }), this.edgeY = g * d + a / 2;
    }
  }
}
class Q extends C {
  constructor(t) {
    super("g"), this.setAttributes(this.element, {
      // id: id,
      class: t,
      transform: "translate(13, 13)"
    });
  }
}
class _ extends C {
  constructor(i) {
    super("path");
    c(this, "type");
    this.type = i, this.element.setAttribute("class", "iris-mask"), this.element.setAttribute("fill", "red"), this.element.setAttribute("opacity", "0.4");
  }
  draw(i, r) {
    const s = i.outerRadius, a = i.innerRadius, h = Math.asin(r / s);
    if (i.mask) {
      const n = Math.sqrt(s * s - a * a);
      let o = "";
      if (this.type === "iris" ? r === 0 ? o = `
          L${a},0
          ` : o = `
          L${s},${-i.lineThickness * 2}
          L${a},${-i.lineThickness * 2}
          L${a},0
          ` : o = `
        L${a},0
        `, r <= 0)
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
          L${a},${Math.sin(h) * s}
          L${Math.cos(h) * s},${Math.sin(h) * s}
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
      return q(t);
    case "easeOutSine":
      return B(t);
    case "easeInOutSine":
      return V(t);
    case "easeInQuad":
      return U(t);
    case "easeOutQuad":
      return Y(t);
    case "easeInOutQuad":
      return j(t);
    case "easeInCubic":
      return H(t);
    case "easeOutCubic":
      return Z(t);
    case "easeInOutCubic":
      return K(t);
    case "easeInQuart":
      return X(t);
    case "easeOutQuart":
      return J(t);
    case "easeInOutQuart":
      return W(t);
    case "easeInQuint":
      return tt(t);
    case "easeOutQuint":
      return et(t);
    case "easeInOutQuint":
      return st(t);
    case "easeInExpo":
      return it(t);
    case "easeOutExpo":
      return rt(t);
    case "easeInOutExpo":
      return nt(t);
    case "easeInCirc":
      return ot(t);
    case "easeOutCirc":
      return at(t);
    case "easeInOutCirc":
      return ht(t);
    default:
      return t;
  }
};
function q(e) {
  return -1 * Math.cos(e * (Math.PI / 2)) + 1;
}
function B(e) {
  return Math.sin(e * (Math.PI / 2));
}
function V(e) {
  return -0.5 * (Math.cos(Math.PI * e) - 1);
}
function U(e) {
  return e * e;
}
function Y(e) {
  return e * (2 - e);
}
function j(e) {
  return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
}
function H(e) {
  return e * e * e;
}
function Z(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function K(e) {
  return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
}
function X(e) {
  return e * e * e * e;
}
function J(e) {
  const t = e - 1;
  return 1 - t * t * t * t;
}
function W(e) {
  const t = e - 1;
  return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * t * t * t * t;
}
function tt(e) {
  return e * e * e * e * e;
}
function et(e) {
  const t = e - 1;
  return 1 + t * t * t * t * t;
}
function st(e) {
  const t = e - 1;
  return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * t * t * t * t * t;
}
function it(e) {
  return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
}
function rt(e) {
  return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
}
function nt(e) {
  if (e === 0 || e === 1)
    return e;
  const t = e * 2, i = t - 1;
  return t < 1 ? 0.5 * Math.pow(2, 10 * i) : 0.5 * (-Math.pow(2, -10 * i) + 2);
}
function ot(e) {
  const t = e / 1;
  return -1 * (Math.sqrt(1 - t * e) - 1);
}
function at(e) {
  const t = e - 1;
  return Math.sqrt(1 - t * t);
}
function ht(e) {
  const t = e * 2, i = t - 2;
  return t < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - i * i) + 1);
}
const M = (e) => {
  for (; e.firstChild; )
    e.removeChild(e.firstChild);
}, b = (e, t) => {
  e.querySelector("." + t.getAttribute("class")) && e.removeChild(t);
}, A = class A {
  constructor(t, i, r) {
    // public props: LogoProperty;
    c(this, "svg");
    c(this, "rootGraphics");
    c(this, "mask");
    c(this, "props");
    c(this, "logoId", A._id++);
    c(this, "_size", 0);
    c(this, "enterFrameFunc");
    c(this, "isEnterFrame");
    c(this, "currentKey");
    c(this, "intervalTimer");
    this.rootGraphics = new Q(i), this.svg = t, this.mask = new _(i), this.currentKey = 0, this.enterFrameFunc = null, this.intervalTimer = 0, this.isEnterFrame = !1, this.props = r;
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
    this.update(t), this.onEnterFrame = (h) => {
      r += h, r >= i && (r = i), a++;
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
        const h = (/* @__PURE__ */ new Date()).getTime();
        let n = h - s;
        n < 0 && (n = 1), i.enterFrameFunc(n), s = h, i.intervalTimer = requestAnimationFrame(() => a());
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
c(A, "_id", 0);
let y = A;
const x = (e, t, i) => {
  const r = T(e), s = T(t);
  return ct(
    Math.round((s.r - r.r) * i + r.r),
    Math.round((s.g - r.g) * i + r.g),
    Math.round((s.b - r.b) * i + r.b)
  );
}, T = (e) => {
  const t = e.substring(1), i = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), s = parseInt(t.substring(4, 6), 16);
  return { r: i, g: r, b: s };
}, ct = (e, t, i) => `#${S(e)}${S(t)}${S(i)}`, S = (e) => {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
};
class P extends y {
  constructor(i, r) {
    super(i, "iris", r);
    c(this, "lineContainer");
    // こちらにはマスクかけたくないので尻尾用はコンテナを分ける
    c(this, "lineTailContainer");
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
    super.update(i), M(this.lineContainer), M(this.lineTailContainer);
    const r = this.props.outerRadius * (this.props.tailEndDistance == 0 ? 1 : 65.75 / 70.43), s = this.props.outerRadius - this.props.innerRadius, a = this.props.lineThickness, h = s * 0.5 + this.props.innerRadius, n = h * 2 * Math.PI, o = this.props.onlyCircle ? n : n + r, l = n / o, p = Math.round(
      this.props.division * this.props.drawStart
    ), u = this.props.division * this.props.drawProgress, m = r * (this.props.drawProgress - l) / (1 - l);
    let d = 0;
    for (let g = p; g <= u; g++) {
      const w = g / this.props.division, $ = v(this.props.opacityCurve, w), I = v(this.props.rgbCurve, w), G = x(
        this.props.rgbStart,
        this.props.rgbEnd,
        I
      ), D = (this.props.opacityEnd - this.props.opacityStart) * $ + this.props.opacityStart, f = new N(
        G,
        D,
        s,
        a,
        h,
        n,
        o,
        r,
        w
      ), O = o * w / (n * 1);
      O < 1 ? O < 0.75 ? this.lineContainer.appendChild(f.element) : this.lineTailContainer.appendChild(f.element) : f.edgeY <= m && (this.lineTailContainer.appendChild(f.element), d = f.edgeY);
    }
    this.mask.draw(this.props, d);
  }
}
class lt extends C {
  constructor(t, i, r, s, a, h) {
    super("path");
    const n = Math.cos(r) * i, o = Math.sin(r) * i, l = Math.cos(s) * i, p = Math.sin(s) * i, u = Math.cos(r) * t, m = Math.sin(r) * t, d = Math.cos(s) * t, g = Math.sin(s) * t;
    this.element.setAttribute("fill", a), this.element.setAttribute("opacity", h.toString()), this.element.setAttribute(
      "d",
      `
      M${n},${o}
      L${u},${m}
      A${t},${t} 0 0 1 ${d},${g}
      L${l},${p}
      A${i},${i} 1 0 0 ${n},${o}
      Z
    `
    );
  }
}
class pt extends C {
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
const E = class E extends C {
  constructor() {
    super("g");
    c(this, "stop0");
    c(this, "stop1");
    c(this, "rect");
    c(this, "id", E._id++);
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
    const h = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    this.setAttributes(h, {
      fill: `url(#grad-${this.id})`,
      opacity: 1
      //0.7
    }), this.stop0 = s, this.stop1 = a, this.rect = h, this.element.appendChild(i), this.element.appendChild(h);
  }
  draw(i, r, s, a, h, n, o, l, p) {
    this.stop0.setAttribute("stop-color", s), this.stop0.setAttribute("stop-opacity", h.toString()), this.stop1.setAttribute("stop-color", a), this.stop1.setAttribute("stop-opacity", n.toString()), this.setAttributes(this.rect, {
      width: i - r,
      height: p * (l - o),
      transform: `translate(${r}, ${p * o})`
    });
  }
};
c(E, "_id", 0);
let L = E;
class k extends y {
  constructor(i, r) {
    super(i, "paint", r);
    c(this, "arcContainer");
    c(this, "tail");
    c(this, "tailCircular");
    const s = document.createElementNS("http://www.w3.org/2000/svg", "defs"), a = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "clipPath"
    );
    a.setAttribute("id", `clip-${this.logoId}`), this.rootGraphics.element.append(s), s.append(a), a.appendChild(this.mask.element), this.arcContainer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    ), this.arcContainer.setAttribute("clip-path", `url(#clip-${this.logoId})`), this.rootGraphics.element.append(this.arcContainer), this.tail = new L(), this.rootGraphics.element.appendChild(this.tail.element), this.tailCircular = new pt(), this.rootGraphics.element.appendChild(this.tailCircular.element);
  }
  update(i) {
    super.update(i), M(this.arcContainer);
    const r = this.props.outerRadius * (this.props.tailEndDistance == 0 ? 1 : 65.75 / 70.43), s = (this.props.innerRadius + this.props.outerRadius * 0.5) * 2 * Math.PI, a = s + r, h = s / a, n = this.props.paintDivision, o = 6.28 / n;
    let l = 0, p = 0;
    this.props.onlyCircle ? (p = Math.round(n * this.props.drawStart), l = n * this.props.drawProgress) : (p = Math.min(n, n * this.props.drawStart / h), l = Math.min(n, n * this.props.drawProgress / h));
    for (let u = p; u < l; u++) {
      const m = u / n * h, d = v(this.props.rgbCurve, m), g = x(
        this.props.rgbStart,
        this.props.rgbEnd,
        d
      ), w = (this.props.opacityEnd - this.props.opacityStart) * v(this.props.opacityCurve, m) + this.props.opacityStart, $ = u === Math.ceil(l) - 1 ? l - u : 1, I = new lt(
        this.props.outerRadius,
        this.props.innerRadius,
        o * u,
        o * u + o * $ + this.props.paintOverlap,
        g,
        w
      );
      this.arcContainer.insertBefore(I.element, this.arcContainer.firstChild);
    }
    if (this.mask.draw(
      this.props,
      this.props.outerRadius * (this.props.drawProgress - h) / (1 - h)
    ), this.props.onlyCircle)
      b(this.rootGraphics.element, this.tail.element), b(this.rootGraphics.element, this.tailCircular.element);
    else {
      if (this.props.drawProgress > h) {
        const u = (this.props.opacityEnd - this.props.opacityStart) * h + this.props.opacityStart;
        this.tail.draw(
          this.props.outerRadius,
          this.props.innerRadius,
          x(
            this.props.rgbStart,
            this.props.rgbEnd,
            v(this.props.rgbCurve, h)
          ),
          this.props.rgbEnd,
          u,
          this.props.opacityEnd,
          (Math.max(h, this.props.drawStart) - h) / (1 - h),
          (this.props.drawProgress - h) / (1 - h),
          r
        ), this.rootGraphics.element.appendChild(this.tail.element);
      } else
        b(this.rootGraphics.element, this.tail.element);
      b(this.rootGraphics.element, this.tailCircular.element);
    }
  }
}
class ut {
  constructor(t, i) {
    c(this, "el");
    c(this, "svgLogo");
    c(this, "_type");
    c(this, "props");
    this.props = {
      onlyCircle: !1,
      drawStart: 0,
      drawProgress: 1,
      innerRadius: 7.8313809,
      outerRadius: 13,
      lineThickness: 0.1,
      division: 90,
      mask: !1,
      tailEndDistance: 1,
      // TODO: leave it for now
      // lineCap: "rectangular",
      opacityStart: 1,
      opacityEnd: 1,
      opacityCurve: "linear",
      rgbStart: "#999999",
      rgbEnd: "#333333",
      rgbCurve: "linear",
      paintDivision: 60,
      paintOverlap: 0.1,
      animCurve: "linear",
      animDuration: 1,
      size: 140,
      ...i
    }, this.el = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.el.setAttribute("width", "140"), this.el.setAttribute("height", "140"), this.el.setAttribute("viewBox", "0 0 26 26"), this._type = t, this.svgLogo = this.type === "iris" ? new P(this.el, this.props) : new k(this.el, this.props), this.svgLogo.append(), this.update(this.props);
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = t, this.svgLogo && this.svgLogo.remove(), this.svgLogo = this.type === "iris" ? new P(this.el, this.props) : new k(this.el, this.props), this.svgLogo.append(), this.update(this.props);
  }
  get size() {
    return this.svgLogo.size;
  }
  set size(t) {
    this.svgLogo.size = t;
  }
  update(t) {
    t.size && (this.size = t.size), this.props = { ...this.props, ...t }, this.svgLogo.update(this.props);
  }
  anim(t, i) {
    this.update(t), this.props.animDuration = i, this.svgLogo.anim(this.props);
  }
}
class dt {
  constructor(t) {
    c(this, "onChange");
    c(this, "name");
    c(this, "value");
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
class F {
  constructor(t) {
    c(this, "name");
    c(this, "text");
    c(this, "onChange");
    c(this, "value");
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
class gt {
  constructor() {
    c(this, "logo");
    c(this, "sideUI");
    c(this, "props");
    c(this, "SVGDownloadButton");
    this.sideUI = document.querySelector(".js-side"), this.props = {
      onlyCircle: !1,
      drawStart: 0,
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
      animDuration: 1,
      size: 140.85
    }, this.logo = new ut("paint", this.props), document.getElementById(
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
        const o = new F(t[n]);
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
      const o = new dt(r[n]);
      o.onChange = (l, p) => {
        console.log(l, p), document.getElementsByClassName(`${l}__text`)[0].textContent = p, this.props[l] = p, this.logo.update(this.props);
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
    const h = new F(
      document.getElementById("size")
    );
    h.onChange = (n, o) => {
      this.props.size = o, this.logo.el.style.left = `calc(50% - ${Math.round(o / 2)}px)`, this.logo.el.style.top = `calc(50% - ${Math.round(o / 2)}px)`, this.logo.update({ size: o });
    }, this.props.size = h.value, this.logo.el.classList.add("l-main__svg"), this.logo.el.style.left = `calc(50% - ${Math.round(h.value / 2)}px)`, this.logo.el.style.top = `calc(50% - ${Math.round(h.value / 2)}px)`, this.logo.update({ size: h.value });
  }
  changeType(t) {
    t === "0" ? (this.sideUI.classList.remove("--iris"), this.sideUI.classList.add("--paint"), this.logo.type = "paint") : t === "1" && (this.sideUI.classList.add("--iris"), this.sideUI.classList.remove("--paint"), this.logo.type = "iris");
  }
}
"LOGO_DEV_ENV" in window && window.LOGO_DEV_ENV !== "test" && (window.onload = () => {
  new gt();
});
export {
  ut as AkariLogo
};
