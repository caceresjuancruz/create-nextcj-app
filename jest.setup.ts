import '@testing-library/jest-dom'

jest.mock("query-string" , () => ({
    __esModule: true,
    default: {
        parse :jest.fn(),
        stringify: jest.fn()
    }
}))