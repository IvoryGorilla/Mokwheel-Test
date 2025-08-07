/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t)) for (r in u) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || v(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}), (i = !1), (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || ("function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase();
    });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i"),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) || ((s = e.getAttribute("id")) ? (s = ce.escapeSelector(s)) : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (r.appendChild(e).id = ce.expando), !T.getElementsByName || !T.getElementsByName(ce.expando).length;
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (n || le.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (((a = !le.sortStable), (o = !le.sortStable && ae.call(e, 0)), de.call(e, l), a)) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(O, P)), (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u])) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2]), (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if ((f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p))
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (fe(e, "input") && !!e.checked) || (fe(e, "option") && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(ve, " ") }), (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s])) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f) return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if ((g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r = (!o && (n || t != w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s && Q(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), (H.test(o[0].type) && U(t.parentNode)) || t))) {
            if ((o.splice(i, 1), !(e = r.length && Q(o)))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t), n;
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || (!r[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (((t = t instanceof ce ? t[0] : t), ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)))
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(ce)) : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? ("string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
            ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                        (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith)))
                            : (a !== N && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook ? (t.error = ce.Deferred.getErrorHook()) : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this), (i[t] = 1 < arguments.length ? ae.call(arguments) : e), --n || o.resolveWith(r, i);
            };
          };
        if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) || ((ce.isReady = !0) !== e && 0 < --ce.readyWait) || O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || ((t = {}), $(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = "data-" + t.replace(U, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
        try {
          n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (this.length && ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
            t = a.length;
            while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e) return (t = (t || "fx") + "queue"), (r = _.get(e, t)), n && (!r || Array.isArray(n) ? (r = _.access(e, t, ce.makeArray(n))) : r.push(n)), r || [];
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
    });
  var ee = function (e, t) {
    return "none" === (e = t || e).style.display || ("" === e.style.display && K(e) && "none" === ce.css(e, "display"));
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || ("px" !== l && +u)) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n && ((l[c] = _.get(r, "display") || null), l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))), (u = ce.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead), (ke.th = ke.td), le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Le(e, s, n, r, t[s], o);
      return e;
    }
    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (((n = ae.call(arguments)), _.set(this, r, n), this[r](), (t = _.get(this, r)), _.set(this, r, !1), n !== t))
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                { type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") },
                o
              )),
              (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (((d = g = (s = De.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || ce.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click")) || fe(t, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ne : qe),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"), (n.isSimulated = !0), t(e), n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
          },
        });
    }),
    ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
      ce.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            r = e.handleObj;
          return (n && (n === this || ce.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
        },
      };
    }),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (r = e.handleObj), ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0]) || e;
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in (_.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (f && ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) (u = e), c !== p && ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l)
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ce.isXMLDoc(e)))
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
        else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
      ce.fn[e] = function (e) {
        for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), ce(r[o])[a](t), s.apply(n, t.get());
        return this.pushStack(n);
      };
    });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width), (i = u.minWidth), (o = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)), "padding" !== n ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i)) : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) || (!le.reliableTrDimensions() && fe(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if ((u || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o || u || (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - 0.5)),
            s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration ? (this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, { specialEasing: {}, easing: ce.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (((i = t[(r = F(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = ce.cssHooks[r]) && ("expand" in a)))
            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts))) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (yt.tweeners[n] = yt.tweeners[n] || []), yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) && (l ? (c = l) : (re([e], !0), (l = e.style.display || l), (c = ce.css(e, "display")), re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v ? "hidden" in v && (g = v.hidden) : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d)) ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r = e && "object" == typeof e ? ce.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? (r.duration = ce.fx.speeds[r.duration]) : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; )
              i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      { slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return n || ((i = xt[o]), (xt[o] = r), (r = null != a(e, t, n) ? o : null), (xt[o] = i)), r;
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) || ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ce.propFix[this.toLowerCase()] = this;
    }),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                for (o = 0; o < e.length; o++) (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s) for (o = ce(this), i = 0; i < e.length; i++) (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) && l.apply && $(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//")),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url), (r.href = r.href), (v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if ((v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h)) return T;
        for (i in ((g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data && (v.processData || "string" == typeof v.data) && ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache && ((f = f.replace(It, "$1")), (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
        if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Vt(_t, v, t, T)))) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                          !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return v(t) && ((r = r || n), (n = t), (t = void 0)), ce.ajax(ce.extend({ url: e, type: i, dataType: r, data: t, success: n }, ce.isPlainObject(e) && e));
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(Zt, "$1" + r)) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)), o && v(i) && i(o[0]), (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument = (((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t || (le.createHTMLDocument ? (((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), t.head.appendChild(r)) : (t = C)),
          (o = !n && []),
          (i = w.exec(e)) ? [t.createElement(i[1])] : ((i = Ae([e], t, o)), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments), a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
            while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)), (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
      var o = "pageYOffset" === i;
      ce.fn[t] = function (e) {
        return M(
          this,
          function (e, t, n) {
            var r;
            if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t) return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
        ce.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return M(
            this,
            function (e, t, n) {
              var r;
              return y(e)
                ? 0 === o.indexOf("outer")
                  ? e["inner" + a]
                  : e.document.documentElement["client" + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                : void 0 === n
                ? ce.css(e, t, i)
                : ce.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      ce.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});

//

!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad = t());
})(this, function () {
  "use strict";
  function n() {
    return (
      (n =
        Object.assign ||
        function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
          }
          return n;
        }),
      n.apply(this, arguments)
    );
  }
  var t = "undefined" != typeof window,
    e = (t && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    a = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_bg_set: "bg-set",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      class_entered: "entered",
      class_exited: "exited",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
      restore_on_error: !1,
    },
    c = function (t) {
      return n({}, r, t);
    },
    l = function (n, t) {
      var e,
        i = "LazyLoad::Initialized",
        o = new n(t);
      try {
        e = new CustomEvent(i, { detail: { instance: o } });
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, { instance: o });
      }
      window.dispatchEvent(e);
    },
    u = "src",
    s = "srcset",
    d = "sizes",
    f = "poster",
    _ = "llOriginalAttrs",
    g = "data",
    v = "loading",
    b = "loaded",
    m = "applied",
    p = "error",
    h = "native",
    E = "data-",
    I = "ll-status",
    y = function (n, t) {
      return n.getAttribute(E + t);
    },
    k = function (n) {
      return y(n, I);
    },
    w = function (n, t) {
      return (function (n, t, e) {
        var i = "data-ll-status";
        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
      })(n, 0, t);
    },
    A = function (n) {
      return w(n, null);
    },
    L = function (n) {
      return null === k(n);
    },
    O = function (n) {
      return k(n) === h;
    },
    x = [v, b, m, p],
    C = function (n, t, e, i) {
      n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
    },
    N = function (n, t) {
      o ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
    },
    M = function (n, t) {
      o
        ? n.classList.remove(t)
        : (n.className = n.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    z = function (n) {
      return n.llTempImage;
    },
    T = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    R = function (n, t) {
      n && (n.loadingCount += t);
    },
    G = function (n, t) {
      n && (n.toLoadCount = t);
    },
    j = function (n) {
      for (var t, e = [], i = 0; (t = n.children[i]); i += 1) "SOURCE" === t.tagName && e.push(t);
      return e;
    },
    D = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && j(e).forEach(t);
    },
    H = function (n, t) {
      j(n).forEach(t);
    },
    V = [u],
    F = [u, f],
    B = [u, s, d],
    J = [g],
    P = function (n) {
      return !!n[_];
    },
    S = function (n) {
      return n[_];
    },
    U = function (n) {
      return delete n[_];
    },
    $ = function (n, t) {
      if (!P(n)) {
        var e = {};
        t.forEach(function (t) {
          e[t] = n.getAttribute(t);
        }),
          (n[_] = e);
      }
    },
    q = function (n, t) {
      if (P(n)) {
        var e = S(n);
        t.forEach(function (t) {
          !(function (n, t, e) {
            e ? n.setAttribute(t, e) : n.removeAttribute(t);
          })(n, t, e[t]);
        });
      }
    },
    K = function (n, t, e) {
      N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
    },
    Q = function (n, t, e) {
      N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
    },
    W = function (n, t, e) {
      e && n.setAttribute(t, e);
    },
    X = function (n, t) {
      W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
    },
    Y = {
      IMG: function (n, t) {
        D(n, function (n) {
          $(n, B), X(n, t);
        }),
          $(n, B),
          X(n, t);
      },
      IFRAME: function (n, t) {
        $(n, V), W(n, u, y(n, t.data_src));
      },
      VIDEO: function (n, t) {
        H(n, function (n) {
          $(n, V), W(n, u, y(n, t.data_src));
        }),
          $(n, F),
          W(n, f, y(n, t.data_poster)),
          W(n, u, y(n, t.data_src)),
          n.load();
      },
      OBJECT: function (n, t) {
        $(n, J), W(n, g, y(n, t.data_src));
      },
    },
    Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
    nn = function (n, t) {
      !t ||
        (function (n) {
          return n.loadingCount > 0;
        })(t) ||
        (function (n) {
          return n.toLoadCount > 0;
        })(t) ||
        C(n.callback_finish, t);
    },
    tn = function (n, t, e) {
      n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
    },
    en = function (n, t, e) {
      n.removeEventListener(t, e);
    },
    on = function (n) {
      return !!n.llEvLisnrs;
    },
    an = function (n) {
      if (on(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          en(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    rn = function (n, t, e) {
      !(function (n) {
        delete n.llTempImage;
      })(n),
        R(e, -1),
        (function (n) {
          n && (n.toLoadCount -= 1);
        })(e),
        M(n, t.class_loading),
        t.unobserve_completed && T(n, e);
    },
    cn = function (n, t, e) {
      var i = z(n) || n;
      on(i) ||
        (function (n, t, e) {
          on(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          tn(n, i, t), tn(n, "error", e);
        })(
          i,
          function (o) {
            !(function (n, t, e, i) {
              var o = O(t);
              rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
            })(0, n, t, e),
              an(i);
          },
          function (o) {
            !(function (n, t, e, i) {
              var o = O(t);
              rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), o || nn(e, i);
            })(0, n, t, e),
              an(i);
          }
        );
    },
    ln = function (n, t, e) {
      !(function (n) {
        return Z.indexOf(n.tagName) > -1;
      })(n)
        ? (function (n, t, e) {
            !(function (n) {
              n.llTempImage = document.createElement("IMG");
            })(n),
              cn(n, t, e),
              (function (n) {
                P(n) || (n[_] = { backgroundImage: n.style.backgroundImage });
              })(n),
              (function (n, t, e) {
                var i = y(n, t.data_bg),
                  o = y(n, t.data_bg_hidpi),
                  r = a && o ? o : i;
                r && ((n.style.backgroundImage = 'url("'.concat(r, '")')), z(n).setAttribute(u, r), Q(n, t, e));
              })(n, t, e),
              (function (n, t, e) {
                var i = y(n, t.data_bg_multi),
                  o = y(n, t.data_bg_multi_hidpi),
                  r = a && o ? o : i;
                r && ((n.style.backgroundImage = r), K(n, t, e));
              })(n, t, e),
              (function (n, t, e) {
                var i = y(n, t.data_bg_set);
                if (i) {
                  var o = i.split("|"),
                    a = o.map(function (n) {
                      return "image-set(".concat(n, ")");
                    });
                  (n.style.backgroundImage = a.join()),
                    "" === n.style.backgroundImage &&
                      ((a = o.map(function (n) {
                        return "-webkit-image-set(".concat(n, ")");
                      })),
                      (n.style.backgroundImage = a.join())),
                    K(n, t, e);
                }
              })(n, t, e);
          })(n, t, e)
        : (function (n, t, e) {
            cn(n, t, e),
              (function (n, t, e) {
                var i = Y[n.tagName];
                i && (i(n, t), Q(n, t, e));
              })(n, t, e);
          })(n, t, e);
    },
    un = function (n) {
      n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
    },
    sn = function (n) {
      D(n, function (n) {
        q(n, B);
      }),
        q(n, B);
    },
    dn = {
      IMG: sn,
      IFRAME: function (n) {
        q(n, V);
      },
      VIDEO: function (n) {
        H(n, function (n) {
          q(n, V);
        }),
          q(n, F),
          n.load();
      },
      OBJECT: function (n) {
        q(n, J);
      },
    },
    fn = function (n, t) {
      (function (n) {
        var t = dn[n.tagName];
        t
          ? t(n)
          : (function (n) {
              if (P(n)) {
                var t = S(n);
                n.style.backgroundImage = t.backgroundImage;
              }
            })(n);
      })(n),
        (function (n, t) {
          L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
        })(n, t),
        A(n),
        U(n);
    },
    _n = ["IMG", "IFRAME", "VIDEO"],
    gn = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    vn = function (n, t, e) {
      n.forEach(function (n) {
        return (function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        })(n)
          ? (function (n, t, e, i) {
              var o = (function (n) {
                return x.indexOf(k(n)) >= 0;
              })(n);
              w(n, "entered"),
                N(n, e.class_entered),
                M(n, e.class_exited),
                (function (n, t, e) {
                  t.unobserve_entered && T(n, e);
                })(n, e, i),
                C(e.callback_enter, n, t, i),
                o || ln(n, e, i);
            })(n.target, n, t, e)
          : (function (n, t, e, i) {
              L(n) ||
                (N(n, e.class_exited),
                (function (n, t, e, i) {
                  e.cancel_on_exit &&
                    (function (n) {
                      return k(n) === v;
                    })(n) &&
                    "IMG" === n.tagName &&
                    (an(n),
                    (function (n) {
                      D(n, function (n) {
                        un(n);
                      }),
                        un(n);
                    })(n),
                    sn(n),
                    M(n, e.class_loading),
                    R(i, -1),
                    A(n),
                    C(e.callback_cancel, n, t, i));
                })(n, t, e, i),
                C(e.callback_exit, n, t, i));
            })(n.target, n, t, e);
      });
    },
    bn = function (n) {
      return Array.prototype.slice.call(n);
    },
    mn = function (n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    pn = function (n) {
      return (function (n) {
        return k(n) === p;
      })(n);
    },
    hn = function (n, t) {
      return (function (n) {
        return bn(n).filter(L);
      })(n || mn(t));
    },
    En = function (n, e) {
      var o = c(n);
      (this._settings = o),
        (this.loadingCount = 0),
        (function (n, t) {
          i &&
            !gn(n) &&
            (t._observer = new IntersectionObserver(
              function (e) {
                vn(e, n, t);
              },
              (function (n) {
                return { root: n.container === document ? null : n.container, rootMargin: n.thresholds || n.threshold + "px" };
              })(n)
            ));
        })(o, this),
        (function (n, e) {
          t &&
            ((e._onlineHandler = function () {
              !(function (n, t) {
                var e;
                ((e = mn(n)), bn(e).filter(pn)).forEach(function (t) {
                  M(t, n.class_error), A(t);
                }),
                  t.update();
              })(n, e);
            }),
            window.addEventListener("online", e._onlineHandler));
        })(o, this),
        this.update(e);
    };
  return (
    (En.prototype = {
      update: function (n) {
        var t,
          o,
          a = this._settings,
          r = hn(n, a);
        G(this, r.length),
          !e && i
            ? gn(a)
              ? (function (n, t, e) {
                  n.forEach(function (n) {
                    -1 !== _n.indexOf(n.tagName) &&
                      (function (n, t, e) {
                        n.setAttribute("loading", "lazy"),
                          cn(n, t, e),
                          (function (n, t) {
                            var e = Y[n.tagName];
                            e && e(n, t);
                          })(n, t),
                          w(n, h);
                      })(n, t, e);
                  }),
                    G(e, 0);
                })(r, a, this)
              : ((o = r),
                (function (n) {
                  n.disconnect();
                })((t = this._observer)),
                (function (n, t) {
                  t.forEach(function (t) {
                    n.observe(t);
                  });
                })(t, o))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          t && window.removeEventListener("online", this._onlineHandler),
          mn(this._settings).forEach(function (n) {
            U(n);
          }),
          delete this._observer,
          delete this._settings,
          delete this._onlineHandler,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (n) {
        var t = this,
          e = this._settings;
        hn(n, e).forEach(function (n) {
          T(n, t), ln(n, e, t);
        });
      },
      restoreAll: function () {
        var n = this._settings;
        mn(n).forEach(function (t) {
          fn(t, n);
        });
      },
    }),
    (En.load = function (n, t) {
      var e = c(t);
      ln(n, e);
    }),
    (En.resetStatus = function (n) {
      A(n);
    }),
    t &&
      (function (n, t) {
        if (t)
          if (t.length) for (var e, i = 0; (e = t[i]); i += 1) l(n, e);
          else l(n, t);
      })(En, window.lazyLoadOptions),
    En
  );
});

//

/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function r(t) {
    return "string" == typeof t;
  }
  function s(t) {
    return "function" == typeof t;
  }
  function t(t) {
    return "number" == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return "object" == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return "undefined" != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && Ee;
  }
  function Q(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e)))) || t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Ot(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r) ? t[e]() : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (t = parseFloat(t)), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = ct.length,
      i = ct.slice(0);
    for (dt = {}, t = ct.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    ct.length && !L && ma(), t.render(e, r, i || (L && e < 0 && (t._initted || t._startAt))), ct.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e) r in t || ("duration" === r && i) || "ease" === r || (t[r] = e[r]);
            };
          })($(t.keyframes))
        : qa;
    if (w(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t), e;
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a), a ? (a._prev = n) : t[i] === e && (t[i] = n), (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return t._startAt && (L ? t._startAt.revert(ht) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, i));
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function Ha(t) {
    return (t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0)));
  }
  function Ia(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Ha(t), r._dirty || Aa(r, t)),
      t
    );
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) &&
        ((r = Ga(t.rawTime(), e)), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration()) for (r = t; r._dp; ) 0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay)),
      (r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0))),
      xa(e, r, "_first", "_last", e._sort ? "_start" : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }
  function Ma(t, e, r, i, n) {
    return (
      Gt(t, e, n),
      t._initted ? (!r && t._pt && !L && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && f !== Rt.frame ? (ct.push(t), (t._lazy = [n, i]), 1) : void 0) : 1
    );
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !("immediateRender" in n); ) (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)), e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new Zt(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function _a(t, e) {
    return t && v(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) && !t.nodeType && t !== h;
  }
  function cb(r) {
    return (
      (r = Ot(r)[0] || R("Invalid scope") || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r);
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m) ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0) : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = (r || p).length,
          d = y[c];
        if (!d) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c; );
            f--;
          }
          for (d = y[c] = [], i = T ? Math.min(f, c) * w - 0.5 : m % f, n = f === U ? 0 : T ? (c * x) / f - 0.5 : (m / f) | 0, l = U, u = h = 0; u < c; u++)
            (a = (u % f) - i), (s = n - ((u / f) | 0)), (d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s)), h < o && (h = o), o < l && (l = o);
          "random" === m && db(d),
            (d.max = h - l),
            (d.min = l),
            (d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? ("y" === b ? c / f : f) : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1)),
            (d.b = c < 0 ? g - c : g),
            (d.u = Ya(p.amount || p.each) || 0),
            (_ = _ && c < 0 ? Yt(_) : _);
        }
        return (c = (d[t] - d.min) / d.max || 0), ja(d.b + (_ ? _(c) : c) * d.v) + d.u;
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = $(h);
    return (
      !r && v(h) && ((l = r = h.radius || U), h.values ? ((h = Ot(h.values)), (f = !t(h[0])) && (l *= l)) : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--; )
                  (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (o = !l || s <= l ? h[o] : e), f || o === e || t(e) ? o : o + Ya(e);
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && At(t, "onInterrupt"), t;
  }
  function wb(t) {
    if (x() && t) {
      var e = (t = (!t.name && t.default) || t).name,
        r = s(t),
        i =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = { init: T, render: he, add: Qt, kill: ce, modifier: fe, rawVars: 0 },
        a = { targetTest: 0, get: 0, getSetter: ne, aliases: {}, register: 0 };
      if ((Ft(), t !== i)) {
        if (pt[e]) return;
        qa(i, qa(ua(t, n), a)),
          yt(i.prototype, yt(n, ua(t, a))),
          (pt[(i.prop = e)] = i),
          t.targetTest && (gt.push(i), (ft[e] = 1)),
          (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
      }
      S(e, i), t.register && t.register(Ee, i, _e);
    } else t && Ct.push(t);
  }
  function zb(t, e, r) {
    return ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + 0.5) | 0;
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : Et.black;
    if (!p) {
      if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Et[e])) p = Et[e];
      else if ("#" === e.charAt(0)) {
        if ((e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length))
          return [(p = parseInt(e.substr(1, 6), 16)) >> 16, (p >> 8) & St, p & St, parseInt(e.substr(7), 16) / 255];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
      } else if ("hsl" === e.substr(0, 3))
        if (((p = d = e.match(tt)), r)) {
          if (~e.indexOf("=")) return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n = 2 * (h = p[2] / 100) - (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = zb(o + 1 / 3, n, a)),
            (p[1] = zb(o, n, a)),
            (p[2] = zb(o - 1 / 3, n, a));
      else p = e.match(tt) || Et.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !d &&
        ((n = p[0] / St),
        (a = p[1] / St),
        (s = p[2] / St),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f
          ? (o = u = 0)
          : ((c = l - f), (u = 0.5 < h ? c / (2 - l - f) : c / (l + f)), (o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4), (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Dt).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Dt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      })),
      r && ((a = Bb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Dt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Dt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(" ");
    if (((Dt.lastIndex = 0), Dt.test(r))) return (e = zt.test(r)), (t[1] = Cb(t[1], e)), (t[0] = Cb(t[0], e, Bb(t[1]))), !0;
  }
  function Ob(t) {
    var e = (t + "").split("("),
      r = Bt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(It, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(oa)
        )
      : Bt._CE && Lt.test(t)
      ? Bt._CE("", t)
      : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Xt
        ? Qb(i, e)
        : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = e))),
        (i = i._next);
  }
  function Sb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Bt[t] = ot[t] = a), (Bt[(n = t.toLowerCase())] = r), a)) Bt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Bt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Tb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / N) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Jm
          : "in" === r
          ? function (t) {
              return 1 - Jm(1 - t);
            }
          : Tb(Jm);
    return (
      (n = N / n),
      (s.config = function (t, e) {
        return Ub(r, t, e);
      }),
      s
    );
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Rm
        : "in" === e
        ? function (t) {
            return 1 - Rm(1 - t);
          }
        : Tb(Rm);
    return (
      (t.config = function (t) {
        return Vb(e, t);
      }),
      t
    );
  }
  var B,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    c,
    d,
    p,
    _,
    m,
    g,
    b,
    k,
    M,
    O,
    A,
    C,
    E,
    D,
    z,
    F,
    Y,
    j,
    q = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    V = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    W = N / 4,
    G = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    Z = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
    $ = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    ct = [],
    dt = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = "",
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = "%" === e.substr(-1)),
          (n = e.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= n && (e = e.replace(/=/, "")),
              ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
            ? (e in o || (o[e] = h), o[e])
            : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))),
              s && i && (a = (a / 100) * ($(i) ? i[0] : i).totalDuration()),
              1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
        ? h
        : +e;
    },
    kt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && Ft())
        ? $(t)
          ? (function _flatten(t, e, i) {
              return (
                void 0 === i && (i = []),
                t.forEach(function (t) {
                  return (r(t) && !e) || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t);
                }) || i
              );
            })(t, i)
          : _a(t)
          ? Mt.call(t, 0)
          : t
          ? [t]
          : []
        : Mt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    At = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o) return (i = s[e + "Params"]), (n = s.callbackScope || t), r && ct.length && ma(), h && (l = h), (a = i ? o.apply(n, i) : o.call(n)), (l = u), a;
    },
    Ct = [],
    St = 255,
    Et = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0],
    },
    Dt = (function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Et) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    zt = /hsl[a]?\(/,
    Rt =
      ((M = Date.now),
      (O = 500),
      (A = 33),
      (C = M()),
      (E = C),
      (z = D = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          yl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = Ee),
              (h.gsapVersions || (h.gsapVersions = [])).push(Ee.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              (m = h.requestAnimationFrame),
              Ct.forEach(wb)),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (z - 1e3 * g.time + 1) | 0);
              }),
            (d = 1),
            yl(2));
        },
        sleep: function sleep() {
          (m ? h.cancelAnimationFrame : clearTimeout)(p), (d = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (O = t || 1 / 0), (A = Math.min(e || 33, O));
        },
        fps: function fps(t) {
          (D = 1e3 / (t || 240)), (z = 1e3 * g.time + D);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), F[e ? "unshift" : "push"](a), Ft(), a;
        },
        remove: function remove(t, e) {
          ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--;
        },
        _listeners: (F = []),
      })),
    Ft = function _wake() {
      return !d && Rt.wake();
    },
    Bt = {},
    Lt = /^[\d.\-M][\d.\-,\s]/,
    It = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Bt[t] || Ob(t))) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = M() - E,
      s = !0 === t;
    if (
      (O < a && (C += a - A),
      (0 < (e = (i = (E += a) - C) - z) || s) && ((n = ++g.frame), (b = i - 1e3 * g.time), (g.time = i /= 1e3), (z += e + (D <= e ? 4 : D - e)), (r = 1)),
      s || (p = _(yl)),
      r)
    )
      for (k = 0; k < F.length; k++) F[k](i, b, n, t);
  }
  function gn(t) {
    return t < j
      ? Y * t * t
      : t < 0.7272727272727273
      ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? Y * (t -= 2.25 / 2.75) * t + 0.9375
      : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn),
    Sb("Elastic", Ub("in"), Ub("out"), Ub()),
    (Y = 7.5625),
    (j = 1 / 2.75),
    Sb(
      "Bounce",
      function (t) {
        return 1 - gn(1 - t);
      },
      gn
    ),
    Sb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Sb("Circ", function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Sb("Sine", function (t) {
      return 1 === t ? 1 : 1 - J(t * W);
    }),
    Sb("Back", Vb("in"), Vb("out"), Vb()),
    (Bt.SteppedEase =
      Bt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * kt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (V.ease = Bt["quad.out"]),
    ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return (vt += t + "," + t + "Params,");
    });
  var qt,
    Vt = function GSCache(t, e) {
      (this.id = G++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : ga), (this.set = e ? e.getSetter : ne);
    },
    Ut =
      (((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
      }),
      (qt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function totalDuration(t) {
        return arguments.length ? ((this._dirty = 0), Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }),
      (qt.totalTime = function totalTime(t, e) {
        if ((Ft(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) || (this._ts < 0 && 0 < t) || (!this._tDur && !t)) &&
            Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === X) || (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (qt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
      }),
      (qt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
      }),
      (qt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1;
      }),
      (qt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -X ? 0 : this._rts),
          this.totalTime(kt(-Math.abs(this._delay), this._tDur, e), !0),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (qt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (Ft(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay), this;
        }
        return this._start;
      }),
      (qt.endTime = function endTime(t) {
        return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }),
      (qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ga(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return (
          (L = t),
          (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (L = e),
          this
        );
      }),
      (qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t)) : r;
      }),
      (qt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
      }),
      (qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }),
      (qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (qt.resume = function resume() {
        return this.paused(!1);
      }),
      (qt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0;
      }),
      (qt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -X), this;
      }),
      (qt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X));
      }),
      (qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? ((i[t] = e), r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
      }),
      (qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Bo() {
            var t = i.then;
            (i.then = null), s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) || (!i._tTime && i._ts < 0) ? Bo() : (i._prom = Bo);
        });
      }),
      (qt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      d || Rt.wake();
  }
  qa(Ut.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        I && Ka(t.parent || I, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (e.duration = 0), (e.parent = this), va(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Zt(t, e, xt(this, r), 1), this;
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, Zt.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (r.duration = e), (r.stagger = r.stagger || i), (r.onComplete = a), (r.onCompleteParams = s), (r.parent = this), new Zt(t, r, xt(this, n)), this;
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (r.runBackwards = 1), (va(r).immediateRender = w(r.immediateRender)), this.staggerTo(t, e, r, i, n, a, s);
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (i.startAt = r), (va(i).immediateRender = w(i.immediateRender)), this.staggerTo(t, e, i, n, a, s, o);
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if ((this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y)) {
          if (
            (_ !== this._time && g && ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (((d = this._yoyo), (o = g + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m ? ((s = this._repeat), (i = g)) : ((s = ~~(v / o)) && s === v / o && ((i = g), s--), g < i && (i = g)),
              (c = Tt(this._tTime, o)),
              !_ && this._tTime && c !== s && this._tTime - c * o - this._dur <= 0 && (c = s),
              d && 1 & s && ((i = g - i), (p = 1)),
              s !== c && !this._lock)
            ) {
              var T = d && 1 & c,
                b = T === (d && 1 & s);
              if (
                (s < c && (T = !T),
                (_ = T ? 0 : v % g ? g : v),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && At(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) || u != !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b && ((this._lock = 2), (_ = T ? g : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Qb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ("isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (_ = 0)),
            !_ && i && !e && !s && (At(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -X);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || (L && (n._initted || n._startAt))),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -X : X);
                  break;
                }
              }
              n = a;
            }
          }
          if (h && !e && (this.pause(), (h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1), this._ts)) return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && At(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) || !((v === m && 0 < this._ts) || (!v && this._ts < 0)) || za(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_ && m) ||
                  (At(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || (v < m && 0 < this.timeScale()) || this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof Ut))) {
          if ($(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = Zt.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; ) a._start >= i && (a instanceof Zt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = Zt.delayedCall(0, e || T, r);
        return (i.data = "isPause"), (this._hasPause = 1), Ka(this, i, xt(this, t));
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; ) e._start === t && "isPause" === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Nt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s; )
          s instanceof Zt
            ? la(s._targets, a) && (o ? (!Nt || (s._initted && s._ts)) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Zt.to(
            i,
            qa(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; ) n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this);
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0)) : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) && ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === I && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((I._ts && (na(I, Ga(t, I)), (f = Rt.frame)), Rt.frame >= mt)) {
          mt += q.autoSleep || 120;
          var e = I._first;
          if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Rt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if ((s(t) && (t = Kt(t, a, e, i, n)), !v(t) || (t.style && t.nodeType) || $(t) || Z(t))) return r(t) ? Kt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Kt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)), i !== c)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; ) l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if ($(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else for (n in r) (a = e[n] || (e[n] = [])), "ease" === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Nt,
    Wt,
    Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c,
        d = t[e],
        p = "get" !== i ? i : s(d) ? (l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : d,
        _ = s(d) ? (l ? re : te) : $t;
      if ((r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && ((!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c) || (n = c))), !f || p !== n || Wt))
        return isNaN(p * n) || "" === n
          ? (d || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                c,
                d,
                p,
                _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])), u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((c = parseFloat(u[g - 1]) || 0),
                    (_._pt = { _next: _._pt, p: f || 1 === g ? f : ",", s: c, c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c, m: h && h < 4 ? Math.round : 0 }),
                    (m = it.lastIndex));
              return (_.c = m < i.length ? i.substring(m, i.length) : ""), (_.fp = s), (nt.test(i) || d) && (_.e = 0), (this._pt = _);
            }.call(this, t, e, p, n, _, h || q.stringFilter, l))
          : ((c = new _e(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? se : ae, 0, _)), l && (c.fp = l), u && c.modifier(u, this, t), (this._pt = c));
    },
    Gt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.onUpdateParams,
        k = m.callbackScope,
        M = m.runBackwards,
        O = m.yoyoEase,
        P = m.keyframes,
        A = m.autoRevert,
        C = t._dur,
        S = t._startAt,
        E = t._targets,
        D = t.parent,
        z = D && "nested" === D.data ? D.vars.targets : E,
        R = "auto" === t._overwrite && !B,
        F = t.timeline;
      if (
        (!F || (P && g) || (g = "none"),
        (t._ease = jt(g, V.ease)),
        (t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0),
        O && t._yoyo && !t._repeat && ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !F && !!m.runBackwards),
        !F || (P && !m.stagger))
      ) {
        if (
          ((p = (l = E[0] ? fa(E[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !A ? S.render(-1, !0) : S.revert(M && C ? ht : ut), (S._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = Zt.set(
                E,
                qa(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !S && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: x,
                    callbackScope: k,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L || (!y && !A)) && t._startAt.revert(ht),
            y && C && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (M && C && !S)
          if (
            (e && (y = !1),
            (a = qa({ overwrite: !1, data: "isFromStart", lazy: y && !S && w(T), immediateRender: y, stagger: 0, parent: D }, i)),
            p && (a[l.prop] = p),
            za((t._startAt = Zt.set(E, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, X, X);
        for (t._pt = t._ptCache = 0, T = (C && w(T)) || (T && !C), n = 0; n < E.length; n++) {
          if (
            ((h = (o = E[n])._gsap || ea(E)[n]._gsap),
            (t._ptLookup[n] = c = {}),
            dt[h.id] && ct.length && ma(),
            (d = z === E ? n : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, d, z) &&
              ((t._pt = s = new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                c[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i) pt[a] && (f = ac(a, i, t, d, o, z)) ? f.priority && (u = 1) : (c[a] = s = Qt.call(t, o, a, "get", i[a], d, z, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]), R && t._pt && ((Nt = t), I.killTweensOf(o, c, t.globalTime(e)), (_ = !t.parent), (Nt = 0)), t._pt && T && (dt[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b), (t._initted = (!t._op || t._pt) && !_), P && e <= 0 && F.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t;
    },
    Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ht = {};
  ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (Ht[t] = 1);
  });
  var Zt = (function (z) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = (a = z.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        k = p.defaults,
        M = p.scrollTrigger,
        O = p.yoyoEase,
        P = r.parent || I,
        A = ($(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
      if (
        ((a._targets = A.length ? ea(A) : R("GSAP target " + e + " not found. https://greensock.com", !q.nullTargetWarn) || []),
        (a._ptLookup = []),
        (a._overwrite = b),
        x || T || y(_) || y(m))
      ) {
        if (
          ((r = a.vars),
          (s = a.timeline = new Xt({ data: "nested", defaults: k || {}, targets: P && "nested" === P.data ? P.vars.targets : A })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = A.length), (c = T && eb(T)), v(T))) for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Ht)).stagger = 0),
              O && (u.yoyoEase = O),
              d && yt(u, d),
              (f = A[o]),
              (u.duration = +Kt(_, _assertThisInitialized(a), o, f, A)),
              (u.delay = (+Kt(m, _assertThisInitialized(a), o, f, A) || 0) - a._delay),
              !T && 1 === h && u.delay && ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, c ? c(o, f, A) : 0),
              (s._ease = Bt.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: "none" })), (s._ease = jt(x.ease || r.ease || "none"));
          var C,
            S,
            E,
            D = 0;
          if ($(x))
            x.forEach(function (t) {
              return s.to(A, t, ">");
            }),
              s.duration();
          else {
            for (l in ((u = {}), x)) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                C = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = D = 0;
                o < C.length;
                o++
              )
                ((E = { ease: (S = C[o]).e, duration: ((S.t - (o ? C[o - 1].t : 0)) / 100) * _ })[l] = S.v), s.to(A, E, D), (D += E.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b || B || ((Nt = _assertThisInitialized(a)), I.killTweensOf(A), (Nt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            "nested" !== P.data)) &&
          ((a._tTime = -X), a.render(Math.max(0, -m) || 0)),
        M && La(_assertThisInitialized(a), M),
        a
      );
    }
    _inheritsLoose(Tween, z);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = this._time,
          d = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = d - X < t && !_ ? d : t < X ? 0 : t;
        if (p) {
          if (m !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != _)) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _)) return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === d ? ((a = this._repeat), (i = p)) : ((a = ~~(m / s)) && a === m / s && ((i = p), a--), p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === c && !r && this._initted)
              )
                return (this._tTime = m), this;
              a !== o && (l && this._yEase && Qb(l, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (c !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !c && !e && !a && (At(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r)) || (this._startAt && (this._zTime = t)),
              this._onUpdate && !e && (_ && Ca(this, t, 0, r), At(this, "onUpdate")),
              this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && At(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) || !((m === this._tDur && 0 < this._ts) || (!m && this._ts < 0)) || za(this, 1),
                e || (_ && !c) || !(m || c || u) || (At(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || (m < d && 0 < this.timeScale()) || this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = kt(0, t._tDur, e)),
                (a = Tt(l, h)),
                t._yoyo && 1 & a && (u = 1 - u),
                a !== Tt(t._tTime, h) && ((o = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || L || i || t._zTime === X || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || (e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n; )
                n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && At(t, "onUpdate"),
                l && t._repeat && !r && t.parent && At(t, "onRepeat"),
                (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || L || (At(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          z.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i) {
        d || Rt.wake(), this._ts || this.play();
        var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Gt(this, a),
          (n = this._ease(a / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s) {
            var o,
              u,
              h,
              l,
              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!f)
              for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--; ) {
                if ((o = h[l][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                if (!o) return (Wt = 1), (t.vars[e] = "+=0"), Gt(t, s), (Wt = 0), 1;
                f.push(o);
              }
            for (l = f.length; l--; )
              ((o = (u = f[l])._pt || u).s = (!i && 0 !== i) || n ? o.s + (i || 0) + a * o.c : i), (o.c = r - o.s), u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b));
          })(this, t, e, r, i, n, a)
            ? this.resetTo(t, e, r, i)
            : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this),
            this.parent && i !== this.timeline.totalDuration() && Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          c = t ? Ot(t) : f,
          d = this._ptLookup,
          p = this._pt;
        if (
          (!e || "all" === e) &&
          (function _arraysMatch(t, e) {
            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
            return r < 0;
          })(f, c)
        )
          return "all" === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o)) if ((i in r)) for (n = (a = o[i].split(",")).length; n--; ) r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~c.indexOf(f[l]))
            for (u in ((a = d[l]), "all" === e ? ((n[l] = e), (o = a), (s = {})) : ((s = n[l] = n[l] || {}), (o = e)), o))
              (h = a && a[u]) && (("kill" in h.d && !0 !== h.d.kill(u)) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e);
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return I.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(Ut);
  qa(Zt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Zt[r] = function () {
        var t = new Xt(),
          e = Mt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var $t = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : $t;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; ) (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; ) (r = i._next), (i.p === t && !i.op) || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), (i = r);
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a), (a._next = r) ? (r._prev = a) : (n = a), (a = e);
      }
      t._pt = i;
    },
    _e =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set), (this.set = wc), (this.m = t), (this.mt = r), (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || ae),
      (this.d = s || this),
      (this.set = o || $t),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Zt),
    (ot.TimelineLite = ot.TimelineMax = Xt),
    (I = new Xt({ sortChildren: !1, defaults: V, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
    (q.stringFilter = Fb);
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Me &&
      (Ec("matchMediaInit"),
      ge.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a) (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Ec("matchMediaRevert"),
      o.forEach(function (t) {
        return t.onMatch(t);
      }),
      (Me = t),
      Ec("matchMedia"));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Me = 0,
    Oe = 0,
    Pe =
      (((me = Context.prototype).add = function add(t, i, n) {
        function Ew() {
          var t,
            e = l,
            r = a.selector;
          return (
            e && e !== a && e.data.push(a), n && (a.selector = cb(n)), (l = a), (t = i.apply(a, arguments)), s(t) && a._r.push(t), (l = e), (a.selector = r), (a.isReverted = !1), t
          );
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (a.last = Ew), t === s ? Ew(a) : t ? (a[t] = Ew) : Ew;
      }),
      (me.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (me.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Zt && !(t.parent && "nested" === t.parent.data) && e.push(t);
          }),
          e
        );
      }),
      (me.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (me.kill = function kill(e, t) {
        var r = this;
        if (e) {
          var i = this.getTweens();
          this.data.forEach(function (t) {
            "isFlip" === t.data &&
              (t.revert(),
              t.getChildren(!0, !0, !1).forEach(function (t) {
                return i.splice(i.indexOf(t), 1);
              }));
          }),
            i
              .map(function (t) {
                return { g: t.globalTime(0), t: t };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1 / 0;
              })
              .forEach(function (t) {
                return t.t.revert(e);
              }),
            this.data.forEach(function (t) {
              return !(t instanceof Zt) && t.revert && t.revert(e);
            }),
            this._r.forEach(function (t) {
              return t(e, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), t)) for (var n = ge.length; n--; ) ge[n].id === this.id && ge.splice(n, 1);
      }),
      (me.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = Oe++), t && this.add(t);
  }
  var Ae,
    Ce =
      (((Ae = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new Pe(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (l && !s.selector && (s.selector = l.selector), this.contexts.push(s), (e = s.add("onMatch", e)), (s.queries = t)))
          "all" === n
            ? (a = 1)
            : (i = h.matchMedia(t[n])) && (ge.indexOf(s) < 0 && ge.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Fc) : i.addEventListener("change", Fc));
        return a && e(s), this;
      }),
      (Ae.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Ae.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t);
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ee.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (c._pt = 0), e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && he(1, c);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function Wx(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = Ee.to(t, yt((((r = {})[i] = "+=0.1"), (r.paused = !0), r), e || {}));
      return (Wx.tween = n), Wx;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.");
      }),
        (_t[i] = function (t, e, r) {
          return n(Ot(t), qa(e || {}, a), r);
        }),
        r &&
          (Xt.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Bt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Bt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r; )
        (i = r._next), (!e && !r._dur && r instanceof Zt && r.vars.onComplete === r._targets[0]) || Ka(n, r, r._start - r._delay), (r = i);
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ce(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ge.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Fc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return $(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return $(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return kt(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Ot,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            c = {};
          if ((!0 === t && (n = 1) && (t = null), f)) (e = { p: e }), (i = { p: i });
          else if ($(e) && !$(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt($(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Qt.call(c, e, s, "get", i[s]);
            a = function func(t) {
              return he(t, c) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: Zt,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (B = t);
      },
    },
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Se[t] = Zt[t]);
  }),
    Rt.add(Xt.updateRoot),
    (c = Se.to({}, { duration: 0 }));
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--; ) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Jc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var Ee =
    Se.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e))
            (o = t.getAttribute(a) || ""), ((s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a), (s.b = o), this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; ) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Lc("roundProps", fb),
      Lc("modifiers"),
      Lc("snap", gb)
    ) || Se;
  (Zt.version = Xt.version = Ee.version = "3.12.2"), (o = 1), x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function xd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return (t.style[e] = r);
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Ed(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style;
    if (t in ar && n) {
      if (((this.tfm = this.tfm || {}), "transform" === t))
        return cr.transform.split(",").forEach(function (t) {
          return Jd.call(r, t, e);
        });
      if (
        (~(t = cr[t] || t).indexOf(",")
          ? t.split(",").forEach(function (t) {
              return (r.tfm[t] = yr(i, t));
            })
          : (this.tfm[t] = i._gsap.x ? i._gsap[t] : yr(i, t)),
        0 <= this.props.indexOf(dr))
      )
        return;
      i._gsap.svg && ((this.svgo = i.getAttribute("data-svg-origin")), this.props.push(pr, e, "")), (t = dr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1] ? (i[r[t]] = r[t + 2]) : r[t + 2] ? (n[r[t]] = r[t + 2]) : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(hr, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), ((t = Ie()) && t.isStart) || n[dr] || (Kd(n), (a.uncache = 1));
    }
  }
  function Md(t, e) {
    var r = { target: t, props: [], revert: Ld, save: Jd };
    return (
      t._gsap || Ee.core.getCache(t),
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Od(t, e) {
    var r = ze.createElementNS ? ze.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ze.createElement(t);
    return r.style ? r : ze.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) || i.getPropertyValue(e) || (!r && Pd(t, mr(e) || e, 1)) || "";
  }
  function Sd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((De = window),
      (ze = De.document),
      (Re = ze.documentElement),
      (Be = Od("div") || { style: {} }),
      Od("div"),
      (dr = mr(dr)),
      (pr = dr + "Origin"),
      (Be.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ye = !!mr("perspective")),
      (Ie = Ee.core.reverting),
      (Fe = 1));
  }
  function Td(t) {
    var e,
      r = Od("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if ((Re.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
      try {
        (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = Td);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), (this.style.cssText = a), e;
  }
  function Ud(t, e) {
    for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Td || (r = Td.call(e, !0)),
      !r || r.width || r.x || r.y ? r : { x: +Ud(e, ["x", "cx", "x1"]) || 0, y: +Ud(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }
    );
  }
  function Wd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r = t.style;
      e in ar && e !== pr && (e = dr),
        r.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), r.removeProperty(e.replace(hr, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = Be.style,
      f = lr.test(e),
      c = "svg" === t.tagName.toLowerCase(),
      d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || gr[i] || gr[h]
      ? u
      : ("px" === h || p || (u = _d(t, e, r, "px")),
        (o = t.getCTM && Wd(t)),
        (!_ && "%" !== h) || (!ar[e] && !~e.indexOf("adius"))
          ? ((l[f ? "width" : "height"] = 100 + (p ? h : i)),
            (a = ~e.indexOf("adius") || ("em" === i && t.appendChild && !c) ? t : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ze && a.appendChild) || (a = ze.body),
            (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache
              ? ia((u / s.width) * 100)
              : ((!_ && "%" !== h) || vr[Pd(a, "display")] || (l.position = Pd(t, "position")),
                a === t && (l.position = "static"),
                a.appendChild(Be),
                (n = Be[d]),
                a.removeChild(Be),
                (l.position = "absolute"),
                f && _ && (((s = fa(a)).time = Rt.time), (s.width = a[d])),
                ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
          : ((n = o ? t.getBBox()[f ? "width" : "height"] : t[d]), ia(_ ? (u / n) * 100 : (u / 100) * n)));
  }
  function be(t, e, r, i) {
    if (!r || "none" === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r ? ((e = n), (r = a)) : "borderColor" === e && (r = Pd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ""),
      "auto" === (i += "") && ((t.style[e] = i), (i = Pd(t, e) || i), (t.style[e] = r)),
      Fb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (c = o[0]),
          (p = i.substring(v, o.index)),
          l ? (l = (l + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          c !== (f = u[y++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            "=" === c.charAt(1) && (c = ka(h, c) + m),
            (d = parseFloat(c)),
            (_ = c.substr((d + "").length)),
            (v = rt.lastIndex - _.length),
            _ || ((_ = _ || q.units[e] || m), v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = _d(t, e, f, _) || 0),
            (g._pt = { _next: g._pt, p: p || 1 === y ? p : ",", s: h, c: d - h, m: (l && l < 4) || "zIndex" === e ? Math.round : 0 }));
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function de(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) || ((t = r), (r = i), (i = t)), (e[0] = Tr[r] || r), (e[1] = Tr[i] || i), e.join(" ");
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else for (n = (o = o.split(",")).length; -1 < --n; ) (r = o[n]), ar[r] && ((i = 1), (r = "transformOrigin" === r ? pr : dr)), Xd(a, r);
      i && (Xd(a, dr), u && (u.svg && a.removeAttribute("transform"), kr(a, 1), (u.uncache = 1), Kd(s)));
    }
  }
  function ie(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function je(t) {
    var e = Pd(t, dr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",")
        ? wr
        : u
      : (u !== wr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) || ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = je(t)),
          n ? (o.display = n) : Xd(t, "display"),
          a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== wr && (o = _ * v - m * g) && ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o), (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o), (x = u))
      : ((w = (s = Vd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)), (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth) ? ((y = w - f), (T = x - c), (h.xOffset = d + (y * _ + T * g) - y), (h.yOffset = p + (y * m + T * v) - T)) : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[pr] = "0px 0px"),
      a && (Yd(a, h, "xOrigin", f, w), Yd(a, h, "yOrigin", c, x), Yd(a, h, "xOffset", d, h.xOffset), Yd(a, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n,
      f = n + l + "deg";
    return (
      h &&
        ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u),
        "cw" === s && l < 0 ? (l = ((l + 36e9) % u) - ~~(l / u) * u) : "ccw" === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new _e(t._pt, e, i, n, l, wd)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute("transform")), r.setAttribute("transform", ""), (f[dr] = e), (i = kr(r, 1)), Xd(r, dr), r.setAttribute("transform", a))
      : ((a = getComputedStyle(r)[dr]), (f[dr] = e), (i = kr(r, 1)), (f[dr] = a)),
    ar))
      (a = l[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a)), (u = parseFloat(s)), (t._pt = new _e(t._pt, i, n, o, u - o, vd)), (t._pt.u = h || 0), t._props.push(n));
    we(i, l);
  }
  var De,
    ze,
    Re,
    Fe,
    Be,
    Le,
    Ie,
    Ye,
    qe = Bt.Power0,
    Ve = Bt.Power1,
    Ue = Bt.Power2,
    Xe = Bt.Power3,
    Ne = Bt.Power4,
    We = Bt.Linear,
    Qe = Bt.Quad,
    Ge = Bt.Cubic,
    Ke = Bt.Quart,
    Je = Bt.Quint,
    He = Bt.Strong,
    Ze = Bt.Elastic,
    $e = Bt.Back,
    tr = Bt.SteppedEase,
    er = Bt.Bounce,
    rr = Bt.Sine,
    ir = Bt.Expo,
    nr = Bt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    cr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    dr = "transform",
    pr = dr + "Origin",
    _r = "O,Moz,ms,Ms,Webkit".split(","),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Be).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(_r[n] + t in i); );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t;
    },
    gr = { deg: 1, rad: 1, turn: 1 },
    vr = { grid: 1, flex: 1 },
    yr = function _get(t, e, r, i) {
      var n;
      return (
        Fe || Sd(),
        e in cr && "transform" !== e && ~(e = cr[e]).indexOf(",") && (e = e.split(",")[0]),
        ar[e] && "transform" !== e
          ? ((n = kr(t, i)), (n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Mr(Pd(t, pr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(")) || (n = (br[e] && br[e](t, e, r)) || Pd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
      );
    },
    Tr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new _e(t._pt, e, r, 0, 0, ee));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    kr = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        P,
        A,
        C,
        S,
        E,
        D,
        z,
        R,
        F = t.style,
        B = r.scaleX < 0,
        L = "deg",
        I = getComputedStyle(t),
        Y = Pd(t, pr) || "0";
      return (
        (i = n = a = u = h = l = f = c = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Wd(t))),
        I.translate &&
          (("none" === I.translate && "none" === I.scale && "none" === I.rotate) ||
            (F[dr] =
              ("none" !== I.translate ? "translate3d(" + (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
              ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
              ("none" !== I.scale ? "scale(" + I.scale.split(" ").join(",") + ") " : "") +
              ("none" !== I[dr] ? I[dr] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = ke(t, r.svg)),
        r.svg &&
          ((O = r.uncache ? ((P = t.getBBox()), (Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px"), "") : !e && t.getAttribute("data-svg-origin")),
          le(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== wr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = M = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ur(b, T) * sr : 0),
              (f = w || x ? ur(w, x) * sr + u : 0) && (o *= Math.abs(Math.cos(f * or))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((R = m[6]),
              (D = m[7]),
              (C = m[8]),
              (S = m[9]),
              (E = m[10]),
              (z = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ur(R, E)) * sr),
              g &&
                ((O = k * (v = Math.cos(-g)) + C * (y = Math.sin(-g))),
                (P = M * v + S * y),
                (A = R * v + E * y),
                (C = k * -y + C * v),
                (S = M * -y + S * v),
                (E = R * -y + E * v),
                (z = D * -y + z * v),
                (k = O),
                (M = P),
                (R = A)),
              (l = (g = ur(-w, E)) * sr),
              g && ((v = Math.cos(-g)), (z = x * (y = Math.sin(-g)) + z * v), (T = O = T * v - C * y), (b = P = b * v - S * y), (w = A = w * v - E * y)),
              (u = (g = ur(b, T)) * sr),
              g && ((O = T * (v = Math.cos(g)) + b * (y = Math.sin(g))), (P = k * v + M * y), (b = b * v - T * y), (M = M * v - k * y), (T = O), (k = P)),
              h && 359.9 < Math.abs(h) + Math.abs(u) && ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(M * M + R * R))),
              (g = ur(k, M)),
              (f = 2e-4 < Math.abs(g) ? g * sr : 0),
              (d = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg && ((O = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, dr))), O && t.setAttribute("transform", O))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (B ? ((s *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x = i - ((r.xPercent = i && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + "px"),
        (r.y = n - ((r.yPercent = n && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + "px"),
        (r.z = a + "px"),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + L),
        (r.rotationX = ia(h) + L),
        (r.rotationY = ia(l) + L),
        (r.skewX = f + L),
        (r.skewY = c + L),
        (r.transformPerspective = d + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[pr] = Mr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = q.force3D),
        (r.renderTransform = r.svg ? Er : Ye ? Sr : Or),
        (r.uncache = 0),
        r
      );
    },
    Mr = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Or = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Sr(t, e);
    },
    Pr = "0deg",
    Ar = "0px",
    Cr = ") ",
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * or), (b = Math.cos(w)), (a = oe(g, a, x * b * -v)), (s = oe(g, s, -Math.sin(w) * -v)), (o = oe(g, o, k * b * -v + v));
      }
      _ !== Ar && (y += "perspective(" + _ + Cr),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Ar && s === Ar && o === Ar) || (y += o !== Ar || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Cr),
        u !== Pr && (y += "rotate(" + u + Cr),
        h !== Pr && (y += "rotateY(" + h + Cr),
        l !== Pr && (y += "rotateX(" + l + Cr),
        (f === Pr && c === Pr) || (y += "skew(" + f + ", " + c + Cr),
        (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + Cr),
        (g.style[dr] = y || "translate(0, 0)");
    },
    Er = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (c = parseFloat(c)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (c += p)),
        c || d
          ? ((c *= or),
            (d *= or),
            (r = Math.cos(c) * _),
            (i = Math.sin(c) * _),
            (n = Math.sin(c - d) * -m),
            (a = Math.cos(c - d) * m),
            d && ((p *= or), (s = Math.tan(d - p)), (n *= s = Math.sqrt(1 + s * s)), (a *= s), p && ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) && ((x = _d(g, "x", l, "px")), (k = _d(g, "y", f, "px"))),
        (v || y || T || b) && ((x = ia(x + v - (v * r + y * n) + T)), (k = ia(k + y - (v * i + y * a) + b))),
        (u || h) && ((s = g.getBBox()), (x = ia(x + (u / 100) * s.width)), (k = ia(k + (h / 100) * s.height))),
        (s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")"),
        g.setAttribute("transform", s),
        w && (g.style[dr] = s);
    };
  ha("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yr(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Dr,
    zr,
    Rr,
    Fr = {
      name: "css",
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          k = i.vars.startAt;
        for (c in (Fe || Sd(), (this.styles = this.styles || Md(t)), (b = this.styles.props), (this.tween = i), e))
          if ("autoRound" !== c && ((o = e[c]), !pt[c] || !ac(c, e, i, n, t, a)))
            if (((l = typeof o), (f = br[c]), "function" === l && (l = typeof (o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f))
              f(this, t, c, o, i) && (T = 1);
            else if ("--" === c.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                (o += ""),
                (Dt.lastIndex = 0),
                Dt.test(s) || ((d = Ya(s)), (p = Ya(o))),
                p ? d !== p && (s = _d(t, c, s, p) + p) : d && (o += d),
                this.add(x, "setProperty", s, o, n, a, 0, 0, c),
                w.push(c),
                b.push(c, 0, x[c]);
            else if ("undefined" !== l) {
              if (
                (k && c in k
                  ? ((s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c]),
                    r(s) && ~s.indexOf("random(") && (s = ob(s)),
                    Ya(s + "") || (s += q.units[c] || Ya(yr(t, c)) || ""),
                    "=" === (s + "").charAt(1) && (s = yr(t, c)))
                  : (s = yr(t, c)),
                (h = parseFloat(s)),
                (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                (u = parseFloat(o)),
                c in cr &&
                  ("autoAlpha" === c &&
                    (1 === h && "hidden" === yr(t, "visibility") && u && (h = 0),
                    b.push("visibility", 0, x.visibility),
                    Yd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                  "scale" !== c && "transform" !== c && ~(c = cr[c]).indexOf(",") && (c = c.split(",")[0])),
                (m = c in ar))
              )
                if (
                  (this.styles.save(c),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) || kr(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt = new _e(this._pt, x, dr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new _e(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, vd)), (this._pt.u = 0), w.push("scaleY", c), (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    b.push(pr, 0, x[pr]),
                      (o = de(o)),
                      v.svg
                        ? le(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p), Yd(this, x, c, Mr(s), Mr(o)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    le(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (c in xr) {
                    ve(this, v, c, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    Yd(this, v, "smooth", v.smooth, o);
                    continue;
                  }
                  if ("force3D" === c) {
                    v[c] = o;
                    continue;
                  }
                  if ("transform" === c) {
                    xe(this, o, t);
                    continue;
                  }
                }
              else c in x || (c = mr(c) || c);
              if (m || ((u || 0 === u) && (h || 0 === h) && !fr.test(o) && c in x))
                (u = u || 0),
                  (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in q.units ? q.units[c] : d)) && (h = _d(t, c, s, p)),
                  (this._pt = new _e(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || ("px" !== p && "zIndex" !== c) || !1 === e.autoRound ? vd : yd)),
                  (this._pt.u = p || 0),
                  d !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = xd));
              else if (c in x) be.call(this, t, c, s, _ ? _ + o : o);
              else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
              else if ("parseTransform" !== c) {
                Q(c, o);
                continue;
              }
              m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c);
            }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Ie()) for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: yr,
      aliases: cr,
      getSetter: function getSetter(t, e, r) {
        var i = cr[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ar && e !== pr && (t._gsap.x || yr(t, "x"))
            ? r && Le === r
              ? "scale" === e
                ? Ed
                : Dd
              : (Le = r || {}) && ("scale" === e ? Fd : Gd)
            : t.style && !u(t.style[e])
            ? Bd
            : ~e.indexOf("-")
            ? Cd
            : ne(t, e)
        );
      },
      core: { _removeProperty: Xd, _getMatrix: ke },
    };
  (Ee.utils.checkPrefix = mr),
    (Ee.core.getStyleSaver = Md),
    (Rr = ha(
      (Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (zr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ar[t] = 1;
      }
    )),
    ha(zr, function (t) {
      (q.units[t] = "deg"), (xr[t] = 1);
    }),
    (cr[Rr[13]] = Dr + "," + zr),
    ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      cr[e[1]] = Rr[e[0]];
    }),
    ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      q.units[t] = "px";
    }),
    Ee.registerPlugin(Fr);
  var Br = Ee.registerPlugin(Fr) || Ee,
    Lr = Br.core.Tween;
  (e.Back = $e),
    (e.Bounce = er),
    (e.CSSPlugin = Fr),
    (e.Circ = nr),
    (e.Cubic = Ge),
    (e.Elastic = Ze),
    (e.Expo = ir),
    (e.Linear = We),
    (e.Power0 = qe),
    (e.Power1 = Ve),
    (e.Power2 = Ue),
    (e.Power3 = Xe),
    (e.Power4 = Ne),
    (e.Quad = Qe),
    (e.Quart = Ke),
    (e.Quint = Je),
    (e.Sine = rr),
    (e.SteppedEase = tr),
    (e.Strong = He),
    (e.TimelineLite = Xt),
    (e.TimelineMax = Xt),
    (e.TweenLite = Zt),
    (e.TweenMax = Lr),
    (e.default = Br),
    (e.gsap = Br);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

//

/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (a) {
  "use strict";
  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  function r() {
    return we || ("undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we);
  }
  var we,
    Me,
    Pe,
    Ae,
    De,
    Ee,
    Oe,
    Ye,
    ze,
    t,
    Xe,
    Te,
    ke,
    o = 1,
    Ce = [];
  (a._scrollers = []), (a._proxies = []);
  function x(e, t) {
    return ~a._proxies.indexOf(e) && a._proxies[a._proxies.indexOf(e) + 1][t];
  }
  function y(e) {
    return !!~t.indexOf(e);
  }
  function z(e, t, n, r, o) {
    return e.addEventListener(t, n, { passive: !r, capture: !!o });
  }
  function A(e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  }
  function D() {
    return (Xe && Xe.isPressed) || a._scrollers.cache++;
  }
  function E(n, r) {
    function qa(e) {
      if (e || 0 === e) {
        o && (Pe.history.scrollRestoration = "manual");
        var t = Xe && Xe.isPressed;
        (e = qa.v = Math.round(e) || (Xe && Xe.iOS ? 1 : 0)), n(e), (qa.cacheID = a._scrollers.cache), t && i("ss", e);
      } else (r || a._scrollers.cache !== qa.cacheID || i("ref")) && ((qa.cacheID = a._scrollers.cache), (qa.v = n()));
      return qa.v + qa.offset;
    }
    return (qa.offset = 0), n && qa;
  }
  function H(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || we.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    );
  }
  function I(t, e) {
    var n = e.s,
      r = e.sc;
    y(t) && (t = Ae.scrollingElement || De);
    var o = a._scrollers.indexOf(t),
      i = r === He.sc ? 1 : 2;
    ~o || (o = a._scrollers.push(t) - 1), a._scrollers[o + i] || z(t, "scroll", D);
    var c = a._scrollers[o + i],
      s =
        c ||
        (a._scrollers[o + i] =
          E(x(t, n), !0) ||
          (y(t)
            ? r
            : E(function (e) {
                return arguments.length ? (t[n] = e) : t[n];
              })));
    return (s.target = t), c || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")), s;
  }
  function J(e, t, o) {
    function Pa(e, t) {
      var n = qe();
      t || r < n - s ? ((c = i), (i = e), (a = s), (s = n)) : o ? (i += e) : (i = c + ((e - c) / (n - a)) * (s - a));
    }
    var i = e,
      c = e,
      s = qe(),
      a = s,
      r = t || 50,
      l = Math.max(500, 3 * r);
    return {
      update: Pa,
      reset: function reset() {
        (c = i = o ? 0 : i), (a = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = a,
          n = c,
          r = qe();
        return (!e && 0 !== e) || e === i || Pa(e), s === a || l < r - a ? 0 : ((i + (o ? n : -n)) / ((o ? r : s) - t)) * 1e3;
      },
    };
  }
  function K(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function L(e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  }
  function M() {
    (ze = we.core.globals().ScrollTrigger) &&
      ze.core &&
      (function _integrate() {
        var e = ze.core,
          n = e.bridge || {},
          t = e._scrollers,
          r = e._proxies;
        t.push.apply(t, a._scrollers),
          r.push.apply(r, a._proxies),
          (a._scrollers = t),
          (a._proxies = r),
          (i = function _bridge(e, t) {
            return n[e](t);
          });
      })();
  }
  function N(e) {
    return (
      (we = e || r()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Pe = window),
        (De = (Ae = document).documentElement),
        (Ee = Ae.body),
        (t = [Pe, Ae, De, Ee]),
        we.utils.clamp,
        (ke = we.core.context || function () {}),
        (Ye = "onpointerenter" in Ee ? "pointer" : "mouse"),
        (Oe = s.isTouch =
          Pe.matchMedia && Pe.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Pe || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Te = s.eventTypes =
          (
            "ontouchstart" in De
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in De
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        M(),
        (Me = 1)),
      Me
    );
  }
  var qe = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    c = "scrollTop",
    Se = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: E(function (e) {
        return arguments.length ? Pe.scrollTo(e, He.sc()) : Pe.pageXOffset || Ae[n] || De[n] || Ee[n] || 0;
      }),
    },
    He = {
      s: c,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Se,
      sc: E(function (e) {
        return arguments.length ? Pe.scrollTo(Se.sc(), e) : Pe.pageYOffset || Ae[c] || De[c] || Ee[c] || 0;
      }),
    };
  (Se.op = He), (a._scrollers.cache = 0);
  var s =
    ((Observer.prototype.init = function init(e) {
      Me || N(we) || console.warn("Please gsap.registerPlugin(Observer)"), ze || M();
      var o = e.tolerance,
        c = e.dragMinimum,
        t = e.type,
        i = e.target,
        n = e.lineHeight,
        r = e.debounce,
        s = e.preventDefault,
        a = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        g = e.onDragStart,
        p = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        x = e.onRelease,
        _ = e.onRight,
        m = e.onLeft,
        b = e.onUp,
        w = e.onDown,
        P = e.onChangeX,
        E = e.onChangeY,
        O = e.onChange,
        Y = e.onToggleX,
        X = e.onToggleY,
        T = e.onHover,
        k = e.onHoverEnd,
        C = e.onMove,
        q = e.ignoreCheck,
        S = e.isNormalizer,
        B = e.onGestureStart,
        G = e.onGestureEnd,
        V = e.onWheel,
        F = e.onEnable,
        R = e.onDisable,
        j = e.onClick,
        W = e.scrollSpeed,
        U = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function oc() {
        return (_e = qe());
      }
      function pc(e, t) {
        return ((se.event = e) && u && ~u.indexOf(e.target)) || (t && pe && "touch" !== e.pointerType) || (q && q(e, t));
      }
      function rc() {
        var e = (se.deltaX = L(ye)),
          t = (se.deltaY = L(xe)),
          n = Math.abs(e) >= o,
          r = Math.abs(t) >= o;
        O && (n || r) && O(se, e, t, ye, xe),
          n && (_ && 0 < se.deltaX && _(se), m && se.deltaX < 0 && m(se), P && P(se), Y && se.deltaX < 0 != ae < 0 && Y(se), (ae = se.deltaX), (ye[0] = ye[1] = ye[2] = 0)),
          r && (w && 0 < se.deltaY && w(se), b && se.deltaY < 0 && b(se), E && E(se), X && se.deltaY < 0 != le < 0 && X(se), (le = se.deltaY), (xe[0] = xe[1] = xe[2] = 0)),
          (re || ne) && (C && C(se), ne && (h(se), (ne = !1)), (re = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (V(se), (oe = !1)),
          (ee = 0);
      }
      function sc(e, t, n) {
        (ye[n] += e), (xe[n] += t), se._vx.update(e), se._vy.update(t), r ? (ee = ee || requestAnimationFrame(rc)) : rc();
      }
      function tc(e, t) {
        Z && !ce && ((se.axis = ce = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ce && ((ye[2] += e), se._vx.update(e, !0)),
          "x" !== ce && ((xe[2] += t), se._vy.update(t, !0)),
          r ? (ee = ee || requestAnimationFrame(rc)) : rc();
      }
      function uc(e) {
        if (!pc(e, 1)) {
          var t = (e = K(e, s)).clientX,
            n = e.clientY,
            r = t - se.x,
            o = n - se.y,
            i = se.isDragging;
          (se.x = t), (se.y = n), (i || Math.abs(se.startX - t) >= c || Math.abs(se.startY - n) >= c) && (h && (ne = !0), i || (se.isDragging = !0), tc(r, o), i || (g && g(se)));
        }
      }
      function xc(e) {
        return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && B(e, se.isDragging);
      }
      function yc() {
        return (se.isGesturing = !1) || G(se);
      }
      function zc(e) {
        if (!pc(e)) {
          var t = ue(),
            n = fe();
          sc((t - de) * W, (n - ge) * W, 1), (de = t), (ge = n), a && te.restart(!0);
        }
      }
      function Ac(e) {
        if (!pc(e)) {
          (e = K(e, s)), V && (oe = !0);
          var t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? Pe.innerHeight : 1) * f;
          sc(e.deltaX * t, e.deltaY * t, 0), a && !S && te.restart(!0);
        }
      }
      function Bc(e) {
        if (!pc(e)) {
          var t = e.clientX,
            n = e.clientY,
            r = t - se.x,
            o = n - se.y;
          (se.x = t), (se.y = n), (re = !0), (r || o) && tc(r, o);
        }
      }
      function Cc(e) {
        (se.event = e), T(se);
      }
      function Dc(e) {
        (se.event = e), k(se);
      }
      function Ec(e) {
        return pc(e) || (K(e, s) && j(se));
      }
      (this.target = i = H(i) || De),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (c = c || 0),
        (f = f || 1),
        (W = W || 1),
        (t = t || "wheel,touch,pointer"),
        (r = !1 !== r),
        (n = n || parseFloat(Pe.getComputedStyle(Ee).lineHeight) || 22);
      var ee,
        te,
        ne,
        re,
        oe,
        ie,
        ce,
        se = this,
        ae = 0,
        le = 0,
        ue = I(i, Se),
        fe = I(i, He),
        de = ue(),
        ge = fe(),
        pe = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Te[0],
        he = y(i),
        ve = i.ownerDocument || Ae,
        ye = [0, 0, 0],
        xe = [0, 0, 0],
        _e = 0,
        me = (se.onPress = function (e) {
          pc(e, 1) ||
            (e && e.button) ||
            ((se.axis = ce = null),
            te.pause(),
            (se.isPressed = !0),
            (e = K(e)),
            (ae = le = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            z(S ? i : ve, Te[1], uc, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        be = (se.onRelease = function (t) {
          if (!pc(t, 1)) {
            A(S ? i : ve, Te[1], uc, !0);
            var e = !isNaN(se.y - se.startY),
              n = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
              r = K(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                we.delayedCall(0.08, function () {
                  if (300 < qe() - _e && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) {
                      var e = ve.createEvent("MouseEvents");
                      e.initMouseEvent("click", !0, !0, Pe, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              a && !S && te.restart(!0),
              p && n && p(se),
              x && x(se, n);
          }
        });
      (te = se._dc =
        we
          .delayedCall(l || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), a && a(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = J(0, 50, !0)),
        (se._vy = J(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        ke(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (z(he ? ve : i, "scroll", D),
              0 <= t.indexOf("scroll") && z(he ? ve : i, "scroll", zc, s, U),
              0 <= t.indexOf("wheel") && z(i, "wheel", Ac, s, U),
              ((0 <= t.indexOf("touch") && Oe) || 0 <= t.indexOf("pointer")) &&
                (z(i, Te[0], me, s, U),
                z(ve, Te[2], be),
                z(ve, Te[3], be),
                Q && z(i, "click", oc, !1, !0),
                j && z(i, "click", Ec),
                B && z(ve, "gesturestart", xc),
                G && z(ve, "gestureend", yc),
                T && z(i, Ye + "enter", Cc),
                k && z(i, Ye + "leave", Dc),
                C && z(i, Ye + "move", Bc)),
              (se.isEnabled = !0),
              e && e.type && me(e),
              F && F(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Ce.filter(function (e) {
              return e !== se && y(e.target);
            }).length || A(he ? ve : i, "scroll", D),
            se.isPressed && (se._vx.reset(), se._vy.reset(), A(S ? i : ve, Te[1], uc, !0)),
            A(he ? ve : i, "scroll", zc, U),
            A(i, "wheel", Ac, U),
            A(i, Te[0], me, U),
            A(ve, Te[2], be),
            A(ve, Te[3], be),
            A(i, "click", oc, !0),
            A(i, "click", Ec),
            A(ve, "gesturestart", xc),
            A(ve, "gestureend", yc),
            A(i, Ye + "enter", Cc),
            A(i, Ye + "leave", Dc),
            A(i, Ye + "move", Bc),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            R && R(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Ce.indexOf(se);
            0 <= e && Ce.splice(e, 1), Xe === se && (Xe = 0);
          }),
        Ce.push(se),
        S && y(i) && (Xe = se),
        se.enable(d);
    }),
    (function _createClass(e, t, n) {
      return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (s.version = "3.12.2"),
    (s.create = function (e) {
      return new s(e);
    }),
    (s.register = N),
    (s.getAll = function () {
      return Ce.slice();
    }),
    (s.getById = function (t) {
      return Ce.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && we.registerPlugin(s),
    (a.Observer = s),
    (a._getProxyProp = x),
    (a._getScrollFunc = I),
    (a._getTarget = H),
    (a._getVelocityProp = J),
    (a._horizontal = Se),
    (a._isViewport = y),
    (a._vertical = He),
    (a.default = s);
  if (typeof window === "undefined" || window !== a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
  } else {
    delete a.default;
  }
});

//

/*!
 * Draggable 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function w(e, t) {
    if (e.parentNode && (h || T(e))) {
      var n = L(e),
        o = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        r = n ? (t ? "rect" : "g") : "div",
        i = 2 !== t ? 0 : 100,
        a = 3 === t ? 100 : 0,
        l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        s = h.createElementNS ? h.createElementNS(o.replace(/^https/, "http"), r) : h.createElement(r);
      return (
        t &&
          (n
            ? ((g = g || w(e)), s.setAttribute("width", 0.01), s.setAttribute("height", 0.01), s.setAttribute("transform", "translate(" + i + "," + a + ")"), g.appendChild(s))
            : (f || ((f = w(e)).style.cssText = l), (s.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + i + "px"), f.appendChild(s))),
        s
      );
    }
    throw "Need document and parent.";
  }
  function A(e, t, n, o, r, i, a) {
    return (e.a = t), (e.b = n), (e.c = o), (e.d = r), (e.e = i), (e.f = a), e;
  }
  var h,
    u,
    r,
    i,
    f,
    g,
    x,
    m,
    y,
    t,
    v = "transform",
    b = v + "Origin",
    T = function _setDoc(e) {
      var t = e.ownerDocument || e;
      !(v in e.style) && "msTransform" in e.style && (b = (v = "msTransform") + "Origin");
      for (; t.parentNode && (t = t.parentNode); );
      if (((u = window), (x = new ge()), t)) {
        (r = (h = t).documentElement), (i = t.body), ((m = h.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none");
        var n = t.createElement("div"),
          o = t.createElement("div");
        i.appendChild(n), n.appendChild(o), (n.style.position = "static"), (n.style[v] = "translate3d(0,0,1px)"), (y = o.offsetParent !== n), i.removeChild(n);
      }
      return t;
    },
    D = function _forceNonZeroScale(e) {
      for (var t, n; e && e !== i; )
        (n = e._gsap) && n.uncache && n.get(e, "x"),
          n && !n.scaleX && !n.scaleY && n.renderTransform && ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), t ? t.push(n) : (t = [n])),
          (e = e.parentNode);
      return t;
    },
    M = [],
    E = [],
    S = function _getDocScrollTop() {
      return u.pageYOffset || h.scrollTop || r.scrollTop || i.scrollTop || 0;
    },
    P = function _getDocScrollLeft() {
      return u.pageXOffset || h.scrollLeft || r.scrollLeft || i.scrollLeft || 0;
    },
    L = function _svgOwner(e) {
      return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null);
    },
    C = function _isFixed(e) {
      return "fixed" === u.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0);
    },
    N = function _placeSiblings(e, t) {
      var n,
        o,
        r,
        i,
        a,
        l,
        s = L(e),
        c = e === s,
        d = s ? M : E,
        p = e.parentNode;
      if (e === u) return e;
      if ((d.length || d.push(w(e, 1), w(e, 2), w(e, 3)), (n = s ? g : f), s))
        c
          ? ((i =
              -(r = (function _getCTM(e) {
                var t,
                  n = e.getCTM();
                return (
                  n ||
                    ((t = e.style[v]),
                    (e.style[v] = "none"),
                    e.appendChild(m),
                    (n = m.getCTM()),
                    e.removeChild(m),
                    t ? (e.style[v] = t) : e.style.removeProperty(v.replace(/([A-Z])/g, "-$1").toLowerCase())),
                  n || x.clone()
                );
              })(e)).e / r.a),
            (a = -r.f / r.d),
            (o = x))
          : e.getBBox
          ? ((r = e.getBBox()),
            (i =
              (o = (o = e.transform ? e.transform.baseVal : {}).numberOfItems
                ? 1 < o.numberOfItems
                  ? (function _consolidate(e) {
                      for (var t = new ge(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                      return t;
                    })(o)
                  : o.getItem(0).matrix
                : x).a *
                r.x +
              o.c * r.y),
            (a = o.b * r.x + o.d * r.y))
          : ((o = new ge()), (i = a = 0)),
          t && "g" === e.tagName.toLowerCase() && (i = a = 0),
          (c ? s : p).appendChild(n),
          n.setAttribute("transform", "matrix(" + o.a + "," + o.b + "," + o.c + "," + o.d + "," + (o.e + i) + "," + (o.f + a) + ")");
      else {
        if (((i = a = 0), y))
          for (o = e.offsetParent, r = e; (r = r && r.parentNode) && r !== o && r.parentNode; )
            4 < (u.getComputedStyle(r)[v] + "").length && ((i = r.offsetLeft), (a = r.offsetTop), (r = 0));
        if ("absolute" !== (l = u.getComputedStyle(e)).position && "fixed" !== l.position)
          for (o = e.offsetParent; p && p !== o; ) (i += p.scrollLeft || 0), (a += p.scrollTop || 0), (p = p.parentNode);
        ((r = n.style).top = e.offsetTop - a + "px"),
          (r.left = e.offsetLeft - i + "px"),
          (r[v] = l[v]),
          (r[b] = l[b]),
          (r.position = "fixed" === l.position ? "fixed" : "absolute"),
          e.parentNode.appendChild(n);
      }
      return n;
    },
    ge =
      (((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a,
          t = this.b,
          n = this.c,
          o = this.d,
          r = this.e,
          i = this.f,
          a = e * o - t * n || 1e-10;
        return A(this, o / a, -t / a, -n / a, e / a, (n * i - o * r) / a, -(e * i - t * r) / a);
      }),
      (t.multiply = function multiply(e) {
        var t = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f,
          l = e.a,
          s = e.c,
          c = e.b,
          d = e.d,
          p = e.e,
          u = e.f;
        return A(this, l * t + c * o, l * n + c * r, s * t + d * o, s * n + d * r, i + p * t + u * o, a + p * n + u * r);
      }),
      (t.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (t.equals = function equals(e) {
        var t = this.a,
          n = this.b,
          o = this.c,
          r = this.d,
          i = this.e,
          a = this.f;
        return t === e.a && n === e.b && o === e.c && r === e.d && i === e.e && a === e.f;
      }),
      (t.apply = function apply(e, t) {
        void 0 === t && (t = {});
        var n = e.x,
          o = e.y,
          r = this.a,
          i = this.b,
          a = this.c,
          l = this.d,
          s = this.e,
          c = this.f;
        return (t.x = n * r + o * a + s || 0), (t.y = n * i + o * l + c || 0), t;
      }),
      Matrix2D);
  function Matrix2D(e, t, n, o, r, i) {
    void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === r && (r = 0), void 0 === i && (i = 0), A(this, e, t, n, o, r, i);
  }
  function getGlobalMatrix(e, t, n, o) {
    if (!e || !e.parentNode || (h || T(e)).documentElement === e) return new ge();
    var r = D(e),
      i = L(e) ? M : E,
      a = N(e, n),
      l = i[0].getBoundingClientRect(),
      s = i[1].getBoundingClientRect(),
      c = i[2].getBoundingClientRect(),
      d = a.parentNode,
      p = !o && C(e),
      u = new ge((s.left - l.left) / 100, (s.top - l.top) / 100, (c.left - l.left) / 100, (c.top - l.top) / 100, l.left + (p ? 0 : P()), l.top + (p ? 0 : S()));
    if ((d.removeChild(a), r)) for (l = r.length; l--; ) ((s = r[l]).scaleX = s.scaleY = 0), s.renderTransform(1, s);
    return t ? u.inverse() : u;
  }
  function X() {
    return "undefined" != typeof window;
  }
  function Y() {
    return xe || (X() && (xe = window.gsap) && xe.registerPlugin && xe);
  }
  function Z(e) {
    return "function" == typeof e;
  }
  function $(e) {
    return "object" == typeof e;
  }
  function _(e) {
    return void 0 === e;
  }
  function aa() {
    return !1;
  }
  function da(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function fa(e, t) {
    var n = ye.createElementNS ? ye.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ye.createElement(e);
    return n.style ? n : ye.createElement(e);
  }
  function ra(e, t) {
    var n,
      o = {};
    for (n in e) o[n] = t ? e[n] * t : e[n];
    return o;
  }
  function ta(e, t) {
    for (var n, o = e.length; o--; ) t ? (e[o].style.touchAction = t) : e[o].style.removeProperty("touch-action"), (n = e[o].children) && n.length && ta(n, t);
  }
  function ua() {
    return Be.forEach(function (e) {
      return e();
    });
  }
  function wa() {
    return !Be.length && xe.ticker.remove(ua);
  }
  function xa(e) {
    for (var t = Be.length; t--; ) Be[t] === e && Be.splice(t, 1);
    xe.to(wa, { overwrite: !0, delay: 15, duration: 0, onComplete: wa, data: "_draggable" });
  }
  function za(e, t, n, o) {
    if (e.addEventListener) {
      var r = Me[t];
      (o = o || (d ? { passive: !1 } : null)), e.addEventListener(r || t, n, o), r && t !== r && e.addEventListener(t, n, o);
    }
  }
  function Aa(e, t, n, o) {
    if (e.removeEventListener) {
      var r = Me[t];
      e.removeEventListener(r || t, n, o), r && t !== r && e.removeEventListener(t, n, o);
    }
  }
  function Ba(e) {
    e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation();
  }
  function Da(e) {
    (Ee = e.touches && Ce < e.touches.length), Aa(e.target, "touchend", Da);
  }
  function Ea(e) {
    (Ee = e.touches && Ce < e.touches.length), za(e.target, "touchend", Da);
  }
  function Fa(e) {
    return me.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0;
  }
  function Ga(e) {
    return me.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0;
  }
  function Ha(e, t) {
    za(e, "scroll", t), We(e.parentNode) || Ha(e.parentNode, t);
  }
  function Ia(e, t) {
    Aa(e, "scroll", t), We(e.parentNode) || Ia(e.parentNode, t);
  }
  function Ka(e, t) {
    var n = "x" === t ? "Width" : "Height",
      o = "scroll" + n,
      r = "client" + n;
    return Math.max(0, We(e) ? Math.max(ve[o], l[o]) - (me["inner" + n] || ve[r] || l[r]) : e[o] - e[r]);
  }
  function La(e, t) {
    var n = Ka(e, "x"),
      o = Ka(e, "y");
    We(e) ? (e = Qe) : La(e.parentNode, t), (e._gsMaxScrollX = n), (e._gsMaxScrollY = o), t || ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
  }
  function Ma(e, t, n) {
    var o = e.style;
    o && (_(o[t]) && (t = c(t, e) || t), null == n ? o.removeProperty && o.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : (o[t] = n));
  }
  function Na(e) {
    return me.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e);
  }
  function Pa(e) {
    if (e === me)
      return (
        (p.left = p.top = 0),
        (p.width = p.right = ve.clientWidth || e.innerWidth || l.clientWidth || 0),
        (p.height = p.bottom = (e.innerHeight || 0) - 20 < ve.clientHeight ? ve.clientHeight : e.innerHeight || l.clientHeight || 0),
        p
      );
    var t = e.ownerDocument || ye,
      n = _(e.pageX)
        ? e.nodeType || _(e.left) || _(e.top)
          ? Te(e)[0].getBoundingClientRect()
          : e
        : { left: e.pageX - Ga(t), top: e.pageY - Fa(t), right: e.pageX - Ga(t) + 1, bottom: e.pageY - Fa(t) + 1 };
    return (
      _(n.right) && !_(n.width)
        ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
        : _(n.width) && (n = { width: n.right - n.left, height: n.bottom - n.top, right: n.right, left: n.left, bottom: n.bottom, top: n.top }),
      n
    );
  }
  function Qa(e, t, n) {
    var o,
      r = e.vars,
      i = r[n],
      a = e._listeners[t];
    return Z(i) && (o = i.apply(r.callbackScope || e, r[n + "Params"] || [e.pointerEvent])), a && !1 === e.dispatchEvent(t) && (o = !1), o;
  }
  function Ra(e, t) {
    var n,
      o,
      r,
      i = Te(e)[0];
    return i.nodeType || i === me
      ? B(i, t)
      : _(e.left)
      ? {
          left: (o = e.min || e.minX || e.minRotation || 0),
          top: (n = e.min || e.minY || 0),
          width: (e.max || e.maxX || e.maxRotation || 0) - o,
          height: (e.max || e.maxY || 0) - n,
        }
      : ((r = { x: 0, y: 0 }), { left: e.left - r.x, top: e.top - r.y, width: e.width, height: e.height });
  }
  function Ua(r, i, e, t, a, n) {
    var o,
      l,
      s,
      c = {};
    if (i)
      if (1 !== a && i instanceof Array) {
        if (((c.end = o = []), (s = i.length), $(i[0]))) for (l = 0; l < s; l++) o[l] = ra(i[l], a);
        else for (l = 0; l < s; l++) o[l] = i[l] * a;
        (e += 1.1), (t -= 1.1);
      } else
        Z(i)
          ? (c.end = function (e) {
              var t,
                n,
                o = i.call(r, e);
              if (1 !== a)
                if ($(o)) {
                  for (n in ((t = {}), o)) t[n] = o[n] * a;
                  o = t;
                } else o *= a;
              return o;
            })
          : (c.end = i);
    return (!e && 0 !== e) || (c.max = e), (!t && 0 !== t) || (c.min = t), n && (c.velocity = 0), c;
  }
  function Va(e) {
    var t;
    return (
      !(!e || !e.getAttribute || e === l) &&
      (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || (!o.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable")))) || Va(e.parentNode))
    );
  }
  function Wa(e, t) {
    for (var n, o = e.length; o--; ) ((n = e[o]).ondragstart = n.onselectstart = t ? null : aa), xe.set(n, { lazy: !0, userSelect: t ? "text" : "none" });
  }
  function $a(i, r) {
    (i = xe.utils.toArray(i)[0]), (r = r || {});
    var a,
      l,
      s,
      e,
      c,
      d,
      p = document.createElement("div"),
      u = p.style,
      t = i.firstChild,
      h = 0,
      f = 0,
      g = i.scrollTop,
      x = i.scrollLeft,
      m = i.scrollWidth,
      y = i.scrollHeight,
      v = 0,
      w = 0,
      b = 0;
    k && !1 !== r.force3D ? ((c = "translate3d("), (d = "px,0px)")) : R && ((c = "translate("), (d = "px)")),
      (this.scrollTop = function (e, t) {
        if (!arguments.length) return -this.top();
        this.top(-e, t);
      }),
      (this.scrollLeft = function (e, t) {
        if (!arguments.length) return -this.left();
        this.left(-e, t);
      }),
      (this.left = function (e, t) {
        if (!arguments.length) return -(i.scrollLeft + f);
        var n = i.scrollLeft - x,
          o = f;
        if ((2 < n || n < -2) && !t) return (x = i.scrollLeft), xe.killTweensOf(this, { left: 1, scrollLeft: 1 }), this.left(-x), void (r.onKill && r.onKill());
        (e = -e) < 0 ? ((f = (e - 0.5) | 0), (e = 0)) : w < e ? ((f = (e - w) | 0), (e = w)) : (f = 0),
          (f || o) && (this._skip || (u[R] = c + -f + "px," + -h + d), 0 <= f + v && (u.paddingRight = f + v + "px")),
          (i.scrollLeft = 0 | e),
          (x = i.scrollLeft);
      }),
      (this.top = function (e, t) {
        if (!arguments.length) return -(i.scrollTop + h);
        var n = i.scrollTop - g,
          o = h;
        if ((2 < n || n < -2) && !t) return (g = i.scrollTop), xe.killTweensOf(this, { top: 1, scrollTop: 1 }), this.top(-g), void (r.onKill && r.onKill());
        (e = -e) < 0 ? ((h = (e - 0.5) | 0), (e = 0)) : b < e ? ((h = (e - b) | 0), (e = b)) : (h = 0),
          (h || o) && (this._skip || (u[R] = c + -f + "px," + -h + d)),
          (i.scrollTop = 0 | e),
          (g = i.scrollTop);
      }),
      (this.maxScrollTop = function () {
        return b;
      }),
      (this.maxScrollLeft = function () {
        return w;
      }),
      (this.disable = function () {
        for (t = p.firstChild; t; ) (e = t.nextSibling), i.appendChild(t), (t = e);
        i === p.parentNode && i.removeChild(p);
      }),
      (this.enable = function () {
        if ((t = i.firstChild) !== p) {
          for (; t; ) (e = t.nextSibling), p.appendChild(t), (t = e);
          i.appendChild(p), this.calibrate();
        }
      }),
      (this.calibrate = function (e) {
        var t,
          n,
          o,
          r = i.clientWidth === a;
        (g = i.scrollTop),
          (x = i.scrollLeft),
          (r && i.clientHeight === l && p.offsetHeight === s && m === i.scrollWidth && y === i.scrollHeight && !e) ||
            ((h || f) && ((n = this.left()), (o = this.top()), this.left(-i.scrollLeft), this.top(-i.scrollTop)),
            (t = Na(i)),
            (r && !e) ||
              ((u.display = "block"),
              (u.width = "auto"),
              (u.paddingRight = "0px"),
              (v = Math.max(0, i.scrollWidth - i.clientWidth)) && (v += parseFloat(t.paddingLeft) + (O ? parseFloat(t.paddingRight) : 0))),
            (u.display = "inline-block"),
            (u.position = "relative"),
            (u.overflow = "visible"),
            (u.verticalAlign = "top"),
            (u.boxSizing = "content-box"),
            (u.width = "100%"),
            (u.paddingRight = v + "px"),
            O && (u.paddingBottom = t.paddingBottom),
            (a = i.clientWidth),
            (l = i.clientHeight),
            (m = i.scrollWidth),
            (y = i.scrollHeight),
            (w = i.scrollWidth - a),
            (b = i.scrollHeight - l),
            (s = p.offsetHeight),
            (u.display = "block"),
            (n || o) && (this.left(n), this.top(o)));
      }),
      (this.content = p),
      (this.element = i),
      (this._skip = !1),
      this.enable();
  }
  function _a(e) {
    if (X() && document.body) {
      var t = window && window.navigator;
      (me = window),
        (ye = document),
        (ve = ye.documentElement),
        (l = ye.body),
        (s = fa("div")),
        (Pe = !!window.PointerEvent),
        ((we = fa("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (Xe = "grab" === we.style.cursor ? "grab" : "move"),
        (_e = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
        (De = ("ontouchstart" in ve && "orientation" in me) || (t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints))),
        (o = fa("div")),
        (r = fa("div")),
        (i = r.style),
        (a = l),
        (i.display = "inline-block"),
        (i.position = "relative"),
        (o.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
        o.appendChild(r),
        a.appendChild(o),
        (n = r.offsetHeight + 18 > o.scrollHeight),
        a.removeChild(o),
        (O = n),
        (Me = (function (e) {
          for (
            var t = e.split(","),
              n = (
                ("onpointerdown" in s)
                  ? "pointerdown,pointermove,pointerup,pointercancel"
                  : ("onmspointerdown" in s)
                  ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                  : e
              ).split(","),
              o = {},
              r = 4;
            -1 < --r;

          )
            (o[t[r]] = n[r]), (o[n[r]] = t[r]);
          try {
            ve.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function get() {
                  d = 1;
                },
              })
            );
          } catch (e) {}
          return o;
        })("touchstart,touchmove,touchend,touchcancel")),
        za(ye, "touchcancel", aa),
        za(me, "touchmove", aa),
        l && l.addEventListener("touchstart", aa),
        za(ye, "contextmenu", function () {
          for (var e in ze) ze[e].isPressed && ze[e].endDrag();
        }),
        (xe = be = Y());
    }
    var n, o, r, i, a;
    xe
      ? ((Se = xe.plugins.inertia),
        (Le = xe.core.context || function () {}),
        (c = xe.utils.checkPrefix),
        (R = c(R)),
        (Ne = c(Ne)),
        (Te = xe.utils.toArray),
        (Ye = xe.core.getStyleSaver),
        (k = !!c("perspective")))
      : e && console.warn("Please gsap.registerPlugin(Draggable)");
  }
  var xe,
    me,
    ye,
    ve,
    l,
    s,
    we,
    be,
    c,
    Te,
    d,
    De,
    Me,
    Ee,
    _e,
    Se,
    Xe,
    Pe,
    Le,
    Ye,
    k,
    O,
    n,
    Ce = 0,
    R = "transform",
    Ne = "transformOrigin",
    ke = Array.isArray,
    Ae = 180 / Math.PI,
    Oe = 1e20,
    a = new ge(),
    Re =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    Be = [],
    ze = {},
    Fe = 0,
    o = /^(?:a|input|textarea|button|select)$/i,
    Ie = 0,
    He = {},
    Qe = {},
    We = function _isRoot(e) {
      return !(e && e !== ve && 9 !== e.nodeType && e !== ye.body && e !== me && e.nodeType && e.parentNode);
    },
    p = {},
    Ge = {},
    B = function _getElementBounds(e, t) {
      t = Te(t)[0];
      var n,
        o,
        r,
        i,
        a,
        l,
        s,
        c,
        d,
        p,
        u,
        h,
        f,
        g = e.getBBox && e.ownerSVGElement,
        x = e.ownerDocument || ye;
      if (e === me)
        (r = Fa(x)),
          (o = (n = Ga(x)) + (x.documentElement.clientWidth || e.innerWidth || x.body.clientWidth || 0)),
          (i = r + ((e.innerHeight || 0) - 20 < x.documentElement.clientHeight ? x.documentElement.clientHeight : e.innerHeight || x.body.clientHeight || 0));
      else {
        if (t === me || _(t)) return e.getBoundingClientRect();
        (n = r = 0),
          g
            ? ((u = (p = e.getBBox()).width), (h = p.height))
            : (e.viewBox && (p = e.viewBox.baseVal) && ((n = p.x || 0), (r = p.y || 0), (u = p.width), (h = p.height)),
              u ||
                ((p = "border-box" === (f = Na(e)).boxSizing),
                (u = (parseFloat(f.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(f.borderLeftWidth) + parseFloat(f.borderRightWidth))),
                (h = (parseFloat(f.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(f.borderTopWidth) + parseFloat(f.borderBottomWidth))))),
          (o = u),
          (i = h);
      }
      return e === t
        ? { left: n, top: r, width: o - n, height: i - r }
        : ((l = (a = getGlobalMatrix(t, !0).multiply(getGlobalMatrix(e))).apply({ x: n, y: r })),
          (s = a.apply({ x: o, y: r })),
          (c = a.apply({ x: o, y: i })),
          (d = a.apply({ x: n, y: i })),
          { left: (n = Math.min(l.x, s.x, c.x, d.x)), top: (r = Math.min(l.y, s.y, c.y, d.y)), width: Math.max(l.x, s.x, c.x, d.x) - n, height: Math.max(l.y, s.y, c.y, d.y) - r });
    },
    z =
      (((n = EventDispatcher.prototype).addEventListener = function addEventListener(e, t) {
        var n = this._listeners[e] || (this._listeners[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      (n.removeEventListener = function removeEventListener(e, t) {
        var n = this._listeners[e],
          o = n && n.indexOf(t);
        0 <= o && n.splice(o, 1);
      }),
      (n.dispatchEvent = function dispatchEvent(t) {
        var n,
          o = this;
        return (
          (this._listeners[t] || []).forEach(function (e) {
            return !1 === e.call(o, { type: t, target: o.target }) && (n = !1);
          }),
          n
        );
      }),
      EventDispatcher);
  function EventDispatcher(e) {
    (this._listeners = {}), (this.target = e || this);
  }
  var Ke,
    F =
      ((function _inheritsLoose(e, t) {
        (e.prototype = Object.create(t.prototype)), ((e.prototype.constructor = e).__proto__ = t);
      })(Draggable, (Ke = z)),
      (Draggable.register = function register(e) {
        (xe = e), _a();
      }),
      (Draggable.create = function create(e, t) {
        return (
          be || _a(!0),
          Te(e).map(function (e) {
            return new Draggable(e, t);
          })
        );
      }),
      (Draggable.get = function get(e) {
        return ze[(Te(e)[0] || {})._gsDragID];
      }),
      (Draggable.timeSinceDrag = function timeSinceDrag() {
        return (Re() - Ie) / 1e3;
      }),
      (Draggable.hitTest = function hitTest(e, t, n) {
        if (e === t) return !1;
        var o,
          r,
          i,
          a = Pa(e),
          l = Pa(t),
          s = a.top,
          c = a.left,
          d = a.right,
          p = a.bottom,
          u = a.width,
          h = a.height,
          f = l.left > d || l.right < c || l.top > p || l.bottom < s;
        return f || !n
          ? !f
          : ((i = -1 !== (n + "").indexOf("%")),
            (n = parseFloat(n) || 0),
            ((o = { left: Math.max(c, l.left), top: Math.max(s, l.top) }).width = Math.min(d, l.right) - o.left),
            (o.height = Math.min(p, l.bottom) - o.top),
            !(o.width < 0 || o.height < 0) && (i ? u * h * (n *= 0.01) <= (r = o.width * o.height) || r >= l.width * l.height * n : o.width > n && o.height > n));
      }),
      Draggable);
  function Draggable(h, p) {
    var e;
    (e = Ke.call(this) || this),
      be || _a(1),
      (h = Te(h)[0]),
      (e.styles = Ye && Ye(h, "transform,left,top")),
      (Se = Se || xe.plugins.inertia),
      (e.vars = p = ra(p || {})),
      (e.target = h),
      (e.x = e.y = e.rotation = 0),
      (e.dragResistance = parseFloat(p.dragResistance) || 0),
      (e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0),
      (e.lockAxis = p.lockAxis),
      (e.autoScroll = p.autoScroll || 0),
      (e.lockedAxis = null),
      (e.allowEventDefault = !!p.allowEventDefault),
      xe.getProperty(h, "x");
    function Qg(e, t) {
      return parseFloat(se.get(h, e, t));
    }
    function xh(e) {
      return Ba(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1;
    }
    function yh(e) {
      if (q.autoScroll && q.isDragging && (te || Y)) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l,
          s,
          c = h,
          d = 15 * q.autoScroll;
        for (
          te = !1,
            Qe.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop,
            Qe.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft,
            r = q.pointerX - Qe.scrollLeft,
            i = q.pointerY - Qe.scrollTop;
          c && !n;

        )
          (t = (n = We(c.parentNode)) ? Qe : c.parentNode),
            (o = n ? { bottom: Math.max(ve.clientHeight, me.innerHeight || 0), right: Math.max(ve.clientWidth, me.innerWidth || 0), left: 0, top: 0 } : t.getBoundingClientRect()),
            (a = l = 0),
            U &&
              ((s = t._gsMaxScrollY - t.scrollTop) < 0
                ? (l = s)
                : i > o.bottom - re && s
                ? ((te = !0), (l = Math.min(s, (d * (1 - Math.max(0, o.bottom - i) / re)) | 0)))
                : i < o.top + ne && t.scrollTop && ((te = !0), (l = -Math.min(t.scrollTop, (d * (1 - Math.max(0, i - o.top) / ne)) | 0))),
              l && (t.scrollTop += l)),
            V &&
              ((s = t._gsMaxScrollX - t.scrollLeft) < 0
                ? (a = s)
                : r > o.right - oe && s
                ? ((te = !0), (a = Math.min(s, (d * (1 - Math.max(0, o.right - r) / oe)) | 0)))
                : r < o.left + ie && t.scrollLeft && ((te = !0), (a = -Math.min(t.scrollLeft, (d * (1 - Math.max(0, r - o.left) / ie)) | 0))),
              a && (t.scrollLeft += a)),
            n && (a || l) && (me.scrollTo(t.scrollLeft, t.scrollTop), he(q.pointerX + a, q.pointerY + l)),
            (c = t);
      }
      if (Y) {
        var p = q.x,
          u = q.y;
        W
          ? ((q.deltaX = p - parseFloat(se.rotation)), (q.rotation = p), (se.rotation = p + "deg"), se.renderTransform(1, se))
          : f
          ? (U && ((q.deltaY = u - f.top()), f.top(u)), V && ((q.deltaX = p - f.left()), f.left(p)))
          : Q
          ? (U && ((q.deltaY = u - parseFloat(se.y)), (se.y = u + "px")), V && ((q.deltaX = p - parseFloat(se.x)), (se.x = p + "px")), se.renderTransform(1, se))
          : (U && ((q.deltaY = u - parseFloat(h.style.top || 0)), (h.style.top = u + "px")), V && ((q.deltaX = p - parseFloat(h.style.left || 0)), (h.style.left = p + "px"))),
          !g || e || z || (!(z = !0) === Qa(q, "drag", "onDrag") && (V && (q.x -= q.deltaX), U && (q.y -= q.deltaY), yh(!0)), (z = !1));
      }
      Y = !1;
    }
    function zh(e, t) {
      var n,
        o,
        r = q.x,
        i = q.y;
      h._gsap || (se = xe.core.getCache(h)),
        se.uncache && xe.getProperty(h, "x"),
        Q
          ? ((q.x = parseFloat(se.x)), (q.y = parseFloat(se.y)))
          : W
          ? (q.x = q.rotation = parseFloat(se.rotation))
          : f
          ? ((q.y = f.top()), (q.x = f.left()))
          : ((q.y = parseFloat(h.style.top || ((o = Na(h)) && o.top)) || 0), (q.x = parseFloat(h.style.left || (o || {}).left) || 0)),
        (C || N || k) &&
          !t &&
          (q.isDragging || q.isThrowing) &&
          (k && ((He.x = q.x), (He.y = q.y), (n = k(He)).x !== q.x && ((q.x = n.x), (Y = !0)), n.y !== q.y && ((q.y = n.y), (Y = !0))),
          C && (n = C(q.x)) !== q.x && ((q.x = n), W && (q.rotation = n), (Y = !0)),
          N && ((n = N(q.y)) !== q.y && (q.y = n), (Y = !0))),
        Y && yh(!0),
        e || ((q.deltaX = q.x - r), (q.deltaY = q.y - i), Qa(q, "throwupdate", "onThrowUpdate"));
    }
    function Ah(a, l, s, n) {
      return (
        null == l && (l = -Oe),
        null == s && (s = Oe),
        Z(a)
          ? function (e) {
              var t = q.isPressed ? 1 - q.edgeResistance : 1;
              return a.call(q, (s < e ? s + (e - s) * t : e < l ? l + (e - l) * t : e) * n) * n;
            }
          : ke(a)
          ? function (e) {
              for (var t, n, o = a.length, r = 0, i = Oe; -1 < --o; ) (n = (t = a[o]) - e) < 0 && (n = -n), n < i && l <= t && t <= s && ((r = o), (i = n));
              return a[r];
            }
          : isNaN(a)
          ? function (e) {
              return e;
            }
          : function () {
              return a * n;
            }
      );
    }
    function Ch() {
      var e, t, n, o;
      (M = !1),
        f
          ? (f.calibrate(), (q.minX = S = -f.maxScrollLeft()), (q.minY = P = -f.maxScrollTop()), (q.maxX = E = q.maxY = X = 0), (M = !0))
          : p.bounds &&
            ((e = Ra(p.bounds, h.parentNode)),
            W
              ? ((q.minX = S = e.left), (q.maxX = E = e.left + e.width), (q.minY = P = q.maxY = X = 0))
              : _(p.bounds.maxX) && _(p.bounds.maxY)
              ? ((t = Ra(h, h.parentNode)),
                (q.minX = S = Math.round(Qg(G, "px") + e.left - t.left)),
                (q.minY = P = Math.round(Qg(K, "px") + e.top - t.top)),
                (q.maxX = E = Math.round(S + (e.width - t.width))),
                (q.maxY = X = Math.round(P + (e.height - t.height))))
              : ((e = p.bounds), (q.minX = S = e.minX), (q.minY = P = e.minY), (q.maxX = E = e.maxX), (q.maxY = X = e.maxY)),
            E < S && ((q.minX = E), (q.maxX = E = S), (S = q.minX)),
            X < P && ((q.minY = X), (q.maxY = X = P), (P = q.minY)),
            W && ((q.minRotation = S), (q.maxRotation = E)),
            (M = !0)),
        p.liveSnap &&
          ((n = !0 === p.liveSnap ? p.snap || {} : p.liveSnap),
          (o = ke(n) || Z(n)),
          W
            ? ((C = Ah(o ? n : n.rotation, S, E, 1)), (N = null))
            : n.points
            ? (k = (function buildPointSnapFunc(s, l, c, d, p, u, h) {
                return (
                  (u = u && u < Oe ? u * u : Oe),
                  Z(s)
                    ? function (e) {
                        var t,
                          n,
                          o,
                          r = q.isPressed ? 1 - q.edgeResistance : 1,
                          i = e.x,
                          a = e.y;
                        return (
                          (e.x = i = c < i ? c + (i - c) * r : i < l ? l + (i - l) * r : i),
                          (e.y = a = p < a ? p + (a - p) * r : a < d ? d + (a - d) * r : a),
                          (t = s.call(q, e)) !== e && ((e.x = t.x), (e.y = t.y)),
                          1 !== h && ((e.x *= h), (e.y *= h)),
                          u < Oe && ((n = e.x - i), (o = e.y - a), u < n * n + o * o && ((e.x = i), (e.y = a))),
                          e
                        );
                      }
                    : ke(s)
                    ? function (e) {
                        for (var t, n, o, r, i = s.length, a = 0, l = Oe; -1 < --i; ) (r = (t = (o = s[i]).x - e.x) * t + (n = o.y - e.y) * n) < l && ((a = i), (l = r));
                        return l <= u ? s[a] : e;
                      }
                    : function (e) {
                        return e;
                      }
                );
              })(o ? n : n.points, S, E, P, X, n.radius, f ? -1 : 1))
            : (V && (C = Ah(o ? n : n.x || n.left || n.scrollLeft, S, E, f ? -1 : 1)), U && (N = Ah(o ? n : n.y || n.top || n.scrollTop, P, X, f ? -1 : 1))));
    }
    function Dh() {
      (q.isThrowing = !1), Qa(q, "throwcomplete", "onThrowComplete");
    }
    function Eh() {
      q.isThrowing = !1;
    }
    function Fh(e, t) {
      var n, o, r, i;
      e && Se
        ? (!0 === e &&
            ((n = p.snap || p.liveSnap || {}),
            (o = ke(n) || Z(n)),
            (e = { resistance: (p.throwResistance || p.resistance || 1e3) / (W ? 10 : 1) }),
            W
              ? (e.rotation = Ua(q, o ? n : n.rotation, E, S, 1, t))
              : (V && (e[G] = Ua(q, o ? n : n.points || n.x || n.left, E, S, f ? -1 : 1, t || "x" === q.lockedAxis)),
                U && (e[K] = Ua(q, o ? n : n.points || n.y || n.top, X, P, f ? -1 : 1, t || "y" === q.lockedAxis)),
                (n.points || (ke(n) && $(n[0]))) && ((e.linkedProps = G + "," + K), (e.radius = n.radius)))),
          (q.isThrowing = !0),
          (i = isNaN(p.overshootTolerance) ? (1 === p.edgeResistance ? 0 : 1 - q.edgeResistance + 0.2) : p.overshootTolerance),
          e.duration ||
            (e.duration = {
              max: Math.max(p.minDuration || 0, "maxDuration" in p ? p.maxDuration : 2),
              min: isNaN(p.minDuration) ? (0 === i || ($(e) && 1e3 < e.resistance) ? 0 : 0.5) : p.minDuration,
              overshoot: i,
            }),
          (q.tween = r =
            xe.to(f || h, {
              inertia: e,
              data: "_draggable",
              onComplete: Dh,
              onInterrupt: Eh,
              onUpdate: p.fastMode ? Qa : zh,
              onUpdateParams: p.fastMode ? [q, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : [],
            })),
          p.fastMode ||
            (f && (f._skip = !0), r.render(1e9, !0, !0), zh(!0, !0), (q.endX = q.x), (q.endY = q.y), W && (q.endRotation = q.x), r.play(0), zh(!0, !0), f && (f._skip = !1)))
        : M && q.applyBounds();
    }
    function Gh(e) {
      var t,
        n = A;
      (A = getGlobalMatrix(h.parentNode, !0)),
        e && q.isPressed && !A.equals(n || new ge()) && ((t = n.inverse().apply({ x: w, y: b })), A.apply(t, t), (w = t.x), (b = t.y)),
        A.equals(a) && (A = null);
    }
    function Hh() {
      var e,
        t,
        n,
        o = 1 - q.edgeResistance,
        r = ce ? Ga(de) : 0,
        i = ce ? Fa(de) : 0;
      Q && ((se.x = Qg(G, "px") + "px"), (se.y = Qg(K, "px") + "px"), se.renderTransform()),
        Gh(!1),
        (Ge.x = q.pointerX - r),
        (Ge.y = q.pointerY - i),
        A && A.apply(Ge, Ge),
        (w = Ge.x),
        (b = Ge.y),
        Y && (he(q.pointerX, q.pointerY), yh(!0)),
        (d = getGlobalMatrix(h)),
        f
          ? (Ch(), (D = f.top()), (T = f.left()))
          : (pe() ? (zh(!0, !0), Ch()) : q.applyBounds(),
            W
              ? ((e = h.ownerSVGElement ? [se.xOrigin - h.getBBox().x, se.yOrigin - h.getBBox().y] : (Na(h)[Ne] || "0 0").split(" ")),
                (L = q.rotationOrigin = getGlobalMatrix(h).apply({ x: parseFloat(e[0]) || 0, y: parseFloat(e[1]) || 0 })),
                zh(!0, !0),
                (t = q.pointerX - L.x - r),
                (n = L.y - q.pointerY + i),
                (T = q.x),
                (D = q.y = Math.atan2(n, t) * Ae))
              : ((D = Qg(K, "px")), (T = Qg(G, "px")))),
        M && o && (E < T ? (T = E + (T - E) / o) : T < S && (T = S - (S - T) / o), W || (X < D ? (D = X + (D - X) / o) : D < P && (D = P - (P - D) / o))),
        (q.startX = T = da(T)),
        (q.startY = D = da(D));
    }
    function Jh() {
      !we.parentNode || pe() || q.isDragging || we.parentNode.removeChild(we);
    }
    function Kh(e, t) {
      var n;
      if (!u || q.isPressed || !e || (!(("mousedown" !== e.type && "pointerdown" !== e.type) || t) && Re() - le < 30 && Me[q.pointerEvent.type])) I && e && u && Ba(e);
      else {
        if (
          ((O = pe()),
          (H = !1),
          (q.pointerEvent = e),
          Me[e.type]
            ? ((v = ~e.type.indexOf("touch") ? e.currentTarget || e.target : de), za(v, "touchend", fe), za(v, "touchmove", ue), za(v, "touchcancel", fe), za(de, "touchstart", Ea))
            : ((v = null), za(de, "mousemove", ue)),
          (B = null),
          (Pe && v) || (za(de, "mouseup", fe), e && e.target && za(e.target, "mouseup", fe)),
          (y = ae.call(q, e.target) && !1 === p.dragClickables && !t))
        )
          return za(e.target, "change", fe), Qa(q, "pressInit", "onPressInit"), Qa(q, "press", "onPress"), Wa(J, !0), void (I = !1);
        if (
          ((R = !(!v || V == U || !1 === q.vars.allowNativeTouchScrolling || (q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which))) && (V ? "y" : "x")),
          (I = !R && !q.allowEventDefault) && (Ba(e), za(me, "touchforcechange", Ba)),
          e.changedTouches ? ((e = x = e.changedTouches[0]), (m = e.identifier)) : e.pointerId ? (m = e.pointerId) : (x = m = null),
          Ce++,
          (function _addToRenderQueue(e) {
            Be.push(e), 1 === Be.length && xe.ticker.add(ua);
          })(yh),
          (b = q.pointerY = e.pageY),
          (w = q.pointerX = e.pageX),
          Qa(q, "pressInit", "onPressInit"),
          (R || q.autoScroll) && La(h.parentNode),
          !h.parentNode ||
            !q.autoScroll ||
            f ||
            W ||
            !h.parentNode._gsMaxScrollX ||
            we.parentNode ||
            h.getBBox ||
            ((we.style.width = h.parentNode.scrollWidth + "px"), h.parentNode.appendChild(we)),
          Hh(),
          q.tween && q.tween.kill(),
          (q.isThrowing = !1),
          xe.killTweensOf(f || h, o, !0),
          f && xe.killTweensOf(h, { scrollTo: 1 }, !0),
          (q.tween = q.lockedAxis = null),
          (!p.zIndexBoost && (W || f || !1 === p.zIndexBoost)) || (h.style.zIndex = Draggable.zIndex++),
          (q.isPressed = !0),
          (g = !(!p.onDrag && !q._listeners.drag)),
          (s = !(!p.onMove && !q._listeners.move)),
          !1 !== p.cursor || p.activeCursor)
        )
          for (n = J.length; -1 < --n; ) xe.set(J[n], { cursor: p.activeCursor || p.cursor || ("grab" === Xe ? "grabbing" : Xe) });
        Qa(q, "press", "onPress");
      }
    }
    function Oh(e) {
      if (e && q.isDragging && !f) {
        var t = e.target || h.parentNode,
          n = t.scrollLeft - t._gsScrollX,
          o = t.scrollTop - t._gsScrollY;
        (n || o) && (A ? ((w -= n * A.a + o * A.c), (b -= o * A.d + n * A.b)) : ((w -= n), (b -= o)), (t._gsScrollX += n), (t._gsScrollY += o), he(q.pointerX, q.pointerY));
      }
    }
    function Ph(e) {
      var t = Re(),
        n = t - le < 100,
        o = t - ee < 50,
        r = n && F === le,
        i = q.pointerEvent && q.pointerEvent.defaultPrevented,
        a = n && c === le,
        l = e.isTrusted || (null == e.isTrusted && n && r);
      if (
        ((r || (o && !1 !== q.vars.suppressClickOnDrag)) && e.stopImmediatePropagation && e.stopImmediatePropagation(),
        n && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!r || (l && !a)))
      )
        return l && r && (c = le), void (F = le);
      (q.isPressed || o || n) && ((l && e.detail && n && !i) || Ba(e)), n || o || H || (e && e.target && (q.pointerEvent = e), Qa(q, "click", "onClick"));
    }
    function Qh(e) {
      return A ? { x: e.x * A.a + e.y * A.c + A.e, y: e.x * A.b + e.y * A.d + A.f } : { x: e.x, y: e.y };
    }
    var u,
      f,
      w,
      b,
      T,
      D,
      M,
      g,
      s,
      E,
      S,
      X,
      P,
      x,
      m,
      L,
      Y,
      t,
      C,
      N,
      k,
      y,
      v,
      A,
      O,
      R,
      B,
      z,
      F,
      c,
      I,
      d,
      H,
      n = (p.type || "x,y").toLowerCase(),
      Q = ~n.indexOf("x") || ~n.indexOf("y"),
      W = -1 !== n.indexOf("rotation"),
      G = W ? "rotation" : Q ? "x" : "left",
      K = Q ? "y" : "top",
      V = !(!~n.indexOf("x") && !~n.indexOf("left") && "scroll" !== n),
      U = !(!~n.indexOf("y") && !~n.indexOf("top") && "scroll" !== n),
      j = p.minimumMovement || 2,
      q = _assertThisInitialized(e),
      J = Te(p.trigger || p.handle || h),
      o = {},
      ee = 0,
      te = !1,
      ne = p.autoScrollMarginTop || 40,
      oe = p.autoScrollMarginRight || 40,
      re = p.autoScrollMarginBottom || 40,
      ie = p.autoScrollMarginLeft || 40,
      ae = p.clickableTest || Va,
      le = 0,
      se = h._gsap || xe.core.getCache(h),
      ce = (function _isFixed(e) {
        return "fixed" === Na(e).position || ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0);
      })(h),
      de = h.ownerDocument || ye,
      pe = function isTweening() {
        return q.tween && q.tween.isActive();
      },
      ue = function onMove(e) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l = e;
        if (u && !Ee && q.isPressed && e) {
          if ((t = (q.pointerEvent = e).changedTouches)) {
            if ((e = t[0]) !== x && e.identifier !== m) {
              for (r = t.length; -1 < --r && (e = t[r]).identifier !== m && e.target !== h; );
              if (r < 0) return;
            }
          } else if (e.pointerId && m && e.pointerId !== m) return;
          v &&
          R &&
          !B &&
          ((Ge.x = e.pageX - (ce ? Ga(de) : 0)),
          (Ge.y = e.pageY - (ce ? Fa(de) : 0)),
          A && A.apply(Ge, Ge),
          (n = Ge.x),
          (o = Ge.y),
          (((i = Math.abs(n - w)) !== (a = Math.abs(o - b)) && (j < i || j < a)) || (_e && R === B)) &&
            ((B = a < i && V ? "x" : "y"),
            R && B !== R && za(me, "touchforcechange", Ba),
            !1 !== q.vars.lockAxisOnTouchScroll && V && U && ((q.lockedAxis = "x" === B ? "y" : "x"), Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, l)),
            _e && R === B))
            ? fe(l)
            : ((I = q.allowEventDefault || (R && (!B || R === B)) || !1 === l.cancelable ? I && !1 : (Ba(l), !0)), q.autoScroll && (te = !0), he(e.pageX, e.pageY, s));
        } else I && e && u && Ba(e);
      },
      he = function setPointerPosition(e, t, n) {
        var o,
          r,
          i,
          a,
          l,
          s,
          c = 1 - q.dragResistance,
          d = 1 - q.edgeResistance,
          p = q.pointerX,
          u = q.pointerY,
          h = D,
          f = q.x,
          g = q.y,
          x = q.endX,
          m = q.endY,
          y = q.endRotation,
          v = Y;
        (q.pointerX = e),
          (q.pointerY = t),
          ce && ((e -= Ga(de)), (t -= Fa(de))),
          W
            ? ((a = Math.atan2(L.y - t, e - L.x) * Ae),
              180 < (l = q.y - a) ? ((D -= 360), (q.y = a)) : l < -180 && ((D += 360), (q.y = a)),
              (i = q.x !== T || Math.abs(D - a) > j ? ((q.y = a), T + (D - a) * c) : T))
            : (A && ((s = e * A.a + t * A.c + A.e), (t = e * A.b + t * A.d + A.f), (e = s)),
              (r = t - b) < j && -j < r && (r = 0),
              (o = e - w) < j && -j < o && (o = 0),
              (q.lockAxis || q.lockedAxis) &&
                (o || r) &&
                ((s = q.lockedAxis) ||
                  ((q.lockedAxis = s = V && Math.abs(o) > Math.abs(r) ? "y" : U ? "x" : null), s && Z(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)),
                "y" === s ? (r = 0) : "x" === s && (o = 0)),
              (i = da(T + o * c)),
              (a = da(D + r * c))),
          (C || N || k) && (q.x !== i || (q.y !== a && !W)) && (k && ((He.x = i), (He.y = a), (s = k(He)), (i = da(s.x)), (a = da(s.y))), C && (i = da(C(i))), N && (a = da(N(a)))),
          M &&
            (E < i ? (i = E + Math.round((i - E) * d)) : i < S && (i = S + Math.round((i - S) * d)),
            W || (X < a ? (a = Math.round(X + (a - X) * d)) : a < P && (a = Math.round(P + (a - P) * d)))),
          (q.x === i && (q.y === a || W)) ||
            (W ? ((q.endRotation = q.x = q.endX = i), (Y = !0)) : (U && ((q.y = q.endY = a), (Y = !0)), V && ((q.x = q.endX = i), (Y = !0))),
            n && !1 === Qa(q, "move", "onMove")
              ? ((q.pointerX = p), (q.pointerY = u), (D = h), (q.x = f), (q.y = g), (q.endX = x), (q.endY = m), (q.endRotation = y), (Y = v))
              : !q.isDragging && q.isPressed && ((q.isDragging = H = !0), Qa(q, "dragstart", "onDragStart")));
      },
      fe = function onRelease(e, t) {
        if (
          u &&
          q.isPressed &&
          (!e ||
            null == m ||
            t ||
            !(
              (e.pointerId && e.pointerId !== m && e.target !== h) ||
              (e.changedTouches &&
                !(function _hasTouchID(e, t) {
                  for (var n = e.length; n--; ) if (e[n].identifier === t) return !0;
                })(e.changedTouches, m))
            ))
        ) {
          q.isPressed = !1;
          var n,
            o,
            r,
            i,
            a,
            l = e,
            s = q.isDragging,
            c = q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which),
            d = xe.delayedCall(0.001, Jh);
          if (
            (v ? (Aa(v, "touchend", onRelease), Aa(v, "touchmove", ue), Aa(v, "touchcancel", onRelease), Aa(de, "touchstart", Ea)) : Aa(de, "mousemove", ue),
            Aa(me, "touchforcechange", Ba),
            (Pe && v) || (Aa(de, "mouseup", onRelease), e && e.target && Aa(e.target, "mouseup", onRelease)),
            (Y = !1),
            s && ((ee = Ie = Re()), (q.isDragging = !1)),
            xa(yh),
            y && !c)
          )
            return e && (Aa(e.target, "change", onRelease), (q.pointerEvent = l)), Wa(J, !1), Qa(q, "release", "onRelease"), Qa(q, "click", "onClick"), void (y = !1);
          for (o = J.length; -1 < --o; ) Ma(J[o], "cursor", p.cursor || (!1 !== p.cursor ? Xe : null));
          if ((Ce--, e)) {
            if ((n = e.changedTouches) && (e = n[0]) !== x && e.identifier !== m) {
              for (o = n.length; -1 < --o && (e = n[o]).identifier !== m && e.target !== h; );
              if (o < 0 && !t) return;
            }
            (q.pointerEvent = l), (q.pointerX = e.pageX), (q.pointerY = e.pageY);
          }
          return (
            c && l
              ? (Ba(l), (I = !0), Qa(q, "release", "onRelease"))
              : l && !s
              ? ((I = !1),
                O && (p.snap || p.bounds) && Fh(p.inertia || p.throwProps),
                Qa(q, "release", "onRelease"),
                (_e && "touchmove" === l.type) ||
                  -1 !== l.type.indexOf("cancel") ||
                  (Qa(q, "click", "onClick"),
                  Re() - le < 300 && Qa(q, "doubleclick", "onDoubleClick"),
                  (i = l.target || h),
                  (le = Re()),
                  (a = function syntheticClick() {
                    le === F ||
                      !q.enabled() ||
                      q.isPressed ||
                      l.defaultPrevented ||
                      (i.click
                        ? i.click()
                        : de.createEvent &&
                          ((r = de.createEvent("MouseEvents")).initMouseEvent(
                            "click",
                            !0,
                            !0,
                            me,
                            1,
                            q.pointerEvent.screenX,
                            q.pointerEvent.screenY,
                            q.pointerX,
                            q.pointerY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                          i.dispatchEvent(r)));
                  }),
                  _e || l.defaultPrevented || xe.delayedCall(0.05, a)))
              : (Fh(p.inertia || p.throwProps),
                q.allowEventDefault || !l || (!1 === p.dragClickables && ae.call(q, l.target)) || !s || (R && (!B || R !== B)) || !1 === l.cancelable
                  ? (I = !1)
                  : ((I = !0), Ba(l)),
                Qa(q, "release", "onRelease")),
            pe() && d.duration(q.tween.duration()),
            s && Qa(q, "dragend", "onDragEnd"),
            !0
          );
        }
        I && e && u && Ba(e);
      };
    return (
      (t = Draggable.get(h)) && t.kill(),
      (e.startDrag = function (e, t) {
        var n, o, r, i;
        Kh(e || q.pointerEvent, !0),
          t &&
            !q.hitTest(e || q.pointerEvent) &&
            ((n = Pa(e || q.pointerEvent)),
            (o = Pa(h)),
            (r = Qh({ x: n.left + n.width / 2, y: n.top + n.height / 2 })),
            (i = Qh({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
            (w -= r.x - i.x),
            (b -= r.y - i.y)),
          q.isDragging || ((q.isDragging = H = !0), Qa(q, "dragstart", "onDragStart"));
      }),
      (e.drag = ue),
      (e.endDrag = function (e) {
        return fe(e || q.pointerEvent, !0);
      }),
      (e.timeSinceDrag = function () {
        return q.isDragging ? 0 : (Re() - ee) / 1e3;
      }),
      (e.timeSinceClick = function () {
        return (Re() - le) / 1e3;
      }),
      (e.hitTest = function (e, t) {
        return Draggable.hitTest(q.target, e, t);
      }),
      (e.getDirection = function (e, t) {
        var n,
          o,
          r,
          i,
          a,
          l,
          s = "velocity" === e && Se ? e : $(e) && !W ? "element" : "start";
        return (
          "element" === s && ((a = Pa(q.target)), (l = Pa(e))),
          (n = "start" === s ? q.x - T : "velocity" === s ? Se.getVelocity(h, G) : a.left + a.width / 2 - (l.left + l.width / 2)),
          W
            ? n < 0
              ? "counter-clockwise"
              : "clockwise"
            : ((t = t || 2),
              (o = "start" === s ? q.y - D : "velocity" === s ? Se.getVelocity(h, K) : a.top + a.height / 2 - (l.top + l.height / 2)),
              (i = (r = Math.abs(n / o)) < 1 / t ? "" : n < 0 ? "left" : "right"),
              r < t && ("" !== i && (i += "-"), (i += o < 0 ? "up" : "down")),
              i)
        );
      }),
      (e.applyBounds = function (e, t) {
        var n, o, r, i, a, l;
        if (e && p.bounds !== e) return (p.bounds = e), q.update(!0, t);
        if ((zh(!0), Ch(), M && !pe())) {
          if (
            ((n = q.x),
            (o = q.y),
            E < n ? (n = E) : n < S && (n = S),
            X < o ? (o = X) : o < P && (o = P),
            (q.x !== n || q.y !== o) && ((r = !0), (q.x = q.endX = n), W ? (q.endRotation = n) : (q.y = q.endY = o), yh((Y = !0)), q.autoScroll && !q.isDragging))
          )
            for (
              La(h.parentNode),
                i = h,
                Qe.scrollTop = null != me.pageYOffset ? me.pageYOffset : null != de.documentElement.scrollTop ? de.documentElement.scrollTop : de.body.scrollTop,
                Qe.scrollLeft = null != me.pageXOffset ? me.pageXOffset : null != de.documentElement.scrollLeft ? de.documentElement.scrollLeft : de.body.scrollLeft;
              i && !l;

            )
              (a = (l = We(i.parentNode)) ? Qe : i.parentNode),
                U && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY),
                V && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX),
                (i = a);
          q.isThrowing && (r || q.endX > E || q.endX < S || q.endY > X || q.endY < P) && Fh(p.inertia || p.throwProps, r);
        }
        return q;
      }),
      (e.update = function (e, t, n) {
        if (t && q.isPressed) {
          var o = getGlobalMatrix(h),
            r = d.apply({ x: q.x - T, y: q.y - D }),
            i = getGlobalMatrix(h.parentNode, !0);
          i.apply({ x: o.e - r.x, y: o.f - r.y }, r), (q.x -= r.x - i.e), (q.y -= r.y - i.f), yh(!0), Hh();
        }
        var a = q.x,
          l = q.y;
        return (
          Gh(!t),
          e ? q.applyBounds() : (Y && n && yh(!0), zh(!0)),
          t && (he(q.pointerX, q.pointerY), Y && yh(!0)),
          q.isPressed && !t && ((V && 0.01 < Math.abs(a - q.x)) || (U && 0.01 < Math.abs(l - q.y) && !W)) && Hh(),
          q.autoScroll && (La(h.parentNode, q.isDragging), (te = q.isDragging), yh(!0), Ia(h, Oh), Ha(h, Oh)),
          q
        );
      }),
      (e.enable = function (e) {
        var t,
          n,
          o,
          r = { lazy: !0 };
        if ((!1 !== p.cursor && (r.cursor = p.cursor || Xe), xe.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"), "soft" !== e)) {
          for (
            ta(
              J,
              V == U
                ? "none"
                : (p.allowNativeTouchScrolling && (h.scrollHeight === h.clientHeight) == (h.scrollWidth === h.clientHeight)) || p.allowEventDefault
                ? "manipulation"
                : V
                ? "pan-y"
                : "pan-x"
            ),
              n = J.length;
            -1 < --n;

          )
            (o = J[n]),
              Pe || za(o, "mousedown", Kh),
              za(o, "touchstart", Kh),
              za(o, "click", Ph, !0),
              xe.set(o, r),
              o.getBBox &&
                o.ownerSVGElement &&
                V != U &&
                xe.set(o.ownerSVGElement, { touchAction: p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : V ? "pan-y" : "pan-x" }),
              p.allowContextMenu || za(o, "contextmenu", xh);
          Wa(J, !1);
        }
        return (
          Ha(h, Oh),
          (u = !0),
          Se && "soft" !== e && Se.track(f || h, Q ? "x,y" : W ? "rotation" : "top,left"),
          (h._gsDragID = t = "d" + Fe++),
          (ze[t] = q),
          f && (f.enable(), (f.element._gsDragID = t)),
          (p.bounds || W) && Hh(),
          p.bounds && q.applyBounds(),
          q
        );
      }),
      (e.disable = function (e) {
        for (var t, n = q.isDragging, o = J.length; -1 < --o; ) Ma(J[o], "cursor", null);
        if ("soft" !== e) {
          for (ta(J, null), o = J.length; -1 < --o; )
            (t = J[o]), Ma(t, "touchCallout", null), Aa(t, "mousedown", Kh), Aa(t, "touchstart", Kh), Aa(t, "click", Ph, !0), Aa(t, "contextmenu", xh);
          Wa(J, !0), v && (Aa(v, "touchcancel", fe), Aa(v, "touchend", fe), Aa(v, "touchmove", ue)), Aa(de, "mouseup", fe), Aa(de, "mousemove", ue);
        }
        return (
          Ia(h, Oh),
          (u = !1),
          Se && "soft" !== e && (Se.untrack(f || h, Q ? "x,y" : W ? "rotation" : "top,left"), q.tween && q.tween.kill()),
          f && f.disable(),
          xa(yh),
          (q.isDragging = q.isPressed = y = !1),
          n && Qa(q, "dragend", "onDragEnd"),
          q
        );
      }),
      (e.enabled = function (e, t) {
        return arguments.length ? (e ? q.enable(t) : q.disable(t)) : u;
      }),
      (e.kill = function () {
        return (q.isThrowing = !1), q.tween && q.tween.kill(), q.disable(), xe.set(J, { clearProps: "userSelect" }), delete ze[h._gsDragID], q;
      }),
      (e.revert = function () {
        this.kill(), this.styles && this.styles.revert();
      }),
      ~n.indexOf("scroll") &&
        ((f = e.scrollProxy =
          new $a(
            h,
            (function _extend(e, t) {
              for (var n in t) n in e || (e[n] = t[n]);
              return e;
            })(
              {
                onKill: function onKill() {
                  q.isPressed && fe(null);
                },
              },
              p
            )
          )),
        (h.style.overflowY = U && !De ? "auto" : "hidden"),
        (h.style.overflowX = V && !De ? "auto" : "hidden"),
        (h = f.content)),
      W ? (o.rotation = 1) : (V && (o[G] = 1), U && (o[K] = 1)),
      (se.force3D = !("force3D" in p) || p.force3D),
      Le(_assertThisInitialized(e)),
      e.enable(),
      e
    );
  }
  !(function _setDefaults(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
  })(F.prototype, { pointerX: 0, pointerY: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0, isDragging: !1, isPressed: !1 }),
    (F.zIndex = 1e3),
    (F.version = "3.12.2"),
    Y() && xe.registerPlugin(F),
    (e.Draggable = F),
    (e.default = F);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

//

/**
 * Swiper 11.0.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 26, 2023
 */

var Swiper = (function () {
  "use strict";
  function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i] ? (s[i] = a[i]) : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e) {
    return (
      void 0 === e && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function l(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function o() {
    return Date.now();
  }
  function d(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
      "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
      i || 0
    );
  }
  function c(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i && ((s = i), !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r &&
            r.enumerable &&
            (c(e[a]) && c(i[a])
              ? i[a].__swiper__
                ? (e[a] = i[a])
                : p(e[a], i[a])
              : !c(e[a]) && c(i[a])
              ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : p(e[a], i[a]))
              : (e[a] = i[a]));
        }
      }
    }
    var s;
    return e;
  }
  function u(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function h(e) {
    return e.querySelector(".swiper-slide-transform") || (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) || e;
  }
  function f(e, t) {
    return void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t));
  }
  function g(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function v(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : n(t))), s;
  }
  function w(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return { top: i.top + d - l, left: i.left + c - o };
  }
  function b(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function E(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a; ) t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
    return s;
  }
  function x(e, t) {
    t &&
      e.addEventListener("transitionend", function s(a) {
        a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s));
      });
  }
  function S(e, t, s) {
    const a = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) +
          parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom"))
      : e.offsetWidth;
  }
  let T, M, C;
  function P() {
    return (
      T ||
        (T = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
          };
        })()),
      T
    );
  }
  function L(e) {
    return (
      void 0 === e && (e = {}),
      M ||
        (M = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = P(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !p &&
              f &&
              s.touch &&
              ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(
                `${o}x${d}`
              ) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (f = !1)),
            c && !h && ((l.os = "android"), (l.android = !0)),
            (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
            l
          );
        })(e)),
      M
    );
  }
  function A() {
    return (
      C ||
        (C = (function () {
          const e = r();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, a] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && a < 2);
            }
          }
          return { isSafari: t || s(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
        })()),
      C
    );
  }
  var I = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) && s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0]) ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e)) : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  const z = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (s.shadowRoot
            ? (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
            : requestAnimationFrame(() => {
                s.shadowRoot && ((t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove());
              })),
          t && t.remove();
      }
    },
    $ = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    k = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + a + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && $(e, s);
          })
        );
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = i - t; a <= r + t; a += 1) {
          const t = ((a % s) + s) % s;
          (t < i || t > r) && $(e, t);
        }
      else for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && $(e, a);
    };
  var O = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth),
        (s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10)),
          (s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
    },
    updateSlides: function () {
      const e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      const s = e.params,
        { wrapperEl: a, slidesEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
        o = e.virtual && s.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = f(i, `.${e.params.slideClass}, swiper-slide`),
        p = o ? e.virtual.slides.length : c.length;
      let m = [];
      const h = [],
        g = [];
      let v = s.slidesOffsetBefore;
      "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
      let w = s.slidesOffsetAfter;
      "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
      const y = e.snapGrid.length,
        E = e.slidesGrid.length;
      let x = s.spaceBetween,
        T = -v,
        M = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 ? (x = (parseFloat(x.replace("%", "")) / 100) * r) : "string" == typeof x && (x = parseFloat(x)),
        (e.virtualSize = -x),
        c.forEach((e) => {
          n ? (e.style.marginLeft = "") : (e.style.marginRight = ""), (e.style.marginBottom = ""), (e.style.marginTop = "");
        }),
        s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
      const P = s.grid && s.grid.rows > 1 && e.grid;
      let L;
      P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      const A = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
      for (let a = 0; a < p; a += 1) {
        let i;
        if (((L = 0), c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display"))) {
          if ("auto" === s.slidesPerView) {
            A && (c[a].style[e.getDirectionLabel("width")] = "");
            const r = getComputedStyle(i),
              n = i.style.transform,
              l = i.style.webkitTransform;
            if ((n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths)) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
            else {
              const e = t(r, "width"),
                s = t(r, "padding-left"),
                a = t(r, "padding-right"),
                n = t(r, "margin-left"),
                l = t(r, "margin-right"),
                o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) L = e + n + l;
              else {
                const { clientWidth: t, offsetWidth: r } = i;
                L = e + s + a + n + l + (r - t);
              }
            }
            n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L));
          } else (L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView), s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
          c[a] && (c[a].swiperSlideSize = L),
            g.push(L),
            s.centeredSlides
              ? ((T = T + L / 2 + M / 2 + x),
                0 === M && 0 !== a && (T = T - r / 2 - x),
                0 === a && (T = T - r / 2 - x),
                Math.abs(T) < 0.001 && (T = 0),
                s.roundLengths && (T = Math.floor(T)),
                C % s.slidesPerGroup == 0 && m.push(T),
                h.push(T))
              : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), (T = T + L + x)),
            (e.virtualSize += L + x),
            (M = L),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + w),
        n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`),
        s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
        P && e.grid.updateWrapperSize(L, m),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let a = 0; a < m.length; a += 1) {
          let i = m[a];
          s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i);
        }
        (m = t), Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r);
      }
      if (o && s.loop) {
        const t = g[0] + x;
        if (s.slidesPerGroup > 1) {
          const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
            i = t * s.slidesPerGroup;
          for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i);
        }
        for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1)
          1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), (e.virtualSize += t);
      }
      if ((0 === m.length && (m = [0]), 0 !== x)) {
        const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e) => {
          e.style[t] = `${x}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x);
        const t = e - r;
        m = m.map((e) => (e <= 0 ? -v : e > t ? t + w : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (g.forEach((t) => {
            e += t + (x || 0);
          }),
          (e -= x),
          e < r)
        ) {
          const t = (r - e) / 2;
          m.forEach((e, s) => {
            m[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if ((Object.assign(e, { slides: c, snapGrid: m, slidesGrid: h, slidesSizesGrid: g }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)) {
        u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
        h.length !== E && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          a = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
      for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.forEach((e) => {
          e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0 ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size) : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e],
          h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) || (m > 1 && m <= t.size) || (u <= 0 && m >= t.size)) &&
          (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)),
          h && a[e].classList.add(s.slideFullyVisibleClass),
          (o.progress = i ? -c : c),
          (o.originalProgress = i ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === a) (i = 0), (r = !0), (n = !0);
      else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || i <= 0), (n = l || i >= 1), s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1);
      }
      Object.assign(t, { progress: i, progressLoop: l, isBeginning: r, isEnd: n }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
        r = e.virtual && s.virtual.enabled,
        n = e.grid && s.grid && s.grid.rows > 1,
        l = (e) => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o, d, c;
      if (
        (t.forEach((e) => {
          e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
        }),
        r)
      )
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), (o = l(`[data-swiper-slide-index="${t}"]`));
        } else o = l(`[data-swiper-slide-index="${i}"]`);
      else n ? ((o = t.filter((e) => e.column === i)[0]), (c = t.filter((e) => e.column === i + 1)[0]), (d = t.filter((e) => e.column === i - 1)[0])) : (o = t[i]);
      o &&
        (o.classList.add(s.slideActiveClass),
        n
          ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass))
          : ((c = (function (e, t) {
              const s = [];
              for (; e.nextElementSibling; ) {
                const a = e.nextElementSibling;
                t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && !c && (c = t[0]),
            c && c.classList.add(s.slideNextClass),
            (d = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling; ) {
                const a = e.previousElementSibling;
                t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0]),
            s.loop && 0 === !d && (d = t[t.length - 1]),
            d && d.classList.add(s.slidePrevClass))),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        { snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              a = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1] ? (a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? (i = e) : a >= t[e] && a < t[e + 1] && (i = e + 1)) : a >= t[e] && (i = e);
            return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
          })(t)),
        a.indexOf(s) >= 0)
      )
        o = a.indexOf(s);
      else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if ((o >= a.length && (o = a.length - 1), d === r && !t.params.loop)) return void (o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")));
      if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
      const p = t.grid && i.grid && i.grid.rows > 1;
      let u;
      if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
      else if (p) {
        const e = t.slides.filter((e) => e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), (u = Math.floor(s / i.grid.rows));
      } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
      } else u = d;
      Object.assign(t, { previousSnapIndex: l, snapIndex: o, previousRealIndex: n, realIndex: u, previousIndex: r, activeIndex: d }),
        t.initialized && k(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
      const s = this,
        a = s.params;
      let i = e.closest(`.${a.slideClass}, swiper-slide`);
      !i &&
        s.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e);
        });
      let r,
        n = !1;
      if (i)
        for (let e = 0; e < s.slides.length; e += 1)
          if (s.slides[e] === i) {
            (n = !0), (r = e);
            break;
          }
      if (!i || !n) return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
      (s.clickedSlide = i),
        s.virtual && s.params.virtual.enabled ? (s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10)) : (s.clickedIndex = r),
        a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
    },
  };
  var D = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = d(i, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = a ? -e : e) : (d = e),
        i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        i.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d)
          : i.virtualTranslate ||
            (s.isHorizontal() ? (o -= s.cssOverflowAdjustment()) : (d -= s.cssOverflowAdjustment()), (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c), l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (((c = a && e > o ? o : a && e < d ? d : e), r.updateProgress(c), n.cssMode)) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll) return m({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0;
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
        !0
      );
    },
  };
  function G(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if ((l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n)) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
  }
  var X = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: f } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!f && !a && !i)) return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1] ? (t >= s && t < a - (a - s) / 2 ? (n = e) : t >= s && t < a && (n = e + 1)) : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      let b;
      if (
        (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(w),
        (b = n > p ? "next" : n < p ? "prev" : "reset"),
        (u && -w === r.translate) || (!u && w === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll) return m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e)) {
        e = parseInt(e, 10);
      }
      const i = this,
        r = i.grid && i.params.grid && i.params.grid.rows > 1;
      let n = e;
      if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
        else {
          let e;
          if (r) {
            const t = n * i.params.grid.rows;
            e = i.slides.filter((e) => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
          } else e = i.getSlideIndexByData(n);
          const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
            { centeredSlides: s } = i.params;
          let a = i.params.slidesPerView;
          "auto" === a ? (a = i.slidesPerViewDynamic()) : ((a = Math.ceil(parseFloat(i.params.slidesPerView, 10))), s && a % 2 == 0 && (a += 1));
          let l = t - e < a;
          if ((s && (l = l || e < Math.ceil(a / 2)), l)) {
            const a = s ? (e < i.activeIndex ? "prev" : "next") : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
            i.loopFix({ direction: a, slideTo: !0, activeSlideIndex: "next" === a ? e + 1 : e - t + 1, slideRealIndex: "next" === a ? i.realIndex : void 0 });
          }
          if (r) {
            const e = n * i.params.grid.rows;
            n = i.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
          } else n = i.getSlideIndexByData(n);
        }
      return (
        requestAnimationFrame(() => {
          i.slideTo(n, t, s, a);
        }),
        i
      );
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { enabled: i, params: r, animating: n } = a;
      if (!i) return a;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        if ((a.loopFix({ direction: "next" }), (a._clientLeft = a.wrapperEl.clientLeft), a.activeIndex === a.slides.length - 1 && r.cssMode))
          return (
            requestAnimationFrame(() => {
              a.slideTo(a.activeIndex + o, e, t, s);
            }),
            !0
          );
      }
      return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d } = a;
      if (!o) return a;
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({ direction: "prev" }), (a._clientLeft = a.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map((e) => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = n.indexOf(h)),
          f < 0 && (f = a.activeIndex - 1),
          "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && ((f = f - a.slidesPerViewDynamic("previous", !0) + 1), (f = Math.max(f, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return i.loop && 0 === a.activeIndex && i.cssMode
        ? (requestAnimationFrame(() => {
            a.slideTo(f, e, t, s);
          }),
          !0)
        : a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (r = Math.max(r, 0)), (r = Math.min(r, i.slidesGrid.length - 1)), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0])),
                l(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0])),
              l(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var H = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: a } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      const i = () => {
          f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        r = t.grid && s.grid && s.grid.rows > 1,
        n = s.slidesPerGroup * (r ? s.grid.rows : 1),
        l = t.slides.length % n != 0,
        o = r && t.slides.length % s.grid.rows != 0,
        d = (e) => {
          for (let a = 0; a < e; a += 1) {
            const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
            t.slidesEl.append(e);
          }
        };
      if (l) {
        if (s.loopAddBlankSlides) {
          d(n - (t.slides.length % n)), t.recalcSlides(), t.updateSlides();
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        i();
      } else if (o) {
        if (s.loopAddBlankSlides) {
          d(s.grid.rows - (t.slides.length % s.grid.rows)), t.recalcSlides(), t.updateSlides();
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        i();
      } else i();
      t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next" });
    },
    loopFix: function (e) {
      let { slideRealIndex: t, slideTo: s = !0, direction: a, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: l } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m } = o,
        { centeredSlides: h } = m;
      if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && m.virtual.enabled))
        return (
          s &&
            (m.centeredSlides || 0 !== o.snapIndex
              ? m.centeredSlides && o.snapIndex < m.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      let f = m.slidesPerView;
      "auto" === f ? (f = o.slidesPerViewDynamic()) : ((f = Math.ceil(parseFloat(m.slidesPerView, 10))), h && f % 2 == 0 && (f += 1));
      const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
      let w = v;
      w % v != 0 && (w += v - (w % v)), (w += m.loopAdditionalSlides), (o.loopedSlides = w);
      const b = o.grid && m.grid && m.grid.rows > 1;
      d.length < f + w
        ? g(
            "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
      const y = [],
        E = [];
      let x = o.activeIndex;
      void 0 === r ? (r = o.getSlideIndex(d.filter((e) => e.classList.contains(m.slideActiveClass))[0])) : (x = r);
      const S = "next" === a || !a,
        T = "prev" === a || !a;
      let M = 0,
        C = 0;
      const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
        L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + 0.5 : 0);
      if (L < w) {
        M = Math.max(w - L, v);
        for (let e = 0; e < w - L; e += 1) {
          const t = e - Math.floor(e / P) * P;
          if (b) {
            const e = P - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t);
          } else y.push(P - t - 1);
        }
      } else if (L + f > P - w) {
        C = Math.max(L - (P - 2 * w), v);
        for (let e = 0; e < C; e += 1) {
          const t = e - Math.floor(e / P) * P;
          b
            ? d.forEach((e, s) => {
                e.column === t && E.push(s);
              })
            : E.push(t);
        }
      }
      if (
        ((o.__preventObserver__ = !0),
        requestAnimationFrame(() => {
          o.__preventObserver__ = !1;
        }),
        T &&
          y.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0), u.prepend(d[e]), (d[e].swiperLoopMoveDOM = !1);
          }),
        S &&
          E.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0), u.append(d[e]), (d[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === m.slidesPerView
          ? o.updateSlides()
          : b &&
            ((y.length > 0 && T) || (E.length > 0 && S)) &&
            o.slides.forEach((e, t) => {
              o.grid.updateSlide(t, e, o.slides);
            }),
        m.watchSlidesProgress && o.updateSlidesOffset(),
        s)
      )
        if (y.length > 0 && T) {
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x + M] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x + M, 0, !1, !0),
                i && ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t), (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t)));
          } else if (i) {
            const e = b ? y.length / m.grid.rows : y.length;
            o.slideTo(o.activeIndex + e, 0, !1, !0), (o.touchEventsData.currentTranslate = o.translate);
          }
        } else if (E.length > 0 && S)
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x - C] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x - C, 0, !1, !0),
                i && ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t), (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t)));
          } else {
            const e = b ? E.length / m.grid.rows : E.length;
            o.slideTo(o.activeIndex - e, 0, !1, !0);
          }
      if (((o.allowSlidePrev = c), (o.allowSlideNext = p), o.controller && o.controller.control && !n)) {
        const e = { slideRealIndex: t, direction: a, setTranslate: i, activeSlideIndex: r, byController: !0 };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
              !t.destroyed && t.params.loop && t.loopFix({ ...e, slideTo: t.params.slidesPerView === m.slidesPerView && s });
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix({ ...e, slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach((e) => {
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        a[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        a.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function N(e, t, s) {
    const a = r(),
      { params: i } = e,
      n = i.edgeSwipeDetection,
      l = i.edgeSwipeThreshold;
    return !n || !(s <= l || s >= a.innerWidth - l) || ("prevent" === n && (t.preventDefault(), !0));
  }
  function Y(e) {
    const t = this,
      s = a();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const n = t.touchEventsData;
    if ("pointerdown" === i.type) {
      if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
      n.pointerId = i.pointerId;
    } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void N(t, i, i.targetTouches[0].pageX);
    const { params: l, touches: d, enabled: c } = t;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = i.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
      m = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && m && (p = m[0]);
    const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
      f = !(!i.target || !i.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(h, p)
        : p.closest(h))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    (d.currentX = i.pageX), (d.currentY = i.pageY);
    const g = d.currentX,
      v = d.currentY;
    if (!N(t, i, g)) return;
    Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
      (d.startX = g),
      (d.startY = v),
      (n.touchStartTime = o()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    p.matches(n.focusableElements) && ((w = !1), "SELECT" === p.nodeName && (n.isTouched = !1)),
      s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
    const b = w && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !b) || p.isContentEditable || i.preventDefault(),
      l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
      t.emit("touchStart", i);
  }
  function B(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c,
      p = e;
    if ((p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)) {
      if (null !== i.touchId) return;
      if (p.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === p.type) {
      if (((c = [...p.changedTouches].filter((e) => e.identifier === i.touchId)[0]), !c || c.identifier !== i.touchId)) return;
    } else c = p;
    if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
    const u = c.pageX,
      m = c.pageY;
    if (p.preventedByNestedSwiper) return (n.startX = u), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        p.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (i.isTouched && (Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m }), (i.touchStartTime = o())))
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if ((m < n.startY && s.translate <= s.maxTranslate()) || (m > n.startY && s.translate >= s.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
      } else if ((u < n.startX && s.translate <= s.maxTranslate()) || (u > n.startX && s.translate >= s.minTranslate())) return;
    if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return (i.isMoved = !0), void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", p), (n.previousX = n.currentX), (n.previousY = n.currentY), (n.currentX = u), (n.currentY = m);
    const h = n.currentX - n.startX,
      f = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : h * h + f * f >= 25 && ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI), (i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (i.startMoving = !0)), i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1), !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
    let g = s.isHorizontal() ? h : f,
      v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && ((g = Math.abs(g) * (l ? 1 : -1)), (v = Math.abs(v) * (l ? 1 : -1))), (n.diff = g), (g *= r.touchRatio), l && ((g = -g), (v = -v));
    const w = s.touchesDirection;
    (s.swipeDirection = g > 0 ? "prev" : "next"), (s.touchesDirection = v > 0 ? "prev" : "next");
    const b = s.params.loop && !r.cssMode,
      y = ("next" === s.touchesDirection && s.allowSlideNext) || ("prev" === s.touchesDirection && s.allowSlidePrev);
    if (!i.isMoved) {
      if ((b && y && s.loopFix({ direction: s.swipeDirection }), (i.startTranslate = s.getTranslate()), s.setTransition(0), s.animating)) {
        const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1), !r.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
    }
    if ((new Date().getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1))
      return (
        Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m, startTranslate: i.currentTranslate }),
        (i.loopSwapReset = !0),
        void (i.startTranslate = i.currentTranslate)
      );
    s.emit("sliderMove", p), (i.isMoved = !0), (i.currentTranslate = g + i.startTranslate);
    let E = !0,
      x = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) &&
            s.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
          i.currentTranslate > s.minTranslate() && ((E = !1), r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x)))
        : g < 0 &&
          (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() && ((E = !1), r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))),
      E && (p.preventedByNestedSwiper = !0),
      !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()),
      r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function R(e) {
    const t = this,
      s = t.touchEventsData;
    let a,
      i = e;
    i.originalEvent && (i = i.originalEvent);
    if ("touchend" === i.type || "touchcancel" === i.type) {
      if (((a = [...i.changedTouches].filter((e) => e.identifier === s.touchId)[0]), !a || a.identifier !== s.touchId)) return;
    } else {
      if (null !== s.touchId) return;
      if (i.pointerId !== s.pointerId) return;
      a = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
      if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    (s.pointerId = null), (s.touchId = null);
    const { params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p } = t;
    if (!p) return;
    if (!r.simulateTouch && "mouse" === i.pointerType) return;
    if ((s.allowTouchCallbacks && t.emit("touchEnd", i), (s.allowTouchCallbacks = !1), !s.isTouched))
      return s.isMoved && r.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
    r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const u = o(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = i.path || (i.composedPath && i.composedPath());
      t.updateClickedSlide((e && e[0]) || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
    }
    if (
      ((s.lastClickTime = o()),
      l(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched || !s.isMoved || !t.swipeDirection || (0 === n.diff && !s.loopSwapReset) || (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (h = r.followFinger ? (d ? t.translate : -t.translate) : -s.currentTranslate), r.cssMode)) return;
    if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h });
    let f = 0,
      g = t.slidesSizesGrid[0];
    for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== c[e + t] ? h >= c[e] && h < c[e + t] && ((f = e), (g = c[e + t] - c[e])) : h >= c[e] && ((f = e), (g = c[c.length - 1] - c[c.length - 2]));
    }
    let v = null,
      w = null;
    r.rewind && (t.isBeginning ? (w = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (v = 0));
    const b = (h - c[f]) / g,
      y = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (m > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (b >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : f + y) : t.slideTo(f)),
        "prev" === t.swipeDirection && (b > 1 - r.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(f));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
        ? i.target === t.navigation.nextEl
          ? t.slideTo(f + y)
          : t.slideTo(f)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function q() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function V(e) {
    const t = this;
    t.enabled &&
      (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function _() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r), i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function F(e) {
    const t = this;
    z(t, e.target), t.params.cssMode || ("auto" !== t.params.slidesPerView && !t.params.autoHeight) || t.update();
  }
  function j() {
    const e = this;
    e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const W = (e, t) => {
    const s = a(),
      { params: i, el: r, wrapperEl: n, device: l } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    s[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
      r[d]("touchstart", e.onTouchStart, { passive: !1 }),
      r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("touchend", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0),
      i.cssMode && n[d]("scroll", e.onScroll),
      i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q, !0) : e[c]("observerUpdate", q, !0),
      r[d]("load", e.onLoad, { capture: !0 });
  };
  const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var K = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Z(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (!0 === e[a] && (e[a] = { enabled: !0 }),
          "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0),
          ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0),
          a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = { enabled: !1 }), p(t, s)) : p(t, s))
        : p(t, s);
    };
  }
  const Q = {
      eventsEmitter: I,
      update: O,
      translate: D,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || ((s.wrapperEl.style.transitionDuration = `${e}ms`), (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")), s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), G({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1), a.cssMode || (s.setTransition(0), G({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: X,
      loop: H,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
          const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = Y.bind(e)),
            (e.onTouchMove = B.bind(e)),
            (e.onTouchEnd = R.bind(e)),
            (e.onDocumentTouchStart = j.bind(e)),
            t.cssMode && (e.onScroll = _.bind(e)),
            (e.onClick = V.bind(e)),
            (e.onLoad = F.bind(e)),
            W(e, "on");
        },
        detachEvents: function () {
          W(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: a, el: i } = e,
            r = a.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const l = (n in r ? r[n] : void 0) || e.originalParams,
            o = U(e, a),
            d = U(e, l),
            c = a.enabled;
          o && !d
            ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses())
            : !o &&
              d &&
              (i.classList.add(`${a.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) || (!l.grid.fill && "column" === a.grid.fill)) && i.classList.add(`${a.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if (void 0 === l[t]) return;
              const s = a[t] && a[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const u = l.direction && l.direction !== a.direction,
            m = a.loop && (l.slidesPerView !== a.slidesPerView || u),
            h = a.loop;
          u && s && e.changeDirection(), p(e.params, l);
          const f = e.params.enabled,
            g = e.params.loop;
          Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
            c && !f ? e.disable() : !c && f && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", l),
            s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && g ? (e.loopCreate(t), e.updateSlides()) : h && !g && e.loopDestroy()),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s))) return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: a, el: i, device: r } = e,
            n = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((a) => {
                        e[a] && s.push(t + a);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: a },
                { grid: s.grid && s.grid.rows > 1 },
                { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...n), i.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    J = {};
  class ee {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
      1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? (t = i[0]) : ([e, t] = i),
        t || (t = {}),
        (t = p({}, t)),
        e && !t.el && (t.el = e);
      const n = a();
      if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const a = p({}, t, { el: s });
            e.push(new ee(a));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = P()),
        (l.device = L({ userAgent: t.userAgent })),
        (l.browser = A()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach((e) => {
        e({ params: t, swiper: l, extendParams: Z(t, o), on: l.on.bind(l), once: l.once.bind(l), off: l.off.bind(l), emit: l.emit.bind(l) });
      });
      const d = p({}, K, o);
      return (
        (l.params = p({}, d, J, t)),
        (l.originalParams = p({}, l.params)),
        (l.passedParams = p({}, t)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((e) => {
            l.on(e, l.params.on[e]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
      return y(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = f(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
      let o = 1;
      if ("number" == typeof s.slidesPerView) return s.slidesPerView;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? a[l].swiperSlideSize : 0;
        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && z(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        a(), s.autoHeight && e.updateAutoHeight();
      else {
        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s)) return !1;
      (s.swiper = t), s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return f(s, a())[0];
      })();
      return (
        !i &&
          t.params.createElements &&
          ((i = v("div", t.params.wrapperClass)),
          s.append(i),
          f(s, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
          wrongRTL: "-webkit-box" === b(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
          : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((e) => {
          e.complete
            ? z(t, e)
            : e.addEventListener("load", (e) => {
                z(t, e.target);
              });
        }),
        k(t),
        (t.initialized = !0),
        k(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, el: i, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttribute("style"),
            r.removeAttribute("style"),
            n &&
              n.length &&
              n.forEach((e) => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(J, e);
    }
    static get extendedDefaults() {
      return J;
    }
    static get defaults() {
      return K;
    }
    static installModule(e) {
      ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
      const t = ee.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((e) => ee.installModule(e)), ee) : (ee.installModule(e), ee);
    }
  }
  function te(e, t, s, a) {
    return (
      e.params.createElements &&
        Object.keys(a).forEach((i) => {
          if (!s[i] && !0 === s.auto) {
            let r = f(e.el, `.${a[i]}`)[0];
            r || ((r = v("div", a[i])), (r.className = a[i]), e.el.append(r)), (s[i] = r), (t[i] = r);
          }
        }),
      s
    );
  }
  function se(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ae(e) {
    const t = this,
      { params: s, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    const i = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = "");
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
    else i(e);
    t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update();
  }
  function ie(e) {
    const t = this,
      { params: s, activeIndex: a, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = "");
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update(), t.slideTo(r, 0, !1);
  }
  function re(e, t) {
    const s = this,
      { params: a, activeIndex: i, slidesEl: r } = s;
    let n = i;
    a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(), a.loop && s.loopCreate(), (a.observer && !s.isElement) || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ne(e) {
    const t = this,
      { params: s, activeIndex: a } = t;
    let i = a;
    s.loop && ((i -= t.loopedSlides), t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1) (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else (r = e), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), (n = Math.max(n, 0));
    t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function le() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function oe(e) {
    const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.forEach((e) => {
            e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e) => e.remove());
          }),
            o();
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function de(e, t) {
    const s = h(t);
    return s !== t && ((s.style.backfaceVisibility = "hidden"), (s.style["-webkit-backface-visibility"] = "hidden")), s;
  }
  function ce(e) {
    let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i
        ? a
        : a.filter((e) => {
            const s = e.classList.contains("swiper-slide-transform")
              ? ((e) => {
                  if (!e.parentElement) return t.slides.filter((t) => t.shadowRoot && t.shadowRoot === e.parentNode)[0];
                  return e.parentElement;
                })(e)
              : e;
            return t.getSlideIndex(s) === r;
          })),
        e.forEach((e) => {
          x(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function pe(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
      i = h(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return r || ((r = v("div", a.split(" "))), i.append(r)), r;
  }
  Object.keys(Q).forEach((e) => {
    Object.keys(Q[e]).forEach((t) => {
      ee.prototype[t] = Q[e][t];
    });
  }),
    ee.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) || ((i = a ? a.width : (s[0] || s).inlineSize), (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void i("observerUpdate", e[0]);
              const s = function () {
                i("observerUpdate", e[0]);
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
            });
            a.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = E(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.hostEl, { childList: t.params.observeSlideChildren }), o(t.wrapperEl, { attributes: !1 });
            }
          }),
          a("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const ue = [
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      i({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } });
      const l = a();
      s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
      const o = l.createElement("div");
      function d(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let i;
        return (
          a.renderSlide
            ? ((i = a.renderSlide.call(s, e, t)), "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
            : (i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass)),
          i.setAttribute("data-swiper-slide-index", t),
          a.renderSlide || (i.innerHTML = e),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function c(e) {
        const { slidesPerView: t, slidesPerGroup: a, centeredSlides: i, loop: r } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: c, to: p, slides: u, slidesGrid: m, offset: h } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const g = s.activeIndex || 0;
        let v, w, b;
        (v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          i ? ((w = Math.floor(t / 2) + a + o), (b = Math.floor(t / 2) + a + l)) : ((w = t + (a - 1) + o), (b = (r ? t : a) + l));
        let y = g - b,
          E = g + w;
        r || ((y = Math.max(y, 0)), (E = Math.min(E, u.length - 1)));
        let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
        function S() {
          s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
        }
        if (
          (r && g >= b ? ((y -= b), i || (x += s.slidesGrid[0])) : r && g < b && ((y = -b), i && (x += s.slidesGrid[0])),
          Object.assign(s.virtual, { from: y, to: E, offset: x, slidesGrid: s.slidesGrid, slidesBefore: b, slidesAfter: w }),
          c === y && p === E && !e)
        )
          return (
            s.slidesGrid !== m &&
              x !== h &&
              s.slides.forEach((e) => {
                e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
              }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: y,
              to: E,
              slides: (function () {
                const e = [];
                for (let t = y; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"))
          );
        const T = [],
          M = [],
          C = (e) => {
            let t = e;
            return e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t;
          };
        if (e)
          s.slides
            .filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`))
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = c; e <= p; e += 1)
            if (e < y || e > E) {
              const t = C(e);
              s.slides
                .filter((e) => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))
                .forEach((e) => {
                  e.remove();
                });
            }
        const P = r ? -u.length : 0,
          L = r ? 2 * u.length : u.length;
        for (let t = P; t < L; t += 1)
          if (t >= y && t <= E) {
            const s = C(t);
            void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T.push(s));
          }
        if (
          (M.forEach((e) => {
            s.slidesEl.append(d(u[e], e));
          }),
          r)
        )
          for (let e = T.length - 1; e >= 0; e -= 1) {
            const t = T[e];
            s.slidesEl.prepend(d(u[t], t));
          }
        else
          T.sort((e, t) => t - e),
            T.forEach((e) => {
              s.slidesEl.prepend(d(u[e], e));
            });
        f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          S();
      }
      r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`));
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
            (e = !0),
            t.forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t), (s.virtual.cache[t] = e), e.remove();
            }));
        }
        e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          c();
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            c(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.getAttribute("data-swiper-slide-index");
                r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            c(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.params.virtual.cache &&
                  (delete s.virtual.cache[e[a]],
                  Object.keys(s.virtual.cache).forEach((t) => {
                    t > e && ((s.virtual.cache[t - 1] = s.virtual.cache[t]), s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
                  })),
                  s.virtual.slides.splice(e[a], 1),
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.params.virtual.cache &&
                (delete s.virtual.cache[e],
                Object.keys(s.virtual.cache).forEach((t) => {
                  t > e && ((s.virtual.cache[t - 1] = s.virtual.cache[t]), s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
                })),
                s.virtual.slides.splice(e, 1),
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            c(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []), s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
          },
          update: c,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          m = 38 === i,
          h = 40 === i;
        if (!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && h) || c)) return !1;
        if (!t.allowSlidePrev && ((t.isHorizontal() && p) || (t.isVertical() && m) || d)) return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
            let e = !1;
            if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
            const a = t.el,
              i = a.clientWidth,
              r = a.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = w(a);
            s && (d.left -= a.scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (c || h) && t.slideNext(), (d || m) && t.slidePrev()),
            n("keyPress", i);
        }
      }
      function c() {
        t.keyboard.enabled || (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled && (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && c();
        }),
        i("destroy", () => {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: c, disable: p });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let d;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let c,
        p = o();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
          !(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) &&
          ((e.delta >= 6 && o() - p < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), i("scroll", e.raw)),
            (p = new n.Date().getTime()),
            !1))
        );
      }
      function g(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
        const p = n && n.contains(s.target);
        if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) && e.deltaMode && (1 === e.deltaMode ? ((a *= 40), (i *= 40)) : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: o(), delta: Math.abs(m), direction: Math.sign(m) },
            a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
          if (!a) {
            c = void 0;
            let n = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              p = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!o && t.isBeginning) || (!p && t.isEnd)) && t.updateSlidesClasses(),
              t.params.loop && t.loopFix({ direction: e.direction < 0 ? "next" : "prev", byMousewheel: !0 }),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
              const s = u.length ? u[u.length - 1] : void 0,
                a = u[0];
              if ((u.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) u.splice(0);
              else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                const s = m > 0 ? 0.8 : 0.2;
                (c = e),
                  u.splice(0),
                  (d = l(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              d ||
                (d = l(() => {
                  (c = e), u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", s),
              t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
              r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = { time: o(), delta: Math.abs(m), direction: Math.sign(m), raw: e };
          u.length >= 2 && u.shift();
          const a = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
            a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(e) {
        let s = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g);
      }
      function w() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
      }),
        a("destroy", () => {
          t.params.cssMode && w(), t.mousewheel.enabled && b();
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function n(e) {
        let s;
        return e && "string" == typeof e && t.isElement && ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function l(e, s) {
        const a = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return l(s, !1), void l(e, !1);
        l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          a = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: a }), (s = r(s)), (a = r(a));
        const i = (s, a) => {
          s && s.addEventListener("click", "next" === a ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => i(e, "next")), a.forEach((e) => i(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = r(e)), (s = r(s));
        const a = (e, s) => {
          e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => a(e, "next")), s.forEach((e) => a(e, "prev"));
      }
      a("init", () => {
        !1 === t.params.navigation.enabled ? m() : (p(), o());
      }),
        a("toEdge fromEdge lock unlock", () => {
          o();
        }),
        a("destroy", () => {
          u();
        }),
        a("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = r(e)), (s = r(s)), t.enabled ? o() : [...e, ...s].filter((e) => !!e).forEach((e) => e.classList.add(t.params.navigation.lockClass));
        }),
        a("click", (e, s) => {
          let { nextEl: a, prevEl: n } = t.navigation;
          (a = r(a)), (n = r(n));
          const l = s.target;
          if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
            let e;
            a.length ? (e = a[0].classList.contains(t.params.navigation.hiddenClass)) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              [...a, ...n].filter((e) => !!e).forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
          }
        });
      const m = () => {
        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o();
        },
        disable: m,
        update: o,
        init: p,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function d() {
        return !t.params.pagination.el || !t.pagination.el || (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length);
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`));
      }
      function p(e) {
        const s = e.target.closest(se(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const a = y(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === a) return;
          t.slideToLoop(a);
        } else t.slideTo(a);
      }
      function u() {
        const e = t.rtl,
          s = t.params.pagination;
        if (d()) return;
        let a,
          r,
          p = t.pagination.el;
        p = o(p);
        const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0), (a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((a = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
          "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let o, d, u;
          if (
            (s.dynamicBullets &&
              ((n = S(i[0], t.isHorizontal() ? "width" : "height", !0)),
              p.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 && void 0 !== r && ((l += a - (r || 0)), l > s.dynamicMainBullets - 1 ? (l = s.dynamicMainBullets - 1) : l < 0 && (l = 0)),
              (o = Math.max(a - l, 0)),
              (d = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (d + o) / 2)),
            i.forEach((e) => {
              const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${s.bulletActiveClass}${e}`)]
                .map((e) => ("string" == typeof e && e.includes(" ") ? e.split(" ") : e))
                .flat();
              e.classList.remove(...t);
            }),
            p.length > 1)
          )
            i.forEach((e) => {
              const i = y(e);
              i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets && (i >= o && i <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && c(e, "prev"), i === d && c(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                i.forEach((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = i[o],
                t = i[d];
              for (let e = o; e <= d; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (n * a - n) / 2 - u * n,
              l = e ? "right" : "left";
            i.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        p.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(se(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
              e.querySelectorAll(se(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(m);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
            const r = (a + 1) / m;
            let n = 1,
              l = 1;
            "horizontal" === i ? (n = r) : (l = r),
              e.querySelectorAll(se(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`), (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, a + 1, m)), 0 === r && i("paginationRender", e))
            : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
            t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function m() {
        const e = t.params.pagination;
        if (d()) return;
        const s =
          t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let a = t.pagination.el;
        a = o(a);
        let r = "";
        if ("bullets" === e.type) {
          let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)));
          }),
          "custom" !== e.type && i("paginationRender", a[0]);
      }
      function h() {
        t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
          s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]), s.length > 1 && (s = s.filter((e) => E(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), (l = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", p),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (d()) return;
        let s = t.pagination.el;
        s &&
          ((s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
              e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p));
          })),
          t.pagination.bullets && t.pagination.bullets.forEach((t) => t.classList.remove(...e.bulletActiveClass.split(" ")));
      }
      a("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
          });
      }),
        a("init", () => {
          !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
        }),
        a("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        a("snapIndexChange", () => {
          u();
        }),
        a("snapGridLengthChange", () => {
          m(), u();
        }),
        a("destroy", () => {
          f();
        }),
        a("enable disable", () => {
          let { el: e } = t.pagination;
          e && ((e = o(e)), e.forEach((e) => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
        }),
        a("lock unlock", () => {
          u();
        }),
        a("click", (e, s) => {
          const a = s.target,
            r = o(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && ((t.navigation.nextEl && a === t.navigation.nextEl) || (t.navigation.prevEl && a === t.navigation.prevEl))) return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
          }
        });
      const g = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e && ((e = o(e)), e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))), f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e && ((e = o(e)), e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))), h(), m(), u();
        },
        disable: g,
        render: m,
        update: u,
        init: h,
        destroy: f,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const o = a();
      let d,
        c,
        p,
        u,
        m = !1,
        h = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: a, el: i } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = c,
          o = (p - c) * n;
        s ? ((o = -o), o > 0 ? ((l = c - o), (o = 0)) : -o + c > p && (l = p + o)) : o < 0 ? ((l = c + o), (o = 0)) : o + c > p && (l = p - o),
          t.isHorizontal()
            ? ((a.style.transform = `translate3d(${o}px, 0, 0)`), (a.style.width = `${l}px`))
            : ((a.style.transform = `translate3d(0px, ${o}px, 0)`), (a.style.height = `${l}px`)),
          r.hide &&
            (clearTimeout(h),
            (i.style.opacity = 1),
            (h = setTimeout(() => {
              (i.style.opacity = 0), (i.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function b() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: a } = e;
        (s.style.width = ""),
          (s.style.height = ""),
          (p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
          (u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal() ? (s.style.width = `${c}px`) : (s.style.height = `${c}px`),
          (a.style.display = u >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a.style.opacity = 0),
          t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
      }
      function y(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function E(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { el: i } = s;
        let r;
        (r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c)), (r = Math.max(Math.min(r, 1), 0)), a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n, dragEl: l } = a;
        (m = !0),
          (d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
          e.preventDefault(),
          e.stopPropagation(),
          (i.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          E(e),
          clearTimeout(f),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e);
      }
      function S(e) {
        const { scrollbar: s, wrapperEl: a } = t,
          { el: i, dragEl: n } = s;
        m &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          E(e),
          (a.style.transitionDuration = "0ms"),
          (i.style.transitionDuration = "0ms"),
          (n.style.transitionDuration = "0ms"),
          r("scrollbarDragMove", e));
      }
      function T(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n } = a;
        m &&
          ((m = !1),
          t.params.cssMode && ((t.wrapperEl.style["scroll-snap-type"] = ""), (i.style.transitionDuration = "")),
          s.hide &&
            (clearTimeout(f),
            (f = l(() => {
              (n.style.opacity = 0), (n.style.transitionDuration = "400ms");
            }, 1e3))),
          r("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest());
      }
      function M(e) {
        const { scrollbar: s, params: a } = t,
          i = s.el;
        if (!i) return;
        const r = i,
          n = !!a.passiveListeners && { passive: !1, capture: !1 },
          l = !!a.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", T, l);
      }
      function C() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = te(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i, r;
        if (("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el)) i || (i = a.el);
        else if (((i = o.querySelectorAll(a.el)), !i.length)) return;
        t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)),
          i.length > 0 && (i = i[0]),
          i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass),
          i && ((r = i.querySelector(se(t.params.scrollbar.dragClass))), r || ((r = v("div", t.params.scrollbar.dragClass)), i.append(r))),
          Object.assign(e, { el: i, dragEl: r }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"),
          i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
      }
      function P() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? L() : (C(), b(), g());
        }),
        i("update resize observerUpdate lock unlock", () => {
          b();
        }),
        i("setTranslate", () => {
          g();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        i("enable disable", () => {
          const { el: e } = t.scrollbar;
          e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
        }),
        i("destroy", () => {
          P();
        });
      const L = () => {
        t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), P();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
            t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
            C(),
            b(),
            g();
        },
        disable: L,
        updateSize: b,
        setTranslate: g,
        init: C,
        destroy: P,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        r = (e, s) => {
          const { rtl: a } = t,
            i = a ? -1 : 1,
            r = e.getAttribute("data-swiper-parallax") || "0";
          let n = e.getAttribute("data-swiper-parallax-x"),
            l = e.getAttribute("data-swiper-parallax-y");
          const o = e.getAttribute("data-swiper-parallax-scale"),
            d = e.getAttribute("data-swiper-parallax-opacity"),
            c = e.getAttribute("data-swiper-parallax-rotate");
          if (
            (n || l ? ((n = n || "0"), (l = l || "0")) : t.isHorizontal() ? ((n = r), (l = "0")) : ((l = r), (n = "0")),
            (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px"),
            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const t = d - (d - 1) * (1 - Math.abs(s));
            e.style.opacity = t;
          }
          let p = `translate3d(${n}, ${l}, 0px)`;
          if (null != o) {
            p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
          }
          if (c && null != c) {
            p += ` rotate(${c * s * -1}deg)`;
          }
          e.style.transform = p;
        },
        n = () => {
          const { el: e, slides: s, progress: a, snapGrid: n, isElement: l } = t,
            o = f(e, i);
          t.isElement && o.push(...f(t.hostEl, i)),
            o.forEach((e) => {
              r(e, a);
            }),
            s.forEach((e, s) => {
              let l = e.progress;
              t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)),
                (l = Math.min(Math.max(l, -1), 1)),
                e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e) => {
                  r(e, l);
                });
            });
        };
      a("beforeInit", () => {
        t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s, hostEl: a } = t,
                r = [...s.querySelectorAll(i)];
              t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t) => {
                  let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
                });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }),
        (t.zoom = { enabled: !1 });
      let l,
        o,
        c = 1,
        p = !1;
      const u = [],
        m = { originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 },
        h = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
      let v = 1;
      function b() {
        if (u.length < 2) return 1;
        const e = u[0].pageX,
          t = u[0].pageY,
          s = u[1].pageX,
          a = u[1].pageY;
        return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
      }
      function y(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return !!e.target.matches(s) || t.slides.filter((t) => t.contains(e.target)).length > 0;
      }
      function x(e) {
        if (("mouse" === e.pointerType && u.splice(0, u.length), !y(e))) return;
        const s = t.params.zoom;
        if (((l = !1), (o = !1), u.push(e), !(u.length < 2))) {
          if (((l = !0), (m.scaleStart = b()), !m.slideEl)) {
            (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
            let a = m.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
              (m.imageEl = a),
              (m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0),
              !m.imageWrapEl)
            )
              return void (m.imageEl = void 0);
            m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
          }
          if (m.imageEl) {
            const [e, t] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const e = m.imageEl.getBoundingClientRect();
              return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c];
            })();
            (m.originX = e), (m.originY = t), (m.imageEl.style.transitionDuration = "0ms");
          }
          p = !0;
        }
      }
      function S(e) {
        if (!y(e)) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && (u[i] = e),
          u.length < 2 ||
            ((o = !0),
            (m.scaleMove = b()),
            m.imageEl &&
              ((a.scale = (m.scaleMove / m.scaleStart) * c),
              a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`)));
      }
      function T(e) {
        if (!y(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && u.splice(i, 1),
          l &&
            o &&
            ((l = !1),
            (o = !1),
            m.imageEl &&
              ((a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio)),
              (m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
              (c = a.scale),
              (p = !1),
              a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === a.scale && ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
      }
      function M(e) {
        if (
          !y(e) ||
          !(function (e) {
            const s = `.${t.params.zoom.containerClass}`;
            return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t) => t.contains(e.target)).length > 0;
          })(e)
        )
          return;
        const s = t.zoom;
        if (!m.imageEl) return;
        if (!h.isTouched || !m.slideEl) return;
        h.isMoved ||
          ((h.width = m.imageEl.offsetWidth),
          (h.height = m.imageEl.offsetHeight),
          (h.startX = d(m.imageWrapEl, "x") || 0),
          (h.startY = d(m.imageWrapEl, "y") || 0),
          (m.slideWidth = m.slideEl.offsetWidth),
          (m.slideHeight = m.slideEl.offsetHeight),
          (m.imageWrapEl.style.transitionDuration = "0ms"));
        const a = h.width * s.scale,
          i = h.height * s.scale;
        if (a < m.slideWidth && i < m.slideHeight) return;
        (h.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
          (h.maxX = -h.minX),
          (h.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
          (h.maxY = -h.minY),
          (h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
          (h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
        if ((Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p)) {
          if (
            t.isHorizontal() &&
            ((Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x) ||
              (Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x))
          )
            return void (h.isTouched = !1);
          if (
            !t.isHorizontal() &&
            ((Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y) ||
              (Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y))
          )
            return void (h.isTouched = !1);
        }
        e.cancelable && e.preventDefault(), e.stopPropagation(), (h.isMoved = !0);
        const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
          { originX: n, originY: l } = m;
        (h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n)),
          (h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l)),
          h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
          h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
          h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
          h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
          g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x),
          g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y),
          g.prevTime || (g.prevTime = Date.now()),
          (g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
          (g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
          Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
          Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
          (g.prevPositionX = h.touchesCurrent.x),
          (g.prevPositionY = h.touchesCurrent.y),
          (g.prevTime = Date.now()),
          (m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
      }
      function C() {
        const e = t.zoom;
        m.slideEl &&
          t.activeIndex !== t.slides.indexOf(m.slideEl) &&
          (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
          (e.scale = 1),
          (c = 1),
          (m.slideEl = void 0),
          (m.imageEl = void 0),
          (m.imageWrapEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function P(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (!m.slideEl) {
          e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
            m.slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0]) : (m.slideEl = t.slides[t.activeIndex]));
          let s = m.slideEl.querySelector(`.${a.containerClass}`);
          s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            (m.imageEl = s),
            (m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0);
        }
        if (!m.imageEl || !m.imageWrapEl) return;
        let i, r, l, o, d, p, u, g, v, b, y, x, S, T, M, C, P, L;
        t.params.cssMode && ((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")),
          m.slideEl.classList.add(`${a.zoomedSlideClass}`),
          void 0 === h.touchesStart.x && e ? ((i = e.pageX), (r = e.pageY)) : ((i = h.touchesStart.x), (r = h.touchesStart.y));
        const A = "number" == typeof e ? e : null;
        1 === c && A && ((i = void 0), (r = void 0)),
          (s.scale = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          (c = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          !e || (1 === c && A)
            ? ((u = 0), (g = 0))
            : ((P = m.slideEl.offsetWidth),
              (L = m.slideEl.offsetHeight),
              (l = w(m.slideEl).left + n.scrollX),
              (o = w(m.slideEl).top + n.scrollY),
              (d = l + P / 2 - i),
              (p = o + L / 2 - r),
              (v = m.imageEl.offsetWidth),
              (b = m.imageEl.offsetHeight),
              (y = v * s.scale),
              (x = b * s.scale),
              (S = Math.min(P / 2 - y / 2, 0)),
              (T = Math.min(L / 2 - x / 2, 0)),
              (M = -S),
              (C = -T),
              (u = d * s.scale),
              (g = p * s.scale),
              u < S && (u = S),
              u > M && (u = M),
              g < T && (g = T),
              g > C && (g = C)),
          A && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
      }
      function L() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!m.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0]) : (m.slideEl = t.slides[t.activeIndex]);
          let e = m.slideEl.querySelector(`.${s.containerClass}`);
          e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            (m.imageEl = e),
            (m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0);
        }
        m.imageEl &&
          m.imageWrapEl &&
          (t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
          (e.scale = 1),
          (c = 1),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
          (m.slideEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function A(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? L() : P(e);
      }
      function I() {
        return {
          passiveListener: !!t.params.passiveListeners && { passive: !0, capture: !1 },
          activeListenerWithCapture: !t.params.passiveListeners || { passive: !1, capture: !0 },
        };
      }
      function z() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: a } = I();
        t.wrapperEl.addEventListener("pointerdown", x, s),
          t.wrapperEl.addEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, T, s);
          }),
          t.wrapperEl.addEventListener("pointermove", M, a);
      }
      function $() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: a } = I();
        t.wrapperEl.removeEventListener("pointerdown", x, s),
          t.wrapperEl.removeEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, T, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", M, a);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => v,
        set(e) {
          if (v !== e) {
            const t = m.imageEl,
              s = m.slideEl;
            i("zoomChange", e, t, s);
          }
          v = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && z();
        }),
        a("destroy", () => {
          $();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!m.imageEl) return;
              if (h.isTouched) return;
              s.android && e.cancelable && e.preventDefault(), (h.isTouched = !0);
              const a = u.length > 0 ? u[0] : e;
              (h.touchesStart.x = a.pageX), (h.touchesStart.y = a.pageY);
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.imageEl) return;
              if (!h.isTouched || !h.isMoved) return (h.isTouched = !1), void (h.isMoved = !1);
              (h.isTouched = !1), (h.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = h.currentX + i,
                n = g.y * a,
                l = h.currentY + n;
              0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
              const o = Math.max(s, a);
              (h.currentX = r), (h.currentY = l);
              const d = h.width * e.scale,
                c = h.height * e.scale;
              (h.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (h.maxX = -h.minX),
                (h.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (h.maxY = -h.minY),
                (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
                (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
                (m.imageWrapEl.style.transitionDuration = `${o}ms`),
                (m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && A(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, { enable: z, disable: $, in: P, out: L, toggle: A });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; ) (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e ? ((i = s(this.x, e)), (a = i - 1), ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = (a) => {
                (t.controller.control = a.detail[0]), t.update(), e.removeEventListener("init", s);
              };
              e.addEventListener("init", s);
            }
          } else t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid);
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                  ((r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    l(() => {
                      s.updateAutoHeight();
                    }),
                  x(s.wrapperEl, () => {
                    i && s.transitionEnd();
                  })));
            }
            if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function l(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function d(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function c(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function p(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function m(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function h(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = e.target;
        (t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(se(t.params.pagination.bulletClass))) ||
          (t.navigation &&
            t.navigation.nextEl &&
            a === t.navigation.nextEl &&
            ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.prevEl &&
            a === t.navigation.prevEl &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination && a.matches(se(t.params.pagination.bulletClass)) && a.click());
      }
      function f() {
        return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
      }
      function g() {
        return f() && t.params.pagination.clickable;
      }
      const w = (e, t, s) => {
          l(e),
            "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)),
            p(e, s),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        b = () => {
          t.a11y.clicked = !0;
        },
        E = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        x = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0), t.slideTo(t.slides.indexOf(s), 0));
        },
        S = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((a, i) => {
              const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
              p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
            });
        },
        T = () => {
          const e = t.params.a11y;
          t.el.append(i);
          const s = t.el;
          e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
          const a = t.wrapperEl,
            r =
              e.id ||
              a.getAttribute("id") ||
              `swiper-wrapper-${((l = 16), void 0 === l && (l = 16), "x".repeat(l).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
          var l;
          const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          (d = r),
            n(a).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(a, o),
            S();
          let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
          if (((u = n(u)), (m = n(m)), u && u.forEach((t) => w(t, r, e.nextSlideMessage)), m && m.forEach((t) => w(t, r, e.prevSlideMessage)), g())) {
            (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e) => {
              e.addEventListener("keydown", h);
            });
          }
          t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", b, !0), t.el.addEventListener("pointerup", E, !0);
        };
      a("beforeInit", () => {
        (i = v("span", t.params.a11y.notificationClass)), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true");
      }),
        a("afterInit", () => {
          t.params.a11y.enabled && T();
        }),
        a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t.params.a11y.enabled && S();
        }),
        a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
            })();
        }),
        a("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              f() &&
                t.pagination.bullets.forEach((s) => {
                  t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))),
                    s.matches(se(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
                });
            })();
        }),
        a("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              i && i.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              (e = n(e)),
                (s = n(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", h)),
                s && s.forEach((e) => e.removeEventListener("keydown", h)),
                g() &&
                  (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e) => {
                    e.removeEventListener("keydown", h);
                  });
              t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", b, !0), t.el.removeEventListener("pointerup", E, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), (d = `${s}/${e ? `${e}/` : ""}${d}`);
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) || (t.params.history.replaceState ? a.history.replaceState({ value: d }, null, d) : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides[i];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState) return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
              (i = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                  : t.params.history.replaceState || e.addEventListener("popstate", p);
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState || e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.filter((e) => e.getAttribute("data-hash") === s)[0];
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0]);
          },
        },
      });
      const c = () => {
          i("hashChange");
          const e = o.location.hash.replace("#", ""),
            s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
          if (e !== (s ? s.getAttribute("data-hash") : "")) {
            const s = t.params.hashNavigation.getSlideIndex(t, e);
            if (void 0 === s || Number.isNaN(s)) return;
            t.slideTo(s);
          }
        },
        p = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
            s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
          t.params.hashNavigation.replaceState && d.history && d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet"))
            : ((o.location.hash = s || ""), i("hashSet"));
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                a = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && p();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && p();
        });
    },
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } });
      let d,
        c,
        p,
        u,
        m,
        h,
        f,
        g,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = o && o.autoplay ? o.autoplay.delay : 3e3,
        b = new Date().getTime();
      function y(e) {
        i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || C());
      }
      const E = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((w = d), (c = !1));
          const e = i.autoplay.paused ? d : b + w - new Date().getTime();
          (i.autoplay.timeLeft = e),
            l("autoplayTimeLeft", e, e / v),
            (s = requestAnimationFrame(() => {
              E();
            }));
        },
        x = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), E();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (v = i.params.autoplay.delay), (w = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (((e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e) => e.classList.contains("swiper-slide-active"))[0] : i.slides[i.activeIndex]), !e)) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) && r > 0 && void 0 === e && ((a = r), (v = r), (w = r)), (d = a);
          const n = i.params.speed,
            o = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(n, !0, !0), l("autoplay"))
                  : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")),
                i.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    x();
                  })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, a)))
              : requestAnimationFrame(() => {
                  o();
                }),
            a
          );
        },
        S = () => {
          (b = new Date().getTime()), (i.autoplay.running = !0), x(), l("autoplayStart");
        },
        T = () => {
          (i.autoplay.running = !1), clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop");
        },
        M = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const a = () => {
            l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C();
          };
          if (((i.autoplay.paused = !0), s)) return h && (d = i.params.autoplay.delay), (h = !1), void a();
          const r = d || i.params.autoplay.delay;
          (d = r - (new Date().getTime() - b)), (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a());
        },
        C = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()), f ? ((f = !1), x(d)) : x(), (i.autoplay.paused = !1), l("autoplayResume"));
        },
        P = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = a();
          "hidden" === e.visibilityState && ((f = !0), M(!0)), "visible" === e.visibilityState && C();
        },
        L = (e) => {
          "mouse" === e.pointerType && ((f = !0), (g = !0), i.animating || i.autoplay.paused || M(!0));
        },
        A = (e) => {
          "mouse" === e.pointerType && ((g = !1), i.autoplay.paused && C());
        };
      n("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", A)),
          a().addEventListener("visibilitychange", P),
          S());
      }),
        n("destroy", () => {
          i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", A), a().removeEventListener("visibilitychange", P), i.autoplay.running && T();
        }),
        n("_freeModeStaticRelease", () => {
          (u || f) && C();
        }),
        n("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
        }),
        n("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? T()
              : ((p = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  (f = !0), (u = !0), M(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && p) {
            if ((clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction)) return (u = !1), void (p = !1);
            u && i.params.cssMode && C(), (u = !1), (p = !1);
          }
        }),
        n("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: S, stop: T, pause: M, resume: C });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        (i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s), t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
            Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
            t.thumbs.swiper.update();
        else if (c(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new s(a)), (n = !0);
        }
        return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
      }
      function d(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.forEach((e) => e.classList.remove(r)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e) => {
              e.classList.add(r);
            });
        else for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const i = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.filter((e) => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`)[0];
            (r = s.slides.indexOf(e)), (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(r) < 0 &&
              (s.params.centeredSlides ? (r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1) : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const s = a(),
                i = () => {
                  const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                  if (a && a.swiper) (e.swiper = a.swiper), o(), d(!0);
                  else if (a) {
                    const s = (i) => {
                      (e.swiper = i.detail[0]), a.removeEventListener("init", s), o(), d(!0), e.swiper.update(), t.update();
                    };
                    a.addEventListener("init", s);
                  }
                  return a;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), d(!0);
        }),
        i("slideChange update resize observerUpdate", () => {
          d();
        }),
        i("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), (t.touchEventsData.velocities.length = 0), t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }),
                e.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: o() });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const { params: r, wrapperEl: n, rtlTranslate: l, snapGrid: d, touchEventsData: c } = t,
                p = o() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                      (i > 150 || o() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio), (c.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  l && (p = -p);
                  let u,
                    m = !1;
                  const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), (u = t.maxTranslate()), (m = !0), (c.allowMomentumBounce = !0))
                      : (p = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (p > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), (u = t.minTranslate()), (m = !0), (c.allowMomentumBounce = !0))
                      : (p = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break;
                      }
                    (p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1]), (p = -p);
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (((e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity)), r.freeMode.sticky)) {
                      const s = Math.abs((l ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      x(n, () => {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (a("momentumBounce"),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(u),
                              x(n, () => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a("_freeModeNoMomentumRelease"),
                      t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        x(n, () => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(p),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        i,
        { swiper: r, extendParams: n, on: l } = e;
      n({ grid: { rows: 1, fill: "column" } });
      const o = () => {
        let e = r.params.spaceBetween;
        return "string" == typeof e && e.indexOf("%") >= 0 ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size) : "string" == typeof e && (e = parseFloat(e)), e;
      };
      l("init", () => {
        i = r.params.grid && r.params.grid.rows > 1;
      }),
        l("update", () => {
          const { params: e, el: t } = r,
            s = e.grid && e.grid.rows > 1;
          i && !s
            ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), (a = 1), r.emitContainerClasses())
            : !i &&
              s &&
              (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()),
            (i = s);
        }),
        (r.grid = {
          initSlides: (e) => {
            const { slidesPerView: i } = r.params,
              { rows: n, fill: l } = r.params.grid,
              o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
            (a = Math.floor(o / n)), (t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n), "auto" !== i && "row" === l && (t = Math.max(t, i * n)), (s = t / n);
          },
          unsetSlides: () => {
            r.slides &&
              r.slides.forEach((e) => {
                e.swiperSlideGridSet && ((e.style.height = ""), (e.style[r.getDirectionLabel("margin-top")] = ""));
              });
          },
          updateSlide: (e, i, n) => {
            const { slidesPerGroup: l } = r.params,
              d = o(),
              { rows: c, fill: p } = r.params.grid,
              u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
            let m, h, f;
            if ("row" === p && l > 1) {
              const s = Math.floor(e / (l * c)),
                a = e - c * l * s,
                r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
              (f = Math.floor(a / r)), (h = a - f * r + s * l), (m = h + (f * t) / c), (i.style.order = m);
            } else
              "column" === p
                ? ((h = Math.floor(e / c)), (f = e - h * c), (h > a || (h === a && f === c - 1)) && ((f += 1), f >= c && ((f = 0), (h += 1))))
                : ((f = Math.floor(e / s)), (h = e - f * s));
            (i.row = f),
              (i.column = h),
              (i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`),
              (i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : ""),
              (i.swiperSlideGridSet = !0);
          },
          updateWrapperSize: (e, s) => {
            const { centeredSlides: a, roundLengths: i } = r.params,
              n = o(),
              { rows: l } = r.params.grid;
            if (
              ((r.virtualSize = (e + n) * t),
              (r.virtualSize = Math.ceil(r.virtualSize / l) - n),
              r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`),
              a)
            ) {
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a);
              }
              s.splice(0, s.length), s.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, { appendSlide: ae.bind(t), prependSlide: ie.bind(t), addSlide: re.bind(t), removeSlide: ne.bind(t), removeAllSlides: le.bind(t) });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        oe({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let a = -e.swiperSlideOffset;
              t.params.virtualTranslate || (a -= t.translate);
              let i = 0;
              t.isHorizontal() || ((i = a), (a = 0));
              const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = de(0, e);
              (n.style.opacity = r), (n.style.transform = `translate3d(${a}px, ${i}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              ce({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
          },
          overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
      const i = (e, t, s) => {
        let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
          i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || ((a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" "))), e.append(a)),
          i || ((i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" "))), e.append(i)),
          a && (a.style.opacity = Math.max(-t, 0)),
          i && (i.style.opacity = Math.max(t, 0));
      };
      oe({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { el: e, wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: d } = t,
            c = t.params.cubeEffect,
            p = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
          let m,
            h = 0;
          c.shadow &&
            (p
              ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")), m || ((m = v("div", "swiper-cube-shadow")), t.wrapperEl.append(m)), (m.style.height = `${r}px`))
              : ((m = e.querySelector(".swiper-cube-shadow")), m || ((m = v("div", "swiper-cube-shadow")), e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            let s = e;
            u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let m = 0,
              f = 0,
              g = 0;
            s % 4 == 0
              ? ((m = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
              ? ((m = 0), (g = 4 * -n * o))
              : (s - 2) % 4 == 0
              ? ((m = o + 4 * n * o), (g = o))
              : (s - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * n)),
              l && (m = -m),
              p || ((f = m), (m = 0));
            const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0}deg) translate3d(${m}px, ${f}px, ${g}px)`;
            d <= 1 && d > -1 && ((h = 90 * s + 90 * d), l && (h = 90 * -s - 90 * d)), (t.style.transform = v), c.slideShadows && i(t, d, p);
          }
          if (((s.style.transformOrigin = `50% 50% -${o / 2}px`), (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`), c.shadow))
            if (p) m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t = 1.5 - (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                s = c.shadowScale,
                a = c.shadowScale / t,
                i = c.shadowOffset;
              m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`;
            }
          const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          (s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${f}px`);
        },
        setTransition: (e) => {
          const { el: s, slides: a } = t;
          if (
            (a.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
            t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (e, s) => {
        let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
          i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = pe("flip", e, t.isHorizontal() ? "left" : "top")),
          i || (i = pe("flip", e, t.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-s, 0)),
          i && (i.style.opacity = Math.max(s, 0));
      };
      oe({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            let l = n.progress;
            t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
            const o = n.swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal() ? s && (d = -d) : ((u = p), (p = 0), (c = -d), (d = 0)), (n.style.zIndex = -Math.abs(Math.round(l)) + e.length), a.slideShadows && i(n, l);
            const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            de(0, n).style.transform = m;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            ce({ swiper: t, duration: e, transformElements: s });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } }),
        oe({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a[e],
                s = i[e],
                l = (o - t.swiperSlideOffset - s / 2) / s,
                p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
              let u = n ? d * p : 0,
                m = n ? 0 : d * p,
                h = -c * Math.abs(p),
                f = r.stretch;
              "string" == typeof f && -1 !== f.indexOf("%") && (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
              if (((de(0, t).style.transform = b), (t.style.zIndex = 1 - Math.abs(Math.round(p))), r.slideShadows)) {
                let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                  s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = pe("coverflow", t, n ? "left" : "top")),
                  s || (s = pe("coverflow", t, n ? "right" : "bottom")),
                  e && (e.style.opacity = p > 0 ? p : 0),
                  s && (s.style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => h(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
          next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      oe({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e[s],
              o = a.progress,
              d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
            let c = d;
            l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
            const p = a.swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              m = [0, 0, 0];
            let h = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
            d < 0 ? ((f = r.next), (h = !0)) : d > 0 && ((f = r.prev), (h = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
              }),
              m.forEach((e, t) => {
                m[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a.style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
              w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              y = `translate3d(${g}) ${v} ${w}`;
            if ((h && f.shadow) || !h) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && f.shadow && (e = pe("creative", a)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const E = de(0, a);
            (E.style.transform = y), (E.style.opacity = b), f.origin && (E.style.transformOrigin = f.origin);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            ce({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
        oe({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: a } = t,
              i = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = a ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                c = d.progress,
                p = Math.min(Math.max(c, -4), 4);
              let u = d.swiperSlideOffset;
              t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(p);
              let g = 1,
                v = -i.perSlideRotate * p,
                w = i.perSlideOffset - 0.75 * Math.abs(p);
              const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
                E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
              if (y || E) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (v += -28 * p * e), (g += -0.5 * e), (w += 96 * e), (h = -25 * e * Math.abs(p) + "%");
              }
              if (
                ((m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`), !t.isHorizontal())
              ) {
                const e = h;
                (h = m), (m = e);
              }
              const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? (a ? -v : v) : 0}deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                e || (e = pe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - 0.5) / 0.5, 0), 1));
              }
              d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
              de(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            s.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              ce({ swiper: t, duration: e, transformElements: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
        });
    },
  ];
  return ee.use(ue), ee;
})();
//# sourceMappingURL=swiper-bundle.min.js.map

//

/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = n()) : "function" == typeof define && define.amd ? define(n) : ((t = t || self).Headroom = n());
})(this, function () {
  "use strict";
  function t() {
    return "undefined" != typeof window;
  }
  function d(t) {
    return (function (t) {
      return (
        t &&
        t.document &&
        (function (t) {
          return 9 === t.nodeType;
        })(t.document)
      );
    })(t)
      ? (function (t) {
          var n = t.document,
            o = n.body,
            s = n.documentElement;
          return {
            scrollHeight: function () {
              return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight);
            },
            height: function () {
              return t.innerHeight || s.clientHeight || o.clientHeight;
            },
            scrollY: function () {
              return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop;
            },
          };
        })(t)
      : (function (t) {
          return {
            scrollHeight: function () {
              return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
            },
            height: function () {
              return Math.max(t.offsetHeight, t.clientHeight);
            },
            scrollY: function () {
              return t.scrollTop;
            },
          };
        })(t);
  }
  function n(t, s, e) {
    var n,
      o = (function () {
        var n = !1;
        try {
          var t = {
            get passive() {
              n = !0;
            },
          };
          window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
        } catch (t) {
          n = !1;
        }
        return n;
      })(),
      i = !1,
      r = d(t),
      l = r.scrollY(),
      a = {};
    function c() {
      var t = Math.round(r.scrollY()),
        n = r.height(),
        o = r.scrollHeight();
      (a.scrollY = t),
        (a.lastScrollY = l),
        (a.direction = l < t ? "down" : "up"),
        (a.distance = Math.abs(t - l)),
        (a.isOutOfBounds = t < 0 || o < t + n),
        (a.top = t <= s.offset[a.direction]),
        (a.bottom = o <= t + n),
        (a.toleranceExceeded = a.distance > s.tolerance[a.direction]),
        e(a),
        (l = t),
        (i = !1);
    }
    function h() {
      i || ((i = !0), (n = requestAnimationFrame(c)));
    }
    var u = !!o && { passive: !0, capture: !1 };
    return (
      t.addEventListener("scroll", h, u),
      c(),
      {
        destroy: function () {
          cancelAnimationFrame(n), t.removeEventListener("scroll", h, u);
        },
      }
    );
  }
  function o(t) {
    return t === Object(t) ? t : { down: t, up: t };
  }
  function s(t, n) {
    (n = n || {}),
      Object.assign(this, s.options, n),
      (this.classes = Object.assign({}, s.options.classes, n.classes)),
      (this.elem = t),
      (this.tolerance = o(this.tolerance)),
      (this.offset = o(this.offset)),
      (this.initialised = !1),
      (this.frozen = !1);
  }
  return (
    (s.prototype = {
      constructor: s,
      init: function () {
        return (
          s.cutsTheMustard &&
            !this.initialised &&
            (this.addClass("initial"),
            (this.initialised = !0),
            setTimeout(
              function (t) {
                t.scrollTracker = n(t.scroller, { offset: t.offset, tolerance: t.tolerance }, t.update.bind(t));
              },
              100,
              this
            )),
          this
        );
      },
      destroy: function () {
        (this.initialised = !1), Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy();
      },
      unpin: function () {
        (!this.hasClass("pinned") && this.hasClass("unpinned")) || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this));
      },
      pin: function () {
        this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this));
      },
      freeze: function () {
        (this.frozen = !0), this.addClass("frozen");
      },
      unfreeze: function () {
        (this.frozen = !1), this.removeClass("frozen");
      },
      top: function () {
        this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this));
      },
      notTop: function () {
        this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this));
      },
      bottom: function () {
        this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this));
      },
      notBottom: function () {
        this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this));
      },
      shouldUnpin: function (t) {
        return "down" === t.direction && !t.top && t.toleranceExceeded;
      },
      shouldPin: function (t) {
        return ("up" === t.direction && t.toleranceExceeded) || t.top;
      },
      addClass: function (t) {
        this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "));
      },
      removeClass: function (t) {
        this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "));
      },
      hasClass: function (t) {
        return this.classes[t].split(" ").every(function (t) {
          return this.classList.contains(t);
        }, this.elem);
      },
      update: function (t) {
        t.isOutOfBounds ||
          (!0 !== this.frozen &&
            (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin()));
      },
    }),
    (s.options = {
      tolerance: { up: 0, down: 0 },
      offset: 0,
      scroller: t() ? window : null,
      classes: {
        frozen: "headroom--frozen",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        initial: "headroom",
      },
    }),
    (s.cutsTheMustard = !!(t() && function () {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame)),
    s
  );
});

//

/**
 * (c) Iconify
 *
 * For the full copyright and license information, please view the license.txt
 * files at https://github.com/iconify/iconify
 *
 * Licensed under MIT.
 *
 * @license MIT
 * @version 1.0.7
 */
!(function () {
  "use strict";
  const t = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
    e = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
    n = Object.freeze({ ...t, ...e }),
    o = Object.freeze({ ...n, body: "", hidden: !1 }),
    i = Object.freeze({ width: null, height: null }),
    r = Object.freeze({ ...i, ...e });
  const s = /[\s,]+/;
  const c = { ...r, preserveAspectRatio: "" };
  function a(t) {
    const e = { ...c },
      n = (e, n) => t.getAttribute(e) || n;
    var o;
    return (
      (e.width = n("width", null)),
      (e.height = n("height", null)),
      (e.rotate = (function (t, e = 0) {
        const n = t.replace(/^-?[0-9.]*/, "");
        function o(t) {
          for (; t < 0; ) t += 4;
          return t % 4;
        }
        if ("" === n) {
          const e = parseInt(t);
          return isNaN(e) ? 0 : o(e);
        }
        if (n !== t) {
          let e = 0;
          switch (n) {
            case "%":
              e = 25;
              break;
            case "deg":
              e = 90;
          }
          if (e) {
            let i = parseFloat(t.slice(0, t.length - n.length));
            return isNaN(i) ? 0 : ((i /= e), i % 1 == 0 ? o(i) : 0);
          }
        }
        return e;
      })(n("rotate", ""))),
      (o = e),
      n("flip", "")
        .split(s)
        .forEach((t) => {
          switch (t.trim()) {
            case "horizontal":
              o.hFlip = !0;
              break;
            case "vertical":
              o.vFlip = !0;
          }
        }),
      (e.preserveAspectRatio = n("preserveAspectRatio", n("preserveaspectratio", ""))),
      e
    );
  }
  const u = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    l = (t, e, n, o = "") => {
      const i = t.split(":");
      if ("@" === t.slice(0, 1)) {
        if (i.length < 2 || i.length > 3) return null;
        o = i.shift().slice(1);
      }
      if (i.length > 3 || !i.length) return null;
      if (i.length > 1) {
        const t = i.pop(),
          n = i.pop(),
          r = { provider: i.length > 0 ? i[0] : o, prefix: n, name: t };
        return e && !f(r) ? null : r;
      }
      const r = i[0],
        s = r.split("-");
      if (s.length > 1) {
        const t = { provider: o, prefix: s.shift(), name: s.join("-") };
        return e && !f(t) ? null : t;
      }
      if (n && "" === o) {
        const t = { provider: o, prefix: "", name: r };
        return e && !f(t, n) ? null : t;
      }
      return null;
    },
    f = (t, e) => !!t && !(("" !== t.provider && !t.provider.match(u)) || !((e && "" === t.prefix) || t.prefix.match(u)) || !t.name.match(u));
  function d(t, n) {
    const i = (function (t, e) {
      const n = {};
      !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
      const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
      return o && (n.rotate = o), n;
    })(t, n);
    for (const r in o) r in e ? r in t && !(r in i) && (i[r] = e[r]) : r in n ? (i[r] = n[r]) : r in t && (i[r] = t[r]);
    return i;
  }
  function h(t, e, n) {
    const o = t.icons,
      i = t.aliases || Object.create(null);
    let r = {};
    function s(t) {
      r = d(o[t] || i[t], r);
    }
    return s(e), n.forEach(s), d(t, r);
  }
  function p(t, e) {
    const n = [];
    if ("object" != typeof t || "object" != typeof t.icons) return n;
    t.not_found instanceof Array &&
      t.not_found.forEach((t) => {
        e(t, null), n.push(t);
      });
    const o = (function (t, e) {
      const n = t.icons,
        o = t.aliases || Object.create(null),
        i = Object.create(null);
      return (
        (e || Object.keys(n).concat(Object.keys(o))).forEach(function t(e) {
          if (n[e]) return (i[e] = []);
          if (!(e in i)) {
            i[e] = null;
            const n = o[e] && o[e].parent,
              r = n && t(n);
            r && (i[e] = [n].concat(r));
          }
          return i[e];
        }),
        i
      );
    })(t);
    for (const i in o) {
      const r = o[i];
      r && (e(i, h(t, i, r)), n.push(i));
    }
    return n;
  }
  const g = { provider: "", aliases: {}, not_found: {}, ...t };
  function m(t, e) {
    for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
    return !0;
  }
  function b(t) {
    if ("object" != typeof t || null === t) return null;
    const e = t;
    if ("string" != typeof e.prefix || !t.icons || "object" != typeof t.icons) return null;
    if (!m(t, g)) return null;
    const n = e.icons;
    for (const t in n) {
      const e = n[t];
      if (!t.match(u) || "string" != typeof e.body || !m(e, o)) return null;
    }
    const i = e.aliases || Object.create(null);
    for (const t in i) {
      const e = i[t],
        r = e.parent;
      if (!t.match(u) || "string" != typeof r || (!n[r] && !i[r]) || !m(e, o)) return null;
    }
    return e;
  }
  const y = Object.create(null);
  function v(t, e) {
    const n = y[t] || (y[t] = Object.create(null));
    return (
      n[e] ||
      (n[e] = (function (t, e) {
        return { provider: t, prefix: e, icons: Object.create(null), missing: new Set() };
      })(t, e))
    );
  }
  function x(t, e) {
    return b(e)
      ? p(e, (e, n) => {
          n ? (t.icons[e] = n) : t.missing.add(e);
        })
      : [];
  }
  function w(t, e) {
    let n = [];
    return (
      ("string" == typeof t ? [t] : Object.keys(y)).forEach((t) => {
        ("string" == typeof t && "string" == typeof e ? [e] : Object.keys(y[t] || {})).forEach((e) => {
          const o = v(t, e);
          n = n.concat(Object.keys(o.icons).map((n) => ("" !== t ? "@" + t + ":" : "") + e + ":" + n));
        });
      }),
      n
    );
  }
  let k = !1;
  function j(t) {
    return "boolean" == typeof t && (k = t), k;
  }
  function A(t) {
    const e = "string" == typeof t ? l(t, !0, k) : t;
    if (e) {
      const t = v(e.provider, e.prefix),
        n = e.name;
      return t.icons[n] || (t.missing.has(n) ? null : void 0);
    }
  }
  function _(t, e) {
    const n = l(t, !0, k);
    if (!n) return !1;
    return (function (t, e, n) {
      try {
        if ("string" == typeof n.body) return (t.icons[e] = { ...n }), !0;
      } catch (t) {}
      return !1;
    })(v(n.provider, n.prefix), n.name, e);
  }
  function C(t, e) {
    if ("object" != typeof t) return !1;
    if (("string" != typeof e && (e = t.provider || ""), k && !e && !t.prefix)) {
      let e = !1;
      return (
        b(t) &&
          ((t.prefix = ""),
          p(t, (t, n) => {
            n && _(t, n) && (e = !0);
          })),
        e
      );
    }
    const n = t.prefix;
    if (!f({ provider: e, prefix: n, name: "a" })) return !1;
    return !!x(v(e, n), t);
  }
  function O(t) {
    return !!A(t);
  }
  function S(t) {
    const e = A(t);
    return e ? { ...n, ...e } : null;
  }
  function I(t, e) {
    t.forEach((t) => {
      const n = t.loaderCallbacks;
      n && (t.loaderCallbacks = n.filter((t) => t.id !== e));
    });
  }
  let E = 0;
  const M = Object.create(null);
  function T(t, e) {
    M[t] = e;
  }
  function F(t) {
    return M[t] || M[""];
  }
  var N = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
  function P(t, e, n, o) {
    const i = t.resources.length,
      r = t.random ? Math.floor(Math.random() * i) : t.index;
    let s;
    if (t.random) {
      let e = t.resources.slice(0);
      for (s = []; e.length > 1; ) {
        const t = Math.floor(Math.random() * e.length);
        s.push(e[t]), (e = e.slice(0, t).concat(e.slice(t + 1)));
      }
      s = s.concat(e);
    } else s = t.resources.slice(r).concat(t.resources.slice(0, r));
    const c = Date.now();
    let a,
      u = "pending",
      l = 0,
      f = null,
      d = [],
      h = [];
    function p() {
      f && (clearTimeout(f), (f = null));
    }
    function g() {
      "pending" === u && (u = "aborted"),
        p(),
        d.forEach((t) => {
          "pending" === t.status && (t.status = "aborted");
        }),
        (d = []);
    }
    function m(t, e) {
      e && (h = []), "function" == typeof t && h.push(t);
    }
    function b() {
      (u = "failed"),
        h.forEach((t) => {
          t(void 0, a);
        });
    }
    function y() {
      d.forEach((t) => {
        "pending" === t.status && (t.status = "aborted");
      }),
        (d = []);
    }
    function v() {
      if ("pending" !== u) return;
      p();
      const o = s.shift();
      if (void 0 === o)
        return d.length
          ? void (f = setTimeout(() => {
              p(), "pending" === u && (y(), b());
            }, t.timeout))
          : void b();
      const i = {
        status: "pending",
        resource: o,
        callback: (e, n) => {
          !(function (e, n, o) {
            const i = "success" !== n;
            switch (((d = d.filter((t) => t !== e)), u)) {
              case "pending":
                break;
              case "failed":
                if (i || !t.dataAfterTimeout) return;
                break;
              default:
                return;
            }
            if ("abort" === n) return (a = o), void b();
            if (i) return (a = o), void (d.length || (s.length ? v() : b()));
            if ((p(), y(), !t.random)) {
              const n = t.resources.indexOf(e.resource);
              -1 !== n && n !== t.index && (t.index = n);
            }
            (u = "completed"),
              h.forEach((t) => {
                t(o);
              });
          })(i, e, n);
        },
      };
      d.push(i), l++, (f = setTimeout(v, t.rotate)), n(o, e, i.callback);
    }
    return (
      "function" == typeof o && h.push(o),
      setTimeout(v),
      function () {
        return { startTime: c, payload: e, status: u, queriesSent: l, queriesPending: d.length, subscribe: m, abort: g };
      }
    );
  }
  function R(t) {
    const e = { ...N, ...t };
    let n = [];
    function o() {
      n = n.filter((t) => "pending" === t().status);
    }
    return {
      query: function (t, i, r) {
        const s = P(e, t, i, (t, e) => {
          o(), r && r(t, e);
        });
        return n.push(s), s;
      },
      find: function (t) {
        return n.find((e) => t(e)) || null;
      },
      setIndex: (t) => {
        e.index = t;
      },
      getIndex: () => e.index,
      cleanup: o,
    };
  }
  function L(t) {
    let e;
    if ("string" == typeof t.resources) e = [t.resources];
    else if (((e = t.resources), !(e instanceof Array && e.length))) return null;
    return {
      resources: e,
      path: t.path || "/",
      maxURL: t.maxURL || 500,
      rotate: t.rotate || 750,
      timeout: t.timeout || 5e3,
      random: !0 === t.random,
      index: t.index || 0,
      dataAfterTimeout: !1 !== t.dataAfterTimeout,
    };
  }
  const z = Object.create(null),
    Q = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    q = [];
  for (; Q.length > 0; ) 1 === Q.length || Math.random() > 0.5 ? q.push(Q.shift()) : q.push(Q.pop());
  function D(t, e) {
    const n = L(e);
    return null !== n && ((z[t] = n), !0);
  }
  function U(t) {
    return z[t];
  }
  function J() {
    return Object.keys(z);
  }
  function $() {}
  z[""] = L({ resources: ["https://api.iconify.design"].concat(q) });
  const H = Object.create(null);
  function B(t, e, n) {
    let o, i;
    if ("string" == typeof t) {
      const e = F(t);
      if (!e) return n(void 0, 424), $;
      i = e.send;
      const r = (function (t) {
        if (!H[t]) {
          const e = U(t);
          if (!e) return;
          const n = { config: e, redundancy: R(e) };
          H[t] = n;
        }
        return H[t];
      })(t);
      r && (o = r.redundancy);
    } else {
      const e = L(t);
      if (e) {
        o = R(e);
        const n = F(t.resources ? t.resources[0] : "");
        n && (i = n.send);
      }
    }
    return o && i ? o.query(e, i, n)().abort : (n(void 0, 424), $);
  }
  const G = "iconify2",
    V = "iconify",
    K = V + "-count",
    W = V + "-version",
    X = 36e5;
  function Y(t, e) {
    try {
      return t.getItem(e);
    } catch (t) {}
  }
  function Z(t, e, n) {
    try {
      return t.setItem(e, n), !0;
    } catch (t) {}
  }
  function tt(t, e) {
    try {
      t.removeItem(e);
    } catch (t) {}
  }
  function et(t, e) {
    return Z(t, K, e.toString());
  }
  function nt(t) {
    return parseInt(Y(t, K)) || 0;
  }
  const ot = { local: !0, session: !0 },
    it = { local: new Set(), session: new Set() };
  let rt = !1;
  let st = "undefined" == typeof window ? {} : window;
  function ct(t) {
    const e = t + "Storage";
    try {
      if (st && st[e] && "number" == typeof st[e].length) return st[e];
    } catch (t) {}
    ot[t] = !1;
  }
  function at(t, e) {
    const n = ct(t);
    if (!n) return;
    const o = Y(n, W);
    if (o !== G) {
      if (o) {
        const t = nt(n);
        for (let e = 0; e < t; e++) tt(n, V + e.toString());
      }
      return Z(n, W, G), void et(n, 0);
    }
    const i = Math.floor(Date.now() / X) - 168,
      r = (t) => {
        const o = V + t.toString(),
          r = Y(n, o);
        if ("string" == typeof r) {
          try {
            const n = JSON.parse(r);
            if (
              "object" == typeof n &&
              "number" == typeof n.cached &&
              n.cached > i &&
              "string" == typeof n.provider &&
              "object" == typeof n.data &&
              "string" == typeof n.data.prefix &&
              e(n, t)
            )
              return !0;
          } catch (t) {}
          tt(n, o);
        }
      };
    let s = nt(n);
    for (let e = s - 1; e >= 0; e--) r(e) || (e === s - 1 ? (s--, et(n, s)) : it[t].add(e));
  }
  function ut() {
    if (!rt) {
      rt = !0;
      for (const t in ot)
        at(t, (t) => {
          const e = t.data,
            n = v(t.provider, e.prefix);
          if (!x(n, e).length) return !1;
          const o = e.lastModified || -1;
          return (n.lastModifiedCached = n.lastModifiedCached ? Math.min(n.lastModifiedCached, o) : o), !0;
        });
    }
  }
  function lt(t, e) {
    function n(n) {
      let o;
      if (!ot[n] || !(o = ct(n))) return;
      const i = it[n];
      let r;
      if (i.size) i.delete((r = Array.from(i).shift()));
      else if (((r = nt(o)), !et(o, r + 1))) return;
      const s = { cached: Math.floor(Date.now() / X), provider: t.provider, data: e };
      return Z(o, V + r.toString(), JSON.stringify(s));
    }
    rt || ut(),
      (e.lastModified &&
        !(function (t, e) {
          const n = t.lastModifiedCached;
          if (n && n >= e) return n === e;
          if (((t.lastModifiedCached = e), n))
            for (const n in ot)
              at(n, (n) => {
                const o = n.data;
                return n.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
              });
          return !0;
        })(t, e.lastModified)) ||
        (Object.keys(e.icons).length && (e.not_found && delete (e = Object.assign({}, e)).not_found, n("local") || n("session")));
  }
  function ft() {}
  function dt(t) {
    t.iconsLoaderFlag ||
      ((t.iconsLoaderFlag = !0),
      setTimeout(() => {
        (t.iconsLoaderFlag = !1),
          (function (t) {
            t.pendingCallbacksFlag ||
              ((t.pendingCallbacksFlag = !0),
              setTimeout(() => {
                t.pendingCallbacksFlag = !1;
                const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
                if (!e.length) return;
                let n = !1;
                const o = t.provider,
                  i = t.prefix;
                e.forEach((e) => {
                  const r = e.icons,
                    s = r.pending.length;
                  (r.pending = r.pending.filter((e) => {
                    if (e.prefix !== i) return !0;
                    const s = e.name;
                    if (t.icons[s]) r.loaded.push({ provider: o, prefix: i, name: s });
                    else {
                      if (!t.missing.has(s)) return (n = !0), !0;
                      r.missing.push({ provider: o, prefix: i, name: s });
                    }
                    return !1;
                  })),
                    r.pending.length !== s && (n || I([t], e.id), e.callback(r.loaded.slice(0), r.missing.slice(0), r.pending.slice(0), e.abort));
                });
              }));
          })(t);
      }));
  }
  const ht = (t, e) => {
      const n = (function (t, e = !0, n = !1) {
          const o = [];
          return (
            t.forEach((t) => {
              const i = "string" == typeof t ? l(t, e, n) : t;
              i && o.push(i);
            }),
            o
          );
        })(t, !0, j()),
        o = (function (t) {
          const e = { loaded: [], missing: [], pending: [] },
            n = Object.create(null);
          t.sort((t, e) =>
            t.provider !== e.provider ? t.provider.localeCompare(e.provider) : t.prefix !== e.prefix ? t.prefix.localeCompare(e.prefix) : t.name.localeCompare(e.name)
          );
          let o = { provider: "", prefix: "", name: "" };
          return (
            t.forEach((t) => {
              if (o.name === t.name && o.prefix === t.prefix && o.provider === t.provider) return;
              o = t;
              const i = t.provider,
                r = t.prefix,
                s = t.name,
                c = n[i] || (n[i] = Object.create(null)),
                a = c[r] || (c[r] = v(i, r));
              let u;
              u = s in a.icons ? e.loaded : "" === r || a.missing.has(s) ? e.missing : e.pending;
              const l = { provider: i, prefix: r, name: s };
              u.push(l);
            }),
            e
          );
        })(n);
      if (!o.pending.length) {
        let t = !0;
        return (
          e &&
            setTimeout(() => {
              t && e(o.loaded, o.missing, o.pending, ft);
            }),
          () => {
            t = !1;
          }
        );
      }
      const i = Object.create(null),
        r = [];
      let s, c;
      return (
        o.pending.forEach((t) => {
          const { provider: e, prefix: n } = t;
          if (n === c && e === s) return;
          (s = e), (c = n), r.push(v(e, n));
          const o = i[e] || (i[e] = Object.create(null));
          o[n] || (o[n] = []);
        }),
        o.pending.forEach((t) => {
          const { provider: e, prefix: n, name: o } = t,
            r = v(e, n),
            s = r.pendingIcons || (r.pendingIcons = new Set());
          s.has(o) || (s.add(o), i[e][n].push(o));
        }),
        r.forEach((t) => {
          const { provider: e, prefix: n } = t;
          i[e][n].length &&
            (function (t, e) {
              t.iconsToLoad ? (t.iconsToLoad = t.iconsToLoad.concat(e).sort()) : (t.iconsToLoad = e),
                t.iconsQueueFlag ||
                  ((t.iconsQueueFlag = !0),
                  setTimeout(() => {
                    t.iconsQueueFlag = !1;
                    const { provider: e, prefix: n } = t,
                      o = t.iconsToLoad;
                    let i;
                    delete t.iconsToLoad,
                      o &&
                        (i = F(e)) &&
                        i.prepare(e, n, o).forEach((n) => {
                          B(e, n, (e) => {
                            if ("object" != typeof e)
                              n.icons.forEach((e) => {
                                t.missing.add(e);
                              });
                            else
                              try {
                                const n = x(t, e);
                                if (!n.length) return;
                                const o = t.pendingIcons;
                                o &&
                                  n.forEach((t) => {
                                    o.delete(t);
                                  }),
                                  lt(t, e);
                              } catch (t) {
                                console.error(t);
                              }
                            dt(t);
                          });
                        });
                  }));
            })(t, i[e][n]);
        }),
        e
          ? (function (t, e, n) {
              const o = E++,
                i = I.bind(null, n, o);
              if (!e.pending.length) return i;
              const r = { id: o, icons: e, callback: t, abort: i };
              return (
                n.forEach((t) => {
                  (t.loaderCallbacks || (t.loaderCallbacks = [])).push(r);
                }),
                i
              );
            })(e, o, r)
          : ft
      );
    },
    pt = (t) =>
      new Promise((e, o) => {
        const i = "string" == typeof t ? l(t, !0) : t;
        i
          ? ht([i || t], (r) => {
              if (r.length && i) {
                const t = A(i);
                if (t) return void e({ ...n, ...t });
              }
              o(t);
            })
          : o(t);
      });
  function gt(t, e) {
    const n = "string" == typeof t ? l(t, !0, !0) : null;
    if (!n) {
      const e = (function (t) {
        try {
          const e = "string" == typeof t ? JSON.parse(t) : t;
          if ("string" == typeof e.body) return { ...e };
        } catch (t) {}
      })(t);
      return { value: t, data: e };
    }
    const o = A(n);
    if (void 0 !== o || !n.prefix) return { value: t, name: n, data: o };
    const i = ht([n], () => e(t, n, A(n)));
    return { value: t, name: n, loading: i };
  }
  function mt(t) {
    return t.hasAttribute("inline");
  }
  let bt = !1;
  try {
    bt = 0 === navigator.vendor.indexOf("Apple");
  } catch (t) {}
  const yt = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    vt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function xt(t, e, n) {
    if (1 === e) return t;
    if (((n = n || 100), "number" == typeof t)) return Math.ceil(t * e * n) / n;
    if ("string" != typeof t) return t;
    const o = t.split(yt);
    if (null === o || !o.length) return t;
    const i = [];
    let r = o.shift(),
      s = vt.test(r);
    for (;;) {
      if (s) {
        const t = parseFloat(r);
        isNaN(t) ? i.push(r) : i.push(Math.ceil(t * e * n) / n);
      } else i.push(r);
      if (((r = o.shift()), void 0 === r)) return i.join("");
      s = !s;
    }
  }
  function wt(t, e) {
    const o = { ...n, ...t },
      i = { ...r, ...e },
      s = { left: o.left, top: o.top, width: o.width, height: o.height };
    let c = o.body;
    [o, i].forEach((t) => {
      const e = [],
        n = t.hFlip,
        o = t.vFlip;
      let i,
        r = t.rotate;
      switch (
        (n
          ? o
            ? (r += 2)
            : (e.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), e.push("scale(-1 1)"), (s.top = s.left = 0))
          : o && (e.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), e.push("scale(1 -1)"), (s.top = s.left = 0)),
        r < 0 && (r -= 4 * Math.floor(r / 4)),
        (r %= 4),
        r)
      ) {
        case 1:
          (i = s.height / 2 + s.top), e.unshift("rotate(90 " + i.toString() + " " + i.toString() + ")");
          break;
        case 2:
          e.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
          break;
        case 3:
          (i = s.width / 2 + s.left), e.unshift("rotate(-90 " + i.toString() + " " + i.toString() + ")");
      }
      r % 2 == 1 && (s.left !== s.top && ((i = s.left), (s.left = s.top), (s.top = i)), s.width !== s.height && ((i = s.width), (s.width = s.height), (s.height = i))),
        e.length && (c = '<g transform="' + e.join(" ") + '">' + c + "</g>");
    });
    const a = i.width,
      u = i.height,
      l = s.width,
      f = s.height;
    let d, h;
    null === a ? ((h = null === u ? "1em" : "auto" === u ? f : u), (d = xt(h, l / f))) : ((d = "auto" === a ? l : a), (h = null === u ? xt(d, f / l) : "auto" === u ? f : u));
    const p = {},
      g = (t, e) => {
        ((t) => "unset" === t || "undefined" === t || "none" === t)(e) || (p[t] = e.toString());
      };
    return g("width", d), g("height", h), (p.viewBox = s.left.toString() + " " + s.top.toString() + " " + l.toString() + " " + f.toString()), { attributes: p, body: c };
  }
  let kt = (() => {
    let t;
    try {
      if (((t = fetch), "function" == typeof t)) return t;
    } catch (t) {}
  })();
  function jt(t) {
    kt = t;
  }
  function At() {
    return kt;
  }
  const _t = {
    prepare: (t, e, n) => {
      const o = [],
        i = (function (t, e) {
          const n = U(t);
          if (!n) return 0;
          let o;
          if (n.maxURL) {
            let t = 0;
            n.resources.forEach((e) => {
              const n = e;
              t = Math.max(t, n.length);
            });
            const i = e + ".json?icons=";
            o = n.maxURL - t - n.path.length - i.length;
          } else o = 0;
          return o;
        })(t, e),
        r = "icons";
      let s = { type: r, provider: t, prefix: e, icons: [] },
        c = 0;
      return (
        n.forEach((n, a) => {
          (c += n.length + 1), c >= i && a > 0 && (o.push(s), (s = { type: r, provider: t, prefix: e, icons: [] }), (c = n.length)), s.icons.push(n);
        }),
        o.push(s),
        o
      );
    },
    send: (t, e, n) => {
      if (!kt) return void n("abort", 424);
      let o = (function (t) {
        if ("string" == typeof t) {
          const e = U(t);
          if (e) return e.path;
        }
        return "/";
      })(e.provider);
      switch (e.type) {
        case "icons": {
          const t = e.prefix,
            n = e.icons.join(",");
          o += t + ".json?" + new URLSearchParams({ icons: n }).toString();
          break;
        }
        case "custom": {
          const t = e.uri;
          o += "/" === t.slice(0, 1) ? t.slice(1) : t;
          break;
        }
        default:
          return void n("abort", 400);
      }
      let i = 503;
      kt(t + o)
        .then((t) => {
          const e = t.status;
          if (200 === e) return (i = 501), t.json();
          setTimeout(() => {
            n(
              (function (t) {
                return 404 === t;
              })(e)
                ? "abort"
                : "next",
              e
            );
          });
        })
        .then((t) => {
          "object" == typeof t && null !== t
            ? setTimeout(() => {
                n("success", t);
              })
            : setTimeout(() => {
                404 === t ? n("abort", t) : n("next", i);
              });
        })
        .catch(() => {
          n("next", i);
        });
    },
  };
  function Ct(t, e) {
    switch (t) {
      case "local":
      case "session":
        ot[t] = e;
        break;
      case "all":
        for (const t in ot) ot[t] = e;
    }
  }
  const Ot = "data-style";
  let St = "";
  function It(t) {
    St = t;
  }
  function Et(t, e) {
    let n = Array.from(t.childNodes).find((t) => t.hasAttribute && t.hasAttribute(Ot));
    n || ((n = document.createElement("style")), n.setAttribute(Ot, Ot), t.appendChild(n)),
      (n.textContent = ":host{display:inline-block;vertical-align:" + (e ? "-0.125em" : "0") + "}span,svg{display:block}" + St);
  }
  function Mt(t, e) {
    let n = -1 === t.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const t in e) n += " " + t + '="' + e[t] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
  }
  const Tt = { "background-color": "currentColor" },
    Ft = { "background-color": "transparent" },
    Nt = { image: "var(--svg)", repeat: "no-repeat", size: "100% 100%" },
    Pt = { "-webkit-mask": Tt, mask: Tt, background: Ft };
  for (const t in Pt) {
    const e = Pt[t];
    for (const n in Nt) e[t + "-" + n] = Nt[n];
  }
  function Rt(t) {
    return t ? t + (t.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
  }
  function Lt(t, e) {
    const o = e.icon.data,
      i = e.customisations,
      r = wt(o, i);
    i.preserveAspectRatio && (r.attributes.preserveAspectRatio = i.preserveAspectRatio);
    const s = e.renderedMode;
    let c;
    if ("svg" === s)
      c = (function (t) {
        const e = document.createElement("span"),
          n = t.attributes;
        let o = "";
        return n.width || (o = "width: inherit;"), n.height || (o += "height: inherit;"), o && (n.style = o), (e.innerHTML = Mt(t.body, n)), e.firstChild;
      })(r);
    else
      c = (function (t, e, n) {
        const o = document.createElement("span");
        let i = t.body;
        -1 !== i.indexOf("<a") && (i += "\x3c!-- " + Date.now() + " --\x3e");
        const r = t.attributes,
          s =
            'url("' +
            ((u = Mt(i, { ...r, width: e.width + "", height: e.height + "" })),
            "data:image/svg+xml," +
              (function (t) {
                return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
              })(u) +
              '")'),
          c = o.style,
          a = { "--svg": s, width: Rt(r.width), height: Rt(r.height), ...(n ? Tt : Ft) };
        var u;
        for (const t in a) c.setProperty(t, a[t]);
        return o;
      })(r, { ...n, ...o }, "mask" === s);
    const a = Array.from(t.childNodes).find((t) => {
      const e = t.tagName && t.tagName.toUpperCase();
      return "SPAN" === e || "SVG" === e;
    });
    a ? ("SPAN" === c.tagName && a.tagName === c.tagName ? a.setAttribute("style", c.getAttribute("style")) : t.replaceChild(c, a)) : t.appendChild(c);
  }
  function zt(t, e, n) {
    return { rendered: !1, inline: e, icon: t, lastRender: n && (n.rendered ? n : n.lastRender) };
  }
  !(function (t = "iconify-icon") {
    let e, n;
    try {
      (e = window.customElements), (n = window.HTMLElement);
    } catch (t) {
      return;
    }
    if (!e || !n) return;
    const o = e.get(t);
    if (o) return o;
    const i = ["icon", "mode", "inline", "width", "height", "rotate", "flip"],
      r = class extends n {
        _shadowRoot;
        _state;
        _checkQueued = !1;
        constructor() {
          super();
          const t = (this._shadowRoot = this.attachShadow({ mode: "open" })),
            e = mt(this);
          Et(t, e), (this._state = zt({ value: "" }, e)), this._queueCheck();
        }
        static get observedAttributes() {
          return i.slice(0);
        }
        attributeChangedCallback(t) {
          if ("inline" === t) {
            const t = mt(this),
              e = this._state;
            t !== e.inline && ((e.inline = t), Et(this._shadowRoot, t));
          } else this._queueCheck();
        }
        get icon() {
          const t = this.getAttribute("icon");
          if (t && "{" === t.slice(0, 1))
            try {
              return JSON.parse(t);
            } catch (t) {}
          return t;
        }
        set icon(t) {
          "object" == typeof t && (t = JSON.stringify(t)), this.setAttribute("icon", t);
        }
        get inline() {
          return mt(this);
        }
        set inline(t) {
          t ? this.setAttribute("inline", "true") : this.removeAttribute("inline");
        }
        restartAnimation() {
          const t = this._state;
          if (t.rendered) {
            const e = this._shadowRoot;
            if ("svg" === t.renderedMode)
              try {
                return void e.lastChild.setCurrentTime(0);
              } catch (t) {}
            Lt(e, t);
          }
        }
        get status() {
          const t = this._state;
          return t.rendered ? "rendered" : null === t.icon.data ? "failed" : "loading";
        }
        _queueCheck() {
          this._checkQueued ||
            ((this._checkQueued = !0),
            setTimeout(() => {
              this._check();
            }));
        }
        _check() {
          if (!this._checkQueued) return;
          this._checkQueued = !1;
          const t = this._state,
            e = this.getAttribute("icon");
          if (e !== t.icon.value) return void this._iconChanged(e);
          if (!t.rendered) return;
          const n = this.getAttribute("mode"),
            o = a(this);
          (t.attrMode !== n ||
            (function (t, e) {
              for (const n in c) if (t[n] !== e[n]) return !0;
              return !1;
            })(t.customisations, o)) &&
            this._renderIcon(t.icon, o, n);
        }
        _iconChanged(t) {
          const e = gt(t, (t, e, n) => {
            const o = this._state;
            if (o.rendered || this.getAttribute("icon") !== t) return;
            const i = { value: t, name: e, data: n };
            i.data ? this._gotIconData(i) : (o.icon = i);
          });
          e.data ? this._gotIconData(e) : (this._state = zt(e, this._state.inline, this._state));
        }
        _gotIconData(t) {
          (this._checkQueued = !1), this._renderIcon(t, a(this), this.getAttribute("mode"));
        }
        _renderIcon(t, e, n) {
          const o = (function (t, e) {
              switch (e) {
                case "svg":
                case "bg":
                case "mask":
                  return e;
              }
              return "style" === e || (!bt && -1 !== t.indexOf("<a")) ? (-1 === t.indexOf("currentColor") ? "bg" : "mask") : "svg";
            })(t.data.body, n),
            i = this._state.inline;
          Lt(this._shadowRoot, (this._state = { rendered: !0, icon: t, inline: i, customisations: e, attrMode: n, renderedMode: o }));
        }
      };
    i.forEach((t) => {
      t in r.prototype ||
        Object.defineProperty(r.prototype, t, {
          get: function () {
            return this.getAttribute(t);
          },
          set: function (e) {
            null !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
          },
        });
    });
    const s = (function () {
      let t;
      T("", _t), j(!0);
      try {
        t = window;
      } catch (t) {}
      if (t) {
        if ((ut(), void 0 !== t.IconifyPreload)) {
          const e = t.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
          "object" == typeof e &&
            null !== e &&
            (e instanceof Array ? e : [e]).forEach((t) => {
              try {
                ("object" != typeof t || null === t || t instanceof Array || "object" != typeof t.icons || "string" != typeof t.prefix || !C(t)) && console.error(n);
              } catch (t) {
                console.error(n);
              }
            });
        }
        if (void 0 !== t.IconifyProviders) {
          const e = t.IconifyProviders;
          if ("object" == typeof e && null !== e)
            for (const t in e) {
              const n = "IconifyProviders[" + t + "] is invalid.";
              try {
                const o = e[t];
                if ("object" != typeof o || !o || void 0 === o.resources) continue;
                D(t, o) || console.error(n);
              } catch (t) {
                console.error(n);
              }
            }
        }
      }
      return {
        enableCache: (t) => Ct(t, !0),
        disableCache: (t) => Ct(t, !1),
        iconExists: O,
        getIcon: S,
        listIcons: w,
        addIcon: _,
        addCollection: C,
        calculateSize: xt,
        buildIcon: wt,
        loadIcons: ht,
        loadIcon: pt,
        addAPIProvider: D,
        appendCustomStyle: It,
        _api: { getAPIConfig: U, setAPIModule: T, sendAPIQuery: B, setFetch: jt, getFetch: At, listAPIProviders: J },
      };
    })();
    for (const t in s) r[t] = r.prototype[t] = s[t];
    e.define(t, r);
  })();
})();

