exports.calculateMedi = (air, consciousness, respiration, spo, temp, timeSinceAte, cbg) => {
    //Defines the score to be added to
    let score = 0;

    //Checks if patient requires oxygen
    if(air === 2) score+=2

    //Checks if patient is concious
    if(consciousness!==0) score+=3

    //Checks the respiration rate
    if(respiration <= 8 || respiration >= 25){
        score += 3
    }else if(respiration >= 9 && respiration <= 11){
        score ++
    }else if(respiration >= 21 && respiration <= 24){
        score += 2
    }

    //Checks oxygen flow and checks if they need help to award additional points
    if(spo <= 83 || (air === 2 && spo >= 97)){
        score += 3
    }else if((spo === 84 || spo === 85) || (air === 2 && (spo === 95 || spo === 96))){
        score += 2
    }else if((spo === 86 || spo === 87) || (air === 2 && (spo === 93 || spo === 94))){
        score ++
    }

    //Checks the temps of patients
    if(temp <= 35){
        score += 3
    }else if((temp >= 35.1 && temp <= 36) || (temp >= 38.1 && temp <= 39)){
        score++
    }else if(temp >= 39.1){
        score += 2
    }

    //Optionally Checks CBG and takes into account whether you have eaten or not
    if((timeSinceAte === 0 && (cbg <= 3.4 || cbg >= 6)) || (timeSinceAte !== 0 && (cbg <= 4.5 || cbg >= 9))){
        score += 3
    }else if((timeSinceAte === 0 && (cbg >= 5.5 && cbg <= 5.4)) || (timeSinceAte !== 0 && (cbg >= 7.9 && cbg <= 8.9))){
        score += 2
    }
    return score
}

exports.checkIncrease = (scoreOne, scoreTwo) => {
    if((scoreTwo - scoreOne) > 1) return 'Score increased by more than 2 or more'
    else return 'Score not increased notably'
}