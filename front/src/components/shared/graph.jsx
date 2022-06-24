import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Chart from 'react-apexcharts'

export default (props) => {
    const state = {
        series: [{
            name: 'Pontuação',
            data: props.valores
        }],
        options: {
            // theme: {
            //     palette: 'palette6' // upto palette10
            //   },
            chart: {
                type: 'bar',
                height: 400,
            },
            legend: {
                show: false,
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: false,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: [
                '#3366cc',
                '#dc3912',
                '#ff9900',
                '#109618',
                '#990099',
                '#0099c6',
                '#dd4477',
                '#66aa00',
                '#b82e2e',
                '#316395',
                '#994499',
                '#22aa99',
                '#aaaa11',
                '#6633cc',
                '#e67300',
                '#8b0707',
                '#651067',
                '#329262',
                '#5574a6',
                '#3b3eac'
            ],
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#000']
                },
            },
            title: {
                text: '',
                align: 'center',
                floating: true
            },
            xaxis: {
                categories: props.categories,
                labels: {
                    show: true,
                    rotate: -60,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 230,
                    style: {
                        colors: [],
                        fontSize: '13px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                },
            },
        },
    }

    return (
        <div className='graficoCont'>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height="450"
                width="100%"
            />
        </div>
    );
}