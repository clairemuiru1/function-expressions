function car(benz) {
    if (car === benz) {
        return`benz is expensive`;
    }
    else if(car ===toyota){
        return`toyota is affordable`;
    }
    else{
        return`which car are you`;
    }
}

function car(benz){
 return car===benz?`benz is expenzive`:`toyota is affordable`
}

function car(benz) {
    switch (car){
      case'benz':
      return'benz is expensive'
      case 'toyota':
        return'toyota is affordable'
        default:
            return`which is your ${car}?`
    }
    
}
    
