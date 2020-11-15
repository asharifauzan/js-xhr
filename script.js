let data;

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhr.onreadystatechange = function() {
  if (this.status == 200 && this.readyState == 4) {
    data = JSON.parse(this.response);
    for(let i = 0; i <= data.length; i++) {
      console.log(data[i]);
    }
  }
}
xhr.send();
