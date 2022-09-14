var myChart4 = echarts.init(document.getElementById("bar-graph"), "DarkTheme");
var option4 = {
  tooltip: {},
  legend: {
    data: ["班级人数"],
  },
  xAxis: {},
  yAxis: {
    type: "category",
    data: [
      "19网工2班",
      "19网工1班",
      "19通信班",
      "19数技3班",
      "19数技2班",
      "19数技1班",
      "19软工2班",
      "19软工1班",
      "19广电3班",
      "19广电2班",
      "19广电1班",
      "19中广班",
      "19电信班",
      "19电科班",
    ],
  },
  series: [
    {
      name: "班级人数",
      type: "bar",
      data: [34, 34, 26, 47, 45, 47, 37, 38, 35, 34, 34, 30, 48, 47],
    },
  ],
  grid: {
    top: "10%", // 组件离容器上侧的距离,百分比字符串或整型数字
    left: "3%", // 组件离容器左侧的距离,百分比字符串或整型数字
    right: "12%",
    bottom: "3%",
    containLabel: true, //grid 区域是否包含坐标轴的刻度标签，
  },
};
myChart4.setOption(option4);
