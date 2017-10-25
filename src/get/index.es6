import DoIt from "./do-it.es6";

const index = (event, context) => {

	console.log(`EVENT: ${JSON.stringify(event, null, 2)}`);

	DoIt.main()
		.then(response => {

			context.succeed(response);
		})
		.catch(err => {

			const error = new Error(JSON.stringify(err));

			context.fail(error);
		});

};

module.exports = {
	index
};
