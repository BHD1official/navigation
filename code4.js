var nSubChapter = 0;
var nSlide = 0;
var content;
const FUNCTION_LIST = ["showSlide10", "showSlide1"];

$(function () {
    
    $("#slide28").hide();
    $("#logo").on("click", function () {
        sessionStorage.removeItem("slideNum");
    })

    nSlide = Number(sessionStorage.getItem("slideNum"));
    if (nSlide !== 0) {
        $("#slide0").hide();
        // if there are more than two slides with the same title so in case of refresh it will fix the title.
        if (nSlide >= 0 && nSlide < 1) {
            $("#chapter-ttl").text("מבוא");
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(0)").addClass("menu-active");
        }

        if (nSlide > 1 && nSlide < 20) {
            $("#chapter-ttl").text('סד"פ');
            $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
            $(".menu-chapter-sub-ttl:eq(4)").addClass("menu-active");
        }

        $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
        $("#slide" + nSlide).show();
        eval("showSlide" + nSlide + "()");
    }

    else {
        showSlide0();
    }

    //open/close the menu.
    $("#menu-btn").on("click", function () {
        this.classList.toggle("active");
        content = this.nextElementSibling;
        if (content.style.maxHeight) {
            $("#menu-close").hide();
            content.style.maxHeight = null;
        }
        else {
            $("#menu-close").show();
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    $("#menu-close").on("click", function () {
        $("#menu-close").hide();
        content.style.maxHeight = null;
    });

    $(".menu-chapter-sub-ttl, .menu-chapter-ttl").on("click", function () {
        $("#menu-close").hide();
        $("#prv-btn" + nSlide).off();
        $("#nxt-btn" + nSlide).off();
        $("#slide" + nSlide).hide();

        $("#menu-btn").removeClass("active");
        content.style.maxHeight = null;

        nSlide = $(this).attr("id");
        sessionStorage.setItem("slideNum", nSlide);

        $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
        $("#slide" + nSlide).show();
        eval("showSlide" + nSlide + "()");
    });
});


// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function nxtSlide() {
    $("#prv-btn" + nSlide).off();
    $("#nxt-btn" + nSlide).off();
    $("#slide" + nSlide).hide();
    nSlide++;
    if (nSlide === 6) nSlide++; // slide 6 has been deleted 
    $("#slide" + nSlide).show();
    sessionStorage.setItem("slideNum", nSlide);
    eval("showSlide" + nSlide + "()");
}

function prvSlide() {
    $("#prv-btn" + nSlide).off();
    $("#nxt-btn" + nSlide).off();
    $("#slide" + nSlide).hide();
    nSlide--;
    if (nSlide === 6) nSlide--; // slide 6 has been deleted 
    $("#slide" + nSlide).show();
    sessionStorage.setItem("slideNum", nSlide);
    eval("showSlide" + nSlide + "()");
}

function showSlide0() {
    $("#chapter-ttl").text("מבוא");
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(".menu-chapter-ttl:eq(0)").addClass("menu-active");
    $(".mov-btns").css({ position: "static", width: "auto", fontSize: "1.2rem", justifyContent: "flex-end" });
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide1() {
    showSlides();
    $("#chapter-ttl").text("מבוא");
    $(".arrow").show("slow").hide("fast").show("slow");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide2() {
    showSlides();
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide3() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide4() {
    showSlides();
    $("#content-div4 > div > img").attr("src", "media4/map1.png");
    setTimeout(() => {
        $("#content-div4 > div > img").attr("src", "media4/map1.5.png");
    }, "1000")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide5() {
    showSlides();
    $("#content-div5 > div > img").attr("src", "media4/map3.png");
    setTimeout(() => {
        $("#content-div5 > div > img").attr("src", "media4/map3.1.png");
    }, "1000")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide6() {
    showSlides();
    $("#content-div6 > div > img").attr("src", "media4/map4.0.png");
    setTimeout(() => {
        $("#content-div6 > div > img").attr("src", "media4/map4.1.png");
    }, "1500")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide7() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide8() {
    showSlides();
    $("#content-div8 > .side-part > ul > li").delay(500).each(function (i) {
        $(this).delay(100 * i).queue(function () {
            $(this).addClass("show");
        })
    })
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide9() {
    showSlides();
    startingCanvas("canvas1", 9, '#3f4b5b');
    expandMap(9, "media4/map2.png", "media4/map2.1.png", "95vw");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide10() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showSlide11() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide12() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide13() {
    showSlides();
    $("#content-div13 > div > img").attr("src", "media4/map7.png");
    setTimeout(() => {
        $("#content-div13 > div > img").attr("src", "media4/map7.1.png");
    }, "1000")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide14() {
    showSlides();
    $("#content-div14 > div > img").attr("src", "media4/map7.png");
    setTimeout(() => {
        $("#content-div14 > div > img").attr("src", "media4/map7.2.png");
    }, "1000")
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide15() {
    showSlides();
    startingCanvas("canvas2", 15, '#28a745');
    expandMap(15, "media4/map2.1.png", "media4/map2.5.png", "100vw");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide16() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide17() {
    showSlides();
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide18() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide19() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide20() {
    showSlides();
    startingCanvas("canvas3", 20, '#fd7e14');
    expandMap(20, "media4/map2.1.png", "media4/map2.1.png", "95vw");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide21() {
    showSlides();
    creatingCompass();
    $(".mov-btns").hide();
    $(".level8-txt").hide();
    $("#level8-txt").show();
}

function creatingCompass() {
    let degree = Math.PI * 1.25;
    let radius = 7.2;
    $(".dirc").each(function (i) {
        degree += (Math.PI / 4);
        $(this).css({ "transform": `rotate(${i * 45}deg)`, "top": `${radius * Math.sin(degree) + 8.5}vh`, "left": `${radius * Math.cos(degree) + 9.3}vh` });
    });

    let nText;
    let textRead = [];
    $(".dirc").on("click", function (event) {
        nText = Number($(event.target).data("id"));

        $(".dirc-container").animate(
            { deg: -nText * 45 },
            {
                duration: 1500,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    setTimeout(function () { $(event.target).css({ color: '#4f9e9e' }) }, 1500);
                }
            }
        );

        if (!textRead.includes(nText)) textRead.push(nText);
        $(".level8-txt").hide();

        if (nText > 0 && nText < 5) {
            switch (nText) {
                case 1:
                    $("#level8-txt1 > u").text("מתי נמדוד אזימוט");
                    $("#level8-txt1 > span:first-of-type").text("1. התחלת קיטוע:");
                    $("#level8-txt1 > span:nth-of-type(2)").text('נמדוד אזימוט ונכתוב אותו על המפה ע"מ להקל על למידת הקטעים');
                    $("#level8-txt1 > span:nth-of-type(3)").text('');
                    $("#level8-txt1 > img").attr("src", "media4/map2.1.png");
                    setTimeout(function () { $("#level8-txt1 > img").attr("src", "media4/map2.4.png") }, 1500);
                    break;
                case 2:
                    $("#level8-txt1 > u").text("מתי נמדוד אזימוט");
                    $("#level8-txt1 > span:first-of-type").text("2. נק' אימות:");
                    $("#level8-txt1 > span:nth-of-type(2)").text("נמדוד אזימוט אל נק' האימות");
                    $("#level8-txt1 > span:nth-of-type(3)").text('');
                    $("#level8-txt1 > img").attr("src", "media4/map2.4.png");
                    setTimeout(function () { $("#level8-txt1 > img").attr("src", "media4/map2.2.png") }, 1500);
                    break;
                case 3:
                    $("#level8-txt1 > u").text("מתי נמדוד אזימוט");
                    $("#level8-txt1 > span:first-of-type").text("3. בניווט מדויק:");
                    $("#level8-txt1 > span:nth-of-type(2)").text('פעמים רבות כאשר אין לנו טופוגרפיה נשתמש יותר באזימוטים');
                    $("#level8-txt1 > span:nth-of-type(3)").text('');
                    $("#level8-txt1 > img").attr("src", "media4/map2.2.png");
                    setTimeout(function () { $("#level8-txt1 > img").attr("src", "media4/map2.3.png") }, 1500);
                    break;
                case 4:
                    $("#level8-txt1 > u").text("מדידת מרחק");
                    $("#level8-txt1 > span:first-of-type").text(" - נמדוד את האורך של כך קיטוע");
                    $("#level8-txt1 > span:nth-of-type(2)").text(' - נמדוד את אורך הציר כולו');
                    $("#level8-txt1 > span:nth-of-type(3)").text(' נתוני המרחק בקיטוע משלימים את מדידת האזימוט');
                    $("#level8-txt1 > img").attr("src", "media4/map5.1.png");
                    break;
                default:
                    break;
            }
            nText = 1;
        }

        $("#level8-txt" + nText).show();
        if (textRead.length >= 8) $(".mov-btns").show();
    });
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide22() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide23() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide24() {
    showSlides();
    reStartSlide24();
    startSlide24();
};

function startSlide24() {
    $("#tap0").on("click", function (event) {

        $("#tap0").hide();
        let tblText = { 0: "8", 1: "115°", 2: "150 מ'", 3: "ירידה לאוכף", 4: "", 5: "שינוי למגמת עליה", 6: "9", 7: "50°", 8: "750 מ'", 9: "יורדים לנחל ועולים ", 10: "", 11: "פיצול בנחל" };
        $(".tr-txt > td").css("opacity", "0");

        $(".tr-txt > td").text(function (i) {
            return (tblText[i]);
        });

        $(".tr-txt > td").delay(25).each(function (i) {
            $(this).delay(100 * i).addClass("show-td");
        })

        $(".tr-top > td , .tr-bottom > td").each(function (i) {
            $(this).addClass("animate__animated animate__flipOutX");
        });

        $(".slide-up").delay(2000).addClass("animate__animated animate__zoomIn").show();

        let touchstartY = 0;
        let touchendY = 0;
        let opened = false;

        document.addEventListener('touchstart', e => {
            touchstartY = e.changedTouches[0].screenY
        })

        document.addEventListener('touchend', e => {
            touchendY = e.changedTouches[0].screenY
            if (!opened) checkDirection()
            opened = true;
        })

        function checkDirection() {
            if (touchendY < touchstartY) {
                //swipe up
                $(".slide-up").removeClass("animate__zoomIn").show();
                $(".slide-up").addClass("animate__flipOutX");
                $(".table24").animate({
                    marginTop: "-15vh"
                }, 2000);

                $("#content-div24 > div:first > img").show();
                $(".mov-btns").addClass("animate__animated animate__fadeInUp").show();
                $(".mov-btns").removeClass("animate__animated animate__fadeInUp")
            }
        }

    });
}

function reStartSlide24() {
    $(".mov-btns, .slide-up").hide();
    $("#content-div24 > div:first > img").hide();
    $(".tr-txt > td").css("opacity", "1");
    $(".tr-txt > td").text(function (i) {
        return "";
    });

    $(".tr-txt > td").eq(0).append('<img class="tap" id="tap0" src="media/tap.png" />');
    $("#tap0").show();
    $("#tap0").css("opacity", "1");

    $(".tr-txt > td").each(function (i) {
        $(this).removeClass("show-td");
    })

    $(".tr-top > td , .tr-bottom > td").each(function (i) {
        $(this).removeClass("animate__animated animate__flipOutX");
    })

    $(".slide-up").queue(function () {
        $(this).removeClass("animate__animated animate__flipOutX");
    });

    $(".table24").css("marginTop", "-2vh");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide25() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide26() {
    showSlides();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide27() {
    showSlides();
    $(".mov-btns").hide();
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".swiper-pagination-bullet-active").css({ color: "#4f9e9e" });
    $(".swiper-slide").fadeOut(50);
    $(".swiper-slide").delay(800).fadeIn(100);

    let nextCounter = 0;
    let prevCounter = 0;
    $(".swiper-button-next").click(function () {
        nextCounter++;
        if (nextCounter === 5) {
            $(".mov-btns").show();
        }
    });
    $(".swiper-button-prev").click(function () {
        prevCounter--;
        if (prevCounter === -5) {
            $(".mov-btns").show();
        }
    });

    let lastSlide = 1;
    let slidesOpened = [1];

    document.addEventListener('touchend', function (e) {
        var touch = e.touches[0];
        if (swiper.activeIndex !== lastSlide) {
            lastSlide = swiper.activeIndex;
            if (!slidesOpened.includes(swiper.activeIndex)) {
                slidesOpened.push(swiper.activeIndex);
                if (slidesOpened.length === 5) {
                    $(".mov-btns").show();
                }
            }
        }
    }, false);
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlide28() {
    return;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showSlides() {
    $("#chapter-ttl").text('סד"פ');
    $("#content-div" + nSlide).css({ height: ($("body").height() - document.getElementById("content-div" + nSlide).getBoundingClientRect().top) });
    $(".mov-btns").css({ position: "fixed", bottom: "0", width: "100vw", fontSize: "1.5rem", justifyContent: "space-between" });
    $(".mov-btns").show();
    $("#prv-btn" + nSlide).on("click", prvSlide);
    $("#nxt-btn" + nSlide).on("click", nxtSlide);
    $(".menu-chapter-ttl, .menu-chapter-sub-ttl").removeClass("menu-active");
    $(`#${nSlide}`).addClass("menu-active");
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function startingCanvas(canvasId, idNum, color) {
    $(".drawing-board").offset();
    topSpace = $(`#content-div${idNum} > div > img`).position().top;
    $(".drawing-board").css({ top: topSpace });
    const canvas = document.getElementById(canvasId);

    const ctx = canvas.getContext('2d');
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let lineWidth = 2;

    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth;

    const draw = (e) => {
        if (!isPainting) {
            return;
        }
        var rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
        ctx.stroke();
    }

    canvas.addEventListener('touchstart', (e) => {
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    canvas.addEventListener('touchend', e => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
    });

    canvas.addEventListener('touchmove', draw);

    $(".eraser").on("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
};

function expandMap(idNum, imgSrc1, imgSrc2, marginTop) {
    $(`#content-div${idNum} > div > img:first`).attr("src", `${imgSrc1}`);
    $(`#content-div${idNum} .full-screen`).click(function () {
        $(`#content-div${idNum}> div > .drawing-board`).css({ position: "absolute", top: "0", left: "0", width: "100vw", height: "100vw", margin: "0" });
        $(`#content-div${idNum} > div > div:first`).css({ display: "none" });
        $(`#content-div${idNum} > div > img:first`).css({ position: "absolute", top: "0", left: "0", width: "100vw", height: "100vw", margin: "0" });
        $(`#content-div${idNum} > div > img:nth-of-type(2)`).css({ position: "absolute", top: "2vw", left: "2vw", margin: "0" });
        $(`#content-div${idNum} > div > img:nth-of-type(3)`).css({ display: "none" });
        $(`#content-div${idNum} > .button-57`).css({ marginTop: `${marginTop}` });
    })

    let clickNum = 0;
    $(`#content-div${idNum} > .button-57`).click(function () {
        clickNum++
        if (clickNum === 1) {
            setTimeout(function () {
                $(`#content-div${idNum} > .button-57 > span`).css({ fontSize: "1rem", position: "absolute", paddingTop: "12%", transform: "translate(-50%, 0)", top: "0", left: "50%", width: "35vw", height: "7vh", textAlign: "center", display: "flex", justifyContent: "center", alignTtems: "center" });
                $(`#content-div${idNum} > .button-57`).css({ height: "7.5vh", width: "40vw", alignItems: "center" });
                $(`#content-div${idNum} > .button-57 > span`).text("לחשיפה/ להסתרה")
            }, 1500);
        }
        if (clickNum % 2 === 0) {
            $(`#content-div${idNum} > div > img:first`).attr("src", `${imgSrc1}`);
        } else {
            $(`#content-div${idNum} > div > img:first`).attr("src", `${imgSrc2}`);
        }
    })
};

