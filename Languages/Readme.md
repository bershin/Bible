## Github 
### Authenticate using SSH
```
% ssh-keygen -t ed25519 -C "bershin@gmail.com"
% cat ~/.ssh/id_ed25519.pub
```
Add the public key to https://github.com/settings/keys by "New SSH key"
Now clone:
```
% git clone git@github.com:bershin/Bible.git
```
Configure
```
% git config --global user.name "Bershin John" 
% git config --global user.email "bershin@gmail.com"
```
## Install VScode

## JavaScript
### Install Nodejs
- Download and install binary: "https://nodejs.org/en/download"
- Check installed version `node -v`

## GOLANG
### Installing GO in Mac
- Download and install biary: "https://go.dev/"
- Check installed version `go version`

### Features of Go( Why GO? )
- Strictly typed
    - Can use "duck typing" like other scripting language.
    - `name := "john"`
- Run code with one command `go run main.go`
    - Other scripting language interprets line by line.
    - Go compiles in temp location and executes.
- Convert to binary `go build -o app main.go`
    - Very fast compare to other programming language.
- Cross compile capability`env GOOS=windows GOARCH=amd64 go build -o app.exe main.go`
    - Build binaries for different opearting system. Build windows exe for Mac. 
- Mature module system