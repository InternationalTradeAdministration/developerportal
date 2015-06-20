function createAnchorsFromHeadings() {
    return $("h2, h3, h4, h5, h6").each(function (e, a) {
        var t, n, r;
        return t = $(a), r = t.attr("id"), n =
            '<i class="fa fa-link"></i>', r ? t.append($("<a />").addClass(
            "header-link").attr("href", "#" + r).html(n)) :
            void 0
    })
}

function createNavigationSidebarFromHeadings() {
    var e = "",
        a = null;
    $(".reference :header").not(".noindex").each(function () {
        var t = $(this),
            n = this.tagName,
            r = n.substr(1, 1),
            i = t.text(),
            s = "#" + t.attr("id"),
            o = "";
        if (null === a) o = "";
        else if (r > a) o = "<ul>";
        else if (a > r)
            for (var d = a - r, u = 0; d > u; u++) o +=
                "</ul></li>";
        else a === r && (o = "</li>");
        o += "<li><a href='" + s + "'>" + i + "</a>", e += o, a = r
    }), $("#reference-nav-ul").prepend(e)
}
if (!library) var library = {};
library.json = {
    replacer: function (e, a, t, n, r) {
        var i = "<span class=json-key>",
            s = "<span class=json-value>",
            o = "<span class=json-string>",
            d = a || "";
        return t && (d = d + i + t.replace(/[": ]/g, "") + "</span>: "),
        n && (d = d + ('"' == n[0] ? o : s) + n + "</span>"), d + (
        r || "")
    },
    prettyPrint: function (e) {
        var a = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
        return JSON.stringify(e, null, 3).replace(/&/g, "&amp;").replace(
            /\\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g,
            "&gt;").replace(a, library.json.replacer)
    }
}, $(document).ready(function () {
    if (createNavigationSidebarFromHeadings(),
            createAnchorsFromHeadings(), $("textarea").autosize(), $(
            ".reference-nav").affix({
                offset: {
                    top: function () {
                        return this.top = $(".reference-nav").offset()
                            .top - 12
                    }
                }
            }), $("#api-status-updated").length > 0) {
        var e, a, t = $("#api-status-updated").find("#endpoint").html(),
            n = $("#api-status-updated").find("#count").html();
        $.getJSON(t + "count=" + n).success(function (t) {
            if (t.results) {
                var n = t.results[t.results.length - 1].time.replace(
                    /(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
                e = "Updated " + t.meta.last_updated, a =
                    "Data current through " + n, $(
                    "#api-status-updated").find(
                    "#date-updated").text("API OK | " + e +
                    " | "), $("#api-status-updated").find(
                    "#date-latest").text(a)
            } else {
                var r = "This API is down right now.";
                $("#api-status-updated").find("#date-updated").text(
                    r)
            }
        }).error(function () {
            var e = "This API is down right now.";
            $("#api-status-updated").find("#date-updated").text(
                e)
        })
    }
    $(".api-status").length > 0 && $.getJSON("").done(
        function (e) {
            var a = {};
            for (item in e) "recall" == e[item].endpoint ? (a[
                ""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            }, a[""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            }, a[""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            }) : "" == e[item].endpoint ? a[
                ""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            } : "" == e[item].endpoint ? a[
                ""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            } : "" == e[item].endpoint && (a[
                ""] = {
                status: e[item].status,
                last_updated: e[item].last_updated
            });
            $(".api-status").each(function () {
                var e = this,
                    t = $(e).data("endpoint");
                a[t] ? "GREEN" == a[t].status ? ($(e).find(
                    ".status").text("OK"), $(e).find(
                    ".updated").text(a[t].last_updated),
                    $(e).find(".metric").addClass(
                        "visible"), $(e).addClass(
                    "green")) : "YELLOW" == a[t].status ?
                    ($(e).find(".status").text("Slow"), $(e)
                        .find(".updated").text(a[t].last_updated),
                        $(e).find(".metric").addClass(
                            "visible"), $(e).addClass(
                        "yellow")) : "RED" == a[t].status &&
                ($(e).find(".status").text("Down"), $(e)
                    .find(".updated").text(a[t].last_updated),
                    $(e).find(".metric").addClass(
                        "visible"), $(e).addClass("red")
                ) : ($(e).find(".status").text(
                    "No information available"), $(
                    e).find(".updated").text("â€”"),
                    $(e).find(".metric").addClass(
                        "visible"))
            })
        }).fail(function () {
            $(".api-status").each(function () {
                var e = this;
                $(e).data("endpoint"), $(e).find(".status")
                    .text(
                    "API status server not responding"),
                    $(e).find(".updated").text("â€”"), $(e)
                    .find(".metric").addClass("visible")
            })
        }), $(".api-explorer button.go").click(function () {
        var e = $(this).parents(".api-explorer-form").find(
                ".api-explorer-query").val(),
            a = $(this).parents("div.api-explorer").find(
                ".return");
        $(this), $(a).find(".response pre").html("Loading..."),
            $.getJSON(e, function (e) {
                $(a).find(".response pre").html(library.json
                    .prettyPrint(e)), $(a).parent().find(
                    ".response-close").remove(), $(a).find(
                    ".response pre").after(
                ), $(a).height() > 200 && $(a).find(
                    ".response pre").before(
                    '<button class="btn pull-left response-close">Close</button>'
                ), $(".response-close").click(function () {
                    $(this).parent().find("pre").html(
                        ''
                    ), $(this).parent().find(
                        ".response-close").remove()
                })
            }).fail(function () {
                $(a).find(".response pre").html(
                    "The API response was an error. Check the syntax and give it another try."
                )
            })
    }), $(".api-explorer-query").keypress(function (e) {
        var a = e.keyCode ? e.keyCode : e.which,
            t = $(this).parents("div.api-explorer").find(
                "button.go");
        32 === a ? e.preventDefault() : 13 === a && (e.preventDefault(),
            $(t).trigger("click"))
    })
});
