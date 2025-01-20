function convert() {
    // Get the values from the input fields
    let getnum = document.getElementById("getnum").value;
    let cfrist = document.getElementById("cfrist").value;
    let csecand = document.getElementById("csecand").value;

    let result=0 ;
    // Convert the amount to a number
   
  
    // Define the conversion factors for each unit
    let bitsPerBits = 1;
    let bitsPerBytes = 8;
    let bitsPerKilobytes = 8192;
    let bitsPerMegabytes = 8388608;
    let bitsPerGigabytes = 8589934592;
  
    // Convert the amount from the source unit to bits
    
    if (cfrist == "bits") {
      result = getnum * bitsPerBits;
    } else if (cfrist == "Bytes") {
      result = getnum * bitsPerBytes;
    } else if (cfrist == "Kilobytes") {
      result = getnum * bitsPerKilobytes;
    }else if (cfrist == "megabytes") {
      result = getnum * bitsPerMegabytes;
    }else if (cfrist == "Gigabytes") {
      result = getnum * bitsPerGigabytes;
    }
  
    // Convert the bits to the target unit
    
    if (csecand == "bits") {
      result = result / bitsPerBits;
    } else if (csecand == "Bytes") {
      result = result / bitsPerBytes;
    } else if (csecand == "Kilobytes") {
      result = result / bitsPerKilobytes;
    }else if (csecand == "megabytes") {
      result = result / bitsPerMegabytes;
    }else if (csecand == "Gigabytes") {
      result = result / bitsPerGigabytes;
    }
  
    // Display the result on the web page
    document.getElementById("result").innerHTML=result;

    // Send the data to the server
  fetch(`save.php?from=${cfrist}&to=${csecand}&value=${getnum}&result=${result}`);
    
  }