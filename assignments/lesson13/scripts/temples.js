
    temples = [103, 198, 109, 108];
    temples.forEach((templeid) =>{
        fetch(`https://nathan-byui-api.herokuapp.com/temples/${templeid}`, {
            headers: {
                apiKey:
                    'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N',
            },
        })
            .then((response) => response.json())
            .then((templeObject) => {
                console.log(templeObject);
                
                
            
            let address = templeObject.address1;
           
            console.log(address);

            let phoneLink = '<a href="tel:'+ templeObject.phone +'">'+ templeObject.phone + '</a>';

            
            let services = templeObject.services;    
            
            

            const announced = templeObject.Summary.facts;
                   
            let templeNames = templeObject.name.split(' ');
            let templeName = templeNames[0];
            console.log(templeName);
            
            
            document.querySelector("." + templeName + "-address").innerHTML = address;
            //console.log("." + templeObject.temple_name + "-address");
            document.querySelector("." + templeName + "-phone").innerHTML = phoneLink;
            
            services.forEach((service)=>{
                let s = document.createElement('p');
                s.textContent = service;

                document.querySelector("." + templeName + "-service").appendChild(s);
            })

            for (const key of Object.keys(templeObject.closures)){
                templeObject.closures[key].forEach((closure)=>{
                    let p = document.createElement('p');
                    p.textContent = 'Startdate: ' + closure.startdate + ' - ' + 'Enddate: ' + closure.enddate;

                    document.querySelector("." + templeName + "-closure").appendChild(p);
                })
            }
            
            document.querySelector("." + templeName + "-history").innerHTML = announced;
            
                
        });
    })
    
