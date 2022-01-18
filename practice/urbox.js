AmCharts.makeChart("chartdiv", {
    type: "serial",
    categoryField: "category",
    autoMarginOffset: 40,
    marginRight: 60,
    marginTop: 60,
    startDuration: 1,
    fontSize: 13,
    theme: "patterns",
    categoryAxis: {
      gridPosition: "start",
    },
    trendLines: [],
    graphs: [
      {
        balloonText: "[[title]] of [[category]]:[[value]]",
        bullet: "round",
        bulletSize: 10,
        id: "AmGraph-1",
        lineAlpha: 1,
        lineThickness: 3,
        title: "graph 1",
        type: "smoothedLine",
        valueField: "column-1",
      },
    ],
    guides: [],
    valueAxes: [
      {
        id: "ValueAxis-1",
        title: "",
      },
    ],
    allLabels: [],
    balloon: {},
    titles: [],
    dataProvider: [
      {
        category: "T2",
        "column-1": 8,
        "column-2": 5,
      },
      {
        category: "T3",
        "column-1": 6,
        "column-2": 7,
      },
      {
        category: "T4",
        "column-1": 2,
        "column-2": 3,
      },
      {
        category: "T5",
        "column-1": 1,
        "column-2": 3,
      },
      {
        category: "T6",
        "column-1": 2,
        "column-2": 1,
      },
      {
        category: "T7",
        "column-1": 3,
        "column-2": 2,
      },
      {
        category: "CN",
        "column-1": 6,
        "column-2": 8,
      },
    ],
  });