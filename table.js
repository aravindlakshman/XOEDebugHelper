var tableRows = document.querySelectorAll('tr');

var debugString="{ SalesSessionId: '_SSID_', VisitorSessionId: '_VSID_' , VisitorId : '_VID_' , MarketId : '_MID_'}";

for (j = 0; j < tableRows.length; ++j) {

    var tableData = document.querySelectorAll('td');
    for (k = 0; k < tableData.length; ++k) {

        if(tableData[k].innerText.startsWith("Visitor Id:"))
        {
            debugString=  debugString.replace("_VID_",tableData[k+1].innerText);
        }

        if(tableData[k].innerText.startsWith("Visitor Session Id:"))
        {
            debugString= debugString.replace("_VSID_",tableData[k+1].innerText);
        }

        if(tableData[k].innerText.startsWith("Sales Portal Session Id:"))
        {
            debugString= debugString.replace("_SSID_",tableData[k+1].innerText);
        }
       
        debugString= debugString.replace("_MID_","00");
       
    }

}

        navigator.clipboard.writeText(debugString).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            alert("User context string  Copied successfully!")
        }, function(err) {
            console.error('Async: Could not copy text: ', err);

            var textArea = document.createElement("textarea");
        textArea.value = debugString;
        textArea.style.position="fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            alert("User context string Copied successfully!!")
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);




  });

 








// alert(debugString);