//

!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o];
  }
})(window, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      n.r(t);
      var o,
        i = "fslightbox-",
        r = "".concat(i, "styles"),
        s = "".concat(i, "cursor-grabbing"),
        a = "".concat(i, "full-dimension"),
        c = "".concat(i, "flex-centered"),
        l = "".concat(i, "open"),
        u = "".concat(i, "transform-transition"),
        d = "".concat(i, "absoluted"),
        f = "".concat(i, "slide-btn"),
        p = "".concat(f, "-container"),
        h = "".concat(i, "fade-in"),
        m = "".concat(i, "fade-out"),
        g = h + "-strong",
        v = m + "-strong",
        b = "".concat(i, "opacity-"),
        x = "".concat(b, "1"),
        y = "".concat(i, "source");
      function w(e) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      function S(e) {
        var t = e.stageIndexes,
          n = e.core.stageManager,
          o = e.props.sources.length - 1;
        (n.getPreviousSlideIndex = function () {
          return 0 === t.current ? o : t.current - 1;
        }),
          (n.getNextSlideIndex = function () {
            return t.current === o ? 0 : t.current + 1;
          }),
          (n.updateStageIndexes =
            0 === o
              ? function () {}
              : 1 === o
              ? function () {
                  0 === t.current ? ((t.next = 1), delete t.previous) : ((t.previous = 0), delete t.next);
                }
              : function () {
                  (t.previous = n.getPreviousSlideIndex()), (t.next = n.getNextSlideIndex());
                }),
          (n.i =
            o <= 2
              ? function () {
                  return !0;
                }
              : function (e) {
                  var n = t.current;
                  if ((0 === n && e === o) || (n === o && 0 === e)) return !0;
                  var i = n - e;
                  return -1 === i || 0 === i || 1 === i;
                });
      }
      "object" === ("undefined" == typeof document ? "undefined" : w(document)) &&
        (((o = document.createElement("style")).className = r),
        o.appendChild(
          document.createTextNode(
            ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
          )
        ),
        document.head.appendChild(o));
      function L(e) {
        var t,
          n = e.props,
          o = 0,
          i = {};
        (this.getSourceTypeFromLocalStorageByUrl = function (e) {
          return t[e] ? t[e] : r(e);
        }),
          (this.handleReceivedSourceTypeForUrl = function (e, n) {
            if (!1 === i[n] && (o--, "invalid" !== e ? (i[n] = e) : delete i[n], 0 === o)) {
              !(function (e, t) {
                for (var n in t) e[n] = t[n];
              })(t, i);
              try {
                localStorage.setItem("fslightbox-types", JSON.stringify(t));
              } catch (e) {}
            }
          });
        var r = function (e) {
          o++, (i[e] = !1);
        };
        if (n.disableLocalStorage) (this.getSourceTypeFromLocalStorageByUrl = function () {}), (this.handleReceivedSourceTypeForUrl = function () {});
        else {
          try {
            t = JSON.parse(localStorage.getItem("fslightbox-types"));
          } catch (e) {}
          t || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
        }
      }
      function A(e, t, n, o) {
        var i = e.data,
          r = e.elements.sources,
          s = n / o,
          a = 0;
        this.adjustSize = function () {
          if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
          (a = o > i.maxSourceHeight ? i.maxSourceHeight : o), c();
        };
        var c = function () {
          (r[t].style.width = a * s + "px"), (r[t].style.height = a + "px");
        };
      }
      function C(e, t) {
        var n = this,
          o = e.collections.sourceSizers,
          i = e.elements,
          r = i.sourceAnimationWrappers,
          s = i.sources,
          a = e.isl,
          c = e.resolve;
        function l(e, n) {
          (o[t] = c(A, [t, e, n])), o[t].adjustSize();
        }
        this.runActions = function (e, o) {
          (a[t] = !0), s[t].classList.add(x), r[t].classList.add(g), r[t].removeChild(r[t].firstChild), l(e, o), (n.runActions = l);
        };
      }
      function E(e, t) {
        var n,
          o = this,
          i = e.elements.sources,
          r = e.props,
          s = (0, e.resolve)(C, [t]);
        (this.handleImageLoad = function (e) {
          var t = e.target,
            n = t.naturalWidth,
            o = t.naturalHeight;
          s.runActions(n, o);
        }),
          (this.handleVideoLoad = function (e) {
            var t = e.target,
              o = t.videoWidth,
              i = t.videoHeight;
            (n = !0), s.runActions(o, i);
          }),
          (this.handleNotMetaDatedVideoLoad = function () {
            n || o.handleYoutubeLoad();
          }),
          (this.handleYoutubeLoad = function () {
            var e = 1920,
              t = 1080;
            r.maxYoutubeDimensions && ((e = r.maxYoutubeDimensions.width), (t = r.maxYoutubeDimensions.height)), s.runActions(e, t);
          }),
          (this.handleCustomLoad = function () {
            var e = i[t],
              n = e.offsetWidth,
              r = e.offsetHeight;
            n && r ? s.runActions(n, r) : setTimeout(o.handleCustomLoad);
          });
      }
      function F(e, t, n) {
        var o = e.elements.sources,
          i = e.props.customClasses,
          r = i[t] ? i[t] : "";
        o[t].className = n + " " + r;
      }
      function I(e, t) {
        var n = e.elements.sources,
          o = e.props.customAttributes;
        for (var i in o[t]) n[t].setAttribute(i, o[t][i]);
      }
      function T(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props.sources;
        (i[t] = document.createElement("img")), F(e, t, y), (i[t].src = s[t]), (i[t].onload = n[t].handleImageLoad), I(e, t), r[t].appendChild(i[t]);
      }
      function N(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props,
          a = s.sources,
          c = s.videosPosters;
        (i[t] = document.createElement("video")),
          F(e, t, y),
          (i[t].src = a[t]),
          (i[t].onloadedmetadata = function (e) {
            n[t].handleVideoLoad(e);
          }),
          (i[t].controls = !0),
          I(e, t),
          c[t] && (i[t].poster = c[t]);
        var l = document.createElement("source");
        (l.src = a[t]), i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t]);
      }
      function z(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          s = o.sourceAnimationWrappers,
          a = e.props.sources;
        (r[t] = document.createElement("iframe")), F(e, t, "".concat(y, " ").concat(i, "youtube-iframe"));
        var c = a[t],
          l = c.split("?")[1];
        (r[t].src = "https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l || "")),
          (r[t].allowFullscreen = !0),
          I(e, t),
          s[t].appendChild(r[t]),
          n[t].handleYoutubeLoad();
      }
      function P(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          r = o.sourceAnimationWrappers,
          s = e.props.sources;
        (i[t] = s[t]), F(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad();
      }
      function k(e, t) {
        var n = e.elements,
          o = n.sources,
          r = n.sourceAnimationWrappers;
        e.props.sources;
        (o[t] = document.createElement("div")),
          (o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c)),
          (o[t].innerHTML = "Invalid source"),
          r[t].classList.add(g),
          r[t].removeChild(r[t].firstChild),
          r[t].appendChild(o[t]);
      }
      function H(e) {
        var t = e.collections,
          n = t.sourceLoadHandlers,
          o = t.sourcesRenderFunctions,
          i = e.core.sourceDisplayFacade,
          r = e.resolve;
        this.runActionsForSourceTypeAndIndex = function (t, s) {
          var a;
          switch (("invalid" !== t && (n[s] = r(E, [s])), t)) {
            case "image":
              a = T;
              break;
            case "video":
              a = N;
              break;
            case "youtube":
              a = z;
              break;
            case "custom":
              a = P;
              break;
            default:
              a = k;
          }
          (o[s] = function () {
            return a(e, s);
          }),
            i.displaySourcesWhichShouldBeDisplayed();
        };
      }
      function W() {
        var e,
          t,
          n,
          o = {
            isUrlYoutubeOne: function (e) {
              var t = document.createElement("a");
              return (t.href = e), "www.youtube.com" === t.hostname || "youtu.be" === t.hostname;
            },
            getTypeFromResponseContentType: function (e) {
              return e.slice(0, e.indexOf("/"));
            },
          };
        function i() {
          if (4 !== n.readyState) {
            if (2 === n.readyState) {
              var e;
              switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
                case "image":
                  e = "image";
                  break;
                case "video":
                  e = "video";
                  break;
                default:
                  e = "invalid";
              }
              (n.onreadystatechange = null), n.abort(), t(e);
            }
          } else t("invalid");
        }
        (this.setUrlToCheck = function (t) {
          e = t;
        }),
          (this.getSourceType = function (r) {
            if (o.isUrlYoutubeOne(e)) return r("youtube");
            (t = r), ((n = new XMLHttpRequest()).onreadystatechange = i), n.open("GET", e, !0), n.send();
          });
      }
      function R(e, t, n) {
        var o = e.props,
          i = o.types,
          r = o.type,
          s = o.sources,
          a = e.resolve;
        (this.getTypeSetByClientForIndex = function (e) {
          var t;
          return i && i[e] ? (t = i[e]) : r && (t = r), t;
        }),
          (this.retrieveTypeWithXhrForIndex = function (e) {
            var o = a(W);
            o.setUrlToCheck(s[e]),
              o.getSourceType(function (o) {
                t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
              });
          });
      }
      function D(e, t) {
        var n = e.core.stageManager,
          o = e.elements,
          i = o.smw,
          r = o.sourceWrappersContainer,
          s = e.props,
          l = 0,
          f = document.createElement("div");
        function p(e) {
          (f.style.transform = "translateX(".concat(e + l, "px)")), (l = 0);
        }
        function h() {
          return (1 + s.slideDistance) * innerWidth;
        }
        (f.className = "".concat(d, " ").concat(a, " ").concat(c)),
          (f.s = function () {
            f.style.display = "flex";
          }),
          (f.h = function () {
            f.style.display = "none";
          }),
          (f.a = function () {
            f.classList.add(u);
          }),
          (f.d = function () {
            f.classList.remove(u);
          }),
          (f.n = function () {
            f.style.removeProperty("transform");
          }),
          (f.v = function (e) {
            return (l = e), f;
          }),
          (f.ne = function () {
            p(-h());
          }),
          (f.z = function () {
            p(0);
          }),
          (f.p = function () {
            p(h());
          }),
          n.i(t) || f.h(),
          (i[t] = f),
          r.appendChild(f),
          (function (e, t) {
            var n = e.elements,
              o = n.smw,
              i = n.sourceAnimationWrappers,
              r = document.createElement("div"),
              s = document.createElement("div");
            s.className = "fslightboxl";
            for (var a = 0; a < 3; a++) {
              var c = document.createElement("div");
              s.appendChild(c);
            }
            r.appendChild(s), o[t].appendChild(r), (i[t] = r);
          })(e, t);
      }
      function O(e, t, n, o) {
        var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
        var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r;
      }
      function M(e, t) {
        var n = document.createElement("div");
        return (n.className = "".concat(i, "toolbar-button ").concat(c)), (n.title = t), e.appendChild(n), n;
      }
      function j(e, t) {
        var n = document.createElement("div");
        (n.className = "".concat(i, "toolbar")),
          t.appendChild(n),
          (function (e, t) {
            var n = e.componentsServices,
              o = e.data,
              i = e.fs,
              r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
              s = M(t);
            s.title = "Enter fullscreen";
            var a = O(s, "20px", "0 0 18 18", r);
            (n.ofs = function () {
              (o.ifs = !0),
                (s.title = "Exit fullscreen"),
                a.setAttributeNS(null, "width", "24px"),
                a.setAttributeNS(null, "height", "24px"),
                a.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                a.firstChild.setAttributeNS(
                  null,
                  "d",
                  "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"
                );
            }),
              (n.xfs = function () {
                (o.ifs = !1),
                  (s.title = "Enter fullscreen"),
                  a.setAttributeNS(null, "width", "20px"),
                  a.setAttributeNS(null, "height", "20px"),
                  a.setAttributeNS(null, "viewBox", "0 0 18 18"),
                  a.firstChild.setAttributeNS(null, "d", r);
              }),
              (s.onclick = i.t);
          })(e, n),
          (function (e, t) {
            var n = M(t, "Close");
            (n.onclick = e.core.lightboxCloser.closeLightbox),
              O(
                n,
                "20px",
                "0 0 24 24",
                "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
              );
          })(e, n);
      }
      function X(e) {
        var t = e.props.sources,
          n = e.elements.container,
          o = document.createElement("div");
        (o.className = "".concat(i, "nav")),
          n.appendChild(o),
          j(e, o),
          t.length > 1 &&
            (function (e, t) {
              var n = e.componentsServices,
                o = e.props.sources,
                r = (e.stageIndexes, document.createElement("div"));
              r.className = "".concat(i, "slide-number-container");
              var s = document.createElement("div");
              s.className = c;
              var a = document.createElement("span");
              n.setSlideNumber = function (e) {
                return (a.innerHTML = e);
              };
              var l = document.createElement("span");
              l.className = "".concat(i, "slash");
              var u = document.createElement("div");
              (u.innerHTML = o.length),
                r.appendChild(s),
                s.appendChild(a),
                s.appendChild(l),
                s.appendChild(u),
                t.appendChild(r),
                setTimeout(function () {
                  s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
                });
            })(e, o);
      }
      function B(e, t, n, o) {
        var i = e.elements.container,
          r = n.charAt(0).toUpperCase() + n.slice(1),
          s = document.createElement("div");
        (s.className = "".concat(p, " ").concat(p, "-").concat(n)),
          (s.title = "".concat(r, " slide")),
          (s.onclick = t),
          (function (e, t) {
            var n = document.createElement("div");
            (n.className = "".concat(f, " ").concat(c)), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
          })(s, o),
          i.appendChild(s);
      }
      function U(e) {
        var t = e.core,
          n = t.lightboxCloser,
          o = t.slideChangeFacade,
          i = e.fs;
        this.listener = function (e) {
          switch (e.key) {
            case "Escape":
              n.closeLightbox();
              break;
            case "ArrowLeft":
              o.changeToPrevious();
              break;
            case "ArrowRight":
              o.changeToNext();
              break;
            case "F11":
              e.preventDefault(), i.t();
          }
        };
      }
      function q(e) {
        var t = e.elements,
          n = e.sourcePointerProps,
          o = e.stageIndexes;
        function i(e, o) {
          t.smw[e].v(n.swipedX)[o]();
        }
        this.runActionsForEvent = function (e) {
          var r, a, c;
          t.container.contains(t.slideSwipingHoverer) || t.container.appendChild(t.slideSwipingHoverer),
            (r = t.container),
            (a = s),
            (c = r.classList).contains(a) || c.add(a),
            (n.swipedX = e.screenX - n.downScreenX);
          var l = o.previous,
            u = o.next;
          i(o.current, "z"), void 0 !== l && n.swipedX > 0 ? i(l, "ne") : void 0 !== u && n.swipedX < 0 && i(u, "p");
        };
      }
      function V(e) {
        var t = e.props.sources,
          n = e.resolve,
          o = e.sourcePointerProps,
          i = n(q);
        1 === t.length
          ? (this.listener = function () {
              o.swipedX = 1;
            })
          : (this.listener = function (e) {
              o.isPointering && i.runActionsForEvent(e);
            });
      }
      function _(e) {
        var t = e.core.slideIndexChanger,
          n = e.elements.smw,
          o = e.stageIndexes,
          i = e.sws;
        function r(e) {
          var t = n[o.current];
          t.a(), t[e]();
        }
        function s(e, t) {
          void 0 !== e && (n[e].s(), n[e][t]());
        }
        (this.runPositiveSwipedXActions = function () {
          var e = o.previous;
          if (void 0 === e) r("z");
          else {
            r("p");
            var n = o.next;
            t.changeTo(e);
            var a = o.previous;
            i.d(a), i.b(n), r("z"), s(a, "ne");
          }
        }),
          (this.runNegativeSwipedXActions = function () {
            var e = o.next;
            if (void 0 === e) r("z");
            else {
              r("ne");
              var n = o.previous;
              t.changeTo(e);
              var a = o.next;
              i.d(a), i.b(n), r("z"), s(a, "p");
            }
          });
      }
      function Y(e, t) {
        e.contains(t) && e.removeChild(t);
      }
      function J(e) {
        var t = e.core.lightboxCloser,
          n = e.elements,
          o = e.resolve,
          i = e.sourcePointerProps,
          r = o(_);
        (this.runNoSwipeActions = function () {
          Y(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), (i.isPointering = !1);
        }),
          (this.runActions = function () {
            i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(),
              Y(n.container, n.slideSwipingHoverer),
              n.container.classList.remove(s),
              (i.isPointering = !1);
          });
      }
      function G(e) {
        var t = e.resolve,
          n = e.sourcePointerProps,
          o = t(J);
        this.listener = function () {
          n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
        };
      }
      function $(e) {
        var t = this,
          n = e.core,
          o = n.eventsDispatcher,
          i = n.globalEventsController,
          r = n.scrollbarRecompensor,
          s = e.data,
          a = e.elements,
          c = e.fs,
          u = e.props,
          d = e.sourcePointerProps;
        (this.isLightboxFadingOut = !1),
          (this.runActions = function () {
            (t.isLightboxFadingOut = !0),
              a.container.classList.add(v),
              i.removeListeners(),
              u.exitFullscreenOnClose && s.ifs && c.x(),
              setTimeout(function () {
                (t.isLightboxFadingOut = !1),
                  (d.isPointering = !1),
                  a.container.classList.remove(v),
                  document.documentElement.classList.remove(l),
                  r.removeRecompense(),
                  document.body.removeChild(a.container),
                  o.dispatch("onClose");
              }, 270);
          });
      }
      function K(e, t) {
        var n = e.classList;
        n.contains(t) && n.remove(t);
      }
      function Q(e) {
        var t, n, o;
        (n = (t = e).core.eventsDispatcher),
          (o = t.props),
          (n.dispatch = function (e) {
            o[e] && o[e]();
          }),
          (function (e) {
            var t = e.componentsServices,
              n = e.data,
              o = e.fs,
              i = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            function r(e) {
              for (var t = 0; t < i.length; t++) document[e](i[t], s);
            }
            function s() {
              document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t.ofs() : t.xfs();
            }
            (o.o = function () {
              t.ofs();
              var e = document.documentElement;
              e.requestFullscreen
                ? e.requestFullscreen()
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullscreen
                ? e.webkitRequestFullscreen()
                : e.msRequestFullscreen && e.msRequestFullscreen();
            }),
              (o.x = function () {
                t.xfs(),
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.msExitFullscreen && document.msExitFullscreen();
              }),
              (o.t = function () {
                n.ifs ? o.x() : o.o();
              }),
              (o.l = function () {
                r("addEventListener");
              }),
              (o.q = function () {
                r("removeEventListener");
              });
          })(e),
          (function (e) {
            var t = e.core,
              n = t.globalEventsController,
              o = t.windowResizeActioner,
              i = e.fs,
              r = e.resolve,
              s = r(U),
              a = r(V),
              c = r(G);
            (n.attachListeners = function () {
              document.addEventListener("pointermove", a.listener),
                document.addEventListener("pointerup", c.listener),
                addEventListener("resize", o.runActions),
                document.addEventListener("keydown", s.listener),
                i.l();
            }),
              (n.removeListeners = function () {
                document.removeEventListener("pointermove", a.listener),
                  document.removeEventListener("pointerup", c.listener),
                  removeEventListener("resize", o.runActions),
                  document.removeEventListener("keydown", s.listener),
                  i.q();
              });
          })(e),
          (function (e) {
            var t = e.core.lightboxCloser,
              n = (0, e.resolve)($);
            t.closeLightbox = function () {
              n.isLightboxFadingOut || n.runActions();
            };
          })(e),
          (function (e) {
            var t = e.data,
              n = e.core.scrollbarRecompensor;
            function o() {
              document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
            }
            (n.addRecompense = function () {
              "complete" === document.readyState
                ? o()
                : addEventListener("load", function () {
                    o(), (n.addRecompense = o);
                  });
            }),
              (n.removeRecompense = function () {
                document.body.style.removeProperty("margin-right");
              });
          })(e),
          (function (e) {
            var t = e.core,
              n = t.slideChangeFacade,
              o = t.slideIndexChanger,
              i = t.stageManager;
            e.props.sources.length > 1
              ? ((n.changeToPrevious = function () {
                  o.jumpTo(i.getPreviousSlideIndex());
                }),
                (n.changeToNext = function () {
                  o.jumpTo(i.getNextSlideIndex());
                }))
              : ((n.changeToPrevious = function () {}), (n.changeToNext = function () {}));
          })(e),
          (function (e) {
            var t = e.componentsServices,
              n = e.core,
              o = n.slideIndexChanger,
              i = n.sourceDisplayFacade,
              r = n.stageManager,
              s = e.elements,
              a = s.smw,
              c = s.sourceAnimationWrappers,
              l = e.isl,
              u = e.stageIndexes,
              d = e.sws;
            (o.changeTo = function (e) {
              (u.current = e), r.updateStageIndexes(), t.setSlideNumber(e + 1), i.displaySourcesWhichShouldBeDisplayed();
            }),
              (o.jumpTo = function (e) {
                var t = u.previous,
                  n = u.current,
                  i = u.next,
                  s = l[n],
                  f = l[e];
                o.changeTo(e);
                for (var p = 0; p < a.length; p++) a[p].d();
                d.d(n),
                  d.c(),
                  requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      var e = u.previous,
                        o = u.next;
                      function p() {
                        r.i(n) ? (n === u.previous ? a[n].ne() : n === u.next && a[n].p()) : (a[n].h(), a[n].n());
                      }
                      s && c[n].classList.add(m),
                        f && c[u.current].classList.add(h),
                        d.a(),
                        void 0 !== e && e !== n && a[e].ne(),
                        a[u.current].n(),
                        void 0 !== o && o !== n && a[o].p(),
                        d.b(t),
                        d.b(i),
                        l[n] ? setTimeout(p, 260) : p();
                    });
                  });
              });
          })(e),
          (function (e) {
            var t = e.core.sourcesPointerDown,
              n = e.elements,
              o = n.smw,
              i = n.sources,
              r = e.sourcePointerProps,
              s = e.stageIndexes;
            t.listener = function (e) {
              "VIDEO" !== e.target.tagName && e.preventDefault(), (r.isPointering = !0), (r.downScreenX = e.screenX), (r.swipedX = 0);
              var t = i[s.current];
              t && t.contains(e.target) ? (r.isSourceDownEventTarget = !0) : (r.isSourceDownEventTarget = !1);
              for (var n = 0; n < o.length; n++) o[n].d();
            };
          })(e),
          (function (e) {
            var t = e.collections.sourcesRenderFunctions,
              n = e.core.sourceDisplayFacade,
              o = e.props,
              i = e.stageIndexes;
            function r(e) {
              t[e] && (t[e](), delete t[e]);
            }
            n.displaySourcesWhichShouldBeDisplayed = function () {
              if (o.loadOnlyCurrentSource) r(i.current);
              else for (var e in i) r(i[e]);
            };
          })(e),
          (function (e) {
            var t = e.core.stageManager,
              n = e.elements,
              o = n.smw,
              i = n.sourceAnimationWrappers,
              r = e.isl,
              s = e.stageIndexes,
              a = e.sws;
            (a.a = function () {
              for (var e in s) o[s[e]].s();
            }),
              (a.b = function (e) {
                void 0 === e || t.i(e) || (o[e].h(), o[e].n());
              }),
              (a.c = function () {
                for (var e in s) a.d(s[e]);
              }),
              (a.d = function (e) {
                if (r[e]) {
                  var t = i[e];
                  K(t, g), K(t, h), K(t, m);
                }
              });
          })(e),
          (function (e) {
            var t = e.collections.sourceSizers,
              n = e.core.windowResizeActioner,
              o = e.data,
              i = e.elements.smw,
              r = e.stageIndexes;
            n.runActions = function () {
              innerWidth < 992 ? (o.maxSourceWidth = innerWidth) : (o.maxSourceWidth = 0.9 * innerWidth), (o.maxSourceHeight = 0.9 * innerHeight);
              for (var e = 0; e < i.length; e++) i[e].d(), t[e] && t[e].adjustSize();
              var n = r.previous,
                s = r.next;
              void 0 !== n && i[n].ne(), void 0 !== s && i[s].p();
            };
          })(e);
      }
      function Z(e) {
        var t = e.componentsServices,
          n = e.core,
          o = n.eventsDispatcher,
          r = n.globalEventsController,
          s = n.scrollbarRecompensor,
          c = n.sourceDisplayFacade,
          u = n.stageManager,
          f = n.windowResizeActioner,
          p = e.data,
          h = e.elements,
          m = (e.props, e.stageIndexes),
          v = e.sws;
        function b() {
          var t, n;
          (p.i = !0),
            (p.scrollbarWidth = (function () {
              var e = document.createElement("div"),
                t = e.style,
                n = document.createElement("div");
              (t.visibility = "hidden"), (t.width = "100px"), (t.msOverflowStyle = "scrollbar"), (t.overflow = "scroll"), (n.style.width = "100%"), document.body.appendChild(e);
              var o = e.offsetWidth;
              e.appendChild(n);
              var i = n.offsetWidth;
              return document.body.removeChild(e), o - i;
            })()),
            Q(e),
            (h.container = document.createElement("div")),
            (h.container.className = "".concat(i, "container ").concat(a, " ").concat(g)),
            (function (e) {
              var t = e.elements;
              (t.slideSwipingHoverer = document.createElement("div")), (t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d));
            })(e),
            X(e),
            (function (e) {
              var t = e.core.sourcesPointerDown,
                n = e.elements,
                o = e.props.sources,
                i = document.createElement("div");
              (i.className = "".concat(d, " ").concat(a)), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), (n.sourceWrappersContainer = i);
              for (var r = 0; r < o.length; r++) D(e, r);
            })(e),
            e.props.sources.length > 1 &&
              ((n = (t = e).core.slideChangeFacade),
              B(
                t,
                n.changeToPrevious,
                "previous",
                "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
              ),
              B(
                t,
                n.changeToNext,
                "next",
                "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
              )),
            (function (e) {
              for (var t = e.props.sources, n = e.resolve, o = n(L), i = n(H), r = n(R, [o, i]), s = 0; s < t.length; s++)
                if ("string" == typeof t[s]) {
                  var a = r.getTypeSetByClientForIndex(s);
                  if (a) i.runActionsForSourceTypeAndIndex(a, s);
                  else {
                    var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                    c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
                  }
                } else i.runActionsForSourceTypeAndIndex("custom", s);
            })(e),
            o.dispatch("onInit");
        }
        e.open = function () {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = m.previous,
            a = m.current,
            d = m.next;
          (m.current = n),
            p.i || S(e),
            u.updateStageIndexes(),
            p.i ? (v.c(), v.a(), v.b(i), v.b(a), v.b(d), o.dispatch("onShow")) : b(),
            c.displaySourcesWhichShouldBeDisplayed(),
            t.setSlideNumber(n + 1),
            document.body.appendChild(h.container),
            document.documentElement.classList.add(l),
            s.addRecompense(),
            r.attachListeners(),
            f.runActions(),
            h.smw[m.current].n(),
            o.dispatch("onOpen");
        };
      }
      function ee(e, t, n) {
        return (ee = te()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var o = [null];
              o.push.apply(o, t);
              var i = new (Function.bind.apply(e, o))();
              return n && ne(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function te() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function ne(e, t) {
        return (ne = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function oe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ie(e);
          })(e) ||
          (function (e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ie(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t);
          })(e) ||
          (function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          })()
        );
      }
      function ie(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function re() {
        for (
          var e = document.getElementsByTagName("a"),
            t = function (t) {
              if (!e[t].hasAttribute("data-fslightbox")) return "continue";
              var n = e[t].hasAttribute("data-href") ? e[t].getAttribute("data-href") : e[t].getAttribute("href");
              if (!n) return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
              var o = e[t].getAttribute("data-fslightbox");
              fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox());
              var i = null;
              "#" === n.charAt(0) ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id") : (i = n),
                fsLightboxInstances[o].props.sources.push(i),
                fsLightboxInstances[o].elements.a.push(e[t]);
              var r = fsLightboxInstances[o].props.sources.length - 1;
              (e[t].onclick = function (e) {
                e.preventDefault(), fsLightboxInstances[o].open(r);
              }),
                d("types", "data-type"),
                d("videosPosters", "data-video-poster"),
                d("customClasses", "data-class"),
                d("customClasses", "data-custom-class");
              for (
                var s = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"],
                  a = e[t].attributes,
                  c = fsLightboxInstances[o].props.customAttributes,
                  l = 0;
                l < a.length;
                l++
              )
                if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
                  c[r] || (c[r] = {});
                  var u = a[l].name.substr(5);
                  c[r][u] = a[l].value;
                }
              function d(n, i) {
                e[t].hasAttribute(i) && (fsLightboxInstances[o].props[n][r] = e[t].getAttribute(i));
              }
            },
            n = 0;
          n < e.length;
          n++
        )
          t(n);
        var o = Object.keys(fsLightboxInstances);
        window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
      }
      (window.FsLightbox = function () {
        var e = this;
        (this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: 0.3 }),
          (this.data = { isFullscreenOpen: !1, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0 }),
          (this.isl = []),
          (this.sourcePointerProps = { downScreenX: null, isPointering: !1, isSourceDownEventTarget: !1, swipedX: 0 }),
          (this.stageIndexes = {}),
          (this.elements = { a: [], container: null, slideSwipingHoverer: null, smw: [], sourceWrappersContainer: null, sources: [], sourceAnimationWrappers: [] }),
          (this.componentsServices = { setSlideNumber: function () {} }),
          (this.resolve = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return n.unshift(e), ee(t, oe(n));
          }),
          (this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }),
          (this.core = {
            eventsDispatcher: {},
            globalEventsController: {},
            lightboxCloser: {},
            lightboxUpdater: {},
            scrollbarRecompensor: {},
            slideChangeFacade: {},
            slideIndexChanger: {},
            sourcesPointerDown: {},
            sourceDisplayFacade: {},
            stageManager: {},
            windowResizeActioner: {},
          }),
          (this.fs = {}),
          (this.sws = {}),
          Z(this),
          (this.close = function () {
            return e.core.lightboxCloser.closeLightbox();
          });
      }),
        (window.fsLightboxInstances = {}),
        re(),
        (window.refreshFsLightbox = function () {
          for (var e in fsLightboxInstances) {
            var t = fsLightboxInstances[e].props;
            (fsLightboxInstances[e] = new FsLightbox()), (fsLightboxInstances[e].props = t), (fsLightboxInstances[e].props.sources = []), (fsLightboxInstances[e].elements.a = []);
          }
          re();
        });
    },
  ]);
});

