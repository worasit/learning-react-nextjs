declare module '*.css' {
    const css: { [key: string]: string };
    export default css;
}


declare module '*.svg' {
    const ReactComponent: React.ReactComponentType<React.SVGAttributes<SVGElement>>;
    export default ReactComponent;
}
