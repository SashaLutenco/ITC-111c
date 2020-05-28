/*
        This function is called by the links in the nav area of the page.
        The function creates 2 links and places them into the teal colored div.
        The text in the blue div is also changed.
    */
    function changeLinkText(lnk) {
    // Condition checks which link was click by passing value to the 'lnk' variable
    // the visibility of the corresponding div is updated accordingly. 
    switch (lnk){
        case 'home' :
        document.getElementById('divLeft_Default').style.display = "blcok";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Home Link clicked. Default text displayed.";
        document.getElementById('ls_Heading').innerHTML = "ITC-111";
        document.getElementById('rs_Heading').innerHTML = "Intro to Programming <br>w/HTML, CSS & JavaScript";
        break;

    case'classEx' :
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "block";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divLeft_RLinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Default description for Class Exercise Link.";
        document.getElementById('ls_Heading').innerHTML = "Class Exercise";
        document.getElementById('rs_Heading').innerHTML = "Exercise Descritopn";
        break;

    case 'assign' :
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "block";
        document.getElementById('divLeft_RLinks').style.display = "none";
        document.getElementById('divRight').innerHTML = "Default description for Assignments Link.";
        document.getElementById('ls_Heading').innerHTML = "Assignments";
        document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
        break;
    case 'resources' :
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divLeft_RLinks').style.display = "block";
        document.getElementById('divRight').innerHTML = "Default description for Resources Link.";
        document.getElementById('ls_Heading').innerHTML = "Assignments";
        document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
        break;
    default :
        document.getElementById('divLeft_Default').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById('divRight').style.display = "none";
        break;
    }
    // The innerHTML of the div to the right is also changed
    document.getElementById('divRight').innerHTML = 'Content for the "Link 1" link.';
    // Any of an elements properties can be changed this way. Here the color is changed.
    document.getElementById('divRight').style.color = 'red';
}
/*
    This function changed the text displayed by an element/tag. It takes a parameter 'txt'
    that is used to control what text to display depending on which link is clicked. This
    function is called whenever the text in the right div element needs to be changed.
*/
function changeDivRightText(txt) {
    // change the heading of the 'h2' tag in innerDivRight         
    document.getElementById('rs_Heading').innerHTML = txt;
}