### What is typescript?
- Superset to javaScript.
- Program written above javascript.
- Write less error prone & clean code easier.
- Browser & nodejs Cannot execute typescript directly.
- TypeScript is a powerful compiler/tool runs on TS to convert into JS.

### Advantages of TypeScript:
- Types
    - Be explicit about how things work. Avoid unnecessary errors, by using types.
    - Use mordern IDEs has buildin type support, autocompletion and show errors before compiling. because they understand typescript.
- Next-gen JavaScript Features
    - Typescript used to convert to vanilla javascript.
- Non-JavaScript features like interfaces or Generics
- Meta-Programming features like Decorators
- Rich configuration options
- Mordern tooling(IDE) that helps even in non-typescript projects.

### Extention for VSCode
- ESLint (Code quality check)
- Path Intellisense (Useful for import)
- Material Icon Theme (Visual)
- Prettier - Code formatter (Used for format, indentation, semicolon)

### Install TypeScript
```
$ npm install -g typescript
```
Note: Install nodejs to get npm, which used to install typescript.

### Start a project
- Create index.html
- Create app.ts
- link app.ts with index.html
```
<script src="./using-ts.js" defer></script>
```
### Why use defer?
- The browser downloads the script in parallel with HTML parsing.
- Executes it only after the entire document is parsed.
- Helps improve performance and page speed.

### Manually run and see changes from typescript file.
- run to convert typescript to javaScript `$ tsc app.ts`
- Add the javaScript to index.html
- Refresh the html page

### Automatically reload page for every changes in typescript file.
- Create a package.json file `npm init` - For npm you need node to be installed.
- Install lite server `npm install --save-dev lite-server`
- Update package.json with start.
```
    "scripts":{
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
    }
```
- Start the lite server `npm start`
- Open browser in the given port.

### How do you start using other Typescript project from "github"
- Usually projects remove "node_modules" before uploading in github.
- Run `npm install` to install all package from "package.json" file
- Use `npm start` to start the server