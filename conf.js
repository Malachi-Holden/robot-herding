let configuration;

const startConf = {
  robots:
  [
    {color:"red",number:1,direction:90,row:0,column:1},
    {color:"red",number:2,direction:90,row:0,column:3},
    /*{color:"red",number:3,direction:90,row:0,column:3},*/

    {color:"blue",number:1,direction:0,row:1,column:0},
    {color:"blue",number:2,direction:0,row:3,column:0},
    /*{color:"blue",number:3,direction:0,row:3,column:0},*/

    {color:"green",number:1,direction:270,row:4,column:1},
    {color:"green",number:2,direction:270,row:4,column:3},
    /*{color:"green",number:3,direction:270,row:4,column:3},*/

    {color:"yellow",number:1,direction:180,row:1,column:4},
    {color:"yellow",number:2,direction:180,row:3,column:4},
    /*{color:"yellow",number:3,direction:180,row:3,column:4},*/
  ],

  dimensions:{height:5,width:5},

  squares:[],

  goal:[],

  counter:0
}
