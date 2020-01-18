var n = 10;

for(i = 0; i <= n; i++){
  for(h = 0; h <= n; h++){
    if(h <= i && i <= n - h || i <= h && i >= n - h){
      document.write('+')
    }else{
     document.write(' - ')     
    }
  }
  document.write('<br>')
}