alert("hello lite-brite");

var shirt ={
  color:"blue", size:"L", isDirty:false, protect:function(){
    //protect
  },
  getDetails:function(){
    return "Shirt Color: '"+this.color+"', Size - '"+this.size+"'";
  },
};
alert(shirt.getDetails());
shirt.color="green";
shirt.size="M";
alert(shirt.getDetails());
var shirts=[shirt];
