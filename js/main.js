function getIdFrom() {
    var idFrom = "marquee-default";
    if( $('.marquee-hide[style*="block"]').length ) {
      idFrom = $('.marquee-hide[style*="block"]')[0].id;
    }
    return "#" + idFrom;
}    

function fadeFromTo(idFrom, idTo) {
    $(idFrom).css("z-index", "99");
    $(idTo).css("z-index", "100");
    $(idFrom).fadeOut(1000); 
    $(idTo).fadeIn(1000);   
}

function activateBusiness() {
    fadeFromTo( getIdFrom(), "#marquee-business" );
}

function activateCultureRecreation() {
    fadeFromTo( getIdFrom(), "#marquee-culture-recreation");
}

function activateEnvironment() {
    fadeFromTo( getIdFrom(), "#marquee-environment");
}

function activateHousingDevelopment() {
    fadeFromTo( getIdFrom(), "#marquee-housing-development");
}

function activateSocialServices() {
    fadeFromTo( getIdFrom(), "#marquee-social-services")
}

function activateCivicServices() {
    fadeFromTo( getIdFrom(), "#marquee-civic-services");
}

function activateEducation() {
    fadeFromTo( getIdFrom(), "#marquee-education");
}

function activateHealth() {
    fadeFromTo( getIdFrom(), "#marquee-health");
}
