import *as fs from 'fs'
import puppeteer from "puppeteer"
const main =  async () => {
    const browser= await puppeteer.launch({
        headless:false,
        defaultViewport:{
            height:1080,
            width:1000
        }
    })

    const page= await browser.newPage()
    await page.goto('https://www.ikea.com/in/en/')
    await page.type('#ikea-search-input','table')
    await page.keyboard.press('Enter')
    await page.waitForNavigation()
    await page.screenshot({path:'test.png',fullPage:true})

    // const jsonData=await page.evaluate(()=> {
    //     let mindata=[]
    //     for(let i=0;i<10;i++){  
    //         const selector=`#product-list > div.plp-product-list__products > div:nth-child(${i+1}) > div > div.plp-mastercard__item.plp-mastercard__image > a > img`
    //         const selector2=`#product-list > div.plp-product-list__products > div:nth-child(${i+1}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__information > h3 > span.plp-price-module__name-decorator > span`
    //         const selector3=`#product-list > div.plp-product-list__products > div:nth-child(${i+1}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__price > div > span > span:nth-child(1) > span > span.plp-price__integer`
    //         const selector4=`#product-list > div.plp-product-list__products > div:nth-child(${i+1}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__information > h3 > span.plp-price-module__description`
    //         const image=document.querySelector(selector)
    //         const title=document.querySelector(selector2)
    //         const price=document.querySelector(selector3)
    //         const description=document.querySelector(selector4)

            

    //         mindata[i]={
    //             itemName:title.innerText==null?'':title.innerText,
    //             itemImage:image.innerText==null?'':image.src,
    //             itemPrice:price.innerText==null?'':price.innerText,
    //             itemDescription:description.innerText==null?'':description.innerText
    //         }
           
    //         // mindata.push({
             
    //         //         itemName:title.innerText==null?'':title.innerText,
    //         //         itemImage:image.innerText==null?'':image.src,
    //         //         itemPrice:price.innerText==null?'':price.innerText,
    //         //         itemDescription:description.innerText==null?'':description.innerText
              
    //         // })
    //     }

    //     return mindata

    // })
    const jsonData = await page.evaluate(() => {
        let mindata = [];
        for (let i = 1; i <= 10; i++) {
            const selector = `#product-list > div.plp-product-list__products > div:nth-child(${i}) > div > div.plp-mastercard__item.plp-mastercard__image > a > img`;
            const selector2 = `#product-list > div.plp-product-list__products > div:nth-child(${i}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__information > h3 > span.plp-price-module__name-decorator > span`;
            const selector3 = `#product-list > div.plp-product-list__products > div:nth-child(${i}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__price > div > span > span:nth-child(1) > span > span.plp-price__integer`;
            const selector4 = `#product-list > div.plp-product-list__products > div:nth-child(${i}) > div > div.plp-mastercard__item.plp-mastercard__price > a > div > div.plp-price-module__information > h3 > span.plp-price-module__description`;
            const image = document.querySelector(selector);
            const title = document.querySelector(selector2);
            const price = document.querySelector(selector3);
            const description = document.querySelector(selector4);
    
            mindata.push({
                itemName: title ? (title.innerText || '') : '',
                itemImage: image ? (image.src || '') : '',
                itemPrice: price ? (price.innerText || '') : '',
                itemDescription: description ? (description.innerText || '') : ''
            });
        }
    
        return mindata;
    });
    
   
    const filepath='output1.json'
    const remove = jsonData.filter(item => Object.values(item).some(value => value !== ''));
    const jsonString=JSON.stringify(remove,null,2)
    fs.writeFileSync(filepath,jsonString)
    console.log(jsonData)


}

main()