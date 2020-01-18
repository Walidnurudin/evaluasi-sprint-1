var n = 9;

for(i = 1; i <= n; i++){
  for(h = 1; h <= n; h++) {
    if(i % 2 == 1 && h % 2 == 1 || i % 2 == 0 && h % 2 == 0){
      document.write('+')
    }else {
     document.write(' - ')
    }
  }
  document.write('<br>')
 }
