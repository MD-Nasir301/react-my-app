





  // const products = [
  //   {name:"Photoshop", prize:"$200"},
  //   {name:"Illustator", prize:"$330"},
  //   {name:"Premium Pro", prize:"$650"},
  // ]


  // const a =  products.map(pd => pd)
  // console.log(a);


function add (){
    let ab = [1,2,3,4,5,6,7,8,9,1,3,55,6,7,8,92,]
    let ac = [];
  for (var i=0; i<ab.length; i++){
    var ele = ab[i];

    if (ac.indexOf(ele)===-1){

        ac.push(ele)
    }
      

  }
 ac.sort();
  return (ac[1]+ac[2])

}
console.log(add())










