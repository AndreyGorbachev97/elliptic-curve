import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import {
    requestArrayPoints,
    requestPointsSumm,
    requestPointsMulti,
    requestResultDH,
    requestResultMA,
    requestResultElGam
} from '../../action/index';
import { bindActionCreators } from 'redux';
import PointsComponent from './PointsComponent';
import DiffiHelman from './DiffiHelman';
import MessiAmur from './MessiAmur';
import SummaPoints from './SummaPoints';
import MultiPoints from './MultiPoints';
import ElGaMal from './ElGaMal';


class ElepticWeb extends Component {

    state = { 
        a: '',
        b: '',
        mod: '',

        x1: '',
        y1: '',
        x2: '',
        y2: '',

        y_mult: '',
        x_mult: '',
        mult: '',

        xDH: '',
        yDH: '',
        secret_keyA_DH: '',
        secret_keyB_DH: '',

        xMA: '',
        yMA: '',
        eA: '',
        eB: '',

        show_points: false,
    }

    render(){
        const handleChange = name => event => {
            this.setState({ [name]: event.target.value });
        };

        const {a, b, mod, x1, y1, x2, y2, y_mult, x_mult, mult, show_points,
            xDH, yDH, eB, eA, xMA, yMA, secret_keyA_DH, secret_keyB_DH} = this.state
        const {array_points, array_modul, discriminant, test_ferma, summa, multi, resultDH, resultMA, resultElGam} = this.props;
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
                        <Grid item xs={12} sm={2}>
                            <TextField
                                fullWidth
                                label="mod"
                                value={mod}
                                onChange={handleChange('mod')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button color="primary" variant="outlined" onClick={() => {this.setState({show_points: !show_points})}}>
                                {show_points ? 'Скрыть точки' : 'Показать точки'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button color="primary" variant="outlined" onClick={() => {this.props.requestArrayPoints({m: Number(mod), a: Number(a), b: Number(b)}) }}>
                                считать
                            </Button>
                        </Grid>
                        
                      
                    </Grid>                      
                        {
                            discriminant &&
                           <div>
                               <Grid container spacing={24} style={{marginLeft: '5%', width: '90%'}}> 

                                    {show_points &&
                                    <PointsComponent
                                        test_ferma={test_ferma}
                                        discriminant={discriminant}
                                        array_modul={array_modul}
                                        array_points={array_points}
                                    />}   

                                    <SummaPoints
                                        x1={x1}
                                        y1={y1}
                                        x2={x2}
                                        y2={y2}
                                        mod={mod}   
                                        summa={summa}                       
                                        handleChange={handleChange}
                                        requestPointsSumm={this.props.requestPointsSumm}
                                    />
                                    <MultiPoints
                                        a={a}
                                        x_mult={x_mult}
                                        y_mult={y_mult}
                                        mod={mod}
                                        summa={summa}
                                        mult={mult}
                                        multi={multi}
                                        handleChange={handleChange}
                                        requestPointsMulti={this.props.requestPointsMulti}
                                    />                   
                                    <DiffiHelman
                                        secret_keyA_DH={secret_keyA_DH}
                                        secret_keyB_DH={secret_keyB_DH}
                                        xDH={xDH}
                                        yDH={yDH}
                                        a={a}
                                        m={mod}
                                        handleChange={handleChange}
                                        resultDH={resultDH}
                                        requestResultDH={this.props.requestResultDH}
                                    />
                                    <MessiAmur
                                        xMA={xMA}
                                        yMA={yMA}
                                        eA={eA}
                                        eB={eB}
                                        numb_points={array_points[0].number_points}
                                        a={a}
                                        m={mod}
                                        handleChange={handleChange}
                                        resultMA={resultMA}
                                        requestResultMA={this.props.requestResultMA}
                                    />
                                    <ElGaMal
                                        a={a}
                                        m={mod}
                                        resultElGam={resultElGam}
                                        requestResultElGam={this.props.requestResultElGam}
                                    />
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
        resultDH: state.answers.resultDH || {},
        resultMA: state.answers.resultMA || {},
        resultElGam: state.answers.resultElGam || {},
    }),
    dispatch => bindActionCreators({
        requestArrayPoints: requestArrayPoints,
        requestPointsSumm: requestPointsSumm,
        requestPointsMulti: requestPointsMulti, 
        requestResultDH: requestResultDH,
        requestResultMA: requestResultMA,
        requestResultElGam: requestResultElGam
    }, dispatch)
)(ElepticWeb)