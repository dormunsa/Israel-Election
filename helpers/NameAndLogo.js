 class NameAndLogo{

    returnNameAndLogo(partyName){
      
        switch(partyName){
            
            case ("likud") : {
                let nameAndLogo = {
                    "name" : "הליכוד",
                    "logo" : "https://www.idi.org.il/media/5955/likud.jpg?mode=crop&width=259&height=169"
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("avoda") : {
                let nameAndLogo = {
                    "name" : "העבודה",
                    "logo" : "https://www.idi.org.il/media/12007/%D7%9E%D7%A4%D7%9C%D7%92%D7%AA-%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94.jpg?mode=crop&width=259&height=169"
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("kahol-lavan") : {
                let nameAndLogo = {
                    "name" : "כחול לבן",
                    "logo" : "https://www.idi.org.il/media/12232/gantz-lapid.png?mode=crop&width=259&height=169"
                }
                console.log(nameAndLogo)
                return nameAndLogo;
                break;
            }
            case ("merez") : {
                let nameAndLogo = {
                    "name" : "מרצ",
                    "logo" : "https://www.idi.org.il/media/12008/%D7%9E%D7%A8%D7%A6.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("kulanu") : {
                let nameAndLogo = {
                    "name" : "כולנו",
                    "logo" : "https://www.idi.org.il/media/12006/%D7%9B%D7%95%D7%9C%D7%A0%D7%95.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("yamin-hadash") : {
                let nameAndLogo = {
                    "name" : "הימין החדש",
                    "logo" : "https://www.idi.org.il/media/12141/%D7%94%D7%99%D7%9E%D7%99%D7%9F-%D7%94%D7%97%D7%93%D7%A9.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("israel-beitenu") : {
                let nameAndLogo = {
                    "name" : "ישראל ביתנו",
                    "logo" : "https://www.idi.org.il/media/6578/israelbeiteinu.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("shas") : {
                let nameAndLogo = {
                    "name" : 'ש"ס',
                    "logo" : "https://www.idi.org.il/media/6802/shas.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("yahadut-hatora") : {
                let nameAndLogo = {
                    "name" : "יהדות התורה",
                    "logo" : "https://www.idi.org.il/media/6560/torahjudaism.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("raam-taal") : {
                let nameAndLogo = {
                    "name" : "רעם תעל",
                    "logo" : "https://www.idi.org.il/media/12243/%D7%91%D7%9C%D7%93-%D7%A8%D7%A2%D7%9E.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("balad") : {
                let nameAndLogo = {
                    "name" : "בלד",
                    "logo" : "https://www.idi.org.il/media/12244/%D7%97%D7%93%D7%A9-%D7%AA%D7%A2%D7%9C.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("zehut") : {
                let nameAndLogo = {
                    "name" : "זהות",
                    "logo" : "https://www.idi.org.il/media/12180/zehut.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("gesher") : {
                let nameAndLogo = {
                    "name" : "גשר",
                    "logo" : "https://www.idi.org.il/media/12121/gesherparty.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("ihud-miflagot-hayamin") : {
                let nameAndLogo = {
                    "name" : "איחוד מפלגות הימין",
                    "logo" : "https://www.idi.org.il/media/12233/yamin.png?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }
            case ("magen") : {
                let nameAndLogo = {
                    "name" : "מגן",
                    "logo" : "https://www.idi.org.il/media/12177/magenparty.jpg?mode=crop&width=259&height=169"
                }
                return nameAndLogo;
                break;
            }

        }
    }
} 
 const nameAndLogo = new NameAndLogo()
 export default nameAndLogo;