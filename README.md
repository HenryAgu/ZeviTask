# Zevi

A simple website that i used to practice some UI and functionality task too. I learnt how to implement the like function like that of Instagram and also using the css "sticky" position.

# Screenshots
![zevi](https://user-images.githubusercontent.com/74037448/233491107-e710cef4-ea63-4830-8ddc-91ac8b3bed93.PNG)
![zevi1](https://user-images.githubusercontent.com/74037448/233491125-a09b7d56-776d-451f-9c8f-6195f12f9593.PNG)
![zevi2](https://user-images.githubusercontent.com/74037448/233491136-751a3b05-88e6-44aa-bbfd-b84c0b24be9f.PNG)


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
