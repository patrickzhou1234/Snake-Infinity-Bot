window.onkeydown = function(event) {
    if (event.keyCode == "80") {
        setInterval(function() {
            document.dispatchEvent(new KeyboardEvent("keydown", {
                key: "ArrowDown",
                keyCode: 40,
                code: "ArrowDown",
                which: 40,
                shiftKey: false,
                ctrlKey: false,
                metaKey: false
            }));
        }, 1000);
        setTimeout(function() {
            setInterval(function() {
                document.dispatchEvent(new KeyboardEvent("keydown", {
                    key: "ArrowRight",
                    keyCode: 39,
                    code: "ArrowRight",
                    which: 39,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false
                }));
            }, 1000);
        }, 50);
    }
}
