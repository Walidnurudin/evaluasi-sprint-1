var n = 9;

for(i = 1; i <= n; i++){
    for(h = 1; h <= n; h++){
        if(i == h || h == 1 || h == 9 || i == 1 || i == 9 ){
            document.write(" +");
        }else if( h - 1 == i || h - 2 == i || h - 3 == i || h - 4 == i || h - 5 == i || h - 6 == i){
            document.write(" 0");
        }else{
            document.write(" 1");
        }
    }
    document.write("<br>");
}