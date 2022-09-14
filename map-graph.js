var myChart5 = echarts.init(document.getElementById("map-graph"), "DarkTheme");

var data = [
  {
    name: "安徽省",
    value: 20,
  },
  {
    name: "北京市",
    value: 2,
  },
  {
    name: "福建省",
    value: 14,
  },
  {
    name: "甘肃省",
    value: 12,
  },
  {
    name: "广东省",
    value: 29,
  },
  {
    name: "广西壮族自治区",
    value: 20,
  },
  {
    name: "贵州省",
    value: 32,
  },
  {
    name: "海南省",
    value: 10,
  },
  {
    name: "河北省",
    value: 6,
  },
  {
    name: "河南省",
    value: 30,
  },
  {
    name: "黑龙江省",
    value: 5,
  },
  {
    name: "湖北省",
    value: 8,
  },
  {
    name: "湖南省",
    value: 11,
  },
  {
    name: "吉林省",
    value: 6,
  },
  {
    name: "江苏省",
    value: 16,
  },
  {
    name: "江西省",
    value: 13,
  },
  {
    name: "辽宁省",
    value: 7,
  },
  {
    name: "内蒙古自治区",
    value: 7,
  },
  {
    name: "宁夏回族自治区",
    value: 12,
  },
  {
    name: "青海省",
    value: 1,
  },
  {
    name: "山东省",
    value: 24,
  },
  {
    name: "山西省",
    value: 22,
  },
  {
    name: "陕西省",
    value: 6,
  },
  {
    name: "上海市",
    value: 4,
  },
  {
    name: "四川省",
    value: 21,
  },
  {
    name: "天津市",
    value: 4,
  },
  {
    name: "新疆维吾尔自治区",
    value: 1,
  },
  {
    name: "云南省",
    value: 15,
  },
  {
    name: "浙江省",
    value: 173,
  },
  {
    name: "重庆市",
    value: 5,
  },
];
var geoCoordMap = {
  安徽省: [117.27, 31.86],
  北京市: [116.46, 39.92],
  福建省: [119.3, 26.08],
  甘肃省: [103.73, 36.03],
  广东省: [113.23, 23.16],
  广西壮族自治区: [108.33, 22.84],
  贵州省: [106.71, 26.57],
  海南省: [110.35, 20.02],
  河北省: [114.48, 38.03],
  河南省: [113.65, 34.76],
  黑龙江省: [126.63, 45.75],
  湖北省: [114.31, 30.52],
  湖南省: [113, 28.21],
  吉林省: [125.35, 43.88],
  江苏省: [119.9, 32.49],
  江西省: [115.89, 28.68],
  辽宁省: [123.38, 41.8],
  内蒙古自治区: [111.65, 40.82],
  宁夏回族自治区: [106.27, 38.47],
  青海省: [101.74, 36.56],
  山东省: [117, 36.65],
  山西省: [112.53, 37.87],
  陕西省: [108.95, 34.27],
  上海市: [121.48, 31.22],
  四川省: [104.06, 30.67],
  天津市: [117.2, 39.13],
  新疆维吾尔自治区: [87.68, 43.77],
  云南省: [102.73, 25.04],
  浙江省: [120.19, 30.26],
  重庆市: [106.54, 29.59],
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

option5 = {
  title: {
    text: "全国各省录取人数",
    textStyle: {
      color: "#eeeeee",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return params.name + " <br/>" + "人数：" + params.value[2];
    },
  },
  legend: {
    orient: "vertical",
    y: "bottom",
    x: "right",
    textStyle: {
      color: "#eeeeee",
    },
  },
  geo: {
    map: "china",
    label: {
      emphasis: {
        show: false,
      },
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: "#dd6b66",
        borderColor: "#e69d87",
      },
      emphasis: {
        areaColor: "#e69d87",
      },
    },
  },

  visualMap: {
    min: 0,
    max: 200,
    show: true,
    calculable: true,
    inRange: {
      color: ["#eedd78", "#ea7e53"], // 渐变
    },
    textStyle: {
      color: "#ddd",
    },
  },

  series: [
    {
      name: "省份",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: convertData(data),
      symbolSize: 8,

      label: {
        normal: {
          formatter: "{b}",
          position: "bottom",
          show: true, //top5外省份名称
        },
        emphasis: {
          show: true,
        },
      },
    },
  ],
};
myChart5.setOption(option5);
