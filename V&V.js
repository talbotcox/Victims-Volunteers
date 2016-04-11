//Function to enter the data on Victims & Volunteers
function info(collection){
var victims = []
var volunteers = []
var data = []
var vic = true
var vol = true

var vic1 = confirm("Press OK if you would like to enter a Victim\nPress Cancel if if you wish to pass");
	if(vic1 === true){
		window.alert("Please enter the Victims information.");
			while(vic === true){
				var vicobj = {}
				vicobj["Name"] = name()
				vicobj["Phone"] = phone()
				vicobj["Street"] = street()
					victims.push(vicobj)
						vic = confirm("Press OK if you would like to enter another Victim\nPress Cancel if you're finished.");
			}
	}

var vic2 = confirm("Press OK if you would like to enter a Volunteer\nPress Cancel if if you wish to pass");
	if(vic2 === true){
		window.alert("Please enter the Volunteers information.");
			while(vol === true){
				var volobj = {}
				volobj["Name"] = name()
				volobj["Phone"] = phone()
				volobj["Street"] = street()
					volunteers.push(volobj)
						vol = confirm("Press OK if you would like to enter another Volunteers\nPress Cancel if you're finished.");
			}
	}

	data.push(victims,volunteers)
	return data
}

var data = info()
// var data = [ [ { Name: 'Sara', Phone: '405-315-2846', Street: 'foxfire' },
//     { Name: 'kalee', Phone: '405-313-004', Street: 'indian hills' },
//     { Name: 'jennifer', Phone: '630-778-5463', Street: '2S69' } ],
//   [ { Name: 'Kyle', Phone: '405-887-4123', Street: '81st' },
//     { Name: 'talbot', Phone: '405-626-2816', Street: 'foxfire' },
//     { Name: 'daulton', Phone: '405-874-4113', Street: 'foxfire' } ] ]


function find(collection){
var vic = collection[0]
var vol = collection[1]
var volunteers = []
var x = prompt("What is the name of the person you need?")

	for(var i in vic){
		if(x.toUpperCase() === vic[i].Name.toUpperCase()){
			var street = vic[i].Street
			if(typeof street === "string"){
				break;
			}
		} 	
			
	}
	
	if(street === undefined){
					window.alert("I am sorry we were unable to locate " + x + " at this time. We will keep you informed if we do.");
					return
	}


	for(var y in vol) {
		if(street.toUpperCase() === vol[y].Street.toUpperCase()){
			volunteers.push(vol[y].Name)
		}
			
	}
	
	if(volunteers[0] === undefined) {
					window.alert("We have located "+ x +" on " + street + " but we were unable to locate a volunteer to help find " + x + " at this time. We will keep you informed if we do. In the mean time try to reach " + x + " at " + vic[i].Phone + "."); 
	}
			
	if(typeof volunteers[0] === "string"){
		 volunteers = volunteers.join(', ')
				window.alert("We have located "+ x +" on " + street + ". We are sending " + volunteers + " to bring " + x + " back to the shelter. We will keep you informed. In the mean time try to reach " + x + " at " + vic[i].Phone + ".");
		
	}



}

find(data)

function name(){
	var x = prompt("What is the name?")
	return x
}

function phone(){
	var x = prompt("What is the phone number?")
	return x
}

function street(){
	var x = prompt("What is the street?")
	return x
}
