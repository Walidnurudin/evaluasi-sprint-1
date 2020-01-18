var n = 9;

for(i = 1; i <= n; i++){
    for(h = 9; h >= 1; h--){
        if(i == h || 2 + h == i || 4 + h == i || 6 + h == i || 8 + h == i){
            document.write("1"); 
        }else if( 1 + h == i || 3 + h == i || 5 + h == i || 7 + h == i){
            document.write(" 0");
        }else{
            document.write("+");
        }
    }
    document.write("<br>");
}