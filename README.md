# NodeJS Express Test-Driven API Development (TDD)

Detailed Blog Post on NodeJS Express Test-Driven API Development (TDD)
https://dvampofo0.wordpress.com/2024/07/20/nodejs-test-driven-api-development-tdd/.

## Objective
The objective of this post is to develop hands on experience with NodeJS and to learn how Test Driven Development with this technology works.

Test-Driven Development (TDD) is a methodology in software development that focuses on an iterative development cycle where the emphasis is placed on writing test cases before the actual feature or function is written. TDD utilizes repetition of short development cycles. It combines building and testing. This process not only helps ensure correctness of the code — but also helps to indirectly evolve the design and architecture of the project at hand.

TDD usually follows the “Red-Green-Refactor” cycle:

1. Add a test to the test suite
2. (Red) Run all the tests to ensure the new test fails
3. (Green) Write just enough code to get that single test to pass
4. Run all tests
5. (Refactor) Improve the initial code while keeping the tests green
6. Repeat

![Image of TDD](https://github.com/dvampofo/nodejs-tdd/blob/main/img/New%20Project.png?raw=true)

## Benefits
TDD encourages writing testable, loosely-coupled code that tends to be more modular. Since well-structured, modular code is easier to write, debug, understand, maintain, and reuse, TDD helps:

- Reduce costs
- Make refactoring and rewriting easier and faster (“make it work” with red and green stages, then refactor “to make it right”)
- Streamline project onboarding
- Prevent bugs and coupling
- Improve overall team collaboration
- Increase confidence that the code works as expected
- Improve code patterns
- Eliminate fear of change
- TDD also encourages constant reflection and improvement. This often exposes areas and abstractions in your code that need to be rethought, which helps drive and improve the overall design.

Finally, by having an extensive test suite in place that covers nearly all possible paths, developers can get quick, real-time feedback during development. This reduces overall stress, improves efficiency, and increases productivity.

## Instructions
To download this NodeJS TDD product, 
1. `git clone https://github.com/dvampofo/nodejs-tdd.git` to the directory of your choice.
2. Install dependencies with `npm install`.
3. To start the server, `npm start -- --port 3000`
4. `npm run test`

![Npm run test](https://github.com/dvampofo/nodejs-tdd/blob/main/img/nodeJs_run_test.jpg?raw=true)

5. To run your first failing test, go to the `todos.js` file and remove the logic from the `router.get...` and `router.post...` functions.

![Failing Test](https://github.com/dvampofo/nodejs-tdd/blob/main/img/failing_test.png?raw=true)

## Troubleshooting

If you run into an error that mentions "Watchman: "Operation not permitted", the solution can be found [HERE](https://stackoverflow.com/questions/72451781/cant-use-watchman-operation-not-permitted).

![Watchman Operation not permitted](https://github.com/dvampofo/nodejs-tdd/blob/main/img/nodeJs_watchman1.png?raw=true)


## Tools
Technology used: [NodeJS](https://github.com/nodejs), [SuperTest](https://github.com/ladjs/supertest), [Jest](https://github.com/jestjs/jest).