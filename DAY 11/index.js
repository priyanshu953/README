const data = [
    {
        "name" : {
        "common" : "South Georgia",
        "official" : "South Georgia and the South Sandwich Island",
        "nativeName" : {
            "eng" : {
                "official" : "South Georgia and the south Sandwich Islands",

            }
        }
        },
        "tld" : [
            ".gs"
        ],
        "cca2":"GS",
        
        "ccn3":"239",
    }
]

const url = " https://restcountries.com/v3.1/all ";
async function fetchDat() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        for (let i = 0; i = data.length; i++) {
            const value = data[1];
            const html =
            <div class='card'>
                <h3>
                    $(value?.name?.common)
                </h3>
            </div>
        }

    } catch (error) {
        console.log("----error----:",error.message);
    }
}
