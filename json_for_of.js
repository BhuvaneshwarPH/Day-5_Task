let obj=[{
    "name": "John",
    "age": 30,
    "city": "New York",
    "languages": ["English", "Spanish", "French"],
  }]

  //for of loops

for(let arr of obj)
{
    for(let key in arr.languages)
    console.log(arr.languages[key])
}