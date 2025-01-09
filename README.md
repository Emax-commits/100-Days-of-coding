# 𝐃𝐚𝐲 [1] 𝐨𝐟 #𝟏𝟎𝟎𝐃𝐚𝐲𝐬𝐎𝐟𝐂𝐨𝐝𝐞 - A TODO APP


This is a medium i get to showcase what i've learnt so far. with the 𝟏𝟎𝟎𝐃𝐚𝐲𝐬𝐎𝐟𝐂𝐨𝐝𝐞 i will be releasing different project and i want you all to watch out for it. My first project is a todoapp which has a functionality of
storing the listed things and will be deleted if the owner wishes. With time i will add some other functionality.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [HTML, CSS & Javascript](#built-with)
  - [During this process i learnt how to make use of localstorage to store data](#what-i-learned)
  - [Continued development](#continued-development)
- [Emax!-commits](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./screenshot/Todo desktop.png)
![](./screenshot/Todo mobile.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Unordered list
- linear-gradient

### What I learned

```js
 function updateLS(todel) {
    let list = document.querySelectorAll('li')

    const todos = []
    if(todel){
        localStorage.removeItem(list)
    }

    list.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            items: todoEl.classList.contains('items')
        })
    })
       
    localStorage.setItem('todos', JSON.stringify(todos))
}
```
```css
body{
    background: linear-gradient(45deg, rgb(76, 0, 255), transparent, rgb(76, 0, 255));
}
```

### Continued development

I will love to really focuse on creating a dynamic and reponsive websites, this will actually upskill my potentials and also get me expose to different technology in the web development Ecosystem.





## Author

-CodEmax!


## Acknowledgments

#100 DAYS OF CODING AND DESIGN


