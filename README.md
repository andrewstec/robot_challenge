# robot_challenge

Helping a stupid robot move left or right is a challenge. Clone this repository to test your sanity. I am assuming that you are running Node JS and have `npm` installed.

## Developer Native Install Instructions

Clone command: `git clone https://github.com/andrewstec/robot_challenge`

Next, install the node_module libraries to support the source code of this repository.

Install libraries command: `npm install`

Build the TypeScript source code into JavaScript: `npm run build`.

Finally, start the server by running the built JavaScript files with `npm run start`.

### Testing Instructions

`npm run test`

## Developer Docker Build Instructions

Clone repository and enter directory: `git clone https://github.com/andrewstec/robot_challenge && cd robot_challenge`

Build Docker container: `docker build . -t robot_challenge`

-- NOTE: 6555 or ANY free port in your local environment that will not conflict with other running applications.
Run Docker container: `docker run -p 6555:8080 robot_challenge`

Visit http://localhost:6555/direction?heading=310&target=311 to see running application
