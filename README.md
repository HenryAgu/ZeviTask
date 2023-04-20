# Zevi

A simple website that i used to practice some UI and functionality task too. I learnt how to implement the like function like that of Instagram and also using the css "sticky" position.

# Screenshots


# Built with
- reactjs
- scss
- flexbox and grid
- react-router-dom

## What I Learnt on the project

    I learnt that it is possible to map inside an already mapped element

```js
  const handleLike = (id) =>{
      // console.log(id)
      setResults(
         results.map((item) => {
          if(item.id === id){
           return {...item, liked: !item.liked}
          }
          return item
       })
      )
      
  }
```

## Author

- Twitter - [@\_henryi](https://www.twitter.com/_henryi)
- LinkedIn - [Henry Agu](https://www.linkedin.com/in/agu-henry-871a981b0)
