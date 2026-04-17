const express=require('express');

const app=express();

const books = [
  { id: 1, bookname: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, bookname: "Atomic Habits", author: "James Clear" },
  { id: 3, bookname: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 4, bookname: "Think and Grow Rich", author: "Napoleon Hill" },
  { id: 5, bookname: "The Power of Now", author: "Eckhart Tolle" },
  { id: 6, bookname: "Deep Work", author: "Cal Newport" },
  { id: 7, bookname: "Clean Code", author: "Robert C. Martin" },
  { id: 8, bookname: "You Don’t Know JS", author: "Kyle Simpson" },
  { id: 9, bookname: "The Pragmatic Programmer", author: "Andrew Hunt" },
  { id: 10, bookname: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { id: 11, bookname: "Zero to One", author: "Peter Thiel" },
  { id: 12, bookname: "Start With Why", author: "Simon Sinek" },
  { id: 13, bookname: "Ikigai", author: "Héctor García" },
  { id: 14, bookname: "Sapiens", author: "Yuval Noah Harari" },
  { id: 15, bookname: "The Lean Startup", author: "Eric Ries" }
];

app.listen(3000,()=>{
    console.log("App is listening on the port 3000");
})

app.get("/books",(req,res)=>{
    res.send(books);
    console.log("Data is sent to you");
    
})

app.get("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id);   // 🔥 yaha se id nikaal

    const data=books.find((book)=>{
        return book.id===id;
    })

    res.send(data);
});