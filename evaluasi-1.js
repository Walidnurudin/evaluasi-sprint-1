var n = 9;

for(i = 0; i <= n; i++){
  for(h = 0; h <= n; h++){
    if(i == h || i + h == n || i == 5 || h == 5){
      document.write('+')
    }else{
     document.write(' - ')     
    }
  }
  document.write('<br>')
}