//lets remove unnaccessary code
exports.getDate=function (){
  const date = new Date();
  // const currentday = today.getDay();
  const options={
    weekday:"long",
    day: "numeric",
    month:"long",
  };
  return date.toLocaleDateString("en-us",options);
}
exports.getDay=function(){
  const date = new Date();
  // const currentday = today.getDay();
  const options={
    weekday:"long",
  };
return date.toLocaleDateString("en-us",options);
}

// module.exports.getDate=getDate;
// function getDate(){
//   let date = new Date();
//   // const currentday = today.getDay();
//   let options={
//     weekday:"long",
//     day: "numeric",
//     month:"long",
//   };
//   let day=date.toLocaleDateString("en-us",options);
//   return day;
// }
// module.exports.getDay=getDay;
// function getDay(){
//   let date = new Date();
//   // const currentday = today.getDay();
//   let options={
//     weekday:"long",
//   };
//   let day=date.toLocaleDateString("en-us",options);
//   return day;
// }
