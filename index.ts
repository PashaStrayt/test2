type GetProperty<T extends object, R extends keyof T> = T[R];

// type GetObjectType<T extends object> = keyof T 

// const someCalcsObject = (object: object) => {

// }

const object = { a: 0 } as const
const SomeObj = typeof object;
type SomePropery = GetProperty<, 'a' >