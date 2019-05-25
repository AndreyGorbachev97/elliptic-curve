import React, { Component, Fragment } from 'react';
import Charts from './Charts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class PointsComponent extends Component {

    render() { 
        const {array_points, array_modul, discriminant, test_ferma, summa, multi} = this.props;
        return(
            <Fragment>
                <Grid item xs={12} sm={6}>
                    <Paper square elevation={8}>
                        <div style={{height: '300px', overflowY: 'scroll'}}>
                            <div>{test_ferma} </div>
                            <div>дискримнант равен {discriminant}</div>
                            {array_modul && array_modul.map((el, i) => {
                                return(
                                    <div key={i}>{`${i}^2 = ${el}`}</div>
                                )
                            })}

                            {array_points && array_points.map((el, i) => {
                                return(
                                    <div key={i}>
                                    {`
                                    x${i} y^2 = ${el.y_2} 
                                    P${i} = (${el.points[0] ? el.points[0].index : '-'}, ${el.points[0] ? el.points[0].point : '-'})
                                    -P${i} = (${el.points[1] ? el.points[1].index : '-'}, ${el.points[1] ? el.points[1].point : '-'})
                                    `}             
                                    </div>
                                )
                            })}
                            <div>#E = {array_points[0].number_points}</div>
                        </div>                        
                    </Paper>  
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper square elevation={8}>
                            <Charts
                                data={array_points || []}
                            />
                    </Paper>     
                </Grid>      
                
                <Grid item xs={12} sm={6}>
                    <Paper square elevation={8} style={{paddingBottom: '0.5%'}}>
                        <Table style={{marginLeft: '5%', width: '90%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>x^2</TableCell>
                                    <TableCell align='left'>значение</TableCell>                              
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {array_modul && array_modul.map((el, i) => (
                                <TableRow key={i}>
                                    <TableCell>{`${i}^2`}</TableCell>
                                    <TableCell align='left'>{el}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                            </Table>
                    </Paper>
                </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper square elevation={8}  style={{paddingBottom: '0.5%'}}>
                            <Table style={{marginLeft: '5%', width: '90%'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>x_i</TableCell>
                                        <TableCell align='left'>y^2</TableCell>            
                                        <TableCell align='left'>точка P</TableCell> 
                                        <TableCell align='left'>точка -P</TableCell>                     
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {array_points && array_points.map((el, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{` x${i}`}</TableCell>
                                        <TableCell align='left'>{el.y_2}</TableCell>
                                        <TableCell align='left'>
                                            {`(${el.points[0] ? el.points[0].index : '-'}, ${el.points[0] ? el.points[0].point : '-'})`}
                                        </TableCell>
                                        <TableCell align='left'>
                                            {`(${el.points[1] ? el.points[1].index : '-'}, ${el.points[1] ? el.points[1].point : '-'})`}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid> 
            </Fragment>
                 
        )
    }
}

export default PointsComponent