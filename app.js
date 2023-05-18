const resultElement = document.getElementById('result');

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json) => {

                // TODO: change to use a for loop (extra: change to use a for... of loop)
                json.forEach(item => {
                    const img = item.image
                    const price = item.price
                    // crate html element
                    const imgElem = document.createElement('img')
                    const priceElem = document.createElement('p')
                    // add some text to it based on the data

                    imgElem.src = img
                    imgElem.width = '100'
                    imgElem.height = '100'
                    const node = document.createTextNode(`Price: $${price.toFixed(2)}`);
                    priceElem.appendChild(node);

                    
                    // append it to the resultElement
                    resultElement.appendChild(imgElem)
                    resultElement.appendChild(priceElem)
                    
                });


            })

