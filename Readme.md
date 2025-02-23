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