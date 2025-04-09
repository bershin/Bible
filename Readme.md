# Authenticate using SSH
```
% ssh-keygen -t ed25519 -C "bershin@gmail.com"
% cat ~/.ssh/id_ed25519.pub
```
Add the public key to https://github.com/settings/keys by "New SSH key"

Switch between keys:
```
ssh-add -K ~/.ssh/github-personal
```
Now clone:
```
% git clone git@github.com:bershin/Bible.git
```
Configure
```
% git config --global user.name "Bershin John" 
% git config --global user.email "bershin@gmail.com"
% git config --global --list
```
Keep the email secure in github
Add key as authenticaton and signing 

```
mkdir testrepo && cd testrepo
git init && ls -l .git
rm -rf .git 
git config --global init.defaultBranch main -> Change master branch to main branch
git init
git branch -m root -> Rename branch
git status
git add . / git add <file_name> -> Git start tracking the file by moving the file to staging area.
git commit -m "comment" -> 
git log 
git remote add origin git@github.com:bjohn/testrepo.git -> Giving the hyperlink a aliase name origin
git remote -v
git push -u origin root
## Consicutive push
git push
```


# Github Readme Mark down - Cheat Sheet
# -> Heading 1
## -> Heading 2
### -> Heading 3
#### -> Heading 4
##### -> Heading 5
###### -> Subheading
Bold:  
**Bold**

Italic:  
*italic*

Block Quote
> This is block quote  
> For you to note

Number list:
1. pencil
2. pen
3. rubber

UnOrdered List:
- pencil
- pen
- rubber

Code:  
`console.log("Hello world)`

Horizontal line:
---
Link:  
[Google](https://www.google.com)  
Image:  
![Random Image](https://picsum.photos/200/200)  
or  
<img align="right" width="200" width="200" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2VibGx0b3JtdjQ2ODBjN2xxOXBsMG9zZmV0OGk1eXc5cGZ1ZDU0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xJLNafkD7RGsE/giphy.gif">  

Table:  
| Column 1 | Column 2 |
| -------- | -------- |
| Bershin  | John     |
| Shea     | Michelle |

Code:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
Strike:  
~~100~~ 50 

Todo task:
- [x] Do homework
- [ ] Study English

Emojis:   
✅ ( Use directly )

Highlight:  
My name is ==John Bershin==  
or)  
My name is <mark>John Bershin</mark>

Subscript:  
H~2~O  
or)  
H<sub>2</sub>O

Superscript:  
2^3^  
or)  
2<sup>3</sup>


Badges:
https://dev.to/envoy_/150-badges-for-github-pnk  
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">

https://shields.io/  
https://shields.io/badges/you-tube-channel-views    
<img src="https://img.shields.io/youtube/channel/views/UC9xghV-TcBwGvK-aEMhpt5w">

https://icons8.com/icons/set/python  
<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/python.png" alt="python"/>

https://leetcard.jacoblin.cool/
![LeetCode Stats](https://leetcard.jacoblin.cool/dphSS9vh3p?theme=light&font=Anek%20Tamil&ext=activity)

https://github.com/anuraghazra/github-readme-stats

https://ashutosh00710.github.io/github-readme-activity-graph/
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=bershin&bg_color=010101&color=9e4c98&line=98dd5f&point=f9f6f6&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)