(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
    [0], {
        156: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_currency","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"aAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"clear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"contract IBSC","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sChunk","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aSBlock","type":"uint256"},{"internalType":"uint256","name":"_aEBlock","type":"uint256"},{"internalType":"uint256","name":"_aAmt","type":"uint256"},{"internalType":"uint256","name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sSBlock","type":"uint256"},{"internalType":"uint256","name":"_sEBlock","type":"uint256"},{"internalType":"uint256","name":"_sChunk","type":"uint256"},{"internalType":"uint256","name":"_sPrice","type":"uint256"},{"internalType":"uint256","name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewAirdrop","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"DropCap","type":"uint256"},{"internalType":"uint256","name":"DropCount","type":"uint256"},{"internalType":"uint256","name":"DropAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewSale","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"SaleCap","type":"uint256"},{"internalType":"uint256","name":"SaleCount","type":"uint256"},{"internalType":"uint256","name":"ChunkSize","type":"uint256"},{"internalType":"uint256","name":"SalePrice","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        316: function(e, t) {},
        337: function(e, t) {},
        339: function(e, t) {},
        412: function(e, t) {},
        414: function(e, t) {},
        446: function(e, t) {},
        451: function(e, t) {},
        453: function(e, t) {},
        460: function(e, t) {},
        473: function(e, t) {},
        491: function(e, t) {},
        501: function(e, t) {},
        504: function(e, t) {},
        564: function(e, t) {},
        638: function(e, t) {},
        711: function(e, t) {},
        730: function(e, t, a) {
            "use strict";
            a.r(t);
            var s, c = a(3),
                n = a.n(c),
                i = a(287),
                l = a.n(i),
                r = a(296),
                d = a(19),
                o = a(0),
                j = function() {
                    return Object(o.jsx)("section", {


                        children: Object(o.jsx)("div", {

                            children: Object(o.jsxs)("div", {

                                children: [Object(o.jsx)("div", {

                                    children: Object(o.jsx)("div", {

                                        children: Object(o.jsx)("img", {


                                        })
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsxs)("h1", {

                                            children: ["", Object(o.jsx)("span", {

                                            }), ""]
                                        }), Object(o.jsx)("p", {


                                        }), Object(o.jsxs)("div", {

                                            children: [Object(o.jsx)("a", {



                                            }), Object(o.jsx)("a", {

                                            })]
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsxs)("ul", {
                                                children: [Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {

                                                        children: Object(o.jsx)("i", {

                                                        })
                                                    })
                                                }), Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {

                                                        children: Object(o.jsx)("i", {

                                                        })
                                                    })
                                                }), Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {

                                                        children: Object(o.jsx)("i", {

                                                        })
                                                    })
                                                }), Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {

                                                        children: Object(o.jsx)("i", {

                                                        })
                                                    })
                                                }), Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {


                                                        children: Object(o.jsx)("i", {


                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsx)("div", {

                                        children: Object(o.jsx)("img", {})
                                    })
                                })]
                            })
                        })
                    })
                },
                b = function() {
                    return Object(o.jsx)("section", {

                        children: Object(o.jsxs)("div", {

                            children: [Object(o.jsx)("div", {

                                children: Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("label", {

                                        }), Object(o.jsx)("h2", {


                                        })]
                                    })
                                })
                            }), Object(o.jsxs)("div", {

                                children: [Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("img", {


                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {


                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {
                                                children: Object(o.jsx)("img", {


                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {


                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {
                                                children: Object(o.jsx)("img", {

                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {

                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {
                                                children: Object(o.jsx)("img", {


                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {

                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {
                                                children: Object(o.jsx)("img", {

                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {

                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {
                                                children: Object(o.jsx)("img", {

                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("span", {

                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                m = function() {
                    return Object(o.jsx)("footer", {

                        children: Object(o.jsxs)("div", {

                            children: [Object(o.jsx)("div", {

                                children: Object(o.jsxs)("div", {

                                    children: [Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("a", {

                                                children: Object(o.jsx)("img", {


                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsxs)("ul", {
                                                children: [Object(o.jsx)("li", {
                                                    children: Object(o.jsx)("a", {

                                                        children: Object(o.jsx)("i", {

                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    }), Object(o.jsx)("div", {

                                    })]
                                })
                            }), Object(o.jsx)("div", {

                                children: Object(o.jsx)("div", {

                                    children: Object(o.jsx)("div", {

                                        children: Object(o.jsxs)("p", {
                                            children: ["\xa9  ", Object(o.jsx)("a", {


                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                p = function() {
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)("div", {

                            children: Object(o.jsx)("a", {

                                children: Object(o.jsx)("i", {

                                })
                            })
                        }), Object(o.jsx)("header", {

                            children: Object(o.jsx)("div", {

                                children: Object(o.jsx)("div", {

                                    children: Object(o.jsx)("div", {

                                        children: Object(o.jsx)("div", {

                                            children: Object(o.jsx)("a", {

                                                children: Object(o.jsx)("img", {

                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                h = function() {
                    return Object(o.jsx)("section", {

                        children: Object(o.jsxs)("div", {

                            children: [Object(o.jsx)("div", {

                                children: Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("label", {



                                        })]
                                    })
                                })
                            }), Object(o.jsxs)("div", {

                                children: [Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                        }), Object(o.jsx)("img", {

                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-md-6 flex-align wow fadeInRight",
                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("h3", {}), Object(o.jsx)("p", {}), Object(o.jsx)("p", {}), Object(o.jsxs)("ul", {

                                            children: [Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    children: Object(o.jsx)("i", {


                                                    })
                                                }), " ", Object(o.jsx)("p", {

                                                })]
                                            }), Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    children: Object(o.jsx)("i", {

                                                    })
                                                }), " ", Object(o.jsx)("p", {

                                                })]
                                            }), Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    children: Object(o.jsx)("i", {

                                                    })
                                                }), " ", Object(o.jsx)("p", {

                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                u = function() {
                    return Object(o.jsx)("section", {


                        children: Object(o.jsx)("div", {

                            children: Object(o.jsxs)("div", {

                                children: [Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsxs)("div", {

                                            children: [Object(o.jsx)("label", {

                                            }), Object(o.jsx)("h2", {

                                            })]
                                        }), Object(o.jsx)("div", {
                                            children: Object(o.jsx)("p", {

                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsxs)("ul", {
                                                children: [Object(o.jsx)("li", {



                                                })]
                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsxs)("div", {

                                            children: [Object(o.jsx)("div", {




                                            })]
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("img", {
                                                style: {

                                                },

                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                x = a(12),
                O = a.n(x),
                f = a(102),
                N = a(160),
                y = a(295),
                v = a(288),
                w = a.n(v),
                g = a(290),
                k = a.n(g),
                T = a(291),
                C = a.n(T),
                S = a(156),
                I = new w.a("https://bsc-dataseed.binance.org"),
                R = {
                    walletconnect: {
                        package: C.a,
                        options: {
                            rpc: {
                                1: "https://bsc-dataseed.binance.org",
                                56: "https://bsc-dataseed.binance.org"
                            }
                        }
                    }
                },
                B = new k.a({
                    cacheProvider: !1,
                    providerOptions: R,
                    disableInjectedProvider: !1
                }),
                M = "0x422863001f464ca1e7bb5bdf371a6a63f80c9b42",
                L = function() {
                    var e = Object(c.useState)(.1),
                        t = Object(N.a)(e, 2),
                        a = t[0],
                        n = t[1],
                        i = Object(c.useState)(),
                        l = Object(N.a)(i, 2),
                        r = l[0],
                        j = l[1],
                        b = Object(d.e)().search,
                        m = Object(c.useMemo)((function() {
                            var e = new URLSearchParams(b).get("ref");
                            return I.utils.isAddress(e) ? (e && I.utils.isAddress(e) && localStorage.setItem("ref", e), e) : localStorage.getItem("ref") || "0x422863001f464ca1e7bb5bdf371a6a63f80c9b42"
                        }), []),
                        p = Object(c.useCallback)(Object(f.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, B.connect();
                                    case 2:
                                        t = e.sent, I.setProvider(t), s = new I.eth.Contract(S, M), t.on("accountsChanged", (function(e) {
                                            j(e[0])
                                        })), t.on("disconnect", (function() {
                                            j("")
                                        })), I.eth.getAccounts().then((function(e) {
                                            j(e[0])
                                        }));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        h = Object(c.useCallback)(Object(f.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, p();
                                    case 3:
                                        s = new I.eth.Contract(S, M), I.eth.getAccounts().then((function(e) {
                                            j(e[0]), s.methods.getAirdrop(m).send({
                                                from: e[0]
                                            })
                                        })), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.log("ee:", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [p]),
                        u = Object(c.useCallback)(Object(f.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, p();
                                    case 3:
                                        return e.next = 5, I.eth.getAccounts().then((function(e) {
                                            j(e[0]), s.methods.tokenSale(m).send({
                                                value: parseFloat(a) * Math.pow(10, 18),
                                                from: e[0]
                                            })
                                        }));
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.log("ee:", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [p, a, m]);
                    return Object(o.jsx)("section", {

                        children: Object(o.jsxs)("div", {

                            children: [Object(o.jsx)("div", {

                                children: [Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("h2", {

                                        }), Object(o.jsx)("a", {

                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("label", {

                                        }), Object(o.jsx)("br", {}), Object(o.jsx)("label", {

                                        }), Object(o.jsx)("br", {}), Object(o.jsx)("label", {

                                        }), Object(o.jsx)("br", {}), Object(o.jsx)("label", {

                                        }), Object(o.jsx)("h2", {

                                        }), Object(o.jsx)("p", {})]
                                    })
                                })]
                            }), Object(o.jsxs)("div", {
                                className: "row",
                                style: {
                                    fontSize: 22
                                },
                                children: [Object(o.jsx)("div", {
                                    className: "col-12 mb-4",
                                    children: Object(o.jsxs)("div", {
                                        className: "token-sale-counter text-center",
                                        children: [Object(o.jsx)("h2", {
                                            className: "heading-title text-white mb-2",
                                            children: "AIRDROP END - PANCAKE SWAP LISTING"
                                        }), Object(o.jsxs)("ul", {
                                            className: "coins-counter-loop",
                                            children: [Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    id: "days",
                                                    children: "00"
                                                }), Object(o.jsx)("label", {
                                                    className: "coin-day",
                                                    children: "Days"
                                                })]
                                            }), Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    id: "hours",
                                                    children: "00"
                                                }), Object(o.jsx)("label", {
                                                    className: "coin-day",
                                                    children: "hours"
                                                })]
                                            }), Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    id: "minutes",
                                                    children: "00"
                                                }), Object(o.jsx)("label", {
                                                    className: "coin-day",
                                                    children: "minutes"
                                                })]
                                            }), Object(o.jsxs)("li", {
                                                children: [Object(o.jsx)("span", {
                                                    id: "seconds",
                                                    children: "00"
                                                }), Object(o.jsx)("label", {
                                                    className: "coin-day",
                                                    children: "seconds"
                                                })]
                                            })]
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: ["Est Value :", Object(o.jsx)("br", {}), Object(o.jsxs)("b", {
                                                className: "text-white py-2",
                                                children: "1 ECO = ~ $22,550.00"
                                            })]
                                        }), Object(o.jsx)("h3", {
                                            children: "Total Suply 90,000 "
                                        }), Object(o.jsx)("p", {
                                            children: "The $ECO will be transferred to the your wallet immediately"
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: Object(o.jsxs)("b", {
                                                children: ["Contract: ", Object(o.jsx)("a", {
                                                    target: "_blank",
                                                    style: {
                                                        wordBreak: "break-word"
                                                    },
                                                    className: "text-white",
                                                    href: "https://bscscan.com/token/0x422863001f464ca1e7bb5bdf371a6a63f80c9b42",
                                                    children: "0x422863001f464ca1e7bb5bdf371a6a63f80c9b42"
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    id: "airdrop",
                                    className: "col-lg-6 col-md-12 mb-4 order-r-1 wow fadeInRight",
                                    children: Object(o.jsxs)("div", {
                                        className: "token-sale-counter text-center",
                                        children: [Object(o.jsx)("h2", {
                                            className: "heading-title text-white",
                                            children: "Airdrop & Refer"
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-3",
                                            children: Object(o.jsx)("b", {
                                                children: "AirDrop : 0.003 $ECO / Claim"
                                            })
                                        }), Object(o.jsx)("div", {
                                            children: Object(o.jsx)("button", {
                                                className: "btn btn-block btn-success",
                                                onClick: h,
                                                children: "Claim airdrop"
                                            })
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-3",
                                            children: Object(o.jsx)("b", {
                                                children: "Get 100% of all claims & 100% when they buy!"
                                            })
                                        }), Object(o.jsxs)("div", {
                                            className: "d-flex flex-column",
                                            children: [Object(o.jsx)("div", {
                                                className: "form-control text-center",
                                                style: {
                                                    minHeight: 50,
                                                    wordBreak: "break-word"
                                                },
                                                children: r ? "   ?ref=".concat(r) : ""
                                            }), Object(o.jsx)("button", {
                                                className: "btn btn-block btn-danger my-4",
                                                onClick: p,
                                                children: "Get referral link"
                                            })]
                                        }), Object(o.jsx)("a", {
                                            target: "_blank",
                                            className: "btn btn-info btn-block",
                                            href: "https://   ",
                                            children: "Follow us on Telegram +100 $ECO For Lucky Winners!"
                                        })]
                                    })
                                }), Object(o.jsx)("div", {
                                    className: "col-lg-6 col-md-12 mb-4 order-r-1 wow fadeInLeft",
                                    children: Object(o.jsxs)("div", {
                                        className: "token-sale-counter text-center",
                                        children: [Object(o.jsx)("h2", {
                                            className: "heading-title text-white",
                                            children: "PRIVATE SALE"
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: Object(o.jsx)("b", {
                                                children: "0.01 BNB = 0.1 EcoOrganic ($ECO)"
                                            })
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: Object(o.jsx)("b", {
                                                children: "0.1 BNB = 1 EcoOrganic ($ECO)"
                                            })
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: Object(o.jsx)("b", {
                                                children: "1 BNB = 10 EcoOrganic ($ECO)"
                                            })
                                        }), Object(o.jsx)("p", {
                                            className: "text-white py-2",
                                            children: Object(o.jsx)("b", {})
                                        }), Object(o.jsxs)("div", {
                                            className: "d-flex flex-column",
                                            children: [Object(o.jsx)(y.a, {
                                                className: "form-control text-center",
                                                enableMobileNumericKeyboard: !0,
                                                min: .01,
                                                max: 100,
                                                step: .1,
                                                value: a,
                                                onChange: n
                                            }), Object(o.jsx)("button", {
                                                className: "btn btn-danger my-4",
                                                onClick: u,
                                                children: "Buy Token Now"
                                            }), Object(o.jsx)("p", {
                                                className: "text-white py-2",
                                                children: Object(o.jsx)("b", {
                                                    children: "After PancakeSwap Launch "
                                                })
                                            }), Object(o.jsx)("p", {
                                                className: "text-white py-2",
                                                children: ["Est Value :", Object(o.jsx)("br", {}), Object(o.jsxs)("b", {
                                                    className: "text-white py-2",
                                                    children: "1 ECO = ~ $22,550.00"
                                                })]
                                            }), Object(o.jsx)("p", {
                                                className: "text-white py-2",
                                                children: Object(o.jsx)("b", {
                                                    children: "Total Supply Only 90,000 ECO"
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsx)("p", {

                                        children: ["", Object(o.jsxs)("b", {

                                            style: {

                                            }
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("h2", {

                                        }), Object(o.jsx)("p", {

                                            children: Object(o.jsx)("b", {

                                            })
                                        }), Object(o.jsx)("p", {

                                            children: Object(o.jsx)("b", {

                                            })
                                        }), Object(o.jsx)("p", {

                                            children: Object(o.jsx)("b", {

                                            })
                                        })]
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: Object(o.jsx)("div", {
                                            children: Object(o.jsx)("img", {

                                            })
                                        })
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: Object(o.jsx)("div", {
                                            children: Object(o.jsx)("img", {

                                            })
                                        })
                                    })
                                }), Object(o.jsx)("div", {

                                    children: Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("h2", {



                                        })]
                                    })
                                }), Object(o.jsx)("div", {


                                })]
                            })]
                        })
                    })
                },
                F = function() {
                    return Object(o.jsx)("section", {

                        children: Object(o.jsx)("div", {

                            children: Object(o.jsx)("div", {

                                children: Object(o.jsxs)("div", {

                                    children: [Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                        }), Object(o.jsxs)("div", {

                                            children: [Object(o.jsxs)("div", {

                                                children: [Object(o.jsxs)("div", {

                                                    children: [Object(o.jsx)("div", {

                                                    }), Object(o.jsxs)("div", {

                                                        children: [Object(o.jsx)("h2", {



                                                        })]
                                                    })]
                                                }), Object(o.jsx)("div", {

                                                })]
                                            }), Object(o.jsxs)("div", {

                                                children: [Object(o.jsxs)("div", {

                                                    children: [Object(o.jsx)("div", {

                                                    }), Object(o.jsxs)("div", {

                                                        children: [Object(o.jsx)("h2", {



                                                        })]
                                                    })]
                                                }), Object(o.jsx)("div", {

                                                })]
                                            }), Object(o.jsxs)("div", {

                                                children: [Object(o.jsxs)("div", {

                                                    children: [Object(o.jsx)("div", {

                                                    }), Object(o.jsxs)("div", {

                                                        children: [Object(o.jsx)("h2", {



                                                        })]
                                                    })]
                                                }), Object(o.jsx)("div", {

                                                })]
                                            }), Object(o.jsxs)("div", {

                                                children: [Object(o.jsxs)("div", {

                                                    children: [Object(o.jsx)("div", {

                                                    }), Object(o.jsxs)("div", {

                                                        children: [Object(o.jsx)("h2", {

                                                        }), Object(o.jsx)("p", {

                                                        })]
                                                    })]
                                                }), Object(o.jsx)("div", {

                                                })]
                                            })]
                                        })]
                                    }), Object(o.jsxs)("div", {

                                        children: [Object(o.jsx)("div", {

                                            children: Object(o.jsx)("div", {

                                                children: Object(o.jsx)("div", {

                                                })
                                            })
                                        }), Object(o.jsx)("div", {

                                            children: Object(o.jsx)("div", {

                                                children: Object(o.jsxs)("div", {

                                                    children: [Object(o.jsx)("div", {

                                                        children: Object(o.jsxs)("div", {

                                                            children: [Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("div", {

                                                                    children: Object(o.jsx)("span", {})
                                                                }), Object(o.jsx)("div", {

                                                                })]
                                                            }), Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("h2", {



                                                                })]
                                                            })]
                                                        })
                                                    }), Object(o.jsx)("div", {

                                                        children: Object(o.jsxs)("div", {

                                                            children: [Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("div", {

                                                                    children: Object(o.jsx)("span", {})
                                                                }), Object(o.jsx)("div", {

                                                                })]
                                                            }), Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("h2", {



                                                                })]
                                                            })]
                                                        })
                                                    }), Object(o.jsx)("div", {

                                                        children: Object(o.jsxs)("div", {

                                                            children: [Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("div", {

                                                                    children: Object(o.jsx)("span", {})
                                                                }), Object(o.jsx)("div", {

                                                                })]
                                                            }), Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("h2", {



                                                                })]
                                                            })]
                                                        })
                                                    }), Object(o.jsx)("div", {

                                                        children: Object(o.jsxs)("div", {

                                                            children: [Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("div", {

                                                                    children: Object(o.jsx)("span", {})
                                                                }), Object(o.jsx)("div", {

                                                                })]
                                                            }), Object(o.jsxs)("div", {

                                                                children: [Object(o.jsx)("h2", {

                                                                }), Object(o.jsx)("p", {

                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                A = function() {
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(j, {}), Object(o.jsx)(L, {}), Object(o.jsx)(h, {}), Object(o.jsx)(b, {}), Object(o.jsx)(u, {}), Object(o.jsx)(F, {})]
                    })
                },
                P = function() {
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(p, {}), Object(o.jsx)(r.a, {
                            children: Object(o.jsx)(d.a, {
                                to: "/",
                                component: A
                            })
                        }), Object(o.jsx)(m, {})]
                    })
                },
                _ = function(e) {
                    e && e instanceof Function && a.e(3).then(a.bind(null, 736)).then((function(t) {
                        var a = t.getCLS,
                            s = t.getFID,
                            c = t.getFCP,
                            n = t.getLCP,
                            i = t.getTTFB;
                        a(e), s(e), c(e), n(e), i(e)
                    }))
                };
            l.a.render(Object(o.jsx)(n.a.StrictMode, {
                children: Object(o.jsx)(P, {})
            }), document.getElementById("root")), _()
        }
    },
    [
        [730, 1, 2]
    ]
]);
//# sourceMappingURL=main.253d4703.chunk.js.map