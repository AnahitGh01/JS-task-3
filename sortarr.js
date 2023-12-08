let mstr = ["Armenia", "I", "from", "am"]; 
    
    for (let i = 0; i < mstr.length; i++) {                     // Loop through each element in the string
        
        for (let j = i + 1; j < mstr.length; j++) {           // Compare the current element with the subsequent elements
          
            if (mstr[i].length > mstr[j].length) {          // If the length of the current element is greater than the subsequent element
                let tmp = mstr[i];                         // Store the current element in a temporary variable
                mstr[i] = mstr[j];                        // Swap the current element with the subsequent element
                mstr[j] = tmp;                           // Place the temporary variable (previous value of current element) in the subsequent element
            }
        }
    }
    
console.log(mstr.join(" "))
