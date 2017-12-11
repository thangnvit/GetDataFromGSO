$(document).ready(() => {
	// init();
	// bindingData();
	bindingClick();
});

function bindingClick() {
	$('#year').change(() => {
		var value = $('#year').val();
		bindingData(value);
	})
}

function init() {

}

function bindingData(data) { 	
	Highcharts.chart('container', {

		chart: {
			type: 'column'
		},

		title: {
			text: 'Biểu đồ sản lượng nông nghiệp cả năm phân theo địa phương'
		},

		legend: {
			align: 'right',
			verticalAlign: 'middle',
			layout: 'vertical'
		},

		xAxis: {
			categories: ['Lúa', 'Ngô', 'Khoai'],
			labels: {
				x: -10
			}
		},

		yAxis: {
			allowDecimals: false,
			title: {
				text: 'Amount'
			}
		},

		series: getData({
			rice,
			maize,
			sweetPotato
		}, data.toString()),

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						align: 'center',
						verticalAlign: 'bottom',
						layout: 'horizontal'
					},
					yAxis: {
						labels: {
							align: 'left',
							x: 0,
							y: -5
						},
						title: {
							text: null
						}
					},
					subtitle: {
						text: null
					},
					credits: {
						enabled: false
					}
				}
			}]
		}
	});

	Highcharts.chart('container2', {

		chart: {
			type: 'column'
		},

		title: {
			text: 'Biểu đồ tổng lượng mưa tại một số điểm quan trắc'
		},

		legend: {
			align: 'right',
			verticalAlign: 'middle',
			layout: 'vertical'
		},

		xAxis: {
			categories: [],
			labels: {
				x: -10
			}
		},

		yAxis: {
			allowDecimals: false,
			title: {
				text: 'Amount'
			}
		},

		series: getData({rain}, data.toString()),

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						align: 'center',
						verticalAlign: 'bottom',
						layout: 'horizontal'
					},
					yAxis: {
						labels: {
							align: 'left',
							x: 0,
							y: -5
						},
						title: {
							text: null
						}
					},
					subtitle: {
						text: null
					},
					credits: {
						enabled: false
					}
				}
			}]
		}
	});
}

function getData(data, year) {
	var arr = [];
	var first = Object.keys(data)[0];
	for (var i in data[first]) {
		var obj = {};
		obj.name = i;
		obj.data = [];
		for (var j in data) {
			console.log(data[j][i][year]);			
			obj.data.push(parseFloat(data[j][i][year].replace('.', '')) ? parseFloat(data[j][i][year].replace('.', '')) : 0 )
		}
		arr.push(obj);
	}
	return arr;
}
/*var getDataTable = function (tableBody, startColumn, endColumn) {
        var arr = [];
        var parent = {};
        tableBody.find('tr').each(function () {
        	var j = 2005;
        	var name  = $(this).find('th').text();
            var obj = {},
                $td = $(this).find('td');
            for (var i = startColumn; i <= endColumn; i++) {
                obj[++j] = $td.eq(i).text()
            }
            parent[name] = obj;

            // arr.push(parent[name]);
            console.log('\n');
        });
        console.log(JSON.stringify(parent));
        return arr;
    };*/