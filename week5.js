function getGrade(marks){
    let results;
    if (marks>=80 && marks < 100){
     results = "A";
     console.log(results);
    }
    else if(marks>=70 && marks<=79){
      results = "B";
      console.log(results);
    } 
    else if(marks>=60 && marks<=69){
       results = "C";
       console.log(results); 
    }
    else if(marks>=50 && marks<=59){
       results = "D";
       console.log(results);
    }
    else if(marks>=0 && marks<=49){
        results = "E";
        console.log(results);
    }
    else {
        results = "F";
        console.log(results);   
    }
return results;
}
getGrade(84);