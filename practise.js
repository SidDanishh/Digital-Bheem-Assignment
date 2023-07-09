document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //   -----Declaration ---------
  var name = document.getElementById("name").value;
  var contact = document.getElementById("contact").value;
  var checkIn = document.getElementById("checkIn").value;
  var checkOut = document.getElementById("checkOut").value;
  var No_Of_Person = document.getElementById("No_Of_Person").value;
  var No_Of_Days = document.getElementById("No_Of_Days").value;
  var delux = parseInt(document.getElementById("delux").value);
  var suite = parseInt(document.getElementById("suite").value);
  var AC = parseInt(document.getElementById("AC").value);
  var Locker = parseInt(document.getElementById("Locker").value);

  //advance payment

  var advance = document.getElementById("advance");
  if (advance.value === "") {
    advance = 0;
  } else {
    advance = parseInt(document.getElementById("advance").value);
  }

  ///total person
  var person_charge;
  if (No_Of_Person > 2) {
    person_charge = 1000;
  } else {
    person_charge = 0;
  }

  // console.log(`extra charges: ${extra}`);

  //-------sum for Total

  var sum = 0;
  if (document.getElementById("delux").checked == true) {
    if (
      document.getElementById("AC").checked == true &&
      document.getElementById("Locker").checked == true
    ) {
      sum = delux + AC + Locker + person_charge;
    } else if (document.getElementById("AC").checked == true) {
      sum = delux + AC + person_charge;
    } else if (
      document.getElementById("AC").checked == false &&
      document.getElementById("Locker").checked == false
    ) {
      sum = delux + person_charge;
    } else {
      sum = delux + Locker + person_charge;
    }
  } else {
    if (
      document.getElementById("AC").checked == true &&
      document.getElementById("Locker").checked == true
    ) {
      sum = suite + AC + Locker + person_charge;
    } else if (document.getElementById("AC").checked == true) {
      sum = suite + AC + person_charge;
    } else if (
      document.getElementById("AC").checked == false &&
      document.getElementById("Locker").checked == false
    ) {
      sum = suite + person_charge;
    } else {
      sum = suite + Locker + person_charge;
    }
  }

  console.log(sum);

  //---------total amount && balance amount

  var total = (document.getElementById("total").value = sum * No_Of_Days);
  var balance = (document.getElementById("balance").value = total - advance);

  ///------------printing the customer  detail on the page
  var outputElement = document.getElementById("output");
  outputElement.innerHTML =
    "<p>Name: " +
    name +
    "</p>" +
    "<p>contact: " +
    contact +
    "</p>" +
    "<p> check In Date:" +
    checkIn +
    "</P>" +
    "<p> check out Date:" +
    checkOut +
    "</P>" +
    "<P>Total Person:" +
    No_Of_Person +
    "</p>" +
    "<p> Total days: " +
    No_Of_Days +
    "</p>" +
    "<p> Advance:" +
    advance +
    "</P>" +
    // "<p>Extra Chargeas: " +
    // extra +
    // "</p>"+
    "<p> Balance:" +
    balance +
    "</P>" +
    "<p> Total:" +
    total +
    "</P>";

  //------------print Detail of customer in console
  console.log("Customer Name:" + name);
  console.log("contact:" + contact);
  console.log("CheckIN Date:" + checkIn);
  console.log("CheckOut Date:" + checkOut);
  console.log("Total No Of Person :" + No_Of_Person);
  console.log("Total No Of Days:" + No_Of_Days);
  console.log(`suite value: ${suite}`);
  console.log(`deluxe value: ${delux}`);
  console.log(`AC value: ${AC}`);
  console.log(`Locker value: ${Locker}`);
  console.log(`Advance: ${advance}`);
});
