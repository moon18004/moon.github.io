// function templeData() {
    
    // const templeJSON = 'https://moon18004.github.io/moon.github.io/assignments/lesson13/scripts/temples.json';
    // fetch(templeJSON)
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
                
                
            // 208
            
            // getTempleData(0, "San-diego");
            // getTempleData(1, "Sapporo");
            // getTempleData(2, "korea");
            // getTempleData(3, "dallas");

            //const addressArr = templeObject.address.split(", ");
            let address = templeObject.address1;
            // for (a = 0; a < addressArr.length; a++){
            //     address += "<p>"+ addressArr[a] +"</p>";
            // }
            console.log(address);

            let phoneLink = '<a href="tel:'+ templeObject.phone +'">'+ templeObject.phone + '</a>';

            //let service = "<p>" + templeObject.service.rental + "</p><p>" + templeObject.service.cafeteria + "</p><p>" + templeObject.service.housing + "</p><p>" + templeObject.service.discCenter + "</p>";
            let services = templeObject.services;    
            
            // const ordinancesObject= templeObject.closures;

            // function defineOrdinance (ordinanceArr){
            //     let ordinanceObj = "";
            //     for (b = 0; b < ordinanceArr.length; b++){
            //         ordinanceObj += "<li>" + ordinanceArr[b] + "</li>";
            //     }
            //     return ordinanceObj;
            // };

            // const baptism = defineOrdinance(ordinancesObject.baptism);

            // const endownment = defineOrdinance(ordinancesObject.endownment);

            // const sealing = defineOrdinance(ordinancesObject.sealing);

            
            
            
            // for (c = 0; c < templeObject[i].schedule.templeClosures.length; c++){
            //     templeClosure += "<li>" + templeObject[i].schedule.templeClosures[c] + "</li>";
            // }

            const announced = templeObject.Summary.facts;
            
            // const dedicated = '<p><strong>Dedicated:</strong> ' + templeObject.history.dedicated + '</p>';
            // const groundBreaking = '<p><strong>Ground Breaking:</strong> ' + templeObject.history.groundbreaking + '</p>';

            // if(templeObject.history.rededicated !== undefined){
            //     let rededicated ="";
            //     const rededicatedArrLength = templeObject.history.rededicated.length;
            //     for(r = 0; r < rededicatedArrLength; r++){
            //         rededicated += '<p><strong>Rededicated:</strong> ' + templeObject.history.rededicated[r] + '</p>';
            //     }
            //     const history = announced + groundBreaking + dedicated + rededicated;
            //     document.querySelector("." + templeName + "-history").innerHTML = history;

            // } else {
            //     const history = announced + groundBreaking + dedicated;
            //     document.querySelector("." + templeName + "-history").innerHTML = history;

            // }                
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
    
// };

// templeData();
