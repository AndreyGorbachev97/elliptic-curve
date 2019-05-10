import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {discriminant, arrayPoints, arrayOfSquaresModulo, test_ferma, sum_points, multiply_points} from './scripts';
import Charts from './Charts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import {requestArrayPoints, requestPointsSumm, requestPointsMulti} from '../../action/index';
import { bindActionCreators } from 'redux';

class ElepticWeb extends Component {

    state = { 
        a: '',
        b: '',
        mod: '',

        x1: '',
        y1: '',
        x2: '',
        y2: '',
        modS: '',
        modM: '',

        y_mult: '',
        x_mult: '',
        mult: '',

        prostota: '',
        disc: false,
        array_points: [],
        array_squares_modulo: [],
        sum_p: '',
        mult_p: ''
    }

    render(){

        const handleChange = name => event => {
            this.setState({ [name]: event.target.value });
        };

        const {a, b, mod, x1, y1, x2, y2, y_mult, x_mult, mult} = this.state


        const {array_points, array_modul, discriminant, test_ferma, summa, multi} = this.props;
        return(

                    <Paper style={{margin: '5%', width: '90%', paddingBottom: '35px'}}>
                    <Grid container spacing={24} style={{marginLeft: '5%', width: '90%'}}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="a"
                                value={a}
                                onChange={handleChange('a')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="b"
                                value={b}
                                onChange={handleChange('b')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="mod"
                                value={mod}
                                onChange={handleChange('mod')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button color="primary" onClick={() => {this.props.requestArrayPoints({m: mod, a: a, b: b}) }}>
                                считать
                            </Button>
                        </Grid>
                      
                    </Grid>                      
                        {
                            discriminant &&
                           <div>
                               <Grid container spacing={24} style={{marginLeft: '5%', width: '90%'}}>

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
                                    <Paper square elevation={8}>
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
                                        <Paper square elevation={8}>
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
                                    



                                    <Grid item xs={12} sm={12}>
                                        <Paper square elevation={8}>
                                        <Grid container spacing={24} style={{marginLeft: '5%', width: '90%', marginBottom: '1%'}}>
                                                <Grid item xs={1} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="x_mult"
                                                        value={x_mult}
                                                        onChange={handleChange('x_mult')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={1} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="y_mult"
                                                        value={y_mult}
                                                        onChange={handleChange('y_mult')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={1} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="mult"
                                                        value={mult}
                                                        onChange={handleChange('mult')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={6} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="результат"
                                                        value={ multi.x ? ` P( ${x_mult} , ${y_mult} ) * ${mult} = P( ${multi.x} , ${multi.y} )` : ''}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={3}>
                                                    <Button color="primary" onClick={() => {
                                                        this.props.requestPointsMulti({
                                                            p:{x: Number(x_mult), y: Number(y_mult) },
                                                            a: Number(a),                                                 
                                                            mult: Number(mult),
                                                            m: Number(mod),
                                                        })
                                                    }}>
                                                        считать
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Paper>             
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Paper square elevation={8}>
                                            <Grid container spacing={24} style={{marginLeft: '5%', width: '90%'}}>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="x1"
                                                        value={x1}
                                                        onChange={handleChange('x1')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="y1"
                                                        value={y1}
                                                        onChange={handleChange('y1')}
                                                        margin="normal"
                                                        type='number'
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="x2"
                                                        value={x2}
                                                        onChange={handleChange('x2')}
                                                        margin="normal"
                                                        type='number'
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={2}>
                                                    <TextField
                                                        fullWidth
                                                        label="y2"
                                                        value={y2}
                                                        onChange={handleChange('y2')}
                                                        margin="normal"
                                                        type='number'
                                                    />
                                                </Grid>
                                             
                                                <Grid item xs={4} sm={4}>
                                                    <TextField
                                                        fullWidth
                                                        label="результат"
                                                        value={ summa.x ? ` P( ${x1} , ${y1} ) + P( ${x2} , ${y2} ) = P( ${summa.x} , ${summa.y} )` : ''}
                                                        margin="normal"
                                                    />
                                                </Grid> 
                                                <Grid item xs={12} sm={3}>
                                                    <Button color="primary" onClick={
                                                        () => {this.props.requestPointsSumm({
                                                            p1: {x: Number(x1), y:Number(y1) },
                                                            p2:{x: Number(x2), y: Number(y2)},
                                                            m: Number(mod)
                                                        })}
                                                    }>
                                                        считать
                                                    </Button>
                                                </Grid>
                                            </Grid>                    
                                        </Paper>                                       
                                    </Grid>

                                    

                                </Grid>                          
                            </div>     
                        }                                
                    </Paper>
        )
    }
}

export default connect(
    state => ({
        discriminant: state.answers.discriminant || '',
        test_ferma: state.answers.test_ferma || '',
        array_points: state.answers.array_points || [],
        array_modul: state.answers.array_modul || [],
        summa: state.answers.summa || {},
        multi: state.answers.multi || {},
    }),
    dispatch => bindActionCreators({
        requestArrayPoints: requestArrayPoints,
        requestPointsSumm: requestPointsSumm,
        requestPointsMulti: requestPointsMulti
    }, dispatch)
)(ElepticWeb)