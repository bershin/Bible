### What is React?
React.js is a JavaScript libray for building efficient, interactive user "interfaces" using a component based approach.
- Simplify UI development using Component Based archietecture.
- Component means create once and reuse several times.
- Fast, readable & Scalable. Thats why ised for large application.
### Features of ReactJs
- Automatic rerendering
    - Not all the entire page reload while scrolling.
    - Facebook/Instagram re-rendering only bottom page instead of entire page.
- Virtual DOM
    - Normally any small change in webpage, create the entire DOM in html hierarchy.
    - VDOM - Light weight Blueprint (copy) of the actual webpage stored in memory.
    - This VDOM updated the necessary changes to the real webpage boosting performance.
- JSX (Java Script XML)
    - React code is written in JSX.
    - HTML like syntax code written directly in JS file. `root.render(<p>Hello</p>)`
    - Normally html element are created using `CreateElement` then append it to another element.
- Babel (Compiler)
    - Usually Browser don;t understand JSX code, So Babel converts them for browser to understand.
    - Tool used to convert JSX code with latest feature into a older version of combatable for various version.
### Where do I write React
- Online
    - [Codesandbox.io](https://codesandbox.io/)
- Local
    - VSCode
### React Dependencies
React dependencies are external libraries managed with npm.
- React -> Library for building UI component.
- React DOM -> "Render"/Display them on the web.
- React Script -> Provides tools for managing and "running" React application.