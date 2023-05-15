# Project link
https://terrible-tiny-tales-by-lucky.netlify.app/



# About Project
This is a React component that utilizes an URL to retrieve text data, carries out word frequency analysis on the data, and presents the results as a histogram via ApexCharts. Additionally, it offers the option to export the histogram data in CSV format.

# Usage
To utilize the Histogram component in our React component, we first import it into the file using the following code: import Button from './Button';. Then, we can incorporate the Histogram component into our React component's render method to render the histogram in the user interface




function App() {
  return (
    <div className="App">
      <Button/>
      
    </div>
  );
}

# Functionality
The Histogram component provides the following functionality:

1-When the "Submit" button is clicked, it fetches text data from the URL https://www.terriblytinytales.com/test.txt.
2-The fetched text data is converted to lowercase and split into words.
3-Word frequencies are calculated by counting the occurrences of each word.
4-The top 20 most frequent words are selected and sorted in descending order.
5-The chartOptions state variable is updated with the necessary configuration for ApexCharts to display a bar chart.
6-The csvData state variable is updated with an array of objects containing the label-value pairs for each word frequency.
7-The chartOptions and csvData are used to render the histogram chart and the "Export" button.
8-Clicking the "Export" button allows downloading the histogram data as a CSV file named "histogram.csv".

# Dependencies
1-react-apexcharts: For rendering the histogram chart.
2-react-csv: For exporting the histogram data as a CSV file.
# hosting
I hosted my project on netlify
