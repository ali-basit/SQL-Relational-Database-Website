$(document).ready(function(){
	$("#courses").submit(getListInfo);
	$("#selector").change(function(){
		var droplist = document.getElementById("selector");
		var selected_item = droplist.options[droplist.selectedIndex].value;

		console.log("Row: " + selected_item);

		fullMyTable(selected_item);
	});
});


function getListInfo(event) {
	event.preventDefault();
	var parameter = $("#course").val();
	var link = "exams.php?course=" + parameter;
	$.getJSON(link, function(data){
		$.each(data, function(key, value){
			var option = "<option value=" + value.id + ">" + value.course + " " + value.section + " " + value.instructor + "</option>";
			$("#selector").append(option);
		});
	});
}



function fullMyTable(selected_item) {

	var link = "exams.php?course=" + selected_item;
	console.log("fillTable link: " + link);


    $.getJSON(link, function(data) {
    	console.log("WITHIN getJSON of fillTable");

    	$.each(data, function(key, value){
    		$("#table").append("<tr><td>" + value.course + "</td><td>" + value.section + "</td><td>" + value.instructor + "</td><td>" + value.date + "</td><td>" + value.start + "</td><td>"  + value.end + "</td></tr>")
    	});
       
    });
}
