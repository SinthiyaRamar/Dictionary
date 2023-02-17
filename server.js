const express=require('express');
const port=5010;
const app=express();
// const path=
app.set("view engine","ejs");
app.use(express.static("public"));
// app.set('views', path.join(__dirname, 'views'));

// let url="https://api.dictionaryapi.dev/api/v2/entries/en/hello";
//     fetch(url)
//     .then((res)=>{
//         // console.log(res.json())

//         return res.json();
//     })
//     .then((data)=>{
//        console.log(data)
//        return data[0];
//     })
//     .then((dataValue)=>{
//         let word=dataValue.word;
//         let phonetics=dataValue.phonetics[1];
//         let audioUrl=phonetics.audio;
//         let wordText=phonetics.text;
//         let meanings=dataValue.meanings;
//         let sourceUrls=dataValue.sourceUrls;
        
//         console.log(word)
//         console.log(phonetics)
//         console.log(audioUrl)
//         console.log(wordText)
//         console.log(meanings)
//         console.log(sourceUrls)
        
//     })












app.get('/index',(req,res)=>{
    res.render("index")
})

app.get('/Dictionary?:wordName',(req,res)=>{
     let wordinput=req.query.wordName;
     console.log(wordinput)
    //  console.log(req)



let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${wordinput}`;
fetch(url)
.then((res)=>{
    // console.log(res.json())

    return res.json();
})
.then((data)=>{
   console.log(data)
   return data[0];
})
.then((dataValue)=>{
    console.log(dataValue)
    let WordName=dataValue.word;
    let phonetic=dataValue.phonetic;
    let phonetics=dataValue.phonetics;
     let meanings=dataValue.meanings;
     let sourceurl=dataValue.sourceUrls;
    //  let audio=phonetics[0].audio;
    console.log(WordName)
    console.log(phonetic)
     console.log(meanings)
     console.log(phonetics)
   res.render("Dictionary",{WordName,phonetic,meanings,phonetics,sourceurl})
    
})
.catch((err)=>{
    console.log(err.message)
    res.render("error")
})

})
app.listen(port,()=>console.log("Listening :",port))