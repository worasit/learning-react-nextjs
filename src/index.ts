export function log(message: string) {
    console.log(message);
}

class A {
    greeting: string = " Hello world!";
}


log(new A().greeting);
