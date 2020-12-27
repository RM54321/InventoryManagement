$(document).ready(function() {
  var dataTable=  $('#inventory_tbl').DataTable( {
        "processing": true,
        "serverSide": false,"bAutoWidth": false,
        "ajax": {
            "url": "http://localhost:8081/inventories/items",
            "type": "GET",
 "dataSrc": '',
                      "contentType": "application/json"
        },
        "columns": [
            { "data": "itemId","width":"10%" },
            { "data": "itemName","width":"30%"},
            { "data": "itemCount" ,"width":"25%"},
            { "data": "itemDesc","width":"30%" },{
	"data":"itemId","render":function (data, type, row) {
                    return `<button id='edit' value=`+data+`>EDIT</button>`;
					},"width":"10%"},{
	"data":"itemId","render":function (data, type, row) {
                    return `<button id='delete' value=`+data+`>DEL</button>`;
					},"width":"10%"}
         			]

    } );

/* Function for handling edit button click */
 $(document).on('click', '#edit', function(){ 
 	var itemid = $(this).val();
    pop('popDivEdit',itemid);

});

/* Function for handling edit button click */
 $(document).on('click', '#delete', function(){ 
 var itemid = $(this).val();
  deleteDataAsJson({ itemid });
});

/*Refresh datatable every 15 seconds */
setInterval( function () {
    dataTable.ajax.reload( null, false ); // user paging is not reset on reload 
}, 7000 );





} );
 
/*Declaring form variables for adding and updating items */
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", handleFormSubmit);
const editForm = document.getElementById("editForm");
editForm.addEventListener("submit", handleFormSubmitEdit);
/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

/**
 * Event handler for adding items form submit event.
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });

		//console.log({ responseData });
	} catch (error) {
		//console.log(error);
	}
			document.getElementById('msgadd').innerHTML="Item has been added!";
}

/**
 * Event handler for editing items form submit event.
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmitEdit(event) {
			event.preventDefault();
			const form = event.currentTarget;
			const url = form.action;
			var itemid=document.getElementById('itemId').value;
		try {
				const formData = new FormData(form);
				const responseData = await postEditDataAsJson({ url, formData });
		
			} catch (error) {
				//console.log(error);
			}
		document.getElementById('msgbox').innerHTML="Item has been updated!";
			
			

}


/**
 * Helper function for Puting updated data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to PUT data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postEditDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	// Display the key/value pairs
	var itemid=formData.get('itemId'); 

	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

    var url="http://localhost:8081/inventories/items/"+itemid+"/update";

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}


async function deleteDataAsJson({ itemid }) {
	const fetchOptions = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
	};

    var url="http://localhost:8081/inventories/items/"+itemid+"/delete";

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

			function pop(div,itemId) {
				document.getElementById(div).style.display = 'block';
				if(div==='popDiv'){
					document.getElementById('add_id').style.visibility='hidden';
					document.getElementById("addForm").reset();
					document.getElementById("msgadd").innerHTML="";
					}
				if(div==='popDivEdit'){
					document.getElementById('itemId').value=itemId;
					document.getElementById("editForm").reset();
					document.getElementById("msgbox").innerHTML="";
					}
					
			}
			
			
			function hide(div) {
				document.getElementById(div).style.display = 'none';
					document.getElementById('add_id').style.visibility='visible';
			}
			
			//To detect escape button
			document.onkeydown = function(evt) {
				evt = evt || window.event;
				if (evt.keyCode == 27) {
					hide('popDiv');
				}
			};






