const express = require('express')
const app = express()
const port = 3000



app.use(express.json())

let productsData =[
  
    {
       "id":1,
      "itemName": "LINNMON / ADILS",
      "itemImage": "https://www.ikea.com/in/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs",
      "itemPrice": "2,990",
      "itemDescription": "Table, 100x60 cm (39 3/8x23 5/8 \")"
    },
    {
        "id":2,
      "itemName": "TORALD",
      "itemImage": "https://www.ikea.com/in/en/images/products/torald-desk-white__1055403_pe847976_s5.jpg?f=xxs",
      "itemPrice": "",
      "itemDescription": "Desk, 65x40 cm (25 5/8x15 3/4 \")"
    },
    {
        "id":3,
      "itemName": "SANDSBERG",
      "itemImage": "https://www.ikea.com/in/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg?f=xxs",
      "itemPrice": "",
      "itemDescription": "Table, 110x67 cm (43 1/4x26 3/8 \")"
    },

    {
        "id":4,
      "itemName": "RIAN",
      "itemImage": "https://www.ikea.com/in/en/images/products/rian-side-table-white__0773142_pe756200_s5.jpg?f=xxs",
      "itemPrice": "",
      "itemDescription": "Side table, 50x30 cm (19 5/8x11 3/4 \")"
    },
    {
        "id":5,
      "itemName": "LAGKAPTEN / ALEX",
      "itemImage": "https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white-black-brown__0977484_pe813613_s5.jpg?f=xxs",
      "itemPrice": "9,990",
      "itemDescription": "Desk, 120x60 cm (47 1/4x23 5/8 \")"
    },
    {
        "id":6,
      "itemName": "LAGKAPTEN / ADILS",
      "itemImage": "https://www.ikea.com/in/en/images/products/lagkapten-adils-desk-white__0976080_pe812978_s5.jpg?f=xxs",
      "itemPrice": "4,490",
      "itemDescription": "Desk, 140x60 cm (55 1/8x23 5/8 \")"
    },
    {
        "id":7,
      "itemName": "LACK",
      "itemImage": "https://www.ikea.com/in/en/images/products/lack-coffee-table-black-brown__57540_pe163122_s5.jpg?f=xxs",
      "itemPrice": "2,690",
      "itemDescription": "Coffee table, 90x55 cm (35 3/8x21 5/8 \")"
    }


  ]



app.get('/products/', (_req, res) => {
  res.send(productsData)
})

app.get('/products/:id', (req, res) => {

    const product = parseInt(req.params.id);
    let start=false;

    for(let i=0;i<productsData.length ; i++){
        if (productsData[i].id === product)
        {
            res.send(productsData[i]);
            start=true;
            break;
        }
                 
    }


    if (!start){
        return res.status(404).send('No Product Found');
    }
  })

app.post('/products',(req,res)=>{

    const st=req.body;
    const id= Math.random()
    console.log(st);
    productsData.push({
        id,
        st
    });
    res.status(200).send("Product created")
})

app.delete('/products/:id',(req,res)=>{
    
    const product = parseInt(req.params.id);
    let start=false;
    let nta=[];

    for(let i=0;i<productsData.length ; i++){
        if (productsData[i].id != product)
        {
            nta.push(productsData[i]);
            start=true;
        }                
    }

    if (start) {
        productsData=nta;
        res.status(200).send("Item has been deleted")
    }
    
    if (!start){
        return res.status(404).send('No Product Found');
    }

})


app.put('/products/:id', (req, res) => {
  const newid = parseInt(req.params.id);
  const updatedItem = req.body;

  let index = productsData.findIndex((x) => x.id === newid);

  if (index === -1){
    return res.status(404).send('The ID does not exist');

  } 

  
  productsData[index] = { ...productsData[index], ...updatedItem };

  res.status(200).send("Item has been updated");
});

app.patch('/products/:id',(req,res)=>{
  const newid=parseInt(req.params.id);
  const {itemName,itemPrice,itemDescription}=req.body
  
  const item = productsData.find((x) => x.id === newid);

  if (itemName){
    item.itemName=itemName;
  }
  if (itemPrice){
    item.itemPrice=itemPrice;
  }
  if (itemDescription){
    item.itemDescription=itemDescription;
  }


  res.status(200).send("Item has been updated");
}
)

app.listen(port, () => {
  console.log(`hello ${port}`)
})