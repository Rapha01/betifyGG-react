import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useColors from '../../hooks/useColors';
import ReactApexChart from 'react-apexcharts';

const polarChartOptions = {
    chart: {
        width: 450,
        height: 450,
        type: 'polarArea'
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: true,
        fontSize: '14px',
        fontFamily: `'Roboto', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            radius: 5
        },
        itemMargin: {
            horizontal: 25,
            vertical: 4
        }
    },
    responsive: [
        {
            breakpoint: 450,
            chart: {
                width: 280,
                height: 280
            },
            options: {
                legend: {
                    show: false,
                    position: 'bottom'
                }
            }
        }
    ]
};

//-----------------------|| POLAR CHART ||-----------------------//

const ApexPolarChart = (props) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const { answerColors } = useColors();
    const { navType } = customization;
    const { bet } = props;
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState(polarChartOptions);

    
    React.useEffect(() => {
        const primary = theme.palette.text.primary;
        const darkLight = theme.palette.dark.light;
        const grey200 = theme.palette.grey[200];
        const backColor = theme.palette.background.paper;

        let values = [];
        //console.log('AAAAA', bet.catalogue_answers.reduce((prev, a) => prev + parseFloat(a.inPot.$numberDecimal),0));
        if (bet.catalogue_answers.reduce((prev, a) => prev + parseFloat(a.inPot.$numberDecimal),0) === 0)
            values = new Array(bet.catalogue_answers.length).fill(1);
        else
            values = bet.catalogue_answers.map((a) => a.inPot.$numberDecimal);
        
        setSeries(values);

        setOptions((prevState) => ({
            ...prevState,
            colors: answerColors,
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                },
                show: false
            },
            grid: {
                borderColor: navType === 'dark' ? darkLight + 20 : grey200
            },            
            legend: {
                show: false,
                labels: {
                    colors: 'grey.500'
                },
                customLegendItems: bet.catalogue_answers.map((a) => a.title),
            },
            labels: bet.catalogue_answers.map((a) => a.title),
            stroke: {
                colors: [backColor]
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0,
                        strokeColor: navType === 'dark' ? darkLight + 20 : grey200
                    },
                    spokes: {
                        strokeWidth: 0,
                        connectorColors: navType === 'dark' ? darkLight + 20 : grey200
                    }
                }
            }
        }));
    }, [navType, theme, bet]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="polarArea" />
        </div>
    );
};

export default ApexPolarChart;
