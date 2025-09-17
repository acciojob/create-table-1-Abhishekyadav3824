const table=document.getElementById("sampleTable");
function insert_Row() {
	const tr=document.createElement("tr")
	const td1=document.createElement("td")
	const td2=document.createElement("td")
	let count=1
	td1.innerText=`New Cell${count}`
	count++
	td2.innerText=`New Cell${count}`
	tr.append(td1,td2)
	table.prepend(tr)
	
    //Write your code here
  
  
}
