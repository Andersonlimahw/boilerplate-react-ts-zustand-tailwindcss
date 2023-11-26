import '@testing-library/jest-dom'
import { startMirage } from './src/mocks/miragejs/index.js';

let server : any = {};

beforeEach(() => {
  server = startMirage()
})

afterEach(() => {
  server.shutdown()
})