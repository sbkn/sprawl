import {expect} from "chai";
import sinon from "sinon";
import {index} from "../../src/get/index.es6";
import DoIt from "../../src/get/do-it.es6";

let sandbox;

describe("Index", () => {

	describe("index", () => {

		beforeEach(() => {
			sandbox = sinon.sandbox.create();
		});

		afterEach(() => {
			sandbox.restore();
		});

		it("should return result in case of success", done => {

			sandbox.stub(DoIt, "main").callsFake(() => (Promise.resolve({success: true})));

			const event = {};

			const context = {
				succeed: result => {
					expect(result).to.have.property("success")
						.that.equals(true);

					done();
				},
				fail: err => done(new Error(`Should have succeeded, error: ${err}`))
			};

			index(event, context);
		});
	});
});
