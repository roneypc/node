var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    console.log("you entered: [" + 
        d.toString().trim() + "]");
});