document.getElementById('isssuInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
	var issueDesc = document.getElementById('issueDescInput').value;
	var issueSeverity = document.getElementById('issueSeverityInput').value;
	var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
	var issueId = chance.guid();
	var issueDesc = 'Open';

	var issue = {
		id: issueId,
		description: issueDesc,
		severity: issueSeverity,
	}


}

function fetchIssues(){
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issuesListe = document.getElementById('issuesList');

	issuesList.innerHTML = '';

	for (var i = 0; i < issues.length; i++) {
		var id = issues[i].id;
		var desc = issues[i].description;
		var severity = issues[i].severity;
		var assingedTo = issues[i].assingedTo;
		var status = issues[i].status;

		issuesList.innerHTML += '<div class= "well">'+'<h6>Issue ID: ' + id + '<h6>'+
								'<p><span class = "label label-info">' + status + '</span></p>'+
								'<h3>' + desc +'</h3>'+
								'<p> <span class= "glyphicon glyphicon-time"></span>'+ severity + '</p>' +
								'<p> <span class= "glyphicon glyphicon-time"></span>'+ assingedTo + '</p>' +
								'<a href = "#" onclick = "setStatusClosed(\''+id+'\')" class = "btn btn-warning" > Close </a>'+
								'<a href = "#" onclick = "deleteIssue(\''+id+'\')" class = "btn btn-danger" > Delete </a>'+
								'</div>';
	}

}