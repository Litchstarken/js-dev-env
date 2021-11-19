import {expect} from 'chai';
// we import the helper library jsdom to simulate the DOM in to this file test
// without openning a real browser
import jsdom from 'jsdom';
// we import fs from node so we can interact with the file system
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    })
});

describe("index.html", () => {
    it("should say hello", () => {
        // index will hold the result of reading the html
        const index = fs.readFileSync("./src/index.html", "utf-8");
        // destructure the jsdom object
        const {JSDOM} = jsdom;
        // we create a new instance of jsdom and pass the html
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hello Chiquita, You are the best thing about me 🎶 😘");
        dom.window.close();
    })
})