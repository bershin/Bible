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
- """ Write comment here """  */ -> Multipline comment
### Print
print("Hello World")
### Create a environment in a project
`mkdir project1; cd project1`  
`conda create -p venv --python==3.12`  
`conda env list`  
`conda activate venv/`  
`pip install pandas`  
```
vi requirements.txt
pandas==2.1.0
numpy
:wq
```
`pip install -r requirements.txt`  
`vi basics.ipynb`

> Note: `conda create -n venv --python==3.12` -> Create in default folder where anaconda is installed

### Create and execute code in ipynb file
Its for experimental purpose only.  
> Note: For production use .py file.

Open "basic.ipynb" file
Click "Select Kernel" -> Select "Python environment" -> Choose the environment in the project.

1. Markdown
2. Code
`
Shift + Enter -> execute code  

> Install package using jupyter notebook in code -> `!pip install ipykernel`