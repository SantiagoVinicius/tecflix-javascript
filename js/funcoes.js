let series = ["greys anatomy.jpg" , "Friends.jpg" , "how i.jpg" , "the good place.jpg" , "the one.jpg" , "lupin.jpg" , "stranger things.jpg"];
console.log(series);
console.log(series.length);

//let quantidadeSeries = 6;
//while(quantidadeSeries >= 0){
  //  console.log(series[quantidadeSeries]);
    //quantidadeSeries--;
//}


for(let i = 0; i < series.length; i++){
document.write("<img src='img/" + series[i] + "'>")
}

