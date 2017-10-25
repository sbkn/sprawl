import {expect} from "chai";
import DoIt from "../../src/get/do-it.es6";

describe("DoIt", () => {

	describe("main", () => {

		it("should return result in case of success", done => {

			DoIt.main()
				.then(data => {
					done();
				})
				.catch(err => {
					done(new Error(err));
				});
		});
	});
});
