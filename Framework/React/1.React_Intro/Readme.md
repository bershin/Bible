### Where do I write React
- Online
    - [Codesandbox.io](https://codesandbox.io/)
- Local
    - VSCode
        - Install the tool to create react project `npm install -g create-react-app`
        - Create boiler plate for react `create-react-app my-app`
            - Use the local installed npm.
        - Latest is to use `npx create-react-app my-app`
            - Current version from internet is downloaded.
        - Start react app `cd my-app; npm start`
- Run github react project
    - Clone the repo and navigate inside it
    - Install all package from package.json and populate in node_modules `npm install`
    - Start the project `npm start`
- Host React in Vercel
    - Login with github credentials in https://vercel.com
    - "import git repository"if not done(click "install" button)
    - Click the "import" button in "perfumy-react" project and deploy
### React Dependencies
React dependencies are external libraries managed with npm.
- React -> Library for building UI component.
- React DOM -> "Render"/Display them on the web.
- React Script -> Provides tools for managing and "running" React application.

### React Tasks
- Output simple text in UI
- Style
    - inline `style={{object}}`
    - internal `style={styleObjectName}`
    - External `import ./style.css`
- Functions as components

- Import and export
    - export default firstName
        - import frontname as "./filename" (Can have any name)
    - ❌ Have two default will confuse `export default firstName; export default secondName`
        - Both has same result `import firstName as "./filename";import secondName as "./filename"`
    - export default firstName; export {firstName, secondName}
        - import anyName as "./filename";
        - import {firstName, secondName} as "./filename"; 
- React Structure
    - public/index.html
    - src/assets/images/*.img
    - src/components/*.js
    - src/App.js (import all components, and include in div)
    - src/index.js (import and render App.js)
- Fragments
    - `<div></div>` can be written as `<></>`