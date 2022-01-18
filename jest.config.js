module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^~/(.*)$': '<rootDir>/$1',
    // '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    // `ts-jest` で `*.ts` ファイルを処理します。
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  //Jestがテストファイルを検出するために使用するグロブパターン
  testMatch: ['<rootDir>/src/**/*/*.test.ts?(x)'],
  //テストする環境のこと
  testEnvironment: 'jest-environment-jsdom',
}
