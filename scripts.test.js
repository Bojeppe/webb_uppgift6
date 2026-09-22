const {changeText} = require("./scripts.js");

test("omvandlar text till VERSALER/STORA BOKSTÄVER", () => {

expect(changeText("hej")).toBe("HEJ");      //små boktsäver blir stora

});

//test för en mening med flera ord
test("omvandlar en mening med flera ord", () =>{

    expect(changeText("tjenare Världen")).toBe("TJENARE VÄRLDEN");

});

//test för tom sträng
test("tom sträng", () =>{

    expect(changeText("")).toBe("");

});