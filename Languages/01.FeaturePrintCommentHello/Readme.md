## JavaScript
### Run Java Script
- Browser 
    - Console - Good for Single line
    - Source snippet - Good for big program
- VSCode
    - Create ".js" file and "src" that to ".html file as script.

### Comment
- // -> Single line comment
- /*  */ -> Multipline comment
### Print
console.log("Hello World")
console.warn("Hello World")
console.error("Hello World")

## NodeJS

## Python
### Run Python
- Online (No need any local binary install)
    - Browser (Downside: Code vanish when refreshed)
        - https://www.programiz.com/python-programming/online-compiler/
        - https://www.online-python.com/
        - https://replit.com/languages/python3
- Offline (Need local binary install)
    - In Terminal 
        - In python Shell - (Downside: Code vanish when refreshed)
        ```
        $ python
        >>> print("Hello World")
        >>> exit()
        ```
    - As File
        - Terminal - "Using file"
            ```
            $ vi hello.py
            print("Hello World")
            wq!
            $ python hello.py
            ```
        - Online and download note "https://www.editpad.org/"
            `$ python hello.py`
        - VSCode
            - Create ".py" file
            - $ python hello.py (or) Run directly in vscode.
    - Cloud
        - https://colab.research.google.com/
        - Connect
        - Change 
### Package
- Pre-install Package (bloatware)
    - Run inside python 
        - Use `>>> import os`
- Third party Package/libraries (Software/Application) - Appstore
    - Run outside python
        - Install `$ pip install pytest`
### Comment
- # -> Single line comment
- /*  */ -> Multipline comment
### Print
print("Hello World")