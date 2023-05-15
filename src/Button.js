import './App.css';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { CSVLink } from 'react-csv';
const URL = "https://www.terriblytinytales.com/test.txt";
let tinytext="";

function Button() {
  const [chartOptions, setChartOptions] = useState(null);
  const [csvData, setCsvData] = useState(null);
  const GetTiny = async () => {
    
    fetch(URL).then((response)=>{ 
  
      return response.text(); 
    }).then((data)=>{
      tinytext=data;
      let arr=tinytext.split(/\s+/);
      var hashMap = {};
      for (var i = 0; i < arr.length; i++) {
        if(!hashMap[arr[i]]){
        hashMap[arr[i]] = 1;
        }else{
          hashMap[arr[i]]+=1;
        }
      }
      const sortedHashMap = Object.entries(hashMap).sort((a, b) => b[1] - a[1]).slice(0, 20);
      console.log(sortedHashMap);
      const labels = sortedHashMap.map(([word, ]) => word); // counting the first item of touples
      const values = sortedHashMap.map(([, count]) => count); //  counting the second item of the touple
      console.log(labels, values);
      setChartOptions({
          chart: {
              type: 'bar',
              height: 400,
          },
          series: [{ data: values }],
          xaxis: {
              categories: labels,
          },
          yaxis: {
              title: {
                  text: 'Frequency',
              },
          },
          });

      setCsvData(labels.map((label, index) => ({ label, value: values[index] })));
  });
  };
  return (
    <div>
      <button className='button' onClick={GetTiny} >Submit</button>
      {chartOptions && (
                <>
                    <Chart options={chartOptions} series={chartOptions.series} type="bar" height={400}  />
                    <button className='button'><CSVLink style={{ color: "#fff", textDecoration: "none" }} data={csvData} filename={'histogram.csv'}>Export</CSVLink></button>
                </>
            )}
    </div>
  );
}

export default Button;