// https://unpkg.com/quicklink@3.0.1/dist/quicklink.umd.js

!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(((e || self).quicklink = {}));
})(this, function (e) {
  function n(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, t = Array(n); r < n; r++) t[r] = e[r];
    return t;
  }
  function r(e, r) {
    var t = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (
      Array.isArray(e) ||
      (t = (function (e, r) {
        if (e) {
          if ("string" == typeof e) return n(e, r);
          var t = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(e, r) : void 0
          );
        }
      })(e)) ||
      (r && e && "number" == typeof e.length)
    ) {
      t && (e = t);
      var o = 0;
      return function () {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function t(e, n, r, t) {
    var o = { headers: { accept: "*/*" } };
    return (
      n || (o.mode = "no-cors"),
      r && (o.credentials = "include"),
      (o.priority = t ? "high" : "low"),
      window.fetch
        ? fetch(e, o)
        : (function (e, n) {
            return new Promise(function (r, t, o) {
              (o = new XMLHttpRequest()).open("GET", e, (o.withCredentials = n)),
                o.setRequestHeader("Accept", "*/*"),
                (o.onload = function () {
                  200 === o.status ? r() : t();
                }),
                o.send();
            });
          })(e, r)
    );
  }
  var o,
    i =
      (o = document.createElement("link")).relList && o.relList.supports && o.relList.supports("prefetch")
        ? function (e, n) {
            return new Promise(function (r, t, o) {
              ((o = document.createElement("link")).rel = "prefetch"),
                (o.href = e),
                n && o.setAttribute("crossorigin", "anonymous"),
                (o.onload = r),
                (o.onerror = t),
                document.head.appendChild(o);
            });
          }
        : t,
    c =
      window.requestIdleCallback ||
      function (e) {
        var n = Date.now();
        return setTimeout(function () {
          e({
            didTimeout: !1,
            timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - n));
            },
          });
        }, 1);
      },
    a = new Set(),
    s = new Set(),
    u = !1;
  function l(e, n) {
    return Array.isArray(n)
      ? n.some(function (n) {
          return l(e, n);
        })
      : (n.test || n).call(n, e.href, e);
  }
  function f(e) {
    if (e) {
      if (e.saveData) return new Error("Save-Data is enabled");
      if (/2g/.test(e.effectiveType)) return new Error("network conditions are poor");
    }
    return !0;
  }
  function d(e, n, o, c, l) {
    var d = f(navigator.connection);
    return d instanceof Error
      ? Promise.reject(new Error("Cannot prefetch, " + d.message))
      : (s.size > 0 && !u && console.warn("[Warning] You are using both prefetching and prerendering on the same document"),
        Promise.all(
          [].concat(e).map(function (e) {
            return a.has(e)
              ? []
              : (a.add(e),
                (function (e, n, t) {
                  var o = [].slice.call(arguments, 3);
                  if (!t) return e.apply(void 0, [n].concat(o));
                  for (
                    var i,
                      c = Array.from(document.querySelectorAll("a")).filter(function (e) {
                        return e.href === n;
                      }),
                      a = new Map(),
                      s = function () {
                        var r = i.value,
                          t = function (i) {
                            var s = setTimeout(function () {
                              return r.removeEventListener("mouseenter", t), r.removeEventListener("mouseleave", c), e.apply(void 0, [n].concat(o));
                            }, 200);
                            a.set(r, s);
                          },
                          c = function (e) {
                            var n = a.get(r);
                            n && (clearTimeout(n), a.delete(r));
                          };
                        r.addEventListener("mouseenter", t), r.addEventListener("mouseleave", c);
                      },
                      u = r(c);
                    !(i = u()).done;

                  )
                    s();
                })(n ? t : i, new URL(e, location.href).toString(), l, o, c, n));
          })
        ));
  }
  function h(e, n) {
    void 0 === n && (n = "immediate");
    var t = f(navigator.connection);
    if (t instanceof Error) return Promise.reject(new Error("Cannot prerender, " + t.message));
    if (!HTMLScriptElement.supports("speculationrules"))
      return (
        d(e, !0, !1, !1, "moderate" === n || "conservative" === n), Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."))
      );
    for (var o, i = r([].concat(e)); !(o = i()).done; ) s.add(o.value);
    a.size > 0 && !u && console.warn("[Warning] You are using both prefetching and prerendering on the same document");
    var c = (function (e, n) {
      var r = document.createElement("script");
      (r.type = "speculationrules"),
        (r.text = '{"prerender":[{"source": "list",\n                      "urls": ["' + Array.from(e).join('","') + '"],\n                      "eagerness": "' + n + '"}]}');
      try {
        document.head.appendChild(r);
      } catch (e) {
        return e;
      }
      return !0;
    })(s, n);
    return !0 === c ? Promise.resolve() : Promise.reject(c);
  }
  (e.listen = function (e) {
    if ((void 0 === e && (e = {}), window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype)) {
      var n = (function (e) {
          e = e || 1;
          var n = [],
            r = 0;
          function t() {
            r < e && n.length > 0 && (n.shift()(), r++);
          }
          return [
            function (e) {
              n.push(e) > 1 || t();
            },
            function () {
              r--, t();
            },
          ];
        })(e.throttle || 1 / 0),
        r = n[0],
        t = n[1],
        o = e.limit || 1 / 0,
        i = e.origins || [location.hostname],
        f = e.ignores || [],
        m = e.delay || 0,
        p = [],
        v = e.timeoutFn || c,
        g = "function" == typeof e.hrefFn && e.hrefFn,
        y = e.prerender || !1;
      u = e.prerenderAndPrefetch || !1;
      var w = new IntersectionObserver(
        function (n) {
          n.forEach(function (n) {
            if (n.isIntersecting)
              p.push((n = n.target).href),
                (function (e, n) {
                  n ? setTimeout(e, n) : e();
                })(function () {
                  p.includes(n.href) &&
                    (w.unobserve(n),
                    (u || y) && s.size < o
                      ? h(g ? g(n) : n.href, e.eagerness).catch(function (n) {
                          if (!e.onError) throw n;
                          e.onError(n);
                        })
                      : a.size < o &&
                        !y &&
                        r(function () {
                          d(g ? g(n) : n.href, e.priority, e.checkAccessControlAllowOrigin, e.checkAccessControlAllowCredentials, e.onlyOnMouseover)
                            .then(t)
                            .catch(function (n) {
                              t(), e.onError && e.onError(n);
                            });
                        }));
                }, m);
            else {
              var i = p.indexOf((n = n.target).href);
              i > -1 && p.splice(i);
            }
          });
        },
        { threshold: e.threshold || 0 }
      );
      return (
        v(
          function () {
            (e.el && e.el.length && e.el.length > 0 && "A" === e.el[0].nodeName ? e.el : (e.el || document).querySelectorAll("a")).forEach(function (e) {
              (i.length && !i.includes(e.hostname)) || l(e, f) || w.observe(e);
            });
          },
          { timeout: e.timeout || 2e3 }
        ),
        function () {
          a.clear(), w.disconnect();
        }
      );
    }
  }),
    (e.prefetch = d),
    (e.prerender = h);
});
