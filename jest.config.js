module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.test.js(x)"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.js"]
}
