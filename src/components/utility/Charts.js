import React from 'react'
import ReactApexChart from 'react-apexcharts'
function Charts(props) { 


    const state = {

        series: [{
            name: 'Net Profit',
            data: props.userChartData.map(user => user.winningAmt)
        }, {
            name: 'Investment',
            data:props.userChartData.map(user => user.investmentAmt)
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: props.userChartData.map(user => user.firstName),
            },
            yaxis: {
                title: {
                    text: 'Rupees'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "₹" + val
                    }
                }
            }
        },


    };
    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    )

}
export default Charts


