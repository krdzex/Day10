function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Krsto Kostic",
            title: "Programer",
            release_year: 1999,
            id: 2,
            formats: {
                1: "Test",
                2: "JosTest",
                3: "JosJosTest"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;