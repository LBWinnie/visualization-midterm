function readFile(files) {
  W.readAsText(files, function (data) {
    var relationData = getRelationData(data);
    var characterData = getCharacterData(relationData);
    echartsRender(characterData, relationData);
  });
}
function getRelationData(result) {
  var allLine = [];
  var lines = result.split("\r\n");
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i].split(",");
    var line_obj1 = {
      source: line[0],
      target: line[1],
      value: line[2],
    };
    if (
      [
        "蒙古族",
        "彝族",
        "苗族",
        "白族",
        "回族",
        "壮族",
        "满族",
        "瑶族",
        "土家族 ",
        "侗族",
        "哈尼族",
        "布依族",
        "维吾尔族",
      ].indexOf(line[2]) > -1
    ) {
      line_obj1.lineStyle = { color: "#e69d87", width: "4" };
    } else if (["汉族"].indexOf(line[2]) > -1) {
      line_obj1.lineStyle = { color: "#e69d87", width: "4" };
    }
    var line_obj2 = {
      source: line[3],
      target: line[0],
      value: line[4],
    };
    if (
      [
        "内蒙古自治区",
        "广西壮族自治区",
        "西藏自治区",
        "宁夏回族自治区",
        "新疆维吾尔自治区",
      ].indexOf(line[3]) > -1
    ) {
      line_obj2.lineStyle = { color: "pink", width: "3" };
    } else if (["北京市", "天津市", "上海市", "重庆市"].indexOf(line[3]) > -1) {
      line_obj2.lineStyle = { color: "#e69d87", width: "3" };
    }
    //为重要的特殊关系设置特殊的连线格式
    allLine.push(line_obj1); //将单行对象格式数据push到myData中
    allLine.push(line_obj2);
  }
  return allLine;
}
function getCharacterData(r) {
  var arr = [];
  for (var i = 0; i < r.length; i++) {
    arr.push(r[i].source);
    arr.push(r[i].target);
  }
  var allCharacter = [];
  var temp = [];
  var MajorList = W.getMajor();
  var ProvinceList = W.getProvince();
  for (var i = 0; i < arr.length; i++) {
    var index = temp.indexOf(arr[i]);
    if (index == -1) {
      var MyCategory = 0;
      if (MajorList.indexOf(arr[i]) > -1) {
        MyCategory = 1; //isMajor
      }
      if (ProvinceList.indexOf(arr[i]) > -1) {
        MyCategory = 2; //isProvince
      }
      allCharacter.push({
        name: arr[i],
        value: 1,
        category: MyCategory,
        symbolSize: MyCategory * 15 + 10,
      });
      temp.push(arr[i]);
    } else {
      allCharacter[index].value += 1;
    }
  }
  return allCharacter;
}
// ----------------------------------------------------------------
var dom1 = document.getElementById("relation-graph");
function echartsRender(nodes, links) {
  var myChart1 = echarts.init(dom1);
  nodes.forEach(function (node) {
    node.label = {
      show: node.value > 10 || node.category == 1 || node.category == 2,
    };
  });
  var option1 = {
    tooltip: {},
    legend: [
      {
        data: [
          {
            name: "学生",
            itemStyle: {
              color: "#759aa0",
            },
          },
          {
            name: "班级",
            itemStyle: {
              color: "#dd6b66",
            },
          },
          {
            name: "省份",
            itemStyle: {
              color: "#eedd78",
            },
          },
        ],
        selector: true, //开启全选和反选按钮
      },
    ],
    series: [
      {
        type: "graph",
        layout: "force",
        data: nodes,
        links: links,
        categories: [
          {
            name: "学生",
            itemStyle: {
              color: "#759aa0",
            },
          },
          {
            name: "班级",
            itemStyle: {
              color: "#dd6b66",
            },
          },
          {
            name: "省份",
            itemStyle: {
              color: "#eedd78",
            },
          },
        ],
        roam: true, //是否开启鼠标滚轮缩放
        label: {
          position: "inside",
          color: "#333333",
          textBorderColor: "#aaaaaa",
          textBorderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        edgeLabel: {
          //边标签的设置
          show: true,
          position: "middle",
          fontSize: 12,
          formatter: function (params) {
            if (
              [
                "蒙古族",
                "彝族",
                "苗族",
                "白族",
                "回族",
                "壮族",
                "满族",
                "瑶族",
                "土家族 ",
                "侗族",
                "哈尼族",
                "布依族",
                "维吾尔族",
              ].indexOf(params.data.value) > -1
            ) {
              return params.data.value; //只返回重要关系标签进行显示
            } else {
              return "";
            }
          },
        },
        force: {
          repulsion: 30,
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: {
            width: 5,
          },
        },
      },
    ],
  };
  myChart1.setOption(option1);
}
