
function myConvertFunction() {
    var text = document.getElementById("myText").value;
    var index = text.indexOf("class");
    var index2 = text.indexOf("{");
    var table_name = text.substring(index + 6, index2).trim();
    var table_col = text.substring(index2 + 1).trim();
    table_col = table_col.replaceAll("  ", " ").trim();
    var table_col_list = table_col.split("\n");

    for (let i = 0; i < table_col_list.length; i++) {
        table_col_list[i] = table_col_list[i].trim()
    }
    var result = "CREATE TABLE " + table_name + "(";
    var result2="INSERT INTO "+ table_name + "("
    for (let i = 0; i < table_col_list.length - 1; i++) {
        result += "[" + table_col_list[i].split(" ")[2] + "]" ;
        result2 += "[" + table_col_list[i].split(" ")[2] + "]," ;
        switch(table_col_list[i].split(" ")[1]) {
            case "String":
            case "string":
                result += " nvarchar(255),\n"
              break;
            case "int":
                result += " int,\n";
              break;
            case "DateTime":
                result += " DateTime,\n";
              break;
            default:
                result += " nvarchar(255),\n";
          }
    } 
    
    result += "PRIMARY KEY() \n)";
    result2 = result2.slice(0, -1);
    result2 += ")VALUES \n(";
    for (let i = 0; i < table_col_list.length - 1; i++) {
        result2 += "\'a\',";

    }
    result2 = result2.slice(0, -1);
    result2 += "),\n";
    document.getElementById("myText2").value = result+"\n\n"+result2;
}
function myConvertParameters() {
  var text = document.getElementById("myText").value;
  var index = text.indexOf("class");
  var index2 = text.indexOf("{");
  var table_name = text.substring(index + 6, index2).trim();
  var table_col = text.substring(index2 + 1).trim();
  table_col = table_col.replaceAll("  ", " ").trim();
  var table_col_list = table_col.split("\n");

  for (let i = 0; i < table_col_list.length; i++) {
      table_col_list[i] = table_col_list[i].trim()
  }
  var result ="";
  for (let i = 0; i < table_col_list.length - 1; i++) {
      result += "parameters.Add(\"\@" + table_col_list[i].split(" ")[2] + "\", "+table_name.toLowerCase()+"\."+ table_col_list[i].split(" ")[2] +");\n" ;
  } 
  document.getElementById("myText2").value = result;
}
function myConvertPROCEDURE() {
    var text = document.getElementById("myText").value;
    var index = text.indexOf("class");
    var index2 = text.indexOf("{");
    var table_name = text.substring(index + 6, index2).trim();
    var table_col = text.substring(index2 + 1).trim();
    table_col = table_col.replaceAll("  ", " ").trim();
    var table_col_list = table_col.split("\n");

    for (let i = 0; i < table_col_list.length; i++) {
        table_col_list[i] = table_col_list[i].trim()
    }
    var result = "CREATE PROCEDURE PRO_" + table_name + "\n";
    var result2="AS \nINSERT INTO "+ table_name + "("
    for (let i = 0; i < table_col_list.length - 1; i++) {
        result += "\@" + table_col_list[i].split(" ")[2] + "" ;
        result2 += "[" + table_col_list[i].split(" ")[2] + "]," ;
        switch(table_col_list[i].split(" ")[1]) {
            case "String":
            case "string":
                result += " nvarchar(255),"
              break;
            case "int":
                result += " int,";
              break;
            case "DateTime":
                result += " DateTime,";
              break;
            default:
                result += " nvarchar(255),";
          }
    } 
    result = result.slice(0, -1);
    result2 = result2.slice(0, -1);
    result2 += ")VALUES \n(";
    for (let i = 0; i < table_col_list.length - 1; i++) {
        result2 += "\@" + table_col_list[i].split(" ")[2] + ", " ;

    }
    result2 = result2.slice(0, -2);
    result2 += ")\nGO;";
    document.getElementById("myText2").value = result+"\n"+result2;
}
function myUPDATEPROCEDURE() {
  var text = document.getElementById("myText").value;
  var index = text.indexOf("class");
  var index2 = text.indexOf("{");
  var table_name = text.substring(index + 6, index2).trim();
  var table_col = text.substring(index2 + 1).trim();
  table_col = table_col.replaceAll("  ", " ").trim();
  var table_col_list = table_col.split("\n");

  for (let i = 0; i < table_col_list.length; i++) {
      table_col_list[i] = table_col_list[i].trim()
  }
  var result = "CREATE PROCEDURE PRO_" + table_name + "\n";
  var result2="AS \nUPDATE "+ table_name + "\nSET \n"
  for (let i = 0; i < table_col_list.length - 1; i++) {
      result += "\@" + table_col_list[i].split(" ")[2] + "" ;
     
      switch(table_col_list[i].split(" ")[1]) {
          case "String":
          case "string":
              result += " nvarchar(255),"
            break;
          case "int":
              result += " int,";
            break;
          case "DateTime":
              result += " DateTime,";
            break;
          default:
              result += " nvarchar(255),";
        }
  } 
  result = result.slice(0, -1);
  result2 = result2.slice(0, -1);
  for (let i = 0; i < table_col_list.length - 1; i++) {
      result2 += "[" + table_col_list[i].split(" ")[2] + "]" +" = " +"\@" + table_col_list[i].split(" ")[2] +",\n" ;

  }
  result2 = result2.slice(0, -2);
  result2 += "\nWHERE \nGO;";
  document.getElementById("myText2").value = result+"\n"+result2;
}
function myPagingPROCEDURE() {
  var text = document.getElementById("myText").value;
  var index = text.indexOf("class");
  var index2 = text.indexOf("{");
  var table_name = text.substring(index + 6, index2).trim();
  var table_col = text.substring(index2 + 1).trim();
  table_col = table_col.replaceAll("  ", " ").trim();
  var table_col_list = table_col.split("\n");

  for (let i = 0; i < table_col_list.length; i++) {
      table_col_list[i] = table_col_list[i].trim()
  }
  var result = "CREATE PROCEDURE PRO_" + table_name + "\n";
  var result2="AS \nSELECT * FROM "+ table_name + "\n WHERE"
  for (let i = 0; i < table_col_list.length - 1; i++) {
      result += "\@" + table_col_list[i].split(" ")[2] + "" ;
      result2 += "((\@"+table_col_list[i].split(" ")[2]+" IS NULL) OR ([" + table_col_list[i].split(" ")[2] + "]=\@"+table_col_list[i].split(" ")[2]+"))\n AND" ;
      switch(table_col_list[i].split(" ")[1]) {
          case "String":
          case "string":
              result += " nvarchar(255),"
            break;
          case "int":
              result += " int,";
            break;
          case "DateTime":
              result += " DateTime,";
            break;
          default:
              result += " nvarchar(255),";
        }
  } 
  result = result.slice(0, -1);
  result2 = result2.slice(0, -3);
  //result2 = result2.slice(0, -2);
  result2 += "ORDER BY "+ table_name + ".Created\nOFFSET (@Page-1)*@NumberOfRecord ROWS\nFETCH NEXT @NumberOfRecord ROWS ONLY\nGO;";
  document.getElementById("myText2").value = result+"\n"+result2;
}