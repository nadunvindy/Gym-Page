(() => {
  "use strict";
  var e = {
      320: (e, n, t) => {
        t.d(n, { A: () => c });
        var a = t(601),
          o = t.n(a),
          r = t(314),
          i = t.n(r)()(o());
        i.push([e.id, "", ""]);
        const c = i;
      },
      365: (e, n, t) => {
        t.d(n, { A: () => c });
        var a = t(601),
          o = t.n(a),
          r = t(314),
          i = t.n(r)()(o());
        i.push([
          e.id,
          ".title {\n  font-family: monospace;\n}\n\n* {\n  font-family: monospace;\n}\n\nbody {\n  margin: 0px;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  background-color: black;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.items {\n  display: flex;\n}\n\n.items > nav {\n  font-size: 20px;\n  margin-left: 50px;\n}\n\n.items:nth-child(2) {\n  margin-right: 50px;\n}\n\nheader > h2 {\n  font-size: 35px;\n  margin-left: 20px;\n}\n\n.locCard1,\n.locCard2 {\n  display: flex;\n  flex-direction: column;\n  border: 3px solid black;\n  margin: 10px;\n}\n\n.locations {\n  display: flex;\n  max-width: 600px;\n  max-height: 800px;\n}\n",
          "",
        ]);
        const c = i;
      },
      449: (e, n, t) => {
        t.d(n, { A: () => c });
        var a = t(601),
          o = t.n(a),
          r = t(314),
          i = t.n(r)()(o());
        i.push([
          e.id,
          ".title {\n    font-family: monospace;\n  }\n  \n  * {\n    font-family: monospace;\n  }\n  \n  body {\n    margin: 0px;\n  }\n  \n  header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100px;\n    background-color: black;\n    color: white;\n  }\n  \n  .training1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n  }\n  \n  .items {\n    display: flex;\n  }\n  \n  .items > nav {\n    font-size: 20px;\n    margin-left: 50px;\n  }\n  \n  .items:nth-child(2) {\n    margin-right: 50px;\n  }\n  \n  header > h2 {\n    font-size: 35px;\n    margin-left: 20px;\n  }\n  \n  .locCard1,\n  .locCard2 {\n    display: flex;\n    flex-direction: column;\n    border: 3px solid black;\n    margin: 10px;\n  }\n  \n  .locations {\n    display: flex;\n    max-width: 600px;\n    max-height: 800px;\n  }\n  ",
          "",
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  a = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  a &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  a && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, a, o, r) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (a)
                for (var c = 0; c < this.length; c++) {
                  var l = this[c][0];
                  null != l && (i[l] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (a && i[d[0]]) ||
                  (void 0 !== r &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = r)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, a = 0; a < n.length; a++)
            if (n[a].identifier === e) {
              t = a;
              break;
            }
          return t;
        }
        function a(e, a) {
          for (var r = {}, i = [], c = 0; c < e.length; c++) {
            var l = e[c],
              s = a.base ? l[0] + a.base : l[0],
              d = r[s] || 0,
              p = "".concat(s, " ").concat(d);
            r[s] = d + 1;
            var m = t(p),
              u = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== m) n[m].references++, n[m].updater(u);
            else {
              var h = o(u, a);
              (a.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var r = a((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < r.length; i++) {
              var c = t(r[i]);
              n[c].references--;
            }
            for (var l = a(e, o), s = 0; s < r.length; s++) {
              var d = t(r[s]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            r = l;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var a = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          a.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var a = "";
                t.supports && (a += "@supports (".concat(t.supports, ") {")),
                  t.media && (a += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (a += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (a += t.css),
                  o && (a += "}"),
                  t.media && (a += "}"),
                  t.supports && (a += "}");
                var r = t.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (a +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */",
                    )),
                  n.styleTagTransform(a, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(a) {
    var o = n[a];
    if (void 0 !== o) return o.exports;
    var r = (n[a] = { id: a, exports: {} });
    return e[a](r, r.exports, t), r.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var a in n)
        t.o(n, a) &&
          !t.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(72),
        n = t.n(e),
        a = t(825),
        o = t.n(a),
        r = t(659),
        i = t.n(r),
        c = t(56),
        l = t.n(c),
        s = t(540),
        d = t.n(s),
        p = t(113),
        m = t.n(p),
        u = t(365),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = l()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = d()),
        n()(u.A, h),
        u.A && u.A.locals && u.A.locals;
      var f = t(449),
        g = {};
      (g.styleTagTransform = m()),
        (g.setAttributes = l()),
        (g.insert = i().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = d()),
        n()(f.A, g),
        f.A && f.A.locals && f.A.locals;
      let x = document.createElement("div"),
        v = document.createElement("h1"),
        y = document.createElement("h3"),
        C = document.createElement("h4"),
        b = document.createElement("h2"),
        E = document.createElement("p"),
        A = document.createElement("h2"),
        M = document.createElement("p"),
        w = document.createElement("div"),
        S = document.createElement("div"),
        T = document.createElement("div");
      (x.className = "training1"),
        (w.className = "locCard1"),
        (S.className = "locCard2"),
        (T.className = "locations"),
        (v.textContent = "Welcome to MMA Gym"),
        (v.className = "title"),
        (y.textContent =
          "Where Warriors Are Forged: Unleash Your Inner Strength at MMA Gym!"),
        (C.textContent = "Our Training Styles"),
        (b.textContent = "Boxing"),
        (E.textContent =
          "Feel the power of the punch and the rhythm of the ring as you master the sweet science of boxing."),
        (A.textContent = "Kickboxing"),
        (M.textContent =
          "From the explosive kicks to the lightning-fast strikes, kickboxing ignites your passion for combat sports with every move."),
        x.appendChild(v),
        x.appendChild(y),
        x.appendChild(C),
        x.appendChild(T),
        T.appendChild(w),
        T.appendChild(S),
        w.append(b),
        w.append(E),
        S.append(A),
        S.append(M);
      const k = x;
      var N = t(320),
        I = {};
      (I.styleTagTransform = m()),
        (I.setAttributes = l()),
        (I.insert = i().bind(null, "head")),
        (I.domAPI = o()),
        (I.insertStyleElement = d()),
        n()(N.A, I),
        N.A && N.A.locals && N.A.locals;
      let L = document.createElement("div");
      L.className = "about";
      let W = document.createElement("h1"),
        F = document.createElement("h2"),
        O = document.createElement("h3"),
        j = document.createElement("h3"),
        q = document.createElement("h4"),
        P = document.createElement("h4");
      (W.textContent = "About Us"),
        (F.textContent =
          "Welcome to MMA Gym: Forging Champions, Building Community"),
        (O.textContent = "Our Story"),
        (q.textContent =
          "Established in 2003, MMA Gym has been a cornerstone of the martial arts scene in Perth. What began as a passion project by our founder, James, has blossomed into a thriving hub for those seeking to challenge themselves both physically and mentally."),
        (j.textContent = "Our Mission"),
        (P.textContent =
          "Our mission is simple: to empower individuals to become the best versions of themselves through the practice of martial arts. Whether you're a seasoned competitor or a complete beginner, we welcome you with open arms and a commitment to help you achieve your goals."),
        L.appendChild(W),
        L.appendChild(F),
        L.appendChild(O),
        L.appendChild(q),
        L.appendChild(j),
        L.appendChild(P);
      const G = L;
      let z = document.querySelector("#training"),
        H = document.createElement("div"),
        U = document.querySelector("#about"),
        B = document.querySelector("#home"),
        R = document.querySelector("#content"),
        J = document.createElement("h1"),
        Y = document.createElement("h3"),
        _ = document.createElement("h4"),
        D = document.createElement("h2"),
        K = document.createElement("p"),
        Q = document.createElement("h2"),
        V = document.createElement("p"),
        X = document.createElement("div"),
        Z = document.createElement("div"),
        $ = document.createElement("div");
      (X.className = "locCard1"),
        (Z.className = "locCard2"),
        ($.className = "locations"),
        (J.textContent = "Welcome to MMA Gym"),
        (J.className = "title"),
        (Y.textContent =
          "Where Warriors Are Forged: Unleash Your Inner Strength at MMA Gym!"),
        (_.textContent = "Locations"),
        (D.textContent = "Rising Sun MMA"),
        (K.textContent =
          "Boasting state-of-the-art training facilities, including a spacious mat area, top-of-the-line equipment, and dedicated weightlifting zones."),
        (Q.textContent = "Thunderbolt Fight Club"),
        (V.textContent =
          "Equipped with a rugged yet functional training environment, featuring heavy bags, sparring rings, and strength training apparatus."),
        H.appendChild(J),
        H.appendChild(Y),
        H.appendChild(_),
        H.appendChild($),
        $.appendChild(X),
        $.appendChild(Z),
        X.append(D),
        X.append(K),
        Z.append(Q),
        Z.append(V),
        R.appendChild(H),
        z.addEventListener("click", () => {
          (R.innerHTML = ""), R.appendChild(k);
        }),
        U.addEventListener("click", () => {
          (R.innerHTML = ""), R.appendChild(G);
        }),
        B.addEventListener("click", () => {
          (R.innerHTML = ""), R.appendChild(H);
        });
    })();
})();
