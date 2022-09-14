var myChart3 = echarts.init(document.getElementById("line-graph"), "DarkTheme");
var option3 = {
  title: {
    text: "媒工19级民族数量一览",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["总人数", "汉族", "少数民族"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [
        "19电科",
        "19电信",
        "19广电",
        "19数技",
        "19软工",
        "19通信",
        "19网工",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      data: [],
    },
  ],
  series: [
    {
      name: "少数民族",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [4, 2, 6, 9, 4, 3, 10],
    },
    {
      name: "汉族",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [43, 46, 127, 130, 71, 23, 58],
    },
    {
      name: "总人数",
      type: "line",
      label: {
        show: true,
        position: "top",
      },
      emphasis: {
        focus: "series",
      },
      data: [47, 48, 133, 139, 75, 26, 68],
    },
  ],
};
myChart3.setOption(option3);
