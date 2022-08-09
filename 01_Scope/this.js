student = {
    firstName: "Riya",
    stdClass: 12,
    birthYr: 2001,
  
    calcAgeExpr: function () {
      return 2022 - this.birthYr;
    },
  
    //   calcAgeArrow: () => 2022 - this.birthYr,
  };
  
  // const studentAge = student.calcAgeExpr();
  // console.log(studentAge);
  
  // const studentAgeArrow = student.calcAgeArrow();
  // console.log(studentAgeArrow);
  
  let calcAgeArrow = (birthYr) => 2022 - birthYr;
  console.log(calcAgeArrow(2002));