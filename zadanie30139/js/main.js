function wstaw(){
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let telefon = document.getElementById("telefon").value;
  
    let name=document.getElementById("name");
    name.textContent=imie;

    let surname=document.getElementById("surname");
    surname.textContent=nazwisko;

    let phone=document.getElementById("phone");
    phone.textContent=telefon;
}


