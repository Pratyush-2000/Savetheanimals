var reasons =[
    "Animals give food to us",
    "Animals are a important part in the ecosystem",
    "They also eat dead plants and animals to keep the place clean",
      "Pet animals keep their masters safe",
    "If animals are well treated they will be friendly to us"  ,
    ];
    var count=0;
    document.getElementById('reasontext').innerHTML=reasons[count];
    function nextslide()
    {
    //  console.log(count);
     if(count<reasons.length-1) 
        {   
            count=count+1;
            document.getElementById('reasontext').innerHTML=reasons[count];
            console.log(count);
        }
    //  else
    //   {
    //    count=0;
    //    document.getElementById('reasontext').innerHTML=reasons[count]; 
    //    console.log(count);
    //   }
    }

    function prevslide()
    {
        // if(count==0)
        // {   
        //     count=reasons.length-1;
        //     document.getElementById('reasontext').innerHTML=reasons[count];
        //     console.log(count); 
        // }
        if(count>0)
        {
            count=count-1;
            document.getElementById('reasontext').innerHTML=reasons[count]; 
            console.log(count);

        }
    }