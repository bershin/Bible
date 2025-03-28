## Flexbox is a layout model in CSS.
1. Flex Container - div (To align flex item set "display" property in container)
2. Flex items - h1
- Default "flex-direction" is row. Thats why items sits side by side.
    - Main axis - column by default, changed by setting "flex-direction"
    - cross axis - row by default, opposite to flex-direction
### Flex set in "flex-container"
1. gap - space between flex item
2. wrap - Adjust the item to the container width.
3. Justify Content - Always works with main axis.
    - Center - Item move 
    - space-around - equal (360)
    - space-between - go to corner
    - space-evenly ->
    - flex-end - move to end
    - flex-start -default
4. Align items - Always works with cross axis.
    - Center
### Flex set in "flex-item"
1. Flex grow (ratio)
    - Take all space
    - Use wrap to scroll
2. Flex basis - Initial width
    - Use "flex-basis" instead of "width"
    - Use % for fixed column