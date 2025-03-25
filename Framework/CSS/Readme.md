### What is CSS?
Used to style and format webpages created by HTML

### Comment
/* 
comment 
*/

## 3 ways to add css to html document
### inline
<h1 style="color: red;background-color: blue;">Bershin John</h1>
- Words are seperated by hypens
- key value seperated by colon
- lines are seperated by semicolon

### internal
<style>
    h1{
        color: red;
        background-color: blue;
    }
</style>
<h1>Bershin John</h1>

### external
<link rel="stylesheet" href="style.css">

## Basic style
### Font Size
- font-size
    - Default font size of a browser - 16px
    - Change deault font size = Change in body
### Font Family
- font-family
    - If font is not found in your browser use the next font in comma.
    - Use google fonts instead of default font(poppins)
### Font Weight
- font-weight  
    - 100-500,600-900, lighter, bolder
### Color and background color
- color ->  is defined for text 
- background-color -> is defined for element
    - transparent -> applied parent color.
### Width & Height
- Set height & width for an element. 
    - Text fold as per the element size until its bigger or equal.
- Usually for div
- width: 10px (or) 100%
### Text Alignment
- text-align -> aligns the text not the element. right, left, center (Visualize by setting background color)
    - applies to inline and inline-block elements inside the block container.
    - Even though <h2> and <p> are block elements, their text content is inline inside them.
    - Another way
        - width: fit-content; margin: 0 auto;
### Vertical align
- vertical-align -> Align the container 
    - top;
### Text Decoration
- text-decoration
    - line-through, none
### List Style
- list-style
    - none
## CSS Selectors
1. Element/type/tag Selector
    - <a class="one> -> a{}
2. Class Selector
    - <a class="one> -> .one{}
3. id selector: Can have one for a webpage
    - <a id="one> -> #one{}
    > Used more in javascript
4. Attribure selector
    - input[type="text"]
5. Pseudo Selector
    - button:hover
    - input:focus -> ouline(same as border)
6. Universal selector
    - *

## CSS Box Model
Every Element(h1,div, body) has below
- padding -> top/right/bottom/left (padding-left: 5px / padding: 5px)
    - space between content and border 
- margin -> top/right/bottom/left  (margin-left: 5px / margin: 5px)
    - Space between border to other element
- border -> (border-color/width/style:) / (border: red 2px solid)
    - Defines the element
- Content - Text that the element has.

## Display Property Types
- Inline -> span
    - Element wrap to the text width.
    - Cannot set height and width.
    - sit along with inline or inline-block
- Inline-block -> button
    - Can set height & Width for the element.
    - sit along with inline or inline-block
- Block -> h1
    - Occupy 100% width 
    - Can set height and width but always sits in a seperate line
## BEM(Block, Element, Modifier) 
- Set of rules and Procises
1. Parent -> Block -> .card (Usually applied to a session)
2. Child -> Element -> .card__image,  .card__title, .card__desc, .card__button (Applies to element inside session)
3. Modifier -> .card__button--red (Add extra style to element)

## Specificity
same style - latest one take effect
- tag -> class -> id -> internal -> inline
- highest specificity -> color: red !important 

## Host portfolio in github
1. Create github repo (any name), Public, Add a README
2. Update Readme file
3. Upload the folder in github by "Add file" and commit changes(index.html is entry point)
4. Settings -> Pages -> Deploy from branch,  select main branch + save 
5. See the deployment completion in "Actions" and get the URL.


## Fonts
Font awesome-cdn -> https://cdnjs.com/libraries/font-awesome/6.4.2
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

Select icon from - https://fontawesome.com/icons

## Images
https://unsplash.com/ -> Select landscape / portrait