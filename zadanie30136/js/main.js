let tekst=document.getElementById('tekst');
document.getElementById('dodaj').onclick=function(){
    tekst.textContent=('Lorem, ipsum.');
}
document.getElementById('usun').onclick=function(){
    tekst.textContent=('');
}
