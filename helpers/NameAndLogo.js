 class NameAndLogo{

    returnNameAndLogo(partyName){
      console.log(partyName)
        switch(partyName){
            
            case ("likud") : {
                let nameAndLogo = {
                    "name" : "הליכוד",
                    "logo" : require("../assets/likud_logo.jpg")
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("avoda") : {
                let nameAndLogo = {
                    "name" : "העבודה",
                    "logo" : require("../assets/haavoda.jpg")
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("kahol-lavan") : {
                let nameAndLogo = {
                    "name" : "כחול לבן",
                    "logo" : require("../assets/gantz-lapid.png")
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("merez") : {
                let nameAndLogo = {
                    "name" : "מרצ",
                    "logo" : require("../assets/meretz2019.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("kulanu") : {
                let nameAndLogo = {
                    "name" : "כולנו",
                    "logo" : "../assets/kulanu-kahlonim.jpg"
                }
                return nameAndLogo;
                break;
            }
            case ("yamin-hadash") : {
                let nameAndLogo = {
                    "name" : "הימין החדש",
                    "logo" : require("../assets/yamin.png")
                }
                return nameAndLogo;
                break;
            }
            case ("israel-beitenu") : {
                let nameAndLogo = {
                    "name" : "ישראל ביתנו",
                    "logo" : require("../assets/beytenu.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("shas") : {
                let nameAndLogo = {
                    "name" : 'ש"ס',
                    "logo" : require("../assets/ss.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("yahadut-hatora") : {
                let nameAndLogo = {
                    "name" : "יהדות התורה",
                    "logo" : require("../assets/united-torah-judaism.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("raam-taal") : {
                let nameAndLogo = {
                    "name" : "רעם תעל",
                    "logo" : require("../assets/tal.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("balad") : {
                let nameAndLogo = {
                    "name" : "בלד",
                    "logo" : require("../assets/balad.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("zehut") : {
                let nameAndLogo = {
                    "name" : "זהות",
                    "logo" : require("../assets/zehut.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("gesher") : {
                let nameAndLogo = {
                    "name" : "גשר",
                    "logo" :require( "../assets/gesherparty.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("ihud-miflagot-hayamin") : {
                let nameAndLogo = {
                    "name" : "איחוד מפלגות הימין",
                    "logo" : require("../assets/newyaminparty.jpg")
                }
                return nameAndLogo;
                break;
            }
            case ("magen") : {
                let nameAndLogo = {
                    "name" : "מגן",
                    "logo" : require("../assets/magenparty.jpg")
                }
                return nameAndLogo;
                break;
            }

        }
    }
} 
 const nameAndLogo = new NameAndLogo()
 export default nameAndLogo;