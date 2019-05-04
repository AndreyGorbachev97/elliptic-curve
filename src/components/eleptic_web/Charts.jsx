import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from 'recharts';

class Charts extends Component {
    render() {
        const data = this.props.data.reduce((acc, el, i) => {
          if(el.points[0]){
            acc.unshift({name: el.points[0].point, y: el.points[0].index})
          }
          if(el.points[1]){
            acc.push({name: el.points[1].point, y: el.points[1].index})
          }
          return acc
        },[])
        return(

          <LineChart
            layout="vertical"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type='number' />
            <Tooltip />
            <Legend />
            <Line dataKey="y" type='natural' stroke="#8884d8" />
          </LineChart>
        )
    }
}

export default Charts