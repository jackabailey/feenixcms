// This function duplicates a container where OnClick is called for a button.
i = 0
function duplicatePickup(){
    var original = document.getElementById("pickupLocation");
    var clone = original.cloneNode(true);
    clone.id = "pickupLocation" + (i);
    i += 1;
    original.parentNode.insertBefore(clone, original.nextSibling);
}

function removePickup(){
    i -= 1;
    var element = document.getElementById("pickupLocation" + i);
    element.parentNode.removeChild(element);
}
