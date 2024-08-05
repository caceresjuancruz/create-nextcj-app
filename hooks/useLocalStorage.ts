export const useLocalStorage = (key: string) => {
    const get = () => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }
    
    const set = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const remove = () => {
        localStorage.removeItem(key)
    }

    return { get, set, remove }
}