var input=prompt("enter a string");
console.log("input string  : "+ input);
var input_wo_sp=input.replace(/\s/g,'');
var len=input_wo_sp.length;
var indices = [];

for (var i=0;i<=input.length; i++)
{
if(input[i] === " ")
indices.push(i);
}
 
var indices1=[]; //storing space indexes in array
indices1[0]=indices[0]
for(j=1;j<indices.length;j++)
            {
      indices1.push(indices[j]-j);
    } 
	

var rows=Math.floor(Math.sqrt(len));
var cols=Math.ceil(Math.sqrt(len));
//console.log(rows,cols); //rows and columns of grid format


var input_to_arr=[]; //storing input in array and converting to blocks of strings
input_to_arr=input_wo_sp.split("");
var arr_to_blocks=[]; 
while(input_to_arr.length>0)
{
arr_to_blocks.push(input_to_arr.splice(0,cols));
}
//console.log(arr_to_blocks);
 
var grid=[]; //inserting in to strings
for (i=0;i<cols;i++)
{
      for(j=0;j<rows;j++)
      {
        if(arr_to_blocks[j][i] == undefined)
           grid.push(" ");
        else
        grid.push(arr_to_blocks[j][i]);
      }
            grid.push(" ");
     
      
    }
	
var encode_to_arr = grid.toString();
//console.log(encode_to_arr);
var encode_to_str=encode_to_arr.replace(/,/g,"");
var indices2=indices1.toString();
console.log("Encoded message: "+encode_to_str +" numsp "+ indices2.replace(/,/g," "));
 
var decode_input_len=encode_to_str.length;
//console.log(decode_input_len);
//rows and columns for decode string
var rows1=Math.floor(Math.sqrt(decode_input_len));
var cols1=Math.ceil(Math.sqrt(decode_input_len));
//console.log(rows1,cols1);
var decode_input_arr=encode_to_str.split("");
var decode_input_blocks=[];
while(decode_input_arr.length>0)
{
 decode_input_blocks.push(decode_input_arr.splice(0,cols1)); 
}
//console.log(decode_input_blocks);
var decode_arr=[];
for(m=0;m<=cols1;m++)
{
  for(n=0;n<rows1;n++)
  {
    decode_arr.push(decode_input_blocks[n][m]);
  }
}
//console.log(decode_arr);

var decode_str=decode_arr.toString();
//console.log(decode_str);
var decoded_string=decode_str.replace(/,/g,'');
//console.log(decoded_string);

for(var p=indices1.length-1;p>=0;p--)
{
  decoded_string=decoded_string.slice(0,indices1[p])+" "+decoded_string.slice(indices1[p]);
  
}


console.log("Decoded message: "+decoded_string);
