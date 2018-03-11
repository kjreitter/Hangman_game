Main = {};
Main.WordArray = ["baseball", "football", "basketball", "lacrosse", "soccer"];
Main.WordUArray = [];
Main.Lives = 4;
Main.NumberInBank = Words.length;
Main.Word = "test";
Main.WordU = "";

Main.PullWord = function () {
    Main.Word = Words.list[(math.floor(math.randon() * main.NumberInBank))];
}

Main.SetUnderline = function () {
    Main.PullWord();
    for (i = 0; i < main.word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        Main.WordUArray[i] = "_";
    }
    Main.WordU = Main.WordUArray.join("");
    Document.getElementByID("WORD").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpDateLetter = function (letter) {
    Main.Changes = 0;
    for (i = 0; i < main.word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        if (Main.Word.charAt == letter) {
            Main.WordUArray[i] = letter;
            Main.Changes += 1;

        }
    }
    if (main.changes < 1) {
        Main.Lives -= 1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArray.join("");
    Main.Word2 = Main.WordArray.join("");

    if (Main.Word1 == Main.Word2) {
        alert("YOU WIN!  PLAY AGAIN");
        window.location.reload();
    }
    if (Main.Lives < 1) {
        document.getElementById("WORD").innerHTML == Main.Word1;
        alert("You Loose, Try Again?");
        window.location.reload();
    }
    $(function() {
        $("#a").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("a");
        });
    }
    );

    $(function() {
        $("#b").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("b");
        });
    }
    );

    $(function() {
        $("#c").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("c");
        });
    }
    );

    $(function() {
        $("#d").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("d");
        });
    }
    );

    $(function() {
        $("#e").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("e");
        });
    }
    );

    $(function() {
        $("#f").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("f");
        });
    }
    );

    $(function() {
        $("#g").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("g");
        });
    }
    );

    $(function() {
        $("#h").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("h");
        });
    }
    );

    $(function() {
        $("#i").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("i");
        });
    }
    );

    $(function() {
        $("#j").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("j");
        });
    }
    );

    $(function() {
        $("#k").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("k");
        });
    }
    ); $(function() {
        $("#l").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("l");
        });
    }
    );

    $(function() {
        $("#m").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("m");
        });
    }
    );

    $(function() {
        $("#n").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("n");
        });
    }
    );

    $(function() {
        $("#o").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("o");
        });
    }
    );

    $(function() {
        $("#p").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("p");
        });
    }
    );

    $(function() {
        $("#q").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("q");
        });
    }
    );

    $(function() {
        $("#r").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("r");
        });
    }
    );

    $(function() {
        $("#s").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("s");
        });
    }
    );

    $(function() {
        $("#t").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("t");
        });
    }
    );

    $(function() {
        $("#u").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("u");
        });
    }
    );

    $(function() {
        $("#v").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("v");
        });
    }
    ); $(function() {
        $("#w").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("w");
        });
    }
    );

    $(function() {
        $("#x").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("x");
        });
    }
    );

    $(function() {
        $("#y").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("y");
        });
    }
    );

    $(function() {
        $("#z").click(function (event) {
            event.preventDefault();
            Main.UpdateLetter("z");
        });
    }
    );
}

Main.PullWord();
Main.SetUnderline();
