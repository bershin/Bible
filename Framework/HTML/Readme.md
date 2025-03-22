## Introduction to web
### What is internet
Bunch of computer connected through a network. All the computer are connected through cables - https://www.submarinecablemap.com/
### What is www?
World Wide Web is a collection of web pages and related content.
### What is http?
Browser speaks to www through a language(protocol) called http(hypertext transfer protocol).
### What is url?
unified resource locator. uniquely identify the webpage from a collection.
### What is resource
In https://www.google.com. google.com is the resource name.
### What is html?
HyperText MarkupLanguage used to create webpages. Controls the structure and define the format of the text using tags.
First website "https://info.cern.ch/"
- Hypertext -> Link to another website.
- MarkupLanguage -> Define page structure and text format

## Editor
online 
- codepen.io
offline
- "notepad" with html extn
- "VSCode"
    - Settings
        - Autosave
    - Extentions

## Tags & attribute
- h1 to h6
    - Practise Heading
- Paragraph -> p
    - Paragraph filled with dummy text using "lorem hipsum" -> "lorem1000"
- anchor -> a
    - To achive hyperlink
    - Click the link to go to amazon.uk
    - Open in a seperate tab (target="_blank")
- image -> img
    - No closing tag
    - src 
        - online -> image(picsum photos)
        - Download
    - width & height
    - alt -> "Display if the image is wrong"
- List -> li
    - ul -> unordered list
    - ol -> ordered list
    - Roman letter -> <ol type="i">
- iframe
    - src 
        - Website inside website
        - youtube -> Restricted
- Practise using portfolio website

## Browser Developer Tools(Inspect)
- View page source to see the html format of web page.
- Click "Elements" in inspect to highlight in browser
- Change iphone prise to £1

## HTML Boilerplate
```
<!DOCTYPE html> -> Denotes html version, this is HTML 5
<html lang="en"> -> Support Language
- <head></head> -> Metadata about my website
    - <meta charset="UTF-8">
    - <meta name="viewport" content="width=device-width, initial-scale=1.0">
    - <title>Document</title> -> Shows in browser tab
- <body><body>
```
> inspect -> Element includes boiler plate , where as page source doesn't.   
> **Boiler needed for live server to refresh the oage.
## HTML Tables
table(border) -> tr -> td
- thead,tr,th, tbody,tr,td
- rowspan, colspan
## Forms
- label - id
- Input
    - type -> text, number, email, password, submit, reset
    - Select, option / textarea
    - click submit to direct to amazon webpage
    - submit vs reset